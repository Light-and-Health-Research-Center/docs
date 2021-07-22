import DocsLogo from "./DocsLogo";
import NavDisclosure from "./NavDisclosure";
import Link from "next/link";

export default function SideBar({ structure, title, path, slug }) {
  return (
    <div className="hidden lg:block bg-white-off h-screen w-72 sticky top-0 overflow-y-auto p-2 flex-shrink-0">
      <div className="px-4 py-2 sticky top-0 bg-white-off">
        <DocsLogo stacked offwhite img_width="w-52" img_height="h-16" />
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
