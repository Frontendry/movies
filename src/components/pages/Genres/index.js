// React Router Modules
import { useParams } from "react-router-dom";

// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/movies";

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
    <>
      <Movies
        moviesCollection={genreNameCollection}
        collectionTitle={capitalizeGenreName}
      />
    </>
  );
};

export default Genre;
