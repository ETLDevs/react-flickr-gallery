import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";

const LoadMore = ({pageNum, setPageNum}) => {
  const {  isLoading } = useContext(PhotoContext);

 return (
    <div className="loadMore">
      {isLoading ? (
        <div className="loader">LOADING</div>
      ) : (
        <button
          onClick={() => {
            setPageNum(pageNum + 1)
          }}
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
};

export default LoadMore;
