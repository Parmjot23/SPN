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
        <rect x="2" y="12" width="46" height="16" rx="2" className="truck-body" />
        <rect x="48" y="16" width="12" height="12" rx="2" className="truck-cab" />
        <polyline points="2,12 2,28 -6,24 -6,16 2,12" className="truck-door" />
        <circle cx="16" cy="32" r="4" className="truck-wheel" />
        <circle cx="40" cy="32" r="4" className="truck-wheel" />
        <text
          x="25"
          y="24"
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
