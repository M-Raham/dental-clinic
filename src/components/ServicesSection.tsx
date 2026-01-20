'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Zap, Shield, Clock, ArrowRight, Activity } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Activity,
      title: 'General Dentistry',
      description: 'Comprehensive dental check-ups, cleanings, and preventive care to maintain optimal oral health.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, bonding, and smile makeovers for a confident appearance.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional teeth whitening treatments to brighten your smile by several shades.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Zap,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Shield,
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or clear aligners for a perfect bite.',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Clock,
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent issues including pain, trauma, and broken teeth.',
      color: 'from-red-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of dental services using the latest technology and techniques
            to ensure your comfort and satisfaction.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
