import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext()


const FavoritesContextProvider = (props) => {
    const [storage, setStorage] = useState(localStorage.getItem("favorites"));
    const [favorites, setFavorites] = useState(storage ? [...JSON.parse(storage)] : [])
    const [ids, setIds] = useState(favorites.map(img => img.id));

useEffect(() => {
localStorage.setItem("favorites", JSON.stringify(favorites))
setStorage(localStorage.getItem("favorites"))
},[favorites])

    return ( 
<FavoritesContext.Provider value={{storage, setFavorites, favorites, setIds, ids}}>
{props.children}
</FavoritesContext.Provider>
     );
}
 
export default FavoritesContextProvider;