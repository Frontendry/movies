// Node Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Report Vitals
import reportWebVitals from "./reportWebVitals";

// Styles
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

// Context Provider
import { FilmsContextProvider } from "./context/filmsContextStore";

// Components
import App from "./App";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FilmsContextProvider>
        <Home />
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
]); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FilmsContextProvider>
        <App />
      </FilmsContextProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
