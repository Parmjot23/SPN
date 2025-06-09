import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollTop from '../layout/ScrollTop';
import ScrollToTopOnRouteChange from '../layout/ScrollToTopOnRouteChange';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Careers = lazy(() => import('../pages/Careers'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopOnRouteChange />
      <ScrollTop />
      <main>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
