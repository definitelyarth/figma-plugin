import { RocketiumPortableFormat } from "rocketium-types";

const downloadRktm = (rocketiumDocument: RocketiumPortableFormat) => {
  const blobURL = window.URL.createObjectURL(
    new Blob([JSON.stringify(rocketiumDocument)], { type: "application/json" })
  );
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = `${rocketiumDocument.metadata.name}.rktm`;
  link.click();
  link.setAttribute("download", `${rocketiumDocument.metadata.name}.rktm`);
};
export { downloadRktm };
