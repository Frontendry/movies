// Context
import { SearchContextProvider } from "../../../context/searchContextStore";

// Components
import SearchForm from "./searchForm";
import SearchDropDown from "./searchDropDown";

const SearchWrapper = () => {
  return (
    <>
      <section className="mt-10 mb-24">
        <div className="container mx-auto px-7">
          <div className="relative w-1/2 mx-auto">
            <SearchContextProvider>
              <SearchForm />
              <SearchDropDown />
            </SearchContextProvider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchWrapper;
