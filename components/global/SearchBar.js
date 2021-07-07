import { SearchIcon } from "@heroicons/react/solid";

export default function SearchBar({ center }) {
  return (
    <div
      className={`${
        center ? "mx-auto" : ""
      } group bg-white-100 w-3/4 max-w-sm p-2 rounded-full flex border border-black-20 ms-focus-barbiePink`}
    >
      <SearchIcon className="text-black-20 px-2 w-16" />
      <input
        className="text-black-60 w-full rounded mx-2 focus:outline-none"
        type="text"
        placeholder="Search Documentation"
      />
    </div>
  );
}
