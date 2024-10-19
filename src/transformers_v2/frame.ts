import { Annotation } from "./types";

class FigmaFrameToRktmSize {
  annotations: Annotation[];
  constructor(private node: FrameNode) {
    this.annotations = [];
  }

  async recurse({
    node,
    xOffset,
    yOffset,
    isTopLevelFrame,
  }: {
    node: FrameNode | GroupNode;
    xOffset: number;
    yOffset: number;
    isTopLevelFrame?: boolean;
  }) {}

  async transform({
    node,
    xOffset,
    yOffset,
  }: {
    node: SceneNode;
    xOffset: number;
    yOffset: number;
  }) {}
}
