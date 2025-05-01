
export interface College {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    address: string;
  };
  type: "Private" | "Government";
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
  scholarships: Array<{
    name: string;
    amount: string;
    eligibility: string;
  }>;
  reviews: Array<{
    rating: number;
    comment: string;
    author: string;
    date: string;
  }>;
}

export interface State {
  id: string;
  name: string;
  collegeCount: number;
}

// Mock states data
export const states: State[] = [
  { id: 'maharashtra', name: 'Maharashtra', collegeCount: 28 },
  { id: 'delhi', name: 'Delhi', collegeCount: 20 },
  { id: 'karnataka', name: 'Karnataka', collegeCount: 5 },
  { id: 'tamil-nadu', name: 'Tamil Nadu', collegeCount: 3 },
  { id: 'west-bengal', name: 'West Bengal', collegeCount: 2 },
  { id: 'telangana', name: 'Telangana', collegeCount: 2 },
  { id: 'gujarat', name: 'Gujarat', collegeCount: 1 },
  { id: 'rajasthan', name: 'Rajasthan', collegeCount: 1 },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', collegeCount: 1 },
  { id: 'chandigarh', name: 'Chandigarh', collegeCount: 1 },
  { id: 'odisha', name: 'Odisha', collegeCount: 1 },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', collegeCount: 1 },
  { id: 'kerala', name: 'Kerala', collegeCount: 1 }
];

// Mock college data for Maharashtra and Delhi
export const colleges: College[] = [
  // Maharashtra Colleges
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay (IIT Bombay)',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Powai, Mumbai, Maharashtra 400076'
    },
    type: 'Government',
    rating: 4.9,
    description: 'IIT Bombay is renowned for its outstanding engineering education, research facilities, and vibrant campus life.',
    imageUrl: 'https://i.imgur.com/ZWRNik8.jpeg',
    courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Aerospace Engineering', 'Chemical Engineering'],
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
      avgSalary: 1700000,
      topRecruiters: ['Microsoft', 'Google', 'Morgan Stanley', 'Intel', 'Qualcomm']
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
        comment: 'Exceptional academic environment and research facilities. Truly world-class!',
        author: 'Vivek Sharma',
        date: '2023-02-20'
      },
      {
        rating: 4.8,
        comment: 'Amazing technical fests and extracurricular opportunities alongside excellent academics.',
        author: 'Meera Iyer',
        date: '2023-05-15'
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
  // Rest of Maharashtra colleges with minimal details
  {
    id: 'sppu',
    name: 'Savitribai Phule Pune University',
    location: {
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Ganeshkhind, Pune, Maharashtra 411007'
    },
    type: 'Government',
    rating: 4.5,
    description: 'Formerly known as University of Pune, SPPU is a premier institution known for its strong academic programs and research.',
    imageUrl: 'https://i.postimg.cc/qzS9b2pB/savitribai-phule-pune-university.jpg',
    courses: ['Arts', 'Science', 'Commerce', 'Engineering', 'Management', 'Law'],
    entranceExams: ['PET', 'MHT-CET', 'GATE'],
    fees: {
      tuition: {
        min: 15000,
        max: 90000
      }
    },
    placement: {
      percentage: 80
    },
    admissionDetails: {
      eligibility: 'Varies by program, generally 45-60% in qualifying examination.',
      process: 'Merit-based or entrance examination depending on program.',
      deadlines: 'May to July depending on course'
    },
    scholarships: [
      {
        name: 'University Merit Scholarship',
        amount: 'Varies',
        eligibility: 'Top scorers in university exams'
      }
    ],
    reviews: [
      {
        rating: 4.2,
        comment: 'Excellent academic standards with strong research focus.',
        author: 'Amit Desai',
        date: '2023-04-18'
      }
    ]
  },
  {
    id: 'coep',
    name: 'College of Engineering Pune (COEP)',
    location: {
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Wellesley Rd, Shivajinagar, Pune, Maharashtra 411005'
    },
    type: 'Government',
    rating: 4.7,
    description: 'One of the oldest engineering colleges in India with a rich heritage and excellent technical education.',
    imageUrl: 'https://i.postimg.cc/wy2C0Pjn/coep.jpg',
    courses: ['Mechanical Engineering', 'Electrical Engineering', 'Computer Science', 'Civil Engineering', 'Production Engineering'],
    entranceExams: ['JEE Main', 'GATE', 'MHT-CET'],
    fees: {
      tuition: {
        min: 50000,
        max: 100000
      }
    },
    placement: {
      percentage: 95
    },
    admissionDetails: {
      eligibility: 'JEE Main or MHT-CET scores required.',
      process: 'Centralized admission process based on entrance exam ranks.',
      deadlines: 'June-July each year'
    },
    scholarships: [
      {
        name: 'Merit Scholarships',
        amount: 'Tuition waiver',
        eligibility: 'Top academic performers'
      }
    ],
    reviews: [
      {
        rating: 4.8,
        comment: 'Excellent faculty and infrastructure with strong industry connections.',
        author: 'Priya Singh',
        date: '2023-02-10'
      }
    ]
  },
  // Adding new Maharashtra colleges
  {
    id: 'kj-somaiya',
    name: 'KJ Somaiya College of Engineering',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Vidyanagar, Vidyavihar East, Mumbai, Maharashtra 400077'
    },
    type: 'Private',
    rating: 4.6,
    description: 'KJ Somaiya College of Engineering is known for its excellent infrastructure, innovative teaching methods, and strong industry connections.',
    imageUrl: 'https://ibb.co/k2Ly4td',
    courses: ['Computer Engineering', 'Information Technology', 'Electronics Engineering', 'Mechanical Engineering', 'Chemical Engineering'],
    entranceExams: ['JEE Main', 'MHT-CET'],
    fees: {
      tuition: {
        min: 150000,
        max: 200000
      },
      hostel: {
        min: 75000,
        max: 95000
      }
    },
    placement: {
      percentage: 90,
      avgSalary: 800000,
      topRecruiters: ['TCS', 'Infosys', 'Accenture', 'Capgemini', 'L&T Infotech']
    },
    admissionDetails: {
      eligibility: 'Minimum 60% in 10+2 with PCM, valid JEE Main or MHT-CET score',
      process: 'Merit-based admission through centralized counseling process',
      deadlines: 'Applications open in May-June each year'
    },
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: 'Up to 50% tuition fee waiver',
        eligibility: 'Top 5% students in each branch'
      }
    ],
    reviews: [
      {
        rating: 4.5,
        comment: 'Great faculty and campus infrastructure. Active placement cell.',
        author: 'Rohit Mehta',
        date: '2023-03-15'
      }
    ]
  },
  {
    id: 'dj-sanghvi',
    name: 'DJ Sanghvi College of Engineering',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Vile Parle West, Mumbai, Maharashtra 400056'
    },
    type: 'Private',
    rating: 4.5,
    description: 'DJ Sanghvi College of Engineering is renowned for its quality education, modern facilities, and excellent placement record.',
    imageUrl: 'https://ibb.co/Z1JSJwF',
    courses: ['Computer Engineering', 'Electronics Engineering', 'Information Technology', 'Mechanical Engineering', 'Civil Engineering'],
    entranceExams: ['JEE Main', 'MHT-CET'],
    fees: {
      tuition: {
        min: 140000,
        max: 180000
      },
      hostel: {
        min: 70000,
        max: 90000
      }
    },
    placement: {
      percentage: 92,
      avgSalary: 750000,
      topRecruiters: ['Microsoft', 'Amazon', 'TCS', 'Infosys', 'Cognizant']
    },
    admissionDetails: {
      eligibility: 'Minimum 60% in 10+2 with PCM, valid JEE Main or MHT-CET score',
      process: 'Merit-based admission through centralized counseling process',
      deadlines: 'Applications open in June-July each year'
    },
    scholarships: [
      {
        name: 'Academic Excellence Scholarship',
        amount: 'Up to Rs. 50,000 per year',
        eligibility: 'Students with 90% and above in qualifying examination'
      }
    ],
    reviews: [
      {
        rating: 4.7,
        comment: 'Strong technical education with excellent extracurricular opportunities.',
        author: 'Sneha Kapoor',
        date: '2023-05-20'
      }
    ]
  },
  {
    id: 'bharatiya-vidyapeeth',
    name: 'Bharatiya Vidyapeeth College of Engineering',
    location: {
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Dhankawadi, Pune, Maharashtra 411043'
    },
    type: 'Private',
    rating: 4.3,
    description: 'Bharatiya Vidyapeeth College of Engineering offers quality technical education with strong emphasis on practical skills and industry exposure.',
    imageUrl: 'https://ibb.co/wN3vfGM',
    courses: ['Computer Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Information Technology'],
    entranceExams: ['BUET', 'JEE Main', 'MHT-CET'],
    fees: {
      tuition: {
        min: 120000,
        max: 160000
      },
      hostel: {
        min: 65000,
        max: 85000
      }
    },
    placement: {
      percentage: 85,
      avgSalary: 600000,
      topRecruiters: ['TCS', 'Wipro', 'Infosys', 'Tech Mahindra', 'L&T']
    },
    admissionDetails: {
      eligibility: 'Minimum 50% in 10+2 with PCM, valid entrance exam score',
      process: 'Merit-based admission through entrance examination',
      deadlines: 'Applications typically open in April-May each year'
    },
    scholarships: [
      {
        name: 'Merit-Based Scholarship',
        amount: 'Up to 25% tuition fee waiver',
        eligibility: 'Top performers in university exams'
      }
    ],
    reviews: [
      {
        rating: 4.2,
        comment: 'Good infrastructure and faculty. Decent placement opportunities.',
        author: 'Aditya Sharma',
        date: '2023-04-10'
      }
    ]
  },
  {
    id: 'pict',
    name: 'Pune Institute of Computer Technology',
    location: {
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Dhankawadi, Pune, Maharashtra 411043'
    },
    type: 'Private',
    rating: 4.7,
    description: 'PICT is one of the premier institutes for Computer Engineering education in Maharashtra, known for its excellent academic programs and high placement records.',
    imageUrl: 'https://ibb.co/YYNFD1v',
    courses: ['Computer Engineering', 'Information Technology', 'Electronics and Telecommunication'],
    entranceExams: ['JEE Main', 'MHT-CET'],
    fees: {
      tuition: {
        min: 130000,
        max: 170000
      },
      hostel: {
        min: 70000,
        max: 90000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 900000,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys']
    },
    admissionDetails: {
      eligibility: 'Minimum 60% in 10+2 with PCM, valid JEE Main or MHT-CET score',
      process: 'Merit-based admission through centralized counseling process',
      deadlines: 'Applications open in June each year'
    },
    scholarships: [
      {
        name: 'Academic Excellence Scholarship',
        amount: 'Up to Rs. 50,000 per year',
        eligibility: 'Top 10% students in university exams'
      }
    ],
    reviews: [
      {
        rating: 4.8,
        comment: 'Excellent faculty and strong focus on technical education. Great placements.',
        author: 'Ankit Joshi',
        date: '2023-02-25'
      }
    ]
  },
  {
    id: 'mit-wpu',
    name: 'MIT World Peace University',
    location: {
      city: 'Pune',
      state: 'Maharashtra',
      address: 'Kothrud, Pune, Maharashtra 411038'
    },
    type: 'Private',
    rating: 4.5,
    description: 'MIT-WPU offers a diverse range of programs with a unique blend of academic excellence and value-based education focused on holistic development.',
    imageUrl: 'https://ibb.co/qLh6jhs',
    courses: ['Engineering', 'Management', 'Law', 'Design', 'Liberal Arts', 'Commerce', 'Science'],
    entranceExams: ['MIT-WPU CET', 'JEE Main', 'MHT-CET'],
    fees: {
      tuition: {
        min: 160000,
        max: 250000
      },
      hostel: {
        min: 80000,
        max: 120000
      }
    },
    placement: {
      percentage: 90,
      avgSalary: 800000,
      topRecruiters: ['TCS', 'Infosys', 'Accenture', 'Cognizant', 'L&T']
    },
    admissionDetails: {
      eligibility: 'Varies by program, generally 50-60% in qualifying examination',
      process: 'Entrance examination followed by personal interview',
      deadlines: 'Applications open in January-February each year'
    },
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: 'Up to 100% tuition fee waiver',
        eligibility: 'Based on entrance exam performance'
      },
      {
        name: 'Sports Scholarship',
        amount: 'Up to 50% tuition fee waiver',
        eligibility: 'National/International level sports achievers'
      }
    ],
    reviews: [
      {
        rating: 4.6,
        comment: 'Beautiful campus with excellent facilities. Strong focus on personality development.',
        author: 'Priya Kulkarni',
        date: '2023-03-18'
      }
    ]
  },
  {
    id: 'vjti',
    name: 'Veermata Jijabai Technological Institute',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Matunga, Mumbai, Maharashtra 400019'
    },
    type: 'Government',
    rating: 4.8,
    description: 'VJTI is one of the oldest engineering colleges in India, known for its academic excellence, research facilities, and distinguished alumni network.',
    imageUrl: 'https://ibb.co/HTXnmzR',
    courses: ['Computer Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics Engineering', 'Civil Engineering'],
    entranceExams: ['JEE Main', 'GATE', 'MHT-CET'],
    fees: {
      tuition: {
        min: 50000,
        max: 100000
      },
      hostel: {
        min: 60000,
        max: 80000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 1200000,
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Morgan Stanley', 'Adobe']
    },
    admissionDetails: {
      eligibility: 'JEE Main or MHT-CET scores required with minimum 60% in 10+2',
      process: 'Centralized admission process based on entrance exam ranks',
      deadlines: 'June-July each year'
    },
    scholarships: [
      {
        name: 'Merit Scholarships',
        amount: 'Full tuition waiver',
        eligibility: 'Top academic performers'
      }
    ],
    reviews: [
      {
        rating: 4.9,
        comment: 'Prestigious institute with excellent faculty and strong industry connections.',
        author: 'Rahul Deshmukh',
        date: '2023-02-15'
      }
    ]
  },
  {
    id: 'ict-mumbai',
    name: 'Institute of Chemical Technology',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Matunga, Mumbai, Maharashtra 400019'
    },
    type: 'Government',
    rating: 4.9,
    description: 'ICT is a premier institute specialized in chemical engineering and technology education, known for its cutting-edge research and industry collaboration.',
    imageUrl: 'https://ibb.co/N23cDm9',
    courses: ['Chemical Engineering', 'Biochemical Engineering', 'Pharmaceutical Technology', 'Food Engineering', 'Polymer Engineering'],
    entranceExams: ['JEE Main', 'GATE', 'MHT-CET'],
    fees: {
      tuition: {
        min: 50000,
        max: 100000
      },
      hostel: {
        min: 60000,
        max: 80000
      }
    },
    placement: {
      percentage: 98,
      avgSalary: 1500000,
      topRecruiters: ['Reliance Industries', 'BASF', 'Unilever', 'P&G', 'Shell']
    },
    admissionDetails: {
      eligibility: 'JEE Main or MHT-CET scores required with minimum 70% in 10+2 PCM',
      process: 'Centralized admission process based on entrance exam ranks',
      deadlines: 'June-July each year'
    },
    scholarships: [
      {
        name: 'Academic Excellence Scholarship',
        amount: 'Full tuition waiver',
        eligibility: 'Top 5% students'
      }
    ],
    reviews: [
      {
        rating: 5,
        comment: 'World-class education in chemical engineering with excellent research opportunities.',
        author: 'Anjali Patil',
        date: '2023-05-10'
      }
    ]
  },
  {
    id: 'spit',
    name: 'Sardar Patel Institute of Technology',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Andheri West, Mumbai, Maharashtra 400058'
    },
    type: 'Government',
    rating: 4.7,
    description: 'SPIT is known for its excellent academic programs in engineering and technology with a strong focus on research and innovation.',
    imageUrl: 'https://ibb.co/N6LQrNx',
    courses: ['Computer Engineering', 'Information Technology', 'Electronics Engineering', 'Electronics & Telecommunication'],
    entranceExams: ['JEE Main', 'MHT-CET'],
    fees: {
      tuition: {
        min: 90000,
        max: 130000
      },
      hostel: {
        min: 70000,
        max: 90000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 1000000,
      topRecruiters: ['Microsoft', 'Amazon', 'Google', 'Morgan Stanley', 'Goldman Sachs']
    },
    admissionDetails: {
      eligibility: 'JEE Main or MHT-CET scores required with minimum 60% in 10+2 PCM',
      process: 'Centralized admission process based on entrance exam ranks',
      deadlines: 'June-July each year'
    },
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: 'Up to 50% tuition fee waiver',
        eligibility: 'Top performers in university exams'
      }
    ],
    reviews: [
      {
        rating: 4.8,
        comment: 'Excellent faculty and placement opportunities. Strong alumni network.',
        author: 'Aditya Mehta',
        date: '2023-04-05'
      }
    ]
  },
  // Delhi Colleges
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
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80',
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
      topRecruiters: ['Deloitte', 'EY', 'PwC', 'Bain & Company', 'McKinsey']
    },
    admissionDetails: {
      eligibility: 'Varies by program, generally based on 10+2 marks or entrance exams.',
      process: 'Merit-based admissions through cut-offs or entrance tests.',
      deadlines: 'Applications open in June-July each year.'
    },
    scholarships: [
      {
        name: 'Vice Chancellor Scholarship',
        amount: 'Rs. 20,000 per year',
        eligibility: 'Top performers in each faculty'
      },
      {
        name: 'Welfare Scholarships',
        amount: 'Varies',
        eligibility: 'Students from economically weaker sections'
      }
    ],
    reviews: [
      {
        rating: 4.6,
        comment: 'Excellent faculty and academic environment. Many colleges under DU are top-ranked.',
        author: 'Ashish Kapoor',
        date: '2023-03-05'
      },
      {
        rating: 4.8,
        comment: 'Great campus life and extracurricular activities. Very competitive admissions.',
        author: 'Kavita Sharma',
        date: '2023-04-12'
      }
    ]
  },
  {
    id: 'srcc-delhi',
    name: 'Shri Ram College of Commerce (SRCC)',
    location: {
      city: 'Delhi',
      state: 'Delhi',
      address: 'University of Delhi, Maurice Nagar, Delhi 110007'
    },
    type: 'Government',
    rating: 4.7,
    description: 'SRCC is one of the premier institutions for Commerce and Economics education in India, affiliated with the University of Delhi.',
    imageUrl: 'https://images.unsplash.com/photo-1554636550-6b0b6e344ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    courses: ['B.Com (Hons)', 'Economics (Hons)', 'M.Com', 'Global Business Operations'],
    entranceExams: ['DU Entrance Exam', 'CUET'],
    fees: {
      tuition: {
        min: 20000,
        max: 30000
      },
      hostel: {
        min: 60000,
        max: 80000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 1200000,
      topRecruiters: ['Deloitte', 'EY', 'KPMG', 'JP Morgan', 'McKinsey']
    },
    admissionDetails: {
      eligibility: 'Minimum 95% marks in 10+2 with Commerce stream, or through CUET score.',
      process: 'Merit-based admission through cut-off lists or entrance exam scores.',
      deadlines: 'Applications open in May-June each year.'
    },
    scholarships: [
      {
        name: 'Merit Scholarship',
        amount: 'Up to Rs. 25,000 per year',
        eligibility: 'Top 10 students in each course'
      },
      {
        name: 'Need-Based Financial Aid',
        amount: 'Varying amounts',
        eligibility: 'Economically disadvantaged students'
      }
    ],
    reviews: [
      {
        rating: 5,
        comment: 'Best commerce college in India with excellent faculty and placement record.',
        author: 'Aditya Gupta',
        date: '2023-03-10'
      },
      {
        rating: 4,
        comment: 'Great academic environment, but facilities could be better.',
        author: 'Sneha Rao',
        date: '2023-06-05'
      }
    ]
  },
  {
    id: 'st-stephens-delhi',
    name: "St. Stephen's College",
    location: {
      city: 'Delhi',
      state: 'Delhi',
      address: 'University Enclave, Delhi 110007'
    },
    type: 'Government',
    rating: 4.6,
    description: "St. Stephen's College is one of the oldest and most prestigious liberal arts colleges in India, known for its academic excellence and rich heritage.",
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    courses: ['English', 'Economics', 'History', 'Mathematics', 'Physics', 'Chemistry'],
    entranceExams: ['CUET', 'College Interview'],
    fees: {
      tuition: {
        min: 25000,
        max: 35000
      },
      hostel: {
        min: 70000,
        max: 90000
      }
    },
    placement: {
      percentage: 90,
      avgSalary: 1000000,
      topRecruiters: ['Deloitte', 'HUL', 'ITC', 'Citibank', 'Boston Consulting Group']
    },
    admissionDetails: {
      eligibility: 'Minimum 95% in 10+2 for Sciences, 98% for Humanities, and CUET score.',
      process: 'Merit list followed by interview and aptitude test.',
      deadlines: 'Applications open in May and close in June.'
    },
    scholarships: [
      {
        name: 'College Scholarship Fund',
        amount: 'Up to full tuition waiver',
        eligibility: 'Meritorious students with financial need'
      },
      {
        name: 'Alumni Association Scholarship',
        amount: 'Rs. 50,000 per year',
        eligibility: 'Outstanding academic achievement'
      }
    ],
    reviews: [
      {
        rating: 5,
        comment: 'Incredible learning environment with a perfect balance of academics and extracurriculars.',
        author: 'Ananya Krishnan',
        date: '2023-01-12'
      },
      {
        rating: 4.5,
        comment: 'Rich heritage, excellent faculty but infrastructure needs improvement.',
        author: 'Rohan Mehta',
        date: '2023-04-18'
      }
    ]
  },
  // Add more colleges for both states with minimal information
];

// Helper function to get colleges by state name
export const getCollegesByState = (stateName: string): College[] => {
  return colleges.filter(college => 
    college.location.state.toLowerCase() === stateName.toLowerCase()
  );
};

// Helper function to get college by id
export const getCollegeById = (id: string): College | undefined => {
  return colleges.find(college => college.id === id);
};

// Helper function to get filtered colleges
export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}
