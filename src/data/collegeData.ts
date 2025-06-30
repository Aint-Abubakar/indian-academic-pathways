export interface College {
  id: number;
  name: string;
  location: {
    city: string;
    state: string;
    address: string;
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
  imageUrl: string;
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
  scholarships?: {
    name: string;
    amount: string;
    eligibility: string;
  }[];
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
          tuition: { min: 250000, max: 250000 },
          hostel: { min: 50000, max: 80000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1961,
        type: "Government",
        affiliation: "Autonomous",
        description: "One of India's premier engineering institutes offering world-class education in technology and management.",
        placement: {
          percentage: 95,
          avgSalary: 1800000,
          topRecruiters: ["Google", "Microsoft", "Amazon", "Goldman Sachs"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
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
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1922,
        type: "Government",
        affiliation: "Central University",
        description: "One of India's largest and most prestigious universities with a rich academic heritage.",
        placement: {
          percentage: 85,
          avgSalary: 600000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Deloitte"]
        },
        entranceExams: ["CUET"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through CUET scores",
          deadlines: "June 2024"
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
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1983,
        type: "Government",
        affiliation: "State University",
        description: "A leading technical university known for its engineering and technology programs.",
        placement: {
          percentage: 90,
          avgSalary: 1200000,
          topRecruiters: ["IBM", "Accenture", "Capgemini"]
        },
        entranceExams: ["JEE Main"],
        admissionDetails: {
          eligibility: "JEE Main qualification required",
          process: "Through JEE Main counseling",
          deadlines: "July 2024"
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
          tuition: { min: 300000, max: 300000 }
        },
        courses: ["Computer Science", "Electronics", "Engineering"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2008,
        type: "Government",
        affiliation: "State University",
        description: "A premier institute focused on information technology and computer science education.",
        placement: {
          percentage: 92,
          avgSalary: 1500000,
          topRecruiters: ["Google", "Facebook", "Microsoft"]
        },
        entranceExams: ["JEE Main"],
        admissionDetails: {
          eligibility: "JEE Main qualification required",
          process: "Through JEE Main counseling",
          deadlines: "July 2024"
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
          tuition: { min: 80000, max: 80000 }
        },
        courses: ["Engineering", "Arts", "Social Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1920,
        type: "Government",
        affiliation: "Central University",
        description: "A central university offering diverse programs in engineering, arts, and social sciences.",
        placement: {
          percentage: 80,
          avgSalary: 700000,
          topRecruiters: ["Infosys", "Wipro", "Cognizant"]
        },
        entranceExams: ["JEE Main", "Jamia Entrance Test"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through entrance test and merit",
          deadlines: "June 2024"
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
          tuition: { min: 60000, max: 60000 }
        },
        courses: ["Arts", "Social Sciences", "International Studies"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1969,
        type: "Government",
        affiliation: "Central University",
        description: "A leading university known for its social sciences and international studies programs.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Government", "NGOs", "Research Institutes"]
        },
        entranceExams: ["JNU Entrance Test"],
        admissionDetails: {
          eligibility: "Entrance test qualification",
          process: "Through entrance test",
          deadlines: "June 2024"
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
          tuition: { min: 180000, max: 180000 }
        },
        courses: ["Engineering", "Technology", "Applied Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1941,
        type: "Government",
        affiliation: "State University",
        description: "A reputed technological university offering engineering and applied sciences courses.",
        placement: {
          percentage: 88,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "IBM"]
        },
        entranceExams: ["JEE Main"],
        admissionDetails: {
          eligibility: "JEE Main qualification required",
          process: "Through JEE Main counseling",
          deadlines: "July 2024"
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
          tuition: { min: 1500, max: 1500 }
        },
        courses: ["Medicine", "Nursing", "Paramedical"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1956,
        type: "Government",
        affiliation: "Autonomous",
        description: "India's premier medical institute offering top medical and paramedical courses.",
        placement: {
          percentage: 98,
          avgSalary: 2000000,
          topRecruiters: ["Hospitals", "Research Institutes"]
        },
        entranceExams: ["NEET"],
        admissionDetails: {
          eligibility: "NEET qualification required",
          process: "Through NEET counseling",
          deadlines: "June 2024"
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
          tuition: { min: 45000, max: 45000 }
        },
        courses: ["Arts", "Commerce", "Economics"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1956,
        type: "Government",
        affiliation: "Delhi University",
        description: "A prestigious women's college known for arts and commerce programs.",
        placement: {
          percentage: 82,
          avgSalary: 550000,
          topRecruiters: ["Banks", "Consulting Firms"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 55000, max: 55000 }
        },
        courses: ["Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1881,
        type: "Private",
        affiliation: "Delhi University",
        description: "One of India's oldest and most prestigious colleges offering arts and science courses.",
        placement: {
          percentage: 85,
          avgSalary: 600000,
          topRecruiters: ["Consulting", "Finance", "IT"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1899,
        type: "Government",
        affiliation: "Delhi University",
        description: "A well-known college offering diverse programs in arts, science, and commerce.",
        placement: {
          percentage: 80,
          avgSalary: 550000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 48000, max: 48000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1948,
        type: "Government",
        affiliation: "Delhi University",
        description: "A reputed college with strong programs in arts, science, and commerce.",
        placement: {
          percentage: 78,
          avgSalary: 520000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 52000, max: 52000 }
        },
        courses: ["Commerce", "Economics", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1926,
        type: "Government",
        affiliation: "Delhi University",
        description: "A premier commerce college known for its academic excellence.",
        placement: {
          percentage: 85,
          avgSalary: 650000,
          topRecruiters: ["Banks", "Finance", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 46000, max: 46000 }
        },
        courses: ["Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1948,
        type: "Government",
        affiliation: "Delhi University",
        description: "A prestigious women's college with strong arts and science programs.",
        placement: {
          percentage: 80,
          avgSalary: 550000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 47000, max: 47000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1954,
        type: "Government",
        affiliation: "Delhi University",
        description: "A well-known college offering diverse programs in arts, science, and commerce.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 44000, max: 44000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1967,
        type: "Government",
        affiliation: "Delhi University",
        description: "A reputed college with strong programs in arts, science, and commerce.",
        placement: {
          percentage: 78,
          avgSalary: 520000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 45000, max: 45000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1917,
        type: "Government",
        affiliation: "Delhi University",
        description: "A well-known college offering diverse programs in arts, science, and commerce.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1968,
        type: "Private",
        affiliation: "Delhi University",
        description: "A reputed women's college offering arts, science, and commerce programs.",
        placement: {
          percentage: 78,
          avgSalary: 520000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 43000, max: 43000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1960,
        type: "Government",
        affiliation: "Delhi University",
        description: "A well-known college offering diverse programs in arts, science, and commerce.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 120000, max: 120000 }
        },
        courses: ["Engineering", "Technology", "Applied Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2013,
        type: "Government",
        affiliation: "State University",
        description: "A technical university for women offering engineering and applied sciences courses.",
        placement: {
          percentage: 80,
          avgSalary: 700000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Main"],
        admissionDetails: {
          eligibility: "JEE Main qualification required",
          process: "Through JEE Main counseling",
          deadlines: "July 2024"
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
          tuition: { min: 42000, max: 42000 }
        },
        courses: ["Arts", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1971,
        type: "Government",
        affiliation: "Delhi University",
        description: "A reputed college offering arts and commerce programs.",
        placement: {
          percentage: 70,
          avgSalary: 450000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Management", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2005,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering diverse programs in engineering, management, and law.",
        placement: {
          percentage: 75,
          avgSalary: 800000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Amity Entrance Test"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through entrance test and merit",
          deadlines: "June 2024"
        }
      },
      {
        id: 23,
        name: "Indian School of Business and Finance",
        location: {
          city: "Gurgaon",
          state: "Delhi NCR",
          address: "Gurgaon, Delhi NCR"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 350000, max: 350000 }
        },
        courses: ["Business", "Finance", "Economics"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2009,
        type: "Private",
        affiliation: "Private University",
        description: "A business school offering programs in finance, economics, and business management.",
        placement: {
          percentage: 85,
          avgSalary: 1200000,
          topRecruiters: ["Goldman Sachs", "JP Morgan", "Morgan Stanley"]
        },
        entranceExams: ["ISBF Entrance Test"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through entrance test and merit",
          deadlines: "June 2024"
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
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Fashion Design", "Fashion Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1986,
        type: "Government",
        affiliation: "Statutory Body",
        description: "India's premier fashion institute offering design and technology courses.",
        placement: {
          percentage: 90,
          avgSalary: 900000,
          topRecruiters: ["Fashion Brands", "Design Studios"]
        },
        entranceExams: ["NIFT Entrance"],
        admissionDetails: {
          eligibility: "NIFT qualification required",
          process: "Through NIFT counseling",
          deadlines: "June 2024"
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
          tuition: { min: 35000, max: 35000 }
        },
        courses: ["Economics", "Business Economics"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1949,
        type: "Government",
        affiliation: "Delhi University",
        description: "A premier economics institute known for its research and academic excellence.",
        placement: {
          percentage: 85,
          avgSalary: 700000,
          topRecruiters: ["Banks", "Consulting Firms"]
        },
        entranceExams: ["DU Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through DU admission process",
          deadlines: "June 2024"
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
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.6,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1959,
        type: "Government",
        affiliation: "Autonomous",
        description: "One of the top engineering institutes in India with excellent research facilities.",
        placement: {
          percentage: 96,
          avgSalary: 1900000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 27,
        name: "Anna University",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Engineering", "Technology", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1978,
        type: "Government",
        affiliation: "State University",
        description: "A leading technical university offering diverse engineering and architecture programs.",
        placement: {
          percentage: 88,
          avgSalary: 1200000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["TNEA"],
        admissionDetails: {
          eligibility: "TNEA qualification required",
          process: "Through TNEA counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 28,
        name: "Vellore Institute of Technology",
        location: {
          city: "Vellore",
          state: "Tamil Nadu",
          address: "Vellore, Tamil Nadu"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 300000, max: 300000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1984,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university known for its engineering and management programs.",
        placement: {
          percentage: 90,
          avgSalary: 1300000,
          topRecruiters: ["Google", "Amazon", "Microsoft"]
        },
        entranceExams: ["VITEEE"],
        admissionDetails: {
          eligibility: "VITEEE qualification required",
          process: "Through VITEEE counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 29,
        name: "National Institute of Technology Tiruchirappalli",
        location: {
          city: "Tiruchirappalli",
          state: "Tamil Nadu",
          address: "Tiruchirappalli, Tamil Nadu"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Engineering", "Technology", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1964,
        type: "Government",
        affiliation: "National Institute",
        description: "A premier NIT known for its engineering and architecture programs.",
        placement: {
          percentage: 92,
          avgSalary: 1400000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 30,
        name: "PSG College of Technology",
        location: {
          city: "Coimbatore",
          state: "Tamil Nadu",
          address: "Coimbatore, Tamil Nadu"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 220000, max: 220000 }
        },
        courses: ["Engineering", "Technology", "Applied Sciences"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1951,
        type: "Private",
        affiliation: "Anna University",
        description: "A reputed private college offering engineering and applied sciences courses.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["TNEA"],
        admissionDetails: {
          eligibility: "TNEA qualification required",
          process: "Through TNEA counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 31,
        name: "Madras Institute of Technology",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 180000, max: 180000 }
        },
        courses: ["Engineering", "Technology", "Instrumentation"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1949,
        type: "Government",
        affiliation: "Anna University",
        description: "A technical institute known for engineering and instrumentation programs.",
        placement: {
          percentage: 80,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["TNEA"],
        admissionDetails: {
          eligibility: "TNEA qualification required",
          process: "Through TNEA counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 32,
        name: "SRM Institute of Science and Technology",
        location: {
          city: "Kattankulathur",
          state: "Tamil Nadu",
          address: "Kattankulathur, Tamil Nadu"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 350000, max: 350000 }
        },
        courses: ["Engineering", "Medicine", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1985,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering engineering, medicine, and management programs.",
        placement: {
          percentage: 85,
          avgSalary: 1200000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["SRMJEEE"],
        admissionDetails: {
          eligibility: "SRMJEEE qualification required",
          process: "Through SRMJEEE counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 33,
        name: "Loyola College",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 80000, max: 80000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1925,
        type: "Private",
        affiliation: "University of Madras",
        description: "A reputed college offering arts, science, and commerce programs.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 34,
        name: "Presidency College",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 25000, max: 25000 }
        },
        courses: ["Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1840,
        type: "Government",
        affiliation: "University of Madras",
        description: "A historic college offering arts and science programs.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 35,
        name: "Christian Medical College",
        location: {
          city: "Vellore",
          state: "Tamil Nadu",
          address: "Vellore, Tamil Nadu"
        },
        rating: 4.5,
        fees: {
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Medicine", "Nursing", "Allied Health"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1900,
        type: "Private",
        affiliation: "Deemed University",
        description: "A premier medical college offering medicine, nursing, and allied health courses.",
        placement: {
          percentage: 95,
          avgSalary: 1800000,
          topRecruiters: ["Hospitals", "Research Institutes"]
        },
        entranceExams: ["NEET"],
        admissionDetails: {
          eligibility: "NEET qualification required",
          process: "Through NEET counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 36,
        name: "Coimbatore Institute of Technology",
        location: {
          city: "Coimbatore",
          state: "Tamil Nadu",
          address: "Coimbatore, Tamil Nadu"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1956,
        type: "Private",
        affiliation: "Anna University",
        description: "A reputed private college offering engineering and technology courses.",
        placement: {
          percentage: 80,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["TNEA"],
        admissionDetails: {
          eligibility: "TNEA qualification required",
          process: "Through TNEA counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 37,
        name: "Thiagarajar College of Engineering",
        location: {
          city: "Madurai",
          state: "Tamil Nadu",
          address: "Madurai, Tamil Nadu"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 180000, max: 180000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1957,
        type: "Private",
        affiliation: "Anna University",
        description: "A reputed private college offering engineering and technology courses.",
        placement: {
          percentage: 82,
          avgSalary: 950000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["TNEA"],
        admissionDetails: {
          eligibility: "TNEA qualification required",
          process: "Through TNEA counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 38,
        name: "Stella Maris College",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 65000, max: 65000 }
        },
        courses: ["Arts", "Science", "Social Work"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1947,
        type: "Private",
        affiliation: "University of Madras",
        description: "A reputed women's college offering arts, science, and social work programs.",
        placement: {
          percentage: 78,
          avgSalary: 600000,
          topRecruiters: ["NGOs", "Social Work Organizations"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 39,
        name: "Madras Christian College",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 70000, max: 70000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1837,
        type: "Private",
        affiliation: "University of Madras",
        description: "A reputed college offering arts, science, and commerce programs.",
        placement: {
          percentage: 75,
          avgSalary: 550000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 40,
        name: "Bharathidasan University",
        location: {
          city: "Tiruchirappalli",
          state: "Tamil Nadu",
          address: "Tiruchirappalli, Tamil Nadu"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 30000, max: 30000 }
        },
        courses: ["Arts", "Science", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1982,
        type: "Government",
        affiliation: "State University",
        description: "A state university offering diverse programs in arts, science, and management.",
        placement: {
          percentage: 70,
          avgSalary: 450000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 41,
        name: "Kalasalingam Academy of Research and Education",
        location: {
          city: "Krishnankoil",
          state: "Tamil Nadu",
          address: "Krishnankoil, Tamil Nadu"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Pharmacy", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1984,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering engineering, pharmacy, and management programs.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["KAREE Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 42,
        name: "Hindustan Institute of Technology and Science",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 300000, max: 300000 }
        },
        courses: ["Engineering", "Architecture", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1985,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering engineering, architecture, and management programs.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["HITS Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 43,
        name: "Government College of Technology",
        location: {
          city: "Coimbatore",
          state: "Tamil Nadu",
          address: "Coimbatore, Tamil Nadu"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1945,
        type: "Government",
        affiliation: "Anna University",
        description: "A government college offering engineering and technology courses.",
        placement: {
          percentage: 85,
          avgSalary: 1000000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["TNEA"],
        admissionDetails: {
          eligibility: "TNEA qualification required",
          process: "Through TNEA counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 44,
        name: "Sathyabama Institute of Science and Technology",
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Chennai, Tamil Nadu"
        },
        rating: 3.7,
        fees: {
          tuition: { min: 280000, max: 280000 }
        },
        courses: ["Engineering", "Science", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1987,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering engineering, science, and management programs.",
        placement: {
          percentage: 70,
          avgSalary: 800000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Sathyabama Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 45,
        name: "Tamil Nadu Agricultural University",
        location: {
          city: "Coimbatore",
          state: "Tamil Nadu",
          address: "Coimbatore, Tamil Nadu"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 40000, max: 40000 }
        },
        courses: ["Agriculture", "Horticulture", "Agricultural Engineering"],
        imageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1971,
        type: "Government",
        affiliation: "State University",
        description: "A state university offering diverse programs in agriculture and related fields.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Agricultural Firms", "Research Institutes"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      }
    ]
  },
  {
    id: 3,
    name: "Karnataka",
    collegeCount: 15,
    image: "https://images.unsplash.com/photo-1595211877493-41a4e5cd4ed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Silicon Valley of India with top tech institutes",
    colleges: [
      {
        id: 101,
        name: "Indian Institute of Science",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.7,
        fees: {
          tuition: { min: 25000, max: 25000 }
        },
        courses: ["Science", "Engineering", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1909,
        type: "Government",
        affiliation: "Deemed University",
        description: "India's premier research institute with strong science and engineering programs.",
        placement: {
          percentage: 97,
          avgSalary: 2000000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        entranceExams: ["IISc Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 102,
        name: "Indian Institute of Management Bangalore",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.6,
        fees: {
          tuition: { min: 2400000, max: 2400000 }
        },
        courses: ["Management", "Executive Programs"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1973,
        type: "Government",
        affiliation: "Autonomous",
        description: "One of India's top management institutes offering MBA and executive programs.",
        placement: {
          percentage: 98,
          avgSalary: 3500000,
          topRecruiters: ["McKinsey", "Bain", "BCG"]
        },
        entranceExams: ["CAT"],
        admissionDetails: {
          eligibility: "CAT qualification required",
          process: "Through CAT counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 103,
        name: "National Institute of Technology Karnataka",
        location: {
          city: "Surathkal",
          state: "Karnataka",
          address: "Surathkal, Karnataka"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Engineering", "Technology", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1960,
        type: "Government",
        affiliation: "National Institute",
        description: "A premier NIT known for its engineering and architecture programs.",
        placement: {
          percentage: 90,
          avgSalary: 1400000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 104,
        name: "PES University",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 400000, max: 400000 }
        },
        courses: ["Engineering", "Management", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1972,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering engineering, management, and law programs.",
        placement: {
          percentage: 85,
          avgSalary: 1200000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["PESSAT"],
        admissionDetails: {
          eligibility: "PESSAT qualification required",
          process: "Through PESSAT counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 105,
        name: "R.V. College of Engineering",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 300000, max: 300000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1963,
        type: "Private",
        affiliation: "Visvesvaraya Technological University",
        description: "A reputed private college offering engineering and technology courses.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["VTU Entrance"],
        admissionDetails: {
          eligibility: "VTU qualification required",
          process: "Through VTU counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 106,
        name: "Bangalore Institute of Technology",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1946,
        type: "Government",
        affiliation: "Visvesvaraya Technological University",
        description: "A government college offering engineering and technology courses.",
        placement: {
          percentage: 80,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["VTU Entrance"],
        admissionDetails: {
          eligibility: "VTU qualification required",
          process: "Through VTU counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 107,
        name: "M.S. Ramaiah Institute of Technology",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 350000, max: 350000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1962,
        type: "Private",
        affiliation: "Visvesvaraya Technological University",
        description: "A reputed private college offering engineering and technology courses.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["VTU Entrance"],
        admissionDetails: {
          eligibility: "VTU qualification required",
          process: "Through VTU counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 108,
        name: "Christ University",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Arts", "Science", "Management", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1969,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering diverse programs in arts, science, management, and law.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Christ Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 109,
        name: "Manipal Institute of Technology",
        location: {
          city: "Manipal",
          state: "Karnataka",
          address: "Manipal, Karnataka"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 400000, max: 400000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1957,
        type: "Private",
        affiliation: "Manipal Academy of Higher Education",
        description: "A private institute offering engineering and technology courses.",
        placement: {
          percentage: 85,
          avgSalary: 1200000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["MET"],
        admissionDetails: {
          eligibility: "MET qualification required",
          process: "Through MET counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 110,
        name: "JSS Science and Technology University",
        location: {
          city: "Mysuru",
          state: "Karnataka",
          address: "Mysuru, Karnataka"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Medicine", "Pharmacy"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2008,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering engineering, medicine, and pharmacy programs.",
        placement: {
          percentage: 80,
          avgSalary: 1000000,
          topRecruiters: ["Hospitals", "Pharma Companies"]
        },
        entranceExams: ["JSS Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 111,
        name: "Dayananda Sagar College of Engineering",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 300000, max: 300000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1979,
        type: "Private",
        affiliation: "Visvesvaraya Technological University",
        description: "A reputed private college offering engineering and technology courses.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["VTU Entrance"],
        admissionDetails: {
          eligibility: "VTU qualification required",
          process: "Through VTU counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 112,
        name: "National Institute of Mental Health and Neurosciences",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.5,
        fees: {
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Medicine", "Psychology", "Neuroscience"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1974,
        type: "Government",
        affiliation: "Deemed University",
        description: "A premier institute for mental health and neuroscience studies.",
        placement: {
          percentage: 90,
          avgSalary: 1200000,
          topRecruiters: ["Hospitals", "Research Institutes"]
        },
        entranceExams: ["NIMHANS Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 113,
        name: "Indian Statistical Institute",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 100000, max: 100000 }
        },
        courses: ["Statistics", "Mathematics", "Computer Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1996,
        type: "Government",
        affiliation: "Deemed University",
        description: "A premier institute for statistics, mathematics, and computer science.",
        placement: {
          percentage: 90,
          avgSalary: 1300000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["ISI Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 114,
        name: "Jain University",
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "Bangalore, Karnataka"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 300000, max: 300000 }
        },
        courses: ["Engineering", "Management", "Law", "Arts"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1990,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering diverse programs in engineering, management, law, and arts.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Jain Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 115,
        name: "Visvesvaraya Technological University",
        location: {
          city: "Belagavi",
          state: "Karnataka",
          address: "Belagavi, Karnataka"
        },
        rating: 3.7,
        fees: {
          tuition: { min: 80000, max: 80000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1998,
        type: "Government",
        affiliation: "State University",
        description: "A state university offering engineering, technology, and management programs.",
        placement: {
          percentage: 70,
          avgSalary: 600000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["VTU Entrance"],
        admissionDetails: {
          eligibility: "VTU qualification required",
          process: "Through VTU counseling",
          deadlines: "July 2024"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Maharashtra",
    collegeCount: 12,
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Financial capital with diverse educational opportunities",
    colleges: [
      {
        id: 201,
        name: "Indian Institute of Technology Bombay",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 4.6,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1958,
        type: "Government",
        affiliation: "Autonomous",
        description: "One of India's top engineering institutes with excellent research facilities.",
        placement: {
          percentage: 95,
          avgSalary: 1800000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 202,
        name: "Tata Institute of Social Sciences",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Social Work", "Social Sciences", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1936,
        type: "Government",
        affiliation: "Deemed University",
        description: "A premier institute for social sciences and social work education.",
        placement: {
          percentage: 85,
          avgSalary: 900000,
          topRecruiters: ["NGOs", "Government", "Research Institutes"]
        },
        entranceExams: ["TISS Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 203,
        name: "University of Mumbai",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 60000, max: 60000 }
        },
        courses: ["Arts", "Science", "Commerce", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1857,
        type: "Government",
        affiliation: "State University",
        description: "One of the oldest universities offering diverse programs in arts, science, commerce, and law.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 204,
        name: "Pune University",
        location: {
          city: "Pune",
          state: "Maharashtra",
          address: "Pune, Maharashtra"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Arts", "Science", "Engineering", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1949,
        type: "Government",
        affiliation: "State University",
        description: "A reputed university offering diverse programs in arts, science, engineering, and management.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 205,
        name: "College of Engineering Pune",
        location: {
          city: "Pune",
          state: "Maharashtra",
          address: "Pune, Maharashtra"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 120000, max: 120000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1854,
        type: "Government",
        affiliation: "Pune University",
        description: "A premier engineering college offering diverse technology programs.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Main"],
        admissionDetails: {
          eligibility: "JEE Main qualification required",
          process: "Through JEE Main counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 206,
        name: "Institute of Chemical Technology",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Chemical Engineering", "Technology", "Pharmacy"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1933,
        type: "Government",
        affiliation: "Deemed University",
        description: "A premier institute for chemical engineering, technology, and pharmacy.",
        placement: {
          percentage: 90,
          avgSalary: 1300000,
          topRecruiters: ["Pharma Companies", "Chemical Firms"]
        },
        entranceExams: ["ICT Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 207,
        name: "Symbiosis International University",
        location: {
          city: "Pune",
          state: "Maharashtra",
          address: "Pune, Maharashtra"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 350000, max: 350000 }
        },
        courses: ["Management", "Law", "Engineering", "Arts"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1971,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering diverse programs in management, law, engineering, and arts.",
        placement: {
          percentage: 85,
          avgSalary: 1200000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Symbiosis Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 208,
        name: "Fergusson College",
        location: {
          city: "Pune",
          state: "Maharashtra",
          address: "Pune, Maharashtra"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 45000, max: 45000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1885,
        type: "Private",
        affiliation: "Pune University",
        description: "A reputed college offering arts, science, and commerce programs.",
        placement: {
          percentage: 75,
          avgSalary: 550000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 209,
        name: "St. Xavier's College Mumbai",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 55000, max: 55000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1869,
        type: "Private",
        affiliation: "University of Mumbai",
        description: "A reputed college offering arts, science, and commerce programs.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 210,
        name: "Veermata Jijabai Technological Institute",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 180000, max: 180000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1887,
        type: "Government",
        affiliation: "Autonomous",
        description: "A premier engineering institute offering diverse technology programs.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Main"],
        admissionDetails: {
          eligibility: "JEE Main qualification required",
          process: "Through JEE Main counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 211,
        name: "Sardar Patel Institute of Technology",
        location: {
          city: "Mumbai",
          state: "Maharashtra",
          address: "Mumbai, Maharashtra"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1962,
        type: "Private",
        affiliation: "University of Mumbai",
        description: "A reputed private college offering engineering and technology courses.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 212,
        name: "Bharati Vidyapeeth University",
        location: {
          city: "Pune",
          state: "Maharashtra",
          address: "Pune, Maharashtra"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Engineering", "Medicine", "Management", "Arts"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1964,
        type: "Private",
        affiliation: "Deemed University",
        description: "A private university offering diverse programs in engineering, medicine, management, and arts.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Bharati Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      }
    ]
  },
  {
    id: 5,
    name: "West Bengal",
    collegeCount: 10,
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Cultural capital with rich academic heritage",
    colleges: [
      {
        id: 301,
        name: "Indian Institute of Technology Kharagpur",
        location: {
          city: "Kharagpur",
          state: "West Bengal",
          address: "Kharagpur, West Bengal"
        },
        rating: 4.5,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1951,
        type: "Government",
        affiliation: "Autonomous",
        description: "One of India's premier engineering institutes with excellent research facilities.",
        placement: {
          percentage: 95,
          avgSalary: 1800000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 302,
        name: "University of Calcutta",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 30000, max: 30000 }
        },
        courses: ["Arts", "Science", "Commerce", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1857,
        type: "Government",
        affiliation: "State University",
        description: "One of the oldest universities offering diverse programs in arts, science, commerce, and law.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 303,
        name: "Jadavpur University",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 4.3,
        fees: {
          tuition: { min: 25000, max: 25000 }
        },
        courses: ["Engineering", "Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1955,
        type: "Government",
        affiliation: "State University",
        description: "A reputed university offering engineering, arts, and science programs.",
        placement: {
          percentage: 85,
          avgSalary: 700000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Jadavpur Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 304,
        name: "Presidency University",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 35000, max: 35000 }
        },
        courses: ["Arts", "Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1817,
        type: "Government",
        affiliation: "State University",
        description: "A historic university offering arts and science programs.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 305,
        name: "Indian Statistical Institute",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 4.4,
        fees: {
          tuition: { min: 50000, max: 50000 }
        },
        courses: ["Statistics", "Mathematics", "Computer Science"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1931,
        type: "Government",
        affiliation: "Deemed University",
        description: "A premier institute for statistics, mathematics, and computer science.",
        placement: {
          percentage: 90,
          avgSalary: 1300000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["ISI Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 306,
        name: "St. Xavier's College Kolkata",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 40000, max: 40000 }
        },
        courses: ["Arts", "Science", "Commerce"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1860,
        type: "Private",
        affiliation: "University of Calcutta",
        description: "A reputed college offering arts, science, and commerce programs.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 307,
        name: "Bengal Engineering and Science University",
        location: {
          city: "Shibpur",
          state: "West Bengal",
          address: "Shibpur, West Bengal"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Engineering", "Technology", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1856,
        type: "Government",
        affiliation: "State University",
        description: "A reputed engineering and science university.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 308,
        name: "Rabindra Bharati University",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 20000, max: 20000 }
        },
        courses: ["Arts", "Music", "Dance", "Fine Arts"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1962,
        type: "Government",
        affiliation: "State University",
        description: "A university known for arts, music, dance, and fine arts programs.",
        placement: {
          percentage: 70,
          avgSalary: 400000,
          topRecruiters: ["Cultural Organizations", "Arts Institutes"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 309,
        name: "West Bengal University of Technology",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 3.7,
        fees: {
          tuition: { min: 80000, max: 80000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2001,
        type: "Government",
        affiliation: "State University",
        description: "A state university offering engineering, technology, and management programs.",
        placement: {
          percentage: 75,
          avgSalary: 700000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["WBJEE"],
        admissionDetails: {
          eligibility: "WBJEE qualification required",
          process: "Through WBJEE counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 310,
        name: "Techno India University",
        location: {
          city: "Kolkata",
          state: "West Bengal",
          address: "Kolkata, West Bengal"
        },
        rating: 3.6,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Engineering", "Management", "Computer Applications"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2012,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering engineering, management, and computer applications programs.",
        placement: {
          percentage: 70,
          avgSalary: 600000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Techno India Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      }
    ]
  },
  {
    id: 6,
    name: "Uttar Pradesh",
    collegeCount: 8,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Historic state with prestigious universities",
    colleges: [
      {
        id: 401,
        name: "Indian Institute of Technology Kanpur",
        location: {
          city: "Kanpur",
          state: "Uttar Pradesh",
          address: "Kanpur, Uttar Pradesh"
        },
        rating: 4.5,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Technology", "Management"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1959,
        type: "Government",
        affiliation: "Autonomous",
        description: "One of India's premier engineering institutes with excellent research facilities.",
        placement: {
          percentage: 95,
          avgSalary: 1800000,
          topRecruiters: ["Google", "Microsoft", "Amazon"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 402,
        name: "Banaras Hindu University",
        location: {
          city: "Varanasi",
          state: "Uttar Pradesh",
          address: "Varanasi, Uttar Pradesh"
        },
        rating: 4.2,
        fees: {
          tuition: { min: 40000, max: 40000 }
        },
        courses: ["Arts", "Science", "Engineering", "Medicine"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1916,
        type: "Government",
        affiliation: "Central University",
        description: "A central university offering diverse programs in arts, science, engineering, and medicine.",
        placement: {
          percentage: 85,
          avgSalary: 700000,
          topRecruiters: ["Hospitals", "Research Institutes"]
        },
        entranceExams: ["BHU Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 403,
        name: "Aligarh Muslim University",
        location: {
          city: "Aligarh",
          state: "Uttar Pradesh",
          address: "Aligarh, Uttar Pradesh"
        },
        rating: 4.1,
        fees: {
          tuition: { min: 35000, max: 35000 }
        },
        courses: ["Arts", "Science", "Engineering", "Medicine"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1875,
        type: "Government",
        affiliation: "Central University",
        description: "A central university offering diverse programs in arts, science, engineering, and medicine.",
        placement: {
          percentage: 80,
          avgSalary: 600000,
          topRecruiters: ["Hospitals", "Research Institutes"]
        },
        entranceExams: ["AMU Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 404,
        name: "Lucknow University",
        location: {
          city: "Lucknow",
          state: "Uttar Pradesh",
          address: "Lucknow, Uttar Pradesh"
        },
        rating: 3.9,
        fees: {
          tuition: { min: 25000, max: 25000 }
        },
        courses: ["Arts", "Science", "Commerce", "Law"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1867,
        type: "Government",
        affiliation: "State University",
        description: "A state university offering diverse programs in arts, science, commerce, and law.",
        placement: {
          percentage: 75,
          avgSalary: 500000,
          topRecruiters: ["Banks", "IT", "Consulting"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 405,
        name: "Motilal Nehru National Institute of Technology",
        location: {
          city: "Allahabad",
          state: "Uttar Pradesh",
          address: "Allahabad, Uttar Pradesh"
        },
        rating: 4.0,
        fees: {
          tuition: { min: 200000, max: 200000 }
        },
        courses: ["Engineering", "Technology"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1961,
        type: "Government",
        affiliation: "National Institute",
        description: "A premier NIT offering engineering and technology programs.",
        placement: {
          percentage: 85,
          avgSalary: 1100000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["JEE Advanced"],
        admissionDetails: {
          eligibility: "JEE Advanced qualification required",
          process: "Through JEE Advanced counseling",
          deadlines: "July 2024"
        }
      },
      {
        id: 406,
        name: "Harcourt Butler Technical University",
        location: {
          city: "Kanpur",
          state: "Uttar Pradesh",
          address: "Kanpur, Uttar Pradesh"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 120000, max: 120000 }
        },
        courses: ["Engineering", "Technology", "Architecture"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 1921,
        type: "Government",
        affiliation: "State University",
        description: "A state university offering engineering, technology, and architecture programs.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["University Entrance"],
        admissionDetails: {
          eligibility: "12th pass with required percentage",
          process: "Through university admission process",
          deadlines: "June 2024"
        }
      },
      {
        id: 407,
        name: "Integral University",
        location: {
          city: "Lucknow",
          state: "Uttar Pradesh",
          address: "Lucknow, Uttar Pradesh"
        },
        rating: 3.7,
        fees: {
          tuition: { min: 150000, max: 150000 }
        },
        courses: ["Engineering", "Management", "Pharmacy"],
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2004,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering engineering, management, and pharmacy programs.",
        placement: {
          percentage: 70,
          avgSalary: 800000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Integral Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      },
      {
        id: 408,
        name: "Amity University Noida",
        location: {
          city: "Noida",
          state: "Uttar Pradesh",
          address: "Noida, Uttar Pradesh"
        },
        rating: 3.8,
        fees: {
          tuition: { min: 250000, max: 250000 }
        },
        courses: ["Engineering", "Management", "Law", "Arts"],
        imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        established: 2005,
        type: "Private",
        affiliation: "Private University",
        description: "A private university offering diverse programs in engineering, management, law, and arts.",
        placement: {
          percentage: 75,
          avgSalary: 900000,
          topRecruiters: ["TCS", "Infosys", "Wipro"]
        },
        entranceExams: ["Amity Entrance"],
        admissionDetails: {
          eligibility: "Entrance test qualification required",
          process: "Through entrance test and counseling",
          deadlines: "June 2024"
        }
      }
    ]
  }
];

// Helper functions
export const getCollegesByState = (stateId: string): College[] => {
  const state = states.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === stateId.toLowerCase());
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
