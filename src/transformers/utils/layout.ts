import { ObjectPosition } from "rocketium-types/dist/ObjectContainerTypes";
import { roundTo3Decimals } from "src/ui/utils/numbers";

const figmaAlignMentsToObjectPosition = (
  h: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED",
  v: "TOP" | "CENTER" | "BOTTOM"
): ObjectPosition => {
  if (h === "JUSTIFIED") return "custom";
  if (h === "CENTER" && v === "CENTER") return "center";
  return `${v.toLowerCase()}-${h.toLowerCase()}` as ObjectPosition;
};

const figmaTransformMatrixToTranslateAndRotation = (
  transform: Transform
): {
  position: { x: number; y: number };
  rotation: number;
} => {
  return {
    position: {
      x: roundTo3Decimals(transform[0][2]) * 1000,
      y: roundTo3Decimals(transform[1][2]) * 1000,
    },
    rotation: Math.atan2(transform[1][0], transform[0][0]) * (180 / Math.PI),
  };
};

export {
  figmaAlignMentsToObjectPosition,
  figmaTransformMatrixToTranslateAndRotation,
};
