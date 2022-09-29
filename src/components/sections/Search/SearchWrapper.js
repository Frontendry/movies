// Context
import { SearchContextProvider } from "../../../context/searchContextStore";

// Components
import SearchForm from "./SearchForm";
import SearchDropDown from "./SearchDropDown";

const SearchWrapper = () => {
  return (
    <SearchContextProvider>
      <section className="relative">
        <div className="container mx-auto px-7">
          <SearchForm />
          <SearchDropDown />
        </div>
      </section>
    </SearchContextProvider>
  );
};

export default SearchWrapper;
