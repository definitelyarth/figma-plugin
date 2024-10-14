import {
  Position,
  BlendMode as RktmBlendMode,
  Paint as RktmPaint,
  TextEffect,
} from "../types/rpf";
import { Annotation, WithAnnotations } from "./types";

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
  node: SceneNode,
  effects: readonly Effect[] | Effect[]
): WithAnnotations<TextEffect[]> => {
  const annotations: Annotation[] = [];
  const finalEffects: TextEffect[] = [];
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
    } else {
      annotations.push({
        message: `Unsupported effect ${effect.type}. Omitted in Rktm`,
        type: "error",
        element: { id: node.id, name: node.name },
      });
    }
  }
  return { data: finalEffects, annotations };
};

export const figmaBlendModeToRktmBlendMode = (
  node: SceneNode | PageNode,
  figmaBlendMode?: BlendMode
): WithAnnotations<RktmBlendMode> => {
  const annotations: Annotation[] = [];

  let blendMode: RktmBlendMode = "NORMAL";
  if (figmaBlendMode !== "NORMAL" && figmaBlendMode !== "PASS_THROUGH") {
    annotations.push({
      message: `Unsupported blend mode: ${figmaBlendMode}. Using NORMAL`,
      type: "error",
      element: { id: node.id, name: node.name },
    });
  } else {
    blendMode = figmaBlendMode;
  }

  return {
    data: blendMode,
    annotations,
  };
};

const figmaGradientTransformToRktmGradientHandlePositions = (
  input: Transform
): Position[] => [{ x: input[0][2], y: input[1][2] }];

export const figmaFillsToRktmPaint = (
  node: SceneNode | PageNode,
  figmaFills: Paint[] | readonly Paint[]
): WithAnnotations<{ paint: Partial<RktmPaint>; image?: ImagePaint }> => {
  const annotations: Annotation[] = [];

  let outFill: Partial<RktmPaint> | undefined = undefined;
  let imageFill: ImagePaint | undefined = undefined;

  for (const fill of figmaFills) {
    if (typeof imageFill === "undefined" && fill.type === "IMAGE")
      imageFill = fill;
    if (typeof outFill === "undefined") {
      const blendModeData = figmaBlendModeToRktmBlendMode(node, fill.blendMode);
      annotations.concat(blendModeData.annotations);
      if (fill.type == "SOLID") {
        outFill = {
          blendMode: blendModeData.data,
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
        outFill = {
          blendMode: blendModeData.data,
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
      } else {
        annotations.push({
          message: `Unsupported fill ${fill.type}.`,
          type: "info",
          element: { name: node.name, id: node.id },
        });
      }
    }
  }
  if (!outFill) {
    outFill = {
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
  }
  if (
    figmaFills.length > 1 &&
    !(figmaFills.length == 2 && typeof imageFill !== "undefined")
  )
    annotations.push({
      message: "Only one fill is supported per element.",
      type: "info",
      element: { name: node.name, id: node.id },
    });
  return {
    data: { paint: outFill, image: imageFill },
    annotations,
  };
};
