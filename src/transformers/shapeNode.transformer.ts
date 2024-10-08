import { ShapeNode } from "../types/figma";
import {
  Border,
  ImageNode,
  ScaleMode,
  VectorEffect,
  VectorNode,
} from "../types/rpf";
import { Transformer } from "./asbtract";
import { Annotation, ExecutionContext, WithAnnotation } from "./types";
import {
  figmaFillsToRktmPaint,
  figmaTransformMatrixToTranslateAndRotation,
} from "./utils";

class VectorTransformer extends Transformer<ShapeNode | FrameNode, VectorNode> {
  export() {
    const fillsData = figmaFillsToRktmPaint(
      this.node,
      this.node.fills as Paint[]
    );

    this.annotations.push(...fillsData.annotations);

    const paths =
      this.node.type === "VECTOR"
        ? this.node.vectorPaths.map((d) => d.data)
        : this.node.fillGeometry.map((d) => d.data);

    let borderData: Border | undefined = undefined;
    if (this.node.strokes.length >= 1) {
      const strokeCap = this.node.strokeCap as StrokeCap;
      const dashPattern = this.node.dashPattern;
      const borderFillsSumm = figmaFillsToRktmPaint(
        this.node,
        this.node.strokes
      );
      this.annotations.concat(borderFillsSumm.annotations);
      borderData = {
        color: borderFillsSumm.data.paint.color || {
          r: 0,
          g: 0,
          b: 0,
          a: 1,
        },
        width: this.node.strokeWeight as number,
        style: dashPattern.length > 1 ? "dashed" : "solid",
        dashCap:
          strokeCap !== "SQUARE" && strokeCap !== "ROUND"
            ? "square"
            : (strokeCap.toLowerCase() as Border["dashCap"]),
        radius:
          this.node.type === "RECTANGLE"
            ? {
                bottomLeft: this.node.bottomLeftRadius,
                bottomRight: this.node.bottomRightRadius,
                topLeft: this.node.topLeftRadius,
                topRight: this.node.topRightRadius,
              }
            : undefined,
        dashWidth: dashPattern[0],
        dashGap: dashPattern[1],
      };
    }

    const effectsData = figmaEffectsToRktmShapeEffects(
      this.node,
      this.node.effects
    );
    this.annotations.push(...effectsData.annotations);

    const id = this.executionContext.generateIdForChildNode({
      type: "SHAPE",
      hash: JSON.stringify(paths),
    });

    const out: VectorNode = {
      id,
      name: this.node.name,
      height: this.node.height,
      paths,
      position: {
        x: this.node.x + this.xOffset,
        y: this.node.y + this.yOffset,
      },
      type: "VECTOR",
      width: this.node.width,
      zIndex: ++this.executionContext.z,
      fill: fillsData.data.paint,
      rotation: this.node.rotation,
      styles: {
        border: borderData,
        effects: effectsData.data,
      },
    };

    if (fillsData.data.image) {
      if (this.node.type !== "RECTANGLE") {
        this.executionContext.annotations.push({
          message:
            "Image Fills are only supported on Rectangles And Frames. Omitting",
          type: "error",
          element: {
            id: this.node.id,
            name: this.node.name,
          },
        });
      } else {
        const imageTransformer = new ImageTransformer(
          { node: this.node, fill: fillsData.data.image },
          this.xOffset,
          this.yOffset,
          this.executionContext
        );
        imageTransformer.export();
      }
    }

    this.executionContext.annotations.push(...this.annotations);
    this.executionContext.frameChildNodes.push(out);
  }
}

class ImageTransformer extends Transformer<
  { node: RectangleNode | FrameNode; fill: ImagePaint },
  ImageNode
> {
  scaleMode(
    scaleMode: globalThis.ImagePaint["scaleMode"]
  ): WithAnnotation<ScaleMode | undefined> {
    const annotations: Annotation[] = [];
    let out: ScaleMode | undefined = undefined;
    if (scaleMode !== "FILL" && scaleMode !== "FIT") {
      annotations.push({
        message: `Invalid ScaleMode: ${scaleMode}.`,
        type: "error",
        element: { id: this.node.node.id, name: this.node.node.name },
      });
    } else {
      out = scaleMode;
    }
    return {
      data: out,
      annotations,
    };
  }

  export() {
    const id = this.executionContext.generateIdForChildNode({
      type: "IMAGE",
      hash: this.node.fill.imageHash as string,
    });
    const scaleMode = this.scaleMode(this.node.fill.scaleMode);
    this.annotations.push(...scaleMode.annotations);
    const out: ImageNode = {
      type: "IMAGE",
      zIndex: ++this.executionContext.z,
      height: this.node.node.height,
      width: this.node.node.width,
      name: this.node.node.name,
      position: {
        x: this.node.node.x + this.xOffset,
        y: this.node.node.y + this.yOffset,
      },
      id,
      imageUrl: this.node.fill.imageHash as string,
      styles: {
        backgroundColor: {
          blendMode: "NORMAL",
          type: "SOLID",
          color: { r: 0, g: 0, b: 0, a: 0 },
        },
        scaleMode: scaleMode.data,
        scale: this.node.fill.scalingFactor,
        transform:
          this.node.fill.imageTransform &&
          figmaTransformMatrixToTranslateAndRotation(
            this.node.fill.imageTransform
          ),
      },
    };
    this.executionContext.annotations.push(...this.annotations);
    this.executionContext.frameChildNodes.push(out);
  }
}

const figmaEffectsToRktmShapeEffects = (
  node: SceneNode,
  effects: Effect[] | readonly Effect[]
): WithAnnotation<VectorEffect[]> => {
  const finalEffects: VectorEffect[] = [];
  const annotations: Annotation[] = [];
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
    } else
      annotations.push({
        message: `Unsupported effect: ${effect.type}. Omitting`,
        type: "error",
        element: { id: node.id, name: node.name },
      });
  }

  return { data: finalEffects, annotations };
};

export { ImageTransformer, VectorTransformer };
