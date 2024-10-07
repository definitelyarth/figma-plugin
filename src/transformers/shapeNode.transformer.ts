import { ShapeNode } from "../types/figma";
import { Border, ImageNode, VectorEffect, VectorNode } from "../types/rpf";
import { ExecutionContext } from "./types";
import {
  figmaFillsToRktmPaint,
  figmaTransformMatrixToTranslateAndRotation,
} from "./utils";

export const ImageTransformer = (
  node: RectangleNode | FrameNode,
  fill: ImagePaint,
  xOffset: number,
  yOffset: number,
  z: number
): ImageNode => {
  return {
    zIndex: z,
    height: node.height,
    id: "null",
    imageUrl: fill.imageHash as string,
    name: node.name,
    position: {
      x: node.x + xOffset,
      y: node.y + yOffset,
    },
    rotation: node.rotation,
    type: "IMAGE",
    width: node.width,
    styles: {
      backgroundColor: {
        blendMode: "NORMAL",
        type: "SOLID",
        color: { r: 0, g: 0, b: 0, a: 0 },
      },
      scaleMode:
        fill.scaleMode !== "FILL" && fill.scaleMode !== "FIT"
          ? undefined
          : fill.scaleMode,
      scale: fill.scalingFactor,
      transform:
        fill.imageTransform &&
        figmaTransformMatrixToTranslateAndRotation(fill.imageTransform),
    },
  };
};

const getInvalidFills = (fills: Paint[]) => {
  for (const fill of fills) {
    if (fill.type === "IMAGE") {
      return { invalid: true, image: fill };
    }
    if (fill.type === "VIDEO") {
      return { invalid: true };
    }
  }
  return { invalid: false };
};

export const ShapeNodeTransformer = (
  shape: ShapeNode,
  executionContext: ExecutionContext,
  xOffset: number,
  yOffset: number
) => {
  const fillsData = getInvalidFills(shape.fills as Paint[]);

  if (fillsData.invalid) {
    if (fillsData.image !== undefined && shape.type === "RECTANGLE") {
      const imageNode = ImageTransformer(
        shape,
        fillsData.image,
        xOffset,
        yOffset,
        ++executionContext.z
      );
      const id = executionContext.generateIdForChildNode({
        type: "IMAGE",
        hash: imageNode.imageUrl,
      });
      executionContext.frameChildNodes.push({ ...imageNode, id });
    }
    return null;
  }
  let borderData: Border | undefined = undefined;
  if (shape.strokes.length >= 1) {
    const strokeCap = shape.strokeCap as StrokeCap;
    const dashPattern = shape.dashPattern;
    borderData = {
      color: figmaFillsToRktmPaint(shape.strokes).color || {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      width: shape.strokeWeight as number,
      style: dashPattern.length > 1 ? "dashed" : "solid",
      dashCap:
        strokeCap !== "SQUARE" && strokeCap !== "ROUND"
          ? "square"
          : (strokeCap.toLowerCase() as Border["dashCap"]),
      radius:
        shape.type === "RECTANGLE"
          ? {
              bottomLeft: shape.bottomLeftRadius,
              bottomRight: shape.bottomRightRadius,
              topLeft: shape.topLeftRadius,
              topRight: shape.topRightRadius,
            }
          : undefined,
      dashWidth: dashPattern[0],
      dashGap: dashPattern[1],
    };
  }

  const output: VectorNode = {
    zIndex: ++executionContext.z,
    height: shape.height,
    id: "null",
    name: shape.name,
    paths:
      shape.type === "VECTOR"
        ? shape.vectorPaths.map((d) => d.data)
        : shape.fillGeometry.map((d) => d.data),
    position: {
      x: shape.x + xOffset,
      y: shape.y + yOffset,
    },
    rotation: shape.rotation,
    type: "VECTOR",
    width: shape.width,
    fill:
      typeof shape.fills === "symbol"
        ? {
            blendMode: "NORMAL",
            type: "SOLID",
            color: { r: 0, g: 0, b: 0, a: 1 },
          }
        : figmaFillsToRktmPaint(shape.fills),
    styles: {
      effects: figmaEffectsToRktmShapeEffects(shape.effects),
      border: borderData,
    },
  };
  const id = executionContext.generateIdForChildNode({
    type: "SHAPE",
    hash: JSON.stringify(output.paths),
  });
  executionContext.frameChildNodes.push({ ...output, id } as VectorNode);
};
const figmaEffectsToRktmShapeEffects = (
  effects: Effect[] | readonly Effect[]
): VectorEffect[] => {
  const finalEffects: VectorEffect[] = [];
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
