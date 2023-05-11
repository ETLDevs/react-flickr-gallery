import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Like = (props) => {
const {id, title, url} = props;
const { setFavorites, storage, setIds, ids} = useContext(FavoritesContext)

console.log(id)

return !ids.includes(id) ? ( 

        <i onClick={()=> {
         setFavorites([...JSON.parse(storage), {id, webformatURL:url, tags:title}])
         setIds(current => [...current, id])
        }} className="like fa-solid fa-heart"></i>
     ) :  ( 

        <i onClick={()=> {
         setFavorites(current => current.filter(img =>img.id !== id))
         setIds(current => current.filter(ids => ids !== id))
        }} className="unlike fa-solid fa-heart"></i>
     );

}
 
export default Like;