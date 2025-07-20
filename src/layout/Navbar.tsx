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
      const heroHeight = window.innerHeight * 0.8; // Trigger earlier for smoother transition
      setScrolled(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navItems = [
    { to: '/', text: 'Home', icon: <Home size={18} /> },
    { to: '/about', text: 'About', icon: <Info size={18} /> },
    { to: '/careers', text: 'Careers', icon: <Briefcase size={18} /> },
    { to: '/services', text: 'Services', icon: <Package size={18} /> },
    { to: '/contact', text: 'Contact', icon: <Phone size={18} /> }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out ${
        scrolled
          ? 'bg-gradient-to-r from-white/90 to-gray-50/90 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-black/20 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Modern Business Name Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center"
          >
            <Link 
              to="/" 
              className={`group transition-all duration-500 ${
                scrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white drop-shadow-lg'
              }`}
            >
              <div className="relative">
                <motion.div
                  className="flex flex-col"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`font-black text-2xl lg:text-3xl tracking-tight font-heading transition-all duration-500 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent' 
                      : 'text-white'
                  }`}>
                    SPN LOGISTICS
                  </span>
                  <span className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 ${
                    scrolled 
                      ? 'text-gray-500 dark:text-gray-400' 
                      : 'text-white/80'
                  }`}>
                    Trucking Excellence
                  </span>
                </motion.div>
                
                {/* Animated underline on hover */}
                <motion.div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                    scrolled ? 'opacity-70' : 'opacity-50'
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div
              className={`flex items-center space-x-6 lg:space-x-8 px-4 py-2 rounded-full shadow-md transition-colors duration-500 ${
                scrolled
                  ? 'bg-white/80 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/40'
                  : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  <TruckNavLink
                    to={item.to}
                    text={item.text}
                    icon={item.icon}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-base relative group ${
                      scrolled
                        ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                        : 'text-white/90 hover:text-white'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50' 
                : 'text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
            }`}
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <TruckNavLink
                    to={item.to}
                    text={item.text}
                    icon={item.icon}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 font-medium text-base border border-transparent hover:border-blue-200/30 dark:hover:border-blue-700/30 hover:shadow-lg"
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
