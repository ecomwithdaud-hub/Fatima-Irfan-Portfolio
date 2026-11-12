import React from "react";
import { ArrowRight, Calculator, CheckCircle2, Globe2, Sparkles } from "lucide-react";
import { PROFILE } from "../data/portfolioData";
import dietitianPortrait from "../assets/images/dietitian-portrait.jpg";

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E2DFD7]">
      {/* Subtle Botanical Ambient Background */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#E9EFEA] blur-3xl opacity-80 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-[#F2EDE4] blur-3xl opacity-90 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9EFEA] border border-[#14362B]/15 text-[#14362B] text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B67E47]" />
              <span>Evidence-Based Clinical Dietetics · Worldwide Care</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-semibold text-[#16221D] leading-[1.06] tracking-tight">
              Clinical nourishment,{" "}
              <span className="italic font-normal text-[#1F4D3D]">
                crafted with warmth
              </span>{" "}
              for every table worldwide.
            </h1>

            <p className="text-base sm:text-lg text-[#52605A] leading-relaxed max-w-2xl">
              Led by <strong className="text-[#16221D] font-semibold">Fatima Irfan</strong>{" "}
              (<em>M.Sc. Nutrition · Doctor of Diet &amp; Nutritional Sciences</em>), uniting
              tertiary-hospital Medical Nutrition Therapy with culinary hospitality standards to
              deliver sustainable, culturally fluent care—from Petaling Jaya to clients across 6
              continents.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2.5 bg-[#14362B] hover:bg-[#1F4D3D] text-[#FAF8F4] font-medium px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Book a 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D8A873]" />
              </button>

              <a
                href="#calculators"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F2EDE4] text-[#14362B] border border-[#14362B]/20 font-medium px-6 py-3.5 rounded-full transition-colors"
              >
                <Calculator className="w-4 h-4 text-[#B67E47]" />
                <span>Free Nutrition Calculators</span>
              </a>
            </div>

            {/* Anti-Fad Promise Pills */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-[#52605A]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1F4D3D]" />
                No crash or fad diets
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1F4D3D]" />
                Halal &amp; culturally adapted menus
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#B67E47]" />
                Virtual care in 4 languages
              </span>
            </div>
          </div>

          {/* Right Framed Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[28px] overflow-hidden border border-[#E2DFD7] shadow-2xl bg-[#F2EDE4] aspect-[4/4.6]">
              <img
                src={dietitianPortrait}
                alt="Fatima Irfan — Clinical Nutritionist and Dietitian"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14362B]/70 via-transparent to-transparent" />

              {/* Top-Right Live Availability Pill */}
              <div className="absolute top-4 right-4 bg-white/92 backdrop-blur-md border border-[#E2DFD7] rounded-full px-3.5 py-1.5 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[11px] font-semibold text-[#14362B]">
                  Accepting Worldwide Clients
                </span>
              </div>

              {/* Bottom Caption aligned right on desktop so floating card never overlaps */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-auto sm:text-right text-[#FAF8F4]">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#D8A873] font-semibold">
                  Clinical Precision
                </p>
                <p className="font-display text-2xl font-medium mt-0.5">
                  Fatima Irfan
                </p>
              </div>
            </div>

            {/* Floating Credential Trust Card (WrapUp Blooms + Sunway style) */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md border border-[#E2DFD7] rounded-2xl p-4 shadow-xl max-w-[265px] animate-float-slow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E9EFEA] text-[#14362B] flex items-center justify-center font-display text-lg font-bold shrink-0">
                  M.Sc.
                </div>
                <div>
                  <p className="text-xs font-bold text-[#14362B] uppercase tracking-wider">
                    Verified Clinical Training
                  </p>
                  <p className="text-xs text-[#52605A] mt-1 leading-snug">
                    Lincoln University College (MY) &amp; Mayo / Lahore General Hospitals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Trust Bar (4 Verified Impact Metrics) */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROFILE.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white/80 backdrop-blur-sm border border-[#E2DFD7] rounded-2xl p-5 sm:p-6 shadow-xs"
            >
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[#14362B]">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#16221D] mt-1">{metric.label}</div>
              <div className="text-xs text-[#52605A] mt-1 leading-relaxed">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
