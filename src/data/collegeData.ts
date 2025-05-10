
export interface College {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  type: string;
  address: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  courses: string[];
  placement: {
    percentage: number;
    averagePackage: string;
    avgSalary?: number;
    topRecruiters: string[];
  };
  facilities: string[];
  fees: {
    tuition: {
      min: number;
      max: number;
    };
    hostel?: {
      min: number;
      max: number;
    };
  };
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

export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

export const getCollegeById = (collegeId: string, stateId?: string): College | undefined => {
  if (stateId) {
    const colleges = getCollegesByState(stateId);
    return colleges.find(college => college.id === collegeId);
  } else {
    // Search in all states if stateId is not provided
    for (const state of states) {
      const colleges = getCollegesByState(state.id);
      const college = colleges.find(c => c.id === collegeId);
      if (college) return college;
    }
    return undefined;
  }
};

// Add colleges for Andhra Pradesh
const andhraPradeshColleges: College[] = [
  {
    id: "iit-tirupati",
    name: "Indian Institute of Technology Tirupati",
    description: "IIT Tirupati is one of the new IITs established by the Government of India, known for its excellent engineering and technology programs.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.7,
    type: "Government",
    address: "Yerpedu – Venkatagiri Road, Yerpedu Post, Chittoor District, Andhra Pradesh - 517619",
    location: {
      address: "Yerpedu – Venkatagiri Road, Yerpedu Post, Chittoor District",
      city: "Tirupati",
      state: "Andhra Pradesh"
    },
    contact: {
      phone: "+91-877-2500337",
      email: "info@iittp.ac.in",
      website: "https://www.iittp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    placement: {
      percentage: 95,
      averagePackage: "12 LPA",
      avgSalary: 1200000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Intel"]
    },
    facilities: ["Library", "Sports Complex", "Computer Labs", "Hostel", "Cafeteria"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank required for B.Tech, GATE score for M.Tech, and research aptitude for Ph.D",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "Applications open in April and close in May each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Top 10% of students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  },
  {
    id: "andhra-university",
    name: "Andhra University",
    description: "Andhra University is one of the oldest and most prestigious universities in India, offering a wide range of programs across disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.3,
    type: "Government",
    address: "Andhra University, Visakhapatnam, Andhra Pradesh - 530003",
    location: {
      address: "Andhra University Campus",
      city: "Visakhapatnam",
      state: "Andhra Pradesh"
    },
    contact: {
      phone: "+91-891-2844000",
      email: "registrar@andhrauniversity.edu.in",
      website: "https://www.andhrauniversity.edu.in/"
    },
    courses: ["Engineering", "Science", "Arts", "Commerce", "Management", "Law", "Pharmacy"],
    placement: {
      percentage: 80,
      averagePackage: "6 LPA",
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL"]
    },
    facilities: ["Central Library", "Sports Fields", "Laboratories", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 30000,
        max: 100000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["EAPCET", "ICET", "PGCET"],
    admissionDetails: {
      eligibility: "Varies by program; generally requires qualifying exam scores",
      process: "Entrance exam followed by counseling",
      deadlines: "Applications typically open in March each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Rs. 10,000 per year",
        eligibility: "Top 5% in entrance exam"
      },
      {
        name: "Sports Scholarship",
        amount: "Rs. 15,000 per year",
        eligibility: "State/National level sports achievers"
      }
    ]
  },
  {
    id: "sri-venkateswara-university",
    name: "Sri Venkateswara University",
    description: "Sri Venkateswara University is a public state university known for its quality education and research across various disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.1,
    type: "Government",
    address: "Sri Venkateswara University, Tirupati, Andhra Pradesh - 517502",
    location: {
      address: "Sri Venkateswara University Campus",
      city: "Tirupati",
      state: "Andhra Pradesh"
    },
    contact: {
      phone: "+91-877-2289896",
      email: "registrar@svuniversity.edu.in",
      website: "https://www.svuniversity.edu.in/"
    },
    courses: ["Arts", "Science", "Commerce", "Engineering", "Management", "Law"],
    placement: {
      percentage: 75,
      averagePackage: "5.5 LPA",
      avgSalary: 550000,
      topRecruiters: ["Infosys", "Wipro", "TCS", "Cognizant"]
    },
    facilities: ["Library", "Labs", "Hostels", "Auditorium", "Sports Complex"],
    fees: {
      tuition: {
        min: 25000,
        max: 80000
      },
      hostel: {
        min: 12000,
        max: 20000
      }
    },
    entranceExams: ["SVUCET", "APRCET"],
    admissionDetails: {
      eligibility: "Bachelor's degree with minimum 50% marks for PG programs",
      process: "University entrance exam followed by counseling",
      deadlines: "Applications typically open in April-May each year"
    },
    scholarships: [
      {
        name: "University Scholarship",
        amount: "Rs. 8,000 per year",
        eligibility: "Merit-based"
      },
      {
        name: "Research Scholarship",
        amount: "Rs. 12,000 per month",
        eligibility: "Ph.D scholars with qualifying exam"
      }
    ]
  },
  {
    id: "gitam-university",
    name: "GITAM University",
    description: "GITAM (Gandhi Institute of Technology and Management) is a private university known for its engineering and management programs.",
    imageUrl: "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df",
    rating: 4.4,
    type: "Private",
    address: "GITAM University, Visakhapatnam, Andhra Pradesh - 530045",
    location: {
      address: "GITAM Campus, Rushikonda",
      city: "Visakhapatnam",
      state: "Andhra Pradesh"
    },
    contact: {
      phone: "+91-891-2840501",
      email: "info@gitam.edu",
      website: "https://www.gitam.edu/"
    },
    courses: ["Engineering", "Management", "Pharmacy", "Science", "Architecture", "Law"],
    placement: {
      percentage: 85,
      averagePackage: "7 LPA",
      avgSalary: 700000,
      topRecruiters: ["Microsoft", "Amazon", "IBM", "Oracle"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Cafeterias", "Wi-Fi Campus"],
    fees: {
      tuition: {
        min: 100000,
        max: 300000
      },
      hostel: {
        min: 60000,
        max: 120000
      }
    },
    entranceExams: ["GAT", "GMAT", "CAT"],
    admissionDetails: {
      eligibility: "Varies by program; Engineering requires JEE/GAT scores",
      process: "Entrance test followed by GD/PI for some programs",
      deadlines: "Applications open in January and close in April"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "10-50% tuition fee waiver",
        eligibility: "Based on entrance exam performance"
      },
      {
        name: "Sports Excellence Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "National/International sports achievers"
      }
    ]
  },
  {
    id: "iiit-sri-city",
    name: "IIIT Sri City",
    description: "Indian Institute of Information Technology, Sri City focuses on information technology education and research.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    rating: 4.2,
    type: "Government",
    address: "IIIT Sri City, Chittoor District, Andhra Pradesh - 517646",
    location: {
      address: "IIIT Campus, Sri City",
      city: "Chittoor",
      state: "Andhra Pradesh"
    },
    contact: {
      phone: "+91-7670908899",
      email: "info@iiits.ac.in",
      website: "https://www.iiits.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    placement: {
      percentage: 90,
      averagePackage: "10 LPA",
      avgSalary: 1000000,
      topRecruiters: ["Google", "Amazon", "Oracle", "SAP"]
    },
    facilities: ["Library", "Computer Labs", "Sports Facilities", "Hostels", "Cafeteria"],
    fees: {
      tuition: {
        min: 175000,
        max: 225000
      },
      hostel: {
        min: 25000,
        max: 35000
      }
    },
    entranceExams: ["JEE Main", "GATE"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA/CSAB for B.Tech",
      deadlines: "As per JOSAA/CSAB schedule"
    },
    scholarships: [
      {
        name: "AICTE Scholarship",
        amount: "Rs. 50,000 per year",
        eligibility: "Based on JEE rank"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      }
    ]
  }
];

// Add colleges for Karnataka
const karnatakaColleges: College[] = [
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science, Bangalore",
    description: "IISc is India's premier research institute known for its cutting-edge research in science and engineering.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.9,
    type: "Government",
    address: "CV Raman Road, Bengaluru, Karnataka - 560012",
    location: {
      address: "CV Raman Road",
      city: "Bengaluru",
      state: "Karnataka"
    },
    contact: {
      phone: "+91-80-2293-2228",
      email: "office@iisc.ac.in",
      website: "https://www.iisc.ac.in/"
    },
    courses: ["BSc Research", "MTech", "PhD", "MSc Engineering"],
    placement: {
      percentage: 98,
      averagePackage: "18 LPA",
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Intel", "ISRO", "DRDO"]
    },
    facilities: ["Advanced Research Labs", "Library", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 25000,
        max: 50000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["KVPY", "IISc Entrance Exam", "GATE"],
    admissionDetails: {
      eligibility: "Top ranks in national entrance examinations",
      process: "Written test followed by interview",
      deadlines: "Applications open in January each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full Tuition Fee Waiver + Stipend",
        eligibility: "Based on academic performance"
      },
      {
        name: "Research Fellowship",
        amount: "₹31,000 per month",
        eligibility: "PhD scholars"
      }
    ]
  },
  {
    id: "rvce-bangalore",
    name: "RV College of Engineering",
    description: "RVCE is one of the oldest and most prestigious self-financing engineering institutions in India.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.5,
    type: "Private",
    address: "Mysore Road, Bengaluru, Karnataka - 560059",
    location: {
      address: "Mysore Road",
      city: "Bengaluru",
      state: "Karnataka"
    },
    contact: {
      phone: "+91-80-6717-8021",
      email: "principal@rvce.edu.in",
      website: "https://www.rvce.edu.in/"
    },
    courses: ["B.E", "M.Tech", "MBA", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "12 LPA",
      avgSalary: 1200000,
      topRecruiters: ["Amazon", "Flipkart", "IBM", "Infosys", "TCS"]
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Cafeterias", "Auditorium"],
    fees: {
      tuition: {
        min: 100000,
        max: 200000
      },
      hostel: {
        min: 60000,
        max: 85000
      }
    },
    entranceExams: ["KCET", "COMEDK"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 with PCM",
      process: "Merit-based admission through state entrance exams",
      deadlines: "Applications close in May each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "25% tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Sports Excellence Scholarship",
        amount: "50% fee waiver",
        eligibility: "National/State level sports achievers"
      }
    ]
  }
];

// Add colleges for Maharashtra
const maharashtraColleges: College[] = [
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    description: "IIT Bombay is recognized worldwide as a leader in engineering education and research.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.8,
    type: "Government",
    address: "Powai, Mumbai, Maharashtra - 400076",
    location: {
      address: "Powai",
      city: "Mumbai",
      state: "Maharashtra"
    },
    contact: {
      phone: "+91-22-2576-7901",
      email: "registrar@iitb.ac.in",
      website: "https://www.iitb.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
    placement: {
      percentage: 97,
      averagePackage: "16.5 LPA",
      avgSalary: 1650000,
      topRecruiters: ["Microsoft", "Google", "Qualcomm", "Apple", "Intel"]
    },
    facilities: ["Central Library", "Sports Complex", "Research Labs", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Advanced rank required for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver + Stipend",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Freeship",
        amount: "Full or Partial Fee Waiver",
        eligibility: "Economically weaker section students"
      }
    ]
  },
  {
    id: "coep-pune",
    name: "College of Engineering, Pune",
    description: "COEP is one of the oldest engineering colleges in Asia, established in 1854.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.6,
    type: "Government",
    address: "Wellesley Road, Shivajinagar, Pune, Maharashtra - 411005",
    location: {
      address: "Wellesley Road, Shivajinagar",
      city: "Pune",
      state: "Maharashtra"
    },
    contact: {
      phone: "+91-20-2550-7000",
      email: "director@coep.ac.in",
      website: "https://www.coep.org.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD"],
    placement: {
      percentage: 92,
      averagePackage: "10 LPA",
      avgSalary: 1000000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Mercedes-Benz", "John Deere"]
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Auditorium", "Boat Club"],
    fees: {
      tuition: {
        min: 50000,
        max: 100000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["MHT-CET", "JEE Main"],
    admissionDetails: {
      eligibility: "Minimum 50% in 10+2 with PCM",
      process: "State-level entrance exam followed by counseling",
      deadlines: "Applications close in May each year"
    },
    scholarships: [
      {
        name: "Government Scholarship",
        amount: "As per government norms",
        eligibility: "Reserved category students"
      },
      {
        name: "TEQIP Scholarship",
        amount: "₹10,000 per month",
        eligibility: "M.Tech and PhD students"
      }
    ]
  }
];

// Add colleges for Tamil Nadu
const tamilNaduColleges: College[] = [
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    description: "IIT Madras is known for its academic excellence and innovative research, ranked #1 in India for engineering education.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.9,
    type: "Government",
    address: "IIT P.O., Chennai, Tamil Nadu - 600036",
    location: {
      address: "IIT P.O.",
      city: "Chennai",
      state: "Tamil Nadu"
    },
    contact: {
      phone: "+91-44-2257-8100",
      email: "registrar@iitm.ac.in",
      website: "https://www.iitm.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "BSc", "PhD", "MBA"],
    placement: {
      percentage: 98,
      averagePackage: "17 LPA",
      avgSalary: 1700000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Qualcomm", "Intel"]
    },
    facilities: ["Central Library", "Research Park", "Sports Complex", "Swimming Pool", "Hostels"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA/CCMT schedule"
    },
    scholarships: [
      {
        name: "Institute Merit Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  },
  {
    id: "psg-tech-coimbatore",
    name: "PSG College of Technology",
    description: "PSG Tech is one of the oldest and most reputed engineering institutions in Tamil Nadu with strong industry connections.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.5,
    type: "Private Aided",
    address: "Peelamedu, Coimbatore, Tamil Nadu - 641004",
    location: {
      address: "Peelamedu",
      city: "Coimbatore",
      state: "Tamil Nadu"
    },
    contact: {
      phone: "+91-422-257-2177",
      email: "principal@psgtech.edu",
      website: "https://www.psgtech.edu/"
    },
    courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MCA", "MBA"],
    placement: {
      percentage: 90,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "CTS", "HCL", "Amazon"]
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Cafeterias", "Entrepreneurship Cell"],
    fees: {
      tuition: {
        min: 75000,
        max: 150000
      },
      hostel: {
        min: 40000,
        max: 60000
      }
    },
    entranceExams: ["TNEA", "TANCET"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 with PCM",
      process: "Merit-based through state counseling",
      deadlines: "Applications close in April-May each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "25% tuition fee waiver",
        eligibility: "Top performers"
      },
      {
        name: "Sports Scholarship",
        amount: "Partial fee waiver",
        eligibility: "State/National level sports achievers"
      }
    ]
  }
];

// Add colleges for Uttar Pradesh
const uttarPradeshColleges: College[] = [
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    description: "IIT Kanpur is renowned for its rigorous academic programs and distinguished faculty.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.8,
    type: "Government",
    address: "Kalyanpur, Kanpur, Uttar Pradesh - 208016",
    location: {
      address: "Kalyanpur",
      city: "Kanpur",
      state: "Uttar Pradesh"
    },
    contact: {
      phone: "+91-512-259-7220",
      email: "registrar@iitk.ac.in",
      website: "https://www.iitk.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MS", "PhD", "MBA"],
    placement: {
      percentage: 95,
      averagePackage: "15 LPA",
      avgSalary: 1500000,
      topRecruiters: ["Google", "Microsoft", "Goldman Sachs", "Uber", "Samsung"]
    },
    facilities: ["P.K. Kelkar Library", "Swimming Pool", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Academic Excellence Award",
        amount: "₹10,000 per semester",
        eligibility: "Top 5% students"
      }
    ]
  },
  {
    id: "bhu-varanasi",
    name: "Banaras Hindu University (BHU)",
    description: "BHU is one of the largest residential universities in Asia with diverse programs in engineering, sciences, and arts.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.6,
    type: "Government",
    address: "Varanasi, Uttar Pradesh - 221005",
    location: {
      address: "BHU Campus",
      city: "Varanasi",
      state: "Uttar Pradesh"
    },
    contact: {
      phone: "+91-542-236-8108",
      email: "registrar@bhu.ac.in",
      website: "https://www.bhu.ac.in/"
    },
    courses: ["B.Tech", "B.Sc", "M.Tech", "M.Sc", "PhD", "MBBS"],
    placement: {
      percentage: 85,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "NTPC", "ONGC", "DRDO"]
    },
    facilities: ["Central Library", "Sports Complex", "Swimming Pool", "Hostels", "Hospital"],
    fees: {
      tuition: {
        min: 30000,
        max: 80000
      },
      hostel: {
        min: 10000,
        max: 20000
      }
    },
    entranceExams: ["JEE Main", "UET", "PET"],
    admissionDetails: {
      eligibility: "Minimum 60% in qualifying examination",
      process: "University entrance test followed by counseling",
      deadlines: "Applications open in February each year"
    },
    scholarships: [
      {
        name: "Central Sector Scholarship",
        amount: "As per government norms",
        eligibility: "Based on merit and category"
      },
      {
        name: "BHU Foundation Scholarship",
        amount: "₹10,000 per annum",
        eligibility: "Meritorious students with financial constraints"
      }
    ]
  }
];

// Add colleges for West Bengal
const westBengalColleges: College[] = [
  {
    id: "iit-kharagpur",
    name: "Indian Institute of Technology Kharagpur",
    description: "IIT Kharagpur is the first IIT established in India with a strong emphasis on research and innovation.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.8,
    type: "Government",
    address: "Kharagpur, West Bengal - 721302",
    location: {
      address: "IIT Kharagpur",
      city: "Kharagpur",
      state: "West Bengal"
    },
    contact: {
      phone: "+91-3222-255221",
      email: "registrar@iitkgp.ac.in",
      website: "https://www.iitkgp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MBA", "Law"],
    placement: {
      percentage: 95,
      averagePackage: "16 LPA",
      avgSalary: 1600000,
      topRecruiters: ["Microsoft", "Google", "Apple", "Qualcomm", "Oracle"]
    },
    facilities: ["Central Library", "Sports Complex", "Swimming Pool", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per semester",
        eligibility: "Top 10% students in each branch"
      }
    ]
  },
  {
    id: "jadavpur-university",
    name: "Jadavpur University",
    description: "Jadavpur University is a premier public state university known for its engineering and arts faculties.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.5,
    type: "Government",
    address: "188, Raja S.C. Mallick Road, Kolkata, West Bengal - 700032",
    location: {
      address: "188, Raja S.C. Mallick Road",
      city: "Kolkata",
      state: "West Bengal"
    },
    contact: {
      phone: "+91-33-2414-6666",
      email: "registrar@jadavpuruniversity.in",
      website: "http://www.jaduniv.edu.in/"
    },
    courses: ["B.E", "B.Tech", "B.A", "B.Sc", "M.E", "M.Tech", "M.A", "M.Sc", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["TCS", "CTS", "Infosys", "IBM", "Wipro"]
    },
    facilities: ["Central Library", "Laboratories", "Hostels", "Cafeterias", "Sports Facilities"],
    fees: {
      tuition: {
        min: 20000,
        max: 50000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["WBJEE", "JUEEE", "GATE"],
    admissionDetails: {
      eligibility: "Minimum 60% in qualifying examination",
      process: "Through state entrance examinations and merit-based counseling",
      deadlines: "Applications open in May each year"
    },
    scholarships: [
      {
        name: "State Government Scholarship",
        amount: "As per government norms",
        eligibility: "Merit-based and category-based"
      },
      {
        name: "JU Merit Scholarship",
        amount: "₹5,000 per semester",
        eligibility: "Top performers in each department"
      }
    ]
  }
];

// Add colleges for Delhi
const delhiColleges: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    description: "IIT Delhi is a premier engineering institution known for cutting-edge research and academic excellence.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.9,
    type: "Government",
    address: "Hauz Khas, New Delhi, Delhi - 110016",
    location: {
      address: "Hauz Khas",
      city: "New Delhi",
      state: "Delhi"
    },
    contact: {
      phone: "+91-11-2659-7135",
      email: "registrar@admin.iitd.ac.in",
      website: "https://home.iitd.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MS(R)", "PhD", "MBA"],
    placement: {
      percentage: 98,
      averagePackage: "18 LPA",
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Apple", "Goldman Sachs", "McKinsey"]
    },
    facilities: ["Central Library", "Sports Complex", "Swimming Pool", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Director's Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top 5% students in each program"
      }
    ]
  },
  {
    id: "delhi-university",
    name: "University of Delhi",
    description: "University of Delhi is a premier university offering diverse undergraduate and postgraduate programs.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.6,
    type: "Government",
    address: "Benito Juarez Road, New Delhi, Delhi - 110021",
    location: {
      address: "Benito Juarez Road",
      city: "New Delhi",
      state: "Delhi"
    },
    contact: {
      phone: "+91-11-2766-7725",
      email: "registrar@du.ac.in",
      website: "http://www.du.ac.in/"
    },
    courses: ["BA", "BSc", "BCom", "MA", "MSc", "MCom", "PhD", "LLB"],
    placement: {
      percentage: 80,
      averagePackage: "7 LPA",
      avgSalary: 700000,
      topRecruiters: ["Deloitte", "E&Y", "TCS", "Amazon", "KPMG"]
    },
    facilities: ["Libraries", "Laboratories", "Sports Facilities", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 10000,
        max: 50000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["DUET", "CUET", "JAT"],
    admissionDetails: {
      eligibility: "Merit-based or entrance exam-based depending on course",
      process: "Centralized application process followed by college allotment",
      deadlines: "Applications open in June each year"
    },
    scholarships: [
      {
        name: "Vice Chancellor's Scholarship",
        amount: "Full fee waiver",
        eligibility: "Meritorious students"
      },
      {
        name: "Financial Aid Scholarship",
        amount: "Varies based on need",
        eligibility: "Economically weaker section students"
      }
    ]
  }
];

// Add colleges for Telangana
const telanganaColleges: College[] = [
  {
    id: "iit-hyderabad",
    name: "Indian Institute of Technology Hyderabad",
    description: "IIT Hyderabad is known for its innovative curriculum and interdisciplinary research.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.7,
    type: "Government",
    address: "Kandi, Sangareddy District, Telangana - 502285",
    location: {
      address: "Kandi, Sangareddy District",
      city: "Hyderabad",
      state: "Telangana"
    },
    contact: {
      phone: "+91-40-2301-6002",
      email: "registrar@iith.ac.in",
      website: "https://www.iith.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "M.Des", "PhD", "MDes"],
    placement: {
      percentage: 95,
      averagePackage: "15 LPA",
      avgSalary: 1500000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Qualcomm", "DE Shaw"]
    },
    facilities: ["Central Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CEED"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "MCM Scholarship",
        amount: "Full Tuition Fee Waiver + Stipend",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "bits-hyderabad",
    name: "BITS Pilani, Hyderabad Campus",
    description: "BITS Pilani Hyderabad Campus offers high-quality technical education with emphasis on innovation.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.6,
    type: "Private",
    address: "Jawahar Nagar, Kapra Mandal, Medchal District, Telangana - 500078",
    location: {
      address: "Jawahar Nagar, Kapra Mandal, Medchal District",
      city: "Hyderabad",
      state: "Telangana"
    },
    contact: {
      phone: "+91-40-6630-3999",
      email: "registrar@hyderabad.bits-pilani.ac.in",
      website: "https://www.bits-pilani.ac.in/hyderabad/"
    },
    courses: ["B.E", "M.E", "MSc", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "14 LPA",
      avgSalary: 1400000,
      topRecruiters: ["Microsoft", "Amazon", "Goldman Sachs", "Morgan Stanley", "Adobe"]
    },
    facilities: ["Library", "Innovation Center", "Sports Complex", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 350000,
        max: 450000
      },
      hostel: {
        min: 75000,
        max: 100000
      }
    },
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "BITSAT score and 75% in PCM in 12th standard",
      process: "Merit-based admission through BITSAT score",
      deadlines: "Applications open in January each year"
    },
    scholarships: [
      {
        name: "BITS Merit Scholarship",
        amount: "25-100% tuition fee waiver",
        eligibility: "Based on BITSAT score and academic performance"
      },
      {
        name: "BITS Alumni Association Scholarship",
        amount: "₹1,00,000 per year",
        eligibility: "Merit-cum-means"
      }
    ]
  }
];

// Add colleges for Rajasthan
const rajasthanColleges: College[] = [
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    description: "BITS Pilani is one of India's leading institutes of higher education and a deemed university offering degree programs in Engineering, Sciences, and Management.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.7,
    type: "Private",
    address: "Vidya Vihar Campus, Pilani, Rajasthan - 333031",
    location: {
      address: "Vidya Vihar Campus",
      city: "Pilani",
      state: "Rajasthan"
    },
    contact: {
      phone: "+91-1596-242090",
      email: "registrar@pilani.bits-pilani.ac.in",
      website: "https://www.bits-pilani.ac.in/"
    },
    courses: ["B.E", "M.E", "MSc", "MBA", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "15 LPA",
      avgSalary: 1500000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Adobe"]
    },
    facilities: ["Central Library", "Innovation Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 350000,
        max: 450000
      },
      hostel: {
        min: 75000,
        max: 100000
      }
    },
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "BITSAT score and 75% in PCM in 12th standard",
      process: "Merit-based admission through BITSAT score",
      deadlines: "Applications open in January each year"
    },
    scholarships: [
      {
        name: "BITS Merit Scholarship",
        amount: "25-100% tuition fee waiver",
        eligibility: "Based on BITSAT score and academic performance"
      },
      {
        name: "BITS Alumni Association Scholarship",
        amount: "₹1,00,000 per year",
        eligibility: "Merit-cum-means"
      }
    ]
  },
  {
    id: "mnit-jaipur",
    name: "Malaviya National Institute of Technology Jaipur",
    description: "MNIT Jaipur is a premier NIT offering undergraduate and postgraduate programs in engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.4,
    type: "Government",
    address: "JLN Marg, Jaipur, Rajasthan - 302017",
    location: {
      address: "JLN Marg",
      city: "Jaipur",
      state: "Rajasthan"
    },
    contact: {
      phone: "+91-141-252-9087",
      email: "registrar@mnit.ac.in",
      website: "http://www.mnit.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MSc", "MBA", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "9 LPA",
      avgSalary: 900000,
      topRecruiters: ["Amazon", "Microsoft", "Oracle", "TCS", "L&T"]
    },
    facilities: ["Central Library", "Advanced Labs", "Sports Facilities", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 100000,
        max: 125000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["JEE Main", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  }
];

// Add colleges for Kerala
const keralaColleges: College[] = [
  {
    id: "iit-palakkad",
    name: "Indian Institute of Technology Palakkad",
    description: "IIT Palakkad is one of the new IITs focusing on quality technical education and research.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.5,
    type: "Government",
    address: "Ahalia Integrated Campus, Kozhippara, Palakkad, Kerala - 678557",
    location: {
      address: "Ahalia Integrated Campus, Kozhippara",
      city: "Palakkad",
      state: "Kerala"
    },
    contact: {
      phone: "+91-4923-226300",
      email: "registrar@iitpkd.ac.in",
      website: "https://iitpkd.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MS", "PhD"],
    placement: {
      percentage: 90,
      averagePackage: "12 LPA",
      avgSalary: 1200000,
      topRecruiters: ["Amazon", "Microsoft", "Samsung", "Qualcomm", "Intel"]
    },
    facilities: ["Library", "Research Labs", "Sports Facilities", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "cusat",
    name: "Cochin University of Science and Technology",
    description: "CUSAT is a leading university in Kerala offering programs in science, technology, and management.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.3,
    type: "Government",
    address: "University Road, Kochi, Kerala - 682022",
    location: {
      address: "University Road",
      city: "Kochi",
      state: "Kerala"
    },
    contact: {
      phone: "+91-484-2577550",
      email: "registrar@cusat.ac.in",
      website: "https://www.cusat.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "BBA", "MBA", "LLB", "PhD"],
    placement: {
      percentage: 80,
      averagePackage: "6.5 LPA",
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "UST Global", "IBS", "Cognizant"]
    },
    facilities: ["Central Library", "Labs", "Sports Complex", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 30000,
        max: 80000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["KEAM", "CUSAT CAT"],
    admissionDetails: {
      eligibility: "Based on entrance exam rank",
      process: "University-level entrance exam followed by counseling",
      deadlines: "Applications open in February each year"
    },
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "₹10,000 per annum",
        eligibility: "Top 5% students"
      },
      {
        name: "E-Grants",
        amount: "As per government norms",
        eligibility: "SC/ST/OBC students"
      }
    ]
  }
];

// Add colleges for Bihar
const biharColleges: College[] = [
  {
    id: "iit-patna",
    name: "Indian Institute of Technology Patna",
    description: "IIT Patna is known for its excellent academic programs and research facilities in engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.5,
    type: "Government",
    address: "Bihta, Patna, Bihar - 801106",
    location: {
      address: "Bihta",
      city: "Patna",
      state: "Bihar"
    },
    contact: {
      phone: "+91-6115-233697",
      email: "registrar@iitp.ac.in",
      website: "https://www.iitp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MS"],
    placement: {
      percentage: 90,
      averagePackage: "11 LPA",
      avgSalary: 1100000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Intel", "Qualcomm"]
    },
    facilities: ["Central Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "nit-patna",
    name: "National Institute of Technology Patna",
    description: "NIT Patna is one of the oldest engineering colleges offering diverse programs in engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.2,
    type: "Government",
    address: "Ashok Rajpath, Patna, Bihar - 800005",
    location: {
      address: "Ashok Rajpath",
      city: "Patna",
      state: "Bihar"
    },
    contact: {
      phone: "+91-612-2371715",
      email: "registrar@nitp.ac.in",
      website: "http://www.nitp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MCA", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "7 LPA",
      avgSalary: 700000,
      topRecruiters: ["TCS", "Wipro", "Cognizant", "Infosys", "L&T"]
    },
    facilities: ["Central Library", "Labs", "Sports Complex", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 125000,
        max: 150000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["JEE Main", "GATE"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  }
];

// Add colleges for Gujarat
const gujaratColleges: College[] = [
  {
    id: "iit-gandhinagar",
    name: "Indian Institute of Technology Gandhinagar",
    description: "IIT Gandhinagar is known for its innovative curriculum and interdisciplinary approach to education.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.7,
    type: "Government",
    address: "Palaj, Gandhinagar, Gujarat - 382355",
    location: {
      address: "Palaj",
      city: "Gandhinagar",
      state: "Gujarat"
    },
    contact: {
      phone: "+91-79-2395-2000",
      email: "registrar@iitgn.ac.in",
      website: "https://www.iitgn.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MA", "MSc", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "13 LPA",
      avgSalary: 1300000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "ISRO", "Texas Instruments"]
    },
    facilities: ["Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "nirma-university",
    name: "Nirma University",
    description: "Nirma University is a private university known for its quality education in engineering, management, and law.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.3,
    type: "Private",
    address: "Sarkhej-Gandhinagar Highway, Ahmedabad, Gujarat - 382481",
    location: {
      address: "Sarkhej-Gandhinagar Highway",
      city: "Ahmedabad",
      state: "Gujarat"
    },
    contact: {
      phone: "+91-79-7165-2000",
      email: "registrar@nirmauni.ac.in",
      website: "https://www.nirmauni.ac.in/"
    },
    courses: ["B.Tech", "MBA", "BBA", "B.Com", "LLB", "B.Pharm"],
    placement: {
      percentage: 90,
      averagePackage: "7 LPA",
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Wipro", "Cognizant"]
    },
    facilities: ["Library", "Labs", "Sports Complex", "Hostels", "Cafeterias"],
    fees: {
      tuition: {
        min: 150000,
        max: 300000
      },
      hostel: {
        min: 60000,
        max: 80000
      }
    },
    entranceExams: ["JEE Main", "GUJCET", "NMAT", "CLAT"],
    admissionDetails: {
      eligibility: "Based on entrance exam rank and 12th percentage",
      process: "Merit-based admission through entrance exams",
      deadlines: "Applications open in March each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "10-50% tuition fee waiver",
        eligibility: "Based on entrance exam performance"
      },
      {
        name: "Sports Scholarship",
        amount: "20% tuition fee waiver",
        eligibility: "National/State level sports achievers"
      }
    ]
  }
];

// Add colleges for Punjab
const punjabColleges: College[] = [
  {
    id: "iit-ropar",
    name: "Indian Institute of Technology Ropar",
    description: "IIT Ropar is one of the new IITs with a focus on technological education and research innovation.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.5,
    type: "Government",
    address: "Nangal Road, Rupnagar, Punjab - 140001",
    location: {
      address: "Nangal Road",
      city: "Rupnagar",
      state: "Punjab"
    },
    contact: {
      phone: "+91-1881-231301",
      email: "registrar@iitrpr.ac.in",
      website: "https://www.iitrpr.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MS", "PhD"],
    placement: {
      percentage: 92,
      averagePackage: "12 LPA",
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Oracle", "Goldman Sachs"]
    },
    facilities: ["Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "pec-chandigarh",
    name: "Punjab Engineering College",
    description: "PEC is one of the oldest engineering institutes in India with a strong focus on technical education.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.3,
    type: "Government",
    address: "Sector 12, Chandigarh - 160012",
    location: {
      address: "Sector 12",
      city: "Chandigarh",
      state: "Punjab"
    },
    contact: {
      phone: "+91-172-275-3813",
      email: "registrar@pec.edu.in",
      website: "https://www.pec.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T", "Microsoft"]
    },
    facilities: ["Central Library", "Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 80000,
        max: 120000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["JEE Main", "GATE"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JoSAA/CSAB for B.Tech admissions",
      deadlines: "As per JoSAA/CSAB schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "Sports Scholarship",
        amount: "Partial fee waiver",
        eligibility: "National/State level sports achievers"
      }
    ]
  }
];

// Add colleges for Haryana
const haryanaColleges: College[] = [
  {
    id: "iit-delhi-sonepat",
    name: "Indian Institute of Technology Delhi (Sonepat Campus)",
    description: "IIT Delhi Sonepat Campus is an extension of IIT Delhi providing quality education in engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.6,
    type: "Government",
    address: "Techno Park, Sonepat, Haryana - 131029",
    location: {
      address: "Techno Park",
      city: "Sonepat",
      state: "Haryana"
    },
    contact: {
      phone: "+91-11-2659-7135",
      email: "registrar@admin.iitd.ac.in",
      website: "https://home.iitd.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "16 LPA",
      avgSalary: 1600000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Apple", "Goldman Sachs"]
    },
    facilities: ["Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "nit-kurukshetra",
    name: "National Institute of Technology Kurukshetra",
    description: "NIT Kurukshetra is one of the premier technical institutes in India known for its engineering programs.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.4,
    type: "Government",
    address: "Kurukshetra, Haryana - 136119",
    location: {
      address: "Kurukshetra",
      city: "Kurukshetra",
      state: "Haryana"
    },
    contact: {
      phone: "+91-1744-233100",
      email: "registrar@nitkkr.ac.in",
      website: "https://www.nitkkr.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["Amazon", "TCS", "Infosys", "Wipro", "L&T"]
    },
    facilities: ["Central Library", "Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 125000,
        max: 150000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["JEE Main", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  }
];

// Add colleges for Odisha
const odishaColleges: College[] = [
  {
    id: "iit-bhubaneswar",
    name: "Indian Institute of Technology Bhubaneswar",
    description: "IIT Bhubaneswar is known for its excellent academic programs and research in engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.6,
    type: "Government",
    address: "Argul, Khordha, Odisha - 752050",
    location: {
      address: "Argul, Khordha",
      city: "Bhubaneswar",
      state: "Odisha"
    },
    contact: {
      phone: "+91-674-713-5001",
      email: "registrar@iitbbs.ac.in",
      website: "https://www.iitbbs.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MS"],
    placement: {
      percentage: 90,
      averagePackage: "12 LPA",
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Intel", "Qualcomm"]
    },
    facilities: ["Central Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "nit-rourkela",
    name: "National Institute of Technology Rourkela",
    description: "NIT Rourkela is one of the premier technical institutes known for its engineering programs and research facilities.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.5,
    type: "Government",
    address: "Sector 1, Rourkela, Odisha - 769008",
    location: {
      address: "Sector 1",
      city: "Rourkela",
      state: "Odisha"
    },
    contact: {
      phone: "+91-661-246-2021",
      email: "registrar@nitrkl.ac.in",
      website: "https://www.nitrkl.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MBA", "MSc", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "8.5 LPA",
      avgSalary: 850000,
      topRecruiters: ["Microsoft", "Amazon", "Tata Steel", "L&T", "TCS"]
    },
    facilities: ["Central Library", "Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 125000,
        max: 150000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["JEE Main", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  }
];

// Add colleges for Uttarakhand
const uttarakhandColleges: College[] = [
  {
    id: "iit-roorkee",
    name: "Indian Institute of Technology Roorkee",
    description: "IIT Roorkee is the oldest technical institution in Asia and is renowned for its engineering programs.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.8,
    type: "Government",
    address: "Roorkee, Uttarakhand - 247667",
    location: {
      address: "Roorkee",
      city: "Roorkee",
      state: "Uttarakhand"
    },
    contact: {
      phone: "+91-1332-285311",
      email: "registrar@iitr.ac.in",
      website: "https://www.iitr.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MSc", "MBA", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "16 LPA",
      avgSalary: 1600000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Goldman Sachs", "Adobe"]
    },
    facilities: ["Central Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "gbpuat-pantnagar",
    name: "G. B. Pant University of Agriculture and Technology",
    description: "GBPUAT is the first agricultural university in India and is known for its agricultural education and research.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.2,
    type: "Government",
    address: "Pantnagar, Udham Singh Nagar, Uttarakhand - 263145",
    location: {
      address: "Pantnagar, Udham Singh Nagar",
      city: "Pantnagar",
      state: "Uttarakhand"
    },
    contact: {
      phone: "+91-5944-233320",
      email: "registrar@gbpuat.ac.in",
      website: "https://www.gbpuat.ac.in/"
    },
    courses: ["B.Sc Agriculture", "B.Tech", "M.Sc", "M.Tech", "MBA", "PhD"],
    placement: {
      percentage: 75,
      averagePackage: "6 LPA",
      avgSalary: 600000,
      topRecruiters: ["Bayer", "Syngenta", "Monsanto", "ITC", "Nestle"]
    },
    facilities: ["Central Library", "Research Farms", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 40000,
        max: 80000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["ICAR AIEEA", "UPCATET"],
    admissionDetails: {
      eligibility: "Based on entrance exam rank and 10+2 PCM/PCB percentage",
      process: "Merit-based admission through entrance exams",
      deadlines: "Applications open in April each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹5,000 per semester",
        eligibility: "Top performers in each program"
      },
      {
        name: "Rural Student Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Students from rural areas with excellent academics"
      }
    ]
  }
];

// Add colleges for Madhya Pradesh
const madhyaPradeshColleges: College[] = [
  {
    id: "iit-indore",
    name: "Indian Institute of Technology Indore",
    description: "IIT Indore focuses on interdisciplinary education and research in engineering and science.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.6,
    type: "Government",
    address: "Simrol, Indore, Madhya Pradesh - 453552",
    location: {
      address: "Simrol",
      city: "Indore",
      state: "Madhya Pradesh"
    },
    contact: {
      phone: "+91-731-660-3150",
      email: "registrar@iiti.ac.in",
      website: "https://www.iiti.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MSc", "PhD"],
    placement: {
      percentage: 92,
      averagePackage: "14 LPA",
      avgSalary: 1400000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Samsung", "Adobe"]
    },
    facilities: ["Central Library", "Research Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 20000,
        max: 30000
      }
    },
    entranceExams: ["JEE Advanced", "GATE"],
    admissionDetails: {
      eligibility: "JEE Advanced rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Merit Scholarship",
        amount: "₹10,000 per month",
        eligibility: "Top performers in each batch"
      }
    ]
  },
  {
    id: "manit-bhopal",
    name: "Maulana Azad National Institute of Technology Bhopal",
    description: "MANIT Bhopal is a premier institute offering diverse programs in engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.3,
    type: "Government",
    address: "Link Road Number 3, Bhopal, Madhya Pradesh - 462003",
    location: {
      address: "Link Road Number 3",
      city: "Bhopal",
      state: "Madhya Pradesh"
    },
    contact: {
      phone: "+91-755-405-1000",
      email: "registrar@manit.ac.in",
      website: "https://www.manit.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MCA", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T", "Amazon"]
    },
    facilities: ["Central Library", "Labs", "Sports Complex", "Hostels", "Healthcare"],
    fees: {
      tuition: {
        min: 125000,
        max: 150000
      },
      hostel: {
        min: 15000,
        max: 25000
      }
    },
    entranceExams: ["JEE Main", "GATE"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Centralized counseling through JOSAA for B.Tech admissions",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Tuition fee waiver",
        eligibility: "Top 10% students in each branch"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  }
];

export const states: State[] = [
  { id: "andhra-pradesh", name: "Andhra Pradesh", collegeCount: andhraPradeshColleges.length },
  { id: "bihar", name: "Bihar", collegeCount: biharColleges.length },
  { id: "delhi", name: "Delhi", collegeCount: delhiColleges.length },
  { id: "gujarat", name: "Gujarat", collegeCount: gujaratColleges.length },
  { id: "haryana", name: "Haryana", collegeCount: haryanaColleges.length },
  { id: "karnataka", name: "Karnataka", collegeCount: karnatakaColleges.length },
  { id: "kerala", name: "Kerala", collegeCount: keralaColleges.length },
  { id: "madhya-pradesh", name: "Madhya Pradesh", collegeCount: madhyaPradeshColleges.length },
  { id: "maharashtra", name: "Maharashtra", collegeCount: maharashtraColleges.length },
  { id: "odisha", name: "Odisha", collegeCount: odishaColleges.length },
  { id: "punjab", name: "Punjab", collegeCount: punjabColleges.length },
  { id: "rajasthan", name: "Rajasthan", collegeCount: rajasthanColleges.length },
  { id: "tamil-nadu", name: "Tamil Nadu", collegeCount: tamilNaduColleges.length },
  { id: "telangana", name: "Telangana", collegeCount: telanganaColleges.length },
  { id: "uttar-pradesh", name: "Uttar Pradesh", collegeCount: uttarPradeshColleges.length },
  { id: "uttarakhand", name: "Uttarakhand", collegeCount: uttarakhandColleges.length },
  { id: "west-bengal", name: "West Bengal", collegeCount: westBengalColleges.length },
];

export const getCollegesByState = (stateId: string): College[] => {
  switch (stateId) {
    case "andhra-pradesh":
      return andhraPradeshColleges;
    case "karnataka":
      return karnatakaColleges;
    case "maharashtra":
      return maharashtraColleges;
    case "tamil-nadu":
      return tamilNaduColleges;
    case "uttar-pradesh":
      return uttarPradeshColleges;
    case "west-bengal":
      return westBengalColleges;
    case "delhi":
      return delhiColleges;
    case "telangana":
      return telanganaColleges;
    case "rajasthan":
      return rajasthanColleges;
    case "kerala":
      return keralaColleges;
    case "bihar":
      return biharColleges;
    case "gujarat":
      return gujaratColleges;
    case "punjab":
      return punjabColleges;
    case "haryana":
      return haryanaColleges;
    case "odisha":
      return odishaColleges;
    case "uttarakhand":
      return uttarakhandColleges;
    case "madhya-pradesh":
      return madhyaPradeshColleges;
    default:
      return [];
  }
};
