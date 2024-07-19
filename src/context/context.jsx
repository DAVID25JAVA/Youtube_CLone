import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  
  const fetchSelectedCategriesData = (query) => {
    setLoading(true)
    try {
       fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
         setSearchResult(contents)
        console.log(contents);
      })
      setLoading(false)
    } catch (error) {
      console.log("URL :: API :: error : ", error);
    }
  }

  useEffect(() => {
    fetchSelectedCategriesData(selectedCategory);
  }, [selectedCategory]);

  return (
    <context.Provider
      value={{
        loading,
        mobileMenu,
        setMobileMenu,
        setLoading,
        searchResult,
        setSearchResult,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </context.Provider>
  );
};
