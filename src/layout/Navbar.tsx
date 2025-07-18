import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TruckNavLink from './TruckNavLink';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navItems = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/careers', text: 'Careers' },
    { to: '/services', text: 'Services' },
    { to: '/contact', text: 'Contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-darkBg/95 backdrop-blur-lg shadow-lg border-b border-neutral-200 dark:border-neutral-700' 
          : 'bg-black/30 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              to="/" 
              className={`font-bold text-xl lg:text-2xl tracking-wide font-heading transition-colors duration-300 ${
                scrolled 
                  ? 'text-neutral-900 dark:text-neutral-100' 
                  : 'text-white drop-shadow-lg'
              }`}
            >
              SPN Logistics
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TruckNavLink 
                  to={item.to} 
                  text={item.text}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    scrolled 
                      ? 'text-neutral-700 dark:text-neutral-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20' 
                      : 'text-white drop-shadow-md hover:text-primary-300 hover:bg-white/20 hover:backdrop-blur-md'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800' 
                : 'text-white drop-shadow-md hover:bg-white/20'
            }`}
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 dark:bg-darkBg/95 backdrop-blur-lg border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <TruckNavLink
                    to={item.to}
                    text={item.text}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 font-medium"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
