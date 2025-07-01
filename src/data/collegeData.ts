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
  location: string;
  established: number;
  accreditation: string[];
  facilities: string[];
  admissionProcess: string;
  scholarships: string[];
  placementRate: number;
  averagePackage: number;
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
    description:
      "A premier engineering institute known for its research and academic excellence.",
    rating: 4.8,
    type: "Government",
    courses: ["Engineering", "Science", "Management"],
    fees: {
      tuition: { min: 220000, max: 250000 },
      hostel: { min: 30000, max: 40000 },
    },
    location: "Mumbai, Maharashtra",
    established: 1958,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 95,
    averagePackage: 2200000,
  },
  {
    id: "vjti-mumbai",
    name: "Veermata Jijabai Technological Institute",
    description:
      "One of the oldest engineering colleges in Asia, offering quality education and research.",
    rating: 4.5,
    type: "Government",
    courses: ["Engineering", "Technology"],
    fees: {
      tuition: { min: 80000, max: 100000 },
      hostel: { min: 20000, max: 30000 },
    },
    location: "Mumbai, Maharashtra",
    established: 1887,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "MHT CET",
    scholarships: ["Merit-based", "EBC"],
    placementRate: 80,
    averagePackage: 800000,
  },
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
    location: "Bangalore, Karnataka",
    established: 1909,
    accreditation: ["NAAC A++"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "GATE, JEE Advanced",
    scholarships: ["Merit-based", "Research"],
    placementRate: 90,
    averagePackage: 2500000,
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
    location: "Surathkal, Karnataka",
    established: 1960,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: ["Merit-based", "SC/ST"],
    placementRate: 85,
    averagePackage: 1200000,
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
    location: "Chennai, Tamil Nadu",
    established: 1959,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 92,
    averagePackage: 2000000,
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
    location: "Chennai, Tamil Nadu",
    established: 1978,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "TNEA",
    scholarships: ["Merit-based", "BC/MBC/DNC"],
    placementRate: 75,
    averagePackage: 700000,
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
    location: "New Delhi",
    established: 1961,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 94,
    averagePackage: 2100000,
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
    location: "New Delhi",
    established: 1941,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: ["Merit-based", "SC/ST/OBC"],
    placementRate: 82,
    averagePackage: 1100000,
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
    location: "Kanpur, Uttar Pradesh",
    established: 1959,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 93,
    averagePackage: 1900000,
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
    location: "Allahabad, Uttar Pradesh",
    established: 1961,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: ["Merit-based", "OBC/Minority"],
    placementRate: 80,
    averagePackage: 1000000,
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
    location: "Gandhinagar, Gujarat",
    established: 2008,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 91,
    averagePackage: 1800000,
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
    location: "Ahmedabad, Gujarat",
    established: 2003,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main, GUJCET",
    scholarships: ["Merit-based", "Minority"],
    placementRate: 78,
    averagePackage: 900000,
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
    location: "Jodhpur, Rajasthan",
    established: 2008,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 90,
    averagePackage: 1700000,
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
    location: "Jaipur, Rajasthan",
    established: 1963,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: ["Merit-based", "OBC"],
    placementRate: 77,
    averagePackage: 950000,
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
    location: "Kharagpur, West Bengal",
    established: 1951,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 94,
    averagePackage: 2000000,
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
    location: "Kolkata, West Bengal",
    established: 1955,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "WBJEE",
    scholarships: ["Merit-based", "SC/ST/OBC"],
    placementRate: 82,
    averagePackage: 1100000,
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
    location: "Palakkad, Kerala",
    established: 2015,
    accreditation: ["NAAC B"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 88,
    averagePackage: 1600000,
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
    location: "Calicut, Kerala",
    established: 1961,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main",
    scholarships: ["Merit-based", "SC/ST"],
    placementRate: 79,
    averagePackage: 1000000,
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
    location: "Ropar, Punjab",
    established: 2008,
    accreditation: ["NAAC A"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 89,
    averagePackage: 1700000,
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
    location: "Patiala, Punjab",
    established: 1956,
    accreditation: ["NAAC A", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Main, Thapar Entrance Exam",
    scholarships: ["Merit-based", "Minority"],
    placementRate: 80,
    averagePackage: 1100000,
  },
];

// Add sample college data for new states (adding a few examples for the major states)
const andhraPradeshColleges = [
  {
    id: "iit-tirupati",
    name: "IIT Tirupati",
    description: "Premier engineering institute known for innovation and research excellence.",
    rating: 4.6,
    type: "Government" as const,
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 25000, max: 35000 }
    },
    location: "Tirupati, Andhra Pradesh",
    established: 2015,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based"],
    placementRate: 95,
    averagePackage: 1200000
  }
];

const biharColleges = [
  {
    id: "iit-patna",
    name: "IIT Patna",
    description: "Leading technical institute with strong focus on engineering and technology.",
    rating: 4.5,
    type: "Government" as const,
    courses: ["Engineering", "Technology", "Research"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 20000, max: 30000 }
    },
    location: "Patna, Bihar",
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "SC/ST"],
    placementRate: 92,
    averagePackage: 1100000
  }
];

const telanganaColleges = [
  {
    id: "iit-hyderabad",
    name: "IIT Hyderabad",
    description: "Prestigious engineering institute known for cutting-edge research and innovation.",
    rating: 4.7,
    type: "Government" as const,
    courses: ["Engineering", "Technology", "Research", "Design"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 30000, max: 40000 }
    },
    location: "Hyderabad, Telangana",
    established: 2008,
    accreditation: ["NAAC A++", "NBA"],
    facilities: ["Library", "Labs", "Hostel", "Sports", "Innovation Hub"],
    admissionProcess: "JEE Advanced",
    scholarships: ["Merit-based", "Need-based", "Research"],
    placementRate: 96,
    averagePackage: 1400000
  }
];

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
