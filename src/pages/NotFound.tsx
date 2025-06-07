import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import heroVideo from '../assets/mixkit-cargo-truck-driving-on-the-highway-28787-hd-ready.mp4';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SPN Logistics | 404</title>
      </Helmet>
      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl mb-8"
          >
            Sorry, the page you’re looking for doesn’t exist.
          </motion.p>
          <Link to="/" className="inline-block">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
