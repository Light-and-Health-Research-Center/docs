import { useSearch } from "./SearchContext";
import Link from "next/link";

export default function SearchResults({ topBorder }) {
  const searchContext = useSearch();
  return (
    <>
      <ul className="max-h-96 overflow-auto">
        {searchContext.results.map(({ title, desc, link, slug }, idx) => (
          <Link href={link} key={link}>
            <a
              className="group focus:outline-none"
              onClick={() => {
                searchContext.setDialogWaitToClose(true);
              }}
            >
              <li
                className={`${
                  idx == 0 ? (topBorder ? "border-t" : "") : "border-t"
                } py-3 px-2 hover:bg-blue-50 group-focus:bg-blue-50`}
              >
                <p className="text-xs mb-2">{slug.join(" / ")}</p>
                <h6>{title}</h6>
                <p className="text-sm line-clamp-3">{desc}</p>
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </>
  );
}
