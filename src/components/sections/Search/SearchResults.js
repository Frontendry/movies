import { Link } from "react-router-dom";

const SearchResults = ({ filmsData }) => {
  return (
    <ul>
      {filmsData.map((film) => (
        <li key={film.imdbID}>
          <Link
            to={`movie/${film.imdbID}`}
            className="p-3 border-b border-slate-400 block"
          >
            {film.Title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
