import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface TruckNavLinkProps {
  to: string;
  text: string;
  onClick?: () => void;
  className?: string;
  showTruck?: boolean;
  icon?: React.ReactNode;
}

const TruckNavLink: React.FC<TruckNavLinkProps> = ({
  to,
  text,
  onClick,
  className = '',
  showTruck = false,
  icon
}) => {
  if (showTruck) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `truck-nav-link ${isActive ? 'active' : ''} ${className}`
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
  }

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => {
        const baseClasses = `relative font-medium transition-all duration-300 overflow-hidden focus:outline-none focus:ring-0 ${className}`;
        const activeClasses = isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : '';
        return `${baseClasses} ${activeClasses}`;
      }}
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="relative flex items-center gap-2"
        >
          {icon && <span className="relative z-10 flex-shrink-0">{icon}</span>}
          <span className="relative z-10">{text}</span>
          
          {/* Active indicator line */}
          {isActive && (
            <motion.div
              layoutId="activeTab"
              initial={false}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
          )}
          
          {/* Hover effect background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      )}
    </NavLink>
  );
};

export default TruckNavLink;
