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
    <>
    <h2>results of {keyword}</h2>
    <h3>{photos.length} images</h3>
    <div className="gallery">
      {
      photos.map((photo) => {
          return (
            <Image title={photo.title} server={photo.server} id={photo.id} secret={photo.secret} key={photo.id} />
          );
      })}
    </div>
    <LoadMore pageNum={pageNum} setPageNum={setPageNum}/>
    </>
  ) 
  : (
    <div className="empty">No images were found.
    Here's a cat
    <img src="https://i.imgur.com/MqGBqZs.gif" ></img>
    </div>
  );
};

export default Gallery;
