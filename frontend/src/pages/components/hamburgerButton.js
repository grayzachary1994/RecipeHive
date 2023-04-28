import React, { useState } from 'react';

const DropdownMenu = ({ isOpen }) => {
  const menuStyle = isOpen ? { display: 'block' } : { display: 'none' };

  return (
    <div className="dropdown-menu" style={menuStyle}>
      <a href="/">Add Recipe</a>
      <a href="/login">Logout</a>
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