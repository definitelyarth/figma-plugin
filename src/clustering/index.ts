import { FrameNode } from "src/types/rpf";

export const generateSizeKey = (width: number, height: number) => {
  return `${width}x${height}`;
};

export const AreSameVariant = (oframeA: FrameNode, oframeB: FrameNode) => {
  if (
    oframeA.absoluteBoundingBox.width === oframeB.absoluteBoundingBox.width &&
    oframeA.absoluteBoundingBox.height === oframeB.absoluteBoundingBox.height
  )
    return false;

  const frameA = { ...oframeA, children: [...oframeA.children!] };
  const frameB = { ...oframeA, children: [...oframeB.children!] };

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
  return countMatched === smaller.children!.length;
};
