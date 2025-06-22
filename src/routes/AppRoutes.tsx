import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollTop from '../layout/ScrollTop';
import ScrollToTopOnRouteChange from '../layout/ScrollToTopOnRouteChange';
import DefaultLayout from '../layouts/DefaultLayout';

// Lazy-loaded pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Careers = lazy(() => import('../pages/Careers'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <Navbar />
      <ScrollToTopOnRouteChange />
      <ScrollTop />
      <main className={isHome ? '' : 'pt-20'}>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<DefaultLayout />}> 
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;
