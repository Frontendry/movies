// React Modules
import { createContext, useContext } from "react";

// Films Library
import films from "../api/film.json";

const filmsContext = createContext();

export const FilmsContextProvider = ({ children }) => {
  // Get Genres
  const genresSelection = (filmsCollection) => {
    const allGenresList = [];

    filmsCollection.forEach((film) => {
      const perFilmGenres = film.Genre.split(", ");

      perFilmGenres.forEach((genre) => {
        if (!allGenresList.includes(genre)) {
          allGenresList.push(genre);
        }
      });
    });

    return allGenresList;
  };

  // Unique Genres
  const allGenres = genresSelection(films);

  const providerVal = {
    allFilms: films,
    allGenres,
  };

  return (
    <filmsContext.Provider value={providerVal}>
      {children}
    </filmsContext.Provider>
  );
};

// Custom Hook for useContext
export const useFilmsContext = () => useContext(filmsContext);
