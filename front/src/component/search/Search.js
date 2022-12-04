import React from 'react';
import { useState, useEffect } from 'react';
import "./Search.css";
function Search(){

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() =>{
        fetch('https://jsonpaceholder.typecode.com/posts') /*Pas notre api j'ai testé de voir avec une autre si je pouvais faire une recherche*/
            .then(response => response.json())
            .then((json)=>setDatas(json))
    },
    []);

    const handleSearchTerm = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        value.length > 2 && setSearchTerm(value);
    };

    return(
        <>
            <div className="searchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher" onChange={handleSearchTerm}/>
            </div>
            <div className="search_result">
                {datas.filter((val)=>{
                    return val.title.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .map((val)=> {
                    return (
                        <div className="search_results" key={val.id}>
                            {val.title}
                        </div>);
                })}               
            </div>
            {/* Je voulais mettre dans des cards (bootstrap) les articles mais ça mettait un écran blanc */}
            {/* <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Header</div>
                <div class="card-body">
                    <h4 class="card-title">Primary card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> */}
        </>
        
    );
}

export default Search