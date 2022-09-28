// Context
import { FilmsContextProvider } from "./context/filmsContextStore";

// Components
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <FilmsContextProvider>
        <Home />
      </FilmsContextProvider>
    </div>
  );
}

export default App;
