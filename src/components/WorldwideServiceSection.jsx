import React, { useState } from "react";
import { Globe, MapPin, Clock, Languages, Video, ArrowRight } from "lucide-react";
import { WORLDWIDE_REGIONS } from "../data/portfolioData";

export default function WorldwideServiceSection({ onOpenBooking }) {
  const [selectedId, setSelectedId] = useState(WORLDWIDE_REGIONS[0].id);
  const activeRegion =
    WORLDWIDE_REGIONS.find((r) => r.id === selectedId) || WORLDWIDE_REGIONS[0];

  return (
    <section id="worldwide" className="py-20 lg:py-24 bg-[#14362B] text-[#FAF8F4] relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FAF8F4 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A873]">
              <Globe className="w-4 h-4" />
              <span>Worldwide Areas of Service</span>
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold mt-2 leading-tight">
              Borderless Clinical Dietetics, Rooted in Cultural Fluency
            </h2>
            <p className="text-[#FAF8F4]/75 mt-3 text-base sm:text-lg leading-relaxed">
              Headquartered in Petaling Jaya, Malaysia with seamless virtual consultations across
              Asia-Pacific, the Middle East, Europe, and North America. Select your region below to
              explore timezone slots and culinary adaptations.
            </p>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl px-5 py-3.5 backdrop-blur-sm shrink-0">
            <div className="text-[11px] uppercase tracking-wider text-[#D8A873] font-semibold">
              Global Telehealth Hub
            </div>
            <div className="text-sm font-medium mt-0.5">
              6 Continents · 4 Languages · Halal &amp; Multi-Cuisine
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Region Selector List */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {WORLDWIDE_REGIONS.map((region) => {
              const isSelected = region.id === activeRegion.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedId(region.id)}
                  className={`text-left rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-[#FAF8F4] text-[#16221D] border-[#FAF8F4] shadow-lg"
                      : "bg-white/5 hover:bg-white/10 text-[#FAF8F4] border-white/12"
                  }`}
                >
                  <div>
                    <div
                      className={`text-[10px] uppercase tracking-[0.18em] font-semibold ${
                        isSelected ? "text-[#9E6D3B]" : "text-[#D8A873]"
                      }`}
                    >
                      {region.flagLabel}
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-semibold mt-0.5">
                      {region.name}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#14362B] translate-x-0.5" : "text-white/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Regional Concierge Panel */}
          <div className="lg:col-span-7 bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/15">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D8A873] font-semibold">
                    {activeRegion.flagLabel}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-semibold mt-1">
                    {activeRegion.name}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B67E47] text-white text-xs font-semibold">
                  <Video className="w-3.5 h-3.5" />
                  Accepting New Clients
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-7">
                <div className="bg-white/6 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D8A873] font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>Key Cities &amp; Coverage</span>
                  </div>
                  <p className="text-sm text-[#FAF8F4]/90 mt-2 leading-relaxed">
                    {activeRegion.cities}
                  </p>
                </div>

                <div className="bg-white/6 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D8A873] font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Timezone &amp; Format</span>
                  </div>
                  <p className="text-sm text-[#FAF8F4]/90 mt-2 font-medium">
                    {activeRegion.timezone}
                  </p>
                  <p className="text-xs text-[#FAF8F4]/70 mt-1">{activeRegion.mode}</p>
                </div>
              </div>

              <div className="mt-5 bg-white/6 rounded-2xl p-5 border border-white/10">
                <div className="text-xs uppercase tracking-wider text-[#D8A873] font-semibold">
                  Cultural &amp; Culinary Specialization
                </div>
                <p className="text-sm sm:text-base text-[#FAF8F4]/90 mt-2 leading-relaxed">
                  {activeRegion.culturalFocus}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[#FAF8F4]/80">
                <Languages className="w-4 h-4 text-[#D8A873]" />
                <span className="font-semibold">Consultation Languages:</span>
                <span>{activeRegion.languages}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#FAF8F4]/70 max-w-sm">
                Flexible morning &amp; evening telehealth windows coordinated directly to your local
                clock.
              </p>
              <button
                onClick={() => onOpenBooking({ region: activeRegion.name })}
                className="inline-flex items-center gap-2 bg-[#FAF8F4] hover:bg-[#D8A873] text-[#14362B] hover:text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors cursor-pointer"
              >
                <span>Schedule for {activeRegion.name.split(" ")[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
