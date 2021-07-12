import NavDisclosure from "./NavDisclosure";
import SearchBar from "../global/SearchBar";
import SearchResults from "../global/SearchResults";
import { useSearch } from "../global/SearchContext";

export default function MobileNav({ structure, title, path, slug }) {
  const searchContext = useSearch();
  return (
    <div className="bg-white-off p-4">
      <div className="h-12 flex mb-4">
        <SearchBar center={true} mobile />
      </div>

      <div className="pl-2 pt-2">
        {searchContext.active && searchContext.results.length > 0 && (
          <SearchResults topBorder={true} />
        )}
        {!(searchContext.active && searchContext.results.length > 0) && (
          <NavDisclosure
            structure={structure}
            title={title}
            path={path}
            slug={slug}
          />
        )}
      </div>
    </div>
  );
}
