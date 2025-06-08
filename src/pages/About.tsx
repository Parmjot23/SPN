import React from "react";
import { Helmet } from "react-helmet-async";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import RefrigeratedImg from "../assets/Refrigerated.png";
import DryVanImg from "../assets/dryvan.png";
import SemiTruckImg from "../assets/semitruck.png";
import PlaceholderAvatar from "../assets/image_processing20210620-27954-1edhf73.png";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SPN Logistics | About</title>
        <meta
          name="description"
          content="Learn about SPN Logistics - our story, services, and executive team."
        />
      </Helmet>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-6">Our Story</h1>
          <p className="mb-4">
            Founded over two decades ago, SPN Logistics started with a single
            truck and a big dream...
          </p>
          <p>
            Today, we operate across North America with a focus on safety,
            reliability, and on-time deliveries.
          </p>
        </div>
      </Section>

      <Section title="We Provide All Kinds of Services">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: RefrigeratedImg, label: "Refrigerated" },
            { src: DryVanImg, label: "Dry Van" },
            { src: SemiTruckImg, label: "Flatbed" },
          ].map(({ src, label }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded overflow-hidden shadow"
            >
              <React.Suspense fallback={<div className="h-60 bg-gray-200" />}>
                <img
                  src={src}
                  alt={label}
                  className="w-full h-60 object-cover"
                />
              </React.Suspense>
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-semibold text-lg">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Executive Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Parminder Singh",
              role: "Founder & CEO",
              avatar: PlaceholderAvatar,
            },
          ].map((exec, i) => (
            <div
              key={i}
              className="bg-white dark:bg-darkBg2 rounded p-4 shadow text-center"
            >
              <div className="w-40 h-40 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                <img
                  className="object-cover w-full h-full"
                  src={exec.avatar}
                  alt={exec.name}
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">
                {exec.name}
              </h3>
              <p className="text-sm">{exec.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;
