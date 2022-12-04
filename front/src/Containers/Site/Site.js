import React, {Component} from 'react';
import NavBar from "../../component/UI/NavBar/NavBar";
import Footer from "../../component/UI/Footer/Footer";
import "../../App.css";
import { RegisterForm } from "../../component/forms/registerForm";
import { LoginForm } from "../../component/forms/loginForm";
import Search from '../../component/search/Search';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class Site extends Component {
    render(){
        return(
            <>
                <NavBar/>
                <br/>
                <Search/>
                <RegisterForm/>
                <LoginForm/>
                <Footer/>
            </>
        );
    }
}

export default Site;

