import React, { useState } from "react";
import { Globe, Menu, X, Phone, CalendarCheck } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Navbar({ onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Specialties", href: "#specialties" },
    { label: "Care Plans", href: "#care-plans" },
    { label: "Worldwide", href: "#worldwide" },
    { label: "Health Tools", href: "#calculators" },
    { label: "Credentials", href: "#credentials" },
    { label: "Insights", href: "#insights" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Clinical Utility Strip (Sunway & Pantai inspired) */}
      <div className="bg-[#14362B] text-[#FAF8F4]/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Globe className="w-3.5 h-3.5 text-[#D8A873]" />
              <span>Petaling Jaya, Malaysia · Worldwide Telehealth</span>
            </span>
            <span className="hidden md:inline text-[#FAF8F4]/50">|</span>
            <span className="hidden md:inline text-[#FAF8F4]/80">
              Consultations in English, Urdu, Punjabi &amp; Saraiki
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-1.5 hover:text-[#D8A873] transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{PROFILE.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Navigation */}
      <nav className="bg-[#FAF8F4]/92 backdrop-blur-md border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#14362B] text-[#FAF8F4] flex items-center justify-center font-display text-xl font-semibold tracking-wider shadow-sm group-hover:bg-[#1F4D3D] transition-colors">
              {PROFILE.monogram}
            </div>
            <div>
              <div className="font-display text-2xl font-semibold leading-none text-[#16221D] tracking-tight">
                {PROFILE.name}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E6D3B] font-semibold mt-1">
                {PROFILE.credentialsShort} · Clinical Dietitian
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374640] hover:text-[#14362B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B67E47] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#14362B] hover:bg-[#1F4D3D] text-[#FAF8F4] text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#D8A873]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg text-[#14362B] hover:bg-[#E9EFEA] transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FAF8F4] border-t border-[#E2DFD7] px-4 py-5 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base font-medium text-[#16221D] hover:text-[#14362B] border-b border-[#E2DFD7]/60"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenBooking();
              }}
              className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-[#14362B] text-[#FAF8F4] text-sm font-medium px-5 py-3 rounded-full"
            >
              <CalendarCheck className="w-4 h-4 text-[#D8A873]" />
              <span>Book Consultation</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
