'use client';

import { motion, useAnimation } from 'framer-motion';
import { Star, Clock, Users, Award, ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Wait for hydration and initial load
    const timer = setTimeout(() => {
      setIsLoaded(true);
      controls.start('visible');
    }, 100);

    return () => clearTimeout(timer);
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-teal-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <motion.div 
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Eyebrow text */}
            <motion.div variants={itemVariants} className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>Welcome to BrightSmile Dental Clinic</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Your Smile Deserves
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-600">
                The Best Care
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Experience exceptional dental care with our team of experienced professionals. 
              We combine advanced technology with gentle, personalized treatment to keep your smile healthy and beautiful.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-xl flex items-center justify-center group"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="ml-1 text-2xl font-bold text-gray-900">2000+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Patients</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-teal-500" />
                  <span className="ml-1 text-2xl font-bold text-gray-900">20+</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 40% */}
          <motion.div 
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main image/visual */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-dental-clinic.svg"
                  alt="BrightSmile Dental Clinic"
                  width={600}
                  height={400}
                  className="w-full h-96 lg:h-full min-h-[400px] object-cover"
                  priority
                />
              </div>
              
              {/* Floating cards */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emergency Care</p>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Expert Team</p>
                    <p className="text-sm text-gray-600">5 Specialists</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
