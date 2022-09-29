// React Modules
import { createContext, useContext, useState, useRef } from "react";

// Create Context
const searchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [searchedData, setSearchedData] = useState([]);

  return (
    <searchContext.Provider
      value={{
        inputRef,
        searchedData,
        setSearchedData,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

// Custom Hook for useContext
export const useSearchContext = () => useContext(searchContext);
