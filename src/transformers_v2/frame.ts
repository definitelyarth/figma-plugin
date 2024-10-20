import { CanvasElementWithOverrides } from "rocketium-types-arth";
import { Annotation } from "./types";
import { FigmaShapeToPath } from "./shape";
import FigmaRectangleToRoundedRect from "./rectangle";
import { FigmaTextNodeToTextContainer } from "./text";
import FigmaImageToImageContainer from "./image";

class FigmaFrameToRktmSize {
  annotations: Annotation[];
  objects: Record<string, CanvasElementWithOverrides>;
  z: number;
  constructor(private node: FrameNode) {
    this.annotations = [];
    this.objects = {};
    this.z = 0;
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
  }) {
    if (node.type === "FRAME" && typeof node.fills === "object") {
      node.fills.forEach((fill) => {
        if (fill.type === "IMAGE") {
          const image = new FigmaImageToImageContainer({
            node,
            fill,
            name: node.name,
            xOffset,
            yOffset,
          });
          const imageContainer = image.transform();
          this.objects[imageContainer.data.id] = {
            ...imageContainer.data,
            zIndex: ++this.z,
            overrides: {},
          };
        }
      });
    }
    if (
      !isTopLevelFrame &&
      node.type === "FRAME" &&
      typeof node.fills !== "symbol" &&
      node.fills.findIndex(
        (paint) =>
          paint.type === "SOLID" ||
          paint.type === "GRADIENT_LINEAR" ||
          paint.type === "GRADIENT_RADIAL"
      ) !== -1 &&
      node.visible
    ) {
      const vector = new FigmaRectangleToRoundedRect({
        node: node,
        xOffset: xOffset - node.x,
        yOffset: yOffset - node.y,
        name: this.node.name,
      });
      const rect = vector.transform();
      this.objects[rect.data.id] = {
        ...rect.data,
        zIndex: ++this.z,
        overrides: {},
      };
    }
    for await (const n of node.children) {
      if (n.type === "FRAME") {
        await this.recurse({
          node: n,
          xOffset: xOffset + n.x,
          yOffset: yOffset + n.y,
        });
      } else if (n.type === "GROUP") {
        await this.recurse({ node: n, xOffset, yOffset });
      } else {
        await this.transform({ node: n, xOffset, yOffset });
      }
    }
  }

  async transform({
    node,
    xOffset,
    yOffset,
  }: {
    node: SceneNode;
    xOffset: number;
    yOffset: number;
  }) {
    if (
      node.type === "RECTANGLE" ||
      node.type === "POLYGON" ||
      node.type === "VECTOR" ||
      node.type === "ELLIPSE" ||
      node.type === "STAR" ||
      node.type === "LINE"
    ) {
      if (node.type === "RECTANGLE" && typeof node.fills === "object") {
        node.fills.forEach((fill) => {
          if (fill.type === "IMAGE") {
            const image = new FigmaImageToImageContainer({
              node,
              fill,
              name: node.name,
              xOffset,
              yOffset,
            });
            const imageContainer = image.transform();
            this.objects[imageContainer.data.id] = {
              ...imageContainer.data,
              zIndex: ++this.z,
              overrides: {},
            };
          }
        });
      }
      const fills = node.fills;
      if (
        typeof fills === "symbol" ||
        fills.findIndex(
          (paint) =>
            paint.type === "SOLID" ||
            paint.type === "GRADIENT_LINEAR" ||
            paint.type === "GRADIENT_RADIAL"
        ) === -1
      )
        return;
      const vector = new FigmaShapeToPath({
        node,
        xOffset,
        yOffset,
        name: node.name,
      });
      const pathJSON = vector.transform();
      this.objects[pathJSON.data.id] = {
        ...pathJSON.data,
        zIndex: ++this.z,
        overrides: {},
      };
    } else if (node.type === "TEXT") {
      const text = new FigmaTextNodeToTextContainer({
        node: node,
        name: node.name,
        xOffset,
        yOffset,
      });
      const textContainerJSON = text.transform();
      this.objects[textContainerJSON.data.id] = {
        ...textContainerJSON.data,
        zIndex: ++this.z,
        overrides: {},
      };
    }
  }

  async export(): Promise<{
    width: number;
    height: number;
    id: string;
    displayName: string;
    objects: Record<string, CanvasElementWithOverrides>;
  }> {
    await this.recurse({
      node: this.node,
      xOffset: 0,
      yOffset: 0,
      isTopLevelFrame: true,
    });

    return {
      id: this.node.id,
      displayName: this.node.name,
      width: this.node.width,
      height: this.node.height,
      objects: this.objects,
    };
  }
}

export default FigmaFrameToRktmSize;
