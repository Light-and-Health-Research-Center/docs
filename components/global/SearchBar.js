import { SearchIcon } from "@heroicons/react/solid";
import { useSearch } from "../global/SearchContext";
import { useEffect } from "react";

export default function SearchBar({ center, searchRef }) {
  const searchContext = useSearch();

  return (
    <div
      ref={searchRef}
      className={`${
        center ? "mx-auto" : ""
      } group bg-white-100 w-3/4 max-w-sm p-2 rounded-full flex border border-black-20 ms-focus-barbiePink z-30`}
    >
      <SearchIcon className="text-black-20 px-2 w-16" />
      <input
        onChange={searchContext.onChange}
        onFocus={searchContext.onFocus}
        className="text-black-60 w-full rounded mx-2 focus:outline-none"
        type="text"
        placeholder="Search Documentation"
        value={searchContext.query}
      />
    </div>
  );
}
