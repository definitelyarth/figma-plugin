import { h } from "preact";
import Gear from "../icons/Gear";
import {} from "@create-figma-plugin/ui";

const Header = () => {
  return (
    <div
      className={"flex justify-between w-full items-center px-6"}
      style={{ borderBottomWidth: 1 }}
    >
      <span className={"border-b-2 border-brand text-black py-2 px-2"}>
        Frames
      </span>
      <Gear />
    </div>
  );
};

export default Header;
