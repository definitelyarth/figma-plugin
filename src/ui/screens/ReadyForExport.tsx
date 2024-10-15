import { h } from "preact";
import { useScreenContext } from "../contexts/ScreenContext";

const ReadyForExport = () => {
  const { finalDoc } = useScreenContext();
  console.log({ finalDoc });
  return (
    <div className={"flex flex-col w-full h-full p-2"}>Ready For Export</div>
  );
};

export default ReadyForExport;
