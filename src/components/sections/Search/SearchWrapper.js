// Context
import { SearchContextProvider } from "../../../context/searchContextStore";

// Components
import SearchForm from "./SearchForm";
import SearchDropDown from "./SearchDropDown";

const SearchWrapper = () => {
  return (
    <SearchContextProvider>
      <div className="relative">
        <SearchForm />
        <SearchDropDown />
      </div>
    </SearchContextProvider>
  );
};

export default SearchWrapper;
