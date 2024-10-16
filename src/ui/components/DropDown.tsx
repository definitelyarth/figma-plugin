import { useState, useRef, useEffect, FC } from "react";
import { h } from "preact";

interface DropdownProps {
  label: h.JSX.Element;
  options: { element: h.JSX.Element; onClick: () => void }[];
}

const Dropdown = ({ label, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className={"cursor-pointer"}>
        {label}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2">
          <ul className={"flex flex-col gap-2 justify-center items-center"}>
            {options.map((option, index) => (
              <li
                key={index}
                className="hover:bg-gray-100 cursor-pointer w-full rounded-md"
                onClick={() => handleSelect(option.onClick)}
              >
                {option.element}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
