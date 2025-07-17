import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllServices } from '../services/api';
import Section from '../ui/Section';
import { Package, Truck, Snowflake } from 'lucide-react';

interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceInfo[]>([]);

  const serviceIcons: Record<string, React.ReactNode> = {
    ltl: <Package className="w-10 h-10 text-primary-500" />,
    ftl: <Truck className="w-10 h-10 text-primary-500" />,
    refrigerated: <Snowflake className="w-10 h-10 text-primary-500" />,
  };

  useEffect(() => {
    setServices(getAllServices());
  }, []);

  return (
    <>
      <Helmet>
        <title>SPN Logistics | Services</title>
      </Helmet>
      <Section title="Our Services">
        <div className="space-y-12">
          {services.map((service, idx) => {
            const vertical = idx % 3 === 2;
            const reverse = idx % 2 === 1 && !vertical;
            return (
              <div
                key={service.slug}
                className={`flex flex-col items-center gap-6 ${
                  vertical ? '' : 'md:flex-row'
                } ${reverse ? 'md:flex-row-reverse' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full md:w-1/2 rounded shadow object-cover h-64`}
                />
                <div className={`md:w-1/2 ${vertical ? 'text-center' : ''}`}>
                  <div className="mb-4 flex justify-center md:justify-start">
                    {serviceIcons[service.slug]}
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-2">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default Services;
