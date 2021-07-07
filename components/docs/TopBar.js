import DocsLogo from "./DocsLogo";
import SearchBar from "../global/SearchBar";
import MenuButton from "./MenuButton";

export default function TopBar() {
  return (
    <header className="flex justify-between h-16 border-b border-black-20 p-2 lg:justify-end">
      <div className="flex lg:hidden">
        <DocsLogo />
      </div>
      <div className="h-full lg:hidden">
        <MenuButton />
      </div>
      <div className="hidden lg:flex w-full justify-end">
        <SearchBar />
      </div>
    </header>
  );
}
