import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { PhotoContext } from "../contexts/PhotoContext";

const Like = (props) => {
  const { id, title, url } = props;
  const { setFavorites, storage, ids } = useContext(FavoritesContext);
  const { fetchPhotos, keyword } = useContext(PhotoContext);

  return !ids.includes(id) ? (
    <i
      onClick={() => {
        setFavorites([
          ...JSON.parse(storage),
          { id, webformatURL: url, tags: title },
        ]);
      }}
      className="like fa-solid fa-heart"
    ></i>
  ) : (
    <i
      onClick={() => {
        setFavorites((current) => current.filter((img) => img.id !== id));
        if (keyword === "favorites") return fetchPhotos(keyword, 1);
      }}
      className="unlike fa-solid fa-heart"
    ></i>
  );
};

export default Like;
