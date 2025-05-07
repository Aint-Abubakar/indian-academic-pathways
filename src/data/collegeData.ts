
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
    courses: ["B.Tech", "M.Tech", "PhD", "MBA", "LLB"],
    placement: {
      percentage: 96,
      averagePackage: "16 LPA",
      avgSalary: 1600000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Apple", "Samsung"]
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
        name: "Institute Scholarship",
        amount: "₹1000 per month",
        eligibility: "Top 10% students"
      }
    ]
  },
  {
    id: "jadavpur-university",
    name: "Jadavpur University",
    description: "Jadavpur University is a premier public state university known for its engineering and science programs.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    rating: 4.6,
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
    courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "PhD"],
    placement: {
      percentage: 85,
      averagePackage: "8 LPA",
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "CTS", "Capgemini", "IBM"]
    },
    facilities: ["Central Library", "Sports Ground", "Hostels", "Canteens", "Auditorium"],
    fees: {
      tuition: {
        min: 10000,
        max: 30000
      },
      hostel: {
        min: 8000,
        max: 15000
      }
    },
    entranceExams: ["WBJEE", "GATE", "CAT"],
    admissionDetails: {
      eligibility: "Minimum 60% in 10+2 with PCM for engineering",
      process: "Through state-level entrance exams",
      deadlines: "Applications open in April each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  }
];

// Add colleges for Delhi
const delhiColleges: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    description: "IIT Delhi is a premier engineering institution known for its cutting-edge research and academic excellence.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.8,
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
    courses: ["B.Tech", "M.Tech", "PhD", "MBA"],
    placement: {
      percentage: 98,
      averagePackage: "18 LPA",
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "Adobe"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Healthcare", "Research Labs"],
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
        name: "Institute Scholarship",
        amount: "₹1000 per month",
        eligibility: "Top 10% students"
      }
    ]
  },
  {
    id: "du-delhi",
    name: "Delhi University",
    description: "Delhi University is one of India's premier universities offering a wide range of programs in various disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.7,
    type: "Government",
    address: "University of Delhi, Delhi - 110007",
    location: {
      address: "University of Delhi",
      city: "New Delhi",
      state: "Delhi"
    },
    contact: {
      phone: "+91-11-2766-7725",
      email: "registrar@du.ac.in",
      website: "http://www.du.ac.in/"
    },
    courses: ["B.A", "B.Sc", "B.Com", "M.A", "M.Sc", "M.Com", "PhD"],
    placement: {
      percentage: 80,
      averagePackage: "6 LPA",
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Deloitte", "EY", "KPMG"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Canteens", "Cultural Centers"],
    fees: {
      tuition: {
        min: 10000,
        max: 30000
      },
      hostel: {
        min: 5000,
        max: 15000
      }
    },
    entranceExams: ["DU-JAT", "DU-CUET", "DU-NET"],
    admissionDetails: {
      eligibility: "Varies by program, usually based on 10+2 scores",
      process: "Merit or entrance-based selections",
      deadlines: "Applications open in May each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹5000 per month",
        eligibility: "Top performers"
      },
      {
        name: "Need-Based Scholarship",
        amount: "Varies",
        eligibility: "Economically disadvantaged students"
      }
    ]
  }
];

// Add colleges for Telangana
const telanganaColleges: College[] = [
  {
    id: "iiit-hyderabad",
    name: "International Institute of Information Technology, Hyderabad",
    description: "IIIT Hyderabad is a top institution for computer science and IT education in India.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.7,
    type: "Government",
    address: "Gachibowli, Hyderabad, Telangana - 500032",
    location: {
      address: "Gachibowli",
      city: "Hyderabad",
      state: "Telangana"
    },
    contact: {
      phone: "+91-40-6653-1000",
      email: "info@iiit.ac.in",
      website: "https://www.iiit.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MS by Research", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "15 LPA",
      avgSalary: 1500000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Oracle"]
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Canteens", "Innovation Labs"],
    fees: {
      tuition: {
        min: 225000,
        max: 275000
      },
      hostel: {
        min: 75000,
        max: 85000
      }
    },
    entranceExams: ["JEE Main", "GATE"],
    admissionDetails: {
      eligibility: "JEE Main rank for B.Tech, GATE score for M.Tech",
      process: "Entrance examination followed by interview",
      deadlines: "Applications open in March each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "25% tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Research Fellowship",
        amount: "₹35,000 per month",
        eligibility: "PhD scholars"
      }
    ]
  },
  {
    id: "osmania-university",
    name: "Osmania University",
    description: "Osmania University is one of the oldest universities in India with diverse programs across disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.4,
    type: "Government",
    address: "Hyderabad, Telangana - 500007",
    location: {
      address: "Osmania University Campus",
      city: "Hyderabad",
      state: "Telangana"
    },
    contact: {
      phone: "+91-40-2768-8322",
      email: "registrar@osmania.ac.in",
      website: "https://www.osmania.ac.in/"
    },
    courses: ["BA", "B.Sc", "B.Com", "MA", "M.Sc", "M.Com", "MBA", "MCA", "PhD"],
    placement: {
      percentage: 70,
      averagePackage: "5 LPA",
      avgSalary: 500000,
      topRecruiters: ["TCS", "Wipro", "Infosys", "Tech Mahindra", "Cognizant"]
    },
    facilities: ["Central Library", "Sports Ground", "Hostels", "Canteens", "Auditorium"],
    fees: {
      tuition: {
        min: 10000,
        max: 50000
      },
      hostel: {
        min: 5000,
        max: 15000
      }
    },
    entranceExams: ["OUCET", "ICET", "PGECET"],
    admissionDetails: {
      eligibility: "Varies by program; usually requires qualifying examination",
      process: "Entrance examination followed by counseling",
      deadlines: "Applications open in April-May each year"
    },
    scholarships: [
      {
        name: "University Merit Scholarship",
        amount: "₹5,000 per year",
        eligibility: "Top performers"
      },
      {
        name: "Research Scholarship",
        amount: "₹8,000 per month",
        eligibility: "PhD scholars"
      }
    ]
  }
];

// Add colleges for Rajasthan
const rajasthanColleges: College[] = [
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science, Pilani",
    description: "BITS Pilani is a renowned private university known for its high-quality education and industry connections.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.7,
    type: "Private",
    address: "Pilani, Rajasthan - 333031",
    location: {
      address: "Vidya Vihar Campus",
      city: "Pilani",
      state: "Rajasthan"
    },
    contact: {
      phone: "+91-1596-242-090",
      email: "registrar@pilani.bits-pilani.ac.in",
      website: "https://www.bits-pilani.ac.in/"
    },
    courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "14 LPA",
      avgSalary: 1400000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Goldman Sachs", "DE Shaw"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Cafeterias", "Innovation Labs"],
    fees: {
      tuition: {
        min: 200000,
        max: 500000
      },
      hostel: {
        min: 70000,
        max: 90000
      }
    },
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "Minimum 75% in 10+2 with PCM",
      process: "Entrance examination (BITSAT) followed by counseling",
      deadlines: "Applications open in January each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "50% tuition fee waiver",
        eligibility: "Top 1% students"
      },
      {
        name: "Need-Based Scholarship",
        amount: "Varies",
        eligibility: "Economically disadvantaged students"
      }
    ]
  },
  {
    id: "mnit-jaipur",
    name: "Malaviya National Institute of Technology Jaipur",
    description: "MNIT Jaipur is a premier NIT offering high-quality technical education and research opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.5,
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
    courses: ["B.Tech", "M.Tech", "MBA", "MSc", "PhD"],
    placement: {
      percentage: 90,
      averagePackage: "10 LPA",
      avgSalary: 1000000,
      topRecruiters: ["Amazon", "Microsoft", "Infosys", "L&T", "TCS"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Canteens", "Innovation Center"],
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
      process: "Centralized counseling through JOSAA for B.Tech",
      deadlines: "As per JOSAA/CCMT schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Scholarship",
        amount: "₹12,000 per month",
        eligibility: "PhD scholars"
      }
    ]
  }
];

// Add colleges for Kerala
const keralaColleges: College[] = [
  {
    id: "iit-palakkad",
    name: "Indian Institute of Technology Palakkad",
    description: "IIT Palakkad is one of the new IITs established to provide world-class education in Kerala.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.6,
    type: "Government",
    address: "Ahalia Integrated Campus, Palakkad, Kerala - 678557",
    location: {
      address: "Ahalia Integrated Campus",
      city: "Palakkad",
      state: "Kerala"
    },
    contact: {
      phone: "+91-491-2551-700",
      email: "registrar@iitpkd.ac.in",
      website: "https://iitpkd.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MS", "PhD"],
    placement: {
      percentage: 92,
      averagePackage: "12 LPA",
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Intel", "Qualcomm"]
    },
    facilities: ["Library", "Sports Facilities", "Hostels", "Cafeteria", "Research Labs"],
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
      process: "Centralized counseling through JOSAA for B.Tech",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  },
  {
    id: "nit-calicut",
    name: "National Institute of Technology Calicut",
    description: "NIT Calicut is one of India's premier engineering institutions known for its academic excellence.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.5,
    type: "Government",
    address: "NIT Campus P.O., Calicut, Kerala - 673601",
    location: {
      address: "NIT Campus P.O.",
      city: "Calicut",
      state: "Kerala"
    },
    contact: {
      phone: "+91-495-228-6106",
      email: "registrar@nitc.ac.in",
      website: "http://www.nitc.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MBA", "MCA", "PhD"],
    placement: {
      percentage: 90,
      averagePackage: "9.5 LPA",
      avgSalary: 950000,
      topRecruiters: ["Microsoft", "Amazon", "Infosys", "TCS", "L&T"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Canteens", "Tech Park"],
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
      process: "Centralized counseling through JOSAA for B.Tech",
      deadlines: "As per JOSAA/CCMT schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Scholarship",
        amount: "₹8,000 per month",
        eligibility: "M.Tech students with valid GATE score"
      }
    ]
  }
];

// Add colleges for Bihar
const biharColleges: College[] = [
  {
    id: "iit-patna",
    name: "Indian Institute of Technology Patna",
    description: "IIT Patna is a premier engineering institute in Bihar offering top-quality education and research facilities.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.6,
    type: "Government",
    address: "Bihta, Patna, Bihar - 801106",
    location: {
      address: "Bihta",
      city: "Patna",
      state: "Bihar"
    },
    contact: {
      phone: "+91-612-302-8001",
      email: "registrar@iitp.ac.in",
      website: "https://www.iitp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD"],
    placement: {
      percentage: 93,
      averagePackage: "13 LPA",
      avgSalary: 1300000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Qualcomm", "Uber"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Canteens", "Research Labs"],
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
      process: "Centralized counseling through JOSAA for B.Tech",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Research Fellowship",
        amount: "₹31,000 per month",
        eligibility: "PhD scholars"
      }
    ]
  },
  {
    id: "nit-patna",
    name: "National Institute of Technology Patna",
    description: "NIT Patna (formerly Bihar College of Engineering) is a top engineering college in Eastern India.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.3,
    type: "Government",
    address: "Ashok Rajpath, Patna, Bihar - 800005",
    location: {
      address: "Ashok Rajpath",
      city: "Patna",
      state: "Bihar"
    },
    contact: {
      phone: "+91-612-237-1715",
      email: "registrar@nitp.ac.in",
      website: "http://www.nitp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "PhD", "MCA"],
    placement: {
      percentage: 85,
      averagePackage: "7.5 LPA",
      avgSalary: 750000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T", "TATA Motors"]
    },
    facilities: ["Central Library", "Sports Ground", "Hostels", "Canteens", "Computer Labs"],
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
      process: "Centralized counseling through JOSAA for B.Tech",
      deadlines: "As per JOSAA/CCMT schedule"
    },
    scholarships: [
      {
        name: "Merit-Cum-Means Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Based on family income and academic performance"
      },
      {
        name: "Institute Scholarship",
        amount: "₹12,400 per month",
        eligibility: "M.Tech students with valid GATE score"
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
      email: "office@iitgn.ac.in",
      website: "https://www.iitgn.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "MA", "MSc", "PhD"],
    placement: {
      percentage: 95,
      averagePackage: "15 LPA",
      avgSalary: 1500000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "BCG", "Shell"]
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Innovation Center", "Recreation Center"],
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
      process: "Centralized counseling through JOSAA for B.Tech",
      deadlines: "As per JOSAA schedule"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full Tuition Fee Waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "As per government norms",
        eligibility: "SC/ST category students"
      }
    ]
  },
  {
    id: "nirma-university",
    name: "Nirma University",
    description: "Nirma University is a private university known for its quality education in engineering and management.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.4,
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
    courses: ["B.Tech", "MBA", "BBA", "B.Pharm", "LLB", "B.Arch"],
    placement: {
      percentage: 90,
      averagePackage: "7 LPA",
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T", "Zydus"]
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Cafeterias", "Auditorium"],
    fees: {
      tuition: {
        min: 120000,
        max: 200000
      },
      hostel: {
        min: 60000,
        max: 80000
      }
    },
    entranceExams: ["JEE Main", "NMAT", "CLAT"],
    admissionDetails: {
      eligibility: "Varies by program; Engineering requires JEE Main score",
      process: "Entrance exam followed by counseling",
      deadlines: "Applications close in May each year"
    },
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "25% tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Sports Scholarship",
        amount: "Partial fee waiver",
        eligibility: "State/National level sports achievers"
      }
    ]
  }
];

// Define all states
export const states: State[] = [
  { id: "andhra-pradesh", name: "Andhra Pradesh", collegeCount: andhraPradeshColleges.length },
  { id: "bihar", name: "Bihar", collegeCount: biharColleges.length },
  { id: "delhi", name: "Delhi", collegeCount: delhiColleges.length },
  { id: "gujarat", name: "Gujarat", collegeCount: gujaratColleges.length },
  { id: "karnataka", name: "Karnataka", collegeCount: karnatakaColleges.length },
  { id: "kerala", name: "Kerala", collegeCount: keralaColleges.length },
  { id: "maharashtra", name: "Maharashtra", collegeCount: maharashtraColleges.length },
  { id: "rajasthan", name: "Rajasthan", collegeCount: rajasthanColleges.length },
  { id: "tamil-nadu", name: "Tamil Nadu", collegeCount: tamilNaduColleges.length },
  { id: "telangana", name: "Telangana", collegeCount: telanganaColleges.length },
  { id: "uttar-pradesh", name: "Uttar Pradesh", collegeCount: uttarPradeshColleges.length },
  { id: "west-bengal", name: "West Bengal", collegeCount: westBengalColleges.length }
];

// Function to get colleges by state
export const getCollegesByState = (stateId: string): College[] => {
  switch (stateId) {
    case "andhra-pradesh":
      return andhraPradeshColleges;
    case "bihar":
      return biharColleges;
    case "delhi":
      return delhiColleges;
    case "gujarat":
      return gujaratColleges;
    case "karnataka":
      return karnatakaColleges;
    case "kerala":
      return keralaColleges;
    case "maharashtra":
      return maharashtraColleges;
    case "rajasthan":
      return rajasthanColleges;
    case "tamil-nadu":
      return tamilNaduColleges;
    case "telangana":
      return telanganaColleges;
    case "uttar-pradesh":
      return uttarPradeshColleges;
    case "west-bengal":
      return westBengalColleges;
    default:
      return [];
  }
};
