import { CanvasElementWithOverrides } from "rocketium-types";
import { Annotation, Context } from "./types";
import { FigmaShapeToPath } from "./shape";
import FigmaRectangleToRoundedRect from "./rectangle";
import { FigmaTextNodeToTextContainer } from "./text";
import FigmaImageToImageContainer from "./image";
import FigmaFrameToCreativeBox from "./creative_box";

class FigmaFrameToRktmSize {
  annotations: Annotation[];
  objects: Record<string, CanvasElementWithOverrides>;
  z: number;

  constructor(private node: FrameNode, private ctx: Context) {
    this.annotations = [];
    this.objects = {};
    this.z = 0;
  }

  async recurse({
    node,
    xOffset,
    yOffset,
  }: {
    node: FrameNode | GroupNode | InstanceNode;
    xOffset: number;
    yOffset: number;
  }) {
    if (node.type === "INSTANCE" || node.type === "FRAME") {
      if (node.clipsContent) {
        this.annotations.push({type: "info", message: "Content inside frames won't be clipped."})
      }
    }
    if (node.type === "FRAME" && typeof node.fills === "object") {
      
      for await (const fill of node.fills) {
        if (fill.type === "IMAGE") {
          const image = new FigmaImageToImageContainer({
            node,
            fill,
            name: node.name,
            xOffset,
            yOffset,
            ctx: this.ctx,
          });
          const imageContainer = await image.transform();
          this.objects[imageContainer.data.id] = {
            ...imageContainer.data,
            zIndex: ++this.z,
            overrides: {},
          };
        }
      }
    }

    for await (const n of node.children) {
      if (n.type === "FRAME" || n.type === "INSTANCE") {
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
    if (node.type === "RECTANGLE") {
      if (typeof node.fills !== "object") return;
      for (const fill of node.fills) {
        if (fill.type === "IMAGE") {
          const image = new FigmaImageToImageContainer({
            node,
            fill,
            name: node.name,
            xOffset,
            yOffset,
            ctx: this.ctx,
          });
          const imageContainer = await image.transform();
          this.objects[imageContainer.data.id] = {
            ...imageContainer.data,
            zIndex: ++this.z,
            overrides: {},
          };
          this.annotations.push(...imageContainer.annotations);
        }
      }
      if (
        node.fills.findIndex(
          (paint) =>
            paint.type === "SOLID" ||
            paint.type === "GRADIENT_LINEAR" ||
            paint.type === "GRADIENT_RADIAL"
        ) === -1
      )
        return;

      const rectangle = new FigmaRectangleToRoundedRect({
        node,
        name: node.name,
        xOffset,
        yOffset,
      });
      const rectangleJSON = rectangle.transform();
      this.objects[rectangleJSON.data.id] = {
        ...rectangleJSON.data,
        zIndex: ++this.z,
        overrides: {},
      };
      this.annotations.push(...rectangleJSON.annotations);
    } else if (
      node.type === "POLYGON" ||
      node.type === "VECTOR" ||
      node.type === "ELLIPSE" ||
      node.type === "STAR" ||
      node.type === "LINE"
    ) {
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
      this.annotations.push(...pathJSON.annotations);
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
      this.annotations.push(...textContainerJSON.annotations);
    }
  }

  async export(): Promise<{
    width: number;
    height: number;
    id: string;
    displayName: string;
    objects: Record<string, CanvasElementWithOverrides>;
  }> {
    const creativeBox = new FigmaFrameToCreativeBox({ node: this.node });
    const converted = creativeBox.transform();
    this.objects[converted.data.id] = {
      ...converted.data,
      zIndex: 0,
      overrides: {},
    };
    await this.recurse({
      node: this.node,
      xOffset: 0,
      yOffset: 0,
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
