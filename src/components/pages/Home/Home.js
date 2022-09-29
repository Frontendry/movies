// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/Movies/Movies";
import SearchWrapper from "../../sections/Search/SearchWrapper";

const Home = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();
  return (
    <div>
      <SearchWrapper />
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </div>
  );
};

export default Home;
