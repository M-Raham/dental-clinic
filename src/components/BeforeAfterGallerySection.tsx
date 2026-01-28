'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import Image from 'next/image';

const BeforeAfterGallerySection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const cases = [
    {
      id: 1,
      title: 'Complete Smile Makeover',
      procedure: 'Porcelain Veneers',
      description: 'Transformed discolored and misaligned teeth into a perfect smile using custom porcelain veneers.',
      beforeImage: '/before-veneers.svg',
      afterImage: '/after-veneers.svg',
    },
    {
      id: 2,
      title: 'Dental Implant Restoration',
      procedure: 'Single Tooth Implant',
      description: 'Replaced a missing front tooth with a natural-looking dental implant that perfectly matches adjacent teeth.',
      beforeImage: '/before-implant.svg',
      afterImage: '/after-implant.svg',
    },
    {
      id: 3,
      title: 'Teeth Whitening Transformation',
      procedure: 'Professional Whitening',
      description: 'Achieved dramatic whitening results using our advanced professional teeth whitening system.',
      beforeImage: '/before-veneers.svg',
      afterImage: '/after-veneers.svg',
    },
    {
      id: 4,
      title: 'Invisalign Results',
      procedure: 'Clear Aligners',
      description: 'Straightened crooked teeth and corrected bite using Invisalign clear aligners over 12 months.',
      beforeImage: '/before-veneers.svg',
      afterImage: '/after-veneers.svg',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smile Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the life-changing results our patients have achieved with our advanced dental treatments and personalized care.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCase(selectedCase === caseItem.id ? null : caseItem.id)}
            >
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <Image
                      src={caseItem.beforeImage}
                      alt="Before treatment"
                      width={200}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-700 bg-white/80 px-3 py-1 rounded-full">
                        Before
                      </span>
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <Image
                      src={caseItem.afterImage}
                      alt="After treatment"
                      width={200}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-700 bg-white/80 px-3 py-1 rounded-full">
                        After
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Divider Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {caseItem.procedure}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {caseItem.description}
                </p>
                
                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  {selectedCase === caseItem.id ? 'Hide Details' : 'View Details'}
                  <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${
                    selectedCase === caseItem.id ? 'rotate-90' : ''
                  }`} />
                </motion.button>

                {/* Expanded Details */}
                {selectedCase === caseItem.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Treatment Time:</span>
                        <p className="text-gray-600">2-3 weeks</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Longevity:</span>
                        <p className="text-gray-600">10-15 years</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Pain Level:</span>
                        <p className="text-gray-600">Minimal</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Recovery:</span>
                        <p className="text-gray-600">1-2 days</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-blue-500 to-teal-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready for Your Own Smile Transformation?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Schedule a consultation today and let us create your perfect smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View More Cases
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallerySection;
