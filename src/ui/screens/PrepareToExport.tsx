import { h } from "preact";
import Table from "../icons/Table";
import { useScreenContext } from "../contexts/ScreenContext";
import CrossIcon from "../icons/CrossIcon";
import { emit } from "@create-figma-plugin/utilities";
import { FC } from "preact/compat";
import { Annotation } from "src/transformers/types";

const FrameAnnotations: FC<{
  frame: { annotations: Annotation[]; name: string };
}> = ({ frame }) => {
  return <div></div>;
};

const PrepareToExport = () => {
  const { selection } = useScreenContext();

  return (
    <div className={"flex flex-col w-full h-full p-2"}>
      {selection === undefined ? (
        <div className="flex flex-col gap-3 items-center justify-center self-center h-full">
          <div className={"rounded-lg p-4 bg-lightestGray w-fit"}>
            <Table />
          </div>
          <h1 className={"text-sm text-black"}>
            Select one or multiple object to get started
          </h1>
          <p
            className={
              "text-lightGray text-xs font-light text-center leading-5"
            }
          >
            The optimal outcome can be achieved by selecting <br />
            one key visual at a time.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 h-full text-black w-full">
          <div className="flex justify-between px-4 w-full">
            <span>Selected elements</span>
            <div
              className="flex items-center gap-2 text-brand fill-brand cursor-pointer"
              onClick={() => {
                emit("selection-clear");
              }}
            >
              <CrossIcon /> Clear Selection
            </div>
          </div>
          {Object.keys(selection.annotations).map((key, idx) => {
            return (
              <FrameAnnotations frame={selection.annotations[key]} key={idx} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PrepareToExport;
