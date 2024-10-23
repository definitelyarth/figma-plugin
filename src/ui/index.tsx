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
import ProgressBar from "./components/ProgressBar";

const MainUI = () => {
  const {
    CurrScreen,
    selection,
    currStep,
    finalDoc,
    nextStep,
    isError,
    isLoading,
    uploadProgress,
  } = useScreenContext();
  const { mutateAsync, isLoading: isPopulateLoading } =
    useMutatePopulateImages();

  return (
    <div
      class={
        "flex flex-col w-full min-h-full items-center justify-center relative bg-white h-full"
      }
    >
      <Header />
      {isPopulateLoading ? (
        <div
          className={
            "flex flex-col w-full h-full p-20 items-center justify-center gap-2"
          }
        >
          <h1 className={"text-xs font-normal text-neutral-900"}>
            Preparing frames for export
          </h1>
          <ProgressBar progress={uploadProgress} />
        </div>
      ) : isLoading && currStep == 0 ? (
        <div
          className={
            "flex flex-col w-full h-full p-2 text-black animate-pulse items-center justify-center"
          }
        >
          Loading...
        </div>
      ) : (
        <CurrScreen />
      )}
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
        {isPopulateLoading ? (
          <Loader />
        ) : (
          <Button
            disabled={
              (selection === undefined && finalDoc === null) ||
              isLoading ||
              isError ||
              isPopulateLoading
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
