import { on, showUI } from "@create-figma-plugin/utilities";
import { transformCanvas } from "./transformers";

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
