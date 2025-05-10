
export interface Scholarship {
  id: string;
  name: string;
  organization: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  description: string;
  applicationUrl: string;
  category: ScholarshipCategory;
  country: string;
  featured?: boolean;
}

export type ScholarshipCategory = 
  | "undergraduate" 
  | "postgraduate" 
  | "research" 
  | "merit" 
  | "need-based" 
  | "international" 
  | "women" 
  | "minority" 
  | "stem" 
  | "arts" 
  | "sports";

export const scholarships: Scholarship[] = [
  {
    id: "gates-millennium",
    name: "Gates Millennium Scholars Program",
    organization: "Bill & Melinda Gates Foundation",
    amount: "Full cost of attendance",
    deadline: "January 15, 2026",
    eligibility: [
      "US citizen, permanent resident, or foreign national",
      "GPA of 3.3 or higher",
      "Demonstrated leadership abilities",
      "Demonstrated financial need",
      "Meet Federal Pell Grant eligibility criteria"
    ],
    description: "The Gates Millennium Scholars Program selects 300 students each year to receive a good-through-graduation scholarship to use at any college or university of their choice, along with personal and professional development through leadership programs.",
    applicationUrl: "https://www.gmsp.org/",
    category: "undergraduate",
    country: "USA",
    featured: true
  },
  {
    id: "fulbright",
    name: "Fulbright Foreign Student Program",
    organization: "U.S. Department of State",
    amount: "Full tuition, living stipend, airfare and health insurance",
    deadline: "Varies by country",
    eligibility: [
      "Non-US citizen",
      "Bachelor's degree or equivalent",
      "Excellent academic record",
      "English language proficiency",
      "Country-specific requirements"
    ],
    description: "The Fulbright Program offers grants to graduate students for study and research abroad. The program facilitates cultural exchange through direct interaction between individuals.",
    applicationUrl: "https://foreign.fulbrightonline.org/",
    category: "postgraduate",
    country: "International",
    featured: true
  },
  {
    id: "chevening",
    name: "Chevening Scholarship",
    organization: "UK Government",
    amount: "Full tuition, living expenses, return flights, and other allowances",
    deadline: "November 2, 2025",
    eligibility: [
      "Citizen of a Chevening-eligible country",
      "Return to home country for minimum 2 years after scholarship",
      "2+ years work experience",
      "Bachelor's degree",
      "Meet English language requirements"
    ],
    description: "Chevening is the UK government's international scholarships program aimed at developing global leaders. Funded by the Foreign, Commonwealth and Development Office and partner organizations.",
    applicationUrl: "https://www.chevening.org/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "commonwealth",
    name: "Commonwealth Scholarship",
    organization: "Commonwealth Scholarship Commission",
    amount: "Tuition fees, living allowance, airfare, and other allowances",
    deadline: "October 18, 2025",
    eligibility: [
      "Citizen of a Commonwealth country",
      "Permanent resident in a Commonwealth country",
      "Available to return to home country after scholarship",
      "Hold a first degree of at least upper second class (2:1) honors standard"
    ],
    description: "Commonwealth Scholarships enable talented and motivated individuals to gain the knowledge and skills required for sustainable development, and are offered to citizens from low and middle income Commonwealth countries.",
    applicationUrl: "https://cscuk.fcdo.gov.uk/scholarships/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "erasmus-mundus",
    name: "Erasmus Mundus Joint Master Degree Scholarships",
    organization: "European Commission",
    amount: "€1,400 per month plus tuition and travel",
    deadline: "Varies by program",
    eligibility: [
      "Bachelor degree or equivalent",
      "Must not have resided in the program country for more than 12 months in the last 5 years",
      "Language proficiency",
      "Program-specific requirements"
    ],
    description: "Erasmus Mundus Joint Master Degrees are prestigious, integrated, international study programs delivered by a consortium of higher education institutions that award full degree scholarships to the best student candidates worldwide.",
    applicationUrl: "https://erasmus-plus.ec.europa.eu/",
    category: "postgraduate",
    country: "Europe",
    featured: false
  },
  {
    id: "daad",
    name: "DAAD Scholarships",
    organization: "German Academic Exchange Service",
    amount: "€850-1,200 monthly, plus additional allowances",
    deadline: "Varies by program",
    eligibility: [
      "Bachelor's degree (for Master's scholarships)",
      "Master's degree (for PhD scholarships)",
      "Excellent academic record",
      "Language proficiency in German or English depending on program",
      "Maximum age depends on specific program"
    ],
    description: "The German Academic Exchange Service (DAAD) offers scholarships for international students to study in Germany at various academic levels and in various fields.",
    applicationUrl: "https://www.daad.de/en/",
    category: "international",
    country: "Germany",
    featured: false
  },
  {
    id: "rhodes",
    name: "Rhodes Scholarship",
    organization: "Rhodes Trust",
    amount: "Full tuition and stipend for Oxford University",
    deadline: "Varies by country, typically August-October",
    eligibility: [
      "Citizen of an eligible Rhodes constituency",
      "Age 19-25",
      "Bachelor's degree with high academic achievement",
      "Demonstrated leadership potential",
      "Commitment to service"
    ],
    description: "The Rhodes Scholarship is the oldest and perhaps most prestigious international scholarship program, enabling outstanding young people from around the world to study at the University of Oxford.",
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/",
    category: "postgraduate",
    country: "UK",
    featured: true
  },
  {
    id: "knight-hennessy",
    name: "Knight-Hennessy Scholars",
    organization: "Stanford University",
    amount: "Full tuition, stipend, and travel for Stanford graduate programs",
    deadline: "October 12, 2025",
    eligibility: [
      "Applying to or enrolled in a Stanford graduate program",
      "Bachelor's degree in 2020 or later for 2026 cohort",
      "Demonstrated independence of thought, leadership, and civic mindset"
    ],
    description: "The Knight-Hennessy Scholars program cultivates a diverse, multidisciplinary community of emerging leaders from around the world and guides them to collaborate, innovate, and communicate as they prepare to address the complex challenges facing society.",
    applicationUrl: "https://knight-hennessy.stanford.edu/",
    category: "postgraduate",
    country: "USA",
    featured: false
  },
  {
    id: "aga-khan",
    name: "Aga Khan Foundation International Scholarship",
    organization: "Aga Khan Foundation",
    amount: "50-100% of costs based on need",
    deadline: "March 31, 2026",
    eligibility: [
      "Citizen of an eligible developing country",
      "Excellent academic record",
      "Admitted to a highly reputable university",
      "Demonstrated financial need",
      "Commitment to development of home country"
    ],
    description: "The Aga Khan Foundation provides scholarships for postgraduate studies to outstanding students from developing countries who have no other means of financing their studies, with the aim of developing effective scholars and leaders.",
    applicationUrl: "https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme",
    category: "postgraduate",
    country: "International",
    featured: false
  },
  {
    id: "schwarzman",
    name: "Schwarzman Scholars",
    organization: "Tsinghua University",
    amount: "Full tuition, room and board, travel, stipend, and more",
    deadline: "September 21, 2025",
    eligibility: [
      "Bachelor's degree or equivalent",
      "Age 18-28",
      "English language proficiency",
      "Demonstrated leadership qualities",
      "Academic excellence"
    ],
    description: "Schwarzman Scholars is a highly selective, one-year master's program at Tsinghua University in Beijing designed to prepare the next generation of global leaders for the challenges of the future.",
    applicationUrl: "https://www.schwarzmanscholars.org/",
    category: "postgraduate",
    country: "China",
    featured: false
  },
  {
    id: "rotary",
    name: "Rotary Peace Fellowship",
    organization: "Rotary Foundation",
    amount: "Full tuition and expenses, including travel",
    deadline: "May 15, 2026",
    eligibility: [
      "Bachelor's degree",
      "3+ years relevant work experience",
      "Proficiency in English, second language recommended",
      "Demonstrated commitment to peace and international understanding"
    ],
    description: "The Rotary Peace Fellowship is a fully funded master's degree or professional development certificate program at premier universities around the world for professionals committed to promoting peace and cooperation.",
    applicationUrl: "https://www.rotary.org/en/our-programs/peace-fellowships",
    category: "postgraduate",
    country: "International",
    featured: false
  },
  {
    id: "joint-japan-world-bank",
    name: "Joint Japan/World Bank Graduate Scholarship Program",
    organization: "World Bank",
    amount: "Full tuition, monthly living stipend, travel expenses, health insurance",
    deadline: "April 30, 2026",
    eligibility: [
      "Citizen of a World Bank member developing country",
      "Bachelor's degree",
      "2+ years of recent development-related work experience",
      "Currently employed in development-related work",
      "Under 45 years of age"
    ],
    description: "The program provides scholarships for graduate studies to individuals from developing countries to help build capacity in their home countries in areas of development, including economics, health, education, and agriculture.",
    applicationUrl: "https://www.worldbank.org/en/programs/scholarships",
    category: "postgraduate",
    country: "International",
    featured: false
  },
  {
    id: "vanier",
    name: "Vanier Canada Graduate Scholarships",
    organization: "Government of Canada",
    amount: "CAD $50,000 per year for three years",
    deadline: "November 2, 2025",
    eligibility: [
      "Pursuing doctoral studies at a Canadian institution",
      "Canadian citizen, permanent resident, or foreign citizen",
      "Outstanding academic achievement (min. 80% average)",
      "Demonstrated leadership skills",
      "Research potential"
    ],
    description: "The Vanier CGS program aims to attract and retain world-class doctoral students and establish Canada as a global center of excellence in research and higher learning.",
    applicationUrl: "https://vanier.gc.ca/en/home-accueil.html",
    category: "research",
    country: "Canada",
    featured: false
  },
  {
    id: "endeavour",
    name: "Endeavour Leadership Program",
    organization: "Australian Government",
    amount: "Tuition, travel, establishment allowance, monthly stipend, health insurance",
    deadline: "October 31, 2025",
    eligibility: [
      "International student from eligible countries",
      "Excellent academic record",
      "Accepted to an Australian educational institution",
      "Not currently receiving an Australian Government scholarship"
    ],
    description: "The Endeavour Leadership Program is the Australian Government's competitive, merit-based scholarship program providing opportunities for Australians to undertake study, research or professional development overseas and for overseas citizens to do the same in Australia.",
    applicationUrl: "https://www.education.gov.au/",
    category: "international",
    country: "Australia",
    featured: false
  },
  {
    id: "clarendon",
    name: "Clarendon Fund Scholarships",
    organization: "University of Oxford",
    amount: "Full tuition and college fees plus annual grant for living expenses",
    deadline: "January deadline of the Oxford course",
    eligibility: [
      "All graduate applicants to Oxford, regardless of nationality",
      "Academic excellence",
      "Competition is based solely on academic merit and research potential"
    ],
    description: "The Clarendon Fund is Oxford University's flagship scholarship scheme, offering around 140 new scholarships each year to academically excellent graduate students from all around the world.",
    applicationUrl: "https://www.ox.ac.uk/clarendon",
    category: "postgraduate",
    country: "UK",
    featured: false
  },
  {
    id: "new-zealand",
    name: "New Zealand International Doctoral Research Scholarships",
    organization: "New Zealand Government",
    amount: "Tuition fees, plus NZ$28,500 annual stipend and health insurance",
    deadline: "July 15, 2026",
    eligibility: [
      "International students (not from New Zealand or Australia)",
      "Excellent academic record",
      "Admission to a PhD program at a New Zealand university",
      "Meet English language requirements"
    ],
    description: "The New Zealand International Doctoral Research Scholarships provide full financial support for international students to pursue PhD study in New Zealand, fostering links with international research institutes and markets.",
    applicationUrl: "https://www.education.govt.nz/",
    category: "research",
    country: "New Zealand",
    featured: false
  },
  {
    id: "make-our-planet-great",
    name: "Make Our Planet Great Again Scholarships",
    organization: "French Government",
    amount: "€1,700 per month plus travel and health insurance",
    deadline: "March 30, 2026",
    eligibility: [
      "Non-French researchers and students",
      "Research or studies in climate change, earth system or energy transition",
      "Master's or PhD level",
      "Excellent academic background"
    ],
    description: "The 'Make Our Planet Great Again' initiative invites researchers, teachers, and students to France to conduct research on combating climate change and preserving the environment.",
    applicationUrl: "https://www.campusfrance.org/en/make-our-planet-great-again-en",
    category: "research",
    country: "France",
    featured: false
  },
  {
    id: "charpak",
    name: "Charpak Scholarship Program",
    organization: "French Embassy in India",
    amount: "€700 per month, plus tuition waiver and other benefits",
    deadline: "April 15, 2026",
    eligibility: [
      "Indian national residing in India",
      "Between 18 and 30 years old",
      "Currently enrolled in an Indian institution",
      "French language proficiency (for some programs)",
      "Accepted by a French institution"
    ],
    description: "The Charpak Scholarship Program facilitates the exchange of students between India and France, offering financial support to Indian students pursuing Master's degrees, research internships, or exchange programs in France.",
    applicationUrl: "https://www.inde.campusfrance.org/charpak-scholarship-program",
    category: "international",
    country: "France",
    featured: false
  },
  {
    id: "great-scholarships",
    name: "GREAT Scholarships",
    organization: "British Council",
    amount: "£10,000 towards tuition fees",
    deadline: "Varies by institution",
    eligibility: [
      "Citizen of eligible countries including India, China, Turkey, Malaysia",
      "Undergraduate or postgraduate student",
      "Accepted to study at a UK university participating in the GREAT Scholarships"
    ],
    description: "The GREAT Scholarships program offers scholarships to students from selected countries who want to study at UK universities across various subjects including business, engineering, law, art and design, and more.",
    applicationUrl: "https://study-uk.britishcouncil.org/scholarships/great-scholarships",
    category: "international",
    country: "UK",
    featured: false
  },
  {
    id: "orange-tulip",
    name: "Orange Tulip Scholarship",
    organization: "Nuffic Neso India",
    amount: "Varies (10-100% tuition fee waiver)",
    deadline: "April 25, 2026",
    eligibility: [
      "Indian nationals",
      "Admitted to participating Dutch higher education institutions",
      "Meet specific requirements set by the offering institution"
    ],
    description: "The Orange Tulip Scholarship program offers scholarships specifically for Indian students who wish to pursue studies in the Netherlands, funded by Dutch higher education institutions and companies.",
    applicationUrl: "https://www.nesoindia.org/scholarships/orange-tulip-scholarship",
    category: "international",
    country: "Netherlands",
    featured: false
  },
  {
    id: "mahatma-gandhi",
    name: "Mahatma Gandhi Scholarships",
    organization: "Indian Embassy, various countries",
    amount: "Monthly stipend plus tuition fees",
    deadline: "July 31, 2026",
    eligibility: [
      "Citizens of countries with Indian diplomatic missions",
      "Excellent academic record",
      "Financial need",
      "Recommendation from local educational institution"
    ],
    description: "Named after Mahatma Gandhi, these scholarships are offered by Indian embassies in various countries to promote cultural understanding and educational exchange between India and other nations.",
    applicationUrl: "https://www.indianembassy.org.in/",
    category: "international",
    country: "India",
    featured: false
  },
  {
    id: "cern-summer",
    name: "CERN Summer Student Programme",
    organization: "European Organization for Nuclear Research",
    amount: "Living allowance, travel, health insurance",
    deadline: "January 31, 2026",
    eligibility: [
      "Undergraduate (3+ years) or graduate student in physics, engineering, computer science",
      "Member or non-Member State nationality",
      "Return to academic institution after the program",
      "Good knowledge of English"
    ],
    description: "The CERN Summer Student Program offers undergraduate and graduate students the opportunity to join in the day-to-day work of research teams in physics, computing, engineering, and mathematics at one of the world's leading research institutions.",
    applicationUrl: "https://careers.cern/summer",
    category: "stem",
    country: "Switzerland",
    featured: false
  }
];

export const getScholarshipsByCategory = (category: ScholarshipCategory): Scholarship[] => {
  return scholarships.filter(scholarship => scholarship.category === category);
};

export const getFeaturedScholarships = (): Scholarship[] => {
  return scholarships.filter(scholarship => scholarship.featured === true);
};

export const getScholarshipById = (id: string): Scholarship | undefined => {
  return scholarships.find(scholarship => scholarship.id === id);
};

