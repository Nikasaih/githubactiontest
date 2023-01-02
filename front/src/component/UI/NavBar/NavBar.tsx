import React, {useState, useEffect} from "react";
import "./NavBar.css";
import { RegisterForm } from "../../forms/registerForm";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

let items=['Accueil','Profile','Inscription','Connexion'];

export default function NavBar(){
    return(
        <>
            <nav>
                <ul className="liste">
                        <Link className="items" to="/">Accueil</Link>
                        <Link className="items" to="/Profile">Profile</Link>
                        <Link className="items" to="/Inscription">Inscription</Link>
                        <Link className="items" to="/Connexion">Connexion</Link>
                    </ul>

                    {/* <Route path="/Inscription" element={<RegisterForm/>} /> */}

                          
                    {/* <ul className="liste">
                        {items.map((item,index)=>{
                            return <li  className="items" key={index}>{item}</li>
                        })}
                    </ul>    */}
                               
            </nav>
        </>
    )
}