import { FrameChildNode } from "../types/rpf";

export type RktmNodeType = "TEXT" | "SHAPE" | "IMAGE";

export type IdStore = {
  [key in RktmNodeType]: { map: Map<string, string>; lastId: number };
};

export type ExecutionContext = {
  IdStore: IdStore;
  frameChildNodes: FrameChildNode[];
  generateIdForChildNode({
    type,
    hash,
  }: {
    type: RktmNodeType;
    hash: string;
  }): string;
  z: number;
};
