import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ handleSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleChange(event) {
    handleSearch(event.target.value);
  }

  return (
    <div className='search-bar'>
      <FaSearch onClick={handleClick} />
      {isOpen && <input type="text" placeholder='Search' onChange={handleChange} />}
    </div>
  );
}

export default SearchBar;
