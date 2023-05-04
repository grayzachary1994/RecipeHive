import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick(){
        setIsOpen(!isOpen);
    }

    return(
        <div className='search-bar'>
            <FaSearch onClick={handleClick}/>
            {isOpen && <input type="text" placeholder='Search'/>}
        </div>
    )
}

export default SearchBar;