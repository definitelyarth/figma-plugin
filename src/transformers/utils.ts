import {
  Position,
  BlendMode as RktmBlendMode,
  Paint as RktmPaint,
  TextEffect,
} from "../types/rpf";

export const figmaTransformMatrixToTranslateAndRotation = (
  transform: Transform
): {
  position: { x: number; y: number };
  rotation: number;
} => {
  return {
    position: { x: transform[0][2], y: transform[1][2] },
    rotation: Math.atan2(transform[1][0], transform[0][0]) * (180 / Math.PI),
  };
};

export const figmaEffectsToRktmTextEffects = (
  effects: readonly Effect[] | Effect[]
): TextEffect[] => {
  const finalEffects: TextEffect[] = [];
  let blur: undefined | number = undefined;
  for (const effect of effects) {
    if (effect.type === "DROP_SHADOW") {
      finalEffects.push({
        color: effect.color,
        offsetX: effect.offset.x,
        offsetY: effect.offset.y,
        opacity: effect.color.a,
        type: "SHADOW",
        blurRadius: effect.radius,
      });
    }
  }
  return finalEffects;
};

export const figmaBlendModeToRktmBlendMode = (
  figmaBlendMode?: BlendMode
): RktmBlendMode => {
  return figmaBlendMode !== "NORMAL" && figmaBlendMode !== "PASS_THROUGH"
    ? "NORMAL"
    : figmaBlendMode;
};

const figmaGradientTransformToRktmGradientHandlePositions = (
  input: Transform
): Position[] => [{ x: input[0][2], y: input[1][2] }];

export const figmaFillsToRktmPaint = (
  figmaFills: Paint[] | readonly Paint[]
): Partial<RktmPaint> => {
  for (const fill of figmaFills) {
    if (fill.type == "SOLID") {
      return {
        blendMode: figmaBlendModeToRktmBlendMode(fill.blendMode),
        type: "SOLID",
        color: {
          r: fill.color.r * 255,
          g: fill.color.g * 255,
          b: fill.color.b * 255,
          a: fill.opacity || 1,
        },
        visible: fill.visible,
      };
    } else if (
      fill.type === "GRADIENT_LINEAR" ||
      fill.type === "GRADIENT_RADIAL"
    ) {
      return {
        blendMode: figmaBlendModeToRktmBlendMode(fill.blendMode),
        type: fill.type,
        gradientStops: fill.gradientStops.map((stop) => {
          return {
            position: stop.position,
            color: {
              a: stop.color.a,
              b: stop.color.b * 255,
              r: stop.color.r * 255,
              g: stop.color.g * 255,
            },
          };
        }),
        gradientHandlePositions:
          figmaGradientTransformToRktmGradientHandlePositions(
            fill.gradientTransform
          ),
      };
    }
  }
  return {
    blendMode: "NORMAL",
    type: "SOLID",
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    opacity: 0,
  };
};
