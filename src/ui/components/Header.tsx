import { h, JSX } from "preact";
import Gear from "../icons/Gear";
import { Modal } from "@create-figma-plugin/ui";
import { Button } from "./Button";
import { useState } from "preact/hooks";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpenButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event);
    setOpen(true);
  }
  function handleCloseButtonClick(
    event: JSX.TargetedMouseEvent<HTMLButtonElement>
  ) {
    console.log(event);
    setOpen(false);
  }
  const style = {
    height: "160px",
    padding: "12px",
    width: "240px",
  };

  return (
    <div
      className={"flex justify-between w-full items-center px-6"}
      style={{ borderBottomWidth: 1 }}
    >
      <span className={"border-b-2 border-brand text-black py-2 px-2"}>
        Frames
      </span>
      <span onClick={handleOpenButtonClick} className={"cursor-pointer"}>
        <Gear />
      </span>
      <Modal open={open}>
        <div style={style}>
          <Button onClick={handleCloseButtonClick}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
