import {
  TextContainerJSON,
  TextStyle,
  TextStyleRun,
} from "rocketium-types-arth";
import { Annotation, WithAnnotations } from "./types";
import { FigmaBaseNodeToRpfBaseElement } from "./baseNode";
import { TextStyles } from "src/types";
import { figmaAlignMentsToObjectPosition } from "./utils/layout";

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
      objectPosition: figmaAlignMentsToObjectPosition(
        this.data.node.textAlignHorizontal,
        this.data.node.textAlignVertical
      ),
      textleft: 0,
      textTop: 0,
      textHeight: 0,
      text: this.data.node.characters,
      textAlign: "",
      styles: [],
      styleRuns: baseStyleAndRuns.finalSegments,
    };

    return { data: textContainer, annotations };
  }

  figamSegmentsToRktmRuns(node: TextNode) {
    const response: TextStyleRun[] = [];
    node.getStyledTextSegments(TextStyles).forEach((i) => {
      response.push({
        type: "",
        start: i.start,
        end: i.end,
        length: i.end - i.start,
        style: this.figmaTextNodeRangeToRpfTextStyle(node, i.start, i.end),
      });
    });
    return response;
  }

  figmaTextNodeRangeToRpfTextStyle(
    node: TextNode,
    start: number,
    end: number
  ): TextStyle {
    const fontSize = node.getRangeFontSize(start, end) as number;
    const fontFamily = node.getRangeFontName(start, end) as FontName;
    const fontWeight = node.getRangeFontWeight(start, end) as number;
    const lineHeight = node.getRangeLineHeight(start, end) as LineHeight;
    const fills = node.getRangeFills(start, end) as Paint[];
    const textDecoration = node.getRangeTextDecoration(
      start,
      end
    ) as TextDecoration;
    const textCase = node.getRangeTextCase(start, end) as TextCase;
    const charSpacing = node.getRangeLetterSpacing(start, end) as LetterSpacing;

    const style: TextStyle = {
      fontSize,
      fontFamily: fontFamily.family,
      fontWeight,
      lineHeight:
        lineHeight.unit === "PERCENT"
          ? lineHeight.value
          : lineHeight.unit === "PIXELS"
          ? lineHeight.value
          : 0,
      textFill: fills.length > 0 ? fills[0] : "rgba(0, 0, 0, 0)",
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

    return style;
  }

  figmaBaseStyleAndOverrides(node: TextNode) {
    const segments = this.figamSegmentsToRktmRuns(node);
    const hashMap = new Map<string, { count: number; indexes: number[] }>();
    const finalSegments: TextStyleRun[] = [];
    var baseStyle: TextStyle;

    segments.forEach((run, idx) => {
      const hash = JSON.stringify(run.style);
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

    baseStyle = segments[maxCountIdx[0]].style as TextStyle;

    segments.forEach((run, idx) => {
      if (!maxCountIdx.includes(idx)) finalSegments.push(run);
    });

    return { finalSegments, baseStyle };
  }
}

export { FigmaTextNodeToTextContainer };