import { h } from "preact";
import { useScreenContext } from "./contexts/ScreenContext";
import Header from "./components/Header";
import ExternalIcon from "./icons/ExternalIcon";
import { Button } from "./components/Button";

const MainUI = () => {
  const { CurrScreen } = useScreenContext();

  return (
    <div
      class={
        "flex flex-col w-full min-h-full overflow-scroll items-center justify-center relative bg-white h-screen"
      }
    >
      <Header />
      <CurrScreen />
      <div
        className={
          "flex justify-between border-t w-screen left-0 p-4 items-center"
        }
      >
        <a
          href=""
          className={"text-brand flex gap-1 items-center font-semibold"}
        >
          <ExternalIcon />
          Guidelines for export Rktm
        </a>
        <Button>Prepare for Export</Button>
      </div>
    </div>
  );
};

export default MainUI;
