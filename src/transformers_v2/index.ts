import {
  RocketiumPortableFormat,
  CanvasElementWithOverrides,
} from "rocketium-types-arth";
import FigmaFrameToRktmSize from "./frame";
import { ClusterVariant } from "./types";
import { clustersToCanvases, clusterVariants } from "src/clusters_v2";
/**
 *
 * variants = {id: string; sizes: {width: number; height: number; objects: CanvasElementWithOverrides[]; }[] }[]
 */

const exportToRPF = async (name: string, nodes: readonly SceneNode[]) => {
  const Variants: {
    sizes: Record<
      string,
      {
        width: number;
        height: number;
        id: string;
        displayName: string;
      }
    >;
    objects: Record<string, CanvasElementWithOverrides>;
  } = {
    sizes: {},
    objects: {},
  };
  const vars: ClusterVariant[] = [];
  for await (const frameNode of nodes) {
    if (frameNode.type !== "FRAME" || !frameNode.visible) continue;
    const transformer = new FigmaFrameToRktmSize(frameNode);
    const variant = await transformer.export();
    vars.push(variant);
  }

  const rpf: RocketiumPortableFormat = {
    metadata: {
      createdAt: new Date().toDateString(),
      name,
      source: "figma",
    },
    canvasData: {
      metadata: {},
      variant: Variants,
    },
    schemaVersion: "1",
  };
  const clusters = clusterVariants(vars);
  console.log({ clusters });
  const canvases = clustersToCanvases(clusters);
  console.log({ canvases });
};

export default exportToRPF;
