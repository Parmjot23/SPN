import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/AppRoutes';
import AOS from 'aos';
import 'react-hot-toast/dist/index.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      offset: 100
    });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* AnimatePresence for page transitions */}
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
