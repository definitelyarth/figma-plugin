import { RoundedRectJSON } from "rocketium-types";
import { Annotation, WithAnnotations } from "./types";
import { FigmaBaseNodeToRpfBaseElement } from "./baseNode";

class FigmaRectangleToRoundedRect {
  constructor(
    private data: {
      node: RectangleNode | FrameNode;
      name: string;
      xOffset: number;
      yOffset: number;
    }
  ) {}

  transform(): WithAnnotations<RoundedRectJSON> {
    const annotations: Annotation[] = [];
    const baseNodeResult = FigmaBaseNodeToRpfBaseElement({
      xOffset: this.data.xOffset,
      yOffset: this.data.yOffset,
      node: this.data.node,
      displayText: this.data.name,
      supportImage: true,
    });
    const hash = `rounded-rect:${this.data.node.fillGeometry
      .map((d) => d.data)
      .toString()}:${baseNodeResult.data.baseElement.fill.toString()}`;
    const roundedRect: RoundedRectJSON = {
      ...baseNodeResult.data.baseElement,
      scale: 1,
      id: hash,
      type: "rounded-rect",
      dataType: "SHAPE",
    };
    annotations.push(...baseNodeResult.annotations);
    annotations.forEach((a) => {
      a.element = { id: this.data.node.id, name: this.data.name };
    });
    return { data: roundedRect, annotations };
  }
}

export default FigmaRectangleToRoundedRect;
