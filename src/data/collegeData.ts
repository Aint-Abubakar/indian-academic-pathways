export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

export interface College {
  id: string;
  stateId: string;
  name: string;
  type: string;
  description: string;
  rating: number;
  imageUrl: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
  fees: {
    tuition: { min: number; max: number };
    hostel: { min: number; max: number };
    other: { min: number; max: number };
  };
  placement: {
    percentage: number;
    topCompanies: string[];
    averagePackage: string;
    topRecruiters: string[];
    avgSalary: number;
  };
  ranking: {
    nirf: number;
    outlook: number;
    theWeek: number;
  };
  courses: string[];
  facilities: string[];
  admissionCriteria: string[];
  researchAreas: string[];
  entranceExams: string[];
  admissionDetails: {
    eligibility: string;
    process: string;
    deadlines: string;
  };
  scholarships: {
    name: string;
    amount: string;
    eligibility: string;
  }[];
}

// Re-export FilterOptions interface from SearchFilters
export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

// Complete data for all Indian states and union territories
export const states: State[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 7
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 12
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    collegeCount: 5
  },
  {
    id: "karnataka",
    name: "Karnataka",
    collegeCount: 4
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    collegeCount: 6
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    collegeCount: 3
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    collegeCount: 4
  },
  {
    id: "telangana",
    name: "Telangana",
    collegeCount: 5
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    collegeCount: 3
  },
  {
    id: "gujarat",
    name: "Gujarat",
    collegeCount: 4
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    collegeCount: 8
  },
  {
    id: "punjab",
    name: "Punjab",
    collegeCount: 6
  },
  {
    id: "haryana",
    name: "Haryana",
    collegeCount: 5
  },
  {
    id: "kerala",
    name: "Kerala",
    collegeCount: 7
  },
  {
    id: "odisha",
    name: "Odisha",
    collegeCount: 4
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    collegeCount: 3
  },
  {
    id: "assam",
    name: "Assam",
    collegeCount: 4
  },
  {
    id: "bihar",
    name: "Bihar",
    collegeCount: 5
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    collegeCount: 3
  },
  {
    id: "goa",
    name: "Goa",
    collegeCount: 2
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    collegeCount: 4
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    collegeCount: 3
  },
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    collegeCount: 3
  },
  {
    id: "manipur",
    name: "Manipur",
    collegeCount: 2
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    collegeCount: 2
  },
  {
    id: "mizoram",
    name: "Mizoram",
    collegeCount: 1
  },
  {
    id: "nagaland",
    name: "Nagaland",
    collegeCount: 2
  },
  {
    id: "sikkim",
    name: "Sikkim",
    collegeCount: 1
  },
  {
    id: "tripura",
    name: "Tripura",
    collegeCount: 2
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    collegeCount: 1
  },
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    collegeCount: 1
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    collegeCount: 3
  },
  {
    id: "dadra-nagar-haveli",
    name: "Dadra & Nagar Haveli and Daman & Diu",
    collegeCount: 1
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    collegeCount: 1
  },
  {
    id: "puducherry",
    name: "Puducherry",
    collegeCount: 3
  },
  {
    id: "ladakh",
    name: "Ladakh",
    collegeCount: 1
  }
];

export const colleges: College[] = [
  {
    id: "iit-bombay",
    stateId: "maharashtra",
    name: "Indian Institute of Technology Bombay",
    type: "Government",
    description: "A premier engineering institute known for its research and academic excellence.",
    rating: 4.8,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0b/IIT_Bombay_Logo.svg",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Powai, Mumbai, Maharashtra 400076"
    },
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 20000, max: 30000 }
    },
    placement: {
      percentage: 92,
      topCompanies: ["Google", "Microsoft", "Samsung", "Intel", "Goldman Sachs"],
      averagePackage: "22 LPA",
      topRecruiters: ["Google", "Microsoft", "Samsung", "Intel", "Goldman Sachs"],
      avgSalary: 2200000
    },
    ranking: {
      nirf: 3,
      outlook: 2,
      theWeek: 4
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Civil Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Artificial Intelligence", "Renewable Energy", "Nanotechnology", "Biotechnology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "iit-madras",
    stateId: "tamil-nadu",
    name: "Indian Institute of Technology Madras",
    type: "Government",
    description: "An institute of national importance for engineering and technology education.",
    rating: 4.7,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Chennai, Tamil Nadu 600036"
    },
    fees: {
      tuition: { min: 210000, max: 240000 },
      hostel: { min: 65000, max: 85000 },
      other: { min: 18000, max: 28000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Microsoft", "Google", "Amazon", "Flipkart", "Tata Consultancy Services"],
      averagePackage: "21 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Flipkart", "Tata Consultancy Services"],
      avgSalary: 2100000
    },
    ranking: {
      nirf: 1,
      outlook: 1,
      theWeek: 1
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Aerospace Engineering", "Civil Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Robotics", "Data Science", "Sustainable Energy", "Biomedical Engineering"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Aditya Birla Scholarship",
        amount: "Rs. 1,50,000 per year",
        eligibility: "Based on academic excellence"
      }
    ]
  },
  {
    id: "iisc-bangalore",
    stateId: "karnataka",
    name: "Indian Institute of Science Bangalore",
    type: "Government",
    description: "A leading institute for advanced scientific and technological research and education.",
    rating: 4.9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/IISc_Bangalore_Logo.svg/1200px-IISc_Bangalore_Logo.svg.png",
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Bangalore, Karnataka 560012"
    },
    fees: {
      tuition: { min: 30000, max: 50000 },
      hostel: { min: 40000, max: 60000 },
      other: { min: 10000, max: 20000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Google", "Microsoft", "Qualcomm", "Texas Instruments", "DRDO"],
      averagePackage: "25 LPA",
      topRecruiters: ["Google", "Microsoft", "Qualcomm", "Texas Instruments", "DRDO"],
      avgSalary: 2500000
    },
    ranking: {
      nirf: 2,
      outlook: 3,
      theWeek: 2
    },
    courses: ["Ph.D.", "M.Tech", "M.Sc", "Integrated Ph.D."],
    facilities: ["Central Library", "Advanced Labs", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["GATE", "JAM", "IISc Entrance Exam"],
    researchAreas: ["Material Science", "Astrophysics", "Genetic Engineering", "High Energy Physics"],
    entranceExams: ["GATE", "JAM", "IISc Entrance Exam"],
    admissionDetails: {
      eligibility: "Based on GATE/JAM scores or IISc entrance exam.",
      process: "Online application followed by entrance exam or interview.",
      deadlines: "Usually in April."
    },
    scholarships: [
      {
        name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
        amount: "Rs. 5,000 per month",
        eligibility: "For students pursuing basic sciences"
      },
      {
        name: "INSPIRE Scholarship",
        amount: "Rs. 80,000 per year",
        eligibility: "For students pursuing natural sciences"
      }
    ]
  },
  {
    id: "iit-delhi",
    stateId: "delhi",
    name: "Indian Institute of Technology Delhi",
    type: "Government",
    description: "A leading technology institute known for its engineering programs and research.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/IIT_Delhi_Logo.svg/1200px-IIT_Delhi_Logo.svg.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016"
    },
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 88,
      topCompanies: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      averagePackage: "20 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      avgSalary: 2000000
    },
    ranking: {
      nirf: 4,
      outlook: 4,
      theWeek: 5
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Artificial Intelligence", "Renewable Energy", "Nanotechnology", "Biotechnology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "jamia-millia",
    stateId: "delhi",
    name: "Jamia Millia Islamia",
    type: "Government",
    description: "A Central University offering diverse programs with a focus on research and inclusive education.",
    rating: 4.2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/Jamia_Millia_Islamia_Logo.svg",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Jamia Nagar, New Delhi, Delhi 110025"
    },
    fees: {
      tuition: { min: 10000, max: 40000 },
      hostel: { min: 15000, max: 35000 },
      other: { min: 5000, max: 12000 }
    },
    placement: {
      percentage: 70,
      topCompanies: ["TCS", "Wipro", "IBM", "Capgemini", "Cognizant"],
      averagePackage: "6.5 LPA",
      topRecruiters: ["TCS", "Wipro", "IBM", "Capgemini", "Cognizant"],
      avgSalary: 650000
    },
    ranking: {
      nirf: 16,
      outlook: 15,
      theWeek: 18
    },
    courses: ["Engineering", "Law", "Mass Communication", "Fine Arts", "Education", "Social Sciences", "Commerce"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["Entrance Exam", "Merit-based Selection"],
    researchAreas: ["Media Studies", "Social Sciences", "Engineering", "Islamic Studies", "Environmental Science"],
    entranceExams: ["JMI Entrance Test", "CUET"],
    admissionDetails: {
      eligibility: "Based on entrance exam scores and academic records.",
      process: "Online applications followed by entrance exams and merit-based selection.",
      deadlines: "Usually between March and May."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Varies",
        eligibility: "Based on academic performance"
      },
      {
        name: "Maulana Azad National Fellowship",
        amount: "Rs. 31,000 per month",
        eligibility: "For minority students pursuing research"
      }
    ]
  },
  {
    id: "jnu-delhi",
    stateId: "delhi",
    name: "Jawaharlal Nehru University",
    type: "Government",
    description: "A premier research university known for its academic excellence in social sciences, international relations and languages.",
    rating: 4.7,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b3/Jawaharlal_Nehru_University%2C_New_Delhi_logo.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "New Mehrauli Road, New Delhi, Delhi 110067"
    },
    fees: {
      tuition: { min: 5000, max: 35000 },
      hostel: { min: 10000, max: 30000 },
      other: { min: 3000, max: 10000 }
    },
    placement: {
      percentage: 65,
      topCompanies: ["Think Tanks", "United Nations", "Government Organizations", "Research Institutes", "NGOs"],
      averagePackage: "7 LPA",
      topRecruiters: ["United Nations", "Ministry of External Affairs", "Research Institutes", "Think Tanks", "Media Houses"],
      avgSalary: 700000
    },
    ranking: {
      nirf: 8,
      outlook: 7,
      theWeek: 6
    },
    courses: ["International Relations", "Languages", "Social Sciences", "Environmental Studies", "Life Sciences", "Computer Science", "Arts & Aesthetics"],
    facilities: ["Central Library", "Advanced Scientific Labs", "Sports Complex", "Conference Centers", "Health Center", "Cultural Centers"],
    admissionCriteria: ["JNUEE (JNU Entrance Examination)", "CUET", "Interview"],
    researchAreas: ["International Relations", "Social Systems", "Language Studies", "Environmental Sciences", "Biotechnology"],
    entranceExams: ["JNUEE", "CUET"],
    admissionDetails: {
      eligibility: "Based on entrance exam scores and interview performance.",
      process: "Entrance exam followed by interview for selected candidates.",
      deadlines: "Applications usually open in March."
    },
    scholarships: [
      {
        name: "JNU Merit Scholarship",
        amount: "Rs. 5,000 per month",
        eligibility: "Based on academic performance"
      },
      {
        name: "UGC Non-NET Fellowship",
        amount: "Rs. 8,000 per month",
        eligibility: "For research scholars"
      }
    ]
  },
  {
    id: "srcc-delhi",
    stateId: "delhi",
    name: "Shri Ram College of Commerce",
    type: "Government",
    description: "One of India's premier institutions for commerce and economics education, known for its academic rigor and placement record.",
    rating: 4.8,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/SRCC_logo.png",
    location: {
      city: "Delhi",
      state: "Delhi",
      address: "Maurice Nagar, Delhi 110007"
    },
    fees: {
      tuition: { min: 20000, max: 50000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Bain & Company", "McKinsey", "Boston Consulting Group", "PwC", "Deloitte"],
      averagePackage: "16 LPA",
      topRecruiters: ["Bain & Company", "McKinsey", "Boston Consulting Group", "PwC", "Deloitte"],
      avgSalary: 1600000
    },
    ranking: {
      nirf: 5,
      outlook: 4,
      theWeek: 3
    },
    courses: ["B.Com (Hons)", "B.A. Economics (Hons)", "M.Com", "Global Business Operations", "Business Analytics"],
    facilities: ["Library", "Sports Complex", "Computer Labs", "Seminar Halls", "Auditorium", "Cafeteria"],
    admissionCriteria: ["Cut-off Marks", "Merit-based Selection"],
    researchAreas: ["Finance", "Economics", "Commerce", "Business Studies", "Statistics"],
    entranceExams: ["DU Entrance Exam", "CUET"],
    admissionDetails: {
      eligibility: "Based on Class 12 marks as per Delhi University cut-off.",
      process: "Merit-based admission through DU's centralized admission process.",
      deadlines: "Usually aligns with Delhi University's admission schedule."
    },
    scholarships: [
      {
        name: "SRCC Need-based Scholarship",
        amount: "Varies",
        eligibility: "For economically disadvantaged students with good academic records"
      },
      {
        name: "Merit Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "For students with outstanding academic performance"
      }
    ]
  },
  {
    id: "nift-delhi",
    stateId: "delhi",
    name: "National Institute of Fashion Technology",
    type: "Government",
    description: "India's premier fashion institute offering programs in design, management, and technology for the fashion industry.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/NIFT_logo.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016"
    },
    fees: {
      tuition: { min: 160000, max: 280000 },
      hostel: { min: 70000, max: 120000 },
      other: { min: 25000, max: 50000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Louis Vuitton", "Zara", "Tommy Hilfiger", "Aditya Birla Fashion", "Tata CLiQ Luxury"],
      averagePackage: "8 LPA",
      topRecruiters: ["Louis Vuitton", "Zara", "Tommy Hilfiger", "Aditya Birla Fashion", "Tata CLiQ Luxury"],
      avgSalary: 800000
    },
    ranking: {
      nirf: 9,
      outlook: 8,
      theWeek: 7
    },
    courses: ["Fashion Design", "Accessory Design", "Textile Design", "Fashion Communication", "Fashion Management", "Fashion Technology"],
    facilities: ["Design Studios", "Resource Center", "Computer Labs", "Textile Labs", "Amphitheatre", "Exhibition Spaces"],
    admissionCriteria: ["NIFT Entrance Exam", "Situation Test", "Group Discussion", "Interview"],
    researchAreas: ["Sustainable Fashion", "Traditional Textiles", "Fashion Forecasting", "Apparel Technology", "Luxury Brand Management"],
    entranceExams: ["NIFT Entrance Test"],
    admissionDetails: {
      eligibility: "Class 12 pass for UG programs. Bachelor's degree for PG programs.",
      process: "Entrance exam followed by situation test/group discussion and personal interview.",
      deadlines: "Applications open in December and close in January."
    },
    scholarships: [
      {
        name: "NIFT Merit Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top rankers in each program"
      },
      {
        name: "Means-based Financial Assistance",
        amount: "Varies",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "aiims-delhi",
    stateId: "delhi",
    name: "All India Institute of Medical Sciences",
    type: "Government",
    description: "India's leading public medical institution offering world-class education, research, and healthcare services.",
    rating: 4.9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/57/All_India_Institute_of_Medical_Sciences_Logo.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Ansari Nagar East, New Delhi, Delhi 110029"
    },
    fees: {
      tuition: { min: 6000, max: 15000 },
      hostel: { min: 10000, max: 30000 },
      other: { min: 5000, max: 20000 }
    },
    placement: {
      percentage: 100,
      topCompanies: ["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Medanta", "Wockhardt Hospitals"],
      averagePackage: "12 LPA",
      topRecruiters: ["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Medanta", "Wockhardt Hospitals"],
      avgSalary: 1200000
    },
    ranking: {
      nirf: 1,
      outlook: 1,
      theWeek: 1
    },
    courses: ["MBBS", "MD", "MS", "M.Ch", "DM", "Ph.D", "B.Sc Nursing", "M.Sc Nursing"],
    facilities: ["Hospital", "Research Laboratories", "Library", "Simulation Labs", "Hostels", "Sports Complex", "Auditorium"],
    admissionCriteria: ["NEET-UG", "NEET-PG", "INI-CET"],
    researchAreas: ["Medical Sciences", "Public Health", "Biotechnology", "Genomics", "Healthcare Management"],
    entranceExams: ["NEET-UG", "NEET-PG", "INI-CET", "AIIMS Nursing"],
    admissionDetails: {
      eligibility: "NEET-UG for MBBS, NEET-PG for postgraduate medical courses.",
      process: "Entrance exam followed by counselling based on merit.",
      deadlines: "As per national medical entrance exam schedules."
    },
    scholarships: [
      {
        name: "Ministry of Health Scholarship",
        amount: "Varies",
        eligibility: "Based on merit and need"
      },
      {
        name: "Research Fellowship",
        amount: "Rs. 31,000 - 54,000 per month",
        eligibility: "For students pursuing research programs"
      }
    ]
  },
  {
    id: "iit-kanpur",
    stateId: "uttar-pradesh",
    name: "Indian Institute of Technology Kanpur",
    type: "Government",
    description: "A premier engineering institute known for its research and academic excellence.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png",
    location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      address: "Kanpur, Uttar Pradesh 208016"
    },
    fees: {
      tuition: { min: 210000, max: 240000 },
      hostel: { min: 65000, max: 85000 },
      other: { min: 18000, max: 28000 }
    },
    placement: {
      percentage: 87,
      topCompanies: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      averagePackage: "19 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      avgSalary: 1900000
    },
    ranking: {
      nirf: 6,
      outlook: 5,
      theWeek: 6
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Aerospace Engineering", "Civil Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Robotics", "Data Science", "Sustainable Energy", "Biomedical Engineering"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Aditya Birla Scholarship",
        amount: "Rs. 1,50,000 per year",
        eligibility: "Based on academic excellence"
      }
    ]
  },
  {
    id: "iit-varanasi",
    stateId: "uttar-pradesh",
    name: "Indian Institute of Technology Varanasi",
    type: "Government",
    description: "An institute of national importance for engineering and technology education.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/IIT_BHU_Logo.svg/1200px-IIT_BHU_Logo.svg.png",
    location: {
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "Varanasi, Uttar Pradesh 221005"
    },
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Microsoft", "Google", "Amazon", "Flipkart", "Tata Consultancy Services"],
      averagePackage: "18 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Flipkart", "Tata Consultancy Services"],
      avgSalary: 1800000
    },
    ranking: {
      nirf: 7,
      outlook: 6,
      theWeek: 7
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Artificial Intelligence", "Renewable Energy", "Nanotechnology", "Biotechnology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "iit-roorkee",
    stateId: "uttarakhand",
    name: "Indian Institute of Technology Roorkee",
    type: "Government",
    description: "A leading technology institute known for its engineering programs and research.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/IIT_Roorkee_Logo.svg/1200px-IIT_Roorkee_Logo.svg.png",
    location: {
      city: "Roorkee",
      state: "Uttarakhand",
      address: "Roorkee, Uttarakhand 247667"
    },
    fees: {
      tuition: { min: 190000, max: 220000 },
      hostel: { min: 55000, max: 75000 },
      other: { min: 14000, max: 24000 }
    },
    placement: {
      percentage: 83,
      topCompanies: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      averagePackage: "17 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      avgSalary: 1700000
    },
    ranking: {
      nirf: 8,
      outlook: 7,
      theWeek: 8
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Artificial Intelligence", "Renewable Energy", "Nanotechnology", "Biotechnology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "iit-kharagpur",
    stateId: "west-bengal",
    name: "Indian Institute of Technology Kharagpur",
    type: "Government",
    description: "A premier engineering institute known for its research and academic excellence.",
    rating: 4.7,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png",
    location: {
      city: "Kharagpur",
      state: "West Bengal",
      address: "Kharagpur, West Bengal 721302"
    },
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 20000, max: 30000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      averagePackage: "20 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Tata Consultancy Services"],
      avgSalary: 2000000
    },
    ranking: {
      nirf: 5,
      outlook: 4,
      theWeek: 3
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Artificial Intelligence", "Renewable Energy", "Nanotechnology", "Biotechnology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "ggsipu-delhi",
    stateId: "delhi",
    name: "Guru Gobind Singh Indraprastha University",
    type: "Government",
    description: "A state university known for its diverse programs in engineering, medicine, law, and management.",
    rating: 4.1,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/39/GGSIU_logo.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Sector 16C, Dwarka, New Delhi, Delhi 110078"
    },
    fees: {
      tuition: { min: 50000, max: 150000 },
      hostel: { min: 40000, max: 80000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 75,
      topCompanies: ["Infosys", "Wipro", "TCS", "Tech Mahindra", "Cognizant"],
      averagePackage: "6 LPA",
      topRecruiters: ["Infosys", "Wipro", "TCS", "Tech Mahindra", "Cognizant"],
      avgSalary: 600000
    },
    ranking: {
      nirf: 80,
      outlook: 65,
      theWeek: 70
    },
    courses: ["Engineering", "Medicine", "Law", "Management", "Computer Applications", "Education", "Humanities"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center", "Food Court"],
    admissionCriteria: ["Common Entrance Test", "National Level Exams"],
    researchAreas: ["Technology", "Environmental Studies", "Management", "Medical Sciences", "Law"],
    entranceExams: ["IPU CET", "CLAT", "NEET", "CAT"],
    admissionDetails: {
      eligibility: "Based on entrance exam scores and academic records.",
      process: "Online application followed by entrance exam and counseling.",
      deadlines: "Applications usually open in March."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Based on academic performance"
      },
      {
        name: "Need-based Financial Assistance",
        amount: "Varies",
        eligibility: "Based on family income"
      }
    ]
  },
  {
    id: "aud-delhi",
    stateId: "delhi",
    name: "Ambedkar University Delhi",
    type: "Government",
    description: "A state university focused on humanities, social sciences, and liberal arts education.",
    rating: 4.0,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/96/Ambedkar_University_Delhi_logo.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Lothian Road, Kashmere Gate, Delhi 110006"
    },
    fees: {
      tuition: { min: 20000, max: 80000 },
      hostel: { min: 30000, max: 60000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 60,
      topCompanies: ["NGOs", "Research Organizations", "Education Institutes", "Government Agencies", "Media Houses"],
      averagePackage: "5 LPA",
      topRecruiters: ["NGOs", "Research Organizations", "Education Institutes", "Government Agencies", "Media Houses"],
      avgSalary: 500000
    },
    ranking: {
      nirf: 85,
      outlook: 75,
      theWeek: 78
    },
    courses: ["Humanities", "Social Sciences", "Liberal Arts", "Business Economics", "Law", "Education", "Psychology"],
    facilities: ["Library", "Computer Labs", "Seminar Halls", "Cafeteria", "Hostel", "Cultural Spaces"],
    admissionCriteria: ["Entrance Exam", "Merit-based Selection"],
    researchAreas: ["Social Sciences", "Urban Studies", "Gender Studies", "Development", "Education"],
    entranceExams: ["AUD Entrance Test"],
    admissionDetails: {
      eligibility: "Based on entrance exam scores and academic records.",
      process: "Online application followed by entrance exam and interview.",
      deadlines: "Applications usually open in April-May."
    },
    scholarships: [
      {
        name: "AUD Merit Scholarship",
        amount: "Full fee waiver",
        eligibility: "For exceptional academic performance"
      },
      {
        name: "Fee Waiver",
        amount: "Partial to full fee waiver",
        eligibility: "Based on family income and socio-economic background"
      }
    ]
  },
  {
    id: "iari-delhi",
    stateId: "delhi",
    name: "Indian Agricultural Research Institute",
    type: "Government",
    description: "A premier research institution dedicated to agricultural sciences and education in India.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d8/Indian_Agricultural_Research_Institute_Logo.png",
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Pusa Road, New Delhi, Delhi 110012"
    },
    fees: {
      tuition: { min: 10000, max: 40000 },
      hostel: { min: 15000, max: 30000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Agricultural Companies", "Research Labs", "Government Departments", "International Organizations", "Educational Institutions"],
      averagePackage: "7 LPA",
      topRecruiters: ["ICAR", "Bayer", "Syngenta", "UPL", "Corteva Agriscience"],
      avgSalary: 700000
    },
    ranking: {
      nirf: 15,
      outlook: 12,
      theWeek: 10
    },
    courses: ["Agricultural Sciences", "Plant Biotechnology", "Soil Science", "Agronomy", "Plant Pathology", "Entomology", "Genetics"],
    facilities: ["Advanced Laboratories", "Research Farms", "Library", "Hostel", "Sports Complex", "Conference Halls", "Field Stations"],
    admissionCriteria: ["ICAR AIEEA", "Interview", "Academic Records"],
    researchAreas: ["Crop Improvement", "Climate Resilient Agriculture", "Sustainable Farming", "Plant Protection", "Agricultural Biotechnology"],
    entranceExams: ["ICAR AIEEA", "ICAR NET"],
    admissionDetails: {
      eligibility: "Based on ICAR entrance exams and academic qualifications.",
      process: "Entrance exam followed by counseling and interview.",
      deadlines: "As per ICAR notification, usually in April-May."
    },
    scholarships: [
      {
        name: "Junior/Senior Research Fellowship",
        amount: "Rs. 31,000 - 35,000 per month",
        eligibility: "For research scholars based on qualification exams"
      },
      {
        name: "ICAR Fellowship",
        amount: "Rs. 12,000 - 25,000 per month",
        eligibility: "For postgraduate and doctoral students"
      }
    ]
  },
  // Rajasthan Colleges
  {
    id: "iit-jodhpur",
    stateId: "rajasthan",
    name: "Indian Institute of Technology Jodhpur",
    type: "Government",
    description: "A leading engineering institute in the desert state known for its innovative programs.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/IIT_Jodhpur_Logo.svg/1200px-IIT_Jodhpur_Logo.svg.png",
    location: {
      city: "Jodhpur",
      state: "Rajasthan",
      address: "NH 62, Surpura Bypass Road, Karwar, Rajasthan 342037"
    },
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 88,
      topCompanies: ["Microsoft", "Google", "Amazon", "Samsung", "Intel"],
      averagePackage: "18 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Samsung", "Intel"],
      avgSalary: 1800000
    },
    ranking: {
      nirf: 45,
      outlook: 42,
      theWeek: 38
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Artificial Intelligence", "Renewable Energy", "Desert Technology", "Biotechnology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      }
    ]
  },
  {
    id: "bits-pilani",
    stateId: "rajasthan",
    name: "Birla Institute of Technology and Science Pilani",
    type: "Private",
    description: "A premier private technical institute known for its innovative curriculum and industry connections.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg",
    location: {
      city: "Pilani",
      state: "Rajasthan",
      address: "Vidya Vihar, Pilani, Rajasthan 333031"
    },
    fees: {
      tuition: { min: 400000, max: 450000 },
      hostel: { min: 80000, max: 120000 },
      other: { min: 30000, max: 50000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"],
      averagePackage: "25 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"],
      avgSalary: 2500000
    },
    ranking: {
      nirf: 25,
      outlook: 20,
      theWeek: 15
    },
    courses: ["Computer Science", "Electronics", "Mechanical Engineering", "Chemical Engineering", "Biotechnology"],
    facilities: ["State-of-art Labs", "Sports Complex", "Hostels", "Wi-Fi Campus", "Innovation Centers"],
    admissionCriteria: ["BITSAT"],
    researchAreas: ["AI & Machine Learning", "Biotechnology", "Nanotechnology", "Sustainable Energy"],
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "Based on BITSAT scores and Class 12 marks.",
      process: "Online BITSAT exam followed by counseling.",
      deadlines: "Usually in May-June."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to 80% fee waiver",
        eligibility: "Based on BITSAT scores and academic performance"
      }
    ]
  },
  // Punjab Colleges
  {
    id: "pec-chandigarh",
    stateId: "punjab",
    name: "Punjab Engineering College",
    type: "Government",
    description: "One of the oldest engineering colleges in India with excellent infrastructure and faculty.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f8/PEC_Chandigarh_Logo.png",
    location: {
      city: "Chandigarh",
      state: "Punjab",
      address: "Sector 12, Chandigarh 160012"
    },
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 50000, max: 70000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["TCS", "Infosys", "Wipro", "Microsoft", "Amazon"],
      averagePackage: "8 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "Microsoft", "Amazon"],
      avgSalary: 800000
    },
    ranking: {
      nirf: 75,
      outlook: 68,
      theWeek: 72
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Electronics"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Labs"],
    admissionCriteria: ["JEE Main"],
    researchAreas: ["Computer Science", "Electronics", "Mechanical Systems", "Civil Engineering"],
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "Based on JEE Main scores.",
      process: "Online application followed by JEE Main counseling.",
      deadlines: "As per JoSAA schedule."
    },
    scholarships: [
      {
        name: "Government Scholarship",
        amount: "Fee waiver based on category",
        eligibility: "For SC/ST and economically weaker sections"
      }
    ]
  },
  // Kerala Colleges
  {
    id: "iit-palakkad",
    stateId: "kerala",
    name: "Indian Institute of Technology Palakkad",
    type: "Government",
    description: "A young IIT established to promote technical education in Kerala.",
    rating: 4.2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/IIT_Palakkad_Logo.svg/1200px-IIT_Palakkad_Logo.svg.png",
    location: {
      city: "Palakkad",
      state: "Kerala",
      address: "Ahalia Integrated Campus, Kozhippara, Palakkad, Kerala 678557"
    },
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 82,
      topCompanies: ["Microsoft", "Google", "Amazon", "Flipkart", "Samsung"],
      averagePackage: "16 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Flipkart", "Samsung"],
      avgSalary: 1600000
    },
    ranking: {
      nirf: 52,
      outlook: 48,
      theWeek: 45
    },
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Research Labs"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["AI & Data Science", "Sustainable Engineering", "Electronics", "Materials Science"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      }
    ]
  },
  {
    id: "nit-calicut",
    stateId: "kerala",
    name: "National Institute of Technology Calicut",
    type: "Government",
    description: "A premier technical institute known for excellence in engineering education and research.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/NIT_Calicut_Logo.png/1200px-NIT_Calicut_Logo.png",
    location: {
      city: "Kozhikode",
      state: "Kerala",
      address: "NIT Campus P.O, Kozhikode, Kerala 673601"
    },
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 55000, max: 75000 },
      other: { min: 12000, max: 22000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Microsoft", "Google", "Amazon", "Adobe", "Intel"],
      averagePackage: "14 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Adobe", "Intel"],
      avgSalary: 1400000
    },
    ranking: {
      nirf: 28,
      outlook: 25,
      theWeek: 22
    },
    courses: ["Computer Science", "Electronics", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Research Centers"],
    admissionCriteria: ["JEE Main"],
    researchAreas: ["Computer Science", "Electronics", "Materials Science", "Environmental Engineering"],
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "Based on JEE Main scores.",
      process: "Online application followed by JoSAA counseling.",
      deadlines: "As per JoSAA schedule."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Based on JEE Main rank and academic performance"
      }
    ]
  },
  // Haryana Colleges
  {
    id: "nit-kurukshetra",
    stateId: "haryana",
    name: "National Institute of Technology Kurukshetra",
    type: "Government",
    description: "One of the oldest NITs in India with strong industry connections and placement record.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/NIT_Kurukshetra_Logo.png/1200px-NIT_Kurukshetra_Logo.png",
    location: {
      city: "Kurukshetra",
      state: "Haryana",
      address: "Kurukshetra, Haryana 136119"
    },
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 55000, max: 75000 },
      other: { min: 12000, max: 22000 }
    },
    placement: {
      percentage: 88,
      topCompanies: ["Microsoft", "Google", "Amazon", "Samsung", "Adobe"],
      averagePackage: "12 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Samsung", "Adobe"],
      avgSalary: 1200000
    },
    ranking: {
      nirf: 35,
      outlook: 32,
      theWeek: 28
    },
    courses: ["Computer Science", "Electronics", "Mechanical Engineering", "Civil Engineering", "IT"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Tech Incubator"],
    admissionCriteria: ["JEE Main"],
    researchAreas: ["Computer Science", "Electronics", "Mechanical Systems", "Civil Engineering"],
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "Based on JEE Main scores.",
      process: "Online application followed by JoSAA counseling.",
      deadlines: "As per JoSAA schedule."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Based on JEE Main rank and academic performance"
      }
    ]
  },
  // Odisha Colleges
  {
    id: "nit-rourkela",
    stateId: "odisha",
    name: "National Institute of Technology Rourkela",
    type: "Government",
    description: "A premier technical institute known for its excellent infrastructure and research facilities.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/NIT_Rourkela_Logo.png/1200px-NIT_Rourkela_Logo.png",
    location: {
      city: "Rourkela",
      state: "Odisha",
      address: "Rourkela, Odisha 769008"
    },
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 55000, max: 75000 },
      other: { min: 12000, max: 22000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Microsoft", "Google", "Amazon", "Tata Steel", "SAIL"],
      averagePackage: "13 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Tata Steel", "SAIL"],
      avgSalary: 1300000
    },
    ranking: {
      nirf: 32,
      outlook: 28,
      theWeek: 25
    },
    courses: ["Computer Science", "Metallurgy", "Mechanical Engineering", "Civil Engineering", "Electronics"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Advanced Labs"],
    admissionCriteria: ["JEE Main"],
    researchAreas: ["Metallurgy", "Computer Science", "Materials Science", "Mining Engineering"],
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "Based on JEE Main scores.",
      process: "Online application followed by JoSAA counseling.",
      deadlines: "As per JoSAA schedule."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Based on JEE Main rank and academic performance"
      }
    ]
  },
  // Jharkhand Colleges
  {
    id: "nit-jamshedpur",
    stateId: "jharkhand",
    name: "National Institute of Technology Jamshedpur",
    type: "Government",
    description: "A technical institute in the steel city known for metallurgy and engineering programs.",
    rating: 4.2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/NIT_Jamshedpur_Logo.png/1200px-NIT_Jamshedpur_Logo.png",
    location: {
      city: "Jamshedpur",
      state: "Jharkhand",
      address: "Adityapur, Jamshedpur, Jharkhand 831014"
    },
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 50000, max: 70000 },
      other: { min: 10000, max: 20000 }
    },
    placement: {
      percentage: 80,
      topCompanies: ["Tata Steel", "TCS", "Infosys", "Microsoft", "Amazon"],
      averagePackage: "9 LPA",
      topRecruiters: ["Tata Steel", "TCS", "Infosys", "Microsoft", "Amazon"],
      avgSalary: 900000
    },
    ranking: {
      nirf: 68,
      outlook: 65,
      theWeek: 62
    },
    courses: ["Metallurgy", "Computer Science", "Mechanical Engineering", "Civil Engineering", "Electronics"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Industrial Labs"],
    admissionCriteria: ["JEE Main"],
    researchAreas: ["Metallurgy", "Materials Science", "Computer Science", "Mining Technology"],
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "Based on JEE Main scores.",
      process: "Online application followed by JoSAA counseling.",
      deadlines: "As per JoSAA schedule."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Based on JEE Main rank and academic performance"
      }
    ]
  },
  // Assam Colleges
  {
    id: "iit-guwahati",
    stateId: "assam",
    name: "Indian Institute of Technology Guwahati",
    type: "Government",
    description: "A premier IIT in Northeast India known for its scenic campus and academic excellence.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/IIT_Guwahati_Logo.svg/1200px-IIT_Guwahati_Logo.svg.png",
    location: {
      city: "Guwahati",
      state: "Assam",
      address: "Guwahati, Assam 781039"
    },
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Microsoft", "Google", "Amazon", "Samsung", "Adobe"],
      averagePackage: "19 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Samsung", "Adobe"],
      avgSalary: 1900000
    },
    ranking: {
      nirf: 7,
      outlook: 8,
      theWeek: 9
    },
    courses: ["Computer Science", "Electronics", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Research Centers"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["AI & Machine Learning", "Electronics", "Biotechnology", "Sustainable Technology"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      }
    ]
  },
  // Bihar Colleges
  {
    id: "iit-patna",
    stateId: "bihar",
    name: "Indian Institute of Technology Patna",
    type: "Government",
    description: "A newer IIT established to promote technical education in Bihar.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/IIT_Patna_Logo.svg/1200px-IIT_Patna_Logo.svg.png",
    location: {
      city: "Patna",
      state: "Bihar",
      address: "Bihta, Patna, Bihar 801106"
    },
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Microsoft", "Google", "Amazon", "Adobe", "Samsung"],
      averagePackage: "17 LPA",
      topRecruiters: ["Microsoft", "Google", "Amazon", "Adobe", "Samsung"],
      avgSalary: 1700000
    },
    ranking: {
      nirf: 48,
      outlook: 45,
      theWeek: 42
    },
    courses: ["Computer Science", "Electronics", "Mechanical Engineering", "Civil Engineering", "Metallurgy"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Modern Labs"],
    admissionCriteria: ["JEE Advanced"],
    researchAreas: ["Computer Science", "Electronics", "Materials Science", "Civil Engineering"],
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "Based on JEE Advanced scores.",
      process: "Online application followed by JEE Advanced counseling.",
      deadlines: "Usually in June."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on academic performance and family income"
      }
    ]
  },
  // Chandigarh Colleges
  {
    id: "panjab-university",
    stateId: "chandigarh",
    name: "Panjab University",
    type: "Government",
    description: "One of the oldest universities in India offering diverse programs across multiple disciplines.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/52/Panjab_University_Logo.png",
    location: {
      city: "Chandigarh",
      state: "Chandigarh",
      address: "Sector 14, Chandigarh 160014"
    },
    fees: {
      tuition: { min: 25000, max: 80000 },
      hostel: { min: 40000, max: 60000 },
      other: { min: 10000, max: 20000 }
    },
    placement: {
      percentage: 75,
      topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra"],
      averagePackage: "6 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra"],
      avgSalary: 600000
    },
    ranking: {
      nirf: 65,
      outlook: 60,
      theWeek: 58
    },
    courses: ["Engineering", "Arts", "Sciences", "Commerce", "Law", "Medicine", "Management"],
    facilities: ["Central Library", "Sports Complex", "Hostels", "Wi-Fi Campus", "Museums"],
    admissionCriteria: ["Entrance Exam", "Merit-based"],
    researchAreas: ["Sciences", "Social Sciences", "Engineering", "Medicine", "Arts"],
    entranceExams: ["PU CET", "Various departmental exams"],
    admissionDetails: {
      eligibility: "Based on entrance exam and academic records.",
      process: "Online application followed by entrance exam and counseling.",
      deadlines: "Varies by department, usually April-June."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Fee concession",
        eligibility: "Based on academic performance"
      }
    ]
  }
];

// Function to get colleges by state ID
export const getCollegesByState = (stateId: string): College[] => {
  return colleges.filter(college => college.stateId === stateId);
};

// Function to get a college by its ID
export const getCollegeById = (collegeId: string): College | undefined => {
  return colleges.find(college => college.id === collegeId);
};
