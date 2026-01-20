'use client';

import { motion } from 'framer-motion';
import { Users, Cpu, Heart, DollarSign, Calendar, CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Dentists',
      description: 'Our team consists of highly qualified dental professionals with years of experience',
      stat: '15+',
      statLabel: 'Years Experience',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      title: 'Modern Equipment',
      description: 'State-of-the-art dental technology for precise and comfortable treatments',
      stat: '100%',
      statLabel: 'Digital Equipment',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Heart,
      title: 'Painless Procedures',
      description: 'Gentle care techniques ensuring your comfort throughout every treatment',
      stat: '98%',
      statLabel: 'Patient Satisfaction',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive pricing with flexible payment options and insurance acceptance',
      stat: '0%',
      statLabel: 'Interest Financing',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Extended hours and weekend appointments to fit your busy lifestyle',
      stat: '24/7',
      statLabel: 'Emergency Support',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: CheckCircle,
      title: 'Insurance Accepted',
      description: 'We work with most major insurance providers to maximize your benefits',
      stat: '50+',
      statLabel: 'Insurance Plans',
      color: 'from-teal-500 to-cyan-600',
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
    <section className="py-20 bg-white">
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
            Why Choose BrightSmile Dental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, technology, and compassionate care to provide the best dental experience for you and your family.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
            >
              {/* Icon and Stat */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{feature.stat}</div>
                  <div className="text-sm text-gray-600">{feature.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied patients who trust us with their smiles
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Schedule Your Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
