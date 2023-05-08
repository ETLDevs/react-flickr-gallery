

const Image = ({title, url, setTarget}) => {

 
    return ( 
      <>
      
<div className="imgContainer" >
              <img className="galleryImg"
               width={'200px'}
                title={title}
                alt={title}
                src={url}
              ></img>
            </div>
           
            </>
     );
}
 
export default Image;