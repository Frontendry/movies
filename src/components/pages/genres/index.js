// React Router Modules
import { useParams } from "react-router-dom";

// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/movies";
import Header from "../../sections/header/header";
import SearchWrapper from "../../sections/search/searchWrapper";

const Genre = () => {
  // Get Param Name
  const { genreName } = useParams();

  // Capitalize Param Name
  const capitalizeGenreName =
    genreName.charAt(0).toUpperCase() + genreName.slice(1);

  // All Films
  const { allFilms } = useFilmsContext();

  // Filter Selected Genre
  const genreNameCollection =
    allFilms &&
    allFilms.filter((film) => film.Genre.toLowerCase().includes(genreName));

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <SearchWrapper />
      <Movies
        moviesCollection={genreNameCollection}
        collectionTitle={capitalizeGenreName}
      />
    </main>
  );
};

export default Genre;
