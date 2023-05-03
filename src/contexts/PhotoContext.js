import { createContext, useState } from "react";
import { API_KEY } from "../api/key";

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
 
  const [photos, setPhotos] = useState([]);
  const [ids, setIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchPhotos = (query, pageNum) => {
    setIsLoading(true);
    
    const url = query === 'recent' ? `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=12&page=${pageNum}` : `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&format=json&nojsoncallback=1&per_page=12&page=${pageNum}`;
    
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {

        if (pageNum > 1) {
          data.photos.photo.forEach((photo) => {
            if (!ids.includes(photo.id)){
             setPhotos((current) => [...current, photo]);}
          });

        } 
        if(pageNum === 1) {
          setIds([]);
          setPhotos(data.photos.photo);
        }
        data.photos.photo.forEach((photo) => {
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
