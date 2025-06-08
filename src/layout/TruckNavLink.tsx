import React from 'react';
import { NavLink } from 'react-router-dom';

interface TruckNavLinkProps {
  to: string;
  text: string;
  onClick?: () => void;
}

const TruckNavLink: React.FC<TruckNavLinkProps> = ({ to, text, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `truck-nav-link ${isActive ? 'active' : ''}`
      }
    >
      <svg
        width="80"
        height="40"
        viewBox="0 0 80 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="10" width="70" height="20" rx="4" className="truck-body" />
        <circle cx="25" cy="32" r="4" className="truck-wheel" />
        <circle cx="55" cy="32" r="4" className="truck-wheel" />
        <text
          x="40"
          y="20"
          textAnchor="middle"
          alignmentBaseline="middle"
          className="truck-text"
        >
          {text}
        </text>
      </svg>
    </NavLink>
  );
};

export default TruckNavLink;
