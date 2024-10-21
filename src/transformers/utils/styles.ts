import { Border } from "rocketium-types/dist/ObjectContainerTypes";
import { Annotation, FigmaBaseNode, WithAnnotations } from "../types";
import { figmaPaintsToRktmFills } from "./colors";

const FigmaBaseNodeToBorder = (
  node: FigmaBaseNode
): WithAnnotations<{ border: Border }> => {
  if (node.type === "TEXT") return { data: { border: {} }, annotations: [] };
  const annotations: Annotation[] = [];

  const colors = figmaPaintsToRktmFills(node.strokes);
  const borderColor = colors.data.fills.find((e) => typeof e === "string");
  annotations.push(...colors.annotations);
  if (colors.data.fills.findIndex((e) => typeof e !== "string") != -1) {
    annotations.push({
      type: "info",
      message: "Only SOLID fills supported for border strokes.",
    });
  }
  const borderData: Border = {
    style: node.dashPattern.length == 0 ? "solid" : "dashed",
    dashGap: node.dashPattern.length == 0 ? 0 : node.dashPattern[1],
    dashWidth: node.dashPattern.length == 0 ? 0 : node.dashPattern[0],
    dashCap: typeof node.strokeCap === "symbol" ? "square" : node.strokeCap,
    color: borderColor,
  };
  if (node.type !== "FRAME" && node.type !== "RECTANGLE")
    return { data: { border: borderData }, annotations };

  const border: Border = {
    ...borderData,
    top: node.strokeTopWeight,
    bottom: node.strokeBottomWeight,
    left: node.strokeLeftWeight,
    right: node.strokeRightWeight,
  };

  return { data: { border }, annotations };
};

export { FigmaBaseNodeToBorder };
