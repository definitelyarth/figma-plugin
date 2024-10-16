import { Cluster } from "src/transformers/types";
import { CanvasNode, FrameNode } from "src/types/rpf";

export const generateSizeKey = (width: number, height: number) => {
  return `${width}x${height}`;
};

export const AreSameVariant = (frameA: FrameNode, frameB: FrameNode) => {
  if (
    frameA.absoluteBoundingBox.width === frameB.absoluteBoundingBox.width &&
    frameA.absoluteBoundingBox.height === frameB.absoluteBoundingBox.height
  )
    return false;

  let bigger = frameA;
  let smaller = frameB;

  if (frameB.children!.length > frameA.children!.length) {
    bigger = frameB;
    smaller = frameA;
  }

  let countMatched = 0;

  for (const smallerNode of smaller.children!) {
    for (let i = 0; i < bigger.children!.length; i++) {
      if (bigger.children![i].type === smallerNode.type) {
        if (bigger.children![i].id === smallerNode.id) {
          countMatched++;
          bigger.children!.splice(i, 1);
          break;
        }
      }
    }
  }
  console.log({ countMatched, smaller, bigger });
  return countMatched === smaller.children!.length;
};
