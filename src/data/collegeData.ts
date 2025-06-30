export interface College {
  id: number;
  name: string;
  location: {
    city: string;
    state: string;
    address?: string;
  };
  rating: number;
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
  courses: string[];
  imageUrl?: string;
  established: number;
  type: "Government" | "Private";
  affiliation: string;
  description: string;
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
  scholarships?: Array<{
    name: string;
    amount: string;
    eligibility: string;
  }>;
}

export interface State {
  id: number;
  name: string;
  collegeCount: number;
  image: string;
  description: string;
  colleges: College[];
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
    id: 1,
    name: "Delhi",
    collegeCount: 25,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "India's capital with premier educational institutions",
    colleges: [
      {
        id: 1,
        name: "Indian Institute of Technology Delhi",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Hauz Khas, New Delhi"
        },
        rating: 4.5,
        fees: {
          tuition: { min: 200000, max: 300000 },
          hostel: { min: 50000, max: 80000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1961,
        type: "Government",
        affiliation: "Autonomous",
        description: "Premier engineering institute known for excellence in technology and research with world-class faculty and infrastructure.",
        placement: {
          percentage: 95,
          avgSalary: 1500000,
          topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualified candidates",
          process: "JEE Advanced + Counselling",
          deadlines: "Check official website for current dates"
        }
      },
      {
        id: 2,
        name: "Delhi University",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 30000, max: 70000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1922,
        type: "Government",
        affiliation: "Central University",
        description: "One of India's largest and most prestigious universities offering diverse undergraduate and postgraduate programs.",
        placement: {
          percentage: 75,
          avgSalary: 600000,
          topRecruiters: ["TCS", "Infosys", "Deloitte", "PwC"]
        }
      },
      {
        id: 3,
        name: "Netaji Subhas University of Technology",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Dwarka, New Delhi"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 150000, max: 180000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1983,
        type: "Government",
        affiliation: "State University",
        description: "A leading technical university offering quality education in engineering and technology.",
        placement: {
          percentage: 85,
          avgSalary: 900000,
          topRecruiters: ["IBM", "Accenture", "Capgemini"]
        }
      },
      {
        id: 4,
        name: "Indraprastha Institute of Information Technology",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Okhla, New Delhi"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 250000, max: 350000 }
        },
        courses: ["Computer Science", "Electronics", "Engineering"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2008,
        type: "Government",
        affiliation: "State University",
        description: "Specializes in information technology and computer science education and research.",
        placement: {
          percentage: 90,
          avgSalary: 1200000,
          topRecruiters: ["Google", "Microsoft", "Infosys"]
        }
      },
      {
        id: 5,
        name: "Jamia Millia Islamia",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Jamia Nagar, New Delhi"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 70000, max: 90000 }
        },
        courses: ["Engineering", "Arts", "Social Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1920,
        type: "Government",
        affiliation: "Central University",
        description: "A central university known for diverse programs and research in arts and sciences.",
        placement: {
          percentage: 70,
          avgSalary: 500000,
          topRecruiters: ["Wipro", "HCL", "Tech Mahindra"]
        }
      },
      {
        id: 6,
        name: "Jawaharlal Nehru University",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "New Mehrauli Road, New Delhi"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 60000, max: 70000 }
        },
        courses: ["Arts", "Social Sciences", "International Studies"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1969,
        type: "Government",
        affiliation: "Central University",
        description: "Known for social sciences and humanities with a strong research focus.",
        placement: {
          percentage: 65,
          avgSalary: 450000,
          topRecruiters: ["UNICEF", "World Bank", "NGOs"]
        }
      },
      {
        id: 7,
        name: "Delhi Technological University",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "Shahbad Daulatpur, Delhi"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 180000, max: 200000 }
        },
        courses: ["Engineering", "Technology", "Applied Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1941,
        type: "Government",
        affiliation: "State University",
        description: "A premier engineering university with strong industry connections.",
        placement: {
          percentage: 80,
          avgSalary: 850000,
          topRecruiters: ["L&T", "Siemens", "Tata Steel"]
        }
      },
      {
        id: 8,
        name: "All India Institute of Medical Sciences",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Ansari Nagar, New Delhi"
        },
        rating: 4.6,
        fees: {
          tuition: { min: 1500, max: 2000 }
        },
        courses: ["Medicine", "Nursing", "Paramedical"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1956,
        type: "Government",
        affiliation: "Autonomous",
        description: "India's top medical institute with cutting-edge research and healthcare facilities.",
        placement: {
          percentage: 98,
          avgSalary: 2000000,
          topRecruiters: ["Apollo Hospitals", "Fortis", "Max Healthcare"]
        }
      },
      {
        id: 9,
        name: "Lady Shri Ram College for Women",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Lajpat Nagar, New Delhi"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 40000, max: 50000 }
        },
        courses: ["Arts", "Commerce", "Economics"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1956,
        type: "Government",
        affiliation: "Delhi University",
        description: "A prestigious women's college known for arts and social sciences.",
        placement: {
          percentage: 70,
          avgSalary: 400000,
          topRecruiters: ["KPMG", "EY", "Deloitte"]
        }
      },
      {
        id: 10,
        name: "St. Stephen's College",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "University Enclave, Delhi"
        },
        rating: 4.5,
        fees: {
          tuition: { min: 50000, max: 60000 }
        },
        courses: ["Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1881,
        type: "Private",
        affiliation: "Delhi University",
        description: "One of the oldest and most prestigious colleges in India.",
        placement: {
          percentage: 75,
          avgSalary: 550000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        }
      },
      {
        id: 11,
        name: "Hindu College",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 45000, max: 55000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1899,
        type: "Government",
        affiliation: "Delhi University",
        description: "Known for academic excellence in arts and sciences.",
        placement: {
          percentage: 70,
          avgSalary: 450000,
          topRecruiters: ["TCS", "Infosys", "Accenture"]
        }
      },
      {
        id: 12,
        name: "Hansraj College",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "Malka Ganj, Delhi"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 42000, max: 52000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1948,
        type: "Government",
        affiliation: "Delhi University",
        description: "A reputed college with strong programs in arts and commerce.",
        placement: {
          percentage: 68,
          avgSalary: 430000,
          topRecruiters: ["EY", "KPMG", "Deloitte"]
        }
      },
      {
        id: 13,
        name: "Shri Ram College of Commerce",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 48000, max: 58000 }
        },
        courses: ["Commerce", "Economics", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1926,
        type: "Government",
        affiliation: "Delhi University",
        description: "Premier commerce college with excellent placement records.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Deloitte", "PwC", "KPMG"]
        }
      },
      {
        id: 14,
        name: "Miranda House",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 46000, max: 56000 }
        },
        courses: ["Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1948,
        type: "Government",
        affiliation: "Delhi University",
        description: "A top women's college with strong arts and science programs.",
        placement: {
          percentage: 72,
          avgSalary: 480000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        }
      },
      {
        id: 15,
        name: "Kirori Mal College",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 47000, max: 57000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1954,
        type: "Government",
        affiliation: "Delhi University",
        description: "Known for vibrant campus life and academic excellence.",
        placement: {
          percentage: 65,
          avgSalary: 420000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        }
      },
      {
        id: 16,
        name: "Gargi College",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Siri Fort Road, New Delhi"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 44000, max: 54000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1967,
        type: "Government",
        affiliation: "Delhi University",
        description: "A well-known college with strong academic programs.",
        placement: {
          percentage: 60,
          avgSalary: 400000,
          topRecruiters: ["Accenture", "Capgemini", "IBM"]
        }
      },
      {
        id: 17,
        name: "Ramjas College",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 45000, max: 55000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1917,
        type: "Government",
        affiliation: "Delhi University",
        description: "One of the oldest colleges with a rich academic tradition.",
        placement: {
          percentage: 62,
          avgSalary: 410000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        }
      },
      {
        id: 18,
        name: "Jesus and Mary College",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Chanakyapuri, New Delhi"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 48000, max: 58000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1968,
        type: "Private",
        affiliation: "Delhi University",
        description: "A reputed women's college with strong academic programs.",
        placement: {
          percentage: 68,
          avgSalary: 450000,
          topRecruiters: ["EY", "KPMG", "Deloitte"]
        }
      },
      {
        id: 19,
        name: "Daulat Ram College",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 43000, max: 53000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1960,
        type: "Government",
        affiliation: "Delhi University",
        description: "Known for quality education and research.",
        placement: {
          percentage: 60,
          avgSalary: 400000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        }
      },
      {
        id: 20,
        name: "Indira Gandhi Delhi Technical University for Women",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "Kashmere Gate, Delhi"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 120000, max: 130000 }
        },
        courses: ["Engineering", "Technology", "Applied Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2013,
        type: "Government",
        affiliation: "State University",
        description: "A premier technical university for women.",
        placement: {
          percentage: 75,
          avgSalary: 700000,
          topRecruiters: ["Infosys", "Wipro", "TCS"]
        }
      },
      {
        id: 21,
        name: "Bharati College",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Janakpuri, New Delhi"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 42000, max: 52000 }
        },
        courses: ["Arts", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1971,
        type: "Government",
        affiliation: "Delhi University",
        description: "Known for commerce and arts programs.",
        placement: {
          percentage: 55,
          avgSalary: 350000,
          topRecruiters: ["Local businesses", "SMEs"]
        }
      },
      {
        id: 22,
        name: "Amity University Delhi",
        location: {
          city: "Noida",
          state: "Delhi NCR",
          address: "Sector 125, Noida"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 250000, max: 300000 }
        },
        courses: ["Engineering", "Management", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2005,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering diverse programs.",
        placement: {
          percentage: 70,
          avgSalary: 600000,
          topRecruiters: ["Infosys", "Wipro", "Accenture"]
        }
      },
      {
        id: 23,
        name: "Indian School of Business and Finance",
        location: {
          city: "Gurgaon",
          state: "Delhi NCR"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 350000, max: 400000 }
        },
        courses: ["Business", "Finance", "Economics"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2009,
        type: "Private",
        affiliation: "Private University",
        description: "Specializes in business and finance education.",
        placement: {
          percentage: 80,
          avgSalary: 900000,
          topRecruiters: ["Goldman Sachs", "JP Morgan", "Morgan Stanley"]
        }
      },
      {
        id: 24,
        name: "National Institute of Fashion Technology",
        location: {
          city: "New Delhi",
          state: "Delhi",
          address: "Hauz Khas, New Delhi"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 200000, max: 220000 }
        },
        courses: ["Fashion Design", "Fashion Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1986,
        type: "Government",
        affiliation: "Statutory Body",
        description: "Premier fashion institute with industry connections.",
        placement: {
          percentage: 85,
          avgSalary: 800000,
          topRecruiters: ["Nike", "Adidas", "Puma"]
        }
      },
      {
        id: 25,
        name: "Delhi School of Economics",
        location: {
          city: "Delhi",
          state: "Delhi",
          address: "North Campus, Delhi"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 30000, max: 40000 }
        },
        courses: ["Economics", "Business Economics"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1949,
        type: "Government",
        affiliation: "Delhi University",
        description: "Top economics institute with strong research focus.",
        placement: {
          percentage: 75,
          avgSalary: 600000,
          topRecruiters: ["World Bank", "IMF", "UN"]
        }
      }
    ]
  },
  {
    id: 2,
    name: "Tamil Nadu",
    collegeCount: 20,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "South India's educational and cultural hub",
    colleges: [
      {
        id: 26,
        name: "Indian Institute of Technology Madras",
        location: {
          city: "Chennai",
          state: "Tamil Nadu"
        },
        rating: 4.6,
        fees: {
          tuition: { min: 200000, max: 300000 },
          hostel: { min: 40000, max: 70000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1959,
        type: "Government",
        affiliation: "Autonomous",
        description: "Premier engineering institute in South India.",
        placement: {
          percentage: 95,
          avgSalary: 1600000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualified candidates",
          process: "JEE Advanced + Counselling",
          deadlines: "Check official website for current dates"
        }
      },
      {
        id: 27,
        name: "Anna University",
        location: {
          city: "Chennai",
          state: "Tamil Nadu"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 150000, max: 180000 }
        },
        courses: ["Engineering", "Technology", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1978,
        type: "Government",
        affiliation: "State University",
        description: "Leading technical university in Tamil Nadu.",
        placement: {
          percentage: 80,
          avgSalary: 900000,
          topRecruiters: ["L&T", "Siemens", "Tata Steel"]
        }
      }
      // Additional colleges for Tamil Nadu and other states would be similarly structured
    ]
  }
  // Additional states would be similarly structured
];

// Utility functions
export const getCollegesByState = (stateId: string): College[] => {
  const stateName = stateId.charAt(0).toUpperCase() + stateId.slice(1).replace(/-/g, " ");
  const state = states.find(s => s.name.toLowerCase() === stateName.toLowerCase());
  return state ? state.colleges : [];
};

export const getCollegeById = (collegeId: string): College | null => {
  const id = parseInt(collegeId);
  for (const state of states) {
    const college = state.colleges.find(c => c.id === id);
    if (college) return college;
  }
  return null;
};

export const getAllColleges = (): College[] => {
  return states.flatMap(state => state.colleges);
};
