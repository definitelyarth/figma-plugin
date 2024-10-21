import { CreativeBoxJSON } from "rocketium-types";
import { WithAnnotations } from "./types";
import { SerializedFillType } from "rocketium-types/dist/ColorTypes";
import { figmaPaintsToRktmFills } from "./utils/colors";

class FigmaFrameToCreativeBox {
  constructor(
    private data: {
      node: FrameNode;
    }
  ) {}

  transform(): WithAnnotations<CreativeBoxJSON> {
    let fills: SerializedFillType[] = [];
    if (typeof this.data.node.fills === "object") {
      const fillsData = figmaPaintsToRktmFills(this.data.node.fills);
      fills = fillsData.data.fills;
    }
    const fill = fills.length > 0 ? fills[0] : "rgba(0,0,0,0)";
    const creativeBox: CreativeBoxJSON = {
      id: `CREATIVE-BOX:${JSON.stringify(fill)}`,
      fill,
      height: this.data.node.height,
      width: this.data.node.width,
      dataType: "CREATIVE_BOX",
      type: "rect",
    };
    return { annotations: [], data: creativeBox };
  }
}

export default FigmaFrameToCreativeBox;
