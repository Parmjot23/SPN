import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { getAllServices } from '../services/api';
import Section from '../ui/Section';
import { 
  Package, 
  Truck, 
  Snowflake, 
  Clock, 
  Shield, 
  MapPin, 
  CheckCircle, 
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Phone
} from 'lucide-react';

interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceInfo[]>([]);

  const serviceIcons: Record<string, React.ReactNode> = {
    ltl: <Package className="w-8 h-8 text-white" />,
    ftl: <Truck className="w-8 h-8 text-white" />,
    refrigerated: <Snowflake className="w-8 h-8 text-white" />,
  };

  const serviceFeatures: Record<string, string[]> = {
    ltl: [
      'Cost-effective consolidated shipping',
      'Flexible pickup and delivery',
      'Real-time tracking system',
      'Reliable transit times'
    ],
    ftl: [
      'Dedicated truck and driver',
      'Fastest transit times',
      'High-security transport',
      'Premium handling service'
    ],
    refrigerated: [
      'Temperature-controlled environment',
      'Fresh goods preservation',
      'Compliance with food safety',
      'Advanced monitoring systems'
    ]
  };

  const additionalServices = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Express Delivery',
      description: 'Time-critical shipments with guaranteed delivery windows'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cargo Insurance',
      description: 'Comprehensive protection for your valuable shipments'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Route Optimization',
      description: 'Smart logistics planning for maximum efficiency'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Dedicated Support',
      description: '24/7 customer service and shipment monitoring'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '10K+', label: 'Deliveries Made', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '99.8%', label: 'On-Time Rate', icon: <Clock className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Customer Rating', icon: <Star className="w-6 h-6" /> }
  ];

  useEffect(() => {
    setServices(getAllServices());
  }, []);

  return (
    <>
      <Helmet>
        <title>SPN Logistics | Premium Trucking Services</title>
        <meta name="description" content="Professional trucking services including LTL, FTL, and refrigerated transport. Reliable, secure, and efficient logistics solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <Section background="gradient" spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 font-heading">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            Delivering excellence across North America with our comprehensive trucking and logistics solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 min-w-[140px] border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Main Services Grid */}
      <Section title="Core Transport Solutions" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900 hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.div
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 w-fit"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {serviceIcons[service.slug]}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {serviceFeatures[service.slug]?.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
                
                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Additional Services */}
      <Section title="Additional Services" subtitle="Comprehensive logistics solutions tailored to your business needs" background="light" spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gradient" spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Ship with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SPN Logistics</span>?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get a custom quote for your shipping needs and experience the difference professional logistics makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.button>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Services;
