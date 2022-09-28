// React Modules
import { createContext, useContext, useState, useEffect } from "react";

// Films Library
import films from "../api/film.json";

const filmsContext = createContext();

export const FilmsContextProvider = ({ children }) => {
  const [filmData, setFilmData] = useState([]);
  const [genreData, setGenreData] = useState([]);

  const getData = () => {
    fetch("api/film.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (filmsJson) {
        console.log(filmsJson);

        // Set All Films Data
        setFilmData(filmsJson);

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

        setGenreData(genresSelection(filmsJson));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  /* // Get Genres
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
  }; */

  return (
    <filmsContext.Provider
      value={{
        allFilms: filmData,
        allGenres: genreData,
      }}
    >
      {children}
    </filmsContext.Provider>
  );
};

// Custom Hook for useContext
export const useFilmsContext = () => useContext(filmsContext);
