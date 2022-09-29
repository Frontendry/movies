const SearchResults = ({ filmsData }) => {
  return (
    <ul>
      {filmsData.map((film) => (
        <li key={film.imdbID}>{film.Title}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
