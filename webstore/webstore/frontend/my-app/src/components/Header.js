// Header.js
import React from 'react';
import '../Header.css';
import img from "../img/logo.png";
import About from './About';
import { Link } from 'react-router-dom';
import "../css/style.css";

const Header = () => {
    return (
        <>
            <header>
                <div id="navbar">
                    <img src={img} alt="" />
                    <div class="ls">
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/signin">Sign in</Link></li>
                    </div>
                    <nav>
                        <ul>

                            <li><a href="#about">About</a></li>
                            <li><a href="/men" >Men</a></li>
                            <li><a href="/women" >Women</a></li>
                            <li><a href="/kids">Kids</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="content">
                    <h1> Welcome To <span class="primary-text">STORE</span></h1>
                    <p>Here you can find everything you want</p>
                </div>
            </header>
            <About />
        </>
    );
}

export default Header;
