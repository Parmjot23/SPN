import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllServices } from "../services/api";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Package, Truck, Snowflake } from "lucide-react";

interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceInfo[]>([]);

  const serviceIcons: Record<string, React.ReactNode> = {
    ltl: <Package className="text-accent" />,
    ftl: <Truck className="text-accent" />,
    refrigerated: <Snowflake className="text-accent" />,
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
      {services.map((service, index) => {
        const layout = index % 3;
        const layoutClass =
          layout === 0
            ? "md:flex-row"
            : layout === 1
            ? "md:flex-row-reverse"
            : "";
        return (
          <Section key={service.slug}>
            <div className={`flex flex-col items-center gap-6 md:gap-10 ${layoutClass}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 h-64 object-cover rounded"
              />
              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary font-heading">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          </Section>
        );
      })}
    </>
  );
};

export default Services;
