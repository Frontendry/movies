// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/Movies/Movies";
import Header from "../../sections/Header/Header";
import SearchWrapper from "../../sections/Search/SearchWrapper";

const Home = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();
  return (
    <>
      <Header />
      <SearchWrapper />
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </>
  );
};

export default Home;
