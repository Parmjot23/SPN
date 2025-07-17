import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">SPN Logistics</h3>
            <p className="text-neutral-400 mb-6 leading-relaxed font-body">
              Your trusted partner in logistics excellence. Delivering reliable trucking and 
              transportation solutions across North America with modern fleet and professional service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="font-body">1-800-SPN-TRUCK</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="font-body">contact@spnlogistics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-body">North America Wide Service</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white font-heading">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink 
                    to={link.to}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white font-heading">Services</h4>
            <ul className="space-y-3">
              {[
                'LTL Shipping',
                'FTL Shipping',
                'Refrigerated Transport',
                'Expedited Delivery',
                'Cross-Border Shipping',
              ].map((service) => (
                <li key={service}>
                  <span className="text-neutral-400 font-body">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white font-heading">Our Impact</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 font-body">Satisfied Clients</span>
                <span className="font-bold text-xl text-primary-400">
                  <CountUp end={1500} suffix="+" duration={3} />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 font-body">On-time Rate</span>
                <span className="font-bold text-xl text-primary-400">
                  <CountUp end={99} suffix="%" duration={3} />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 font-body">Years Experience</span>
                <span className="font-bold text-xl text-primary-400">
                  <CountUp end={new Date().getFullYear() - 2020} suffix="+" duration={3} />
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-white font-semibold mb-3 font-heading">Stay Updated</h5>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors duration-300 font-body"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-primary text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-neutral-500 font-body"
            >
              <p>
                &copy; {new Date().getFullYear()} SPN Logistics. All rights reserved.{' '}
                <a 
                  href="https://www.madebyparm.com" 
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Made by Parm
                </a>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-4"
            >
              {[
                { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
                { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
                { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
