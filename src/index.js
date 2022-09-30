// Node Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Report Vitals
import reportWebVitals from "./reportWebVitals";

// Styles
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

// Context Provider
import { FilmsContextProvider } from "./context/filmsContextStore";

// Components
import App from "./App";
import Genre from "./components/pages/genres";
import Movie from "./components/pages/movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FilmsContextProvider>
        <App />
      </FilmsContextProvider>
    ),
  },
  {
    path: "genre/:genreName",
    element: (
      <FilmsContextProvider>
        <Genre />
      </FilmsContextProvider>
    ),
  },
  {
    path: "movie/:imdbId",
    element: (
      <FilmsContextProvider>
        <Movie />
      </FilmsContextProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
