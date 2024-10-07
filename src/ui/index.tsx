import { h } from "preact";
import { useScreenContext } from "../contexts/ScreenContext";

const MainUI = () => {
  const { CurrScreen } = useScreenContext();

  return (
    <div
      class={
        "flex flex-col w-full min-h-full overflow-scroll items-center justify-center h-[100vh] relative"
      }
    >
      <CurrScreen />
    </div>
  );
};

export default MainUI;
