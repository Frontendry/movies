import { Link } from "react-router-dom";

const MovieFull = ({ movieData }) => {
  const { PosterNew, Title, Year, Runtime, Plot, Actors, Genre } = movieData;

  const GenreList = Genre.split(", ");
  return (
    <section>
      <div className="container mx-auto px-7 py-8 flex ">
        <figure className="w-80">
          <img src={PosterNew} alt={Title} />
        </figure>

        <div className="grow shrink basis-0 text-white pl-10">
          <h1 className="text-3xl mb-4">{Title}</h1>

          <div className="flex items-center mb-6">
            <span className="text-slate-500 text-sm">{Year}</span>

            <span className="w-px h-3 mx-2 bg-slate-500"></span>

            <span className="text-slate-500 text-sm">{Runtime}</span>
          </div>

          <div className="leading-5 text-slate-300">{Plot}</div>

          <div className="flex text-slate-300 border-t border-slate-500 pt-3 mt-10">
            <p>
              <strong>Actors: </strong>
              {Actors}
            </p>
          </div>

          <div className="grid grid-flow-col auto-cols-max gap-x-3 mt-10">
            {GenreList.map((Genre, index) => (
              <Link
                to={`/genre/${Genre.toLowerCase()}`}
                key={`genre_${Genre}_${index}`}
                className="p-2 border border-slate-500 rounded-full text-slate-500"
              >
                {Genre}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieFull;
