import { Routes, Route } from "react-router-dom";

// Components
import Home from "./components/pages/home/Home";
import Genre from "./components/pages/genres/Genres";
import Movie from "./components/pages/movie/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:imdbId" element={<Movie />} />
        <Route path="genre/:genreName" element={<Genre />} />
      </Routes>
    </>
  );
}

export default App;
