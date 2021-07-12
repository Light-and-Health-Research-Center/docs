import SearchResults from "./SearchResults";
import { useSearch } from "./SearchContext";

export default function searchResultsDialog() {
  const searchContext = useSearch();
  return (
    <>
      {searchContext.active &&
        searchContext.results.length > 0 &&
        (searchContext.dialogOpen || searchContext.dialogWaitToClose) && (
          <>
            <div className="hidden lg:block fixed top-0 h-full w-full pointer-events-none bg-white-100 bg-opacity-50 z-10"></div>
            <div className="hidden lg:block absolute top-20 right-2 border rounded-lg bg-white-100 drop-shadow-softerBlur p-2 w-3/5 max-w-xl z-10">
              <SearchResults topBorder={false} />
            </div>
          </>
        )}
    </>
  );
}
