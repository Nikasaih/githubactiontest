import React, {useState, useEffect} from "react";
import "./NavBar.css";
import { RegisterForm } from "../../forms/registerForm";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import { profile } from "console";
import { NavLink } from "react-router-dom";

let items=['Accueil','Profile','Inscription','Connexion'];

export default function NavBar(){
    return(
        <>
            <main>
                <nav>
                    <ul className="liste">
                            <li><NavLink className="items" to="/">Accueil</NavLink></li>
                            <li><NavLink className="items" to="/Profile">Profile</NavLink></li>
                            <li><NavLink className="items" to="/Inscription">Inscription</NavLink></li>
                            <li><NavLink className="items" to="/Connexion">Connexion</NavLink></li>
                        </ul>

                            
                        {/* <ul className="liste">
                            {items.map((item,index)=>{
                                return <li  className="items" key={index}>{item}</li>
                            })}
                        </ul>    */}
                                
                </nav>   
            </main>
        </>
    )
}