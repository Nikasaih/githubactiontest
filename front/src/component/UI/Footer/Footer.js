import React, {useState, useEffect} from "react";
import "./Footer.css";

export default function NavBar(){
    return(
        <footer>
            <ul className="liste">
                <li className="items"><a href="#">Services</a></li>
                <li className="items"><a href="#">About</a></li>
                <li className="items"><a href="#">Terms</a></li>
                <li className="items"><a href="#">Privacy Policy</a></li>
            </ul>
        </footer>
    )
}