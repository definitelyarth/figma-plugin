import { Border } from "rocketium-types/dist/ObjectContainerTypes";
import { Annotation, FigmaBaseNode, WithAnnotations } from "../types";
import { figmaPaintsToRktmFills, figmaRGBAToRgbaString } from "./colors";
import { SerializedFabricShadow } from "rocketium-types/dist/SerializedFabricTypes";

const FigmaEffectsToRpfEffects = (
  effects: readonly Effect[]
): WithAnnotations<SerializedFabricShadow | null> => {
  const rpfEffects: SerializedFabricShadow[] = [];
  const annotations: Annotation[] = [];
  effects.forEach((effect) => {
    if (effect.type !== "DROP_SHADOW") {
      annotations.push({
        message: `Unsupported effect: ${effect.type}`,
        type: "error",
      });
    } else {
      rpfEffects.push({
        blur: effect.radius,
        offsetX: effect.offset.x,
        offsetY: effect.offset.y,
        color: figmaRGBAToRgbaString(effect.color),
      });
    }
  });
  if (rpfEffects.length > 1)
    annotations.push({
      message: "Only one effect supported per element.",
      type: "error",
    });
  return { annotations, data: rpfEffects[0] || null };
};

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
    dashCap:
      typeof node.strokeCap === "symbol"
        ? "square"
        : node.strokeCap !== "ROUND" && node.strokeCap !== "SQUARE"
        ? "square"
        : node.strokeCap.toLowerCase(),
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

export { FigmaBaseNodeToBorder, FigmaEffectsToRpfEffects };
