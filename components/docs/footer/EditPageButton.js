import { PencilIcon } from "@primer/octicons-react";

export default function EditPageButton({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      className=" group bg-white-100 border rounded-md text-xs py-1 px-2 text-vividCerulean-100 hover:bg-vividCerulean-100 hover:text-white-100 focus:bg-vividCerulean-100 focus:text-white-100 focus:outline-none active:bg-vividCerulean-60"
    >
      <PencilIcon className="text-black-80 mr-2 group-hover:text-white-100 group-focus:text-white-100" />
      Edit this page
    </a>
  );
}
