import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 text-gray-100 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-wide font-heading">
          SPN Logistics
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-trailer-link ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-trailer-link ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `nav-trailer-link ${isActive ? 'active' : ''}`
              }
            >
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `nav-trailer-link ${isActive ? 'active' : ''}`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-trailer-link ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/70 px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `nav-trailer-link ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `nav-trailer-link ${isActive ? 'active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `nav-trailer-link ${isActive ? 'active' : ''}`
                }
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `nav-trailer-link ${isActive ? 'active' : ''}`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `nav-trailer-link ${isActive ? 'active' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
