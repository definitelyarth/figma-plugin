import { on, showUI } from "@create-figma-plugin/utilities";
import { Variant } from "./types";
import exportToRPF from "./transformers";
import { RocketiumPortableFormat } from "rocketium-types";

export default function () {
  showUI({
    height: 644,
    width: 480,
  });

  figma.on("selectionchange", async () => {
    figma.ui.postMessage({ event: "loading", data: true });
    setTimeout(async () => {
      if (
        figma.currentPage.selection.findIndex((e) => e.type === "FRAME") != -1
      ) {
        try {
          const output = await exportToRPF(
            figma.currentPage.name,
            figma.currentPage.selection
          );

          figma.ui.postMessage({ event: "selection", data: output });
          figma.ui.postMessage({ event: "loading", data: false });
        } catch (e) {
          console.error(e);
          figma.ui.postMessage({ event: "selection", data: undefined });
          figma.ui.postMessage({ event: "loading", data: false });
        }
      } else {
        figma.ui.postMessage({ event: "selection", data: undefined });
        figma.ui.postMessage({ event: "loading", data: false });
      }
    }, 100);
  });

  figma.on("run", async () => {
    figma.ui.postMessage({ event: "loading", data: true });
    setTimeout(async () => {
      if (
        figma.currentPage.selection.findIndex((e) => e.type === "FRAME") != -1
      ) {
        try {
          const output = await exportToRPF(
            figma.currentPage.name,
            figma.currentPage.selection
          );
          figma.ui.postMessage({ event: "selection", data: output });
          figma.ui.postMessage({ event: "loading", data: false });
        } catch (e) {
          console.error(e);
          figma.ui.postMessage({ event: "selection", data: undefined });
          figma.ui.postMessage({ event: "loading", data: false });
        }
      } else {
        figma.ui.postMessage({ event: "selection", data: undefined });
        figma.ui.postMessage({ event: "loading", data: false });
      }
    }, 100);
  });

  on("preview-export", async (doc: RocketiumPortableFormat | undefined) => {
    figma.ui.postMessage({ event: "loading", data: true });
    setTimeout(async () => {
      if (!doc) {
        figma.ui.postMessage({ event: "preview-export", data: [] });
        figma.ui.postMessage({ event: "loading", data: false });
        return;
      }
      const variants: Variant[] = [];
      for await (const variant of doc.variants) {
        const variantForPreview: Variant = {
          name: "Variant",
          sizes: [],
        };
        for await (const [frameId, size] of Object.entries(
          variant.variant.sizes
        )) {
          const node = await figma.getNodeByIdAsync(frameId);
          if (!node || node.type !== "FRAME") continue;
          const data = await node.exportAsync({ format: "PNG" });
          variantForPreview.sizes.push({
            name: size.displayName,
            imageData: data,
          });
        }
        variants.push(variantForPreview);
      }

      figma.ui.postMessage({ event: "preview-export", data: variants });
      figma.ui.postMessage({ event: "loading", data: false });
    }, 100);
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
}
