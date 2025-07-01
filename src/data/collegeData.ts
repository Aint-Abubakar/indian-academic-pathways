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
  },
  {
    id: "iiit-pune",
    name: "Indian Institute of Information Technology Pune",
    description: "Premier institute focused on information technology and computer science education.",
    rating: 4.4,
    type: "Government",
    courses: ["Computer Science", "IT", "Electronics"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Survey No. 124/1/1, Opposite to NDA, Pashan, Pune 411008"
    },
    established: 2016,
    accreditation: ["NAAC A+"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 90,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 90,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Google", "Amazon", "Adobe"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JoSAA counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "ict-mumbai",
    name: "Institute of Chemical Technology Mumbai",
    description: "Premier institute for chemical engineering and technology with excellent industry connections.",
    rating: 4.5,
    type: "Government",
    courses: ["Chemical Engineering", "Biotechnology", "Pharmacy"],
    fees: {
      tuition: { min: 95000, max: 120000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Nathalal Parekh Marg, Matunga East, Mumbai 400019"
    },
    established: 1933,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Main, MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 95,
    averagePackage: 1500000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 95,
      avgSalary: 1500000,
      topRecruiters: ["Reliance", "ONGC", "Shell", "Hindustan Unilever"]
    },
    entranceExams: ["JEE Main", "MHT CET"],
    admissionDetails: {
      eligibility: "JEE Main or MHT CET qualified",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "viit-pune",
    name: "Vishwakarma Institute of Information Technology",
    description: "Leading IT institute known for its innovative curriculum and industry partnerships.",
    rating: 4.2,
    type: "Private",
    courses: ["Computer Engineering", "IT", "Electronics", "Mechanical"],
    fees: {
      tuition: { min: 145000, max: 175000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Survey No. 2/3/4, Kondhwa, Pune 411048"
    },
    established: 2004,
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
    placementRate: 85,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 85,
      avgSalary: 720000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Accenture"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "dypcoe-pune",
    name: "D.Y. Patil College of Engineering",
    description: "Well-established engineering college with comprehensive programs and good placement record.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Akurdi, Pune, Maharashtra 411044"
    },
    established: 1984,
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
    placementRate: 78,
    averagePackage: 620000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 78,
      avgSalary: 620000,
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
    id: "mit-aurangabad",
    name: "Maharashtra Institute of Technology Aurangabad",
    description: "Branch of MIT with focus on engineering and management education.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management"],
    fees: {
      tuition: { min: 125000, max: 155000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Aurangabad",
      state: "Maharashtra",
      address: "Beed Bypass Road, Aurangabad, Maharashtra 431028"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 72,
    averagePackage: 550000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 72,
      avgSalary: 550000,
      topRecruiters: ["TCS", "Infosys", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "jspm-pune",
    name: "JSPM's Rajarshi Shahu College of Engineering",
    description: "Engineering college known for its practical approach to education and industry exposure.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Tathawade, Pune, Maharashtra 411033"
    },
    established: 1992,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 70,
    averagePackage: 480000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 70,
      avgSalary: 480000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Regional Companies"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "avcoe-sangamner",
    name: "Amrutvahini College of Engineering",
    description: "Engineering college focused on providing quality technical education in rural Maharashtra.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 110000, max: 140000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Sangamner",
      state: "Maharashtra",
      address: "Sangamner, Ahmednagar, Maharashtra 422608"
    },
    established: 1996,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹8,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 65,
    averagePackage: 420000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 65,
      avgSalary: 420000,
      topRecruiters: ["TCS", "Infosys", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "kkwce-nashik",
    name: "K.K. Wagh Institute of Engineering Education and Research",
    description: "Established engineering institute in Nashik with strong emphasis on research and development.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 135000, max: 165000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Nashik",
      state: "Maharashtra",
      address: "Hirabai Haridas Vidyanagari, Amrutdham, Nashik 422003"
    },
    established: 1984,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 76,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 76,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Mahindra"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "mvps-nashik",
    name: "MVPS's K.B.T. College of Engineering",
    description: "Engineering college in Nashik known for its quality education and student development programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 115000, max: 145000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "Nashik",
      state: "Maharashtra",
      address: "Vidyanagari, Nashik, Maharashtra 422013"
    },
    established: 1983,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 68,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 68,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Local Companies"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "aitrc-vita",
    name: "Annasaheb Dange College of Engineering and Technology",
    description: "Engineering college in Sangli district providing quality technical education.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 105000, max: 135000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "Sangli",
      state: "Maharashtra",
      address: "Ashta, Sangli, Maharashtra 416301"
    },
    established: 1985,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹8,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 62,
    averagePackage: 380000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 62,
      avgSalary: 380000,
      topRecruiters: ["TCS", "Infosys", "Regional Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "aissms-pune",
    name: "AISSMS College of Engineering",
    description: "Established engineering college in Pune with diverse engineering programs.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 130000, max: 160000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Kennedy Rd, Near RTO, Pune, Maharashtra 411001"
    },
    established: 1992,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 74,
    averagePackage: 580000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 74,
      avgSalary: 580000,
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
    id: "prec-loni",
    name: "Pravara Rural Engineering College",
    description: "Rural engineering college committed to providing quality technical education.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 108000, max: 138000 },
      hostel: { min: 16000, max: 26000 },
    },
    location: {
      city: "Loni",
      state: "Maharashtra",
      address: "Loni Kalbhor, Ahmednagar, Maharashtra 413736"
    },
    established: 1999,
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
    placementRate: 66,
    averagePackage: 450000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 66,
      avgSalary: 450000,
      topRecruiters: ["TCS", "Infosys", "Local Industries"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "CAP rounds through DTE Maharashtra",
      deadlines: "August-September annually"
    }
  },
  {
    id: "pes-pune",
    name: "PES Modern College of Engineering",
    description: "Modern engineering college with emphasis on innovation and entrepreneurship.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 138000, max: 168000 },
      hostel: { min: 24000, max: 34000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Shivajinagar, Pune, Maharashtra 411005"
    },
    established: 1994,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹16,000 per year",
        eligibility: "Top 12% students"
      }
    ],
    placementRate: 75,
    averagePackage: 610000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 75,
      avgSalary: 610000,
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
    id: "mescoe-pune",
    name: "Modern Education Society's College of Engineering",
    description: "Established engineering college with strong industry connections and placement support.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 128000, max: 158000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Wadia City, Pune, Maharashtra 411001"
    },
    established: 1962,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹14,000 per year",
        eligibility: "Top 18% students"
      }
    ],
    placementRate: 73,
    averagePackage: 560000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 73,
      avgSalary: 560000,
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
    id: "pccoe-pune",
    name: "Pimpri Chinchwad College of Engineering and Research",
    description: "Research-oriented engineering college with focus on innovation and technology development.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 142000, max: 172000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Sector 26, Pradhikaran, Nigdi, Pune 411044"
    },
    established: 2001,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 81,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 81,
      avgSalary: 720000,
      topRecruiters: ["TCS", "Infosys", "L&T", "Bajaj Auto"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "sies-nerul",
    name: "SIES Graduate School of Technology",
    description: "Technology-focused institute in Navi Mumbai with modern infrastructure and industry exposure.",
    rating: 4.1,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 148000, max: 178000 },
      hostel: { min: 26000, max: 36000 },
    },
    location: {
      city: "Navi Mumbai",
      state: "Maharashtra",
      address: "Nerul, Navi Mumbai, Maharashtra 400706"
    },
    established: 1993,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 12% students"
      }
    ],
    placementRate: 77,
    averagePackage: 680000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 77,
      avgSalary: 680000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Accenture"]
    },
    entranceExams: ["MHT CET"],
    admissionDetails: {
      eligibility: "MHT CET qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "gcoe-jalgaon",
    name: "Government College of Engineering Jalgaon",
    description: "Government engineering college providing affordable quality education in North Maharashtra.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 72000, max: 92000 },
      hostel: { min: 14000, max: 22000 },
    },
    location: {
      city: "Jalgaon",
      state: "Maharashtra",
      address: "Jalgaon, Maharashtra 425001"
    },
    established: 1983,
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
    placementRate: 78,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 78,
      avgSalary: 650000,
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
    id: "gcoe-karad",
    name: "Government College of Engineering Karad",
    description: "Government engineering college in Satara district known for its quality education and research.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 74000, max: 94000 },
      hostel: { min: 15000, max: 23000 },
    },
    location: {
      city: "Karad",
      state: "Maharashtra",
      address: "Karad, Satara, Maharashtra 415124"
    },
    established: 1986,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹16,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 79,
    averagePackage: 670000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 79,
      avgSalary: 670000,
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
    id: "mit-wpu-pune",
    name: "MIT World Peace University",
    description: "Multi-disciplinary university offering various programs with focus on holistic education.",
    rating: 4.2,
    type: "Private",
    courses: ["Engineering", "Management", "Design", "Liberal Arts"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "Pune",
      state: "Maharashtra",
      address: "Loni Kalbhor, Pune, Maharashtra 412201"
    },
    established: 2017,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Hub"],
    admissionProcess: "University Entrance Test",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 8% students"
      }
    ],
    placementRate: 82,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 82,
      avgSalary: 750000,
      topRecruiters: ["TCS", "Infosys", "Accenture", "Deloitte"]
    },
    entranceExams: ["University Entrance Test"],
    admissionDetails: {
      eligibility: "Based on university entrance test and 12th marks",
      process: "University counseling",
      deadlines: "May-June annually"
    }
  }
];

export const getCollegesByState = (stateId: string) => {
  const stateCollegeMap: { [key: string]: College[] } = {
    "maharashtra": maharashtraColleges,
    "karnataka": [],
    "tamil-nadu": [],
    "delhi": [],
    "uttar-pradesh": [],
    "gujarat": [],
    "rajasthan": [],
    "west-bengal": [],
    "kerala": [],
    "punjab": [],
    "andhra-pradesh": [],
    "bihar": [],
    "telangana": [],
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

export const getCollegeById = (collegeId: string): College | undefined => {
  const allStates = Object.keys({
    "maharashtra": maharashtraColleges,
    "karnataka": [],
    "tamil-nadu": [],
    "delhi": [],
    "uttar-pradesh": [],
    "gujarat": [],
    "rajasthan": [],
    "west-bengal": [],
    "kerala": [],
    "punjab": [],
    "andhra-pradesh": [],
    "bihar": [],
    "telangana": [],
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
