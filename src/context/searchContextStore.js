// React Modules
import { createContext, useContext, useState } from "react";

// Create Context
const searchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchedData, setSearchedData] = useState([]);

  return (
    <searchContext.Provider
      value={{
        searchedData,
        setSearchedData,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

// Custom Hook for useContext
export const useFilmsContext = () => useContext(searchContext);
