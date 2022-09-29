import React from "react";

const SearchForm = () => {
  return (
    <form>
      <input type="search" name="searchMovie" id="searchMovie" />

      <button type="submit">
        <i className="bi bi-arrow-right"></i>
      </button>
    </form>
  );
};

export default SearchForm;
