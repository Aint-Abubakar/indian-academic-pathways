
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

export interface City {
  id: string;
  name: string;
  state: string;
  collegeCount: number;
}

// Mock cities data
export const cities: City[] = [
  { id: 'delhi', name: 'Delhi', state: 'Delhi', collegeCount: 45 },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', collegeCount: 38 },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', collegeCount: 32 },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', collegeCount: 28 },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', collegeCount: 25 },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', collegeCount: 22 },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', collegeCount: 20 },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', collegeCount: 18 },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', collegeCount: 15 },
  { id: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', collegeCount: 12 },
  { id: 'chandigarh', name: 'Chandigarh', state: 'Chandigarh', collegeCount: 10 },
  { id: 'bhubaneswar', name: 'Bhubaneswar', state: 'Odisha', collegeCount: 8 },
  { id: 'indore', name: 'Indore', state: 'Madhya Pradesh', collegeCount: 7 },
  { id: 'kochi', name: 'Kochi', state: 'Kerala', collegeCount: 6 },
  { id: 'nagpur', name: 'Nagpur', state: 'Maharashtra', collegeCount: 5 }
];

// Mock college data
export const colleges: College[] = [
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
    id: 'srcc-delhi',
    name: 'Shri Ram College of Commerce',
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
  {
    id: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Powai, Mumbai, Maharashtra 400076'
    },
    type: 'Government',
    rating: 4.9,
    description: 'IIT Bombay is renowned for its outstanding engineering education, research facilities, and vibrant campus life.',
    imageUrl: 'https://images.unsplash.com/photo-1569447891824-258af62f3b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2V8ZW58MHx8MHx8&w=1000&q=80',
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
    id: 'iisc-bangalore',
    name: 'Indian Institute of Science',
    location: {
      city: 'Bangalore',
      state: 'Karnataka',
      address: 'CV Raman Road, Bengaluru, Karnataka 560012'
    },
    type: 'Government',
    rating: 4.9,
    description: "IISc is India's premier research institution, known for its advanced scientific and technological research and education.",
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGxlZ2V8ZW58MHx8MHx8&w=1000&q=80',
    courses: ['Engineering', 'Science', 'Mathematics', 'Physics', 'Biology', 'Computer Science'],
    entranceExams: ['IISc Entrance Exam', 'GATE', 'JAM', 'KVPY'],
    fees: {
      tuition: {
        min: 25000,
        max: 35000
      },
      hostel: {
        min: 60000,
        max: 80000
      }
    },
    placement: {
      percentage: 95,
      avgSalary: 1800000,
      topRecruiters: ['Google', 'Microsoft', 'Intel', 'IBM Research', 'ISRO']
    },
    admissionDetails: {
      eligibility: 'For UG: KVPY or JEE Advanced top ranks. For PG: GATE/NET/JEST scores.',
      process: 'Entrance test followed by interview for most programs.',
      deadlines: 'Applications open in February-March each year.'
    },
    scholarships: [
      {
        name: 'Institute Fellowship',
        amount: 'Rs. 31,000-35,000 per month for PhD students',
        eligibility: 'All admitted PhD students'
      },
      {
        name: "Prime Minister's Research Fellowship",
        amount: 'Rs. 70,000-80,000 per month',
        eligibility: 'Top performing PhD candidates in science and technology'
      }
    ],
    reviews: [
      {
        rating: 5,
        comment: 'The research environment is unmatched anywhere else in India. Excellent labs and faculty.',
        author: 'Dr. Arjun Nair',
        date: '2023-01-05'
      },
      {
        rating: 4.9,
        comment: 'World-class education focused on cutting-edge research. Great opportunities for interdisciplinary work.',
        author: 'Lakshmi Menon',
        date: '2023-06-10'
      }
    ]
  }
];

// Helper function to get colleges by city name
export const getCollegesByCity = (cityName: string): College[] => {
  return colleges.filter(college => 
    college.location.city.toLowerCase() === cityName.toLowerCase()
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
