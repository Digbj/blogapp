import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (post) => {
    setFavourites((prevFavourites) => [...prevFavourites, post]);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};


