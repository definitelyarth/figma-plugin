const readFile = require("node:fs").readFile;
const DocumentNode = require("./schema/compiled").DocumentNode;

const buffer = readFile("./buffed.rktm", (err: any, data: any) => {
  const d = DocumentNode.decode(data);
  console.log(d);
});
