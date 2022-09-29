// Node Modules
import { useMemo, useState, useEffect } from "react";
import debounce from "lodash.debounce";

// Context
import { useFilmsContext } from "../../../context/filmsContextStore";
import { useSearchContext } from "../../../context/searchContextStore";

const SearchForm = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();

  // Searched Data State
  const { inputRef, setSearchedData } = useSearchContext();

  // Search Query State
  const [searchQuery, setSearchQuery] = useState("");

  const debounceDelay = 500;

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, debounceDelay),
    []
  );

  useEffect(() => {
    // Update Value of inputRef. Controlled inputs is buggy with useMemo.
    inputRef.current.value = searchQuery;

    const fetchData = (films, queryStr) => {
      const queriedFilms = films.filter((film) =>
        film.Title.toLowerCase().includes(queryStr.toLowerCase())
      );

      if (queryStr === "") {
        setSearchedData([]);
      }
      setSearchedData(queriedFilms);
    };

    allFilms.length && searchQuery !== "" && fetchData(allFilms, searchQuery);

    // Cleanup. Stop the invocation of the debounced function after unmounting
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [
    inputRef,
    allFilms,
    searchQuery,
    setSearchedData,
    debouncedChangeHandler,
  ]);

  return (
    <form className="w-full h-14 bg-white rounded-full overflow-hidden">
      <label className="relative w-full h-full flex items-center">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className="bi bi-search text-2xl px-3"></i>
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full h-full border border-slate-300 rounded-md py-2 pl-14 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="search"
          placeholder="Search Here"
          onChange={debouncedChangeHandler}
          ref={inputRef}
        />
      </label>
    </form>
  );
};

export default SearchForm;
