import DocsLogo from "./DocsLogo";
import SearchBar from "../global/SearchBar";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";
import { Popover } from "@headlessui/react";

export default function TopBar({ structure, title, path, slug }) {
  return (
    <Popover className="sticky top-0 bg-white-100 z-50 lg:static transition duration-250 ease-in-out">
      {({ open }) => (
        <>
          <div className="flex justify-between h-16 border-b border-black-20 p-2 lg:justify-end">
            <div className="flex lg:hidden">
              <DocsLogo img_width="w-56" img_height="h-12" />
            </div>
            <Popover.Button className="appearance-none h-full lg:hidden bg-white-off rounded-md border border-black-20 ms-focus-barbiePink">
              <MenuButton open={open} />
            </Popover.Button>
            <div className="hidden lg:flex w-full justify-end">
              <SearchBar />
            </div>
          </div>
          <Popover.Panel className="h-full lg:hidden overflow-hidden">
            <MobileNav
              structure={structure}
              title={title}
              path={path}
              slug={slug}
            ></MobileNav>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
