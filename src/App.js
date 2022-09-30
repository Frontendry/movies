import { Routes, Route } from "react-router-dom";

// Components
import Home from "./components/pages/home";
import Genre from "./components/pages/genres";
import Movie from "./components/pages/movie";

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
