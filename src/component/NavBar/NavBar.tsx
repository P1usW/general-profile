import React from 'react';
import {NavLink} from "react-router-dom";

import '../../style/_navbar.scss'

const NavBar = () => {
    return (
        <header className='navbar'>
            <nav className='navbar-container'>
                <NavLink className='navbar-item' to='/'>Главная</NavLink>
                <NavLink className='navbar-item' to='/profile'>О нас</NavLink>
                <NavLink className='navbar-item' to='/projects'>Проекты</NavLink>
                <NavLink className='navbar-item' to='/contact'>Связь</NavLink>
            </nav>
        </header>
    );
};

export default NavBar;