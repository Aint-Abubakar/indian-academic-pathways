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
  fees: {
    tuition: { min: number; max: number };
    hostel: { min: number; max: number };
    other: { min: number; max: number };
  };
  placement: {
    percentage: number;
    topCompanies: string[];
    averagePackage: string;
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
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 45000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Google", "Microsoft", "Amazon", "Goldman Sachs"],
      averagePackage: "20 LPA"
    },
    ranking: {
      nirf: 3,
      outlook: 2,
      theWeek: 2
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemistry", "Physics"],
    facilities: ["Library", "Sports Complex", "Swimming Pool", "Gym", "Auditorium", "Medical Center"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Artificial Intelligence", "Nanotechnology", "Renewable Energy", "Urban Infrastructure", "Biomedical Engineering"]
  },
  {
    id: "st-xaviers-mumbai",
    stateId: "maharashtra",
    name: "St. Xavier's College, Mumbai",
    type: "Private",
    description: "A historic college known for its excellence in arts, science, and commerce programs with a focus on holistic education.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/St._Xavier%27s_College%2C_Mumbai_logo.png",
    fees: {
      tuition: { min: 25000, max: 90000 },
      hostel: { min: 60000, max: 120000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 80,
      topCompanies: ["Deloitte", "TCS", "KPMG", "J.P. Morgan"],
      averagePackage: "7 LPA"
    },
    ranking: {
      nirf: 28,
      outlook: 22,
      theWeek: 25
    },
    courses: ["Arts", "Science", "Commerce", "Management", "Mass Media", "Information Technology"],
    facilities: ["Library", "Auditorium", "Cafeteria", "Sports Ground", "Research Labs", "Computer Center"],
    admissionCriteria: ["Class 12 Merit", "Entrance Exam (for some courses)"],
    researchAreas: ["Literature", "Environmental Science", "Economics", "Sociology", "Microbiology"]
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
    fees: {
      tuition: { min: 15000, max: 50000 },
      hostel: { min: 18000, max: 60000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Deloitte", "EY", "Amazon", "HUL", "Infosys"],
      averagePackage: "8 LPA"
    },
    ranking: {
      nirf: 12,
      outlook: 8,
      theWeek: 10
    },
    courses: ["Arts", "Commerce", "Science", "Law", "Management", "Languages", "Education"],
    facilities: ["Libraries", "Sports Complex", "Medical Facility", "Computer Labs", "Auditorium", "Cafeteria"],
    admissionCriteria: ["Cut-off Marks", "Entrance Tests (for some courses)"],
    researchAreas: ["Humanities", "Social Sciences", "Sciences", "Commerce", "Management"]
  },
  {
    id: "iit-delhi",
    stateId: "delhi",
    name: "Indian Institute of Technology, Delhi",
    type: "Government",
    description: "A world-class engineering institution known for its cutting-edge research and innovation in technology and sciences.",
    rating: 4.9,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 50000 },
      other: { min: 10000, max: 30000 }
    },
    placement: {
      percentage: 98,
      topCompanies: ["Google", "Microsoft", "Apple", "Intel", "Qualcomm"],
      averagePackage: "22 LPA"
    },
    ranking: {
      nirf: 2,
      outlook: 3,
      theWeek: 2
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Biotechnology", "Physics"],
    facilities: ["Research Labs", "Innovation Hub", "Sports Complex", "Auditorium", "Library", "Computer Center"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Robotics", "Sustainable Energy", "Nanotechnology"]
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
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 40000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 97,
      topCompanies: ["Microsoft", "Google", "Apple", "Qualcomm", "Intel"],
      averagePackage: "21.5 LPA"
    },
    ranking: {
      nirf: 1,
      outlook: 1,
      theWeek: 1
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Aerospace Engineering", "Physics", "Chemistry"],
    facilities: ["Research Park", "Central Library", "Sports Complex", "Swimming Pool", "Innovation Hub", "Healthcare Center"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["AI & Data Science", "Quantum Computing", "Ocean Engineering", "Biomedical Technology", "Energy Systems"]
  },
  {
    id: "anna-university",
    stateId: "tamil-nadu",
    name: "Anna University",
    type: "Government",
    description: "Premier technical university offering quality education in engineering and technology across Tamil Nadu.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/87/Anna_University_Logo.svg",
    fees: {
      tuition: { min: 40000, max: 90000 },
      hostel: { min: 25000, max: 60000 },
      other: { min: 5000, max: 20000 }
    },
    placement: {
      percentage: 80,
      topCompanies: ["TCS", "Infosys", "Wipro", "HCL", "L&T"],
      averagePackage: "6.5 LPA"
    },
    ranking: {
      nirf: 15,
      outlook: 18,
      theWeek: 16
    },
    courses: ["Civil Engineering", "Computer Science", "Electrical Engineering", "Mechanical Engineering", "Information Technology", "Electronics"],
    facilities: ["Central Library", "Sports Complex", "Laboratories", "Hostels", "Medical Center", "Canteen"],
    admissionCriteria: ["TNEA Counselling", "TANCA (for PG)"],
    researchAreas: ["Water Resources", "Smart Cities", "Power Systems", "Materials Engineering", "Computer Vision"]
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
    fees: {
      tuition: { min: 25000, max: 75000 },
      hostel: { min: 24000, max: 50000 },
      other: { min: 10000, max: 30000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Google", "Intel", "IBM Research", "ISRO", "DRDO"],
      averagePackage: "18 LPA"
    },
    ranking: {
      nirf: 1,
      outlook: 1,
      theWeek: 1
    },
    courses: ["Engineering", "Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Materials Research"],
    facilities: ["Research Centers", "Advanced Labs", "Library", "Sports Complex", "Health Center", "Innovation Hub"],
    admissionCriteria: ["GATE", "NET", "JAM", "IISc Entrance Exam"],
    researchAreas: ["Quantum Technology", "Climate Science", "Artificial Intelligence", "Nanoscience", "Aerospace Engineering"]
  },
  {
    id: "manipal-academy",
    stateId: "karnataka",
    name: "Manipal Academy of Higher Education",
    type: "Private",
    description: "A leading private university known for its medical, engineering, and management programs with international collaborations.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b8/Manipal_Academy_of_Higher_Education_logo.png",
    fees: {
      tuition: { min: 300000, max: 1500000 },
      hostel: { min: 100000, max: 200000 },
      other: { min: 25000, max: 75000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["Amazon", "Microsoft", "Deloitte", "Apollo Hospitals", "Infosys"],
      averagePackage: "10 LPA"
    },
    ranking: {
      nirf: 7,
      outlook: 6,
      theWeek: 8
    },
    courses: ["Medicine", "Engineering", "Management", "Pharmacy", "Allied Health", "Architecture", "Communications"],
    facilities: ["Libraries", "Innovation Center", "Sports Complex", "Swimming Pool", "Medical Museum", "Simulation Labs"],
    admissionCriteria: ["MET (Manipal Entrance Test)", "NEET (for Medical)", "JEE (for Engineering)"],
    researchAreas: ["Healthcare", "Technology", "Humanities", "Management", "Sciences"]
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
    fees: {
      tuition: { min: 5000, max: 20000 },
      hostel: { min: 12000, max: 24000 },
      other: { min: 3000, max: 8000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["TCS", "Infosys", "CTS", "Deloitte", "IBM"],
      averagePackage: "7 LPA"
    },
    ranking: {
      nirf: 13,
      outlook: 14,
      theWeek: 12
    },
    courses: ["Engineering", "Arts", "Science", "Architecture", "Pharmacy", "Film Studies"],
    facilities: ["Central Library", "Laboratories", "Workshops", "Sports Ground", "Cafeteria", "Seminar Halls"],
    admissionCriteria: ["WBJEE (for Engineering)", "Merit-based (for Arts & Science)"],
    researchAreas: ["Engineering Sciences", "Humanities", "Physical Sciences", "Life Sciences", "Interdisciplinary Research"]
  },
  {
    id: "presidency-university",
    stateId: "west-bengal",
    name: "Presidency University",
    type: "Government",
    description: "One of the oldest educational institutions in India with a rich heritage and excellence in liberal arts and sciences.",
    rating: 4.4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/79/Presidency_University%2C_Kolkata_Logo.png",
    fees: {
      tuition: { min: 4000, max: 15000 },
      hostel: { min: 15000, max: 25000 },
      other: { min: 2000, max: 5000 }
    },
    placement: {
      percentage: 70,
      topCompanies: ["TCS", "Wipro", "Cognizant", "Deloitte", "Tech Mahindra"],
      averagePackage: "5.5 LPA"
    },
    ranking: {
      nirf: 25,
      outlook: 22,
      theWeek: 24
    },
    courses: ["Physics", "Chemistry", "Mathematics", "Economics", "History", "Political Science", "Sociology", "Life Sciences"],
    facilities: ["Baker Laboratory", "Central Library", "Auditorium", "Computer Labs", "Canteen", "Sports Facilities"],
    admissionCriteria: ["Entrance Examination", "Merit-based Selection"],
    researchAreas: ["Theoretical Physics", "Molecular Biology", "Economic Theory", "Historical Studies", "Environmental Science"]
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
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 45000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 95,
      topCompanies: ["Microsoft", "Google", "Samsung", "Adobe", "Qualcomm"],
      averagePackage: "20 LPA"
    },
    ranking: {
      nirf: 4,
      outlook: 5,
      theWeek: 4
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Aerospace Engineering", "Materials Science", "Chemistry"],
    facilities: ["P.K. Kelkar Library", "Advanced Labs", "Sports Complex", "Aviation Field", "Health Center", "Innovation Hub"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Artificial Intelligence", "Advanced Materials", "Space Technology", "Quantum Computing", "Robotics"]
  },
  {
    id: "bhu-varanasi",
    stateId: "uttar-pradesh",
    name: "Banaras Hindu University",
    type: "Government",
    description: "One of the largest residential universities in Asia, offering diverse programs across arts, sciences, engineering, and medicine.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/Banaras_Hindu_University_seal.svg",
    fees: {
      tuition: { min: 10000, max: 80000 },
      hostel: { min: 10000, max: 35000 },
      other: { min: 5000, max: 20000 }
    },
    placement: {
      percentage: 75,
      topCompanies: ["TCS", "Infosys", "DRDO", "HCL", "Wipro"],
      averagePackage: "7 LPA"
    },
    ranking: {
      nirf: 10,
      outlook: 12,
      theWeek: 11
    },
    courses: ["Arts", "Science", "Engineering", "Medicine", "Agriculture", "Management", "Law", "Fine Arts"],
    facilities: ["Central Library", "Laboratories", "Museums", "Sports Complex", "Hospital", "Auditorium"],
    admissionCriteria: ["UET (Undergraduate Entrance Test)", "PET (Postgraduate Entrance Test)"],
    researchAreas: ["Indian Culture", "Agricultural Sciences", "Medical Research", "Engineering", "Environmental Studies"]
  },
  
  // Gujarat
  {
    id: "iit-gandhinagar",
    stateId: "gujarat",
    name: "Indian Institute of Technology, Gandhinagar",
    type: "Government",
    description: "A new generation IIT focused on innovative curriculum, interdisciplinary research, and global exposure for students.",
    rating: 4.6,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/Indian_Institute_of_Technology_Gandhinagar_Logo.svg",
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 40000 },
      other: { min: 10000, max: 25000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Amazon", "Microsoft", "Goldman Sachs", "Shell", "American Express"],
      averagePackage: "18 LPA"
    },
    ranking: {
      nirf: 8,
      outlook: 9,
      theWeek: 10
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Chemical Engineering", "Materials Science", "Cognitive Science"],
    facilities: ["R&D Centers", "Modern Library", "Sports Complex", "Innovation Lab", "Center for Creative Learning", "Maker Space"],
    admissionCriteria: ["JEE Advanced", "GATE (for PG)"],
    researchAreas: ["Humanities & Social Sciences", "Materials", "Water", "Safety", "Heritage Science"]
  },
  {
    id: "nirma-university",
    stateId: "gujarat",
    name: "Nirma University",
    type: "Private",
    description: "A leading private university known for its quality education in engineering, management, law, and pharmaceutical sciences.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/89/Nirma_University_Logo.svg",
    fees: {
      tuition: { min: 100000, max: 300000 },
      hostel: { min: 60000, max: 120000 },
      other: { min: 15000, max: 35000 }
    },
    placement: {
      percentage: 85,
      topCompanies: ["TCS", "Infosys", "L&T", "Zydus Cadila", "HDFC Bank"],
      averagePackage: "8 LPA"
    },
    ranking: {
      nirf: 35,
      outlook: 32,
      theWeek: 30
    },
    courses: ["Engineering", "Management", "Law", "Pharmacy", "Architecture", "Commerce", "Science"],
    facilities: ["Libraries", "Labs", "Sports Complex", "Auditorium", "Wi-Fi Campus", "Hostels"],
    admissionCriteria: ["JEE Main", "NATA", "CLAT", "CAT", "GPAT", "Nirma University Entrance Test"],
    researchAreas: ["Renewable Energy", "Drug Design", "Corporate Law", "Business Analytics", "Manufacturing Technology"]
  },
  
  // Kerala
  {
    id: "nit-calicut",
    stateId: "kerala",
    name: "National Institute of Technology, Calicut",
    type: "Government",
    description: "One of the premier technical institutions in India offering programs in engineering, technology and science.",
    rating: 4.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/NIT_Calicut_Logo.svg",
    fees: {
      tuition: { min: 125000, max: 200000 },
      hostel: { min: 16000, max: 40000 },
      other: { min: 8000, max: 20000 }
    },
    placement: {
      percentage: 90,
      topCompanies: ["Microsoft", "Amazon", "Samsung", "Oracle", "L&T"],
      averagePackage: "12 LPA"
    },
    ranking: {
      nirf: 23,
      outlook: 25,
      theWeek: 24
    },
    courses: ["Civil Engineering", "Computer Science", "Electrical Engineering", "Electronics", "Mechanical Engineering", "Architecture"],
    facilities: ["Central Library", "Computer Center", "Laboratories", "Hostels", "Health Center", "Sports Facilities"],
    admissionCriteria: ["JEE Main", "GATE (for PG)"],
    researchAreas: ["Smart Materials", "Power Systems", "Computer Vision", "Structural Engineering", "VLSI Design"]
  },
  {
    id: "cusat",
    stateId: "kerala",
    name: "Cochin University of Science and Technology",
    type: "Government",
    description: "A leading science and technology university focusing on research and higher education in marine sciences, engineering, and technology.",
    rating: 4.3,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/40/Cochin_University_of_Science_and_Technology_Logo.svg",
    fees: {
      tuition: { min: 25000, max: 100000 },
      hostel: { min: 15000, max: 35000 },
      other: { min: 5000, max: 15000 }
    },
    placement: {
      percentage: 75,
      topCompanies: ["TCS", "Infosys", "UST Global", "IBS", "Ernst & Young"],
      averagePackage: "7.5 LPA"
    },
    ranking: {
      nirf: 40,
      outlook: 38,
      theWeek: 42
    },
    courses: ["Marine Engineering", "Computer Science", "Electronics", "Marine Biology", "Environmental Studies", "Ship Technology"],
    facilities: ["Central Library", "Laboratories", "Computer Center", "Sports Facilities", "Hostels", "Cafeteria"],
    admissionCriteria: ["CAT (Common Admission Test by CUSAT)", "GATE (for PG)"],
    researchAreas: ["Marine Sciences", "Photonics", "Atmospheric Sciences", "Polymer Science", "Environmental Engineering"]
  }
];

export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

// Function to get colleges by state ID
export const getCollegesByState = (stateId: string): College[] => {
  return colleges.filter(college => college.stateId === stateId);
};

// Function to get college by ID
export const getCollegeById = (stateId: string, collegeId: string): College | undefined => {
  return colleges.find(college => college.stateId === stateId && college.id === collegeId);
};
