import { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../contexts/PhotoContext";

const LoadMore = (props) => {
  const { keyword } = props;
  const { isLoading, fetchPhotos } = useContext(PhotoContext);
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    setPageNum(2);
  }, [keyword]);
  return (
    <div className="loadMore">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <button
          onClick={() => {
            setPageNum((num) => num + 1);
            fetchPhotos(keyword, pageNum);
          }}
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
};

export default LoadMore;
