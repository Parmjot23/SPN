import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TruckNavLink from './TruckNavLink';
import { Menu, X, Home, Info, Briefcase, Package, Phone } from 'lucide-react';
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
      const heroHeight = window.innerHeight * 0.5;
      setScrolled(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navItems = [
    { to: '/', text: 'Home', icon: <Home size={18} /> },
    { to: '/about', text: 'About', icon: <Info size={18} /> },
    { to: '/services', text: 'Services', icon: <Package size={18} /> },
    { to: '/careers', text: 'Careers', icon: <Briefcase size={18} /> },
    { to: '/contact', text: 'Contact', icon: <Phone size={18} /> }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200 dark:border-gray-800'
          : 'bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-transparent backdrop-blur-md'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center z-50"
          >
            <Link
              to="/"
              className="group flex flex-col"
            >
              <span className={`font-black text-xl lg:text-2xl tracking-tight font-heading transition-all duration-300 ${scrolled
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'text-white drop-shadow-lg'
                }`}>
                SPN LOGISTICS
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase transition-all duration-300 ${scrolled
                  ? 'text-gray-600 dark:text-gray-400'
                  : 'text-white/70'
                }`}>
                Trucking Excellence
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.to}
                  className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${pathname === item.to
                      ? scrolled
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-white bg-white/10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]'
                      : scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        : 'text-white hover:text-white hover:bg-white/10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]'
                    }`}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>

                  {/* Active indicator */}
                  {pathname === item.to && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${scrolled
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                          : 'bg-white'
                        }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 z-50 ${scrolled
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait">
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-1 max-w-7xl mx-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${pathname === item.to
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    <span className={pathname === item.to ? 'scale-110' : ''}>
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                    {pathname === item.to && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 rounded-full bg-blue-600"
                      />
                    )}
                  </Link>
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
