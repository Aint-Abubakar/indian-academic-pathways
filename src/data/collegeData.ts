export interface College {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
  type: string;
  rating: number;
  description: string;
  imageUrl?: string;
  courses: string[];
  entranceExams: string[];
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
  placement: {
    percentage: number;
    avgSalary?: number;
    topRecruiters?: string[];
  };
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
  reviews: {
    rating: number;
    comment: string;
    author: string;
    date: string;
  }[];
}

export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

// Helper function to generate a slug from a name
const slugify = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

// Updated states data with all states of India where colleges exist
export const states: State[] = [
  { id: slugify("Andhra Pradesh"), name: "Andhra Pradesh", collegeCount: 13 },
  { id: slugify("Arunachal Pradesh"), name: "Arunachal Pradesh", collegeCount: 5 },
  { id: slugify("Assam"), name: "Assam", collegeCount: 6 },
  { id: slugify("Bihar"), name: "Bihar", collegeCount: 8 },
  { id: slugify("Chhattisgarh"), name: "Chhattisgarh", collegeCount: 5 },
  { id: slugify("Goa"), name: "Goa", collegeCount: 5 },
  { id: slugify("Gujarat"), name: "Gujarat", collegeCount: 10 },
  { id: slugify("Haryana"), name: "Haryana", collegeCount: 7 },
  { id: slugify("Himachal Pradesh"), name: "Himachal Pradesh", collegeCount: 5 },
  { id: slugify("Jharkhand"), name: "Jharkhand", collegeCount: 5 },
  { id: slugify("Karnataka"), name: "Karnataka", collegeCount: 15 },
  { id: slugify("Kerala"), name: "Kerala", collegeCount: 11 },
  { id: slugify("Madhya Pradesh"), name: "Madhya Pradesh", collegeCount: 10 },
  { id: slugify("Maharashtra"), name: "Maharashtra", collegeCount: 28 },
  { id: slugify("Manipur"), name: "Manipur", collegeCount: 5 },
  { id: slugify("Meghalaya"), name: "Meghalaya", collegeCount: 5 },
  { id: slugify("Mizoram"), name: "Mizoram", collegeCount: 5 },
  { id: slugify("Nagaland"), name: "Nagaland", collegeCount: 5 },
  { id: slugify("Odisha"), name: "Odisha", collegeCount: 8 },
  { id: slugify("Punjab"), name: "Punjab", collegeCount: 8 },
  { id: slugify("Rajasthan"), name: "Rajasthan", collegeCount: 9 },
  { id: slugify("Sikkim"), name: "Sikkim", collegeCount: 5 },
  { id: slugify("Tamil Nadu"), name: "Tamil Nadu", collegeCount: 18 },
  { id: slugify("Telangana"), name: "Telangana", collegeCount: 12 },
  { id: slugify("Tripura"), name: "Tripura", collegeCount: 5 },
  { id: slugify("Uttar Pradesh"), name: "Uttar Pradesh", collegeCount: 14 },
  { id: slugify("Uttarakhand"), name: "Uttarakhand", collegeCount: 7 },
  { id: slugify("West Bengal"), name: "West Bengal", collegeCount: 12 },
  { id: slugify("Delhi"), name: "Delhi", collegeCount: 20 },
];

// Add the FilterOptions interface
export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}

// Function to get colleges by state
export const getCollegesByState = (stateId: string) => {
  return colleges.filter(college => college.location.state.toLowerCase() === stateId.charAt(0).toUpperCase() + stateId.slice(1) || 
    college.location.state.toLowerCase() === stateId);
};

// Mock college data for Maharashtra and Delhi
export const colleges: College[] = [
  {
    id: 'indian-institute-of-technology-bombay',
    name: 'Indian Institute of Technology Bombay (IITB)',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Powai, Mumbai, Maharashtra 400076'
    },
    type: 'Government',
    rating: 4.8,
    description: 'IIT Bombay is a premier engineering and technology institute known for its rigorous academic programs and research.',
    imageUrl: 'https://images.unsplash.com/photo-1635070474553-3c4919c98906',
    courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering'],
    entranceExams: ['JEE Advanced'],
    fees: {
      tuition: {
        min: 220000,
        max: 220000
      },
      hostel: {
        min: 70000,
        max: 70000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 2200000,
      topRecruiters: ['Google', 'Microsoft', 'Samsung', 'Goldman Sachs']
    },
    admissionDetails: {
      eligibility: 'Qualified JEE Advanced score',
      process: 'Centralized Seat Allocation Board (CSAB) counseling',
      deadlines: 'June-July each year'
    },
    scholarships: [
      {
        name: 'Merit-cum-Means Scholarship',
        amount: 'Full tuition fee waiver',
        eligibility: 'Based on JEE rank and family income'
      },
      {
        name: 'Institute Free Studentship',
        amount: 'Full tuition fee waiver',
        eligibility: 'Based on family income'
      }
    ],
    reviews: [
      {
        rating: 4.9,
        comment: 'Excellent faculty and great research opportunities.',
        author: 'Amit Patel',
        date: '2023-01-15'
      },
      {
        rating: 4.7,
        comment: 'The campus is beautiful and the academic environment is very conducive.',
        author: 'Priya Sharma',
        date: '2023-02-20'
      }
    ]
  },
  {
    id: 'veermata-jijabai-technological-institute',
    name: 'Veermata Jijabai Technological Institute (VJTI)',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Matunga, Mumbai, Maharashtra 400019'
    },
    type: 'Government',
    rating: 4.5,
    description: 'VJTI is one of the oldest engineering colleges in Asia, offering quality education and strong industry connections.',
    imageUrl: 'https://images.unsplash.com/photo-1627523294853-40a491150ca5',
    courses: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Computer Engineering'],
    entranceExams: ['MHT CET'],
    fees: {
      tuition: {
        min: 80000,
        max: 80000
      },
      hostel: {
        min: 50000,
        max: 50000
      }
    },
    placement: {
      percentage: 80,
      avgSalary: 700000,
      topRecruiters: ['L&T', 'Tata Motors', 'Reliance', 'Infosys']
    },
    admissionDetails: {
      eligibility: 'MHT CET score',
      process: 'State Common Entrance Test Cell counseling',
      deadlines: 'June-July each year'
    },
    scholarships: [
      {
        name: 'Government of India Scholarship',
        amount: 'Varies',
        eligibility: 'Based on category and income'
      },
      {
        name: 'VJTI Alumni Association Scholarship',
        amount: 'Up to Rs. 25,000',
        eligibility: 'Based on merit and need'
      }
    ],
    reviews: [
      {
        rating: 4.6,
        comment: 'Good infrastructure and experienced faculty.',
        author: 'Kunal Verma',
        date: '2023-03-01'
      },
      {
        rating: 4.4,
        comment: 'The college has a great history and a strong alumni network.',
        author: 'Sneha Reddy',
        date: '2023-04-05'
      }
    ]
  },
  {
    id: 'university-mumbai',
    name: 'University of Mumbai',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'M.G. Road, Fort, Mumbai, Maharashtra 400032'
    },
    type: 'Government',
    rating: 4.5,
    description: 'One of the oldest and most prestigious universities in India, offering a wide range of undergraduate and postgraduate courses.',
    imageUrl: 'https://i.imgur.com/puLxzFZ.jpeg',
    courses: ['Arts', 'Science', 'Commerce', 'Law', 'Management', 'Engineering'],
    entranceExams: ['MHT-CET', 'MUCET', 'MULAW'],
    fees: {
      tuition: {
        min: 10000,
        max: 100000
      },
      hostel: {
        min: 50000,
        max: 80000
      }
    },
    placement: {
      percentage: 85,
      avgSalary: 600000,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'HDFC Bank', 'L&T']
    },
    admissionDetails: {
      eligibility: 'Varies by program, generally 50-60% marks in relevant subjects in 10+2.',
      process: 'Merit-based admissions or entrance exams depending on the course.',
      deadlines: 'Applications usually open in May-June for most courses.'
    },
    scholarships: [
      {
        name: 'University Merit Scholarship',
        amount: 'Rs. 10,000 per year',
        eligibility: 'Top performers in university exams'
      },
      {
        name: 'Financial Aid Scholarship',
        amount: 'Varies',
        eligibility: 'Economically disadvantaged students'
      }
    ],
    reviews: [
      {
        rating: 4.3,
        comment: 'Excellent reputation and history, though some facilities need modernization.',
        author: 'Rajesh Khandelwal',
        date: '2023-03-10'
      },
      {
        rating: 4.7,
        comment: 'Great faculty and course structure. The university has a vast alumni network.',
        author: 'Nisha Talwar',
        date: '2023-01-25'
      }
    ]
  },
  {
    id: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    location: {
      city: 'Delhi',
      state: 'Delhi',
      address: 'Hauz Khas, New Delhi, Delhi 110016'
    },
    type: 'Government',
    rating: 4.8,
    description: 'IIT Delhi is one of the premier engineering and research institutions in India, known for its cutting-edge research and excellent academic programs.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    courses: ['Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    entranceExams: ['JEE Advanced', 'GATE'],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 80000,
        max: 100000
      }
    },
    placement: {
      percentage: 98,
      avgSalary: 1600000,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Goldman Sachs']
    },
    admissionDetails: {
      eligibility: 'Students must qualify in JEE Advanced and be in the top 2.5% in their respective board examinations.',
      process: 'Admission is based on JEE Advanced rank and counseling process conducted by JoSAA.',
      deadlines: 'Applications typically open in September and close in June each year.'
    },
    scholarships: [
      {
        name: 'Merit-cum-Means Scholarship',
        amount: '2/3rd of tuition fee waiver + Rs. 1000/month',
        eligibility: 'Family income less than 4.5 lakhs per annum'
      },
      {
        name: 'SC/ST Scholarship',
        amount: 'Full tuition fee waiver',
        eligibility: 'SC/ST category students'
      }
    ],
    reviews: [
      {
        rating: 5,
        comment: 'World-class education and research opportunities. The campus is amazing!',
        author: 'Rahul Sharma',
        date: '2023-02-15'
      },
      {
        rating: 4.5,
        comment: 'Great faculty and industry connections. Placement opportunities are excellent.',
        author: 'Priya Patel',
        date: '2023-05-22'
      }
    ]
  },
  {
    id: 'delhi-university',
    name: 'University of Delhi (DU)',
    location: {
      city: 'Delhi',
      state: 'Delhi',
      address: 'Benito Juarez Marg, South Campus, New Delhi, Delhi 110021'
    },
    type: 'Government',
    rating: 4.7,
    description: 'The University of Delhi is one of the most prestigious universities in India, offering a wide range of courses across various disciplines.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    courses: ['Arts', 'Science', 'Commerce', 'Law', 'Management', 'Languages', 'Social Sciences'],
    entranceExams: ['DUET', 'CUET', 'DU JAT'],
    fees: {
      tuition: {
        min: 10000,
        max: 50000
      },
      hostel: {
        min: 60000,
        max: 90000
      }
    },
    placement: {
      percentage: 85,
      avgSalary: 800000,
      topRecruiters: ['Deloitte', 'EY', 'TCS', 'Wipro', 'Infosys']
    },
    admissionDetails: {
      eligibility: 'Varies by course, generally based on 10+2 scores or entrance exam',
      process: 'Merit-based admissions through centralized admission portal',
      deadlines: 'Applications typically open in May-June each year'
    },
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: 'Up to Rs. 20,000 per year',
        eligibility: 'Top scorers in university exams'
      },
      {
        name: 'Financial Aid',
        amount: 'Tuition fee waiver',
        eligibility: 'Economically disadvantaged students'
      }
    ],
    reviews: [
      {
        rating: 4.8,
        comment: 'Great educational experience with excellent faculty.',
        author: 'Rahul Gupta',
        date: '2023-03-12'
      },
      {
        rating: 4.5,
        comment: 'Diverse campus culture and good academic environment.',
        author: 'Priya Sharma',
        date: '2023-04-18'
      }
    ]
  },
  
  // Andhra Pradesh Colleges
  {
    id: 'iit-tirupati',
    name: 'Indian Institute of Technology Tirupati',
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Yerpedu – Venkatagiri Highway, Yerpedu Post, Tirupati, Andhra Pradesh 517619'
    },
    type: 'Government',
    rating: 4.7,
    description: 'IIT Tirupati is one of the newest IITs established in 2015, known for its innovative approach to engineering education and research excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585',
    courses: ['Computer Science and Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    entranceExams: ['JEE Advanced', 'GATE'],
    fees: {
      tuition: {
        min: 200000,
        max: 250000
      },
      hostel: {
        min: 80000,
        max: 100000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 1400000,
      topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Samsung R&D', 'Adobe']
    },
    admissionDetails: {
      eligibility: 'Admission to B.Tech programs is through JEE Advanced, and for M.Tech through GATE.',
      process: 'Centralized admission through JoSAA counseling for B.Tech and COAP for M.Tech programs.',
      deadlines: 'Applications typically follow the JEE Advanced and GATE schedules.'
    },
    scholarships: [
      {
        name: 'Merit-cum-Means Scholarship',
        amount: 'Full tuition fee waiver + Rs. 1,000 monthly stipend',
        eligibility: 'Based on family income and academic performance'
      },
      {
        name: 'SC/ST Scholarship',
        amount: 'Full tuition fee waiver',
        eligibility: 'SC/ST category students'
      }
    ],
    reviews: [
      {
        rating: 4.8,
        comment: 'Excellent faculty and growing infrastructure. The academic rigor is top-notch.',
        author: 'Karthik Reddy',
        date: '2024-03-15'
      },
      {
        rating: 4.6,
        comment: 'Great research opportunities despite being a new IIT. The faculty is very supportive.',
        author: 'Priya Sharma',
        date: '2024-01-20'
      }
    ]
  },
  {
    id: 'andhra-university',
    name: 'Andhra University',
    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      address: 'Visakhapatnam, Andhra Pradesh 530003'
    },
    type: 'Government',
    rating: 4.5,
    description: 'Established in 1926, Andhra University is one of the oldest and most prestigious universities in India, known for its academic excellence and research contributions.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    courses: ['Engineering', 'Science', 'Arts', 'Commerce', 'Management', 'Pharmacy', 'Law'],
    entranceExams: ['AUCET', 'GATE', 'PGCET'],
    fees: {
      tuition: {
        min: 25000,
        max: 120000
      },
      hostel: {
        min: 40000,
        max: 70000
      }
    },
    placement: {
      percentage: 80,
      avgSalary: 600000,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'Cognizant']
    },
    admissionDetails: {
      eligibility: 'Varies by program. Generally 50-60% in qualifying examination.',
      process: 'Admission through entrance examination or merit-based depending on the program.',
      deadlines: 'Applications typically open in April-May each year.'
    },
    scholarships: [
      {
        name: 'University Merit Scholarship',
        amount: 'Rs. 10,000 to Rs. 25,000 per year',
        eligibility: 'Top performers in university exams'
      },
      {
        name: 'National Scholarship Portal Schemes',
        amount: 'Varies based on scheme',
        eligibility: 'Based on caste, income, and academic performance'
      }
    ],
    reviews: [
      {
        rating: 4.6,
        comment: 'Rich heritage and excellent academic standards. The campus is beautiful and located near the beach.',
        author: 'Suresh Kumar',
        date: '2024-02-10'
      },
      {
        rating: 4.3,
        comment: 'Strong industry connections and good placement opportunities. Some facilities need modernization.',
        author: 'Lakshmi Prasad',
        date: '2023-11-15'
      }
    ]
  },
  {
    id: 'sri-venkateswara-university',
    name: 'Sri Venkateswara University',
    location: {
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      address: 'Tirupati, Andhra Pradesh 517502'
    },
    type: 'Government',
    rating: 4.3,
    description: 'Sri Venkateswara University, established in 1954, is a renowned institution offering diverse academic programs with a strong focus on research and cultural values.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    courses: ['Arts', 'Science', 'Commerce', 'Management', 'Engineering', 'Law', 'Education'],
    entranceExams: ['SVUCET', 'APRCET'],
    fees: {
      tuition: {
        min: 15000,
        max: 80000
      },
      hostel: {
        min: 30000,
        max: 60000
      }
    },
    placement: {
      percentage: 75,
      avgSalary: 500000,
      topRecruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL']
    },
    admissionDetails: {
      eligibility: 'Minimum 50% in qualifying examination for most courses.',
      process: 'Through entrance examination or merit-based selection depending on the program.',
      deadlines: 'Applications typically open in May-June each year.'
    },
    scholarships: [
      {
        name: 'University Merit Scholarship',
        amount: 'Rs. 8,000 to Rs. 15,000 per year',
        eligibility: 'Based on academic performance'
      },
      {
        name: 'SC/ST/BC Scholarship',
        amount: 'Tuition fee waiver and maintenance allowance',
        eligibility: 'SC/ST/BC category students with family income below specified limits'
      }
    ],
    reviews: [
      {
        rating: 4.4,
        comment: 'Strong academic curriculum with good faculty. The campus has a spiritual ambiance being in Tirupati.',
        author: 'Venkat Rao',
        date: '2024-01-05'
      },
      {
        rating: 4.2,
        comment: 'Affordable education with decent placement opportunities. Infrastructure needs improvement in some departments.',
        author: 'Sujatha Reddy',
        date: '2023-10-18'
      }
    ]
  },
  {
    id: 'gitam-university',
    name: 'GITAM University',
    location: {
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      address: 'Gandhi Nagar, Rushikonda, Visakhapatnam, Andhra Pradesh 530045'
    },
    type: 'Private',
    rating: 4.6,
    description: 'GITAM (Gandhi Institute of Technology and Management) is a prestigious private university known for its quality education, infrastructure, and industry connections.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    courses: ['Engineering', 'Management', 'Pharmacy', 'Science', 'Architecture', 'Law', 'Medicine'],
    entranceExams: ['GAT (GITAM Admission Test)', 'NEET', 'JEE Main'],
    fees: {
      tuition: {
        min: 150000,
        max: 400000
      },
      hostel: {
        min: 90000,
        max: 150000
      }
    },
    placement: {
      percentage: 90,
      avgSalary: 800000,
      topRecruiters: ['Microsoft', 'Amazon', 'Deloitte', 'TCS', 'Infosys', 'Accenture']
    },
    admissionDetails: {
      eligibility: 'Varies by program. Generally 60% or above in qualifying examination.',
      process: 'Through GITAM Admission Test (GAT) or based on national entrance exams like JEE, NEET.',
      deadlines: 'Applications typically open in January and close in April.'
    },
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: 'Up to 100% tuition fee waiver',
        eligibility: 'Based on performance in GAT or board examinations'
      },
      {
        name: 'Sports Scholarship',
        amount: 'Up to 50% tuition fee waiver',
        eligibility: 'National or international level sports achievers'
      }
    ],
    reviews: [
      {
        rating: 4.7,
        comment: 'Excellent infrastructure and faculty. The campus is beautiful with ocean view and great facilities.',
        author: 'Ravi Teja',
        date: '2024-04-10'
      },
      {
        rating: 4.5,
        comment: 'Strong industry connections and good placement record. The university focuses on holistic development.',
        author: 'Ananya Devi',
        date: '2023-12-05'
      }
    ]
  },
  {
    id: 'iiit-sri-city',
    name: 'Indian Institute of Information Technology Sri City',
    location: {
      city: 'Sri City',
      state: 'Andhra Pradesh',
      address: 'Sri City, Chittoor District, Andhra Pradesh 517646'
    },
    type: 'Government',
    rating: 4.5,
    description: 'IIIT Sri City is a premier institute focusing on Information Technology education and research, operating under the PPP model with industry collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
    courses: ['Computer Science and Engineering', 'Electronics and Communication Engineering', 'Data Science', 'Artificial Intelligence'],
    entranceExams: ['JEE Main', 'DASA', 'GATE'],
    fees: {
      tuition: {
        min: 175000,
        max: 225000
      },
      hostel: {
        min: 70000,
        max: 90000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 1200000,
      topRecruiters: ['Amazon', 'Microsoft', 'Google', 'Oracle', 'IBM', 'Samsung']
    },
    admissionDetails: {
      eligibility: 'Admission to B.Tech programs through JEE Main with minimum 75% in 12th or equivalent.',
      process: 'Centralized counseling through JoSAA/CSAB for B.Tech and CCMT for M.Tech programs.',
      deadlines: 'As per JEE Main/JoSAA counseling schedule.'
    },
    scholarships: [
      {
        name: 'Institute Merit Scholarship',
        amount: 'Tuition fee waiver up to 100%',
        eligibility: 'Based on JEE Main rank and academic performance'
      },
      {
        name: 'MCM Scholarship',
        amount: 'Tuition fee waiver and stipend',
        eligibility: 'Based on family income and academic performance'
      }
    ],
    reviews: [
      {
        rating: 4.6,
        comment: 'Excellent curriculum focused on practical application and industry requirements. Great placement opportunities.',
        author: 'Sandeep Kumar',
        date: '2024-02-25'
      },
      {
        rating: 4.4,
        comment: 'Strong faculty with industry experience. The location in Sri City provides good exposure to industrial environment.',
        author: 'Meera Lakshmi',
        date: '2023-09-12'
      }
    ]
  }
];

// Helper function to get a college by ID
export const getCollegeById = (collegeId: string) => {
  return colleges.find(college => college.id === collegeId);
};
