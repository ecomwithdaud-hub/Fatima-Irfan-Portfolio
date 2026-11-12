import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecialtiesAndPackages from "./components/SpecialtiesAndPackages";
import WorldwideServiceSection from "./components/WorldwideServiceSection";
import HealthCalculators from "./components/HealthCalculators";
import AboutCredentials from "./components/AboutCredentials";
import InsightsAndTestimonials from "./components/InsightsAndTestimonials";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { PROFILE } from "./data/portfolioData";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleOpenBooking = (prefill = null) => {
    setBookingData(prefill);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#16221D]">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <SpecialtiesAndPackages onOpenBooking={handleOpenBooking} />
        <WorldwideServiceSection onOpenBooking={handleOpenBooking} />
        <HealthCalculators onOpenBooking={handleOpenBooking} />
        <AboutCredentials />
        <InsightsAndTestimonials onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Concierge Pill (Home Dietitians + Pantai inspired) */}
      <a
        href={`https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
          "Hello Fatima Irfan, I would like to inquire about a nutrition consultation."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 bg-[#14362B] hover:bg-[#1F4D3D] text-[#FAF8F4] text-xs font-semibold px-4 py-3 rounded-full shadow-xl border border-white/15 transition-transform hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 text-[#D8A873]" />
        <span className="hidden sm:inline">WhatsApp Consultation</span>
      </a>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialData={bookingData}
      />
    </div>
  );
}
