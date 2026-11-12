export const PROFILE = {
  name: "Fatima Irfan",
  monogram: "FI",
  credentialsShort: "M.Sc. Nutrition · DDNS",
  title: "Clinical Nutritionist, Dietitian & Culinary Care Strategist",
  tagline:
    "Evidence-based Medical Nutrition Therapy & culturally fluent meal architecture — serving Petaling Jaya, Malaysia, and private telehealth clients worldwide.",
  phone: "+60 1133168543",
  whatsappNumber: "601133168543",
  email: "fatimalashari0@gmail.com",
  baseLocation: "Palm Spring Damansara, Petaling Jaya, Selangor, Malaysia",
  shortLocation: "Petaling Jaya, Selangor, Malaysia",
  languages: ["English", "Urdu", "Punjabi", "Saraiki"],
  metrics: [
    {
      value: "200+",
      label: "Clinical Nutritional Assessments",
      detail: "Individualized anthropometric & medical evaluations",
    },
    {
      value: "95%",
      label: "Therapeutic Diet Adherence",
      detail: "Achieved across diabetes, cardiac & GI care plans",
    },
    {
      value: "98%",
      label: "Patient Menu Satisfaction",
      detail: "Hospital & foodservice nutritional quality assurance",
    },
    {
      value: "6",
      label: "Global Service Regions",
      detail: "Multi-timezone virtual care across 4 languages",
    },
  ],
};

export const SPECIALTIES = [
  {
    id: "diabetes",
    category: "Clinical MNT",
    title: "Diabetes & Metabolic Care",
    subtitle: "Glycemic Stability Without Deprivation",
    description:
      "Precision carbohydrate calibration, micronutrient optimization, and insulin-friendly meal pacing for Type 1, Type 2, Prediabetes, and Gestational Diabetes — thoughtfully adapted to Asian, South Asian, and Western cuisines.",
    highlights: [
      "Glycemic load & macro-nutrient balancing",
      "HbA1c & fasting glucose-aligned meal plans",
      "Ramadan & travel blood-sugar protocols",
    ],
    badge: "Most Requested",
  },
  {
    id: "cardiovascular",
    category: "Clinical MNT",
    title: "Cardiovascular & Lipid Health",
    subtitle: "Heart-Protective Therapeutic Nutrition",
    description:
      "Evidence-based Medical Nutrition Therapy targeting hypertension, dyslipidemia, and cardiometabolic risk through anti-inflammatory fats, sodium calibration, and sustainable cardioprotective eating patterns.",
    highlights: [
      "Cholesterol & triglyceride reduction strategy",
      "DASH & Mediterranean-inspired Halal menus",
      "Long-term blood pressure support",
    ],
  },
  {
    id: "gi-allergies",
    category: "Clinical MNT",
    title: "Gastrointestinal & Food Allergies",
    subtitle: "Gentle Gut Restoration & Trigger Mapping",
    description:
      "Structured dietary evaluation and soothing therapeutic menus for IBS, gastritis, reflux, malabsorption, and complex food allergies or intolerances—restoring digestive comfort without unnecessary restriction.",
    highlights: [
      "Guided elimination & safe reintroduction",
      "Allergen-safe kitchen & dining protocols",
      "Microbiome & fiber tolerance pacing",
    ],
  },
  {
    id: "pediatric",
    category: "Family Care",
    title: "Pediatric & Family Nutrition",
    subtitle: "Nurturing Healthy Growth Milestones",
    description:
      "Compassionate, family-centered dietary counseling designed for infants, children, and adolescents—addressing picky eating, pediatric weight balance, childhood allergies, and nutrient-dense school lunches.",
    highlights: [
      "Age-specific growth & nutrient benchmarks",
      "Whole-family counseling & parent coaching",
      "Practical, kid-approved meal structures",
    ],
  },
  {
    id: "sports-weight",
    category: "Performance",
    title: "Weight Architecture & Sports Fueling",
    subtitle: "Sustainable Body Composition & Energy",
    description:
      "Anti-fad metabolic restructuring informed by clinical sports nutrition and supplementation science—whether targeting healthy fat loss, lean muscle recovery, or evidence-guided Keto/high-protein transitions.",
    highlights: [
      "Metabolic BMR/TDEE calorie & macro precision",
      "Evidence-based sports supplementation review",
      "Sustainable lifestyle habit engineering",
    ],
  },
  {
    id: "culinary",
    category: "Advisory",
    title: "Culinary & Hospitality Menu Consulting",
    subtitle: "Where Dietetics Meets Real Kitchens",
    description:
      "Informed by hands-on restaurant management and hospital menu oversight—partnering with wellness cafés, corporate kitchens, and hospitality brands on therapeutic menu design, portion standards, and allergen compliance.",
    highlights: [
      "Menu nutritional profiling & QA audits",
      "Kitchen workflow & food quality standards",
      "Guest-centric healthy menu innovation",
    ],
  },
];

export const CARE_PLANS = [
  {
    id: "mnt-intensive",
    tag: "Clinical Priority",
    name: "Clinical MNT Consultation",
    duration: "Single Deep-Dive + 2-Week Blueprint",
    idealFor: "Diabetes, Cardiovascular, GI Disorders & Pediatric Care",
    summary:
      "A comprehensive 60-minute clinical evaluation modeled on hospital dietetics standards, resulting in a bespoke therapeutic meal plan.",
    deliverables: [
      "Full anthropometric, medical & dietary history assessment",
      "Customized 14-day therapeutic meal blueprint (culturally adapted)",
      "Macro & micronutrient calibration + supplement review",
      "Written clinical summary & grocery swap guide",
    ],
    featured: false,
  },
  {
    id: "global-transformation",
    tag: "Most Popular Worldwide",
    name: "8-Week Global Wellness Concierge",
    duration: "8 Weeks · Virtual Worldwide / PJ",
    idealFor: "Sustainable Transformation, Metabolic Reset & Busy Professionals",
    summary:
      "High-touch, hospitality-grade ongoing dietetic coaching with weekly intake reviews, adaptive meal adjustments, and direct WhatsApp accountability.",
    deliverables: [
      "Initial 60-min diagnostic session + bi-weekly video follow-ups",
      "Dynamic meal plans updated as your schedule & progress evolve",
      "Dining-out, travel & cultural-feast navigation guides",
      "Priority WhatsApp check-ins across your local timezone",
    ],
    featured: true,
  },
  {
    id: "family-care",
    tag: "Household Harmony",
    name: "Family & Pediatric Care Plan",
    duration: "4 Weeks · Parent & Child Focus",
    idealFor: "Pediatric Nutrition, Picky Eaters & Multi-Generational Homes",
    summary:
      "Practical nutrition education for the entire household so parents feel confident and children thrive without mealtime battles.",
    deliverables: [
      "Growth & pediatric nutritional adequacy evaluation",
      "Unified family menu adaptable for adults & kids",
      "Interactive nutrition education session for caregivers",
      "Allergy-safe school lunch & snack architecture",
    ],
    featured: false,
  },
  {
    id: "culinary-advisory",
    tag: "B2B & Hospitality",
    name: "Culinary & Institutional Menu Advisory",
    duration: "Project-Based · Remote or On-Site",
    idealFor: "Restaurants, Wellness Brands, Clinics & Care Facilities",
    summary:
      "Bridging clinical dietetics and restaurant floor operations to elevate food quality, therapeutic compliance, and guest satisfaction.",
    deliverables: [
      "Complete menu nutritional & allergen audit",
      "Balanced menu engineering & portion standardization",
      "Front-of-house & kitchen quality assurance training",
      "Custom wellness & dietary-label menu development",
    ],
    featured: false,
  },
];

export const WORLDWIDE_REGIONS = [
  {
    id: "sea",
    name: "Malaysia & Southeast Asia",
    flagLabel: "Flagship Practice Hub",
    cities: "Petaling Jaya · Kuala Lumpur · Penang · Singapore · Brunei · Jakarta",
    mode: "In-Person (Klang Valley) & Virtual Telehealth",
    timezone: "MYT / SGT (UTC+8)",
    culturalFocus:
      "Malay, Chinese, Indian & Mamak dining adaptations, Halal therapeutic meal planning, hawker & café smart-swaps, and Asian-Pacific BMI metabolic benchmarks.",
    languages: "English · Urdu · Punjabi",
  },
  {
    id: "gcc",
    name: "Middle East & GCC",
    flagLabel: "Gulf Telehealth Corridor",
    cities: "Dubai · Abu Dhabi · Riyadh · Jeddah · Doha · Kuwait · Muscat",
    mode: "100% Virtual Video & Concierge WhatsApp",
    timezone: "GST / AST (UTC+3 / UTC+4)",
    culturalFocus:
      "100% Halal clinical nutrition, Levantine & Gulf cuisine calibration, Ramadan fasting glycemic safety, and expat family wellness plans.",
    languages: "English · Urdu · Punjabi · Saraiki",
  },
  {
    id: "south-asia",
    name: "South Asia",
    flagLabel: "Clinical Heritage Roots",
    cities: "Lahore · Islamabad · Karachi · Delhi · Mumbai · Regional Cities",
    mode: "Virtual Telehealth & Family Consultations",
    timezone: "PKT (UTC+5) / IST (UTC+5:30)",
    culturalFocus:
      "Authentic Pakistani & South Asian home-cooked meal plans (roti, daal, sabzi, lean curries) calibrated for diabetes, heart health, and pediatric growth.",
    languages: "Urdu · Punjabi · Saraiki · English",
  },
  {
    id: "uk-europe",
    name: "United Kingdom & Europe",
    flagLabel: "European Virtual Care",
    cities: "London · Manchester · Birmingham · Dublin · Berlin · Amsterdam",
    mode: "Virtual Telehealth (Morning & Evening Slots)",
    timezone: "GMT / BST / CET",
    culturalFocus:
      "Culturally sensitive care for both Western and South Asian diaspora households, NHS-aligned dietary literacy, and supermarket ingredient guides.",
    languages: "English · Urdu · Punjabi",
  },
  {
    id: "north-america",
    name: "North America",
    flagLabel: "Transatlantic Telehealth",
    cities: "Toronto · New York · Houston · Chicago · Vancouver · California",
    mode: "Virtual Telehealth (Flexible Evening/Morning Windows)",
    timezone: "EST / CST / PST",
    culturalFocus:
      "Busy-professional meal prep systems, fusion South Asian-North American therapeutic diets, sports performance & metabolic care.",
    languages: "English · Urdu · Punjabi",
  },
  {
    id: "anz",
    name: "Australia & New Zealand",
    flagLabel: "APAC Seamless Alignment",
    cities: "Sydney · Melbourne · Brisbane · Perth · Auckland",
    mode: "Virtual Telehealth (Minimal Timezone Offset)",
    timezone: "AEST / AWST / NZST",
    culturalFocus:
      "Seamless 2–4 hour timezone alignment with Malaysia for real-time weekly check-ins, family meal planning, and active lifestyle nutrition.",
    languages: "English · Urdu · Punjabi",
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    period: "Jul 2026 – Oct 2026",
    role: "Client Care & Operations Specialist",
    org: "Boostoral · Malaysia",
    category: "Client Care",
    summary:
      "Championed responsive, empathetic client communications—translating complex inquiries into swift resolutions and sustaining high-trust daily service standards.",
    skills: ["Patient-First Communication", "Concierge Care", "Problem Solving"],
  },
  {
    period: "Dec 2025 – Apr 2026",
    role: "Restaurant & Culinary Operations Manager",
    org: "Khan Baba Restaurant · Malaysia",
    category: "Culinary Leadership",
    summary:
      "Directed front-of-house and culinary kitchen teams, overseeing food quality assurance, menu execution standards, and guest satisfaction—bridging nutrition theory with real-world hospitality.",
    skills: ["Food Quality Assurance", "Culinary Operations", "Menu Standards"],
  },
  {
    period: "May 2025 – Sep 2025",
    role: "Guest Relations & Concierge Coordination",
    org: "Old 7 & Bigleaf Restaurant · Malaysia",
    category: "Hospitality",
    summary:
      "Orchestrated seamless client reception, appointment scheduling, and attentive front-of-house hospitality—honing the warm bedside manner clients love in 1-on-1 consultations.",
    skills: ["Scheduling Precision", "Active Listening", "Guest Hospitality"],
  },
  {
    period: "Jan 2023 – Jun 2023",
    role: "Clinical Dietetics Intern",
    org: "Mayo Hospital · Lahore, Pakistan",
    category: "Clinical Hospital",
    summary:
      "Evaluated complex patient nutritional needs across medical conditions, age, anthropometrics, and dietary restrictions. Designed therapeutic diets for diabetes, cardiovascular disease, allergies, and GI disorders while delivering family counseling and pediatric meal plans.",
    skills: ["Medical Nutrition Therapy", "Pediatric Diets", "Patient Counseling"],
  },
  {
    period: "Jul 2021 – Sep 2021",
    role: "Assistant Dietitian",
    org: "Lahore General Hospital · Lahore, Pakistan",
    category: "Clinical Hospital",
    summary:
      "Conducted 200+ clinical nutritional assessments, co-authored specialized therapeutic diets achieving a 95% adherence rate, boosted patient nutrition literacy by 20% via education sessions, and maintained hospital menu standards at 98% satisfaction.",
    skills: ["200+ Assessments", "95% Adherence", "98% Menu Satisfaction"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science (M.Sc.) in Nutrition",
    institution: "Lincoln University College",
    location: "Malaysia",
    focus: "Advanced Nutritional Sciences, Clinical Research & Global Public Health Nutrition",
  },
  {
    degree: "Doctor of Diet and Nutritional Sciences (DDNS)",
    institution: "University of Lahore",
    location: "Lahore, Pakistan",
    focus: "5-Year Clinical Dietetics Curriculum, Medical Nutrition Therapy, Pediatrics & Food Science",
  },
  {
    degree: "F.Sc. Pre-Medical Intermediate & Matriculation",
    institution: "Punjab College & Fazaia Inter College",
    location: "Lahore, Pakistan",
    focus: "Biological Sciences, Chemistry & Academic Foundation",
  },
];

export const CERTIFICATIONS = [
  {
    year: "2019",
    title: "All Pakistan Nutritionist Convention",
    type: "National Symposium",
  },
  {
    year: "2019",
    title: "Sports Nutrition & Evidence-Based Supplementation",
    type: "Clinical Workshop",
  },
  {
    year: "2019",
    title: "Keto, Paleo & High-Protein Diet Trends Evaluation",
    type: "Continuing Education",
  },
  {
    year: "2019",
    title: "One-Day Multidisciplinary Health Camp & IIC Showcase",
    type: "Clinical Outreach",
  },
  {
    year: "2018",
    title: "Organizer — Nutrition Camp & Iftar for Orphans",
    type: "Community Leadership",
  },
  {
    year: "2018",
    title: "All Pak Case Study & Innovation Ideas Competition + UOL Olympiad",
    type: "Academic Innovation",
  },
];

export const INSIGHTS = [
  {
    id: "asian-bmi-metabolic",
    tag: "Metabolic Health · Malaysia & Global",
    readTime: "4 min read",
    title: "Why Asian-Pacific BMI Cutoffs Matter in Early Metabolic Care",
    excerpt:
      "Standard global BMI charts often miss early visceral fat and insulin resistance in South Asian and Southeast Asian adults. Here is how clinical dietitians screen smarter.",
    content: [
      "Across Malaysia, Pakistan, and the global diaspora, clinicians frequently encounter individuals with a 'normal' Western BMI (under 25.0 kg/m²) who already display elevated fasting insulin, triglycerides, or central adiposity.",
      "Under World Health Organization Asia-Pacific clinical guidelines, overweight begins at 23.0 kg/m² and obesity at 25.0 kg/m²—reflecting differences in body fat distribution and cardiometabolic risk.",
      "In my clinical practice, BMI is never used in isolation. Every assessment pairs anthropometric trends with waist circumference, dietary micronutrient density, energy levels, and realistic lifestyle anchors so interventions feel empowering rather than punitive.",
    ],
  },
  {
    id: "cultural-diabetes-care",
    tag: "Medical Nutrition Therapy",
    readTime: "5 min read",
    title: "Managing Type 2 Diabetes Without Giving Up Cultural Comfort Foods",
    excerpt:
      "Sustainable blood-sugar control rarely succeeds on bland boiled meals. Learn the plate-sequencing and portion-architecture framework behind a 95% adherence rate.",
    content: [
      "One of the greatest reasons therapeutic diets fail is cultural mismatch. Telling a patient in Petaling Jaya, Dubai, or Lahore to abandon rice, roti, or family curries guarantees short-term compliance and long-term burnout.",
      "During clinical care at Lahore General Hospital and Mayo Hospital, combining culturally familiar flavors with fiber-first meal sequencing, smart cooking-oil swaps, and balanced protein-to-carb ratios produced a 95% adherence rate.",
      "Whether adapting nasi campur, chapati and daal, or Mediterranean bowls, Medical Nutrition Therapy works best when your meal plan feels like home.",
    ],
  },
  {
    id: "hospital-to-kitchen",
    tag: "Culinary Dietetics",
    readTime: "3 min read",
    title: "From Hospital Ward to Restaurant Kitchen: Designing Meals People Actually Finish",
    excerpt:
      "Clinical accuracy means nothing if the food isn't appetizing. How hospitality management transforms patient nutrition adherence.",
    content: [
      "A therapeutic diet sheet is only half the equation. Having managed restaurant operations and hospital menu quality standards (achieving 98% patient satisfaction), I look at nutrition through both a clinical microscope and a chef's lens.",
      "Texture, aroma, spice layering, prep time, and realistic grocery availability determine whether a client stays consistent in week six—not just day one.",
      "Every global telehealth plan I build balances biochemical precision with practical kitchen joy.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Fatima translated complex diabetic restrictions into familiar home-cooked meals our entire family actually enjoyed. Her patience and clarity made every check-in effortless.",
    author: "Amina R.",
    location: "Kuala Lumpur, Malaysia",
    focus: "Glycemic & Family Care",
  },
  {
    quote:
      "Having a dietitian who understands both clinical lab markers and real kitchen workflows is rare. Our virtual consultations across timezones felt deeply personal and practical.",
    author: "Tariq M.",
    location: "Dubai, UAE",
    focus: "Global Telehealth · Metabolic Reset",
  },
  {
    quote:
      "Her structured pediatric and allergy guidance removed all the guesswork from our son's school meals. Warm, thorough, and grounded in real science.",
    author: "Sana & Bilal K.",
    location: "London, UK",
    focus: "Pediatric & Allergy Nutrition",
  },
];
