import { CanvasElementWithOverrides } from "rocketium-types-arth";
import { ClusterVariant } from "src/transformers_v2/types";

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

const clusterObjects = (clusters: ClusterVariant[][]) => {
  const canvases: CanvasData[] = [];
  for (const variant of clusters) {
    const canvasData: CanvasData = { variant: { sizes: {}, objects: {} } };

    // find the variant with the most amount of objects
  }
};

export { clusterVariants };
