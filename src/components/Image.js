import Like from "./Like";

const Image = (props) => {
  const { title, url, id, number } = props;

  return (
    <>
      <div className="imgContainer">
        <img
          className="galleryImg"
          title={title}
          alt={title}
          src={url}
          data-id={id}
          data-index={number}
        ></img>

        <Like id={id} url={url} title={title} />
        <div className="carouselImgDetails">{title}</div>
      </div>
    </>
  );
};

export default Image;
