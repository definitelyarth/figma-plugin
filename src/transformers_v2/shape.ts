import { PathJSON, RoundedRectJSON } from "rocketium-types-arth";
import { ShapeNode, WithAnnotations } from "./types";
import { FigmaBaseNodeToRpfBaseElement } from "./baseNode";

class FigmaShapeToPath {
  constructor(
    private data: {
      node: Exclude<ShapeNode, RectangleNode>;
      name: string;
      xOffset: number;
      yOffset: number;
    }
  ) {}

  transform(): WithAnnotations<PathJSON> {
    const baseNodeResult = FigmaBaseNodeToRpfBaseElement({
      xOffset: this.data.xOffset,
      yOffset: this.data.yOffset,
      node: this.data.node,
      displayText: this.data.name,
    });
    const paths =
      this.data.node.type === "VECTOR"
        ? this.data.node.vectorPaths.map((d) => d.data)
        : this.data.node.fillGeometry.map((d) => d.data);
    const hash = `rounded-rect:${paths.toString()}:${baseNodeResult.data.baseElement.fill.toString()}`;
    const _2dPaths: (string | number)[][] = [];
    paths.forEach((p) => {
      _2dPaths.push(...this.parsePathData(p));
    });
    const path: PathJSON = {
      ...baseNodeResult.data.baseElement,
      scale: 1,
      id: hash,
      type: "path",
      dataType: "SHAPE",
      path: _2dPaths,
    };
    return { data: path, annotations: baseNodeResult.annotations };
  }

  parsePathData(path: string): (string | number)[][] {
    const commandPattern = /([a-zA-Z])([^a-zA-Z]*)/g;

    return Array.from(path.matchAll(commandPattern)).map((match) => {
      const command = match[1];
      const params = match[2]
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter((n) => !isNaN(n));
      return [command, ...params];
    });
  }
}

export { FigmaShapeToPath };
