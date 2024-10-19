import { BaseElementJSON } from "rocketium-types-arth";
import { Annotation, FigmaBaseNode, WithAnnotations } from "./types";
import { FigmaBaseNodeToBorder } from "./utils/styles";
import Colors from "./utils/colors";
import Layer from "./utils/layer";

const FigmaBaseNodeToRpfBaseElement = ({
  node,
  displayText,
  xOffset,
  yOffset,
}: {
  node: FigmaBaseNode;
  displayText: string;
  yOffset: number;
  xOffset: number;
}): WithAnnotations<{
  baseElement: Omit<BaseElementJSON, "id" | "dataType" | "type">;
}> => {
  const annotations: Annotation[] = [];
  const border = FigmaBaseNodeToBorder(node);

  const fills = Colors.figmaPaintsToRktmFills(node.fills as Paint[]);
  const globalCompositeOperation =
    Layer.FigmaBlendModeToRpfGlobalCompositeOperation(node.blendMode);
  annotations.push(
    ...border.annotations,
    ...fills.annotations,
    ...globalCompositeOperation.annotations
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
    shadow: {},
  };
  return { data: { baseElement }, annotations };
};

export { FigmaBaseNodeToRpfBaseElement };
