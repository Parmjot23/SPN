import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ExpressLoop Logistics | About</title>
        <meta
          name="description"
          content="Learn about ExpressLoop Logistics - our story, fleet, and executive team."
        />
      </Helmet>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-6">Our Story</h1>
          <p className="mb-4">
            Founded over two decades ago, ExpressLoop started with a single truck and a big dream...
          </p>
          <p>
            Today, we operate across North America with a focus on safety, reliability, and on-time
            deliveries.
          </p>
        </div>
      </Section>

      <Section title="Our Fleet">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example fleet images with lazy loading or React-LazyLoad */}
          {Array.from({ length: 3 }).map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded overflow-hidden shadow"
            >
              <React.Suspense fallback={<div className="h-60 bg-gray-200" />}>
                {/* Example of a lazy-loaded image. Real usage might wrap a <LazyLoadImage> */}
                <img
                  src={`https://source.unsplash.com/random/800x600?truck&sig=${idx}`}
                  alt="Fleet truck"
                  className="w-full h-60 object-cover"
                />
              </React.Suspense>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Executive Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Emma Johnson', role: 'CEO' },
            { name: 'Michael Brown', role: 'COO' },
            { name: 'Sophia Davis', role: 'CFO' }
          ].map((exec, i) => (
            <div key={i} className="bg-white dark:bg-darkBg2 rounded p-4 shadow">
              <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={`https://source.unsplash.com/random/200x200?face&sig=${i}`}
                  alt={`${exec.name}`}
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{exec.name}</h3>
              <p className="text-sm">{exec.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
