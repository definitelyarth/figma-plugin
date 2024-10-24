import { RocketiumPortableFormat } from "rocketium-types";

const downloadRktm = async (rocketiumDocument: RocketiumPortableFormat) => {
  const cs = new CompressionStream("gzip");
  const jsonString = JSON.stringify(rocketiumDocument);
  const blob = new Blob([jsonString]);
  const compressedStream = blob.stream().pipeThrough(cs);
  const res = await new Response(compressedStream).blob();

  const blobURL = window.URL.createObjectURL(res);
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = `${rocketiumDocument.metadata.name}.rktm`;
  link.click();

  window.URL.revokeObjectURL(blobURL);
};

export { downloadRktm };
