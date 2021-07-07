import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function MenuButton({ open }) {
  return (
    <button className="cursor-pointer w-auto h-full bg-white-off rounded-md border border-black-20 ms-focus-barbiePink">
      {open ? (
        <XIcon className="h-full my-auto text-barbiePink-100 w-6 mx-3" />
      ) : (
        <MenuIcon className="h-full my-auto text-barbiePink-100 w-6 mx-3" />
      )}
    </button>
  );
}
