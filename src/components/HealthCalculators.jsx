import React, { useState, useMemo } from "react";
import { Calculator, Droplets, Scale, ArrowRight, Info } from "lucide-react";

export default function HealthCalculators({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("energy");

  // Shared Anthropometric State
  const [sex, setSex] = useState("female");
  const [age, setAge] = useState(29);
  const [heightCm, setHeightCm] = useState(163);
  const [weightKg, setWeightKg] = useState(64);
  const [activity, setActivity] = useState(1.375);
  const [goal, setGoal] = useState("maintain");
  const [bmiStandard, setBmiStandard] = useState("asian");

  const energyStats = useMemo(() => {
    const safeAge = Math.max(10, Math.min(100, Number(age) || 25));
    const safeHeight = Math.max(100, Math.min(230, Number(heightCm) || 160));
    const safeWeight = Math.max(25, Math.min(250, Number(weightKg) || 60));

    // Mifflin-St Jeor Equation
    const bmr =
      sex === "male"
        ? 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge + 5
        : 10 * safeWeight + 6.25 * safeHeight - 5 * safeAge - 161;

    const tdee = bmr * activity;
    let targetCalories = tdee;
    if (goal === "loss") targetCalories = Math.max(1200, tdee - 400);
    if (goal === "lean") targetCalories = tdee + 250;

    // Clinical Balanced Macro Calibration
    const proteinGrams = Math.round((targetCalories * 0.25) / 4);
    const carbsGrams = Math.round((targetCalories * 0.45) / 4);
    const fatsGrams = Math.round((targetCalories * 0.3) / 9);
    const hydrationLiters = (safeWeight * 0.033).toFixed(1);

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      targetCalories: Math.round(targetCalories),
      proteinGrams,
      carbsGrams,
      fatsGrams,
      hydrationLiters,
    };
  }, [sex, age, heightCm, weightKg, activity, goal]);

  const bmiStats = useMemo(() => {
    const safeHeightM = Math.max(1, (Number(heightCm) || 160) / 100);
    const safeWeight = Math.max(25, Number(weightKg) || 60);
    const bmi = safeWeight / (safeHeightM * safeHeightM);
    const rounded = bmi.toFixed(1);

    let category = "";
    let tone = "";
    let note = "";

    if (bmiStandard === "asian") {
      if (bmi < 18.5) {
        category = "Underweight (WHO Asia-Pacific)";
        tone = "text-amber-700 bg-amber-50 border-amber-200";
        note = "Nutrient-dense caloric & protein replenishment recommended.";
      } else if (bmi < 23.0) {
        category = "Healthy Metabolic Range (WHO Asia-Pacific)";
        tone = "text-emerald-800 bg-emerald-50 border-emerald-200";
        note = "Optimal range for South & Southeast Asian cardiometabolic risk.";
      } else if (bmi < 25.0) {
        category = "Overweight / Early Risk (WHO Asia-Pacific)";
        tone = "text-amber-800 bg-amber-50 border-amber-200";
        note = "Ideal window for gentle lifestyle & glycemic optimization.";
      } else {
        category = "Obesity Class (WHO Asia-Pacific ≥ 25.0)";
        tone = "text-rose-800 bg-rose-50 border-rose-200";
        note = "Structured Medical Nutrition Therapy strongly beneficial.";
      }
    } else {
      if (bmi < 18.5) {
        category = "Underweight (WHO Global)";
        tone = "text-amber-700 bg-amber-50 border-amber-200";
        note = "Focus on wholesome energy & micronutrient restoration.";
      } else if (bmi < 25.0) {
        category = "Normal Weight (WHO Global)";
        tone = "text-emerald-800 bg-emerald-50 border-emerald-200";
        note = "Balanced body-mass ratio; maintain with whole-food nutrition.";
      } else if (bmi < 30.0) {
        category = "Overweight (WHO Global)";
        tone = "text-amber-800 bg-amber-50 border-amber-200";
        note = "Sustainable metabolic calorie & movement plan advised.";
      } else {
        category = "Obesity Class (WHO Global ≥ 30.0)";
        tone = "text-rose-800 bg-rose-50 border-rose-200";
        note = "Personalized clinical dietetic support recommended.";
      }
    }

    return { bmi: rounded, category, tone, note };
  }, [heightCm, weightKg, bmiStandard]);

  return (
    <section id="calculators" className="py-20 lg:py-24 bg-[#FAF8F4] border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9E6D3B]">
            Interactive Clinical Screening Tools
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-[#16221D] mt-2">
            Estimate Your Daily Nutritional Targets
          </h2>
          <p className="text-[#52605A] mt-3 text-base">
            Inspired by clinical hospital screening protocols—explore your baseline energy needs and
            Asia-Pacific / Global BMI profile in seconds.
          </p>
        </div>

        <div className="bg-white border border-[#E2DFD7] rounded-[28px] shadow-xl overflow-hidden">
          {/* Calculator Tabs */}
          <div className="flex flex-wrap border-b border-[#E2DFD7] bg-[#F2EDE4]/50 p-2 gap-2">
            <button
              onClick={() => setActiveTab("energy")}
              className={`flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "energy"
                  ? "bg-[#14362B] text-[#FAF8F4] shadow-sm"
                  : "text-[#52605A] hover:bg-white/70"
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>BMR, TDEE &amp; Macro Estimator</span>
            </button>
            <button
              onClick={() => setActiveTab("bmi")}
              className={`flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "bmi"
                  ? "bg-[#14362B] text-[#FAF8F4] shadow-sm"
                  : "text-[#52605A] hover:bg-white/70"
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>WHO Asia-Pacific &amp; Global BMI Check</span>
            </button>
          </div>

          <div className="p-6 sm:p-10 grid lg:grid-cols-12 gap-10 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                    Biological Sex
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["female", "male"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSex(item)}
                        className={`py-2.5 rounded-xl text-xs font-semibold capitalize border transition-all cursor-pointer ${
                          sex === item
                            ? "bg-[#E9EFEA] border-[#14362B] text-[#14362B]"
                            : "bg-[#FAF8F4] border-[#E2DFD7] text-[#52605A]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="100"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E2DFD7] text-sm font-medium focus:outline-none focus:border-[#14362B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="230"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E2DFD7] text-sm font-medium focus:outline-none focus:border-[#14362B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="25"
                    max="250"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E2DFD7] text-sm font-medium focus:outline-none focus:border-[#14362B]"
                  />
                </div>
              </div>

              {activeTab === "energy" ? (
                <>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                      Daily Activity Level
                    </label>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F4] border border-[#E2DFD7] text-sm font-medium focus:outline-none focus:border-[#14362B]"
                    >
                      <option value={1.2}>Sedentary (Desk work, minimal exercise)</option>
                      <option value={1.375}>Lightly Active (1–3 light workouts/week)</option>
                      <option value={1.55}>Moderately Active (3–5 sessions/week)</option>
                      <option value={1.725}>Very Active (Daily athletic training)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                      Primary Nutritional Goal
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "loss", label: "Gentle Fat Loss" },
                        { id: "maintain", label: "Balanced Maintenance" },
                        { id: "lean", label: "Healthy Recovery / Gain" },
                      ].map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setGoal(g.id)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            goal === g.id
                              ? "bg-[#E9EFEA] border-[#14362B] text-[#14362B]"
                              : "bg-[#FAF8F4] border-[#E2DFD7] text-[#52605A]"
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#52605A] mb-2">
                    Clinical Reference Standard
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setBmiStandard("asian")}
                      className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        bmiStandard === "asian"
                          ? "bg-[#E9EFEA] border-[#14362B] text-[#14362B]"
                          : "bg-[#FAF8F4] border-[#E2DFD7] text-[#52605A]"
                      }`}
                    >
                      WHO Asia-Pacific (Recommended for Asian Adults)
                    </button>
                    <button
                      type="button"
                      onClick={() => setBmiStandard("global")}
                      className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        bmiStandard === "global"
                          ? "bg-[#E9EFEA] border-[#14362B] text-[#14362B]"
                          : "bg-[#FAF8F4] border-[#E2DFD7] text-[#52605A]"
                      }`}
                    >
                      WHO International Standard
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Live Results Column */}
            <div className="lg:col-span-6 bg-[#E9EFEA]/70 border border-[#14362B]/12 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              {activeTab === "energy" ? (
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#14362B]/10">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9E6D3B]">
                        Estimated Daily Target
                      </span>
                      <div className="font-display text-4xl sm:text-5xl font-semibold text-[#14362B] mt-0.5">
                        {energyStats.targetCalories.toLocaleString()}{" "}
                        <span className="text-xl font-normal text-[#52605A]">kcal / day</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#52605A]">
                        BMR: <strong className="text-[#16221D]">{energyStats.bmr} kcal</strong>
                      </div>
                      <div className="text-xs text-[#52605A] mt-0.5">
                        Maintenance TDEE:{" "}
                        <strong className="text-[#16221D]">{energyStats.tdee} kcal</strong>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-5">
                    <div className="bg-white rounded-2xl p-3.5 border border-[#E2DFD7] text-center">
                      <div className="text-[11px] uppercase tracking-wider text-[#52605A] font-semibold">
                        Protein (25%)
                      </div>
                      <div className="font-display text-2xl font-semibold text-[#14362B] mt-1">
                        {energyStats.proteinGrams}g
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-3.5 border border-[#E2DFD7] text-center">
                      <div className="text-[11px] uppercase tracking-wider text-[#52605A] font-semibold">
                        Carbs (45%)
                      </div>
                      <div className="font-display text-2xl font-semibold text-[#14362B] mt-1">
                        {energyStats.carbsGrams}g
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-3.5 border border-[#E2DFD7] text-center">
                      <div className="text-[11px] uppercase tracking-wider text-[#52605A] font-semibold">
                        Fats (30%)
                      </div>
                      <div className="font-display text-2xl font-semibold text-[#14362B] mt-1">
                        {energyStats.fatsGrams}g
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-white rounded-2xl p-4 border border-[#E2DFD7] flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-sm font-medium text-[#16221D]">
                      <Droplets className="w-4 h-4 text-[#1F4D3D]" />
                      <span>Daily Hydration Baseline</span>
                    </div>
                    <span className="font-semibold text-[#14362B]">
                      ~{energyStats.hydrationLiters} Liters / day
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9E6D3B]">
                    Calculated Body Mass Index
                  </span>
                  <div className="font-display text-5xl font-semibold text-[#14362B] mt-1">
                    {bmiStats.bmi} <span className="text-xl font-normal text-[#52605A]">kg/m²</span>
                  </div>
                  <div
                    className={`inline-block mt-3 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${bmiStats.tone}`}
                  >
                    {bmiStats.category}
                  </div>
                  <p className="text-sm text-[#374640] mt-4 leading-relaxed">{bmiStats.note}</p>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-[#14362B]/10 space-y-4">
                <p className="text-[11px] text-[#52605A] flex items-start gap-1.5 leading-relaxed">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#9E6D3B]" />
                  <span>
                    Screening estimate only. Clinical conditions (diabetes, thyroid, PCOS, kidney
                    or pediatric needs) require individualized Medical Nutrition Therapy.
                  </span>
                </p>
                <button
                  onClick={() =>
                    onOpenBooking({
                      service: "Clinical MNT Consultation",
                      notes: `Estimated target: ${energyStats.targetCalories} kcal/day (BMI ${bmiStats.bmi})`,
                    })
                  }
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#14362B] hover:bg-[#1F4D3D] text-[#FAF8F4] text-sm font-semibold py-3.5 px-6 rounded-full transition-colors cursor-pointer"
                >
                  <span>Turn These Numbers Into a Custom Meal Plan</span>
                  <ArrowRight className="w-4 h-4 text-[#D8A873]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
