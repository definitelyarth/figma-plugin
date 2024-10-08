import TextNodeTransformer from "./textNode.transformer";
import {
  CanvasNode,
  Color,
  FrameNode,
  DocumentNode as RktmDocumentNode,
  VectorNode,
} from "../types/rpf";
import { figmaFillsToRktmPaint } from "./utils";
import { VectorTransformer } from "./shapeNode.transformer";
import { Annotation, ExecutionContext, IdStore, RktmNodeType } from "./types";

class FigmaFrameToRktmFrame {
  executionContext: ExecutionContext;

  constructor(private input: globalThis.FrameNode) {
    const IdStore: IdStore = {
      TEXT: { map: new Map<string, string>(), lastId: -1 },
      SHAPE: { map: new Map<string, string>(), lastId: -1 },
      IMAGE: { map: new Map<string, string>(), lastId: -1 },
    };
    this.executionContext = {
      annotations: [],
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
      const vector = new VectorTransformer(
        node,
        xOffset,
        yOffset,
        this.executionContext
      );
      vector.export();
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
      const vector = new VectorTransformer(
        node,
        xOffset,
        yOffset,
        this.executionContext
      );
      vector.export();
    } else if (node.type === "TEXT") {
      TextNodeTransformer(node, this.executionContext, xOffset, yOffset);
    }
  }

  export(): { frame: FrameNode; annotations: Annotation[] } {
    this.recurse(this.input, 0, 0);
    return {
      frame: {
        backgroundColor: figmaFillsToRktmPaint(
          this.input,
          this.input.backgrounds
        ).data.paint,
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
      },
      annotations: this.executionContext.annotations,
    };
  }
}

export const transformCanvas = (page: PageNode) => {
  const frames: FrameNode[] = [];

  const framesData: Record<string, { annotations: Annotation[] }> = {};

  for (const frameNode of page.selection) {
    if (frameNode.type !== "FRAME") continue;
    const transformer = new FigmaFrameToRktmFrame(frameNode);
    const frameData = transformer.export();
    framesData[frameData.frame.id] = { annotations: frameData.annotations };
    frames.push(frameData.frame);
  }

  const RktmCanvas: CanvasNode = {
    id: page.id,
    link: "",
    name: page.name,
    type: "CANVAS",
    visible: true,
    children: frames,
    backgroundColor: figmaFillsToRktmPaint(page, page.backgrounds).data.paint
      .color as Color,
  };

  const RktmDocument: RktmDocumentNode = {
    id: figma.root.id,
    name: figma.root.name,
    link: "some-document-link",
    type: "DOCUMENT",
    children: [RktmCanvas],
    source: "figma",
  };

  return { doc: RktmDocument, annotations: framesData };
};
