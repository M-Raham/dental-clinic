'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const LocationHoursSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      content: '123 Smile Street, Dental District, New York, NY 10001',
      action: 'Get Directions',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      content: '(123) 456-7890',
      action: 'Call Now',
      href: 'tel:+1234567890',
    },
    {
      icon: Mail,
      label: 'Email',
      content: 'info@brightsmiledental.com',
      action: 'Send Email',
      href: 'mailto:info@brightsmiledental.com',
    },
  ];

  const officeHours = [
    { day: 'Monday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
            Visit Our Dental Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in the heart of the city with easy access and parking available.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="relative h-96 lg:h-full min-h-[400px] bg-linear-to-br from-blue-100 to-teal-100">
                {/* Map Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      BrightSmile Dental Clinic
                    </h3>
                    <p className="text-gray-600 mb-4">
                      123 Smile Street, Dental District
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center mx-auto"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      Get Directions
                    </motion.button>
                  </div>
                </div>

                {/* Map Overlay Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-gray-400"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <a
                      href={info.href}
                      className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-700 transition-colors flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </div>
                        <div className="text-gray-600 mb-2">
                          {info.content}
                        </div>
                        <div className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                          {info.action} →
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      schedule.day === 'Sunday' 
                        ? 'bg-gray-50' 
                        : index % 2 === 0 
                          ? 'bg-blue-50' 
                          : 'bg-white'
                    }`}
                  >
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className={`${
                      schedule.day === 'Sunday' 
                        ? 'text-gray-500' 
                        : 'text-gray-700'
                    }`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0" />
                  <p className="text-sm text-yellow-800">
                    <strong>Emergency Care Available 24/7</strong> - Call us for urgent dental needs outside regular hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-linear-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Parking & Accessibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>Free parking available on-site</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>Wheelchair accessible entrance and facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>Near public transportation (Subway: 5 min walk)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <span>Comfortable waiting area with Wi-Fi</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationHoursSection;
