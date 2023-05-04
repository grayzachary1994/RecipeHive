import React, { useState } from 'react';
import userService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const DropdownMenu = ({ isOpen }) => {

  const navigate = useNavigate();

  const menuStyle = isOpen ? { display: 'block' } : { display: 'none' };

  function handleLogout(){
    userService.userLogout()
    navigate('/login')
  }

  return (
    <div className="dropdown-menu" style={menuStyle}>
      <div className='dropdown-container'>
        <a href="/">View Cookbook</a>
        <a href="/add">Add Recipe</a>
        <p onClick={handleLogout}>Logout</p>
      </div>
      
    </div>
  );
};

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-button" onClick={handleClick}>
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <DropdownMenu isOpen={isOpen} />
    </div>
  );
};

export default HamburgerButton;