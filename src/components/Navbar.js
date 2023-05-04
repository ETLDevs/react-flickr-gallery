import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
    <nav className="nav">
      <h1>Pixabay Gallery</h1>
      <div className="search">
      <div className="searchBar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search Anything"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
      <button onClick={() => setSearchValue('')}><Link to={`/search/${searchValue}`}> SEARCH</Link></button>
      </div>
      <div className="buttonGroup">
      <Link to={'/'}>HOME</Link>
        <Link to={'/birds'}>BIRDS</Link>
        <Link to={`/sky`} >SKY</Link>
        <Link to={'/mountain'} >MOUNTAIN</Link>
        <Link to={'/food'} >FOOD</Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
