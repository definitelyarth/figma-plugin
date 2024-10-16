import { h } from "preact";
import { useScreenContext } from "./contexts/ScreenContext";
import Header from "./components/Header";
import ExternalIcon from "./icons/ExternalIcon";
import { Button } from "./components/Button";
import { useMutatePopulateImages } from "./state/mutation";
import { TransformOutput } from "src/transformers/types";
import { downloadRktm } from "./utils/download";
import Loader from "./components/Loader";
import { emit } from "@create-figma-plugin/utilities";

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
            disabled={selection === undefined || isLoading || isError}
            onClick={async () => {
              if (currStep === 0) {
                await mutateAsync({ data: selection as TransformOutput });
                emit("cluster", finalDoc?.children![0]);
                nextStep();
              } else if (currStep === 1) {
                if (finalDoc) downloadRktm(finalDoc);
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
