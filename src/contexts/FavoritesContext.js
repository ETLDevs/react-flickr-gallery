import { createContext, useEffect, useMemo, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = (props) => {
  const [storage, setStorage] = useState(localStorage.getItem("favorites"));
  const [favorites, setFavorites] = useState(
    storage ? [...JSON.parse(storage)] : []
  );
  const ids = useMemo(() => favorites.map((img) => img.id), [favorites]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setStorage(localStorage.getItem("favorites"));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ storage, setFavorites, favorites, ids }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
