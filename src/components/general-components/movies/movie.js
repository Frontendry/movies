// React Router
import { Link } from "react-router-dom";

const Movie = ({ movieData }) => {
  const { Title, Year, imdbID, PosterNew } = movieData;
  return (
    <article>
      {PosterNew && (
        <figure>
          <Link to={`/movie/${imdbID}`}>
            <img src={PosterNew} alt={Title} />
          </Link>
        </figure>
      )}

      <div className="mt-2">
        {Title && (
          <h3 className="font-bold text-white mb-2">
            <Link to={`/movie/${imdbID}`}>{Title}</Link>{" "}
          </h3>
        )}

        {Year && <span className="text-slate-500 block text-sm">{Year}</span>}
      </div>
    </article>
  );
};

export default Movie;
