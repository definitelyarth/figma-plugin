import {
  CanvasElementWithOverrides,
  RocketiumPortableFormat,
} from "rocketium-types";

export type ShapeNode =
  | EllipseNode
  | LineNode
  | PolygonNode
  | StarNode
  | VectorNode;

export type ClusterVariant = {
  width: number;
  height: number;
  id: string;
  displayName: string;
  objects: Record<string, CanvasElementWithOverrides>;
};

export type Context = {
  images: {
    hash: null | string;
    nodeIds: string[];
    isRealHash: boolean;
    bytes: Uint8Array;
  }[];
};

export type FigmaBaseNode =
  | TextNode
  | ShapeNode
  | FrameNode
  | RectangleNode
  | InstanceNode;

export type Variant = {
  id: string;
  sizes: Size[];
};

export type WithAnnotations<T> = { data: T; annotations: Annotation[] };

export type AnnotationType = "info" | "error";

export type Annotation = {
  message: string;
  type: AnnotationType;
};

export type Size = {
  id: string;
  width: number;
  height: number;
  objects: SizeObject[];
};

export type SizeObject = CanvasElementWithOverrides;
export type TransformOutput = {
  rpf: RocketiumPortableFormat;
  ctx: Context;
  frames: Record<
    string,
    { annotations: Annotation[]; name: string; id: string }
  >;
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
