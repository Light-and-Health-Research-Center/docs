import SearchResults from "./SearchResults";
import { useSearch } from "./SearchContext";

export default function SearchResultsDialog({ supportMobile }) {
  const searchContext = useSearch();
  return (
    <>
      {searchContext.active &&
        searchContext.results.length > 0 &&
        (searchContext.dialogOpen || searchContext.dialogWaitToClose) && (
          <>
            <div
              className={` ${
                supportMobile ? "" : "hidden"
              } lg:block fixed top-0 h-full w-full pointer-events-none bg-white-100 bg-opacity-75 z-10`}
            ></div>
            <div
              className={`${
                supportMobile
                  ? "mx-4 md:w-3/5 md:max-w-xl md:right-2"
                  : "hidden w-3/5 max-w-xl right-2"
              } lg:block absolute top-20  border rounded-lg bg-white-100 drop-shadow-softerBlur p-2 z-10`}
            >
              <SearchResults topBorder={false} />
            </div>
          </>
        )}
    </>
  );
}
