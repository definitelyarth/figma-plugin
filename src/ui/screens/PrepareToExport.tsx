import { h } from "preact";
import Table from "../icons/Table";
import { useScreenContext } from "../contexts/ScreenContext";
import CrossIcon from "../icons/CrossIcon";
import { emit } from "@create-figma-plugin/utilities";
import Accordion from "../components/Accordion";

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
          <div className="flex justify-between p-2 w-full">
            <span className={"text-xs"}>Selected elements</span>
            <div
              className="flex items-center gap-2 text-brand fill-brand cursor-pointer"
              onClick={() => {
                emit("selection-clear");
              }}
            >
              <CrossIcon /> Clear Selection
            </div>
          </div>
          <Accordion
            items={Object.keys(selection.annotations).map((k) => {
              const frame = selection.annotations[k];
              const error = frame.annotations.findIndex(
                (e) => e.type === "error"
              );
              const warning = frame.annotations.findIndex(
                (e) => e.type === "info"
              );
              return {
                content: (
                  <div className={"text-xs"}>
                    {frame.annotations.length === 0 ? (
                      <p>No issues found</p>
                    ) : (
                      frame.annotations.map((a) => {
                        return <div>{a.message}</div>;
                      })
                    )}
                  </div>
                ),
                title: selection.annotations[k].name,
                error: error !== -1,
                warning: warning !== -1,
              };
            })}
          />
        </div>
      )}
    </div>
  );
};

export default PrepareToExport;
