type OpenTypeFeatures = {
  SUPS?: boolean;
  SUBS?: boolean;
};

export type CustomTextNode = TextNode & {
  openTypeFeatures: symbol | OpenTypeFeatures;
};

export const TextStyles: (
  | "fontSize"
  | "fontName"
  | "fontWeight"
  | "textDecoration"
  | "textCase"
  | "lineHeight"
  | "letterSpacing"
  | "fills"
  | "textStyleId"
  | "fillStyleId"
  | "listOptions"
  | "indentation"
  | "hyperlink"
  | "openTypeFeatures"
)[] = [
  "fontSize",
  "fontName",
  "fontWeight",
  "textDecoration",
  "textCase",
  "lineHeight",
  "letterSpacing",
  "fills",
  "textStyleId",
  "fillStyleId",
  "listOptions",
  "indentation",
  "hyperlink",
  "openTypeFeatures",
];

export type VariantClusters = {
  size: string;
  frame: {
    frame: FrameNode;
    preview: string;
  };
}[][];
