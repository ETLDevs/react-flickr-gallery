import { useContext } from "react";
import { PhotoContext } from "../contexts/PhotoContext";
import Image from "./Image";

const Carousel = (props) => {
  const { photos } = useContext(PhotoContext);
  const { target, setTarget } = props;
  return (
    <>
      <div className="darkBg" onClick={() => setTarget(null)}></div>

      <div className="carousel">
        <div className="btnsContainer">
          <button
            onClick={() => {
              if (!target) return setTarget(null);
              setTarget(
                target.previousSibling
                  ? target.previousSibling
                  : target.parentElement.lastChild
              );
            }}
          >
            <i className="fa-solid fa-arrow-left fa-beat"></i>
          </button>
          <button
            onClick={() => {
              setTarget(
                target.nextSibling
                  ? target.nextSibling
                  : target.parentElement.firstChild
              );
            }}
          >
            <i className="fa-solid fa-arrow-right fa-beat"></i>
          </button>
        </div>
        <div className="carouselImg">
          <div className="counter">
            <span>{target.firstChild.dataset.index}</span>/
            <span>{photos.length}</span>
          </div>
          <Image
            url={target.firstChild.src}
            title={target.firstChild.alt}
            id={parseInt(target.firstChild.dataset.id)}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
