import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import MeetOurDentistsSection from '@/components/MeetOurDentistsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BeforeAfterGallerySection from '@/components/BeforeAfterGallerySection';
import AppointmentBookingSection from '@/components/AppointmentBookingSection';
import LocationHoursSection from '@/components/LocationHoursSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MeetOurDentistsSection />
      <TestimonialsSection />
      <BeforeAfterGallerySection />
      <AppointmentBookingSection />
      <LocationHoursSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
