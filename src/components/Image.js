const Image = ({title, url}) => {
    return ( 
<div className="imgContainer">
              <img width={'200px'}
                title={title}
                alt={title}
                src={url}
              ></img>
            </div>
     );
}
 
export default Image;