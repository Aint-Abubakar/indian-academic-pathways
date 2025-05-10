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
    collegeCount: 0
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
