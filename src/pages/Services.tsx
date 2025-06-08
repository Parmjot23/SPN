import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getAllServices } from '../services/api';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';

interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceInfo[]>([]);

  useEffect(() => {
    setServices(getAllServices());
  }, []);

  return (
    <>
      <Helmet>
        <title>SPN Logistics | Services</title>
      </Helmet>
      <Section title="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.slug} title={service.title} className="space-y-2">
              <p>{service.description}</p>
              <Link className="text-primary underline" to={`/services/${service.slug}`}>
                Learn More
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
