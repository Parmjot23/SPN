import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import CountUp from "react-countup";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 bg-gradient-hero text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">
            Stay Updated
          </h4>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 mb-3 text-black rounded"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* KPI Counters */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-accent">Our Impact</h4>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-bold text-xl">
                <CountUp end={1500} suffix="+" />
              </span>
              <span>Satisfied Clients</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-bold text-xl">
                <CountUp end={98} suffix="%" />
              </span>
              <span>On-time Rate</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} SPN Logistics.{" "}
          <a href="https://www.madebyparm.com" className="underline">
            Made by Parm
          </a>
        </p>
        <div className="flex gap-4">
          <a href="https://facebook.com" className="hover:text-accent">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-accent">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" className="hover:text-accent">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" className="hover:text-accent">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
