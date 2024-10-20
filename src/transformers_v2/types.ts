import { CanvasElementWithOverrides } from "rocketium-types-arth";

export type ShapeNode =
  | RectangleNode
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

export type FigmaBaseNode = TextNode | ShapeNode | FrameNode;

export type Variant = {
  id: string;
  sizes: Size[];
};

export type WithAnnotations<T> = { data: T; annotations: Annotation[] };

export type AnnotationType = "info" | "error";

export type Annotation = {
  message: string;
  type: AnnotationType;
  element?: {
    id: string;
    name: string;
  };
};

export type Size = {
  id: string;
  width: number;
  height: number;
  objects: SizeObject[];
};

export type SizeObject = CanvasElementWithOverrides;
