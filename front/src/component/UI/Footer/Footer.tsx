import React, {useState, useEffect} from "react";
import "./Footer.css";

let items=['Services','About','Terms','Privacy Policy'];

export default function Footer(){
    return(
        <footer>
            {/* <ul className="liste">
                <li className="items"><a href="#">Services</a></li>
                <li className="items"><a href="#">About</a></li>
                <li className="items"><a href="#">Terms</a></li>
                <li className="items"><a href="#">Privacy Policy</a></li>
            </ul> */}

                <ul className="liste">
                    {items.map((item,index)=>{
                        return <li  className="items" key={index}>{item}</li>
                    })}
                </ul>
        </footer>
    )
}