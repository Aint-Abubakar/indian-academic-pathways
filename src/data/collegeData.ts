import { StaticImageData } from "next/image";

export type Location = {
  city: string;
  state: string;
  address: string;
};

export type Fees = {
  tuition: {
    min: number;
    max: number;
  };
  hostel?: {
    min: number;
    max: number;
  };
};

export type Scholarship = {
  name: string;
  amount: string;
  eligibility: string;
};

export type Placement = {
  percentage: number;
  avgSalary: number;
  topRecruiters?: string[];
};

export type AdmissionDetails = {
  eligibility: string;
  process: string;
  deadlines: string;
};

export type College = {
  id: string;
  name: string;
  type: string;
  rating: number;
  location: Location;
  description: string;
  courses: string[];
  entranceExams: string[];
  admissionDetails: AdmissionDetails;
  fees: Fees;
  scholarships: Scholarship[];
  placement: Placement;
  imageUrl?: string;
};

export type State = {
  id: string;
  name: string;
  image: string;
  colleges: College[];
};

// College data by state
export const states = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    image: "/tamil-nadu.jpg",
    colleges: [
      {
        id: "anna-university",
        name: "Anna University",
        type: "Public University",
        rating: 4.5,
        location: {
          city: "Chennai",
          state: "Tamil Nadu",
          address: "Sardar Patel Rd, Guindy, Chennai, Tamil Nadu 600025"
        },
        description: "Anna University is a technical university in Tamil Nadu. It is named after C. N. Annadurai, the former Chief Minister of Tamil Nadu.",
        courses: ["B.E", "B.Tech", "M.E", "M.Tech", "MBA", "MCA"],
        entranceExams: ["TNEA", "GATE", "TANCET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in relevant subjects",
          process: "Admission through TNEA counselling based on 10+2 marks",
          deadlines: "Applications typically open in May-June each year"
        },
        fees: {
          tuition: { min: 50000, max: 75000 },
          hostel: { min: 25000, max: 40000 }
        },
        scholarships: [
          {
            name: "BC/MBC/DNC Scholarship",
            amount: "Full tuition fee waiver",
            eligibility: "Students belonging to BC/MBC/DNC communities with family income below ₹2 lakhs per annum"
          },
          {
            name: "SC/ST Scholarship",
            amount: "Full tuition fee waiver",
            eligibility: "SC/ST students with family income below ₹2.5 lakhs per annum"
          }
        ],
        placement: {
          percentage: 90,
          avgSalary: 600000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture"]
        },
        imageUrl: "/colleges/anna-university.jpg"
      },
      {
        id: "vellore-institute-of-technology",
        name: "Vellore Institute of Technology",
        type: "Private University",
        rating: 4.7,
        location: {
          city: "Vellore",
          state: "Tamil Nadu",
          address: "Katpadi, Vellore, Tamil Nadu 632014"
        },
        description: "Vellore Institute of Technology (VIT) is a private deemed university located in Vellore, Tamil Nadu. Founded in 1984, it is known for its engineering programs.",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA", "B.Arch"],
        entranceExams: ["VITEEE", "GATE", "CAT"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in PCM",
          process: "Admission through VITEEE entrance exam",
          deadlines: "Applications typically open in November-December each year"
        },
        fees: {
          tuition: { min: 173000, max: 195000 },
          hostel: { min: 68000, max: 80000 }
        },
        scholarships: [
          {
            name: "Rajiv Gandhi Scholarship",
            amount: "Full tuition fee waiver",
            eligibility: "Economically backward students"
          },
          {
            name: "Merit Scholarship",
            amount: "Up to 50% tuition fee waiver",
            eligibility: "Based on VITEEE rank"
          }
        ],
        placement: {
          percentage: 95,
          avgSalary: 750000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Amazon"]
        },
        imageUrl: "/colleges/vit.jpg"
      },
    ],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    image: "/karnataka.jpg",
    colleges: [
      {
        id: "indian-institute-of-science",
        name: "Indian Institute of Science",
        type: "Public University",
        rating: 4.9,
        location: {
          city: "Bangalore",
          state: "Karnataka",
          address: "CV Raman Rd, Bengaluru, Karnataka 560012"
        },
        description: "The Indian Institute of Science (IISc) is a public university for scientific research and higher education located in Bangalore, India. Established in 1909, it is one of the most prestigious academic institutions in India.",
        courses: ["B.Sc", "M.Sc", "Ph.D"],
        entranceExams: ["JEE Advanced", "GATE"],
        admissionDetails: {
          eligibility: "10+2 with minimum 75% marks in science stream",
          process: "Admission through JEE Advanced or GATE scores",
          deadlines: "Applications typically open in April-May each year"
        },
        fees: {
          tuition: { min: 30000, max: 50000 },
          hostel: { min: 20000, max: 30000 }
        },
        scholarships: [
          {
            name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
            amount: "Up to ₹80,000 per year",
            eligibility: "Students enrolled in basic science courses"
          },
          {
            name: "INSPIRE Scholarship",
            amount: "₹80,000 per year",
            eligibility: "Students pursuing science courses"
          }
        ],
        placement: {
          percentage: 85,
          avgSalary: 800000,
          topRecruiters: ["Google", "Microsoft", "Intel", "Qualcomm", "Samsung"]
        },
        imageUrl: "/colleges/iisc.jpg"
      },
      {
        id: "national-institute-of-technology-karnataka",
        name: "NIT Karnataka",
        type: "Public University",
        rating: 4.6,
        location: {
          city: "Surathkal",
          state: "Karnataka",
          address: "NH 66, Srinivasnagar, Surathkal, Mangalore, Karnataka 575025"
        },
        description: "National Institute of Technology Karnataka (NITK), also known as NIT Surathkal, is a public engineering institute located in Surathkal, Karnataka. It was established in 1960 and is one of the oldest NITs in India.",
        courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
        entranceExams: ["JEE Main", "GATE"],
        admissionDetails: {
          eligibility: "10+2 with minimum 75% marks in PCM",
          process: "Admission through JEE Main score",
          deadlines: "Applications typically open in April-May each year"
        },
        fees: {
          tuition: { min: 125000, max: 150000 },
          hostel: { min: 40000, max: 60000 }
        },
        scholarships: [
          {
            name: "Merit-cum-Means Scholarship",
            amount: "Up to full tuition fee waiver",
            eligibility: "Based on merit and family income"
          },
          {
            name: "Central Sector Scholarship Scheme",
            amount: "Up to ₹20,000 per year",
            eligibility: "Students with family income below ₹8 lakhs per annum"
          }
        ],
        placement: {
          percentage: 92,
          avgSalary: 700000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "L&T"]
        },
        imageUrl: "/colleges/nitk.jpg"
      },
    ],
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    image: "/placeholder.svg",
    colleges: [
      {
        id: "andhra-university",
        name: "Andhra University",
        type: "Public University",
        rating: 4.5,
        location: {
          city: "Visakhapatnam",
          state: "Andhra Pradesh",
          address: "Andhra University Rd, Visakhapatnam, Andhra Pradesh 530003"
        },
        description: "Established in 1926, Andhra University is one of the oldest and most prestigious universities in India. Known for its strong engineering, marine sciences, and pharmaceutical programs, it has consistently ranked among the top universities in the country.",
        courses: ["Engineering", "Science", "Pharmacy", "Management", "Law", "Arts", "Commerce", "Education"],
        entranceExams: ["EAMCET", "ICET", "LAWCET", "PGCET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in relevant subjects",
          process: "Admission through state-level entrance examinations or merit-based selection",
          deadlines: "Applications typically open in April-May each year"
        },
        fees: {
          tuition: { min: 25000, max: 120000 },
          hostel: { min: 40000, max: 60000 }
        },
        scholarships: [
          {
            name: "Merit Scholarship",
            amount: "Up to ₹25,000 per year",
            eligibility: "Students with 90% or above in qualifying examination"
          },
          {
            name: "SC/ST Scholarship",
            amount: "Full tuition fee waiver",
            eligibility: "SC/ST students with family income below ₹2.5 lakhs per annum"
          }
        ],
        placement: {
          percentage: 85,
          avgSalary: 650000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "sri-venkateswara-university",
        name: "Sri Venkateswara University",
        type: "Public University",
        rating: 4.3,
        location: {
          city: "Tirupati",
          state: "Andhra Pradesh",
          address: "Sri Venkateswara University, Tirupati, Andhra Pradesh 517502"
        },
        description: "Sri Venkateswara University, established in 1954, is a prestigious institution located in the temple city of Tirupati. It offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.",
        courses: ["Science", "Engineering", "Management", "Arts", "Commerce", "Education", "Pharmacy"],
        entranceExams: ["SVUCET", "EAMCET", "ICET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 55% marks in relevant subjects",
          process: "Admission through university-level entrance examinations",
          deadlines: "Applications typically open in May-June each year"
        },
        fees: {
          tuition: { min: 20000, max: 80000 },
          hostel: { min: 35000, max: 55000 }
        },
        scholarships: [
          {
            name: "University Merit Scholarship",
            amount: "Up to ₹20,000 per year",
            eligibility: "Top 5% students in each department"
          }
        ],
        placement: {
          percentage: 78,
          avgSalary: 550000,
          topRecruiters: ["Infosys", "TCS", "Wipro", "HCL", "Amazon"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "acharya-nagarjuna-university",
        name: "Acharya Nagarjuna University",
        type: "Public University",
        rating: 4.1,
        location: {
          city: "Guntur",
          state: "Andhra Pradesh",
          address: "Nagarjuna Nagar, Guntur, Andhra Pradesh 522510"
        },
        description: "Established in 1976, Acharya Nagarjuna University is known for its quality education in various disciplines including sciences, humanities, and engineering. The university emphasizes research and innovation.",
        courses: ["Arts", "Science", "Engineering", "Management", "Law", "Commerce", "Education"],
        entranceExams: ["ANUEE", "EAMCET", "ICET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 50% marks in relevant subjects",
          process: "Merit-based admission through state-level entrance examinations",
          deadlines: "Applications open in April-May each year"
        },
        fees: {
          tuition: { min: 15000, max: 75000 },
          hostel: { min: 30000, max: 50000 }
        },
        scholarships: [
          {
            name: "ANU Scholarship",
            amount: "Up to ₹15,000 per year",
            eligibility: "Merit-cum-means basis"
          }
        ],
        placement: {
          percentage: 72,
          avgSalary: 500000,
          topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "jawaharlal-nehru-technological-university-kakinada",
        name: "JNTU Kakinada",
        type: "Technical University",
        rating: 4.4,
        location: {
          city: "Kakinada",
          state: "Andhra Pradesh",
          address: "Kakinada, Andhra Pradesh 533003"
        },
        description: "Jawaharlal Nehru Technological University Kakinada (JNTUK) is a renowned technical university focusing on engineering, technology, and management education. It has numerous affiliated colleges across the state.",
        courses: ["Engineering", "Technology", "Pharmacy", "Management", "Science"],
        entranceExams: ["EAMCET", "ECET", "PGECET", "GATE"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in PCM for engineering courses",
          process: "Admission through EAMCET and other state-level entrance exams",
          deadlines: "Applications typically open in March-April each year"
        },
        fees: {
          tuition: { min: 35000, max: 125000 },
          hostel: { min: 40000, max: 65000 }
        },
        scholarships: [
          {
            name: "JNTUK Merit Scholarship",
            amount: "Up to ₹30,000 per year",
            eligibility: "Top performers in entrance examinations"
          }
        ],
        placement: {
          percentage: 87,
          avgSalary: 650000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "IBM", "Microsoft"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "jawaharlal-nehru-technological-university-anantapur",
        name: "JNTU Anantapur",
        type: "Technical University",
        rating: 4.2,
        location: {
          city: "Anantapur",
          state: "Andhra Pradesh",
          address: "Anantapur, Andhra Pradesh 515002"
        },
        description: "JNTU Anantapur is a premier technical university offering quality education in engineering, technology, and management. The university has several affiliated colleges and focuses on industry-relevant education.",
        courses: ["Engineering", "Technology", "Pharmacy", "MBA", "MCA"],
        entranceExams: ["EAMCET", "ECET", "PGECET", "ICET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in PCM for engineering courses",
          process: "Admission through state-level entrance examinations",
          deadlines: "Applications typically open in March-April each year"
        },
        fees: {
          tuition: { min: 30000, max: 120000 },
          hostel: { min: 35000, max: 55000 }
        },
        scholarships: [
          {
            name: "JNTUA Scholarship",
            amount: "Up to ₹25,000 per year",
            eligibility: "Based on academic performance and financial need"
          }
        ],
        placement: {
          percentage: 82,
          avgSalary: 600000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Capgemini", "Accenture"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "krishna-university",
        name: "Krishna University",
        type: "Public University",
        rating: 3.9,
        location: {
          city: "Machilipatnam",
          state: "Andhra Pradesh",
          address: "Machilipatnam, Krishna District, Andhra Pradesh 521001"
        },
        description: "Krishna University is a relatively young institution established in 2008, focused on providing quality education in arts, sciences, and commerce. The university has a strong emphasis on research and development.",
        courses: ["Arts", "Science", "Commerce", "Management", "Computer Applications"],
        entranceExams: ["KRUCET", "ICET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 50% marks in relevant subjects",
          process: "Admission through university-level entrance examinations or merit-based selection",
          deadlines: "Applications typically open in May each year"
        },
        fees: {
          tuition: { min: 12000, max: 60000 },
          hostel: { min: 30000, max: 45000 }
        },
        scholarships: [
          {
            name: "KU Scholarship",
            amount: "Up to ₹10,000 per year",
            eligibility: "Merit-cum-means basis"
          }
        ],
        placement: {
          percentage: 65,
          avgSalary: 450000,
          topRecruiters: ["TCS", "Infosys", "Local Industries", "State Government"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "sri-krishnadevaraya-university",
        name: "Sri Krishnadevaraya University",
        type: "Public University",
        rating: 4.0,
        location: {
          city: "Anantapur",
          state: "Andhra Pradesh",
          address: "Sri Krishnadevaraya University, Anantapur, Andhra Pradesh 515003"
        },
        description: "Sri Krishnadevaraya University, established in 1981, offers various undergraduate, postgraduate, and research programs. The university has a strong focus on rural development and regional needs.",
        courses: ["Arts", "Science", "Commerce", "Management", "Education", "Law"],
        entranceExams: ["SKUCET", "LAWCET", "ICET"],
        admissionDetails: {
          eligibility: "10+2 with minimum 50% marks in relevant subjects",
          process: "Admission through university-level entrance examinations",
          deadlines: "Applications typically open in April-May each year"
        },
        fees: {
          tuition: { min: 15000, max: 70000 },
          hostel: { min: 25000, max: 45000 }
        },
        scholarships: [
          {
            name: "SKU Merit Scholarship",
            amount: "Up to ₹12,000 per year",
            eligibility: "Based on academic performance"
          }
        ],
        placement: {
          percentage: 68,
          avgSalary: 480000,
          topRecruiters: ["TCS", "Infosys", "Local Industries", "State Government"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "vignan-university",
        name: "Vignan's University",
        type: "Private University",
        rating: 4.3,
        location: {
          city: "Guntur",
          state: "Andhra Pradesh",
          address: "Vadlamudi, Guntur District, Andhra Pradesh 522213"
        },
        description: "Vignan's University (Vignan's Foundation for Science, Technology and Research) is a private university known for its quality education in engineering and technology. The university focuses on industry-ready graduates.",
        courses: ["Engineering", "Technology", "Management", "Pharmacy", "Science"],
        entranceExams: ["VSAT", "EAMCET", "JEE Main", "GATE"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in PCM for engineering courses",
          process: "Admission through entrance examinations and management quota",
          deadlines: "Applications typically open in March each year"
        },
        fees: {
          tuition: { min: 75000, max: 175000 },
          hostel: { min: 50000, max: 80000 }
        },
        scholarships: [
          {
            name: "Vignan Merit Scholarship",
            amount: "Up to 100% tuition fee waiver",
            eligibility: "Based on JEE Main/EAMCET rank"
          },
          {
            name: "Sports Scholarship",
            amount: "Up to 50% tuition fee waiver",
            eligibility: "Outstanding sports achievements at state/national level"
          }
        ],
        placement: {
          percentage: 92,
          avgSalary: 700000,
          topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Amazon", "Microsoft", "IBM"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "koneru-lakshmaiah-university",
        name: "KL University",
        type: "Private University",
        rating: 4.4,
        location: {
          city: "Guntur",
          state: "Andhra Pradesh",
          address: "Greenfields, Vaddeswaram, Guntur District, Andhra Pradesh 522502"
        },
        description: "Koneru Lakshmaiah Education Foundation, commonly known as KL University, is a private university established in 1980. It is known for its strong focus on engineering, technology, and management education.",
        courses: ["Engineering", "Technology", "Management", "Sciences", "Humanities", "Law"],
        entranceExams: ["KLUEEE", "JEE Main", "EAMCET", "GATE", "CAT"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in PCM for engineering courses",
          process: "Admission through university entrance examination or other national/state-level entrance exams",
          deadlines: "Applications typically open in February each year"
        },
        fees: {
          tuition: { min: 80000, max: 200000 },
          hostel: { min: 60000, max: 90000 }
        },
        scholarships: [
          {
            name: "KL Merit Scholarship",
            amount: "Up to 100% tuition fee waiver",
            eligibility: "Based on JEE Main/EAMCET rank"
          },
          {
            name: "KL Sports Scholarship",
            amount: "Up to 50% tuition fee waiver",
            eligibility: "National/International level sports achievements"
          }
        ],
        placement: {
          percentage: 95,
          avgSalary: 750000,
          topRecruiters: ["Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "IBM", "Oracle", "Accenture"]
        },
        imageUrl: "/placeholder.svg"
      },
      {
        id: "gitam-university",
        name: "GITAM University",
        type: "Private University",
        rating: 4.5,
        location: {
          city: "Visakhapatnam",
          state: "Andhra Pradesh",
          address: "Gandhi Nagar, Rushikonda, Visakhapatnam, Andhra Pradesh 530045"
        },
        description: "Gandhi Institute of Technology and Management (GITAM) is a premier educational institution established in 1980. It has campuses in Visakhapatnam, Hyderabad, and Bengaluru, offering programs in various disciplines.",
        courses: ["Engineering", "Science", "Management", "Pharmacy", "Law", "Architecture", "Medicine"],
        entranceExams: ["GITAM Admission Test (GAT)", "JEE Main", "NEET", "CAT"],
        admissionDetails: {
          eligibility: "10+2 with minimum 60% marks in relevant subjects",
          process: "Admission through GAT or other national/state-level entrance exams",
          deadlines: "Applications typically open in January each year"
        },
        fees: {
          tuition: { min: 100000, max: 250000 },
          hostel: { min: 70000, max: 100000 }
        },
        scholarships: [
          {
            name: "GITAM Merit Scholarship",
            amount: "Up to 100% tuition fee waiver",
            eligibility: "Based on GAT/JEE Main/NEET rank"
          },
          {
            name: "GITAM Sports Scholarship",
            amount: "Up to 75% tuition fee waiver",
            eligibility: "National/International level sports achievements"
          }
        ],
        placement: {
          percentage: 96,
          avgSalary: 800000,
          topRecruiters: ["Microsoft", "Amazon", "Google", "TCS", "Infosys", "Wipro", "Deloitte", "IBM"]
        },
        imageUrl: "/placeholder.svg"
      }
    ]
  },
];

export const getCollegeById = (collegeId: string, stateId: string): College | undefined => {
  const state = states.find((state) => state.id === stateId);
  if (!state) return undefined;

  return state.colleges.find((college) => college.id === collegeId);
};
