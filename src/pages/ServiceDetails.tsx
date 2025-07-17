import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fetchServiceDetails } from '../services/api';

const ServiceDetails: React.FC = () => {
  const { slug } = useParams();
  const [service, setService] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchServiceDetails(slug)
        .then((data) => setService(data))
        .catch(() => setError(true));
    }
  }, [slug]);

  if (!slug) {
    return <Navigate to="/services" replace />;
  }

  if (error) {
    return <p className="p-4">Error loading service details.</p>;
  }

  if (!service) {
    return <p className="p-4">Loading service details...</p>;
  }

  return (
    <>
      <Helmet>
        <title>SPN Logistics | {service.title}</title>
        <meta name="description" content={`Details about ${service.title}.`} />
      </Helmet>
      <div className="max-w-5xl mx-auto p-4 space-y-4">
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover rounded"
          />
        )}
                  <h1 className="text-3xl font-bold text-primary-500">{service.title}</h1>
        <p>{service.description}</p>
      </div>
    </>
  );
};

export default ServiceDetails;
