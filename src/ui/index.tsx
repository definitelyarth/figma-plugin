import { h } from "preact";
import { useScreenContext } from "./contexts/ScreenContext";
import Header from "./components/Header";
import ExternalIcon from "./icons/ExternalIcon";
import { Button } from "./components/Button";
import { useMutatePopulateImages } from "./state/mutation";
import { TransformOutput } from "src/transformers/types";
import Loader from "./components/Loader";
import { emit } from "@create-figma-plugin/utilities";
import { downloadRktm } from "./utils/download";
import AlertOctagon from "./icons/AlertOctagon";

const MainUI = () => {
  const { CurrScreen, selection, currStep, finalDoc, nextStep, isError } =
    useScreenContext();
  const { mutateAsync, isLoading } = useMutatePopulateImages();

  return (
    <div
      class={
        "flex flex-col w-full min-h-full items-center justify-center relative bg-white h-full"
      }
    >
      <Header />
      <CurrScreen />
      {isError && (
        <div
          className={"flex gap-2 items-center bg-lightError50 py-2 px-4 w-full"}
        >
          <div className={"bg-lightError100 p-2 rounded-md"}>
            <AlertOctagon className={"stroke-lightError700"} />
          </div>
          <span className={"text-black"}>
            The process failed. Please try again
          </span>
        </div>
      )}
      <div
        className={
          "flex justify-between border-t w-screen p-2 px-3 items-center stick bottom-0 z-10"
        }
      >
        <a
          href=""
          className={"text-brand flex gap-1 items-center font-semibold"}
        >
          <ExternalIcon />
          Guidelines for export Rktm
        </a>
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            disabled={
              (selection === undefined && finalDoc === undefined) ||
              isLoading ||
              isError
            }
            onClick={async () => {
              if (currStep === 0) {
                const lockedSelection = { ...selection };
                const doc = await mutateAsync({
                  data: lockedSelection as TransformOutput,
                });
                if (doc) emit("preview-export", doc);
                nextStep();
              } else if (currStep === 1) {
                if (finalDoc) {
                  downloadRktm(finalDoc);
                }
              }
            }}
            className={"p-1"}
          >
            {currStep == 0 ? "Prepare for Export" : "Export"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainUI;
