import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import partnerImg1 from '../assets/ChatGPT Image Jun 7, 2025, 02_58_55 PM.png';
import partnerImg2 from '../assets/ChatGPT Image Jun 7, 2025, 03_00_03 PM.png';
import partnerImg3 from '../assets/ChatGPT Image Jun 7, 2025, 03_00_52 PM.png';
import partnerImg4 from '../assets/ChatGPT Image Jun 7, 2025, 03_02_08 PM.png';
import reviewMen from '../assets/review_men.png';
import reviewMen2 from '../assets/review_men2.png';
import reviewMenSukhpreet from '../assets/review_men_sukhpreet.png';
import reviewWomen from '../assets/review_women.png';
import heroVideo from '../assets/mixkit-cargo-truck-driving-on-the-highway-28787-hd-ready.mp4';
import Slider from 'react-slick';

// For react-slick slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home: React.FC = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const testimonials = [
    {
      quote:
        'SPN Logistics has been a reliable partner. Our loads always arrive on schedule.',
      name: 'John Doe',
      role: 'Logistics Manager, ACME Corp',
      avatar: reviewMen,
    },
    {
      quote:
        'Their cross-border expertise has been game-changing for our supply chain.',
      name: 'Jane Smith',
      role: 'Operations Director, Global X',
      avatar: reviewWomen,
    },
    {
      quote: 'Great communication and on-time deliveries every time.',
      name: 'Mike Johnson',
      role: 'Supply Chain Lead, Widgets Inc',
      avatar: reviewMen2,
    },
    {
      quote: 'A dependable carrier that we trust with our freight.',
      name: 'Sukhpreet Singh',
      role: 'Dispatch Manager, FastLane LLC',
      avatar: reviewMenSukhpreet,
    },
  ];

  const partnerImages = [partnerImg1, partnerImg2, partnerImg3, partnerImg4];

  return (
    <>
      <Helmet>
        <title>SPN Logistics | Home</title>
        <meta
          name="description"
          content="SPN Logistics - Professional trucking and logistics services."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          className="absolute w-full h-full object-cover"
          src={heroVideo}        // ⬅️  UPDATED: uses the imported path
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Drive Forward with SPN Logistics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl mb-8"
          >
            Reliable trucking and logistics solutions across North America
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary">Get Quote</Button>
            <Button variant="secondary">Join Our Fleet</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={20} />+
            </p>
            <p>Years in Service</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={5000000} suffix="+" />
            </p>
            <p>Miles Driven</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={12000} suffix="+" />
            </p>
            <p>Loads Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">
              <CountUp end={99} suffix="%" />
            </p>
            <p>On-Time Rate</p>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section title="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'LTL Shipping', slug: 'ltl' },
            { title: 'FTL Shipping', slug: 'ftl' },
            { title: 'Refrigerated Transport', slug: 'refrigerated' },
            { title: 'Cross-Border', slug: 'cross-border' },
          ].map((service) => (
            <Card key={service.slug} title={service.title} subtitle="Learn More" />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section title="Why Choose SPN Logistics">
        <ul className="space-y-8">
          {[
            ['Safety First', 'We prioritize safety and compliance at every mile.'],
            ['Modern Fleet', 'Our trucks are up-to-date and well-maintained for any haul.'],
            ['Expert Drivers', 'Our dedicated team ensures on-time deliveries every time.'],
          ].map(([heading, copy], i) => (
            <li
              key={heading}
              className="flex flex-col md:flex-row items-start md:items-center gap-4"
            >
              <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{heading}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Testimonials */}
      <Section title="What Our Clients Say">
        <Slider {...testimonialSettings}>
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div key={name} className="p-4">
              <blockquote className="bg-white dark:bg-darkBg2 p-6 rounded shadow">
                <p className="mb-4 italic">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <img
                    src={avatar}
                    alt={`${name} avatar`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-xs">{role}</p>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </Slider>
      </Section>

      {/* Partners */}
      <Section title="Our Partners">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {partnerImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="partner logo"
              className="w-24 grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
