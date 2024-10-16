import { on, showUI } from "@create-figma-plugin/utilities";
import { transformCanvas } from "./transformers";
import { CanvasNode } from "./types/rpf";
import { Size, Variant } from "./types";

export default function () {
  showUI({
    height: 644,
    width: 480,
  });

  figma.on("selectionchange", async () => {
    if (
      figma.currentPage.selection.findIndex((e) => e.type === "FRAME") != -1
    ) {
      const output = await transformCanvas(figma.currentPage);
      figma.ui.postMessage({ event: "selection", data: output });
    } else {
      figma.ui.postMessage({ event: "selection", data: undefined });
    }
  });

  figma.on("run", async () => {
    if (
      figma.currentPage.selection.findIndex((e) => e.type === "FRAME") != -1
    ) {
      const output = await transformCanvas(figma.currentPage);
      figma.ui.postMessage({ event: "selection", data: output });
    } else {
      figma.ui.postMessage({ event: "selection", data: undefined });
    }
  });

  on("preview-export", async (doc: DocumentNode) => {
    const variants: Variant[] = [];
    for await (const canvas of doc.children!) {
      const sizes: Size[] = [];
      const variant: Variant = { name: canvas.name, sizes };
      for await (const frame of canvas.children!) {
        const node = await figma.getNodeByIdAsync(frame.id);
        if (!node || node.type !== "FRAME") continue;
        const data = await node.exportAsync({ format: "PNG" });
        sizes.push({ name: frame.name, imageData: data });
      }
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
    figma.currentPage.selection.forEach((e) => {
      const printObj: Record<string, unknown> = { name: e.name, node: e };
      console.log(printObj);
    });
  });
}
