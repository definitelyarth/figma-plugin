import { ObjectPosition } from "rocketium-types-arth/dist/ObjectContainerTypes";

const figmaAlignMentsToObjectPosition = (
  h: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED",
  v: "TOP" | "CENTER" | "BOTTOM"
): ObjectPosition => {
  if (h === "JUSTIFIED") return "custom";
  if (h === "CENTER" && v === "CENTER") return "center";
  return `${v.toLowerCase()}-${h.toLowerCase()}` as ObjectPosition;
};

export { figmaAlignMentsToObjectPosition };
