import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllServices } from '../services/api';
import Section from '../ui/Section';
import Card from '../ui/Card';
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
    ltl: <Package className="w-10 h-10 text-primary" />,
    ftl: <Truck className="w-10 h-10 text-primary" />,
    refrigerated: <Snowflake className="w-10 h-10 text-primary" />,
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {services.map((service) => (
            <Card
              key={service.slug}
              title={service.title}
              icon={serviceIcons[service.slug]}
              className="space-y-2 text-center"
            >
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
