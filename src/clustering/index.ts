const FIGMA_PAT = "ee";

type CustomNodeType = "TEXT" | "SOLID" | "IMAGE";
type ObjectType = TextNode | SolidPaint | ImagePaint;

const generateSizeKey = (width: number, height: number) => {
  return `${width}x${height}`;
};

const Compare: Record<CustomNodeType, (a: any, b: any) => boolean> = {
  TEXT: (a: TextNode, b: TextNode) => a.characters === b.characters,
  SOLID: (a: SolidPaint, b: SolidPaint) =>
    a.color.r === b.color.r &&
    a.color.g === b.color.g &&
    a.color.b === b.color.b,
  IMAGE: (img1: ImagePaint, img2: ImagePaint) =>
    img1.imageHash === img2.imageHash,
} as const;

const areSameVariant = (frameA: FrameNode, frameB: FrameNode) => {
  if (frameA.width === frameB.width && frameA.height === frameB.height)
    return false;

  const dataA = getNodesData(frameA);
  const dataB = getNodesData(frameB);

  let bigger: ReturnType<typeof getNodesData> = dataB;
  let smaller: ReturnType<typeof getNodesData> = dataA;

  if (dataA.length > dataB.length) {
    bigger = dataA;
    smaller = dataB;
  }

  let countMatched = 0;

  for (const smallerNode of smaller) {
    for (let i = 0; i < bigger.length; i++) {
      if (bigger[i].k === smallerNode.k) {
        const areNodesSame = Compare[smallerNode.k](
          smallerNode.obj,
          bigger[i].obj
        );
        if (areNodesSame) {
          countMatched++;
          bigger.splice(i, 1);
          break;
        }
      }
    }
  }
  return countMatched === smaller.length;
};

const getNodesData = (A: SceneNode) => {
  const nodes: { k: CustomNodeType; obj: ObjectType }[] = [];
  function recurse(node: SceneNode) {
    if (
      node.type === "RECTANGLE" ||
      node.type === "ELLIPSE" ||
      node.type === "POLYGON" ||
      node.type === "STAR" ||
      node.type === "TEXT"
    ) {
      if (typeof node.fills === "object") {
        node.fills.forEach((e) => {
          if (e.type == "IMAGE" || e.type == "SOLID")
            nodes.push({ k: e.type, obj: e });
        });
      }
      if (node.type === "TEXT") {
        nodes.push({ k: "TEXT", obj: node });
      }
    }
    if (
      node.type === "SECTION" ||
      node.type === "GROUP" ||
      node.type === "FRAME" ||
      node.type === "COMPONENT"
    ) {
      node.children.forEach((node) => recurse(node));
    }
  }
  recurse(A);
  return nodes;
};

const getFramePreview = (fileKey: string, frameId: string) =>
  fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${frameId}`, {
    headers: {
      "X-FIGMA-TOKEN": FIGMA_PAT,
    },
  })
    .then((data) => data.json())
    .then((d: { images: { [key: string]: string } }) => {
      return d.images[frameId];
    });

export const performClustering = async () => {
  const variants: {
    size: string;
    frame: { frame: FrameNode; preview: string };
  }[][] = [];

  for await (const e of figma.currentPage.selection) {
    if (e.type !== "FRAME") return;
    let found = false;
    const sizeKey = generateSizeKey(e.width, e.height);
    const preview = await getFramePreview(figma.fileKey as string, e.id);
    const frameObj = { preview, frame: e };
    variants.forEach((variantArray) => {
      if (found) return;
      variantArray.forEach((variantSize) => {
        if (found) return;
        const areSame = areSameVariant(variantSize.frame.frame, e);
        if (areSame) {
          variantArray.push({
            size: sizeKey,
            frame: frameObj,
          });
          found = true;
          return;
        }
      });
    });
    if (!found) {
      variants.push([{ size: sizeKey, frame: frameObj }]);
    }
  }

  return variants;
};
