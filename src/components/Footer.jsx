import React from "react";
import { Phone, Mail, MapPin, Globe, MessageCircle, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#14362B] text-[#FAF8F4]">
      {/* Final Conversion Banner */}
      <div className="border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A873]">
              Begin Your Clinical Wellness Journey
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-2 leading-tight">
              Ready for nutrition guidance that fits your culture, schedule &amp; biology?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#FAF8F4] hover:bg-[#D8A873] text-[#14362B] hover:text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${PROFILE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#FAF8F4] border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D8A873]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF8F4] text-[#14362B] flex items-center justify-center font-display text-lg font-bold">
              {PROFILE.monogram}
            </div>
            <div>
              <div className="font-display text-2xl font-semibold">{PROFILE.name}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#D8A873]">
                {PROFILE.credentialsShort} · Nutritionist &amp; Dietitian
              </div>
            </div>
          </div>
          <p className="text-sm text-[#FAF8F4]/75 max-w-md leading-relaxed">
            Evidence-based Medical Nutrition Therapy, therapeutic meal design, and culinary menu
            consulting—bridging clinical science and hospitality warmth for clients in Malaysia and
            worldwide.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {PROFILE.languages.map((lang) => (
              <span
                key={lang}
                className="text-[11px] px-3 py-1 rounded-full bg-white/10 text-[#FAF8F4]/85"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-[#D8A873] font-semibold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-[#FAF8F4]/80">
            <li>
              <a href="#specialties" className="hover:text-white transition-colors">
                Clinical Specialties
              </a>
            </li>
            <li>
              <a href="#care-plans" className="hover:text-white transition-colors">
                Signature Care Plans
              </a>
            </li>
            <li>
              <a href="#worldwide" className="hover:text-white transition-colors">
                Worldwide Service Areas
              </a>
            </li>
            <li>
              <a href="#calculators" className="hover:text-white transition-colors">
                Nutrition Calculators
              </a>
            </li>
            <li>
              <a href="#credentials" className="hover:text-white transition-colors">
                Education &amp; Experience
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-[#D8A873] font-semibold mb-4">
            Contact &amp; Practice Base
          </h4>
          <ul className="space-y-3 text-sm text-[#FAF8F4]/80">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#D8A873] shrink-0 mt-0.5" />
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {PROFILE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#D8A873] shrink-0 mt-0.5" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-white break-all">
                {PROFILE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D8A873] shrink-0 mt-0.5" />
              <span>{PROFILE.shortLocation}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-[#D8A873] shrink-0 mt-0.5" />
              <span>Virtual Telehealth Worldwide</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-4 text-center text-xs text-[#FAF8F4]/55">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            &copy; {new Date().getFullYear()} {PROFILE.name} · Clinical Nutrition &amp; Dietetics.
          </span>
          <span>
            Educational content does not replace acute emergency medical care.
          </span>
        </div>
      </div>
    </footer>
  );
}
