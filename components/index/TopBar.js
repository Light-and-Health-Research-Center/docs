import MSLogo from "../global/MSLogo";
import Link from "next/link";
import SearchBar from "../global/SearchBar";

export default function TopBar() {
  return (
    <header className="flex justify-between h-16 border-b border-black-20 p-2">
      <Link href="/">
        <a className="h-auto w-52 rounded-sm ms-focus-barbiePink focus:ring-offset-4 pr-2">
          <MSLogo />
        </a>
      </Link>
      <SearchBar />
    </header>
  );
}
