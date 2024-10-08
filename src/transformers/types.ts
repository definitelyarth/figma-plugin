import { FrameChildNode } from "../types/rpf";

export type RktmNodeType = "TEXT" | "SHAPE" | "IMAGE";

export type IdStore = {
  [key in RktmNodeType]: { map: Map<string, string>; lastId: number };
};

export type WithAnnotation<T> = { annotations: Annotation[]; data: T };

export type AnnotationType = "info" | "error";

export type Annotation = {
  message: string;
  type: AnnotationType;
  element?: {
    id: string;
    name: string;
  };
};

export type ExecutionContext = {
  IdStore: IdStore;
  frameChildNodes: FrameChildNode[];
  annotations: Annotation[];
  generateIdForChildNode({
    type,
    hash,
  }: {
    type: RktmNodeType;
    hash: string;
  }): string;
  z: number;
};
