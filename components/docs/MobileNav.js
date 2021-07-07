import NavDisclosure from "./NavDisclosure";
import SearchBar from "../global/SearchBar";
import Link from "next/link";

export default function MobileNav({ structure, title, path, slug }) {
  return (
    <div className="bg-white-off p-4">
      <div className="mx-auto h-16">
        <SearchBar center={true} />
      </div>
      <div className="pl-2 pt-6">
        <Link href={path}>
          <a className="group focus:outline-none">
            <div className="pb-2">
              <p className="group-focus:text-vividCerulean-80 group-hover:text-vividCerulean-80 group-active:text-vividCerulean-100">
                {title}
              </p>
            </div>
          </a>
        </Link>
        <NavDisclosure structure={structure} path={path} slug={slug} />
      </div>
    </div>
  );
}
