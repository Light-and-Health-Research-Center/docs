import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function MenuButton({ open }) {
  return (
    <>
      {open ? (
        <XIcon className="h-full my-auto text-barbiePink-100 w-6 mx-3" />
      ) : (
        <MenuIcon className="h-full my-auto text-barbiePink-100 w-6 mx-3" />
      )}
    </>
  );
}
