import { render } from "@create-figma-plugin/ui";
import { h } from "preact";
import "!./output.css";
import { emit } from "@create-figma-plugin/utilities";
import { useEffect, useState } from "preact/hooks";
import { VariantClusters } from "./types";
import MainUI from "./ui/index";
import { ScreenContextProvider } from "./contexts/ScreenContext";

function Plugin() {
  const [data, setData] = useState<undefined | { variants: VariantClusters }>();

  useEffect(() => {
    onmessage = (e) => {
      const output = e.data.pluginMessage as { output: DocumentNode };
      // const blobURL = window.URL.createObjectURL(
      //   new Blob([JSON.stringify(output.output)], { type: "application/json" })
      // );
      // const link = document.createElement("a");
      // link.href = blobURL;
      // link.download = `${output.output.name}.rktm`;
      // link.click();
      // link.setAttribute("download", `${output.output.name}.rktm`);
    };
  }, []);
  return (
    <div
      className={
        "flex flex-col gap-2 items-center justify-center w-full min-h-full overflow-scroll p-4"
      }
    >
      <button
        onClick={() => {
          emit("convert");
        }}
      >
        Convert to Rktm
      </button>
      {/* // <ScreenContextProvider>
    //   <MainUI />
    // </ScreenContextProvider> */}
    </div>
  );
}

export default render(Plugin);

{
  /* {data !== undefined &&
        data.variants.map((cluster, clusterIdx) => {
          return (
            <div>
              <h1>Variant {clusterIdx}</h1>
              <div className="grid grid-cols-4 gap-2">
                {cluster.map((size, sizeIdx) => {
                  return (
                    <div
                      class={`p-4 rounded-md flex flex-col gap-2`}
                      key={sizeIdx}
                    >
                      <span>{size.size}</span>
                      <img src={size.frame.preview} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      <button
        class={`bg-black text-white p-4 rounded-md`}
        onClick={() => {
          emit("cluster");
        }}
      >
        Generate Clusters
      </button>
      <button
        class={`bg-black text-white p-4 rounded-md`}
        onClick={() => {
          emit("printSelected");
        }}
      >
        Print Selected
      </button>
      <button
        class={`bg-black text-white p-4 rounded-md`}
        onClick={() => {
          emit("transformCanvas");
        }}
      >
        Transform Canvas
      </button>
      <button
        class={"bg-black text-white p-4 rounded-md"}
        onClick={() => {
          fetch("http://localhost:8000").then(console.log);
          getS3MediaBrowserKeys(
            {
              fileSize: 100000,
              image: { name: "image-name" },
              imageName: "image-name",
              metadata: { uploadId: "someid" },
              tag: "some-ag",
              type: "image",
            },
            (keys) => {
              console.log({ keys });
              if (keys) {
                const file = new File([], "image-name", { type: "image" });
                uploadFileToS3(
                  {
                    fileSize: 100000,
                    image: file,
                    imageName: "image-name",
                    metadata: { uploadId: "someid" },
                    tag: "some-ag",
                    type: "image",
                  },
                  keys
                );
              }
            }
          );
        }}
      >
        Do it
      </button> */
}
