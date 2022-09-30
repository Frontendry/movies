// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";

// Components
import Movies from "../../general-components/movies";
import Header from "../../sections/header";
import SearchWrapper from "../../sections/search";

const Home = () => {
  // Get All Films
  const { allFilms } = useFilmsContext();
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <SearchWrapper />
      <Movies moviesCollection={allFilms} collectionTitle="Latest Movies" />
    </main>
  );
};

export default Home;
