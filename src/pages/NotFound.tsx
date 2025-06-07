import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ExpressLoop Logistics | 404</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
        <Link to="/" className="text-primary underline">
          Go back home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
