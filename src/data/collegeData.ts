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

const delhiColleges: College[] = [
  {
    id: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    description: "Premier engineering and technology institute known for its cutting-edge research and academic excellence.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management", "Design"],
    fees: {
      tuition: { min: 250000, max: 300000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi, Delhi 110016"
    },
    established: 1961,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Advanced",
    scholarships: [
      {
        name: "Merit-based Scholarship",
        amount: "Full tuition fee waiver",
        eligibility: "Top 10% students"
      },
      {
        name: "Need-based Scholarship",
        amount: "Up to ₹75,000",
        eligibility: "Family income < ₹5 lakhs"
      }
    ],
    placementRate: 96,
    averagePackage: 2500000,
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    placement: {
      percentage: 96,
      avgSalary: 2500000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"]
    },
    entranceExams: ["JEE Advanced"],
    admissionDetails: {
      eligibility: "JEE Advanced qualified with minimum 75% in 12th",
      process: "Online counseling through JoSAA",
      deadlines: "June-July annually"
    }
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University",
    description: "Premier technical university offering undergraduate and postgraduate programs in engineering and technology.",
    rating: 4.4,
    type: "Government",
    courses: ["Engineering", "Technology", "Applied Sciences"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Bawana Rd, Shahbad Daulatpur, Delhi 110042"
    },
    established: 1941,
    accreditation: ["NAAC A+", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Center"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 85,
    averagePackage: 1200000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 85,
      avgSalary: 1200000,
      topRecruiters: ["Microsoft", "Amazon", "Adobe", "Samsung", "Flipkart"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "nsit-delhi",
    name: "Netaji Subhas University of Technology",
    description: "Renowned engineering university formerly known as NSIT, offering quality technical education.",
    rating: 4.3,
    type: "Government",
    courses: ["Engineering", "Technology", "Management"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Azad Hind Fauj Marg, Sector 3, Dwarka, New Delhi 110078"
    },
    established: 1983,
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
    placementRate: 82,
    averagePackage: 1100000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 82,
      avgSalary: 1100000,
      topRecruiters: ["Amazon", "Microsoft", "Samsung", "Oracle", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "iiit-delhi",
    name: "Indraprastha Institute of Information Technology Delhi",
    description: "Research-focused institute specializing in information technology and computer sciences.",
    rating: 4.5,
    type: "Government",
    courses: ["Computer Science", "Electronics", "Mathematics", "Design"],
    fees: {
      tuition: { min: 350000, max: 400000 },
      hostel: { min: 40000, max: 50000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Okhla Industrial Estate, Phase III, New Delhi 110020"
    },
    established: 2008,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Research Centers"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹50,000 per year",
        eligibility: "Top 5% students"
      }
    ],
    placementRate: 95,
    averagePackage: 1800000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Uber"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "Institute counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "du-north-campus",
    name: "University of Delhi - North Campus",
    description: "Premier central university offering diverse undergraduate and postgraduate programs.",
    rating: 4.6,
    type: "Government",
    courses: ["Arts", "Science", "Commerce", "Social Sciences"],
    fees: {
      tuition: { min: 15000, max: 35000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Delhi University, North Campus, Delhi 110007"
    },
    established: 1922,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers"],
    admissionProcess: "CUET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 75,
      avgSalary: 600000,
      topRecruiters: ["Deloitte", "EY", "KPMG", "Wipro", "TCS"]
    },
    entranceExams: ["CUET"],
    admissionDetails: {
      eligibility: "CUET qualified with relevant subjects in 12th",
      process: "University counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "jnu-delhi",
    name: "Jawaharlal Nehru University",
    description: "Premier research university known for social sciences, languages, and international studies.",
    rating: 4.4,
    type: "Government",
    courses: ["Arts", "Social Sciences", "Languages", "International Studies"],
    fees: {
      tuition: { min: 5000, max: 15000 },
      hostel: { min: 12000, max: 20000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "New Mehrauli Rd, JNU, New Delhi 110067"
    },
    established: 1969,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Hostel", "Sports", "Cultural Centers", "Research Centers"],
    admissionProcess: "JNUEE",
    scholarships: [
      {
        name: "UGC Fellowship",
        amount: "₹31,000 per month",
        eligibility: "Research scholars"
      }
    ],
    placementRate: 65,
    averagePackage: 500000,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    placement: {
      percentage: 65,
      avgSalary: 500000,
      topRecruiters: ["Government Organizations", "NGOs", "Research Institutes", "Media"]
    },
    entranceExams: ["JNUEE"],
    admissionDetails: {
      eligibility: "JNUEE qualified with relevant undergraduate degree",
      process: "University counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences Delhi",
    description: "Premier medical institute and hospital providing world-class medical education and healthcare.",
    rating: 4.9,
    type: "Government",
    courses: ["Medicine", "Nursing", "Allied Health Sciences"],
    fees: {
      tuition: { min: 5000, max: 15000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Ansari Nagar, New Delhi 110029"
    },
    established: 1956,
    accreditation: ["NAAC A++", "MCI"],
    facilities: ["Library", "Labs", "Hostel", "Hospital", "Research Centers"],
    admissionProcess: "NEET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 100,
    averagePackage: 1500000,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    placement: {
      percentage: 100,
      avgSalary: 1500000,
      topRecruiters: ["Government Hospitals", "Private Healthcare", "Research Institutes"]
    },
    entranceExams: ["NEET"],
    admissionDetails: {
      eligibility: "NEET qualified with PCB in 12th",
      process: "Centralized counseling",
      deadlines: "August-September annually"
    }
  },
  {
    id: "dms-delhi",
    name: "Delhi School of Management, DTU",
    description: "Premier management school offering MBA and executive programs with industry focus.",
    rating: 4.2,
    type: "Government",
    courses: ["Management", "MBA", "Executive Programs"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Bawana Rd, Shahbad Daulatpur, Delhi 110042"
    },
    established: 2009,
    accreditation: ["NAAC A", "AICTE"],
    facilities: ["Library", "Case Study Rooms", "Hostel", "Sports"],
    admissionProcess: "CAT",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹40,000 per year",
        eligibility: "CAT 95+ percentile"
      }
    ],
    placementRate: 88,
    averagePackage: 1300000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 88,
      avgSalary: 1300000,
      topRecruiters: ["Deloitte", "KPMG", "Amazon", "Flipkart", "Paytm"]
    },
    entranceExams: ["CAT"],
    admissionDetails: {
      eligibility: "CAT qualified with graduation in any discipline",
      process: "Institute counseling",
      deadlines: "March-April annually"
    }
  },
  {
    id: "jamia-millia",
    name: "Jamia Millia Islamia",
    description: "Central university offering diverse programs in engineering, humanities, and social sciences.",
    rating: 4.1,
    type: "Government",
    courses: ["Engineering", "Arts", "Social Sciences", "Architecture"],
    fees: {
      tuition: { min: 25000, max: 45000 },
      hostel: { min: 15000, max: 25000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Jamia Nagar, Okhla, New Delhi 110025"
    },
    established: 1920,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Cultural Centers"],
    admissionProcess: "JMI Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 72,
    averagePackage: 700000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 72,
      avgSalary: 700000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["JMI Entrance"],
    admissionDetails: {
      eligibility: "JMI entrance qualified with relevant 12th subjects",
      process: "University counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "igdtuw-delhi",
    name: "Indira Gandhi Delhi Technical University for Women",
    description: "Technical university exclusively for women offering engineering and technology programs.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology", "Applied Sciences"],
    fees: {
      tuition: { min: 120000, max: 150000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Kashmere Gate, Delhi 110006"
    },
    established: 2013,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 800000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 75,
      avgSalary: 800000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Oracle", "Accenture"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified female candidates with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "vips-delhi",
    name: "Vivekananda Institute of Professional Studies",
    description: "Multi-disciplinary institute offering programs in engineering, management, and law.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Applied Sciences"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 25000, max: 35000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Pitampura, Delhi 110034"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 70,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 70,
      avgSalary: 650000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Capgemini"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with relevant 12th subjects",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "bharati-vidyapeeth-delhi",
    name: "Bharati Vidyapeeth College of Engineering Delhi",
    description: "Engineering college known for its comprehensive programs and industry connections.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 160000, max: 190000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "A-4, Paschim Vihar, Rohtak Rd, New Delhi 110063"
    },
    established: 1999,
    accreditation: ["NAAC B++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 25% students"
      }
    ],
    placementRate: 68,
    averagePackage: 580000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 68,
      avgSalary: 580000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "HCL"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "amity-delhi",
    name: "Amity University Delhi NCR",
    description: "Private university offering diverse programs with modern infrastructure and industry partnerships.",
    rating: 4.0,
    type: "Private",
    courses: ["Engineering", "Management", "Law", "Journalism", "Design"],
    fees: {
      tuition: { min: 280000, max: 350000 },
      hostel: { min: 40000, max: 50000 },
    },
    location: {
      city: "Noida",
      state: "Delhi",
      address: "Sector 125, Noida, Uttar Pradesh 201313"
    },
    established: 2005,
    accreditation: ["NAAC A+"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Centers"],
    admissionProcess: "Amity JEE",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "Up to ₹1,00,000",
        eligibility: "JEE top scorers"
      }
    ],
    placementRate: 85,
    averagePackage: 950000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 85,
      avgSalary: 950000,
      topRecruiters: ["Microsoft", "Amazon", "Accenture", "Deloitte", "IBM"]
    },
    entranceExams: ["Amity JEE"],
    admissionDetails: {
      eligibility: "Amity JEE qualified or based on 12th marks",
      process: "University counseling",
      deadlines: "June-July annually"
    }
  },
  {
    id: "jss-delhi",
    name: "JSS Academy of Technical Education",
    description: "Technical institute offering engineering and management programs with industry focus.",
    rating: 3.7,
    type: "Private",
    courses: ["Engineering", "Management", "Applied Sciences"],
    fees: {
      tuition: { min: 140000, max: 170000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "Noida",
      state: "Delhi",
      address: "Sector 62, Noida, Uttar Pradesh 201309"
    },
    established: 1998,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹10,000 per year",
        eligibility: "Top 30% students"
      }
    ],
    placementRate: 65,
    averagePackage: 520000,
    imageUrl: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
    placement: {
      percentage: 65,
      avgSalary: 520000,
      topRecruiters: ["TCS", "Infosys", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "mait-delhi",
    name: "Maharaja Agrasen Institute of Technology",
    description: "Technical institute affiliated to GGSIPU offering engineering and applied sciences programs.",
    rating: 3.9,
    type: "Private",
    courses: ["Engineering", "Applied Sciences"],
    fees: {
      tuition: { min: 150000, max: 180000 },
      hostel: { min: 22000, max: 32000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "PSP Area, Sector 22, Rohini, Delhi 110086"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 72,
    averagePackage: 680000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 72,
      avgSalary: 680000,
      topRecruiters: ["Amazon", "Microsoft", "Samsung", "Oracle"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "msit-delhi",
    name: "Maharaja Surajmal Institute of Technology",
    description: "Engineering institute known for its academic excellence and placement record.",
    rating: 3.8,
    type: "Private",
    courses: ["Engineering", "Applied Sciences"],
    fees: {
      tuition: { min: 145000, max: 175000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "C-4, Janakpuri, New Delhi 110058"
    },
    established: 1999,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Sports", "Auditorium"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹12,000 per year",
        eligibility: "Top 20% students"
      }
    ],
    placementRate: 70,
    averagePackage: 620000,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    placement: {
      percentage: 70,
      avgSalary: 620000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Wipro"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with PCM in 12th",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "gbpiet-delhi",
    name: "G.B. Pant Government Engineering College",
    description: "Government engineering college offering quality technical education at affordable fees.",
    rating: 4.0,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 85000, max: 115000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "JLN Marg, New Delhi 110003"
    },
    established: 2007,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹18,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 78,
    averagePackage: 750000,
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    placement: {
      percentage: 78,
      avgSalary: 750000,
      topRecruiters: ["Microsoft", "Amazon", "Samsung", "Oracle"]
    },
    entranceExams: ["JEE Main"],
    admissionDetails: {
      eligibility: "JEE Main qualified with PCM in 12th",
      process: "JAC Delhi counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "teri-delhi",
    name: "TERI School of Advanced Studies",
    description: "Research institute focusing on energy, environment, and sustainable development studies.",
    rating: 4.1,
    type: "Private",
    courses: ["Environmental Sciences", "Policy Studies", "Management"],
    fees: {
      tuition: { min: 200000, max: 280000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "10, Institutional Area, Vasant Kunj, New Delhi 110070"
    },
    established: 1998,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Research Centers"],
    admissionProcess: "TERI Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹25,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 80,
    averagePackage: 850000,
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    placement: {
      percentage: 80,
      avgSalary: 850000,
      topRecruiters: ["UN Organizations", "Government Bodies", "NGOs", "Consulting Firms"]
    },
    entranceExams: ["TERI Entrance"],
    admissionDetails: {
      eligibility: "TERI entrance qualified with relevant background",
      process: "Institute counseling",
      deadlines: "April-May annually"
    }
  },
  {
    id: "ipu-delhi",
    name: "Guru Gobind Singh Indraprastha University",
    description: "State university offering diverse programs through affiliated colleges across Delhi NCR.",
    rating: 3.8,
    type: "Government",
    courses: ["Engineering", "Management", "Law", "Medicine", "Pharmacy"],
    fees: {
      tuition: { min: 120000, max: 180000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Sector 16C, Dwarka, New Delhi 110078"
    },
    established: 1998,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Sports", "Medical Center"],
    admissionProcess: "IPU CET",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹15,000 per year",
        eligibility: "Top 15% students"
      }
    ],
    placementRate: 68,
    averagePackage: 600000,
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    placement: {
      percentage: 68,
      avgSalary: 600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"]
    },
    entranceExams: ["IPU CET"],
    admissionDetails: {
      eligibility: "IPU CET qualified with relevant 12th subjects",
      process: "University counseling",
      deadlines: "July-August annually"
    }
  },
  {
    id: "sia-delhi",
    name: "Symbiosis Institute of Australia Delhi",
    description: "International institute offering programs in collaboration with Australian universities.",
    rating: 3.6,
    type: "Private",
    courses: ["Management", "Information Technology", "Design"],
    fees: {
      tuition: { min: 300000, max: 400000 },
      hostel: { min: 35000, max: 45000 },
    },
    location: {
      city: "Gurgaon",
      state: "Delhi",
      address: "Plot No. 681, Sector 15 Part II, Gurgaon, Haryana 122001"
    },
    established: 2010,
    accreditation: ["NAAC B+"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "Institute Entrance",
    scholarships: [
      {
        name: "Merit Scholarship",
        amount: "₹30,000 per year",
        eligibility: "Top 10% students"
      }
    ],
    placementRate: 75,
    averagePackage: 720000,
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    placement: {
      percentage: 75,
      avgSalary: 720000,
      topRecruiters: ["International Companies", "MNCs", "IT Companies"]
    },
    entranceExams: ["Institute Entrance"],
    admissionDetails: {
      eligibility: "Institute entrance qualified with graduation",
      process: "Institute counseling",
      deadlines: "May-June annually"
    }
  },
  {
    id: "ncdc-delhi",
    name: "National Centre for Design and Product Development",
    description: "Specialized institute focusing on design, innovation, and product development.",
    rating: 3.7,
    type: "Government",
    courses: ["Design", "Product Development", "Innovation Management"],
    fees: {
      tuition: { min: 80000, max: 120000 },
      hostel: { min: 18000, max: 28000 },
    },
    location: {
      city: "New Delhi",
      state: "Delhi",
      address: "Hauz Khas, New Delhi 110016"
    },
    established: 2012,
    accreditation: ["NAAC B++"],
    facilities: ["Design Studios", "Labs", "Workshop", "Innovation Center"],
    admissionProcess: "Design Entrance",
    scholarships: [
      {
        name: "Creative Excellence Scholarship",
        amount: "₹20,000 per year",
        eligibility: "Portfolio based selection"
      }
    ],
    placementRate: 72,
    averagePackage: 650000,
    imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
    placement: {
      percentage: 72,
      avgSalary: 650000,
      topRecruiters: ["Design Studios", "Product Companies", "Startups", "MNCs"]
    },
    entranceExams: ["Design Entrance"],
    admissionDetails: {
      eligibility: "Design entrance qualified with portfolio submission",
      process: "Institute counseling",
      deadlines: "June-July annually"
    }
  }
];

export const getCollegesByState = (stateId: string) => {
  const stateCollegeMap: { [key: string]: College[] } = {
    "maharashtra": maharashtraColleges,
    "delhi": delhiColleges,
    "karnataka": [],
    "tamil-nadu": [],
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
    "delhi": delhiColleges,
    "karnataka": [],
    "tamil-nadu": [],
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
