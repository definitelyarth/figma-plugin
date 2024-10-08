import { Annotation, ExecutionContext } from "./types";

abstract class Transformer<InputNode, OutputNode> {
  annotations: Annotation[] = [];

  constructor(
    public node: InputNode,
    public xOffset: number,
    public yOffset: number,
    public executionContext: ExecutionContext
  ) {}

  abstract export(): void;
}

export { Transformer };
