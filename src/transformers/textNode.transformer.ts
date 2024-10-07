import { CustomTextNode, TextStyles } from "../types";
import {
  Border,
  Color,
  Paint as RktmPaint,
  TextNode as RktmTextNode,
  TextNode,
  TextStyleRun,
  TypeStyle,
} from "../types/rpf";
import { ExecutionContext } from "./types";
import { figmaEffectsToRktmTextEffects, figmaFillsToRktmPaint } from "./utils";

interface OpenTypeFeatures {
  SUPS?: boolean;
  SUBS?: boolean;
}

const figmaTextCaseToRktmTextCase = (
  figmaTextCase: TextCase
): TypeStyle["textCase"] => {
  if (
    figmaTextCase !== "LOWER" &&
    figmaTextCase !== "TITLE" &&
    figmaTextCase !== "UPPER"
  )
    return undefined;
  return figmaTextCase;
};

const figmaTextNodeToProperties = {
  color: figmaFillsToRktmPaint,
  fontFamily: (font: FontName): string => font.family,
  fontBaseline: (openTypeFeatures: OpenTypeFeatures): number =>
    openTypeFeatures.SUBS ? 2 : openTypeFeatures.SUPS ? 1 : 0,
  italic: (font: FontName): boolean =>
    font.style.split(" ")[1]?.toLowerCase() === "italic",
  fontWeight: (fontWeight: number): TypeStyle["fontWeight"] =>
    fontWeight as TypeStyle["fontWeight"],
  backgroundColor: (): RktmPaint => {
    return {
      blendMode: "PASS_THROUGH",
      type: "SOLID",
      opacity: 0,
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      },
    };
  },
  textCase: figmaTextCaseToRktmTextCase,
  letterSpacing: (spacing: LetterSpacing) => spacing.value,
  textAlignHorizontal: (h: RktmTextNode["styles"]["textAlignHorizontal"]) =>
    h as Exclude<RktmTextNode["styles"]["textAlignHorizontal"], undefined>,
  textAlignVertical: (v: RktmTextNode["styles"]["textAlignVertical"]) =>
    v as Exclude<RktmTextNode["styles"]["textAlignVertical"], undefined>,
  fontSize: (fontSize: number) => fontSize,
  fontPostScriptName: () => "",
  paragraphIndent: (i: number) => i,
  paragraphSpacing: (i: number) => i,
  lineHeightPercent: (lh: LineHeight) => (lh.unit === "PERCENT" ? lh.value : 0),
  lineHeightPx: (lh: LineHeight) => (lh.unit === "PIXELS" ? lh.value : 0),
  lineHeightUnit: (lh: LineHeight) =>
    lh.unit === "PERCENT" ? "FONT_SIZE_%" : "PIXELS",
  textDecoration: (td: TextDecoration) => (td === "NONE" ? undefined : td),
};

const figamSegmentsToRktmRuns = (node: globalThis.TextNode) => {
  const response: RktmTextNode["styleRuns"] = [];
  node.getStyledTextSegments(TextStyles).forEach((i) => {
    response.push({
      type: "",
      start: i.start,
      end: i.end,
      length: i.end - i.start,
      style: figmaTextNodeToRktmTypeStyle(node, i.start, i.end),
    });
  });
  return response;
};

const figmaTextNodeToRktmTypeStyle = (
  node: globalThis.TextNode,
  start: number,
  end: number
): Partial<TypeStyle> => {
  const fills = node.getRangeFills(start, end) as Paint[];

  const fontName = node.getRangeFontName(start, end) as FontName;
  const fontBaseLine = node.getRangeOpenTypeFeatures(
    start,
    end
  ) as OpenTypeFeatures;

  const fontWeight = node.getRangeFontWeight(start, end) as number;
  const fontSize = node.getRangeFontSize(0, 1) as number;
  const textCase = node.getRangeTextCase(0, 1) as TextCase;
  const letterSpacing = node.getRangeLetterSpacing(0, 1) as LetterSpacing;
  const lineHeight = node.getRangeLineHeight(start, end) as LineHeight;
  const textDecoration = node.getRangeTextDecoration(
    start,
    end
  ) as TextDecoration;
  // const effects = node.

  return {
    color: figmaTextNodeToProperties.color(fills),
    fontFamily: figmaTextNodeToProperties.fontFamily(fontName),
    fontBaseline: figmaTextNodeToProperties.fontBaseline(fontBaseLine),
    italic: figmaTextNodeToProperties.italic(fontName),
    fontWeight: figmaTextNodeToProperties.fontWeight(fontWeight),
    fontSize: figmaTextNodeToProperties.fontSize(fontSize),
    backgroundColor: figmaTextNodeToProperties.backgroundColor(),
    textCase: figmaTextNodeToProperties.textCase(textCase),
    letterSpacing: figmaTextNodeToProperties.letterSpacing(letterSpacing),
    textAlignHorizontal: figmaTextNodeToProperties.textAlignHorizontal(
      node.textAlignHorizontal
    ),
    textAlignVertical: figmaTextNodeToProperties.textAlignVertical(
      node.textAlignVertical
    ),
    fontPostScriptName: figmaTextNodeToProperties.fontPostScriptName(),
    paragraphIndent: figmaTextNodeToProperties.paragraphIndent(
      node.paragraphIndent
    ),
    paragraphSpacing: figmaTextNodeToProperties.paragraphSpacing(
      node.paragraphSpacing
    ),
    lineHeightPercent: figmaTextNodeToProperties.lineHeightPercent(lineHeight),
    lineHeightPx: figmaTextNodeToProperties.lineHeightPx(lineHeight),
    lineHeightUnit: figmaTextNodeToProperties.lineHeightUnit(lineHeight),
    textDecoration: figmaTextNodeToProperties.textDecoration(textDecoration),
    effects: figmaEffectsToRktmTextEffects(node.effects),
    rotation: node.rotation,
  } satisfies Partial<TypeStyle>;
};

const figmaBaseStyleAndOverrides = (node: CustomTextNode) => {
  const segments = figamSegmentsToRktmRuns(node);
  const hashMap = new Map<string, { count: number; indexes: number[] }>();
  const finalSegments: TextStyleRun[] = [];
  var baseStyle: TypeStyle;

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

  baseStyle = segments[maxCountIdx[0]].style as TypeStyle;

  segments.forEach((run, idx) => {
    if (!maxCountIdx.includes(idx)) finalSegments.push(run);
  });

  return { finalSegments, baseStyle };
};

const TextNodeTransformer = (
  node: CustomTextNode,
  executionContext: ExecutionContext,
  xOffset: number,
  yOffset: number
) => {
  const { baseStyle, finalSegments } = figmaBaseStyleAndOverrides(node);

  const output: TextNode = {
    zIndex: ++executionContext.z,
    type: "TEXT",
    characters: node.characters,
    styles: baseStyle,
    id: "null",
    name: node.name,
    height: node.height,
    width: node.width,
    position: {
      x: node.x + xOffset,
      y: node.y + yOffset,
    },
    rotation: node.rotation,
    styleRuns: finalSegments,
    visible: node.visible,
  };

  const id = executionContext.generateIdForChildNode({
    type: "TEXT",
    hash: output.characters,
  });
  executionContext.frameChildNodes.push({ ...output, id } as TextNode);
};

export default TextNodeTransformer;
