import React from 'react';

import logo from '../images/RecipeHiveicon.png'

export default function Navbar() {
    return (
        <div className='navbar'>
            <img className='navbar--logo' src={logo}/>
            <h1 className='navbar--title'>Recipe Hive</h1>
        </div>
    )
}