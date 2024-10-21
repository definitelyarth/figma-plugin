import { h } from "preact";
import Table from "../icons/Table";
import { useScreenContext } from "../contexts/ScreenContext";
import CrossIcon from "../icons/CrossIcon";
import { emit } from "@create-figma-plugin/utilities";
import Accordion from "../components/Accordion";
import CheckIcon from "../icons/CheckIcon";
import AlertOctagon from "../icons/AlertOctagon";
import AlertTriangle from "../icons/AlertTriangle";
import FrameIcon from "../icons/FrameIcon";

const PrepareToExport = () => {
  const { selection } = useScreenContext();
  console.log({ selection });
  return (
    <div className={"flex flex-col w-full h-full p-2"}>
      {!selection ? (
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
        <div className="flex flex-col gap-2 h-full text-neutral-900 w-full">
          <div className="flex justify-between py-1 px-2 w-full">
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
            items={Object.keys(selection.frames).map((k, idx) => {
              console.log("sss");
              const frame = selection.frames[k];
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
                      <div className={"flex gap-2 items-center"}>
                        <CheckIcon /> No issues found
                      </div>
                    ) : (
                      frame.annotations.map((a, idx) => {
                        return (
                          <div
                            className={`flex items-center py-2`}
                            style={{ borderTopWidth: `${idx !== 0 ? 1 : 0}` }}
                          >
                            <span className={"px-4"}>
                              {a.type === "error" ? (
                                <AlertOctagon />
                              ) : (
                                <AlertTriangle />
                              )}{" "}
                            </span>
                            {a.element?.name}: {a.message}
                          </div>
                        );
                      })
                    )}
                  </div>
                ),
                title: selection.frames[k].name,
                error: error !== -1,
                warning: warning !== -1,
                Icon: <FrameIcon />,
              };
            })}
          />
        </div>
      )}
    </div>
  );
};

export default PrepareToExport;
