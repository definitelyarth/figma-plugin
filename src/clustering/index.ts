import { CanvasElementJSON, CanvasElementWithOverrides } from "rocketium-types";
import { ClusterVariant } from "src/transformers/types";

const areVariantsSame = (a: ClusterVariant, b: ClusterVariant) => {
  if (a.width === b.width && a.height === b.height) return false;
  let smaller = a;
  let bigger = b;
  if (Object.keys(a.objects).length > Object.keys(b.objects).length) {
    smaller = b;
    bigger = a;
  }
  let smallerKeys = Object.keys(smaller.objects);
  let biggerKeys = Object.keys(bigger.objects);
  let leftToMatch = smallerKeys.length;
  smallerKeys.forEach((key) => {
    const idx = biggerKeys.findIndex((v) => v == key);
    if (idx == -1) return;
    leftToMatch--;
    biggerKeys.splice(idx, 1);
  });
  return leftToMatch <= 0;
};

const clusterVariants = (variants: ClusterVariant[]) => {
  const clusters: ClusterVariant[][] = [];
  for (const variant of variants) {
    let found = false;
    for (const cluster of clusters) {
      let similarVariant = cluster.findIndex((b) => {
        return areVariantsSame(variant, b);
      });
      if (similarVariant >= 0) {
        cluster.push(variant);
        found = true;
        break;
      }
    }
    if (!found) clusters.push([variant]);
  }
  return clusters;
};

type CanvasData = {
  variant: {
    sizes: Record<
      string,
      { width: number; height: number; id: string; displayName: string }
    >;
    objects: Record<string, CanvasElementWithOverrides>;
  };
};

const clustersToCanvases = (clusters: ClusterVariant[][]) => {
  const canvases: CanvasData[] = [];
  for (const variant of clusters) {
    const canvasData: CanvasData = { variant: { sizes: {}, objects: {} } };
    const baseObjectsSize = variant.sort(
      (a, b) => Object.keys(b.objects).length - Object.keys(a.objects).length
    )[0];
    for (const size of variant) {
      canvasData.variant.sizes[size.id] = {
        id: size.id,
        displayName: size.displayName,
        width: size.width,
        height: size.height,
      };
    }
    for (const [objectKey, baseObject] of Object.entries(
      baseObjectsSize.objects
    )) {
      for (const size of variant) {
        if (objectKey in size.objects) {
          let diff: Record<string, unknown> = {};
          for (const field of Object.keys(size.objects[objectKey])) {
            if (
              JSON.stringify(
                size.objects[objectKey][
                  field as keyof (typeof size.objects)[string]
                ]
              ) !== JSON.stringify(baseObject[field as keyof typeof baseObject])
            ) {
              diff[field] =
                size.objects[objectKey][
                  field as keyof (typeof size.objects)[string]
                ];
            }
          }
          diff.zIndex = baseObject.zIndex;
          baseObject["overrides"][size.id] =
            diff as Partial<CanvasElementJSON> & { zIndex: number };
        } else {
          baseObject.overrides[size.id] = {
            zIndex: baseObject.zIndex,
            visible: false,
          };
        }
      }
    }

    canvasData.variant.objects = baseObjectsSize.objects;
    canvases.push(canvasData);
    // find the variant with the most amount of objects
  }
  return canvases;
};

export { clusterVariants, clustersToCanvases };
