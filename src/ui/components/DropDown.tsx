import { useState, useRef, useEffect, FC } from "react";
import { h } from "preact";

// Define the props type for the Dropdown
interface DropdownProps<T> {
  label: h.JSX.Element;
  options: { element: h.JSX.Element; onClick: () => void }[];
  onSelect: (option: T) => void;
}

const Dropdown = <T extends string | number | object>({
  label,
  options,
  onSelect,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
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

  // Handle option selection
  const handleSelect = (onClick: () => void) => {
    onClick();
    setIsOpen(false); // Close the dropdown
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
