import { ImageContainerJSON } from "rocketium-types-arth";
import { FigmaBaseNodeToRpfBaseElement } from "./baseNode";
import { ObjectFit } from "rocketium-types-arth/dist/ImageContainerTypes";
import { Annotation, WithAnnotations } from "./types";

class FigmaImageToImageContainer {
  constructor(
    private data: {
      node: RectangleNode | FrameNode;
      fill: ImagePaint;
      name: string;
      xOffset: number;
      yOffset: number;
    }
  ) {}

  transform(): WithAnnotations<ImageContainerJSON> {
    const annotations: Annotation[] = [];
    const baseElement = FigmaBaseNodeToRpfBaseElement({
      node: this.data.node,
      displayText: this.data.name,
      xOffset: this.data.xOffset,
      yOffset: this.data.yOffset,
    });
    const imageContainer: ImageContainerJSON = {
      ...baseElement.data.baseElement,
      id: this.data.fill.imageHash as string,
      type: "image-container",
      dataType: "IMAGE",
      src: this.data.fill.imageHash as string,
      objectPosition: "custom",
      imageScale: this.data.fill.scalingFactor as number,
      imageLeft: this.data.xOffset + this.data.node.x,
      imageTop: this.data.yOffset + this.data.node.y,
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
