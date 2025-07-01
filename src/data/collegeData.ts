export interface College {
  id: string;
  name: string;
  description: string;
  rating: number;
  type: "Government" | "Private";
  courses: string[];
  fees: {
    tuition: { min: number; max: number };
    hostel: { min: number; max: number };
  };
  location: {
    city: string;
    state: string;
    address: string;
  };
  established: number;
  accreditation: string[];
  facilities: string[];
  admissionProcess: string;
  scholarships: {
    name: string;
    amount: string;
    eligibility: string;
  }[];
  placementRate: number;
  averagePackage: number;
  imageUrl?: string;
  placement: {
    percentage: number;
    avgSalary?: number;
    topRecruiters?: string[];
    topCompanies?: string[];
  };
  entranceExams?: string[];
  admissionDetails?: {
    eligibility: string;
    process: string;
    deadlines: string;
  };
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

export const states: State[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 120,
  },
  {
    id: "karnataka",
    name: "Karnataka",
    collegeCount: 110,
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    collegeCount: 95,
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 60,
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    collegeCount: 85,
  },
  {
    id: "gujarat",
    name: "Gujarat",
    collegeCount: 70,
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    collegeCount: 65,
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    collegeCount: 75,
  },
  {
    id: "kerala",
    name: "Kerala",
    collegeCount: 55,
  },
  {
    id: "punjab",
    name: "Punjab",
    collegeCount: 40,
  },
  // Adding all remaining Indian states and union territories
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    collegeCount: 45
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    collegeCount: 8
  },
  {
    id: "assam",
    name: "Assam",
    collegeCount: 25
  },
  {
    id: "bihar",
    name: "Bihar",
    collegeCount: 38
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    collegeCount: 22
  },
  {
    id: "goa",
    name: "Goa",
    collegeCount: 12
  },
  {
    id: "haryana",
    name: "Haryana",
    collegeCount: 35
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    collegeCount: 18
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    collegeCount: 28
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    collegeCount: 42
  },
  {
    id: "manipur",
    name: "Manipur",
    collegeCount: 9
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    collegeCount: 11
  },
  {
    id: "mizoram",
    name: "Mizoram",
    collegeCount: 7
  },
  {
    id: "nagaland",
    name: "Nagaland",
    collegeCount: 6
  },
  {
    id: "odisha",
    name: "Odisha",
    collegeCount: 33
  },
  {
    id: "sikkim",
    name: "Sikkim",
    collegeCount: 5
  },
  {
    id: "telangana",
    name: "Telangana",
    collegeCount: 48
  },
  {
    id: "tripura",
    name: "Tripura",
    collegeCount: 8
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    collegeCount: 24
  },
  // Union Territories
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    collegeCount: 3
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    collegeCount: 15
  },
  {
    id: "dadra-nagar-haveli",
    name: "Dadra & Nagar Haveli",
    collegeCount: 2
  },
  {
    id: "daman-diu",
    name: "Daman & Diu",
    collegeCount: 2
  },
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    collegeCount: 20
  },
  {
    id: "ladakh",
    name: "Ladakh",
    collegeCount: 4
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    collegeCount: 1
  },
  {
    id: "puducherry",
    name: "Puducherry",
    collegeCount: 8
  }
];

const maharashtraColleges: College[] = [
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    description: "A premier engineering institute known for its research and academic excellence.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Powai, Mumbai, Maharashtra 400076"
    },
    established: 1958,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 95,
    averagePackage: 2200000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 95,
      avgSalary: 2200000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "vjti-mumbai",
    name: "Veermata Jijabai Technological Institute",
    description: "One of the oldest engineering colleges in Asia, offering quality education and research.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 80000, max: 100000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Matunga, Mumbai, Maharashtra 400019"
    },
    established: 1887,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      },
      {
        name: "EBC Scholarship",
        amount: "Fee concession",
        eligibility: "EBC category students"
      }
    ],
    placementRate: 80,
    averagePackage: 800000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 80,
      avgSalary: 800000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "coep-pune",
    name: "College of Engineering Pune",
    description: "A prestigious government engineering college with excellent industry connections.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 85000, max: 110000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Wellesley Rd, Shivajinagar, Pune, Maharashtra 411005"
    },
    established: 1854,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 85,
    averagePackage: 900000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 85,
      avgSalary: 900000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pict-pune",
    name: "Pune Institute of Computer Technology",
    description: "Leading computer technology institute known for its IT and computer engineering programs.",
    rating: 4.3,
    type: "Private",
    courses: ["Computer Engineering", "IT", "Electronics"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Survey No. 27, Near Trimurti Chowk, Dhankawadi, Pune 411043"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 90,
    averagePackage: 850000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 90,
      avgSalary: 850000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Accenture"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "spit-mumbai",
    name: "Sardar Patel Institute of Technology",
    description: "Renowned engineering institute affiliated to University of Mumbai.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Bhavan's Campus, Munshi Nagar, Andheri West, Mumbai 400058"
    },
    established: 1962,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Sports", "Auditorium"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 82,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 82,
      avgSalary: 750000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Capgemini"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "kjsce-mumbai",
    name: "K. J. Somaiya College of Engineering",
    description: "Premier engineering college with strong industry partnerships and research focus.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 160000, max: 190000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Vidyavihar, Mumbai, Maharashtra 400077"
    },
    established: 1983,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 88,
    averagePackage: 950000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 88,
      avgSalary: 950000,
      topRecruiters: ["Amazon", "Microsoft", "Goldman Sachs", "JP Morgan"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "walchand-sangli",
    name: "Walchand College of Engineering",
    description: "Historic engineering college known for its strong alumni network and quality education.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 75000, max: 95000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Sangli",
      state: "Maharashtra",
      address: "Vishrambag, Sangli, Maharashtra 416415"
    },
    established: 1947,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 78,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mit-pune",
    name: "Maharashtra Institute of Technology",
    description: "Well-established engineering institute with multiple campuses and diverse programs.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 130000, max: 160000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Paud Rd, Kothrud, Pune, Maharashtra 411038"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 75,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 75,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "gcoea-nagpur",
    name: "Government College of Engineering Aurangabad",
    description: "Government engineering college with strong emphasis on research and innovation.",
    rating: 4.2,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 70000, max: 90000 },
      hostel: { min: 12000, max: 20000 },
    },
    location: {
      city: "Aurangabad",
      state: "Maharashtra",
      address: "Aurangabad, Maharashtra 431005"
    },
    established: 1960,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 80,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "symbiosis-pune",
    name: "Symbiosis Institute of Technology",
    description: "Premier private institute known for its innovative curriculum and industry exposure.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Computer Applications"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Lavale, Pune, Maharashtra 412115"
    },
    established: 2008,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Lab"],
    admissionProcess: "SET Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 92,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 92,
      avgSalary: 1100000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Deloitte"]
    },
    entranceExams: ["SET"],
    admissionDetails: {
      eligibility: "SET qualified with minimum 50% in 12th",
      process: "University counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "bits-pilani-goa",
    name: "BITS Pilani Goa Campus",
    description: "Prestigious private institute known for its academic excellence and research.",
    rating: 4.6,
    type: "Private",
    courses: ["Engineering", "Science", "Pharmacy"],
    fees: {
      tuition: { min: 450000, max: 500000 },
      hostel: { min: 45000, max: 55000 },
    },
    location: {
      city: "Goa",
      state: "Maharashtra",
      address: "Zuarinagar, Sancoale, Goa 403726"
    },
    established: 2004,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "BITSAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹2,00,000",
        eligibility: "BITSAT top scorers"
      }
    ],
    placementRate: 95,
    averagePackage: 1800000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook"]
    },
    entranceExams: ["BITSAT"],
    admissionDetails: {
      eligibility: "BITSAT qualified with minimum 75% in 12th",
      process: "Online counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "iiser-pune",
    name: "Indian Institute of Science Education and Research Pune",
    description: "Premier research institute focusing on science education and cutting-edge research.",
    rating: 4.5,
    type: "Government",
    courses: ["Science", "Research", "Mathematics"],
    fees: {
      tuition: { min: 50000, max: 75000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dr. Homi Bhabha Rd, Pashan, Pune, Maharashtra 411008"
    },
    established: 2006,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Facilities"],
    admissionProcess: "KVPY, JEE Advanced",
    scholarships: [
      {
        name: "INSPIRE Scholarship",
        amount: "₹80,000 per year",
        eligibility: "KVPY fellows"
      }
    ],
    placementRate: 70,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    placement: {
      percentage: 70,
      avgSalary: 1200000,
      topRecruiters: ["Research Institutes", "IBM", "Microsoft", "Goldman Sachs"]
    },
    entranceExams: ["KVPY", "JEE Advanced"],
    admissionDetails: {
      eligibility: "KVPY or JEE Advanced qualified",
      process: "Centralized counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "vnit-nagpur",
    name: "Visvesvaraya National Institute of Technology",
    description: "National Institute of Technology known for its engineering and technology programs.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Architecture"],
    fees: {
      tuition: { min: 135000, max: 165000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Nagpur",
      state: "Maharashtra",
      address: "South Ambazari Rd, Nagpur, Maharashtra 440010"
    },
    established: 1960,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 83,
    averagePackage: 1050000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 83,
      avgSalary: 1050000,
      topRecruiters: ["Microsoft", "Amazon", "Flipkart", "Samsung"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "dkte-ichalkaranji",
    name: "Datta Kala Group of Institutions",
    description: "Multi-disciplinary institution offering engineering, management and other programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Management", "Pharmacy"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Ichalkaranji",
      state: "Maharashtra",
      address: "Rajwada, Ichalkaranji, Maharashtra 416115"
    },
    established: 1998,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 72,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 72,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "sinhgad-pune",
    name: "Sinhgad College of Engineering",
    description: "Well-known engineering college with strong industry connections and placement record.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 125000, max: 155000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Off Sinhgad Rd, Vadgaon, Pune, Maharashtra 411041"
    },
    established: 1996,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 76,
    averagePackage: 580000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 76,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Persistent"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pcet-pune",
    name: "Pimpri Chinchwad College of Engineering",
    description: "Government engineering college known for its quality education and affordable fees.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 78000, max: 98000 },
      hostel: { min: 16000, max: 24000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Sector No. 26, Pradhikaran, Nigdi, Pune 411044"
    },
    established: 1999,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 79,
    averagePackage: 680000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 79,
      avgSalary: 680000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "dypiet-pune",
    name: "D.Y. Patil Institute of Engineering and Technology",
    description: "Private engineering institute with modern infrastructure and industry partnerships.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 135000, max: 165000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018"
    },
    established: 1984,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 74,
    averagePackage: 570000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 74,
      avgSalary: 570000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Tech Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "bharati-vidyapeeth-pune",
    name: "Bharati Vidyapeeth College of Engineering",
    description: "Established engineering college with comprehensive programs and good placement opportunities.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 24000, max: 34000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Dhankawadi, Pune, Maharashtra 411043"
    },
    established: 1983,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 77,
    averagePackage: 590000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 77,
      avgSalary: 590000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Capgemini"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  }
];

const karnatakaColleges: College[] = [
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science Bangalore",
    description:
      "India's premier institute for advanced scientific and technological research and education.",
    rating: 4.9,
    type: "Government",
    courses: ["Science", "Engineering", "Research"],
    fees: {
      tuition: { min: 30000, max: 50000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Bangalore",
      state: "Karnataka",
      address: "CV Raman Rd, Bangalore, Karnataka 560012"
    },
    established: 1909,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "GATE, JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top rankers"
      },
      {
        name: "Research Scholarship",
        amount: "Stipend up to ₹1,00,000",
        eligibility: "Research scholars"
      }
    ],
    placementRate: 90,
    averagePackage: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    placement: {
      percentage: 90,
      avgSalary: 2500000,
      topRecruiters: ["IBM", "Google", "Microsoft", "Intel"]
    },
    entranceExams: ["GATE", "JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified or GATE score",
      process: "Online application and interview",
      deadlines: "May-June annually"
    }
  },
  {
    id: "nit-karnataka",
    name: "National Institute of Technology Karnataka",
    description:
      "A leading technical institute known for its strong engineering programs and research.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Surathkal",
      state: "Karnataka",
      address: "NIT Campus, Surathkal, Karnataka 575025"
    },
    established: 1960,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Fee waiver",
        eligibility: "SC/ST category students"
      }
    ],
    placementRate: 85,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    placement: {
      percentage: 85,
      avgSalary: 1200000,
      topRecruiters: ["Wipro", "Infosys", "Accenture", "Cognizant"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
];

const tamilNaduColleges: College[] = [
  {
    id: "iit-madras",
    name: "Indian Institute of Technology Madras",
    description:
      "One of the top engineering institutes in India, known for its research and academic programs.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Science", "Technology"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sardar Patel Rd, Chennai, Tamil Nadu 600036"
    },
    established: 1959,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹40,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 92,
    averagePackage: 2000000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 92,
      avgSalary: 2000000,
      topRecruiters: ["Amazon", "Google", "Microsoft", "Facebook"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "anna-university",
    name: "Anna University",
    description:
      "A technical university offering a wide range of engineering, technology, and architecture programs.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Architecture", "Technology"],
    fees: {
      tuition: { min: 50000, max: 70000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Sardar Patel Rd, Guindy, Chennai, Tamil Nadu 600025"
    },
    established: 1978,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "TNEA",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "BC/MBC/DNC Scholarship",
        amount: "Fee concession",
        eligibility: "BC/MBC/DNC category students"
      }
    ],
    placementRate: 75,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 75,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Cognizant"]
    },
    entranceExams: ["TNEA"],
    admissionDetails: {
      eligibility: "Based on 12th marks and TNEA rank",
      process: "Counseling through TNEA",
      deadlines: "May-June annually"
    }
  },
];

const delhiColleges: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    description:
      "A leading engineering and technology institute known for its research and academic excellence.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016"
    },
    established: 1961,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹60,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 94,
    averagePackage: 2100000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 94,
      avgSalary: 2100000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University",
    description:
      "A premier technological university offering a wide range of engineering and management programs.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Management"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Shahbad Daulatpur, New Delhi, Delhi 110042"
    },
    established: 1941,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST/OBC Scholarship",
        amount: "Fee waiver",
        eligibility: "SC/ST/OBC category students"
      }
    ],
    placementRate: 82,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 82,
      avgSalary: 1100000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
];

const uttarPradeshColleges: College[] = [
  {
    id: "iit-kanpur",
    name: "Indian Institute of Technology Kanpur",
    description:
      "A renowned engineering institute known for its research and academic contributions.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 210000, max: 240000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      address: "Kalyanpur, Kanpur, Uttar Pradesh 208016"
    },
    established: 1959,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 93,
    averagePackage: 1900000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 93,
      avgSalary: 1900000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "mnnit-allahabad",
    name: "Motilal Nehru National Institute of Technology Allahabad",
    description:
      "A leading technical institute offering quality engineering and technology programs.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Allahabad",
      state: "Uttar Pradesh",
      address: "MNNIT Campus, Allahabad, Uttar Pradesh 211004"
    },
    established: 1961,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "OBC/Minority Scholarship",
        amount: "Fee waiver",
        eligibility: "OBC/Minority category students"
      }
    ],
    placementRate: 80,
    averagePackage: 1000000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 80,
      avgSalary: 1000000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
];

const gujaratColleges: College[] = [
  {
    id: "iit-gandhinagar",
    name: "Indian Institute of Technology Gandhinagar",
    description:
      "An institute known for its innovative curriculum and focus on research and development.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Science", "Humanities"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 27000, max: 37000 },
    },
    location: {
      city: "Gandhinagar",
      state: "Gujarat",
      address: "Palaj, Gandhinagar, Gujarat 382355"
    },
    established: 2008,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹40,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 91,
    averagePackage: 1800000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 91,
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "nirma-university",
    name: "Nirma University",
    description:
      "A leading private university offering a wide range of programs in engineering, management, and law.",
    rating: 4.3,
    type: "Private",
    courses: ["Engineering", "Management", "Law"],
    fees: {
      tuition: { min: 180000, max: 210000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Sarkhej-Gandhinagar Hwy, Ahmedabad, Gujarat 382481"
    },
    established: 2003,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main, GUJCET",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "Minority Scholarship",
        amount: "Fee concession",
        eligibility: "Minority community students"
      }
    ],
    placementRate: 78,
    averagePackage: 900000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 78,
      avgSalary: 900000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj"]
    },
    entranceExams: ["JEE Main", "GUJCET"],
    admissionDetails: {
      eligibility: "JEE Main or GUJCET qualified",
      process: "University counseling",
      deadlines: "August-September annually"
    }
  },
];

const rajasthanColleges: College[] = [
  {
    id: "iit-jodhpur",
    name: "Indian Institute of Technology Jodhpur",
    description:
      "An institute focusing on technology and innovation, offering unique interdisciplinary programs.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Science", "Technology"],
    fees: {
      tuition: { min: 190000, max: 220000 },
      hostel: { min: 26000, max: 36000 },
    },
    location: {
      city: "Jodhpur",
      state: "Rajasthan",
      address: "Karwar, Jodhpur, Rajasthan 342037"
    },
    established: 2008,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹40,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 90,
    averagePackage: 1700000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 90,
      avgSalary: 1700000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "mnit-jaipur",
    name: "Malaviya National Institute of Technology Jaipur",
    description:
      "A leading technical institute offering quality engineering and technology education.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 130000, max: 160000 },
      hostel: { min: 21000, max: 31000 },
    },
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      address: "Jawahar Lal Nehru Marg, Jaipur, Rajasthan 302017"
    },
    established: 1963,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "OBC Scholarship",
        amount: "Fee waiver",
        eligibility: "OBC category students"
      }
    ],
    placementRate: 77,
    averagePackage: 950000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 77,
      avgSalary: 950000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
];

const westBengalColleges: College[] = [
  {
    id: "iit-kharagpur",
    name: "Indian Institute of Technology Kharagpur",
    description:
      "One of the oldest and most prestigious engineering institutes in India.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 210000, max: 240000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Kharagpur",
      state: "West Bengal",
      address: "Kharagpur, West Bengal 721302"
    },
    established: 1951,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 94,
    averagePackage: 2000000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 94,
      avgSalary: 2000000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "jadavpur-university",
    name: "Jadavpur University",
    description:
      "A leading state university known for its engineering, science, and arts programs.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Science", "Arts"],
    fees: {
      tuition: { min: 30000, max: 50000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Kolkata",
      state: "West Bengal",
      address: "Jadavpur, Kolkata, West Bengal 700032"
    },
    established: 1955,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "WBJEE",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST/OBC Scholarship",
        amount: "Fee waiver",
        eligibility: "SC/ST/OBC category students"
      }
    ],
    placementRate: 82,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 82,
      avgSalary: 1100000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant"]
    },
    entranceExams: ["WBJEE"],
    admissionDetails: {
      eligibility: "WBJEE qualified with PCM in 12th",
      process: "State counseling",
      deadlines: "May-June annually"
    }
  },
];

const keralaColleges: College[] = [
  {
    id: "iit-palakkad",
    name: "Indian Institute of Technology Palakkad",
    description:
      "An emerging IIT focusing on interdisciplinary research and innovative programs.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Science", "Technology"],
    fees: {
      tuition: { min: 180000, max: 210000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Palakkad",
      state: "Kerala",
      address: "Ahalia Integrated Campus, Palakkad, Kerala 678557"
    },
    established: 2015,
    accreditation: ["NAAC B"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹30,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 88,
    averagePackage: 1600000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 88,
      avgSalary: 1600000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "nit-calicut",
    name: "National Institute of Technology Calicut",
    description:
      "A leading technical institute offering quality engineering and technology education.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 130000, max: 160000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Calicut",
      state: "Kerala",
      address: "NIT Campus, Calicut, Kerala 673601"
    },
    established: 1961,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Fee waiver",
        eligibility: "SC/ST category students"
      }
    ],
    placementRate: 79,
    averagePackage: 1000000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 79,
      avgSalary: 1000000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Centralized counseling",
      deadlines: "July-August annually"
    }
  },
];

const punjabColleges: College[] = [
  {
    id: "iit-ropar",
    name: "Indian Institute of Technology Ropar",
    description:
      "An institute known for its focus on research and innovation in engineering and technology.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Science", "Technology"],
    fees: {
      tuition: { min: 190000, max: 220000 },
      hostel: { min: 26000, max: 36000 },
    },
    location: {
      city: "Ropar",
      state: "Punjab",
      address: "Nangal Rd, Rupnagar, Punjab 140001"
    },
    established: 2008,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹40,000",
        eligibility: "Low income families"
      }
    ],
    placementRate: 89,
    averagePackage: 1700000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 89,
      avgSalary: 1700000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "thapar-university",
    name: "Thapar Institute of Engineering and Technology",
    description:
      "A leading private institute offering a wide range of engineering and technology programs.",
    rating: 4.4,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 200000, max: 230000 },
      hostel: { min: 28000, max: 38000 },
    },
    location: {
      city: "Patiala",
      state: "Punjab",
      address: "Patiala, Punjab 147004"
    },
    established: 1956,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main, Thapar Entrance Exam",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students"
      },
      {
        name: "Minority Scholarship",
        amount: "Fee concession",
        eligibility: "Minority community students"
      }
    ],
    placementRate: 80,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 80,
      avgSalary: 1100000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Main", "Thapar Entrance Exam"],
    admissionDetails: {
      eligibility: "JEE Main qualified or Thapar Entrance Exam",
      process: "University counseling",
      deadlines: "August-September annually"
    }
  },
];

// Add sample college data for new states (adding a few examples for the major states)
const andhraPradeshColleges: College[] = [
  {
    id: "iit-tirupati",
    name: "IIT Tirupati",
    description: "Premier engineering institute known for innovation and research excellence.",
    rating: 4.6,
    type: "Government",
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 25000, max: 35000 }
    },
    location: {
      city: "Tirupati",
      state: "Andhra Pradesh",
      address: "Yerpedu - Venkatapuram Road, Tirupati, Andhra Pradesh 517619"
    },
    established: 2015,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Full fee waiver",
        eligibility: "Top performers"
      }
    ],
    placementRate: 95,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    placement: {
      percentage: 95,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Google", "Amazon"]
    },
    entranceExams: ["JEE Advanced"]
  }
];

const biharColleges: College[] = [
  {
    id: "iit-patna",
    name: "IIT Patna",
    description: "Leading technical institute with strong focus on engineering and technology.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 30000 }
    },
    location: {
      city: "Patna",
      state: "Bihar",
      address: "Patna, Bihar 800013"
    },
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "SC/ST Scholarship",
        amount: "Fee waiver",
        eligibility: "SC/ST category students"
      }
    ],
    placementRate: 92,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 92,
      avgSalary: 1100000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  }
];

const telanganaColleges: College[] = [
  {
    id: "iit-hyderabad",
    name: "IIT Hyderabad",
    description: "Prestigious engineering institute known for cutting-edge research and innovation.",
    rating: 4.7,
    type: "Government",
    courses: ["Engineering", "Technology", "Research", "Design"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 30000, max: 40000 }
    },
    location: {
      city: "Hyderabad",
      state: "Telangana",
      address: "Kandi, Sangareddy, Telangana 502285"
    },
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Hub"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 5% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹50,000",
        eligibility: "Low income families"
      },
      {
        name: "Research Scholarship",
        amount: "Stipend up to ₹1,00,000",
        eligibility: "Research scholars"
      }
    ],
    placementRate: 96,
    averagePackage: 1400000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 96,
      avgSalary: 1400000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "JoSAA counseling",
      deadlines: "June-July annually"
    }
  }
];

// Add the missing getCollegeById function
export const getCollegeById = (collegeId: string): College | undefined => {
  const allStates = Object.keys({
    "maharashtra": maharashtraColleges,
    "karnataka": karnatakaColleges,
    "tamil-nadu": tamilNaduColleges,
    "delhi": delhiColleges,
    "uttar-pradesh": uttarPradeshColleges,
    "gujarat": gujaratColleges,
    "rajasthan": rajasthanColleges,
    "west-bengal": westBengalColleges,
    "kerala": keralaColleges,
    "punjab": punjabColleges,
    "andhra-pradesh": andhraPradeshColleges,
    "bihar": biharColleges,
    "telangana": telanganaColleges,
  });
  
  for (const stateId of allStates) {
    const colleges = getCollegesByState(stateId);
    const college = colleges.find(c => c.id === collegeId);
    if (college) {
      return college;
    }
  }
  
  return undefined;
};

// Update the getCollegesByState function to include new states
export const getCollegesByState = (stateId: string) => {
  const stateCollegeMap: { [key: string]: College[] } = {
    "maharashtra": maharashtraColleges,
    "karnataka": karnatakaColleges,
    "tamil-nadu": tamilNaduColleges,
    "delhi": delhiColleges,
    "uttar-pradesh": uttarPradeshColleges,
    "gujarat": gujaratColleges,
    "rajasthan": rajasthanColleges,
    "west-bengal": westBengalColleges,
    "kerala": keralaColleges,
    "punjab": punjabColleges,
    "andhra-pradesh": andhraPradeshColleges,
    "bihar": biharColleges,
    "telangana": telanganaColleges,
    // For other new states, return empty array for now (can be populated later)
    "arunachal-pradesh": [],
    "assam": [],
    "chhattisgarh": [],
    "goa": [],
    "haryana": [],
    "himachal-pradesh": [],
    "jharkhand": [],
    "madhya-pradesh": [],
    "manipur": [],
    "meghalaya": [],
    "mizoram": [],
    "nagaland": [],
    "odisha": [],
    "sikkim": [],
    "tripura": [],
    "uttarakhand": [],
    "andaman-nicobar": [],
    "chandigarh": [],
    "dadra-nagar-haveli": [],
    "daman-diu": [],
    "jammu-kashmir": [],
    "ladakh": [],
    "lakshadweep": [],
    "puducherry": []
  };

  return stateCollegeMap[stateId] || [];
};
