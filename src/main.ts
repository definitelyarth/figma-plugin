import { on, showUI } from "@create-figma-plugin/utilities";
// import { performClustering } from "./clustering";
import { transformCanvas } from "./transformers";
import { TextStyles } from "./types";

export default function () {
  showUI({
    height: 644,
    width: 480,
  });

  on("cluster", async () => {
    console.log("clustering : " + figma.fileKey);
    // figma.ui.postMessage({ variants: await performClustering() });
  });

  on("printSelected", () => {
    figma.currentPage.selection.forEach((e) => {
      if (e.type === "TEXT") {
        console.log({ runs: e.getStyledTextSegments(TextStyles) });
      }
      const printObj: Record<string, unknown> = { name: e.name, node: e };
      console.log(printObj);
    });
  });

  on("transformCanvas", () => {
    const output = transformCanvas(figma.currentPage);
    figma.ui.postMessage({ output });
  });

  on("doIt", () => {});

  on("processImages", () => {
    console.log("hre");
    // FOR GOWTAHM
  });
}
