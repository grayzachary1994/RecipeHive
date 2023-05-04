import React, { useState } from 'react';

import DropdownMenu from './DropdownMenu';

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