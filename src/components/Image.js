const Image = ({title, server, id, secret}) => {
    return ( 
<div className="imgContainer">
              <img
                title={title}
                alt={title}
                src={`https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
              ></img>
            </div>
     );
}
 
export default Image;