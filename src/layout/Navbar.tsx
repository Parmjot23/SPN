import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TruckNavLink from './TruckNavLink';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    setScrolled(!isHome);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-primary/90 text-light shadow-lg backdrop-blur-md' : 'bg-transparent text-light'}`}
    >
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
            <TruckNavLink to="/" text="Home" />
          </li>
          <li>
            <TruckNavLink to="/about" text="About" />
          </li>
          <li>
            <TruckNavLink to="/careers" text="Careers" />
          </li>
          <li>
            <TruckNavLink to="/services" text="Services" />
          </li>
          <li>
            <TruckNavLink to="/contact" text="Contact" />
          </li>
        </ul>
      </nav>
      {/* Mobile Drawer */}
        {isOpen && (
        <div className="md:hidden bg-primary/90 backdrop-blur-md px-4 pb-4 text-light">
          <ul className="flex flex-col items-center gap-4 text-center">
            <li>
              <TruckNavLink
                to="/"
                text="Home"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <TruckNavLink
                to="/about"
                text="About"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <TruckNavLink
                to="/careers"
                text="Careers"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <TruckNavLink
                to="/services"
                text="Services"
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <TruckNavLink
                to="/contact"
                text="Contact"
                onClick={() => setIsOpen(false)}
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
