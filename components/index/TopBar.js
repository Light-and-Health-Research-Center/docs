import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import msLogo from "../../public/img/ms_logo.png";

function TopBar() {
  return (
    <header className="flex justify-between h-16 border-b border-black-20 p-2">
      <div className="relative h-auto w-20">
        <Link href="https://www.google.com/">
          <a>
            <Image
              className="cursor-pointer"
              src={msLogo}
              alt="Mount Sinai Health Logo"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
      <SearchBar />
    </header>
  );
}

export default TopBar;
