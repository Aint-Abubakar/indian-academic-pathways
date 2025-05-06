export interface College {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  type: string;
  address: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  courses: string[];
  placement: {
    percentage: number;
    averagePackage: string;
    topRecruiters: string[];
  };
  facilities: string[];
}

export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

export const getCollegeById = (collegeId: string, stateId: string): College | undefined => {
  const colleges = getCollegesByState(stateId);
  return colleges.find(college => college.id === collegeId);
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
    contact: {
      phone: "+91-877-2500337",
      email: "info@iittp.ac.in",
      website: "https://www.iittp.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    placement: {
      percentage: 95,
      averagePackage: "12 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Intel"]
    },
    facilities: ["Library", "Sports Complex", "Computer Labs", "Hostel", "Cafeteria"]
  },
  {
    id: "andhra-university",
    name: "Andhra University",
    description: "Andhra University is one of the oldest and most prestigious universities in India, offering a wide range of programs across disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585",
    rating: 4.3,
    type: "Government",
    address: "Andhra University, Visakhapatnam, Andhra Pradesh - 530003",
    contact: {
      phone: "+91-891-2844000",
      email: "registrar@andhrauniversity.edu.in",
      website: "https://www.andhrauniversity.edu.in/"
    },
    courses: ["Engineering", "Science", "Arts", "Commerce", "Management", "Law", "Pharmacy"],
    placement: {
      percentage: 80,
      averagePackage: "6 LPA",
      topRecruiters: ["TCS", "Infosys", "Wipro", "HCL"]
    },
    facilities: ["Central Library", "Sports Fields", "Laboratories", "Hostels", "Cafeterias"]
  },
  {
    id: "sri-venkateswara-university",
    name: "Sri Venkateswara University",
    description: "Sri Venkateswara University is a public state university known for its quality education and research across various disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    rating: 4.1,
    type: "Government",
    address: "Sri Venkateswara University, Tirupati, Andhra Pradesh - 517502",
    contact: {
      phone: "+91-877-2289896",
      email: "registrar@svuniversity.edu.in",
      website: "https://www.svuniversity.edu.in/"
    },
    courses: ["Arts", "Science", "Commerce", "Engineering", "Management", "Law"],
    placement: {
      percentage: 75,
      averagePackage: "5.5 LPA",
      topRecruiters: ["Infosys", "Wipro", "TCS", "Cognizant"]
    },
    facilities: ["Library", "Labs", "Hostels", "Auditorium", "Sports Complex"]
  },
  {
    id: "gitam-university",
    name: "GITAM University",
    description: "GITAM (Gandhi Institute of Technology and Management) is a private university known for its engineering and management programs.",
    imageUrl: "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df",
    rating: 4.4,
    type: "Private",
    address: "GITAM University, Visakhapatnam, Andhra Pradesh - 530045",
    contact: {
      phone: "+91-891-2840501",
      email: "info@gitam.edu",
      website: "https://www.gitam.edu/"
    },
    courses: ["Engineering", "Management", "Pharmacy", "Science", "Architecture", "Law"],
    placement: {
      percentage: 85,
      averagePackage: "7 LPA",
      topRecruiters: ["Microsoft", "Amazon", "IBM", "Oracle"]
    },
    facilities: ["Central Library", "Sports Complex", "Hostels", "Cafeterias", "Wi-Fi Campus"]
  },
  {
    id: "iiit-sri-city",
    name: "IIIT Sri City",
    description: "Indian Institute of Information Technology, Sri City focuses on information technology education and research.",
    imageUrl: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    rating: 4.2,
    type: "Government",
    address: "IIIT Sri City, Chittoor District, Andhra Pradesh - 517646",
    contact: {
      phone: "+91-7670908899",
      email: "info@iiits.ac.in",
      website: "https://www.iiits.ac.in/"
    },
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    placement: {
      percentage: 90,
      averagePackage: "10 LPA",
      topRecruiters: ["Google", "Amazon", "Oracle", "SAP"]
    },
    facilities: ["Library", "Computer Labs", "Sports Facilities", "Hostels", "Cafeteria"]
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
export const getCollegesByState = (stateId: string, filters: FilterOptions = {}): College[] => {
  console.log(`State: ${stateId}, Colleges: ${stateId === 'andhra-pradesh' ? andhraPradeshColleges.length : 0}`);
  
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
        contact: {
          phone: "+91-11-2659-1999",
          email: "info@iitd.ac.in",
          website: "https://www.iitd.ac.in/"
        },
        courses: ["B.Tech", "M.Tech", "Ph.D", "MBA"],
        placement: {
          percentage: 98,
          averagePackage: "16 LPA",
          topRecruiters: ["Google", "Microsoft", "Amazon", "Intel"]
        },
        facilities: ["Library", "Sports Complex", "Computer Labs", "Hostel", "Cafeteria"]
      },
      {
        id: "du",
        name: "University of Delhi (DU)",
        description: "University of Delhi is a premier university of the country with a venerable legacy and international acclaim for highest academic standards, diverse educational programs, and distinguished faculty.",
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
        rating: 4.7,
        type: "Government",
        address: "University of Delhi, North Campus, Delhi 110007",
        contact: {
          phone: "+91-11-2766-7853",
          email: "registrar@du.ac.in",
          website: "http://www.du.ac.in/"
        },
        courses: ["BA", "BSc", "BCom", "MA", "MSc", "MCom", "Ph.D"],
        placement: {
          percentage: 85,
          averagePackage: "8 LPA",
          topRecruiters: ["Deloitte", "EY", "TCS", "Wipro"]
        },
        facilities: ["Library", "Sports Complex", "Labs", "Hostels", "Canteens"]
      }
    ];
    return delhiColleges;
  }
  
  // Return empty array for all other states for now
  return [];
};

export type FilterOptions = {
  type?: string;
  rating?: number;
};
