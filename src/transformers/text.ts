import { TextContainerJSON, TextStyle, WordStyle } from "rocketium-types";
import { Annotation, WithAnnotations } from "./types";
import { FigmaBaseNodeToRpfBaseElement } from "./baseNode";
import { TextStyles } from "src/types";
import { figmaAlignMentsToObjectPosition } from "./utils/layout";
import { figmaPaintsToRktmFills } from "./utils/colors";

class FigmaTextNodeToTextContainer {
  constructor(
    private data: {
      node: TextNode;
      name: string;
      xOffset: number;
      yOffset: number;
    }
  ) {}

  transform(): WithAnnotations<TextContainerJSON> {
    const annotations: Annotation[] = [];

    const baseNodeResult = FigmaBaseNodeToRpfBaseElement({
      xOffset: this.data.xOffset,
      yOffset: this.data.yOffset,
      node: this.data.node,
      displayText: this.data.name,
    });

    const baseStyleAndRuns = this.figmaBaseStyleAndOverrides(this.data.node);

    const textContainer: TextContainerJSON = {
      ...baseNodeResult.data.baseElement,
      ...baseStyleAndRuns.baseStyle,
      id: `text-container:${this.data.node.characters}`,
      type: "text-container",
      dataType: "TEXT",
      autoFit: false,
      autoFitSizes: [0, 0],
      serializedText: this.data.node.characters,
      fontMetaData: { fontId: "", fontUrl: "" },
      objectPosition: "custom",
      textleft: 0,
      textTop: 0,
      textHeight: 0,
      text: this.data.node.characters,
      textAlign: figmaAlignMentsToObjectPosition(
        this.data.node.textAlignHorizontal,
        this.data.node.textAlignVertical
      ),
      styles: [],
      wordStyle: baseStyleAndRuns.finalSegments,
    };
    annotations.push(...baseNodeResult.annotations);
    annotations.forEach((a) => {
      a.element = { id: this.data.node.id, name: this.data.name };
    });
    return { data: textContainer, annotations };
  }

  figamSegmentsToRktmRuns(node: TextNode) {
    const response: (WordStyle & { data: { t?: TextStyle } })[] = [];
    node.getStyledTextSegments(TextStyles).forEach((i) => {
      const rangeData = this.figmaTextNodeRangeToRpfTextAndWordStyle(
        node,
        i.start,
        i.end
      );
      response.push({
        id: new Date().toString(),
        data: {
          start: i.start,
          end: i.end,
          styles: rangeData.w,
          t: rangeData.t,
        },
      });
    });
    return response;
  }

  figmaTextNodeRangeToRpfTextAndWordStyle(
    node: TextNode,
    start: number,
    end: number
  ): { w: WordStyle["data"]["styles"]; t: TextStyle } {
    const fontSize = node.getRangeFontSize(start, end) as number;
    const fontFamily = node.getRangeFontName(start, end) as FontName;
    const fontWeight = node.getRangeFontWeight(start, end) as number;
    const lineHeight = node.getRangeLineHeight(start, end) as LineHeight;
    const fills = node.getRangeFills(start, end) as Paint[];
    const sFills = figmaPaintsToRktmFills(fills).data.fills;
    const textDecoration = node.getRangeTextDecoration(
      start,
      end
    ) as TextDecoration;
    const textCase = node.getRangeTextCase(start, end) as TextCase;
    const charSpacing = node.getRangeLetterSpacing(start, end) as LetterSpacing;

    const textStyle: TextStyle = {
      fontSize,
      fontFamily: fontFamily.family,
      fontWeight,
      lineHeight:
        lineHeight.unit === "PERCENT"
          ? lineHeight.value
          : lineHeight.unit === "PIXELS"
          ? lineHeight.value
          : 0,
      textFill: sFills.length > 0 ? sFills[0] : "rgba(0, 0, 0, 0)",
      linethrough: textDecoration === "STRIKETHROUGH",
      underline: textDecoration === "UNDERLINE",
      textCase:
        textCase === "ORIGINAL"
          ? "none"
          : textCase === "LOWER"
          ? "lowercase"
          : textCase === "TITLE"
          ? "titlecase"
          : textCase === "UPPER"
          ? "uppercase"
          : "none",
      overline: false,
      charSpacing: charSpacing.value,
      fontStyle:
        fontFamily.style.split(" ")[1]?.toLowerCase() === "italic"
          ? "italic"
          : "normal",
    };

    const style: WordStyle["data"]["styles"] = {
      fontSize,
      fontFamily: fontFamily.family,
      fontWeight: String(fontWeight),
      fill: sFills.length > 0 ? sFills[0] : "rgba(0, 0, 0, 0)",
      textDecoration,
      fontStyle:
        fontFamily.style.split(" ")[1]?.toLowerCase() === "italic"
          ? "italic"
          : "normal",
    };

    return { w: style, t: textStyle };
  }

  figmaBaseStyleAndOverrides(node: TextNode) {
    const segments = this.figamSegmentsToRktmRuns(node);
    const hashMap = new Map<string, { count: number; indexes: number[] }>();
    const finalSegments: WordStyle[] = [];
    var baseStyle: TextStyle;

    segments.forEach((run, idx) => {
      const hash = JSON.stringify(run.data.styles);
      if (hashMap.has(hash)) {
        hashMap.get(hash)!.count++;
        hashMap.get(hash)!.indexes.push(idx);
      } else {
        hashMap.set(hash, { count: 1, indexes: [idx] });
      }
    });

    let maxCount = 0;
    let maxCountIdx: number[] = [];

    hashMap.forEach((v, k) => {
      if (v.count > maxCount) {
        maxCount = v.count;
        maxCountIdx = v.indexes;
      }
    });

    baseStyle = segments[maxCountIdx[0]].data.t!;

    segments.forEach((run, idx) => {
      if (!maxCountIdx.includes(idx)) {
        delete run.data.t;
        finalSegments.push(run);
      }
    });

    return { finalSegments, baseStyle };
  }
}

export { FigmaTextNodeToTextContainer };
