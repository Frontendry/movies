// Context
import { useSearchContext } from "../../../context/searchContextStore";
import SearchResults from "./SearchResults";
import NoSearchResult from "./NoSearchResult";

// Components

const SearchDropDown = () => {
  const { searchedData } = useSearchContext;

  return (
    <div className="absolute left-0 bottom-0">
      {searchedData && searchedData.length ? (
        <SearchResults filmsData={searchedData} />
      ) : (
        <NoSearchResult />
      )}
    </div>
  );
};

export default SearchDropDown;
