import Image from "./Image";

const Carousel = (props) => {
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
              // if (!target.nextSibling)
              //   setTarget(target ?  : null);
            }}
          >
            <i className="fa-solid fa-arrow-right fa-beat"></i>
          </button>
        </div>
        <div className="carouselImg">
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
