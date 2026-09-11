export const universities = [
  {
    slug: "university-of-queensland",
    name: "University of Queensland",
    country: "Australia",
    flag: "/flags/au.svg",
    ranking: 86,
    international: "5,550",
    image: "/images/unis/uq.jpg",
    subjects: ["Business", "Engineering", "Life Sciences", "Law"],
    about:
      "A Group of Eight research university in Brisbane, known for biotechnology, mining engineering, and a riverside campus culture.",
  },
  {
    slug: "university-of-oxford",
    name: "University of Oxford",
    country: "United Kingdom",
    flag: "/flags/gb.svg",
    ranking: 3,
    international: "12,010",
    image: "/images/unis/oxford.jpg",
    subjects: ["PPE", "Medicine", "Law", "Computer Science"],
    about:
      "The oldest English-speaking university in the world. Collegiate tutorials, world-class research, and a city built around scholarship.",
  },
  {
    slug: "university-of-toronto",
    name: "University of Toronto",
    country: "Canada",
    flag: "/flags/ca.svg",
    ranking: 21,
    international: "27,800",
    image: "/images/unis/toronto.jpg",
    subjects: ["Computer Science", "Rotman Business", "Medicine", "Arts"],
    about:
      "Canada's flagship research university, spanning three campuses and one of the most international student communities in North America.",
  },
  {
    slug: "harvard-university",
    name: "Harvard University",
    country: "United States",
    flag: "/flags/us.svg",
    ranking: 4,
    international: "9,950",
    image: "/images/unis/harvard.jpg",
    subjects: ["Liberal Arts", "Business", "Law", "Public Health"],
    about:
      "Ivy League excellence across undergraduate, graduate, and professional schools, with unmatched alumni and research networks.",
  },
  {
    slug: "imperial-college-london",
    name: "Imperial College London",
    country: "United Kingdom",
    flag: "/flags/gb.svg",
    ranking: 6,
    international: "11,700",
    image: "/images/unis/imperial.jpg",
    subjects: ["Engineering", "Medicine", "Computing", "Business"],
    about:
      "A science, technology, and medicine powerhouse in South Kensington with a strong industry and startup pipeline.",
  },
  {
    slug: "university-of-sydney",
    name: "University of Sydney",
    country: "Australia",
    flag: "/flags/au.svg",
    ranking: 18,
    international: "32,000",
    image: "/images/unis/sydney.jpg",
    subjects: ["Architecture", "Medicine", "Business", "Arts"],
    about:
      "Australia's first university, combining sandstone heritage with a globally ranked research profile in the heart of Sydney.",
  },
];

export const destinations = [
  {
    slug: "australia",
    name: "Australia",
    flag: "/flags/au.svg",
    image: "/images/dest/australia.jpg",
    blurb:
      "Study at Group of Eight universities with strong research, lively campus life, and post-study work visas that help you launch a career after graduation in a welcoming, multicultural setting.",
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "/flags/fi.svg",
    image: "/images/dest/germany.jpg",
    blurb:
      "Access English-taught master's degrees in a safe, innovative Nordic society. Excellent tech and design schools combine with a high quality of life and modern student support systems.",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "/flags/ca.svg",
    image: "/images/dest/canada.jpg",
    blurb:
      "Benefit from co-op degrees, clear immigration pathways, and globally ranked universities in cities known for safety, diversity, and a high quality of life for international students.",
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "/flags/us.svg",
    image: "/images/dest/usa.jpg",
    blurb:
      "Choose flexible majors at world-leading research universities, with OPT career pathways and campus resources across Ivy League schools, public flagships, and specialist colleges.",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "/flags/de.svg",
    image: "/images/dest/germany.jpg",
    blurb:
      "Attend tuition-light public universities with rigorous STEM programmes and strong industry ties that open internships and post-study work opportunities across the European Union.",
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "/flags/jp.svg",
    image: "/images/dest/japan.jpg",
    blurb:
      "Join growing English-taught programmes with research strength in science and technology, plus an immersive cultural experience in one of the world's safest and most innovative countries.",
  },
];

export const serviceTabs = [
  {
    id: "admission",
    label: "Admission",
    items: [
      {
        title: "University selection",
        body: "Shortlist universities that match your academic profile, budget, and career goals across our partner network.",
      },
      {
        title: "Application",
        body: "End-to-end support with portals, deadlines, and requirements so every application is complete and on time.",
      },
      {
        title: "SOP/LOR guidance",
        body: "Structured coaching for strong statements of purpose and recommendation letters that stand out to admissions teams.",
      },
      {
        title: "Document checking",
        body: "Thorough review of transcripts, certificates, and supporting files before they reach the university.",
      },
      {
        title: "Application submission",
        body: "We handle final checks and submission so your file is filed correctly with confirmation tracking.",
      },
      {
        title: "Consultancy service",
        body: "One-to-one counselling sessions to plan your study path, timeline, and next steps with clarity.",
      },
    ],
  },
  {
    id: "scholarship",
    label: "Scholarship & Funding",
    items: [
      {
        title: "Available scholarships",
        body: "Discover merit, need-based, and country-specific awards that fit your profile and target universities.",
      },
      {
        title: "Eligibility",
        body: "Clear guidance on who qualifies, required scores, and how to strengthen your scholarship applications.",
      },
      {
        title: "Tuition fees",
        body: "Transparent fee comparisons across programmes and destinations so you can budget with confidence.",
      },
      {
        title: "Living cost",
        body: "Realistic estimates for housing, food, transport, and daily expenses in your destination city.",
      },
      {
        title: "Funding guidance",
        body: "Practical advice on education loans, sponsorships, and combining multiple funding sources.",
      },
    ],
  },
  {
    id: "visa",
    label: "Visa",
    items: [
      {
        title: "Application guidance",
        body: "Step-by-step support for student visa forms, biometrics, and embassy or VFS appointments.",
      },
      {
        title: "Document checklist",
        body: "A complete, destination-specific list of financial, academic, and identity documents to prepare.",
      },
      {
        title: "Interview preparation",
        body: "Mock interviews and coaching so you present your study plans clearly and confidently.",
      },
      {
        title: "Financial documentation",
        body: "Help organising bank statements, sponsorship letters, and proof of funds that meet visa rules.",
      },
    ],
  },
];

// Legacy flat list kept for any residual references
export const services = serviceTabs.flatMap((tab) =>
  tab.items.map((item) => ({ title: item.title, body: item.body, icon: "users" })),
);

export const stats = [
  { value: "767+", label: "Partnering Universities", tone: "gold" },
  { value: "76+", label: "Countries", tone: "blue" },
  { value: "7.6M", label: "Enrolled Students", tone: "gold" },
  { value: "76K", label: "Tutors & Courses", tone: "blue" },
];

export const testimonials = [
  {
    quote:
      "Unparalleled Student Visa Service: Delivering Expertise, Personalized Guidance, and Reliable, Timely Updates for a Seamless Process",
    name: "Gladriao Gomeza",
    label: "America-bound student",
    avatar: "/images/people/t2.jpg",
  },
  {
    quote:
      "Profound Gratitude for Exceptional Student Visa Assistance: Painless Application and an Incredible Educational Journey in Canada",
    name: "Olabira Lahardia",
    label: "Canada-bound student",
    avatar: "/images/people/t1.jpg",
  },
  {
    quote:
      "Elevating My UK Student Visa Experience: Unmatched Assistance, Dedicated Team, Comprehensive Interview Preparation",
    name: "Marana Galadare",
    label: "UK-bound student",
    avatar: "/images/people/t3.jpg",
  },
  {
    quote:
      "West Bridge made studying in Australia feel achievable. From shortlisting to the visa grant, every step was clear and supported.",
    name: "Ayesha K.",
    label: "Australia-bound student",
    avatar: "/images/people/t4.jpg",
  },
  {
    quote:
      "Their counsellors treated my goals seriously. Scholarship guidance and document checks saved me months of stress.",
    name: "Marshall Gibbs",
    label: "Germany-bound student",
    avatar: "/images/people/t5.jpg",
  },
  {
    quote:
      "I always knew the next step. Transparent timelines, patient advice, and a team that genuinely celebrated my offer letter.",
    name: "Kaleen Poland",
    label: "Finland-bound student",
    avatar: "/images/people/circle3.jpg",
  },
];

export const faqs = [
  {
    q: "1. What services does West Bridge offer?",
    a: "University shortlisting, applications, scholarships, visas, document processing, professor matching, and pre-departure support.",
  },
  {
    q: "2. Is there a fee for consultation services?",
    a: "Your first consultation is free. We only discuss paid support if you choose a full application package.",
  },
  {
    q: "3. Which countries can I study in with West Bridge's help?",
    a: "We place students in Australia, Finland, Canada, the United States, Germany, Japan, Ireland, and the Netherlands.",
  },
  {
    q: "4. Do you assist with visa processing?",
    a: "Yes. Counsellors prepare checklists, review forms, and coach you for biometric and interview appointments.",
  },
  {
    q: "5. Can I get help with scholarships?",
    a: "We map merit, need, and country-specific awards and help you write competitive personal statements.",
  },
  {
    q: "6. How long does the process take?",
    a: "Most students complete shortlisting to offer in 6–12 weeks. Visa timelines depend on the destination.",
  },
];

// Single-page site: nav items scroll to in-page sections.
export const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Universities", href: "#universities" },
  { label: "Destination", href: "#destinations" },
];
