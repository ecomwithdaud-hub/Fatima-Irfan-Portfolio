import React, { useState } from "react";
import { BookOpen, ArrowUpRight, Quote, X } from "lucide-react";
import { INSIGHTS, TESTIMONIALS } from "../data/portfolioData";

export default function InsightsAndTestimonials({ onOpenBooking }) {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <>
      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF8F4] border-b border-[#E2DFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6D3B]">
              Client &amp; Family Reflections
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#16221D] mt-2">
              Trusted Across Borders &amp; Kitchens
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-white border border-[#E2DFD7] rounded-3xl p-7 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <Quote className="w-7 h-7 text-[#D8A873] mb-4" />
                  <p className="text-sm sm:text-base text-[#374640] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2DFD7]">
                  <div className="font-semibold text-sm text-[#16221D]">{t.author}</div>
                  <div className="text-xs text-[#9E6D3B] font-medium mt-0.5">
                    {t.location} · {t.focus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS HUB (NutriWeb + Home Dietitians Nutrition Insights) */}
      <section id="insights" className="py-20 lg:py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6D3B]">
                Evidence-Based Knowledge Hub
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#16221D] mt-2">
                Nutrition Insights &amp; Clinical Perspectives
              </h2>
            </div>
            <p className="text-sm text-[#52605A] max-w-sm">
              Practical science—demystifying metabolic health, cultural meal planning, and
              sustainable adherence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {INSIGHTS.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="editorial-card bg-white border border-[#E2DFD7] rounded-3xl p-7 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#9E6D3B]">
                    <span>{article.tag}</span>
                    <span className="text-[#52605A]">{article.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#16221D] mt-3 leading-snug group-hover:text-[#1F4D3D] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#52605A] mt-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2DFD7] flex items-center justify-between text-xs font-semibold text-[#14362B]">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#B67E47]" />
                    Read Clinical Brief
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#14362B]/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#FAF8F4] border border-[#E2DFD7] rounded-3xl max-w-2xl w-full p-7 sm:p-10 shadow-2xl relative max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              aria-label="Close Article"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E2DFD7] flex items-center justify-center text-[#16221D] hover:bg-[#E9EFEA] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9E6D3B]">
              {activeArticle.tag} · {activeArticle.readTime}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#16221D] mt-2 leading-tight">
              {activeArticle.title}
            </h3>
            <p className="text-xs text-[#52605A] mt-2">
              By Fatima Irfan, M.Sc. Nutrition · Doctor of Diet &amp; Nutritional Sciences
            </p>

            <div className="mt-6 space-y-4 text-base text-[#374640] leading-relaxed border-t border-[#E2DFD7] pt-6">
              {activeArticle.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2DFD7] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#52605A]">
                Want personalized guidance on this topic?
              </span>
              <button
                onClick={() => {
                  const title = activeArticle.title;
                  setActiveArticle(null);
                  onOpenBooking({ service: "Clinical MNT Consultation", notes: title });
                }}
                className="bg-[#14362B] hover:bg-[#1F4D3D] text-[#FAF8F4] text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
