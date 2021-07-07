import DocsLogo from "./DocsLogo";
import NavDisclosure from "./NavDisclosure";
import Link from "next/link";

export default function SideBar({ structure, title, path, slug }) {
  return (
    <div className="hidden lg:block bg-white-off h-screen w-72 sticky top-0 overflow-y-auto p-2 px-2">
      <div className="px-4 py-2 sticky top-0 bg-white-off">
        <DocsLogo offwhite={true} />
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