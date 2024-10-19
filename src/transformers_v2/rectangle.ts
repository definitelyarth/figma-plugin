import { RoundedRectJSON } from "rocketium-types-arth";
import { WithAnnotations } from "./types";
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
    const baseNodeResult = FigmaBaseNodeToRpfBaseElement({
      xOffset: this.data.xOffset,
      yOffset: this.data.yOffset,
      node: this.data.node,
      displayText: this.data.name,
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
    return { data: roundedRect, annotations: baseNodeResult.annotations };
  }
}

export default FigmaRectangleToRoundedRect;
