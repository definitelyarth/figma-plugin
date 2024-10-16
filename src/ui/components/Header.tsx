import { h } from "preact";
import Gear from "../icons/Gear";
import Dropdown from "./DropDown";
import LogoutIcon from "../icons/LogoutIcon";
import { useMutateLogout } from "../state/mutation";

const Header = () => {
  const { mutateAsync: logout } = useMutateLogout();

  return (
    <div
      className={"flex justify-between w-full items-center px-6"}
      style={{ borderBottomWidth: 1 }}
    >
      <span className={"border-b-2 border-brand text-black py-2 px-2"}>
        Frames
      </span>
      <span className={"cursor-pointer"}>
        <Dropdown
          label={<Gear />}
          onSelect={console.log}
          options={[
            {
              element: (
                <div
                  className={
                    "flex gap-2 w-full text-alert p-2 rounded-xl items-center cursor-pointer"
                  }
                >
                  <LogoutIcon /> Logout
                </div>
              ),
              onClick: () => {
                logout();
              },
            },
          ]}
        />
      </span>
    </div>
  );
};

export default Header;
