import NavDisclosure from "./NavDisclosure";
import SearchBar from "../global/SearchBar";
import Link from "next/link";

export default function MobileNav({ structure, title, path, slug }) {
  return (
    <div className="bg-white-off p-4">
      <div className="h-12 flex">
        <SearchBar center={true} />
      </div>
      <div className="pl-2 pt-6">
        <NavDisclosure
          structure={structure}
          title={title}
          path={path}
          slug={slug}
        />
      </div>
    </div>
  );
}
