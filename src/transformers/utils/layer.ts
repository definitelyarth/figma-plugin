import { WithAnnotations } from "../types";

const BLEND_MODE_MAP: Record<BlendMode, GlobalCompositeOperation | null> = {
  COLOR: "color",
  COLOR_BURN: "color-burn",
  COLOR_DODGE: "color-dodge",
  DARKEN: "darken",
  DIFFERENCE: "difference",
  EXCLUSION: "exclusion",
  HARD_LIGHT: "hard-light",
  HUE: "hue",
  LIGHTEN: "lighten",
  LINEAR_BURN: null,
  LINEAR_DODGE: null,
  LUMINOSITY: "luminosity",
  MULTIPLY: "multiply",
  NORMAL: "source-over",
  OVERLAY: "overlay",
  PASS_THROUGH: null,
  SATURATION: "saturation",
  SCREEN: "screen",
  SOFT_LIGHT: "soft-light",
};

function FigmaBlendModeToRpfGlobalCompositeOperation(
  blendMode: BlendMode
): WithAnnotations<{ globalCompositeOperation: GlobalCompositeOperation }> {
  const fromFigma = BLEND_MODE_MAP[blendMode];
  if (fromFigma)
    return { data: { globalCompositeOperation: fromFigma }, annotations: [] };
  if (blendMode === "PASS_THROUGH") {
    return {
      data: {globalCompositeOperation: "source-over"},
      annotations: [
        {
          type: "info",
          message: '"Pass through" blend mode changes to "normal," no design impact.'
        }
      ]
    }
  }
  return {
    data: { globalCompositeOperation: "source-over" },
    annotations: [
      {
        message: `Unsupported blend mode: ${blendMode}. Using NORMAL`,
        type: "error",
      },
    ],
  };
}
export { FigmaBlendModeToRpfGlobalCompositeOperation };
