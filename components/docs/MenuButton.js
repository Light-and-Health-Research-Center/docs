import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer w-auto h-full bg-white-off rounded-md border border-black-20 ms-focus-barbiePink"
    >
      {isOpen ? (
        <XIcon className="h-full my-auto text-barbiePink-100 w-6 mx-3" />
      ) : (
        <MenuIcon className="h-full my-auto text-barbiePink-100 w-6 mx-3" />
      )}
    </button>
  );
}
