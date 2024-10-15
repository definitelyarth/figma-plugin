import { DocumentNode } from "src/types/rpf";

const downloadRktm = (rocketiumDocument: DocumentNode) => {
  const blobURL = window.URL.createObjectURL(
    new Blob([JSON.stringify(rocketiumDocument)], { type: "application/json" })
  );
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = `${rocketiumDocument.name}.rktm`;
  link.click();
  link.setAttribute("download", `${rocketiumDocument.name}.rktm`);
};
export { downloadRktm };
