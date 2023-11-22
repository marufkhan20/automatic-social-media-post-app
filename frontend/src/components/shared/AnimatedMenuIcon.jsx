import React from 'react';

const AnimatedMenuIcon = ({ isOpen, onClick }) => {
  return (
    <div
      className={`menuIcon ${isOpen ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default AnimatedMenuIcon;
