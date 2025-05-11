
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

// Sample data for states
export const states: State[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 7
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 7  // Updating from 2 to 7
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
  }
];

// Sample data for colleges
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
    // Additional Delhi colleges 
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
    stateId: "uttar-pradesh",
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
      percentage: 92,
      topCompanies: ["Google", "Microsoft", "Samsung", "Intel", "Goldman Sachs"],
      averagePackage: "22 LPA",
      topRecruiters: ["Google", "Microsoft", "Samsung", "Intel", "Goldman Sachs"],
      avgSalary: 2200000
    },
    ranking: {
      nirf: 5,
      outlook: 4,
      theWeek: 5
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
  }
];
