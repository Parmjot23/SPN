import { useState } from 'react';
import { FaBars, FaTimes, FaTruck, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import './index.css';

const navLinks = ['Home','About','Services','Logistic Solutions','Careers','Our Team','Pricing','Locations','News','Contacts'];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        <div className="text-xl font-bold flex items-center gap-2">
          <FaTruck className="text-red-600" /> SPN Logistics
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
        <ul className="hidden md:flex space-x-4 font-medium">
          {navLinks.map(link => (
            <li key={link} className="hover:text-red-600 cursor-pointer">{link}</li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 font-medium">
          {navLinks.map(link => (
            <li key={link} className="hover:text-red-600 cursor-pointer">{link}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-[80vh] bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516974409140-7a3867c1ee3b?auto=format&fit=crop&w=1600&q=80')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Reliable Trucking Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-lg md:text-2xl"
        >
          Delivering your goods safely and on time
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex space-x-4"
        >
          <button className="bg-red-600 text-white px-4 py-2 rounded">Request a Callback</button>
          <button className="bg-white text-red-600 px-4 py-2 rounded">Contact Us</button>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded-full"
        >
          Get a Free Quote
        </motion.div>
      </div>
    </section>
  );
}

function Advantages() {
  const stats = [
    {label: 'Happy Clients', value: 800, suffix: '+'},
    {label: 'Trucks', value: 120, suffix: '+'},
    {label: 'On-Time Delivery', value: 99, suffix: '%'},
    {label: 'Live Tracking', value: 24, suffix: '/7'},
  ];
  const items = [
    {icon: FaTruck, text: 'Fast Delivery'},
    {icon: FaPhone, text: '24/7 Support'},
    {icon: FaEnvelope, text: 'Secured Services'},
    {icon: FaMapMarkerAlt, text: 'Affordable Prices'},
  ];
  return (
    <section className="py-16 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 px-4">
        {items.map(({icon: Icon, text}) => (
          <div key={text} className="flex flex-col items-center">
            <Icon className="text-3xl text-red-600 mb-2" />
            <p className="font-semibold">{text}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {stats.map(({label,value,suffix}) => (
          <div key={label} className="text-center">
            <div className="text-4xl font-bold text-red-600">
              <CountUp end={value} duration={2} suffix={suffix} enableScrollSpy />
            </div>
            <p className="mt-2 font-medium">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><FaTruck className="text-red-600"/> SPN Logistics</h3>
          <p>Reliable logistics solutions for your business.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            {navLinks.map(link => (
              <li key={link} className="hover:text-red-600 cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="flex items-center gap-2"><FaPhone /> +1 555 123 4567</p>
          <p className="flex items-center gap-2"><FaEnvelope /> info@spnlogistics.com</p>
          <div className="flex space-x-3 mt-2">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} SPN Logistics. All rights reserved.</div>
    </footer>
  );
}

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Advantages />
      <Footer />
    </div>
  );
}

export default App;
