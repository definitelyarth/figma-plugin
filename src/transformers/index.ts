import TextNodeTransformer from "./textNode.transformer";
import { DocumentNode, FrameNode } from "../types/rpf";
import { figmaFillsToRktmPaint } from "./utils";
import { VectorTransformer } from "./shapeNode.transformer";
import {
  Annotation,
  ExecutionContext,
  IdStore,
  ImageMap,
  TransformOutput,
} from "./types";
import { AreSameVariant, generateSizeKey } from "src/clustering";
import { RocketiumPortableFormat } from "rocketium-types";

class FigmaFrameToRktmFrame {
  executionContext: ExecutionContext;

  constructor(
    private input: globalThis.FrameNode,
    idStore: IdStore,
    frameIdx: number,
    imageMap: ImageMap
  ) {
    this.executionContext = {
      figmaFrameId: this.input.id,
      frameIdx,
      annotations: [],
      frameChildNodes: [],
      IdStore: idStore,
      generateIdForChildNode({ type, hash }) {
        let id = `${type.toLowerCase()}:${this.IdStore[type].lastId + 1}`;
        const existingHashId = this.IdStore[type].map.get(hash);
        if (existingHashId !== undefined) return existingHashId;
        this.IdStore[type].map.set(hash, id);
        this.IdStore[type].lastId++;
        return id;
      },
      z: 0,
      imageMap,
    };
  }

  async recurse(
    node: globalThis.FrameNode | globalThis.GroupNode,
    xOffset: number,
    yOffset: number,
    isTopLevelFrame?: boolean
  ) {
    if (
      !isTopLevelFrame &&
      node.type === "FRAME" &&
      typeof node.fills !== "symbol" &&
      node.fills.length != 0 &&
      node.visible
    ) {
      const vector = new VectorTransformer(
        node,
        xOffset - node.x,
        yOffset - node.y,
        this.executionContext
      );
      vector.export();
    }
    for await (const n of node.children) {
      if (n.type === "FRAME") {
        await this.recurse(n, xOffset + n.x, yOffset + n.y);
      } else if (n.type === "GROUP") {
        await this.recurse(n, xOffset, yOffset);
      } else {
        await this.transform(n, xOffset, yOffset);
      }
    }
  }

  async transform(node: SceneNode, xOffset: number, yOffset: number) {
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
      await vector.export();
    } else if (node.type === "TEXT") {
      TextNodeTransformer(node, this.executionContext, xOffset, yOffset);
    }
  }

  async export(): Promise<{ frame: FrameNode; annotations: Annotation[] }> {
    await this.recurse(this.input, 0, 0, true);
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

export const transformCanvas = async (
  page: PageNode
): Promise<TransformOutput> => {
  const rpf: RocketiumPortableFormat = {
    schemaVersion: "1",
    metadata: {
      source: "figma",
      createdAt: new Date().toDateString(),
      name: "rpf",
    },
    canvasData: {
      metadata: {},
      variant: {
        sizes: { size1: {} },
        objects: {
          objectId: {
            type: "image-container",
          },
        },
      },
    },
  };

  const document: DocumentNode = {
    id: page.id,
    name: page.name,
    type: "DOCUMENT",
    children: [],
    source: "figma",
    visible: true,
  };

  const framesData: Record<
    string,
    { annotations: Annotation[]; name: string }
  > = {};
  const imageMap: ImageMap = {};

  const IdStore: IdStore = {
    TEXT: { map: new Map<string, string>(), lastId: -1 },
    SHAPE: { map: new Map<string, string>(), lastId: -1 },
    IMAGE: { map: new Map<string, string>(), lastId: -1 },
  };
  const frameIdToLocation: Record<
    string,
    { canvasIdx: number; frameIdx: number }
  > = {};
  let canvasId = 0;
  let idx = 0;
  for await (const frameNode of page.selection) {
    if (frameNode.type !== "FRAME" || !frameNode.visible) continue;
    const transformer = new FigmaFrameToRktmFrame(
      frameNode,
      IdStore,
      idx,
      imageMap
    );
    const frameData = await transformer.export();
    framesData[frameData.frame.id] = {
      annotations: frameData.annotations,
      name: frameData.frame.name,
    };
    let found = false;
    for (const [canvasIdx, variantArray] of document.children!.entries()) {
      if (found) break;
      for (const variant of variantArray.children!) {
        if (found) break;
        const areSame = AreSameVariant(variant, frameData.frame);
        if (areSame) {
          variantArray.children!.push(frameData.frame);
          found = true;
          frameIdToLocation[frameNode.id] = {
            canvasIdx,
            frameIdx: variantArray.children!.length - 1,
          };
        }
      }
    }
    if (!found) {
      document.children!.push({
        id: `${canvasId}`,
        type: "CANVAS",
        name: `variant-${canvasId}`,
        children: [frameData.frame],
        visible: true,
      });
      canvasId++;
      frameIdToLocation[frameNode.id] = {
        canvasIdx: document.children!.length - 1,
        frameIdx: 0,
      };
    }
  }

  return {
    doc: document,
    annotations: framesData,
    imageMap,
    frameIdToLocation,
  };
};
