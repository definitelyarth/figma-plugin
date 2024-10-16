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

export type Size = {
  name: string;
  imageData: Uint8Array;
};

export type Variant = {
  name: string;
  sizes: Size[];
};
