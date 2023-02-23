// import React from 'react';
// import { useState, useEffect } from 'react';
// import "./Search.css";

// function Search(){

//     const [datas, setDatas] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() =>{
//         fetch('https://jsonpaceholder.typecode.com/posts') /*Pas notre api j'ai testé de voir avec une autre si je pouvais faire une recherche*/
//             .then(response => response.json())
//             .then((json)=>setDatas(json))
//     },
//     []);


//     const handleSearchTerm = (e: { target: { value: any; }; }) => {
//         console.log(e.target.value);
//         let value = e.target.value;
//         value.length > 2 && setSearchTerm(value);
//     };

//     return(
//         <>
//             <div className="searchBar">
//                 <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher" onChange={handleSearchTerm}/>
//             </div>
//             <div className="search_result">
//                 {datas.filter((val)=>{
//                     return val.title.toLowerCase().includes(searchTerm.toLowerCase());
//                 })
//                 .map((val)=> {
//                     return (
//                         <div className="search_results" key={val.id}>
//                             {val.title}
//                         </div>);
//                 })}               
//             </div>
//             {/* Je voulais mettre dans des cards (bootstrap) les articles mais ça mettait un écran blanc, là ça marche */}
//             {/* <div className="card">
//                 <div className="card-header">Header</div>
//                 <div className="card-body">
//                     <h4 className="card-title">Primary card title</h4>
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//             </div> */}
//         </>
        
//     );
// }
import React, { useState } from 'react';
import './Search.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // Implémentez votre logique de recherche ici
    const data = [
      { name: 'Voiture', category: 'Automobile' },
      { name: 'Moto', category: 'Automobile' },
      { name: 'Playstaion 5', category: 'Electronique' },
      { name: 'Ordinateur portable', category: 'Electronique' },
      { name: 'Alice', category: 'Weiss schwarz' },
      { name: 'Compte épargne', category: 'Finances' },
    ];
    
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleShowFiltersClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <form className="search-bar" onSubmit={handleFormSubmit}>
      <div className="search-bar__input-wrapper">
        <input
          type="text"
          placeholder="Rechercher..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="search-bar__input"
        />
        <button type="submit" className="search-bar__button">
          <i className="fa fa-search"></i>
        </button>
      </div>
      <button
        type="button"
        className="search-bar__filter-button"
        onClick={handleShowFiltersClick}
      >
        <i className="fa fa-filter"></i>
        {showFilters ? 'Cacher les filtres' : 'Afficher les filtres'}
      </button>
      {showFilters && (
        <div className="search-bar__filters">
          {/* Ajoutez des composants de filtres ici */}
            <button className="filter-button">Voiture</button>
            <button className="filter-button">Weiss schwarz</button>
            <button className="filter-button">Electronique</button>
        </div>
      )}
    </form>
  );
}

export default Search