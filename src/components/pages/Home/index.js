// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/movies";

const Home = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();
  return (
    <div>
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </div>
  );
};

export default Home;
