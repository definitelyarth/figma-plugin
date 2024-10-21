import { on, showUI } from "@create-figma-plugin/utilities";
import { transformCanvas } from "./transformers";
import { Size, Variant } from "./types";
import exportToRPF from "./transformers_v2";
import { RocketiumPortableFormat } from "rocketium-types";
import { TransformOutput } from "./transformers_v2/types";

export default function () {
  showUI({
    height: 644,
    width: 480,
  });

  figma.on("selectionchange", async () => {
    if (
      figma.currentPage.selection.findIndex((e) => e.type === "FRAME") != -1
    ) {
      try {
        const output = await exportToRPF(
          figma.currentPage.name,
          figma.currentPage.selection
        );
        figma.ui.postMessage({ event: "selection", data: output });
      } catch (e) {
        console.error(e);
        figma.ui.postMessage({ event: "selection", data: undefined });
      }
    } else {
      figma.ui.postMessage({ event: "selection", data: undefined });
    }
  });

  figma.on("run", async () => {
    if (
      figma.currentPage.selection.findIndex((e) => e.type === "FRAME") != -1
    ) {
      const output = await exportToRPF(
        figma.currentPage.name,
        figma.currentPage.selection
      );
      figma.ui.postMessage({ event: "selection", data: output });
    } else {
      figma.ui.postMessage({ event: "selection", data: undefined });
    }
  });

  on("preview-export", async (doc: TransformOutput | undefined) => {
    if (!doc) {
      figma.ui.postMessage({ event: "preview-export", data: [] });
      return;
    }
    const variants: Variant[] = [];
    for await (const [key, frame] of Object.entries(doc.frames)) {
      const sizes: Size[] = [];
      const variant: Variant = { name: frame.name, sizes };
      const node = await figma.getNodeByIdAsync(frame.id);
      if (!node || node.type !== "FRAME") continue;
      const data = await node.exportAsync({ format: "PNG" });
      sizes.push({ name: frame.name, imageData: data });
      variants.push(variant);
    }
    figma.ui.postMessage({ event: "preview-export", data: variants });
  });

  on("selection-clear", () => {
    figma.currentPage.selection = [];
  });

  on("set-value", async (data: { key: string; value: string }) => {
    await figma.clientStorage.setAsync(data.key, data.value);
    figma.ui.postMessage({
      event: "get-value",
      data: { key: data.key, value: data.value },
    });
  });

  on("get-value", async (data: { key: string }) => {
    const value = await figma.clientStorage
      .getAsync(data.key)
      .catch(() => null);
    figma.ui.postMessage({
      event: "get-value",
      data: { key: data.key, value },
    });
  });

  on("printSelected", () => {
    exportToRPF("SomeName", figma.currentPage.selection);
    // figma.currentPage.selection.forEach((e) => {
    //   const printObj: Record<string, unknown> = { name: e.name, node: e };
    //   console.log(printObj);
    // });
  });
}
