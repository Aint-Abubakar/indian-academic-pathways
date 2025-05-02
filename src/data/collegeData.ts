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
}

// Helper function to generate a slug from a name
const slugify = (text: string) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

// Updated states data with all states of India where colleges exist
export const states: State[] = [
  { id: slugify("Andhra Pradesh"), name: "Andhra Pradesh" },
  { id: slugify("Arunachal Pradesh"), name: "Arunachal Pradesh" },
  { id: slugify("Assam"), name: "Assam" },
  { id: slugify("Bihar"), name: "Bihar" },
  { id: slugify("Chhattisgarh"), name: "Chhattisgarh" },
  { id: slugify("Goa"), name: "Goa" },
  { id: slugify("Gujarat"), name: "Gujarat" },
  { id: slugify("Haryana"), name: "Haryana" },
  { id: slugify("Himachal Pradesh"), name: "Himachal Pradesh" },
  { id: slugify("Jharkhand"), name: "Jharkhand" },
  { id: slugify("Karnataka"), name: "Karnataka" },
  { id: slugify("Kerala"), name: "Kerala" },
  { id: slugify("Madhya Pradesh"), name: "Madhya Pradesh" },
  { id: slugify("Maharashtra"), name: "Maharashtra" },
  { id: slugify("Manipur"), name: "Manipur" },
  { id: slugify("Meghalaya"), name: "Meghalaya" },
  { id: slugify("Mizoram"), name: "Mizoram" },
  { id: slugify("Nagaland"), name: "Nagaland" },
  { id: slugify("Odisha"), name: "Odisha" },
  { id: slugify("Punjab"), name: "Punjab" },
  { id: slugify("Rajasthan"), name: "Rajasthan" },
  { id: slugify("Sikkim"), name: "Sikkim" },
  { id: slugify("Tamil Nadu"), name: "Tamil Nadu" },
  { id: slugify("Telangana"), name: "Telangana" },
  { id: slugify("Tripura"), name: "Tripura" },
  { id: slugify("Uttar Pradesh"), name: "Uttar Pradesh" },
  { id: slugify("Uttarakhand"), name: "Uttarakhand" },
  { id: slugify("West Bengal"), name: "West Bengal" },
  { id: slugify("Delhi"), name: "Delhi" },
];

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
  }
];

// Add this helper function to get a college by ID
export const getCollegeById = (collegeId: string) => {
  return colleges.find(college => college.id === collegeId);
};
