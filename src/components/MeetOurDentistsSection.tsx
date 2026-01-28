'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

const MeetOurDentistsSection = () => {
  const dentists = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Lead Dentist',
      specialization: 'Cosmetic & Restorative Dentistry',
      bio: 'With over 15 years of experience, Dr. Johnson specializes in smile makeovers and full-mouth reconstruction. She is passionate about helping patients achieve their dream smiles.',
      image: '/expressive-young-woman-posing-studio.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Orthodontist',
      specialization: 'Braces & Invisalign',
      bio: 'Dr. Chen is an expert in orthodontic treatment, helping patients of all ages achieve perfectly aligned smiles using the latest techniques and technology.',
      image: '/portrait-smiling-handsome-male-doctor-man.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Periodontist',
      specialization: 'Gum Health & Implants',
      bio: 'Specializing in periodontal health and dental implants, Dr. Rodriguez ensures the foundation of your smile is healthy and strong.',
      image: '/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-gray-50">
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
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our highly skilled dental professionals are dedicated to providing you with the highest quality care in a comfortable and friendly environment.
          </p>
        </motion.div>

        {/* Dentists Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dentists.map((dentist, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={dentist.image}
                  alt={dentist.name}
                  width={300}
                  height={320}
                  className="w-full h-full object-cover"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={dentist.social.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a 
                      href={dentist.social.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-blue-400" />
                    </a>
                    <a 
                      href={dentist.social.email}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {dentist.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {dentist.title}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {dentist.specialization}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {dentist.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
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
            className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-xl"
          >
            Book a Consultation with Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurDentistsSection;
