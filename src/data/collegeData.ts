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

// Array of states with colleges
export const states: State[] = [
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    collegeCount: andhraPradeshColleges.length
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
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
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    collegeCount: 0
  },
  {
    id: "goa",
    name: "Goa",
    collegeCount: 0
  },
  {
    id: "gujarat",
    name: "Gujarat",
    collegeCount: 0
  },
  {
    id: "haryana",
    name: "Haryana", 
    collegeCount: 0
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    collegeCount: 0
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    collegeCount: 0
  },
  {
    id: "karnataka",
    name: "Karnataka",
    collegeCount: 0
  },
  {
    id: "kerala",
    name: "Kerala",
    collegeCount: 0
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    collegeCount: 0
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 0
  },
  {
    id: "manipur",
    name: "Manipur",
    collegeCount: 0
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    collegeCount: 0
  },
  {
    id: "mizoram",
    name: "Mizoram",
    collegeCount: 0
  },
  {
    id: "nagaland",
    name: "Nagaland",
    collegeCount: 0
  },
  {
    id: "odisha",
    name: "Odisha",
    collegeCount: 0
  },
  {
    id: "punjab",
    name: "Punjab",
    collegeCount: 0
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    collegeCount: 0
  },
  {
    id: "sikkim",
    name: "Sikkim",
    collegeCount: 0
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    collegeCount: 0
  },
  {
    id: "telangana",
    name: "Telangana",
    collegeCount: 0
  },
  {
    id: "tripura",
    name: "Tripura",
    collegeCount: 0
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    collegeCount: 0
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    collegeCount: 0
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    collegeCount: 0
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 2
  }
];

// Filter colleges by state
export const getCollegesByState = (stateId: string): College[] => {
  console.log(`Getting colleges for state: ${stateId}`);
  
  // Return Andhra Pradesh colleges if state ID matches
  if (stateId === 'andhra-pradesh') {
    return andhraPradeshColleges;
  }
  
  // Return Delhi colleges if state ID matches
  if (stateId === 'delhi') {
    const delhiColleges: College[] = [
      {
        id: "iit-delhi",
        name: "Indian Institute of Technology Delhi",
        description: "IIT Delhi is a world-renowned technical institute established in 1961 as a College of Engineering. It was later declared an Institution of National Importance and has been instrumental in providing technical manpower and know-how to the country.",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        rating: 4.9,
        type: "Government",
        address: "IIT Campus, Hauz Khas, New Delhi, Delhi 110016",
        location: {
          address: "IIT Campus, Hauz Khas",
          city: "New Delhi",
          state: "Delhi"
        },
        contact: {
          phone: "+91-11-2659-1999",
          email: "info@iitd.ac.in",
          website: "https://www.iitd.ac.in/"
        },
        courses: ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        placement: {
          percentage: 98,
          averagePackage: "16 LPA",
          avgSalary: 1600000,
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
        entranceExams: ["JEE Advanced", "GATE", "CAT"],
        admissionDetails: {
          eligibility: "JEE Advanced rank required for B.Tech, GATE score for M.Tech",
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
        id: "du",
        name: "University of Delhi (DU)",
        description: "University of Delhi is a premier university of the country with a venerable legacy and international acclaim for highest academic standards, diverse educational programs, and distinguished faculty.",
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
        rating: 4.7,
        type: "Government",
        address: "University of Delhi, North Campus, Delhi 110007",
        location: {
          address: "University of Delhi, North Campus",
          city: "Delhi",
          state: "Delhi"
        },
        contact: {
          phone: "+91-11-2766-7853",
          email: "registrar@du.ac.in",
          website: "http://www.du.ac.in/"
        },
        courses: ["BA", "BSc", "BCom", "MA", "MSc", "MCom", "Ph.D"],
        placement: {
          percentage: 85,
          averagePackage: "8 LPA",
          avgSalary: 800000,
          topRecruiters: ["Deloitte", "EY", "TCS", "Wipro"]
        },
        facilities: ["Library", "Sports Complex", "Labs", "Hostels", "Canteens"],
        fees: {
          tuition: {
            min: 15000,
            max: 50000
          },
          hostel: {
            min: 10000,
            max: 20000
          }
        },
        entranceExams: ["DUET", "CUET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 45-60% marks depending on course",
          process: "Merit-based or entrance test-based depending on program",
          deadlines: "Applications typically open in June each year"
        },
        scholarships: [
          {
            name: "Vice Chancellor's Merit Scholarship",
            amount: "Rs. 10,000 per annum",
            eligibility: "Top performers in each course"
          },
          {
            name: "Financial Aid Scholarship",
            amount: "Varies based on need",
            eligibility: "Economically weaker section students"
          }
        ]
      }
    ];
    return delhiColleges;
  }
  
  // Return empty array for all other states for now
  return [];
};
