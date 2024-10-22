import { BaseElementJSON } from "rocketium-types";
import { Annotation, FigmaBaseNode, WithAnnotations } from "./types";
import {
  FigmaBaseNodeToBorder,
  FigmaEffectsToRpfEffects,
} from "./utils/styles";
import { figmaPaintsToRktmFills } from "./utils/colors";
import { FigmaBlendModeToRpfGlobalCompositeOperation } from "./utils/layer";
import { SerializedFillType } from "rocketium-types/dist/ColorTypes";

const FigmaBaseNodeToRpfBaseElement = ({
  node,
  displayText,
  xOffset,
  yOffset,
  supportImage,
}: {
  node: FigmaBaseNode;
  displayText: string;
  yOffset: number;
  xOffset: number;
  supportImage?: boolean;
}): WithAnnotations<{
  baseElement: Omit<BaseElementJSON, "id" | "dataType" | "type">;
}> => {
  const annotations: Annotation[] = [];
  const border = FigmaBaseNodeToBorder(node);
  const shadow = FigmaEffectsToRpfEffects(node.effects);
  let fills: {
    data: { fills: SerializedFillType[] };
    annotations: Annotation[];
  } = { data: { fills: [] }, annotations: [] };
  if (typeof node.fills !== "symbol")
    fills = figmaPaintsToRktmFills(node.fills, supportImage);
  const globalCompositeOperation = FigmaBlendModeToRpfGlobalCompositeOperation(
    node.blendMode
  );
  annotations.push(
    ...border.annotations,
    ...fills.annotations,
    ...globalCompositeOperation.annotations,
    ...shadow.annotations
  );
  const baseElement: Omit<BaseElementJSON, "id" | "dataType" | "type"> = {
    displayText,
    visible: node.visible,
    height: node.height,
    width: node.width,
    left: node.x + xOffset,
    top: node.y + yOffset,
    angle: node.rotation,
    opacity: node.opacity,
    fill: fills.data.fills.length > 0 ? fills.data.fills[0] : `rgba(0,0,0,0)`,
    border: border.data.border,
    cornerRadius:
      node.type === "RECTANGLE" || node.type === "FRAME"
        ? {
            tl: node.topLeftRadius,
            tr: node.topRightRadius,
            bl: node.bottomLeftRadius,
            br: node.bottomRightRadius,
          }
        : {},
    globalCompositeOperation:
      globalCompositeOperation.data.globalCompositeOperation,
    padding: {},
    selectable: true,
    shadow: shadow.data,
  };
  return { data: { baseElement }, annotations };
};

export { FigmaBaseNodeToRpfBaseElement };
