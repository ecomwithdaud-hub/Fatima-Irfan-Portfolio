import React, { useState } from "react";
import { GraduationCap, Award, Briefcase, HeartHandshake, CheckCircle2 } from "lucide-react";
import {
  EXPERIENCE_TIMELINE,
  EDUCATION,
  CERTIFICATIONS,
  PROFILE,
} from "../data/portfolioData";

export default function AboutCredentials() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="credentials" className="py-20 lg:py-24 bg-[#F2EDE4]/55 border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dual Superpower Editorial Bio */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] overflow-hidden border border-[#E2DFD7] shadow-xl bg-white p-2">
              <img
                src="/images/clinic-workspace.jpg"
                alt="Fatima Irfan modern clinical nutrition workspace"
                className="w-full h-[410px] object-cover rounded-[22px]"
              />
              <div className="p-5 bg-white">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#9E6D3B] font-semibold">
                  Clinical &amp; Culinary Synergy
                </div>
                <div className="font-display text-2xl font-semibold text-[#16221D] mt-1">
                  Fatima Irfan, M.Sc., DDNS
                </div>
                <p className="text-xs text-[#52605A] mt-1.5 leading-relaxed">
                  Petaling Jaya, Selangor, Malaysia · Multilingual Practice (
                  {PROFILE.languages.join(" · ")})
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6D3B]">
              Meet Your Clinical Dietitian
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#16221D] leading-tight">
              Hospital-Trained Precision Meets Concierge Hospitality
            </h2>
            <p className="text-base text-[#374640] leading-relaxed">
              Holding a <strong>Master of Science in Nutrition</strong> from Lincoln University
              College (Malaysia) and a <strong>Doctor of Diet and Nutritional Sciences</strong>{" "}
              from the University of Lahore, Fatima brings rigorous clinical dietetics together
              with hands-on culinary and client-care leadership.
            </p>
            <p className="text-base text-[#52605A] leading-relaxed">
              From conducting <strong>200+ patient nutritional assessments</strong> and achieving a{" "}
              <strong>95% therapeutic diet adherence rate</strong> in tertiary hospital wards (Mayo
              Hospital &amp; Lahore General Hospital), to directing food quality standards and
              guest relations in Malaysia&apos;s hospitality sector, her approach bridges the gap
              between clinical prescriptions and joyful, everyday meals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#E2DFD7] rounded-2xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F4D3D] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#16221D]">
                    Clinical Dietetics Depth
                  </div>
                  <p className="text-xs text-[#52605A] mt-0.5">
                    Diabetes, cardiovascular, GI, allergy &amp; pediatric MNT protocols
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#E2DFD7] rounded-2xl p-4 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#B67E47] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#16221D]">
                    Culinary &amp; Client Fluency
                  </div>
                  <p className="text-xs text-[#52605A] mt-0.5">
                    Menu QA, foodservice operations &amp; empathetic multi-lingual care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NutriWeb-Inspired Structured Archive Tabs */}
        <div className="bg-white border border-[#E2DFD7] rounded-[28px] p-5 sm:p-8 shadow-sm">
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#E2DFD7]">
            {[
              { id: "experience", label: "Clinical & Operations Experience", icon: Briefcase },
              { id: "education", label: "Academic Degrees", icon: GraduationCap },
              { id: "certifications", label: "Symposia, Training & Leadership", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#14362B] text-[#FAF8F4] shadow-sm"
                      : "bg-[#FAF8F4] text-[#52605A] hover:text-[#14362B] border border-[#E2DFD7]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-7">
            {activeTab === "experience" && (
              <div className="space-y-5">
                {EXPERIENCE_TIMELINE.map((item) => (
                  <div
                    key={`${item.role}-${item.period}`}
                    className="rounded-2xl border border-[#E2DFD7] bg-[#FAF8F4]/70 p-5 sm:p-6 flex flex-col md:flex-row md:items-start justify-between gap-4"
                  >
                    <div className="md:w-56 shrink-0">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E9EFEA] text-[#14362B]">
                        {item.category}
                      </span>
                      <div className="text-xs font-semibold text-[#9E6D3B] mt-2">
                        {item.period}
                      </div>
                      <div className="text-xs text-[#52605A] mt-0.5">{item.org}</div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-[#16221D]">
                        {item.role}
                      </h3>
                      <p className="text-sm text-[#52605A] mt-1.5 leading-relaxed">
                        {item.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-[#E2DFD7] text-[#374640]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div className="grid md:grid-cols-3 gap-5">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-2xl border border-[#E2DFD7] bg-[#FAF8F4]/70 p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#E9EFEA] text-[#14362B] flex items-center justify-center mb-4">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-[#16221D] leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-[#1F4D3D] mt-2">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#9E6D3B] font-medium mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                    <p className="text-xs text-[#52605A] mt-4 pt-4 border-t border-[#E2DFD7] leading-relaxed">
                      {edu.focus}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-2xl border border-[#E2DFD7] bg-[#FAF8F4]/70 p-5"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9E6D3B]">
                        {cert.type}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#E9EFEA] text-[#14362B]">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-[#16221D] leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
