// Node Modules
import { useMemo, useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceDelay = 500;

  const fetchData = (queryStr) => {};

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

    fetchData(searchQuery);

    // Cleanup. Stop the invocation of the debounced function after unmounting
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [searchQuery, debouncedChangeHandler]);

  return (
    <form>
      <input
        type="search"
        placeholder="Search Here"
        onChange={debouncedChangeHandler}
      />
    </form>
  );
};

export default SearchForm;
