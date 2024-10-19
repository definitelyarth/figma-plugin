import { DocumentNode } from "../../schema/compiled";
import { DocumentNode as RktmDocument } from "src/types/rpf";
import { RocketiumPortableFormat } from "rocketium-types";

const downloadRktm = (rocketiumDocument: DocumentNode) => {
  const doc = DocumentNode.create(rocketiumDocument);
  console.log({ doc });
  const data = DocumentNode.encode(doc).finish();
  const decoded = DocumentNode.decode(data);
  console.log({ decoded });
  const blobURL = window.URL.createObjectURL(
    new Blob([data], { type: "base64" })
  );
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = `${rocketiumDocument.name}.rktm`;
  link.click();
  link.setAttribute("download", `${rocketiumDocument.name}.rktm`);
};
export { downloadRktm };
