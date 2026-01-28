'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      service: 'Teeth Whitening',
      rating: 5,
      text: 'I had an amazing experience at BrightSmile Dental! The teeth whitening treatment was painless and the results exceeded my expectations. Dr. Johnson and her team are incredibly professional and caring.',
      initials: 'JM',
    },
    {
      id: 2,
      name: 'Robert Thompson',
      service: 'Dental Implants',
      rating: 5,
      text: 'After years of struggling with missing teeth, I finally got dental implants here. The process was smooth, and the quality of work is outstanding. I can now eat and smile with confidence!',
      initials: 'RT',
    },
    {
      id: 3,
      name: 'Amanda Foster',
      service: 'Invisalign',
      rating: 5,
      text: 'My Invisalign treatment was life-changing! The team was supportive throughout the entire process, and I love my new straight smile. The flexible scheduling made it easy to fit appointments into my busy life.',
      initials: 'AF',
    },
    {
      id: 4,
      name: 'David Chen',
      service: 'General Check-up',
      rating: 5,
      text: 'Best dental experience I\'ve ever had! The clinic is modern and clean, the staff is friendly, and Dr. Chen is thorough and gentle. They explained everything clearly and made me feel comfortable.',
      initials: 'DC',
    },
    {
      id: 5,
      name: 'Sarah Williams',
      service: 'Cosmetic Veneers',
      rating: 5,
      text: 'I got porcelain veneers and I couldn\'t be happier with the results! The attention to detail and artistry is incredible. People compliment my smile all the time now. Worth every penny!',
      initials: 'SW',
    },
    {
      id: 6,
      name: 'Michael Brown',
      service: 'Emergency Care',
      rating: 5,
      text: 'I had a dental emergency late at night and they accommodated me immediately. The care was exceptional, and they resolved my issue quickly. Truly grateful for their prompt and professional service.',
      initials: 'MB',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
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
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients about their experiences at BrightSmile Dental.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 1 ? 'ring-2 ring-blue-500 ring-offset-4' : ''
                }`}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-linear-to-rbr from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
            <p className="text-gray-600">Happy Patients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Would Recommend</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
