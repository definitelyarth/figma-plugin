import {
  RocketiumPortableFormat,
  CanvasElementWithOverrides,
} from "rocketium-types-arth";

/**
 *
 * variants = {id: string; sizes: {width: number; height: number; objects: CanvasElementWithOverrides[]; }[] }[]
 */

const exportToRPF = (name: string, nodes: SceneNode[]) => {
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

  const rpf: RocketiumPortableFormat = {
    metadata: {
      createdAt: new Date().toDateString(),
      name,
      source: "figma",
    },
    canvasData: {
      metadata: {},
      variant: {
        objects: {},
        sizes: {},
      },
    },
    schemaVersion: "1",
  };
};
