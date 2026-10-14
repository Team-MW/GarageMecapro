import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickBookingBar from "@/components/QuickBookingBar";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import EngagementsSection from "@/components/EngagementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingFormSection from "@/components/BookingFormSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col relative">
      <Navbar />
      <Hero />
      <QuickBookingBar />
      <BrandsSection />
      <ServicesSection />
      <EmergencyBanner />
      <EngagementsSection />
      <TestimonialsSection />
      <BookingFormSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <MobileCallBar />
    </main>
  );
}
