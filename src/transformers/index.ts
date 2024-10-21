import { RocketiumPortableFormat } from "rocketium-types";
import FigmaFrameToRktmSize from "./frame";
import { ClusterVariant, Context, TransformOutput } from "./types";
import { clustersToCanvases, clusterVariants } from "src/clustering";

const exportToRPF = async (
  name: string,
  nodes: readonly SceneNode[]
): Promise<TransformOutput> => {
  const vars: ClusterVariant[] = [];
  const ctx: Context = { images: [] };
  const frames: TransformOutput["frames"] = {};
  for await (const frameNode of nodes) {
    if (frameNode.type !== "FRAME" || !frameNode.visible) continue;
    const transformer = new FigmaFrameToRktmSize(frameNode, ctx);
    const variant = await transformer.export();
    frames[frameNode.id] = {
      annotations: transformer.annotations,
      name: frameNode.name,
      id: frameNode.id,
    };
    vars.push(variant);
  }
  const clusters = clusterVariants(vars);
  const canvases = clustersToCanvases(clusters);
  const rpf: RocketiumPortableFormat = {
    metadata: {
      createdAt: new Date().toDateString(),
      name,
      source: "figma",
      schemaVersion: "1",
      sourceVersion: "1",
    },
    variants: canvases.map((d) => {
      return { variant: d.variant, metadata: {} };
    }),
  };
  return { rpf, ctx, frames };
};

export default exportToRPF;
