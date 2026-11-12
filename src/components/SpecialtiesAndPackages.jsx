import React, { useState } from "react";
import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Baby,
  Flame,
  UtensilsCrossed,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { SPECIALTIES, CARE_PLANS } from "../data/portfolioData";

const ICONS = {
  diabetes: Activity,
  cardiovascular: HeartPulse,
  "gi-allergies": ShieldCheck,
  pediatric: Baby,
  "sports-weight": Flame,
  culinary: UtensilsCrossed,
};

export default function SpecialtiesAndPackages({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Clinical MNT", "Family Care", "Performance", "Advisory"];

  const filteredSpecialties =
    activeCategory === "All"
      ? SPECIALTIES
      : SPECIALTIES.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* SECTION 1: CONDITION-BASED CLINICAL SPECIALTIES (Home Dietitians + Sunway Medical inspired) */}
      <section id="specialties" className="py-20 lg:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6D3B]">
                Centres of Nutritional Excellence
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#16221D] mt-2 leading-tight">
                Condition-Specific Medical Nutrition Therapy
              </h2>
              <p className="text-[#52605A] mt-3 text-base sm:text-lg leading-relaxed">
                Targeted, evidence-based dietary interventions built around your medical history,
                biomarkers, and cultural cuisine—never one-size-fits-all templates.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#14362B] text-[#FAF8F4] shadow-sm"
                      : "bg-white text-[#52605A] border border-[#E2DFD7] hover:border-[#14362B]/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialties.map((item) => {
              const Icon = ICONS[item.id] || Activity;
              return (
                <div
                  key={item.id}
                  className="editorial-card bg-white border border-[#E2DFD7] rounded-3xl p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#E9EFEA] text-[#14362B] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F2EDE4] text-[#9E6D3B]">
                        {item.badge || item.category}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-[#16221D]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#1F4D3D] mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-[#52605A] leading-relaxed mt-3">
                      {item.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-[#E2DFD7]/70 pt-4">
                      {item.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2 text-xs text-[#374640]">
                          <Check className="w-3.5 h-3.5 text-[#1F4D3D] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenBooking({ service: item.title })}
                    className="mt-6 w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FAF8F4] hover:bg-[#14362B] text-[#14362B] hover:text-[#FAF8F4] border border-[#E2DFD7] text-xs font-semibold transition-colors cursor-pointer group"
                  >
                    <span>Consult on {item.title.split(" ")[0]} Care</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: SIGNATURE CARE PLANS (Pantai Hospitals + WrapUp Blooms Boutique aesthetic) */}
      <section id="care-plans" className="py-20 lg:py-24 bg-[#F2EDE4]/65 border-y border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6D3B]">
                Structured Wellness Packages
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#16221D] mt-2 leading-tight">
                Curated Programs for Measurable Health Outcomes
              </h2>
              <p className="text-[#52605A] mt-3 text-base sm:text-lg leading-relaxed max-w-2xl">
                Whether you require intensive clinical intervention or flexible worldwide coaching,
                each package combines scientific rigor with attentive, hospitality-grade support.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#E2DFD7] shadow-lg bg-white p-2.5 flex items-center gap-4">
                <img
                  src="/images/hero-nutrition.jpg"
                  alt="Balanced therapeutic whole-food meal spread"
                  className="w-28 h-28 rounded-2xl object-cover shrink-0"
                />
                <div className="pr-2">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#9E6D3B]">
                    98% Satisfaction Standard
                  </p>
                  <p className="font-display text-xl font-semibold text-[#16221D] mt-0.5">
                    Real Food, Real Flavor
                  </p>
                  <p className="text-xs text-[#52605A] mt-1 leading-relaxed">
                    Every plan adapts to local groceries, family cooking, and your busy schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {CARE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`editorial-card rounded-3xl p-7 flex flex-col justify-between border ${
                  plan.featured
                    ? "bg-[#14362B] text-[#FAF8F4] border-[#14362B] shadow-xl"
                    : "bg-white text-[#16221D] border-[#E2DFD7]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1 ${
                        plan.featured
                          ? "bg-[#B67E47] text-white"
                          : "bg-[#E9EFEA] text-[#14362B]"
                      }`}
                    >
                      {plan.featured && <Sparkles className="w-3 h-3" />}
                      {plan.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold leading-snug">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs font-medium mt-1.5 ${
                      plan.featured ? "text-[#D8A873]" : "text-[#9E6D3B]"
                    }`}
                  >
                    {plan.duration}
                  </p>
                  <p
                    className={`text-xs mt-3 leading-relaxed ${
                      plan.featured ? "text-[#FAF8F4]/80" : "text-[#52605A]"
                    }`}
                  >
                    {plan.summary}
                  </p>

                  <div
                    className={`mt-4 pt-4 border-t ${
                      plan.featured ? "border-white/15" : "border-[#E2DFD7]"
                    }`}
                  >
                    <p
                      className={`text-[11px] uppercase tracking-wider font-semibold mb-2.5 ${
                        plan.featured ? "text-[#D8A873]" : "text-[#14362B]"
                      }`}
                    >
                      What&apos;s Included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-xs leading-relaxed">
                          <Check
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              plan.featured ? "text-[#D8A873]" : "text-[#1F4D3D]"
                            }`}
                          />
                          <span className={plan.featured ? "text-[#FAF8F4]/90" : "text-[#374640]"}>
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7">
                  <p
                    className={`text-[11px] mb-3 ${
                      plan.featured ? "text-[#FAF8F4]/70" : "text-[#52605A]"
                    }`}
                  >
                    <strong className="font-semibold">Ideal for:</strong> {plan.idealFor}
                  </p>
                  <button
                    onClick={() => onOpenBooking({ service: plan.name })}
                    className={`w-full py-3 px-4 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      plan.featured
                        ? "bg-[#FAF8F4] text-[#14362B] hover:bg-[#D8A873] hover:text-white"
                        : "bg-[#14362B] text-[#FAF8F4] hover:bg-[#1F4D3D]"
                    }`}
                  >
                    Request This Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
