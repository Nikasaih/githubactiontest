import React, {useState, useEffect} from "react";
import "./NavBar.css";
import {BrowserRouter as Router, SWITCH, Route, Link} from "react-router-dom"

export default function NavBar(){
    return(
        <>
            <nav>
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Profile</li>
                    <li className="items">Inscription</li>
                    <li className="items">Connexion</li>
                </ul>
            </nav>
            {/* <SWITCH>
                <Route path="/">Accueil</Route>
            </SWITCH> */}
        </>
    )
}