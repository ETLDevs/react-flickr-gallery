import { createContext, useCallback, useState } from "react";
import { API_KEY } from "../api/key";

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [ids, setIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPhotos = useCallback((query, pageNum) => {
    setIsLoading(true);
    if (query === "favorites") {
      const storageFavorites = localStorage.getItem("favorites");
      setIsLoading(false);
      return setPhotos(storageFavorites ? JSON.parse(storageFavorites) : []);
    }
    const url =
      query === "recent"
        ? `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&page=${pageNum}&order=latest&editors_choice=true`
        : `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&editors_choice=true&page=${pageNum}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (pageNum > 1) {
          data.hits.forEach((photo) => {
            if (!ids.includes(photo.id)) {
              setPhotos((current) => [...current, photo]);
            }
          });
        }
        if (pageNum === 1) {
          setIds([]);
          setPhotos(data.hits);
        }
        data.hits.forEach((photo) => {
          setIds((current) => [...current, photo.id]);
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setPhotos(null);
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <PhotoContext.Provider value={{ fetchPhotos, photos, isLoading }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
