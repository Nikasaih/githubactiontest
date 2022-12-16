import React, {Component} from 'react';
import NavBar from "../../component/UI/NavBar/NavBar";
import Footer from "../../component/UI/Footer/Footer";
import "../../App.css";
import { RegisterForm } from "../../component/forms/registerForm";
import { LoginForm } from "../../component/forms/loginForm";
import Search from '../../component/search/Search';
import Profile from "../../component/profile/profile";
import {Switch, Route} from "react-router-dom";
import Accueil from "./Accueil"

class Site extends Component {
    render(){
        return(
            <>
                <NavBar/>
                <Search/>
                {/* <RegisterForm/>
                <LoginForm/> */}
                <Profile/>
                {/* <Accueil/> */}
                <Footer/>
            </>
        );
    }
}

export default Site;

