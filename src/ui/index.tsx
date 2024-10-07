import { h } from "preact";
import Logo from "./components/logo";
import { IconCross32 } from "@create-figma-plugin/ui";

const MainUI = () => {
  return (
    <div
      class={
        "flex flex-col w-full min-h-full overflow-scroll  justify-between p-2"
      }
    >
      <h1 className={"text-lg font-semibold"}>Selected elements</h1>
    </div>
  );
};

export default MainUI;
