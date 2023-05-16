import { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import Image from "./Image";
import LoadMore from "./LoadMore";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "./Carousel";

const Gallery = ({ query }) => {
  const { fetchPhotos, photos } = useContext(PhotoContext);
  const { searchValue } = useParams();
  const [target, setTarget] = useState("");
  const keyword = query ? query : searchValue;
  useEffect(() => {
    fetchPhotos(keyword, 1);
  }, [keyword, fetchPhotos]);

  return photos.length ? (
    <div className="galleryContainer">
      <h2>results of {keyword}</h2>
      <h3>{photos.length} images</h3>
      <div
        className="gallery"
        onClick={(e) => {
          if (e.target.classList.contains("galleryImg")) {
            setTarget(e.target.parentElement);
          }
        }}
      >
        {photos.map((photo) => {
          return (
            <Image
              title={photo.tags}
              url={photo.webformatURL}
              id={photo.id}
              key={photo.id}
            />
          );
        })}
      </div>
      <LoadMore keyword={keyword} />
      {target && <Carousel target={target} setTarget={setTarget} />}
    </div>
  ) : (
    <div className="empty">
      No images were found. Here's a cat
      <img alt="cat-hug" src="https://i.imgur.com/MqGBqZs.gif"></img>
    </div>
  );
};

export default Gallery;
