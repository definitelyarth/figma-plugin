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

const MainUI = () => {
  const { CurrScreen, selection, currStep, finalDoc, nextStep } =
    useScreenContext();
  const { mutateAsync, isLoading, isError } = useMutatePopulateImages();

  return (
    <div
      class={
        "flex flex-col w-full min-h-full overflow-scroll items-center justify-center relative bg-white h-screen"
      }
    >
      <Header />
      <CurrScreen />
      <div
        className={"flex justify-between border-t w-screen p-4 items-center"}
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
                if (doc) emit("preview-export", lockedSelection);
                nextStep();
              } else if (currStep === 1) {
                if (finalDoc) {
                  downloadRktm(finalDoc);
                }
              }
            }}
          >
            {currStep == 0 ? "Prepare for Export" : "Export"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default MainUI;
