'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans including Delta Dental, Cigna, MetLife, and many others. We also offer flexible payment options and interest-free financing for qualifying treatments. Our front desk staff will be happy to help you understand your coverage and maximize your benefits.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards (Visa, MasterCard, American Express, Discover), and debit cards. Additionally, we offer third-party financing through CareCredit and LendingClub for larger treatment plans. We also have an in-house membership plan for uninsured patients.',
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Absolutely! We provide 24/7 emergency dental care for urgent issues like severe tooth pain, broken teeth, knocked-out teeth, or dental trauma. Call our emergency line immediately, and we\'ll schedule you as soon as possible, even outside regular business hours.',
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'The American Dental Association recommends visiting the dentist every six months for routine check-ups and cleanings. However, if you have specific dental conditions, gum disease, or are undergoing orthodontic treatment, we may recommend more frequent visits to maintain optimal oral health.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer: 'Yes, professional teeth whitening is completely safe when performed under dental supervision. We use FDA-approved whitening agents and take precautions to protect your gums and tooth enamel. Over-the-counter products can be less predictable and may cause sensitivity, which is why professional treatment is recommended.',
    },
    {
      question: 'Do you treat children?',
      answer: 'Yes, we welcome patients of all ages! We provide comprehensive dental care for children including routine check-ups, cleanings, fluoride treatments, sealants, and orthodontic evaluations. Our team is experienced in making children feel comfortable and creating positive dental experiences from an early age.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    hidden: { opacity: 0, y: 20 },
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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our dental services, insurance, and what to expect during your visit.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                </motion.div>
              </button>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly team is here to help! Don't hesitate to reach out if you need more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                Call Us Now
              </motion.a>
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 inline-flex items-center justify-center"
              >
                Book Appointment
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
