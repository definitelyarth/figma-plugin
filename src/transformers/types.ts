import { DocumentNode, FrameChildNode } from "../types/rpf";

export type RktmNodeType = "TEXT" | "SHAPE" | "IMAGE";

export type IdStore = {
  [key in RktmNodeType]: { map: Map<string, string>; lastId: number };
};

export type WithAnnotations<T> = { annotations: Annotation[]; data: T };

export type AnnotationType = "info" | "error";

export type Annotation = {
  message: string;
  type: AnnotationType;
  element?: {
    id: string;
    name: string;
  };
};

export type ImageState = "PENDING" | "IN_PROGRESS" | "ERROR" | "COMPLETED";

export type ImageMap = Record<
  string,
  {
    state: ImageState;
    uploadedUrl?: string;
    images: {
      figmaFrameId: string;
      idx: number;
    }[];
    name: string;
    bytes: Uint8Array;
    isExport?: boolean;
  }
>;

export type ExecutionContext = {
  figmaFrameId: string;
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
  imageMap: ImageMap;
  frameIdx: number;
};

export type TransformOutput = {
  doc: DocumentNode;
  annotations: Record<
    string,
    {
      annotations: Annotation[];
      name: string;
    }
  >;
  imageMap: ImageMap;
  frameIdToLocation: Record<string, { canvasIdx: number; frameIdx: number }>;
};
