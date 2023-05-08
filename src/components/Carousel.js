// import { useContext } from "react";
// import { PhotoContext } from "../contexts/PhotoContext";


const Carousel = (props) => {
    const {target, setTarget} = props
  return (
    
    <>
   <div className="darkBg" onClick={() => setTarget(null)}></div>
      
      <div className="carousel">
      <button onClick={() => {
        setTarget(target.previousSibling)
        if(!target.previousSibling) setTarget(target.parentElement.lastChild)
        }}><i className="fa-solid fa-arrow-left fa-beat"></i></button>
        <img src={target.firstChild.src} alt={target.firstChild.alt} />
        <button  onClick={() => {
          setTarget(target.nextSibling)
          if(!target.nextSibling) setTarget(target.parentElement.firstChild)
          }}><i className="fa-solid fa-arrow-right fa-beat"></i></button>
      
      </div>
      
    </>
  );
};

export default Carousel;
