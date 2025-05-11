
export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

export interface College {
  id: string;
  stateId: string;
  name: string;
  type: "Government" | "Private";
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
    topRecruiters?: string[];
    avgSalary?: number;
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

// Helper functions to get colleges data
export const getCollegeById = (collegeId: string, stateId: string): College | undefined => {
  return colleges.find(college => college.id === collegeId && college.stateId === stateId);
};

export const getCollegesByState = (stateId: string): College[] => {
  return colleges.filter(college => college.stateId === stateId);
};

export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

// Sample data for states
export const states: State[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 2
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 2
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    collegeCount: 2
  },
  {
    id: "karnataka",
    name: "Karnataka",
    collegeCount: 2
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    collegeCount: 2
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    collegeCount: 2
  },
  {
    id: "gujarat",
    name: "Gujarat",
    collegeCount: 2
  },
  {
    id: "kerala",
    name: "Kerala",
    collegeCount: 2
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    collegeCount: 10
  },
  {
    id: "telangana",
    name: "Telangana",
    collegeCount: 0
  },
  {
    id: "odisha",
    name: "Odisha",
    collegeCount: 0
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    collegeCount: 0
  },
  {
    id: "punjab",
    name: "Punjab",
    collegeCount: 0
  },
  {
    id: "haryana",
    name: "Haryana",
    collegeCount: 0
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    collegeCount: 0
  },
  {
    id: "assam",
    name: "Assam",
    collegeCount: 0
  },
  {
    id: "bihar",
    name: "Bihar",
    collegeCount: 0
  }
];

// Sample college data
export const colleges: College[] = [
  // Maharashtra
  {
    id: "iit-bombay",
    stateId: "maharashtra",
    name: "Indian Institute of Technology, Bombay",
    type: "Government",
    description: "One of the premier engineering institutions in India, known for its excellent academic programs and research facilities.",
    rating: 4.8,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1d/IIT_Bombay_Logo.svg",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "IIT Area, Powai, Mumbai, Maharashtra 400076"
    },
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 45000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Google", "Microsoft", "Amazon", "Goldman Sachs"],
      averagePackage: "20 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Apple", "Intel"],
      avgSalary: 2000000
    },
    ranking: {
      nirf: 3,
      outlook: 2,
      theWeek: 2
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemistry", "Physics"],
    facilities: ["Library", "Sports Complex", "Swimming Pool", "Gym", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Artificial Intelligence", "Nanotechnology", "Renewable Energy", "Urban Infrastructure", "Biomedical Engineering"],
    entranceExams: ["JEE Advanced", "GATE", "JAM", "CEED"],
    admissionDetails: {
      eligibility: "For B.Tech: Qualified JEE Advanced with minimum required percentile. For M.Tech: Valid GATE score.",
      process: "Admission is based on JEE Advanced rank followed by counseling through JoSAA for B.Tech programs.",
      deadlines: "Applications typically open in April and close in May."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver + Rs. 1000/month",
        eligibility: "For students with family income less than 5 lakhs per annum"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income and academic performance"
      }
    ]
  },
  {
    id: "st-xaviers-mumbai",
    stateId: "maharashtra",
    name: "St. Xavier's College, Mumbai",
    type: "Private",
    description: "A historic college known for its excellence in arts, science, and commerce programs with a focus on holistic education.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/St._Xavier%27s_College%2C_Mumbai_logo.png",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "5, Mahapalika Marg, Dhobi Talao, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001"
    },
    fees: {
      tuition: { min: 25000, max: 90000 },
      hostel: { min: 60000, max: 120000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 80,
      topCompanies: ["Deloitte", "TCS", "KPMG", "J.P. Morgan"],
      averagePackage: "7 LPA",
      topRecruiters: ["Deloitte", "TCS", "KPMG", "J.P. Morgan", "Wipro", "Infosys"],
      avgSalary: 700000
    },
    ranking: {
      nirf: 28,
      outlook: 22,
      theWeek: 25
    },
    courses: ["Arts", "Science", "Commerce", "Management", "Mass Media", "Information Technology"],
    facilities: ["Library", "Auditorium", "Cafeteria", "Sports Ground", "Research Labs", "Computer Center"],
    admissionCriteria: ["Class 12 Merit", "Entrance Exam (for some courses)"],
    researchAreas: ["Literature", "Environmental Science", "Economics", "Sociology", "Microbiology"],
    entranceExams: ["XAT", "College Entrance Test"],
    admissionDetails: {
      eligibility: "Minimum 60% in Class 12 from a recognized board for most programs.",
      process: "Merit-based admission for most courses. Some specialized programs have entrance tests.",
      deadlines: "Applications typically open after Class 12 board results announcement."
    },
    scholarships: [
      {
        name: "Father Heras Scholarship",
        amount: "Partial tuition fee waiver",
        eligibility: "Based on academic excellence and financial need"
      },
      {
        name: "Minority Students Scholarship",
        amount: "Up to Rs. 25,000",
        eligibility: "For students from minority communities with good academic records"
      }
    ]
  },
  
  // Delhi
  {
    id: "delhi-university",
    stateId: "delhi",
    name: "University of Delhi",
    type: "Government",
    description: "One of the premier universities in India offering diverse undergraduate, postgraduate and research programs across multiple disciplines.",
    rating: 4.7,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6c/University_of_Delhi.svg",
    location: {
      city: "Delhi",
      state: "Delhi",
      address: "New Delhi, Delhi 110021"
    },
    fees: {
      tuition: { min: 15000, max: 50000 },
      hostel: { min: 18000, max: 60000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Deloitte", "EY", "Amazon", "HUL", "Infosys"],
      averagePackage: "8 LPA",
      topRecruiters: ["Deloitte", "EY", "Amazon", "HUL", "Infosys"],
      avgSalary: 800000
    },
    ranking: {
      nirf: 12,
      outlook: 8,
      theWeek: 10
    },
    courses: ["Arts", "Commerce", "Science", "Law", "Management", "Languages", "Education"],
    facilities: ["Libraries", "Sports Complex", "Medical Facility", "Computer Labs", "Auditorium", "Cafeteria"],
    admissionCriteria: ["Cut-off Marks", "Entrance Tests (for some courses)"],
    researchAreas: ["Humanities", "Social Sciences", "Sciences", "Commerce", "Management"],
    entranceExams: ["DUET"],
    admissionDetails: {
      eligibility: "Based on cut-off marks in Class 12 for most UG programs. Entrance tests for some specific courses.",
      process: "Online application followed by merit-based or entrance-based selection.",
      deadlines: "Usually between May and June."
    },
    scholarships: [
      {
        name: "Post-Matric Scholarship for SC/ST/OBC Students",
        amount: "Varies",
        eligibility: "For students belonging to SC/ST/OBC categories"
      },
      {
        name: "Merit Scholarship",
        amount: "Varies",
        eligibility: "Based on academic performance"
      }
    ]
  },
  {
    id: "iit-delhi",
    stateId: "delhi",
    name: "Indian Institute of Technology, Delhi",
    type: "Government",
    description: "A world-class engineering institution known for its cutting-edge research and innovation in technology and sciences.",
    rating: 4.9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    location: {
      city: "Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016"
    },
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 50000 },
      other: { min: 10000, max: 30000 }
    },
    placement: {
      percentage: 98,
      topCompanies: ["Google", "Microsoft", "Apple", "Intel", "Qualcomm"],
      averagePackage: "22 LPA",
      topRecruiters: ["Google", "Microsoft", "Apple", "Intel", "Qualcomm"],
      avgSalary: 2200000
    },
    ranking: {
      nirf: 2,
      outlook: 3,
      theWeek: 2
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Biotechnology", "Physics"],
    facilities: ["Research Labs", "Innovation Hub", "Sports Complex", "Auditorium", "Library", "Computer Center"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Robotics", "Sustainable Energy", "Nanotechnology"],
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "Qualified JEE Advanced rank for B.Tech programs. Valid GATE score for M.Tech programs.",
      process: "Admission through JoSAA counseling based on JEE Advanced rank.",
      deadlines: "Applications typically open in April and close in May."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver + Rs. 1000/month",
        eligibility: "For students with family income less than 5 lakhs per annum"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income and academic performance"
      }
    ]
  },
  
  // Tamil Nadu
  {
    id: "iit-madras",
    stateId: "tamil-nadu",
    name: "Indian Institute of Technology, Madras",
    type: "Government",
    description: "Leading research institution known for its outstanding technical education and innovation ecosystem.",
    rating: 4.9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Chennai, Tamil Nadu 600036"
    },
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 40000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 97,
      topCompanies: ["Microsoft", "Google", "Apple", "Qualcomm", "Intel"],
      averagePackage: "21.5 LPA",
      topRecruiters: ["Microsoft", "Google", "Apple", "Qualcomm", "Intel"],
      avgSalary: 2150000
    },
    ranking: {
      nirf: 1,
      outlook: 1,
      theWeek: 1
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Aerospace Engineering", "Physics", "Chemistry"],
    facilities: ["Research Park", "Central Library", "Sports Complex", "Swimming Pool", "Innovation Hub", "Healthcare Center"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["AI & Data Science", "Quantum Computing", "Ocean Engineering", "Biomedical Technology", "Energy Systems"],
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "Qualified JEE Advanced rank for B.Tech programs. Valid GATE score for M.Tech programs.",
      process: "Admission through JoSAA counseling based on JEE Advanced rank.",
      deadlines: "Applications typically open in April and close in May."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver + Rs. 1000/month",
        eligibility: "For students with family income less than 5 lakhs per annum"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income and academic performance"
      }
    ]
  },
  {
    id: "anna-university",
    stateId: "tamil-nadu",
    name: "Anna University",
    type: "Government",
    description: "Premier technical university offering quality education in engineering and technology across Tamil Nadu.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/87/Anna_University_Logo.svg",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Chennai, Tamil Nadu 600025"
    },
    fees: {
      tuition: { min: 40000, max: 90000 },
      hostel: { min: 25000, max: 60000 },
      other: { min: 5000, max: 20000 }
    },
    placement: {
      percentage: 80,
      topCompanies: ["TCS", "Infosys", "Wipro", "HCL", "L&T"],
      averagePackage: "6.5 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "L&T"],
      avgSalary: 650000
    },
    ranking: {
      nirf: 15,
      outlook: 18,
      theWeek: 16
    },
    courses: ["Civil Engineering", "Computer Science", "Electrical Engineering", "Mechanical Engineering", "Information Technology", "Electronics"],
    facilities: ["Central Library", "Sports Complex", "Laboratories", "Hostels", "Medical Center", "Canteen"],
    admissionCriteria: ["TNEA Counselling", "TANCA (for PG)"],
    researchAreas: ["Water Resources", "Smart Cities", "Power Systems", "Materials Engineering", "Computer Vision"],
    entranceExams: ["TNEA", "TANCA"],
    admissionDetails: {
      eligibility: "Based on Class 12 marks for TNEA counselling. TANCA for PG programs.",
      process: "Online application followed by TNEA counselling based on merit.",
      deadlines: "Usually in May and June."
    },
    scholarships: [
      {
        name: "BC/MBC/DNC Scholarship",
        amount: "Varies",
        eligibility: "For students belonging to BC/MBC/DNC categories"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Varies",
        eligibility: "For students belonging to SC/ST categories"
      }
    ]
  },
  
  // Karnataka
  {
    id: "iisc-bangalore",
    stateId: "karnataka",
    name: "Indian Institute of Science, Bangalore",
    type: "Government",
    description: "India's premier research institution with world-class facilities and programs in advanced scientific and technological research.",
    rating: 4.9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Indian_Institute_of_Science_logo.png",
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "Bangalore, Karnataka 560012"
    },
    fees: {
      tuition: { min: 25000, max: 75000 },
      hostel: { min: 24000, max: 50000 },
      other: { min: 10000, max: 30000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Google", "Intel", "IBM Research", "ISRO", "DRDO"],
      averagePackage: "18 LPA",
      topRecruiters: ["Google", "Intel", "IBM Research", "ISRO", "DRDO"],
      avgSalary: 1800000
    },
    ranking: {
      nirf: 1,
      outlook: 1,
      theWeek: 1
    },
    courses: ["Engineering", "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Materials Research"],
    facilities: ["Research Centers", "Advanced Labs", "Library", "Sports Complex", "Health Center", "Innovation Hub"],
    admissionCriteria: ["GATE", "NET", "JAM", "IISc Entrance Exam"],
    researchAreas: ["Quantum Technology", "Climate Science", "Artificial Intelligence", "Nanoscience", "Aerospace Engineering"],
    entranceExams: ["GATE", "NET", "JAM", "IISc Entrance Exam"],
    admissionDetails: {
      eligibility: "Varies based on the program. Generally requires a Bachelor's or Master's degree in a relevant field.",
      process: "Based on entrance exam scores, academic record, and interviews.",
      deadlines: "Varies by program, typically between February and April."
    },
    scholarships: [
      {
        name: "KVPY Fellowship",
        amount: "Varies",
        eligibility: "For students pursuing basic sciences"
      },
      {
        name: "INSPIRE Scholarship",
        amount: "Varies",
        eligibility: "For students pursuing science and technology"
      }
    ]
  },
  {
    id: "manipal-academy",
    stateId: "karnataka",
    name: "Manipal Academy of Higher Education",
    type: "Private",
    description: "A leading private university known for its medical, engineering, and management programs with international collaborations.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/Manipal_Academy_of_Higher_Education_logo.png",
    location: {
      city: "Manipal",
      state: "Karnataka",
      address: "Manipal, Karnataka 576104"
    },
    fees: {
      tuition: { min: 300000, max: 1500000 },
      hostel: { min: 100000, max: 200000 },
      other: { min: 25000, max: 75000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Amazon", "Microsoft", "Deloitte", "Apollo Hospitals", "Infosys"],
      averagePackage: "10 LPA",
      topRecruiters: ["Amazon", "Microsoft", "Deloitte", "Apollo Hospitals", "Infosys"],
      avgSalary: 1000000
    },
    ranking: {
      nirf: 7,
      outlook: 6,
      theWeek: 8
    },
    courses: ["Medicine", "Engineering", "Management", "Pharmacy", "Allied Health", "Architecture", "Communications"],
    facilities: ["Libraries", "Innovation Center", "Sports Complex", "Swimming Pool", "Medical Museum", "Simulation Labs"],
    admissionCriteria: ["MET (Manipal Entrance Test)", "NEET (for Medical)", "JEE (for Engineering)"],
    researchAreas: ["Healthcare", "Technology", "Humanities", "Management", "Sciences"],
    entranceExams: ["MET", "NEET", "JEE Main"],
    admissionDetails: {
      eligibility: "Based on MET score for most programs. NEET for medical programs.",
      process: "Online application followed by MET exam and counselling.",
      deadlines: "Usually between March and May."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Varies",
        eligibility: "Based on academic performance"
      },
      {
        name: "Freeship and Concessions",
        amount: "Varies",
        eligibility: "For economically weaker sections"
      }
    ]
  },
  
  // West Bengal
  {
    id: "jadavpur-university",
    stateId: "west-bengal",
    name: "Jadavpur University",
    type: "Government",
    description: "A prestigious public university known for its strong engineering and arts programs with a focus on research and innovation.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/bc/Jadavpur_University_seal.svg",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "Kolkata, West Bengal 700032"
    },
    fees: {
      tuition: { min: 5000, max: 20000 },
      hostel: { min: 12000, max: 24000 },
      other: { min: 3000, max: 8000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["TCS", "Infosys", "CTS", "Deloitte", "IBM"],
      averagePackage: "7 LPA",
      topRecruiters: ["TCS", "Infosys", "CTS", "Deloitte", "IBM"],
      avgSalary: 700000
    },
    ranking: {
      nirf: 13,
      outlook: 14,
      theWeek: 12
    },
    courses: ["Engineering", "Arts", "Science", "Architecture", "Pharmacy", "Film Studies"],
    facilities: ["Central Library", "Laboratories", "Workshops", "Sports Ground", "Cafeteria", "Seminar Halls"],
    admissionCriteria: ["WBJEE (for Engineering)", "Merit-based (for Arts & Science)"],
    researchAreas: ["Engineering Sciences", "Humanities", "Physical Sciences", "Life Sciences", "Interdisciplinary Research"],
    entranceExams: ["WBJEE", "JUEE"],
    admissionDetails: {
      eligibility: "WBJEE rank for engineering programs. Merit-based for arts and science programs.",
      process: "WBJEE counselling for engineering. Merit list for other programs.",
      deadlines: "Usually in May and June."
    },
    scholarships: [
      {
        name: "Swami Vivekananda Merit-cum-Means Scholarship",
        amount: "Varies",
        eligibility: "Based on merit and family income"
      },
      {
        name: "OBC Scholarship",
        amount: "Varies",
        eligibility: "For students belonging to OBC category"
      }
    ]
  },
  {
    id: "presidency-university",
    stateId: "west-bengal",
    name: "Presidency University",
    type: "Government",
    description: "One of the oldest educational institutions in India with a rich heritage and excellence in liberal arts and sciences.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/79/Presidency_University%2C_Kolkata_Logo.png",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "Kolkata, West Bengal 700073"
    },
    fees: {
      tuition: { min: 4000, max: 15000 },
      hostel: { min: 15000, max: 25000 },
      other: { min: 2000, max: 5000 }
    },
    placement: {
      percentage: 70,
      topCompanies: ["TCS", "Wipro", "Cognizant", "Deloitte", "Tech Mahindra"],
      averagePackage: "5.5 LPA",
      topRecruiters: ["TCS", "Wipro", "Cognizant", "Deloitte", "Tech Mahindra"],
      avgSalary: 550000
    },
    ranking: {
      nirf: 25,
      outlook: 22,
      theWeek: 24
    },
    courses: ["Physics", "Chemistry", "Mathematics", "Economics", "History", "Political Science", "Sociology", "Life Sciences"],
    facilities: ["Baker Laboratory", "Central Library", "Auditorium", "Computer Labs", "Canteen", "Sports Facilities"],
    admissionCriteria: ["Entrance Examination", "Merit-based Selection"],
    researchAreas: ["Theoretical Physics", "Molecular Biology", "Economic Theory", "Historical Studies", "Environmental Science"],
    entranceExams: ["PUBDET"],
    admissionDetails: {
      eligibility: "Based on entrance exam and merit.",
      process: "Entrance exam followed by counselling.",
      deadlines: "Usually in May and June."
    },
    scholarships: [
      {
        name: "Swami Vivekananda Merit-cum-Means Scholarship",
        amount: "Varies",
        eligibility: "Based on merit and family income"
      },
      {
        name: "WB CM Relief Fund Scholarship",
        amount: "Varies",
        eligibility: "Based on financial need"
      }
    ]
  },
  
  // Uttar Pradesh
  {
    id: "iit-kanpur",
    stateId: "uttar-pradesh",
    name: "Indian Institute of Technology, Kanpur",
    type: "Government",
    description: "A leading engineering institution known for its rigorous academic programs and research contributions.",
    rating: 4.8,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/IIT_Kanpur_Logo.svg",
    location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      address: "Kanpur, Uttar Pradesh 208016"
    },
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 45000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Microsoft", "Google", "Samsung", "Adobe", "Qualcomm"],
      averagePackage: "20 LPA",
      topRecruiters: ["Microsoft", "Google", "Samsung", "Adobe", "Qualcomm"],
      avgSalary: 2000000
    },
    ranking: {
      nirf: 4,
      outlook: 5,
      theWeek: 4
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Aerospace Engineering", "Materials Science", "Chemistry"],
    facilities: ["P.K. Kelkar Library", "Advanced Labs", "Sports Complex", "Aviation Field", "Health Center", "Innovation Hub"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Artificial Intelligence", "Advanced Materials", "Space Technology", "Quantum Computing", "Robotics"],
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "Qualified JEE Advanced rank for B.Tech programs. Valid GATE score for M.Tech programs.",
      process: "Admission through JoSAA counselling based on JEE Advanced rank.",
      deadlines: "Applications typically open in April and close in May."
    },
    scholarships: [
      {
        name: "Merit-cum-Means Scholarship",
        amount: "Full tuition fee waiver + Rs. 1000/month",
        eligibility: "For students with family income less than 5 lakhs per annum"
      },
      {
        name: "Institute Free Studentship",
        amount: "Full tuition fee waiver",
        eligibility: "Based on family income and academic performance"
      }
    ]
  },
  {
    id: "bhu-varanasi",
    stateId: "uttar-pradesh",
    name: "Banaras Hindu University",
    type: "Government",
    description: "One of the largest residential universities in Asia, offering diverse programs across arts, sciences, engineering, and medicine.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/Banaras_Hindu_University_seal.svg",
    location: {
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "Varanasi, Uttar Pradesh 221005"
    },
    fees: {
      tuition: { min: 10000, max: 80000 },
      hostel: { min: 10000, max: 35000 },
      other: { min: 5000, max: 20000 }
    },
    placement: {
      percentage: 75,
      topCompanies: ["TCS", "Infosys", "DRDO", "HCL", "Wipro"],
      averagePackage: "7 LPA",
      topRecruiters: ["TCS", "Infosys", "DRDO", "HCL", "Wipro"],
      avgSalary: 700000
    },
    ranking: {
      nirf: 10,
      outlook: 12,
      theWeek: 11
    },
    courses: ["Arts", "Science", "Engineering", "Medicine", "Agriculture", "Management", "Law", "Fine Arts"],
    facilities: ["Central Library", "Laboratories", "Museums", "Sports Complex", "Hospital", "Auditorium"],
    admissionCriteria: ["CUET", "BHU-PET", "NEET (for Medical)"],
    researchAreas: ["Sanskrit Studies", "Agricultural Sciences", "Medical Research", "Environmental Studies", "Social Sciences"],
    entranceExams: ["CUET", "BHU-PET", "NEET"],
    admissionDetails: {
      eligibility: "Varies by program. Generally requires minimum 50-60% in qualifying examination.",
      process: "Based on entrance exam rank and counselling.",
      deadlines: "Applications typically open in March and close in April."
    },
    scholarships: [
      {
        name: "BHU Merit Scholarship",
        amount: "Rs. 1000/month",
        eligibility: "Based on academic performance"
      },
      {
        name: "Financial Aid to Needy Students",
        amount: "Varies",
        eligibility: "Based on financial need"
      }
    ]
  },
  
  // Add 10 colleges for Andhra Pradesh
  {
    id: "andhra-university",
    stateId: "andhra-pradesh",
    name: "Andhra University",
    type: "Government",
    description: "One of the oldest and most prestigious universities in Andhra Pradesh known for its quality education and research opportunities.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/13/Andhra_University_Logo.png",
    location: {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      address: "Visakhapatnam, Andhra Pradesh 530003"
    },
    fees: {
      tuition: { min: 15000, max: 60000 },
      hostel: { min: 15000, max: 40000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 78,
      topCompanies: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "HCL"],
      averagePackage: "6 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "HCL"],
      avgSalary: 600000
    },
    ranking: {
      nirf: 36,
      outlook: 32,
      theWeek: 38
    },
    courses: ["Engineering", "Science", "Arts", "Commerce", "Management", "Pharmacy", "Law"],
    facilities: ["Central Library", "Laboratories", "Sports Facilities", "Hostels", "Health Center", "Auditorium"],
    admissionCriteria: ["AP EAMCET", "ICET", "PGCET"],
    researchAreas: ["Marine Science", "Social Sciences", "Engineering", "Pharmacy", "Environmental Studies"],
    entranceExams: ["AP EAMCET", "ICET", "PGCET"],
    admissionDetails: {
      eligibility: "Based on entrance exam rank and qualifying examination marks.",
      process: "Online application followed by counseling based on rank.",
      deadlines: "Applications typically open in March-April."
    },
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "Rs. 10,000 per annum",
        eligibility: "Based on academic performance"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Varies",
        eligibility: "For students belonging to SC/ST categories"
      }
    ]
  },
  {
    id: "sri-venkateswara-university",
    stateId: "andhra-pradesh",
    name: "Sri Venkateswara University",
    type: "Government",
    description: "A renowned university offering diverse programs in science, arts, commerce and engineering with strong research facilities.",
    rating: 4.2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Sri_Venkateswara_University_Logo.png",
    location: {
      city: "Tirupati",
      state: "Andhra Pradesh",
      address: "Tirupati, Andhra Pradesh 517502"
    },
    fees: {
      tuition: { min: 10000, max: 50000 },
      hostel: { min: 15000, max: 35000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 72,
      topCompanies: ["Infosys", "TCS", "HCL", "Cognizant", "Wipro"],
      averagePackage: "4.5 LPA",
      topRecruiters: ["Infosys", "TCS", "HCL", "Cognizant", "Wipro"],
      avgSalary: 450000
    },
    ranking: {
      nirf: 48,
      outlook: 52,
      theWeek: 50
    },
    courses: ["Science", "Arts", "Commerce", "Engineering", "Education", "Management", "Law"],
    facilities: ["Central Library", "Computer Center", "Sports Complex", "Hostels", "Canteen", "Health Center"],
    admissionCriteria: ["SVUCET", "AP EAMCET", "AP ICET"],
    researchAreas: ["Oriental Studies", "Environmental Sciences", "Biotechnology", "Social Sciences", "Engineering"],
    entranceExams: ["SVUCET", "AP EAMCET", "AP ICET"],
    admissionDetails: {
      eligibility: "Minimum 50% in qualifying examination with relevant subject combinations.",
      process: "Entrance test followed by counseling.",
      deadlines: "Applications typically open in April-May."
    },
    scholarships: [
      {
        name: "University Research Fellowship",
        amount: "Rs. 8,000 per month",
        eligibility: "For PhD scholars with good academic record"
      },
      {
        name: "Merit Scholarship",
        amount: "Varies",
        eligibility: "Based on academic performance"
      }
    ]
  },
  {
    id: "gitam-university",
    stateId: "andhra-pradesh",
    name: "GITAM University",
    type: "Private",
    description: "A leading private university known for its engineering, management and medical programs with strong industry connections.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/91/GITAM_Logo.png",
    location: {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      address: "Visakhapatnam, Andhra Pradesh 530045"
    },
    fees: {
      tuition: { min: 100000, max: 300000 },
      hostel: { min: 60000, max: 120000 },
      other: { min: 15000, max: 40000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Microsoft", "Amazon", "IBM", "Infosys", "Wipro", "Accenture"],
      averagePackage: "7.2 LPA",
      topRecruiters: ["Microsoft", "Amazon", "IBM", "Infosys", "Wipro", "Accenture"],
      avgSalary: 720000
    },
    ranking: {
      nirf: 28,
      outlook: 25,
      theWeek: 27
    },
    courses: ["Engineering", "Management", "Science", "Pharmacy", "Medicine", "Architecture", "Law"],
    facilities: ["Central Library", "Innovation Hub", "Sports Complex", "Swimming Pool", "Hostels", "Auditorium"],
    admissionCriteria: ["GAT (GITAM Admission Test)", "JEE Main", "Management Aptitude Tests"],
    researchAreas: ["Machine Learning", "IoT", "Biotechnology", "Management", "Sustainable Engineering"],
    entranceExams: ["GAT", "JEE Main", "CAT/MAT/XAT"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 for most programs. Higher cutoffs for certain courses.",
      process: "Admission based on GAT score or other specified entrance exams.",
      deadlines: "Applications open from January to April."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to 100% tuition fee waiver",
        eligibility: "Based on academic excellence"
      },
      {
        name: "Sports Scholarship",
        amount: "Up to 50% tuition fee waiver",
        eligibility: "For students with exceptional achievements in sports"
      }
    ]
  },
  {
    id: "sri-padmavati-womens-university",
    stateId: "andhra-pradesh",
    name: "Sri Padmavati Mahila Visvavidyalayam",
    type: "Government",
    description: "The first women's university in Andhra Pradesh offering quality education across multiple disciplines.",
    rating: 4.1,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Sri_Padmavati_Mahila_Visvavidyalayam_logo.png",
    location: {
      city: "Tirupati",
      state: "Andhra Pradesh",
      address: "Tirupati, Andhra Pradesh 517502"
    },
    fees: {
      tuition: { min: 8000, max: 40000 },
      hostel: { min: 12000, max: 30000 },
      other: { min: 4000, max: 12000 }
    },
    placement: {
      percentage: 65,
      topCompanies: ["Infosys", "Wipro", "TCS", "Cognizant", "State Bank of India"],
      averagePackage: "4 LPA",
      topRecruiters: ["Infosys", "Wipro", "TCS", "Cognizant", "State Bank of India"],
      avgSalary: 400000
    },
    ranking: {
      nirf: 70,
      outlook: 68,
      theWeek: 72
    },
    courses: ["Arts", "Science", "Commerce", "Management", "Engineering", "Pharmacy", "Education"],
    facilities: ["Central Library", "Computer Labs", "Sports Facilities", "Hostels", "Health Center", "Auditorium"],
    admissionCriteria: ["Entrance Exams", "Merit-based Selection"],
    researchAreas: ["Women's Studies", "Social Sciences", "Environmental Sciences", "Biotechnology", "Computer Applications"],
    entranceExams: ["SPMVVEET", "AP EAMCET", "AP ICET"],
    admissionDetails: {
      eligibility: "Minimum 50% in qualifying examination from recognized board.",
      process: "Based on entrance exam rank or merit in qualifying examination.",
      deadlines: "Applications typically open in April-May."
    },
    scholarships: [
      {
        name: "Pratibha Scholarship",
        amount: "Varies",
        eligibility: "For meritorious students"
      },
      {
        name: "Single Girl Child Scholarship",
        amount: "Varies",
        eligibility: "For single girl child with good academic record"
      }
    ]
  },
  {
    id: "kl-university",
    stateId: "andhra-pradesh",
    name: "KL University",
    type: "Private",
    description: "A leading private university known for its innovative teaching methods and strong focus on research and entrepreneurship.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f1/Koneru_Lakshmaiah_Education_Foundation_Logo.svg",
    location: {
      city: "Guntur",
      state: "Andhra Pradesh",
      address: "Vaddeswaram, Guntur, Andhra Pradesh 522302"
    },
    fees: {
      tuition: { min: 90000, max: 280000 },
      hostel: { min: 50000, max: 120000 },
      other: { min: 15000, max: 40000 }
    },
    placement: {
      percentage: 88,
      topCompanies: ["Amazon", "Microsoft", "Oracle", "IBM", "Infosys", "TCS"],
      averagePackage: "6.5 LPA",
      topRecruiters: ["Amazon", "Microsoft", "Oracle", "IBM", "Infosys", "TCS"],
      avgSalary: 650000
    },
    ranking: {
      nirf: 32,
      outlook: 35,
      theWeek: 33
    },
    courses: ["Engineering", "Management", "Sciences", "Humanities", "Architecture", "Pharmacy", "Law"],
    facilities: ["Central Library", "Innovation Center", "Sports Complex", "Hostels", "Food Courts", "Health Center"],
    admissionCriteria: ["JEE Mains", "KLUEEE", "Management Entrance Tests"],
    researchAreas: ["IoT", "Data Science", "Renewable Energy", "Robotics", "Biotechnology", "Management"],
    entranceExams: ["KLUEEE", "JEE Mains", "CAT/MAT"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 with PCM for engineering. Different criteria for other programs.",
      process: "Based on entrance exam rank followed by counseling.",
      deadlines: "Applications open from January to April."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to 100% tuition fee waiver",
        eligibility: "Based on JEE Main/KLUEEE rank"
      },
      {
        name: "Sports Excellence Scholarship",
        amount: "Up to 50% tuition fee waiver",
        eligibility: "For state/national level sports achievers"
      }
    ]
  },
  {
    id: "svm-university",
    stateId: "andhra-pradesh",
    name: "Sri Venkateswara Medical University",
    type: "Government",
    description: "A premier medical university offering high-quality education and training in medicine and allied health sciences.",
    rating: 4.4,
    imageUrl: "https://svims.ap.gov.in/svimsweb/images/svims_logo.jpg",
    location: {
      city: "Tirupati",
      state: "Andhra Pradesh",
      address: "Tirupati, Andhra Pradesh 517507"
    },
    fees: {
      tuition: { min: 50000, max: 150000 },
      hostel: { min: 30000, max: 60000 },
      other: { min: 10000, max: 30000 }
    },
    placement: {
      percentage: 92,
      topCompanies: ["Apollo Hospitals", "AIIMS", "Fortis", "CMC Vellore", "KIMS"],
      averagePackage: "12 LPA",
      topRecruiters: ["Apollo Hospitals", "AIIMS", "Fortis", "CMC Vellore", "KIMS"],
      avgSalary: 1200000
    },
    ranking: {
      nirf: 45,
      outlook: 42,
      theWeek: 40
    },
    courses: ["MBBS", "MD", "MS", "Nursing", "Physiotherapy", "Allied Health Sciences", "Dental Sciences"],
    facilities: ["Teaching Hospital", "Advanced Labs", "Medical Library", "Simulation Center", "Hostels", "Research Center"],
    admissionCriteria: ["NEET", "PG-NEET", "University Entrance Exam"],
    researchAreas: ["Clinical Research", "Public Health", "Tropical Medicine", "Cardiology", "Neurosciences"],
    entranceExams: ["NEET", "PG-NEET", "SVMEEAT"],
    admissionDetails: {
      eligibility: "NEET qualification for MBBS. PG-NEET for postgraduate medical courses.",
      process: "Counselling based on NEET rank.",
      deadlines: "As per Medical Council of India schedule."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Rs. 25,000 per annum",
        eligibility: "For top 10 students in each batch"
      },
      {
        name: "Research Grant",
        amount: "Up to Rs. 2 lakhs",
        eligibility: "For innovative research proposals"
      }
    ]
  },
  {
    id: "nagarjuna-university",
    stateId: "andhra-pradesh",
    name: "Acharya Nagarjuna University",
    type: "Government",
    description: "A prestigious university offering diverse programs with emphasis on research and holistic education.",
    rating: 4.0,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Acharya_Nagarjuna_University_Logo.png",
    location: {
      city: "Guntur",
      state: "Andhra Pradesh",
      address: "Nagarjuna Nagar, Guntur, Andhra Pradesh 522510"
    },
    fees: {
      tuition: { min: 8000, max: 45000 },
      hostel: { min: 12000, max: 30000 },
      other: { min: 4000, max: 12000 }
    },
    placement: {
      percentage: 68,
      topCompanies: ["Infosys", "TCS", "Wipro", "Tech Mahindra", "Cognizant"],
      averagePackage: "4.2 LPA",
      topRecruiters: ["Infosys", "TCS", "Wipro", "Tech Mahindra", "Cognizant"],
      avgSalary: 420000
    },
    ranking: {
      nirf: 65,
      outlook: 62,
      theWeek: 60
    },
    courses: ["Arts", "Science", "Commerce", "Engineering", "Law", "Pharmacy", "Management"],
    facilities: ["Central Library", "Computer Center", "Sports Facilities", "Hostels", "Cafeteria", "Research Labs"],
    admissionCriteria: ["ANUCET", "AP EAMCET", "AP ICET"],
    researchAreas: ["Social Sciences", "Environmental Studies", "Life Sciences", "Engineering", "Management"],
    entranceExams: ["ANUCET", "AP EAMCET", "AP ICET"],
    admissionDetails: {
      eligibility: "Minimum 50% in qualifying examination with relevant subjects.",
      process: "Entrance test followed by counseling.",
      deadlines: "Applications open in April-May."
    },
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "Rs. 10,000 per annum",
        eligibility: "For top 5% students in each department"
      },
      {
        name: "SC/ST/BC Scholarship",
        amount: "Varies",
        eligibility: "For students from SC/ST/BC communities"
      }
    ]
  },
  {
    id: "vignan-university",
    stateId: "andhra-pradesh",
    name: "Vignan's University",
    type: "Private",
    description: "A quality-focused private university known for its engineering, pharmacy, and management education.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/09/Vignan%27s_Foundation_for_Science%2C_Technology_%26_Research_Logo.png",
    location: {
      city: "Guntur",
      state: "Andhra Pradesh",
      address: "Vadlamudi, Guntur, Andhra Pradesh 522213"
    },
    fees: {
      tuition: { min: 70000, max: 200000 },
      hostel: { min: 45000, max: 90000 },
      other: { min: 10000, max: 30000 }
    },
    placement: {
      percentage: 80,
      topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL"],
      averagePackage: "5.5 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HCL"],
      avgSalary: 550000
    },
    ranking: {
      nirf: 55,
      outlook: 58,
      theWeek: 54
    },
    courses: ["Engineering", "Pharmacy", "Management", "Science", "Law", "Architecture", "Arts"],
    facilities: ["Digital Library", "Innovation Center", "Sports Complex", "Hostels", "Cafeteria", "Labs"],
    admissionCriteria: ["JEE Mains", "VSAT", "GPAT", "CAT/MAT"],
    researchAreas: ["Advanced Materials", "AI & ML", "IoT", "Pharmaceutical Sciences", "Sustainable Engineering"],
    entranceExams: ["VSAT", "JEE Mains", "GPAT", "CAT/MAT"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 with PCM for engineering. Different criteria for other programs.",
      process: "Entrance test followed by counseling.",
      deadlines: "Applications open from January to April."
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to 100% tuition fee waiver",
        eligibility: "Based on JEE Main/VSAT rank"
      },
      {
        name: "Economically Backward Scholarship",
        amount: "Up to 50% fee waiver",
        eligibility: "For financially challenged meritorious students"
      }
    ]
  },
  {
    id: "srm-university-ap",
    stateId: "andhra-pradesh",
    name: "SRM University AP",
    type: "Private",
    description: "A new-age university with international collaborations, focusing on research, innovation, and entrepreneurship.",
    rating: 4.7,
    imageUrl: "https://srmap.edu.in/wp-content/uploads/2023/03/SRM-AP-logo-1.png",
    location: {
      city: "Amaravati",
      state: "Andhra Pradesh",
      address: "Neerukonda, Mangalagiri, Guntur, Andhra Pradesh 522240"
    },
    fees: {
      tuition: { min: 150000, max: 350000 },
      hostel: { min: 80000, max: 150000 },
      other: { min: 20000, max: 50000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Amazon", "Microsoft", "Google", "Adobe", "Deloitte", "IBM"],
      averagePackage: "8 LPA",
      topRecruiters: ["Amazon", "Microsoft", "Google", "Adobe", "Deloitte", "IBM"],
      avgSalary: 800000
    },
    ranking: {
      nirf: 40,
      outlook: 36,
      theWeek: 38
    },
    courses: ["Engineering", "Sciences", "Liberal Arts", "Management", "Law", "Design"],
    facilities: ["Next-Gen Library", "Innovation Hub", "Sports Arena", "Premium Hostels", "Food Court", "Advanced Labs"],
    admissionCriteria: ["JEE Main", "SRMJEEE", "SAT", "Management Aptitude Tests"],
    researchAreas: ["AI & Data Science", "Smart Materials", "Clean Energy", "Robotics", "Digital Humanities"],
    entranceExams: ["SRMJEEE", "JEE Main", "SAT", "CAT/XAT"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 with PCM for engineering. Different criteria for other programs.",
      process: "Admission based on entrance exam score followed by counseling.",
      deadlines: "Applications open from November to April."
    },
    scholarships: [
      {
        name: "Founder's Scholarship",
        amount: "100% tuition fee waiver",
        eligibility: "For top 1% in JEE Main/SRMJEEE"
      },
      {
        name: "Academic Excellence Scholarship",
        amount: "Up to 75% tuition fee waiver",
        eligibility: "Based on entrance exam rank and consistent academic performance"
      }
    ]
  },
  {
    id: "rgukt",
    stateId: "andhra-pradesh",
    name: "Rajiv Gandhi University of Knowledge Technologies",
    type: "Government",
    description: "A network of residential technical universities offering integrated programs for rural talent.",
    rating: 4.2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/73/RGUKT_logo.png",
    location: {
      city: "RK Valley",
      state: "Andhra Pradesh",
      address: "Idupulapaya, Kadapa District, Andhra Pradesh 516330"
    },
    fees: {
      tuition: { min: 20000, max: 40000 },
      hostel: { min: 15000, max: 30000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 75,
      topCompanies: ["TCS", "Infosys", "Cognizant", "Wipro", "Tech Mahindra"],
      averagePackage: "5 LPA",
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Wipro", "Tech Mahindra"],
      avgSalary: 500000
    },
    ranking: {
      nirf: 80,
      outlook: 75,
      theWeek: 78
    },
    courses: ["Engineering", "Sciences", "Mathematics", "Pre-University", "Humanities"],
    facilities: ["Digital Library", "Labs", "Sports Facilities", "Residential Campus", "Cafeteria", "Computer Center"],
    admissionCriteria: ["Merit in Class 10 (SSC)"],
    researchAreas: ["Computer Science", "Electronics", "Mechanical Systems", "Mathematics", "Physics"],
    entranceExams: ["Class 10 Merit"],
    admissionDetails: {
      eligibility: "Rural students with top marks in Class 10 from government schools.",
      process: "Direct admission based on SSC marks.",
      deadlines: "Applications open after Class 10 results."
    },
    scholarships: [
      {
        name: "Full Tuition Fee Waiver",
        amount: "Complete fee waiver",
        eligibility: "For economically backward students"
      },
      {
        name: "Merit Scholarship",
        amount: "Rs. 10,000 per annum",
        eligibility: "For top performers in each batch"
      }
    ]
  }
];

// Update state college counts
states.forEach(state => {
  state.collegeCount = colleges.filter(college => college.stateId === state.id).length;
});
