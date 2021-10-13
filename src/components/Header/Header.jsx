import c from './Header.module.scss';
import React from 'react';
import logo from "../../smile.jpg";

const Header = () => {
    return (
    <header className={c.header}>
        <img className={c.logo} src={logo} alt="logo"/>
    </header>);
}

export default Header;