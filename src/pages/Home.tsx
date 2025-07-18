import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Truck, Route, Package, CheckCircle, Snowflake, Star, Clock, Shield, Users } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import partnerImg1 from '../assets/ChatGPT Image Jun 7, 2025, 02_58_55 PM.png';
import partnerImg2 from '../assets/ChatGPT Image Jun 7, 2025, 03_00_03 PM.png';
import partnerImg3 from '../assets/ChatGPT Image Jun 7, 2025, 03_00_52 PM.png';
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
  const navigate = useNavigate();
  
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      quote: 'SPN Logistics has been a reliable partner. Our loads always arrive on schedule, and their communication is exceptional.',
      name: 'John Doe',
      role: 'Logistics Manager, ACME Corp',
      avatar: reviewMen,
      rating: 5,
    },
    {
      quote: 'Their long-haul expertise has been game-changing for our supply chain. Professional service every time.',
      name: 'Jane Smith',
      role: 'Operations Director, Global X',
      avatar: reviewWomen,
      rating: 5,
    },
    {
      quote: 'Great communication and on-time deliveries every time. They understand our business needs perfectly.',
      name: 'Mike Johnson',
      role: 'Supply Chain Manager, Tech Solutions',
      avatar: reviewMen2,
      rating: 5,
    },
    {
      quote: 'SPN Logistics exceeds expectations. Their modern fleet and professional drivers make all the difference.',
      name: 'Sukhpreet Singh',
      role: 'Freight Coordinator, North Star Inc',
      avatar: reviewMenSukhpreet,
      rating: 5,
    },
  ];

  const partnerImages = [partnerImg1, partnerImg2, partnerImg3];

  const services = [
    {
      title: 'LTL Shipping',
      slug: 'ltl',
      description: 'Cost-effective less-than-truckload shipping for smaller freight',
      icon: <Package className="w-8 h-8" />,
    },
    {
      title: 'FTL Shipping',
      slug: 'ftl',
      description: 'Full truckload shipping for large cargo and dedicated routes',
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: 'Refrigerated Transport',
      slug: 'refrigerated',
      description: 'Temperature-controlled shipping for perishable goods',
      icon: <Snowflake className="w-8 h-8" />,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'We prioritize safety and compliance at every mile with comprehensive training and regular vehicle maintenance.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Modern Fleet',
      description: 'Our trucks are up-to-date and well-maintained, equipped with the latest technology for any haul.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Drivers',
      description: 'Our dedicated team of professional drivers ensures on-time deliveries with excellent customer service.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and real-time tracking for complete peace of mind.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>SPN Logistics - Reliable Trucking Services Across North America</title>
        <meta name="description" content="Professional trucking and logistics solutions with modern fleet, expert drivers, and 99% on-time delivery rate. Get your quote today!" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Your Trusted Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Logistics Excellence
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Reliable trucking and logistics solutions across North America with modern fleet, 
              professional drivers, and industry-leading on-time delivery rates.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link to="/contact">
                <Button size="lg" className="min-w-[200px]">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/careers">
                <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-neutral-900">
                  Join Our Fleet
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { value: new Date().getFullYear() - 2020, suffix: '+ Years', label: 'Experience' },
              { value: 5000000, suffix: '+', label: 'Miles Driven' },
              { value: 12000, suffix: '+', label: 'Loads Delivered' },
              { value: 99, suffix: '%', label: 'On-Time Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} duration={3} />
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Section 
        title="Our Services"
        subtitle="Comprehensive logistics solutions tailored to your business needs"
        spacing="xl"
        background="gradient"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card
                title={service.title}
                subtitle={service.description}
                icon={service.icon}
                onClick={() => navigate('/services')}
                variant="elevated"
                className="h-full text-center hover:shadow-2xl"
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section 
        title="Why Choose SPN Logistics"
        subtitle="We deliver excellence through commitment, innovation, and reliability"
        spacing="xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-6 p-6 rounded-2xl bg-white dark:bg-darkBg2 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-3 rounded-xl bg-gradient-primary text-white shadow-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100 font-heading">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section 
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from our satisfied customers"
        spacing="xl"
        background="gradient"
      >
        <div className="max-w-4xl mx-auto">
          <Slider {...testimonialSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div 
                  className="bg-white dark:bg-darkBg2 p-8 rounded-2xl shadow-xl mx-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Star Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-center mb-8 italic text-neutral-700 dark:text-neutral-300 font-body leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} avatar`}
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                    <div className="text-center">
                      <p className="font-bold text-neutral-900 dark:text-neutral-100 font-heading">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 font-body">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </Section>

      {/* Partners Section */}
      <Section 
        title="Our Trusted Partners"
        subtitle="Working with industry leaders to deliver exceptional service"
        spacing="lg"
      >
        <motion.div 
          className="flex flex-wrap gap-8 justify-center items-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {partnerImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt="Partner logo"
              className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="dark">
        <motion.div 
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-neutral-300 max-w-2xl mx-auto font-body">
            Experience the difference with SPN Logistics. Get your personalized quote today 
            and join thousands of satisfied customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="min-w-[200px]">
                Get Your Quote
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-neutral-900">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
