// Context

// Components
import SearchForm from "./SearchForm";
import SearchDropDown from "./SearchDropDown";

const SearchWrapper = () => {
  return (
    <div className="relative">
      <SearchForm />
      <SearchDropDown />
    </div>
  );
};

export default SearchWrapper;
