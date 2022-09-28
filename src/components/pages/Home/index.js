// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/movies";
import Navigation from "../../general-components/navigation";

const Home = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();
  return (
    <div>
      <Navigation />
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </div>
  );
};

export default Home;
