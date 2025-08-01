import React from "react";
import { Helmet } from "react-helmet-async";
import Section from "../ui/Section";
import { motion } from "framer-motion";
import RefrigeratedImg from "../assets/dryvan.png";
import DryVanImg from "../assets/Refrigerated.png";
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
          <h1 className="text-3xl font-bold text-primary-500 mb-6">Our Journey</h1>
          <p className="mb-8">
            Founded in 2020 with a single truck and a big dream, SPN Logistics
            has grown quickly across North America. Here's a look at some of the
            milestones that shaped us.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="relative border-l-2 border-primary/20 ml-4">
            {[
              {
                year: "2020",
                text: "SPN Logistics is founded in Montreal with one truck.",
              },
              {
                year: "2021",
                text: "Operations expand across Quebec and Ontario.",
              },
              {
                year: "2022",
                text: "Introduced refrigerated shipping and dedicated lanes.",
              },
              {
                year: "2023",
                text: "Implemented advanced fleet tracking technology.",
              },
              {
                year: "2024",
                text: "Recognized among Canada's top logistics providers.",
              },
            ].map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-8"
              >
                <span className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full" />
                <h3 className="font-semibold text-primary-500 mb-1">
                  {event.year}
                </h3>
                <p>{event.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="We Provide All Kinds of Services to Fleet">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              src: DryVanImg,
              title: "Dry Van",
              desc: "Our dry vans keep freight secure and protected from the elements.",
            },
            {
              src: SemiTruckImg,
              title: "Semi Truck",
              desc: "We operate all kinds of semi trucks to handle diverse hauling needs.",
            },
            {
              src: RefrigeratedImg,
              title: "Reefer",
              desc: "Reefer trailers maintain temperature for your perishable goods.",
            },
          ].map(({ src, title, desc }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative rounded overflow-hidden shadow"
            >
              <React.Suspense fallback={<div className="h-60 bg-gray-200" />}>
                <img
                  src={src}
                  alt={title}
                  className="w-full h-60 object-cover"
                />
              </React.Suspense>
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
                <p className="text-white text-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Executive Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center place-items-center">
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
              <h3 className="text-lg font-bold text-primary-500 mb-1">
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
