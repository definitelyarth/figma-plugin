import { RocketiumPortableFormat } from "rocketium-types";

const downloadRktm = async (rocketiumDocument: RocketiumPortableFormat) => {
  // const brotli = await brotliPromise;

  // const encoder = new TextEncoder();
  const jsonString = JSON.stringify(rocketiumDocument);
  // const data = brotli.compress(encoder.encode(jsonString));

  const blobURL = window.URL.createObjectURL(new Blob([jsonString]));
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = `${rocketiumDocument.metadata.name}.rktm`;
  link.click();

  window.URL.revokeObjectURL(blobURL);
};

export { downloadRktm };
