import React from 'react';
import logo from './logo.svg';
import "./Header.sass"

const Header = () => (
    <header class="header">
        <div class="container">
            <nav class="nav-main">
                <h1 class="header-title">Grazie!</h1>
                <img class="logo" src={logo} alt="logo"></img>
            </nav>
        </div>
    </header>
);

export default Header;
