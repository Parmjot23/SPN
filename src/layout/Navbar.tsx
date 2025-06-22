import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-primary/90 text-light shadow-lg backdrop-blur-md"
          : "bg-transparent text-light"
      }`}
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
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/careers", "Careers"],
            ["/services", "Services"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `transition-colors hover:text-accent ${
                    isActive ? "text-accent underline" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-primary/90 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-light"
          onClick={() => setIsOpen(false)}
        >
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/careers", "Careers"],
            ["/services", "Services"],
            ["/contact", "Contact"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-lg transition-colors hover:text-accent ${
                  isActive ? "text-accent underline" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
