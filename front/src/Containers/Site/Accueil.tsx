import React, {useState, useEffect, Component} from "react";
import image from '../images/raiden2.jpeg';
import "./Accueil.css";

export default function Accueil(){
    return(
        <>
            <div className="card">
                {/*Juge pas l'image j'ai pris ce que j'avais sur l'ordi */}
                <img src={"image"} className="card-img-top" alt="image"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">Voir de plus près</button>
                </div>
            </div>
        </>
    )
}