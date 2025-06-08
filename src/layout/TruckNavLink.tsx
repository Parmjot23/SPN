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
        width="112"
        height="40"
        viewBox="0 0 112 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="16" y="8" width="80" height="24" rx="4" className="truck-body" />
        <circle cx="36" cy="32" r="4" className="truck-wheel" />
        <circle cx="76" cy="32" r="4" className="truck-wheel" />
        <text
          x="56"
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
