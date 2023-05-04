import { createContext, useState } from "react";
import { API_KEY } from "../api/key";

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
 
  const [photos, setPhotos] = useState([]);
  const [ids, setIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPhotos = (query, pageNum) => {
    setIsLoading(true);
    
    const url = query === 'recent' ? `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&page=${pageNum}&order=latest` : `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&page=${pageNum}`;
    
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {

        if (pageNum > 1) {
          data.hits.forEach((photo) => {
            if (!ids.includes(photo.id)){
             setPhotos((current) => [...current, photo]);}
          });

        } 
        if(pageNum === 1) {
          setIds([]);
          setPhotos( data.hits);
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
  };

  return (
    <PhotoContext.Provider value={{ fetchPhotos, photos, isLoading }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
