import { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import Image from "./Image";
import LoadMore from "./LoadMore";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Gallery = ({query}) => {
const {fetchPhotos, photos} = useContext(PhotoContext);
const {searchValue} = useParams()
const [pageNum, setPageNum] = useState(1);

const keyword = query ? query : searchValue 

useEffect(() => {
  setPageNum(1)
}, [keyword])

useEffect(() => {
fetchPhotos(keyword, pageNum) // eslint-disable-next-line 
}, [pageNum, keyword])



  return photos.length  ? (
    <div className="galleryContainer">
    <h2>results of {keyword}</h2>
    <h3>{photos.length} images</h3>
    <div className="gallery">
      {
      photos.map((photo) => {
          return (
            <Image  title={photo.tags} url={photo.webformatURL} key={photo.id} />
          );
      })}
    </div>
    <LoadMore pageNum={pageNum} setPageNum={setPageNum}/>
    </div>
) 
  : (
    <div className="empty">No images were found.
    Here's a cat
    <img alt="cat-hug" src="https://i.imgur.com/MqGBqZs.gif" ></img>
    </div>
  );
};

export default Gallery;
