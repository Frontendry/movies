// React Router
import { Link } from "react-router-dom";

const Movie = ({ movieData }) => {
  const { Title, Year, imdbID, PosterNew, Runtime } = movieData;
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

        <div className="flex items-center">
          {Year && <span className="text-slate-500 text-sm">{Year}</span>}{" "}
          <span className="w-px h-3 mx-2 bg-slate-500"></span>
          {Runtime && <span className="text-slate-500 text-sm">{Runtime}</span>}
        </div>
      </div>
    </article>
  );
};

export default Movie;
