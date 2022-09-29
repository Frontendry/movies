// Context
import { useSearchContext } from "../../../context/searchContextStore";
import SearchResults from "./SearchResults";
import NoSearchResult from "./NoSearchResult";

// Components

const SearchDropDown = () => {
  const { searchedData, inputRef } = useSearchContext();

  return (
    <div
      className={`absolute left-10 right-10 top-full bg-slate-500 text-white ${
        inputRef.current !== null && inputRef.current.value === ""
          ? "hidden"
          : ""
      }`}
    >
      {searchedData && searchedData.length ? (
        <SearchResults filmsData={searchedData} />
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchDropDown;
