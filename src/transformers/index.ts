import TextNodeTransformer from "./textNode.transformer";
import {
  CanvasNode,
  Color,
  FrameNode,
  DocumentNode as RktmDocumentNode,
  VectorNode,
} from "../types/rpf";
import { figmaFillsToRktmPaint } from "./utils";
import {
  ImageTransformer,
  ShapeNodeTransformer,
} from "./shapeNode.transformer";
import { ExecutionContext, IdStore, RktmNodeType } from "./types";

class FigmaFrameToRktmFrame {
  executionContext: ExecutionContext;

  constructor(private input: globalThis.FrameNode) {
    const IdStore: IdStore = {
      TEXT: { map: new Map<string, string>(), lastId: -1 },
      SHAPE: { map: new Map<string, string>(), lastId: -1 },
      IMAGE: { map: new Map<string, string>(), lastId: -1 },
    };
    this.executionContext = {
      frameChildNodes: [],
      IdStore,
      generateIdForChildNode({
        type,
        hash,
      }: {
        type: RktmNodeType;
        hash: string;
      }) {
        let id = `${type.toLowerCase()}:${this.IdStore[type].lastId + 1}`;
        const existingHashId = this.IdStore[type].map.get(hash);
        if (existingHashId !== undefined) return existingHashId;
        this.IdStore[type].map.set(hash, id);
        this.IdStore[type].lastId++;
        return id;
      },
      z: 0,
    };
  }

  recurse(
    node: globalThis.FrameNode | globalThis.GroupNode,
    xOffset: number,
    yOffset: number
  ) {
    if (node.type === "FRAME" && typeof node.fills !== "symbol") {
      let imageFound = false;
      for (const fill of node.fills) {
        if (fill.type === "IMAGE") {
          const imageNode = ImageTransformer(
            node,
            fill,
            xOffset,
            yOffset,
            ++this.executionContext.z
          );
          const id = this.executionContext.generateIdForChildNode({
            type: "IMAGE",
            hash: imageNode.imageUrl,
          });
          this.executionContext.frameChildNodes.push({ ...imageNode, id });
          imageFound = true;
        }
      }
      const paths = node.fillGeometry.map((d) => d.data);
      const id = this.executionContext.generateIdForChildNode({
        type: "SHAPE",
        hash: JSON.stringify(paths),
      });
      if (!imageFound) {
        const fill = figmaFillsToRktmPaint(node.fills);
        const vector: VectorNode = {
          height: node.height,
          id,
          name: node.name,
          paths,
          position: { x: xOffset + node.x, y: yOffset + node.y },
          type: "VECTOR",
          width: node.width,
          zIndex: ++this.executionContext.z,
          fill,
          rotation: node.rotation,
        };
        this.executionContext.frameChildNodes.push(vector);
      }
    }
    node.children.forEach((n) => {
      if (n.type === "FRAME") {
        this.recurse(n, xOffset + n.x, yOffset + n.y);
      } else if (n.type === "GROUP") {
        this.recurse(n, xOffset, yOffset);
      } else {
        this.transform(n, xOffset, yOffset);
      }
    });
  }

  transform(node: SceneNode, xOffset: number, yOffset: number) {
    if (
      node.type === "RECTANGLE" ||
      node.type === "POLYGON" ||
      node.type === "VECTOR" ||
      node.type === "ELLIPSE" ||
      node.type === "STAR" ||
      node.type === "LINE"
    ) {
      ShapeNodeTransformer(node, this.executionContext, xOffset, yOffset);
    } else if (node.type === "TEXT") {
      TextNodeTransformer(node, this.executionContext, xOffset, yOffset);
    }
  }

  export(): FrameNode {
    this.recurse(this.input, 0, 0);
    return {
      backgroundColor: figmaFillsToRktmPaint(this.input.backgrounds),
      id: this.input.id,
      link: "",
      name: this.input.name,
      type: "FRAME",
      children: this.executionContext.frameChildNodes,
      absoluteBoundingBox: {
        height: this.input.height,
        width: this.input.width,
        x: 0,
        y: 0,
      },
    };
  }
}

export const generateIdForChildNode = () => {};

export const transformCanvas = (page: PageNode) => {
  const frames: FrameNode[] = [];

  for (const frameNode of page.selection) {
    if (frameNode.type !== "FRAME") continue;
    const transformer = new FigmaFrameToRktmFrame(frameNode);

    frames.push(transformer.export());
  }

  const RktmCanvas: CanvasNode = {
    id: page.id,
    link: "",
    name: page.name,
    type: "CANVAS",
    visible: true,
    children: frames,
    backgroundColor: figmaFillsToRktmPaint(page.backgrounds).color as Color,
  };

  const RktmDocument: RktmDocumentNode = {
    id: figma.root.id,
    name: figma.root.name,
    link: "some-document-link",
    type: "DOCUMENT",
    children: [RktmCanvas],
    source: "figma",
  };

  return RktmDocument;
};
