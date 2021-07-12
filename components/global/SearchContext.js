import {
  useContext,
  createContext,
  useCallback,
  useState,
  useRef,
} from "react";

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogWaitToClose, setDialogWaitToClose] = useState(false);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => setResults(res.results));
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    setDialogOpen(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setDialogOpen(false);
      window.removeEventListener("click", onClick);
    }
  });

  const value = {
    searchRef,
    query,
    setQuery,
    active,
    setActive,
    results,
    setResults,
    dialogOpen,
    setDialogOpen,
    dialogWaitToClose,
    setDialogWaitToClose,
    searchEndpoint,
    onChange,
    onFocus,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
