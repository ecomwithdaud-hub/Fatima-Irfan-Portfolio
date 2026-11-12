import React, { useState, useEffect } from "react";
import { X, MessageCircle, Mail, Copy, Check, Globe2 } from "lucide-react";
import { PROFILE, SPECIALTIES, CARE_PLANS, WORLDWIDE_REGIONS } from "../data/portfolioData";

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("8-Week Global Wellness Concierge");
  const [region, setRegion] = useState("Malaysia & Southeast Asia");
  const [language, setLanguage] = useState("English");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialData?.service) setService(initialData.service);
    if (initialData?.region) setRegion(initialData.region);
    if (initialData?.notes) setNotes(initialData.notes);
  }, [initialData]);

  if (!isOpen) return null;

  const serviceOptions = [
    ...CARE_PLANS.map((p) => p.name),
    ...SPECIALTIES.map((s) => s.title),
  ];

  const buildMessage = () => {
    return [
      `Hello Fatima Irfan,`,
      `I would like to inquire about a nutrition & dietetics consultation:`,
      `- Name: ${name || "(Not provided)"}`,
      `- Email: ${email || "(Not provided)"}`,
      `- Area of Interest: ${service}`,
      `- Region / Timezone: ${region}`,
      `- Preferred Language: ${language}`,
      notes ? `- Health Goals / Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${PROFILE.whatsappNumber}?text=${encodeURIComponent(
      buildMessage()
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmail = () => {
    const subject = `Nutrition Consultation Inquiry — ${service}`;
    const url = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage())}`;
    window.location.href = url;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback ignored
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#14362B]/65 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F4] border border-[#E2DFD7] rounded-[28px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Booking Modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E2DFD7] flex items-center justify-center text-[#16221D] hover:bg-[#E9EFEA] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9E6D3B]">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Direct Consultation Concierge</span>
        </div>
        <h3 className="font-display text-3xl font-semibold text-[#16221D] mt-1">
          Schedule With Fatima Irfan
        </h3>
        <p className="text-xs sm:text-sm text-[#52605A] mt-1">
          In-person in Petaling Jaya or Virtual Telehealth worldwide. Send your inquiry directly
          via WhatsApp or Email for rapid scheduling.
        </p>

        <div className="mt-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#374640] mb-1.5">
                Your Full Name
              </label>
              <input
                type="text"
                placeholder="e.g., Sarah Ahmad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2DFD7] text-sm focus:outline-none focus:border-[#14362B]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#374640] mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2DFD7] text-sm focus:outline-none focus:border-[#14362B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374640] mb-1.5">
              Program or Clinical Specialty
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2DFD7] text-sm focus:outline-none focus:border-[#14362B]"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#374640] mb-1.5">
                Your Region
              </label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2DFD7] text-sm focus:outline-none focus:border-[#14362B]"
              >
                {WORLDWIDE_REGIONS.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#374640] mb-1.5">
                Preferred Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2DFD7] text-sm focus:outline-none focus:border-[#14362B]"
              >
                {PROFILE.languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#374640] mb-1.5">
              Health Goals or Dietary Context (Optional)
            </label>
            <textarea
              rows="3"
              placeholder="Briefly share your focus (e.g., diabetes care, pediatric meal planning, sports nutrition, culinary menu review)..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2DFD7] text-sm focus:outline-none focus:border-[#14362B]"
            />
          </div>
        </div>

        <div className="mt-6 space-y-2.5">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#14362B] hover:bg-[#1F4D3D] text-[#FAF8F4] font-semibold text-sm py-3.5 px-5 rounded-full transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#D8A873]" />
            <span>Send Consultation Request via WhatsApp</span>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2EDE4] text-[#14362B] border border-[#E2DFD7] font-semibold text-xs py-3 px-4 rounded-full transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#B67E47]" />
              <span>Open Email Draft</span>
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2EDE4] text-[#14362B] border border-[#E2DFD7] font-semibold text-xs py-3 px-4 rounded-full transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#52605A]" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
