import { SerializedFillType } from "rocketium-types/dist/ColorTypes";
import { Annotation, WithAnnotations } from "../types";
import {
  IGradientOptions,
  IGradientOptionsColorStops,
  IGradientOptionsCoords,
} from "fabric/fabric-impl";
function figmaPaintsToRktmFills(
  paints: readonly Paint[],
  supportImage?: boolean
): WithAnnotations<{
  fills: SerializedFillType[];
}> {
  const annotations: Annotation[] = [];
  const fills: SerializedFillType[] = [];

  paints.forEach((paint) => {
    if (paint.type === "SOLID") {
      fills.push(
        figmaRGBAToRgbaString({ ...paint.color, a: paint.opacity || 1 })
      );
    } else if (
      paint.type === "GRADIENT_LINEAR" ||
      paint.type === "GRADIENT_RADIAL"
    ) {
      fills.push(figmaGradientToRpfGradient(paint));
    } else {
      if (paint.type === "IMAGE") {
        if (!supportImage) annotations.push({type: "info", message: "Image fills only work inside rectangle shapes or frames."})
        return;
      } 
      annotations.push({
        type: "info",
        message: `Only linear and radial gradients are supported. Avoid using angular or diamond gradients.`,
      });
    }
  });

  return { data: { fills }, annotations };
}
function figmaRGBAToRgbaString(rgba: RGBA): string {
  return `rgba(${Math.round(rgba.r * 255)},${Math.round(
    rgba.g * 255
  )},${Math.round(rgba.b * 255)},${rgba.a || 1})`;
}

function figmaGradientToRpfGradient(
  fGradient: GradientPaint
): IGradientOptions & { gradientUnits?: string | undefined } {
  // coords(x1,y1,x2,y2,r1,r2):
  // linear - (0.5, 0, 0.5, 1)
  // radial - (0.5, 0.5, 0.5, 0.5, 0, 1)
  const colorStops: IGradientOptionsColorStops = fGradient.gradientStops.map(
    (colorStop) => {
      return {
        color: figmaRGBAToRgbaString(colorStop.color),
        offset: colorStop.position,
      };
    }
  );
  let coords: IGradientOptionsCoords = {
    x1: 0.5,
    y1: 0,
    x2: 0.5,
    y2: 1,
  };
  if (fGradient.type === "GRADIENT_RADIAL")
    coords = { x1: 0.5, y1: 0.5, x2: 0.5, y2: 0.5, r1: 0, r2: 1 };
  return {
    colorStops,
    coords,
    type: fGradient.type === "GRADIENT_LINEAR" ? "linear" : "radial",
    gradientUnits: "percentage",
    gradientTransform: null,
    offsetX: 0,
    offsetY: 0,
  };
}

export {
  figmaGradientToRpfGradient,
  figmaPaintsToRktmFills,
  figmaRGBAToRgbaString,
};
