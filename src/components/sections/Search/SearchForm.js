// Node Modules
import { useMemo, useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

// Context
import { useFilmsContext } from "../../../context/filmsContextStore";
import { useSearchContext } from "../../../context/searchContextStore";

const SearchForm = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();

  // Searched Data State
  const { setSearchedData } = useSearchContext();

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

  const inputRef = useRef();

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
  }, [allFilms, searchQuery, setSearchedData, debouncedChangeHandler]);

  return (
    <form>
      <input
        type="search"
        placeholder="Search Here"
        onChange={debouncedChangeHandler}
        ref={inputRef}
      />
    </form>
  );
};

export default SearchForm;
