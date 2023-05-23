import React from 'react';
import './components.css';

import logo from '../images/RecipeHiveicon.png';

import HamburgerButton from './HamburgerButton.js';
import SearchBar from './SearchButton';
import LogoutButton from './LogoutButton';


export default function Navbar() {
    return (
        <div className='navbar'>
            <HamburgerButton />
            <img className='navbar--logo' src={logo} alt='logo'/>
            <h1 className='navbar--title'>Recipe Hive</h1>
            <LogoutButton/>
            <SearchBar/>
        </div>
    )
}