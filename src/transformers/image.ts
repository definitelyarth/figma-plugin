import { ImageContainerJSON } from "rocketium-types";
import { FigmaBaseNodeToRpfBaseElement } from "./baseNode";
import { ObjectFit } from "rocketium-types/dist/ImageContainerTypes";
import { Annotation, Context, WithAnnotations } from "./types";
import { generateObjectId } from "src/utils/ID";
import { figmaTransformMatrixToTranslateAndRotation } from "./utils/layout";

class FigmaImageToImageContainer {
  constructor(
    private data: {
      ctx: Context;
      node: RectangleNode | FrameNode;
      fill: ImagePaint;
      name: string;
      xOffset: number;
      yOffset: number;
    }
  ) {}

  async transform(): Promise<WithAnnotations<ImageContainerJSON>> {
    const annotations: Annotation[] = [];
    const baseElement = FigmaBaseNodeToRpfBaseElement({
      node: this.data.node,
      displayText: this.data.name,
      xOffset: this.data.xOffset,
      yOffset: this.data.yOffset,
      supportImage: true,
    });
    annotations.push(...baseElement.annotations);
    let imageId = this.data.fill.imageHash;
    if (!imageId) imageId = generateObjectId();
    const storedObj = this.data.ctx.images.find((e) => e.hash === imageId);
    if (storedObj) {
      storedObj.nodeIds.push(this.data.node.id);
    } else {
      let bytes: Uint8Array | undefined;
      if (this.data.fill.imageHash !== null) {
        try {
          const image = figma.getImageByHash(this.data.fill.imageHash);
          bytes = await image?.getBytesAsync();
        } catch (e) {
          bytes = await this.data.node.exportAsync({ format: "PNG" });
        }
      } else {
        bytes = await this.data.node.exportAsync({ format: "PNG" });
      }
      if (!bytes) bytes = await this.data.node.exportAsync({ format: "PNG" });
      this.data.ctx.images.push({
        nodeIds: [this.data.node.id],
        hash: imageId,
        isRealHash: true,
        bytes,
      });
    }
    if (this.data.fill.scaleMode === "TILE")
      annotations.push({
        message: "Unsupported scaleMode: TILE. Usinng fill",
        type: "error",
      });
    const translateAndRotation =
      this.data.fill.imageTransform &&
      figmaTransformMatrixToTranslateAndRotation(this.data.fill.imageTransform);
    const imageContainer: ImageContainerJSON = {
      ...baseElement.data.baseElement,
      id: imageId as string,
      type: "image-container",
      dataType: "IMAGE",
      src: this.data.fill.imageHash as string,
      objectPosition: "custom",
      imageScale: this.data.fill.scalingFactor as number,
      imageLeft: translateAndRotation?.position.x || 0,
      imageTop: translateAndRotation?.position.y || 0,
      imageWidth: 0,
      imageHeight: 0,
      objectFit:
        this.data.fill.scaleMode === "TILE"
          ? "fill"
          : (this.data.fill.scaleMode.toLowerCase() as ObjectFit),
    };

    return { annotations, data: imageContainer };
  }
}

export default FigmaImageToImageContainer;
