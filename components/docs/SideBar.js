import DocsLogo from "./DocsLogo";

export default function SideBar() {
  return (
    <div className="hidden lg:block bg-white-off h-screen w-72">
      <div className="p-2 px-6 mx-auto">
        <DocsLogo offwhite={true} />
      </div>
    </div>
  );
}
