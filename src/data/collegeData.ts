import { State, College, FilterOptions } from "./types";

export const states: State[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    collegeCount: 35,
    topColleges: ["Indian Institute of Technology Bombay", "University of Mumbai", "Savitribai Phule Pune University"],
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
  },
  {
    id: "delhi",
    name: "Delhi",
    collegeCount: 28,
    topColleges: ["Indian Institute of Technology Delhi", "Delhi University", "Jawaharlal Nehru University"],
    imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=300&fit=crop"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    collegeCount: 42,
    topColleges: ["Indian Institute of Science", "Indian Institute of Management Bangalore", "National Institute of Technology Karnataka"],
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    collegeCount: 30,
    topColleges: ["Indian Institute of Technology Madras", "Anna University", "Madras Medical College"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    collegeCount: 25,
    topColleges: ["Indian Institute of Technology Kharagpur", "Jadavpur University", "University of Calcutta"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  }
];

export const colleges: College[] = [
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    description: "Premier engineering institute offering undergraduate and postgraduate programs",
    type: "Government",
    location: "Mumbai, Maharashtra",
    rating: 4.7,
    courses: ["B.Tech", "M.Tech", "Ph.D"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 50000, max: 70000 },
      other: { min: 20000, max: 30000 }
    },
    placement: {
      percentage: 95,
      averagePackage: 1500000,
      highestPackage: 4000000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Facebook"]
    },
    admission: {
      examAccepted: ["JEE Advanced"],
      cutoff: "JEE Advanced Rank < 2000",
      applicationDeadline: "May 31"
    },
    facilities: ["Labs", "Library", "Sports Complex", "Hostels", "Medical Center"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  },
  {
    id: "university-mumbai",
    name: "University of Mumbai",
    description: "One of the oldest and premier universities offering diverse programs",
    type: "Government",
    location: "Mumbai, Maharashtra",
    rating: 4.0,
    courses: ["B.A", "B.Sc", "B.Com", "M.A", "M.Sc", "M.Com"],
    fees: {
      tuition: { min: 10000, max: 30000 },
      hostel: { min: 15000, max: 25000 },
      other: { min: 5000, max: 10000 }
    },
    placement: {
      percentage: 70,
      averagePackage: 400000,
      highestPackage: 1500000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture"]
    },
    admission: {
      examAccepted: ["Merit Based"],
      cutoff: "Merit Based",
      applicationDeadline: "June 15"
    },
    facilities: ["Library", "Sports", "Hostels", "Auditorium", "Cafeteria"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  },
  {
    id: "savitribai-pune",
    name: "Savitribai Phule Pune University",
    description: "Leading university offering a wide range of undergraduate and postgraduate courses",
    type: "Government",
    location: "Pune, Maharashtra",
    rating: 4.1,
    courses: ["B.A", "B.Sc", "B.Com", "M.A", "M.Sc", "M.Com", "Ph.D"],
    fees: {
      tuition: { min: 15000, max: 35000 },
      hostel: { min: 20000, max: 30000 },
      other: { min: 7000, max: 12000 }
    },
    placement: {
      percentage: 75,
      averagePackage: 450000,
      highestPackage: 1800000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Capgemini"]
    },
    admission: {
      examAccepted: ["Merit Based"],
      cutoff: "Merit Based",
      applicationDeadline: "June 20"
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Research Centers", "Cafeteria"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  },

  // Karnataka Colleges
  {
    id: "iisc-bangalore",
    name: "Indian Institute of Science (IISc)",
    description: "Premier research institute and university for higher education in science and engineering",
    type: "Government",
    location: "Bangalore, Karnataka",
    rating: 4.8,
    courses: ["B.S. Research", "M.Tech", "M.S. Research", "Ph.D"],
    fees: {
      tuition: { min: 25000, max: 50000 },
      hostel: { min: 15000, max: 25000 },
      other: { min: 10000, max: 20000 }
    },
    placement: {
      percentage: 95,
      averagePackage: 1800000,
      highestPackage: 5000000,
      topRecruiters: ["Google", "Microsoft", "Amazon", "Intel"]
    },
    admission: {
      examAccepted: ["KVPY", "JEE Advanced", "GATE"],
      cutoff: "Top 1%",
      applicationDeadline: "April 30"
    },
    facilities: ["Research Labs", "Library", "Sports Complex", "Hostels", "Medical Center"],
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
  },
  {
    id: "iim-bangalore",
    name: "Indian Institute of Management Bangalore",
    description: "Premier business school offering world-class management education",
    type: "Government",
    location: "Bangalore, Karnataka",
    rating: 4.7,
    courses: ["MBA", "PGPM", "Executive MBA", "Ph.D"],
    fees: {
      tuition: { min: 2400000, max: 2600000 },
      hostel: { min: 180000, max: 220000 },
      other: { min: 100000, max: 150000 }
    },
    placement: {
      percentage: 100,
      averagePackage: 3100000,
      highestPackage: 7000000,
      topRecruiters: ["McKinsey", "BCG", "Bain", "Goldman Sachs"]
    },
    admission: {
      examAccepted: ["CAT", "GMAT"],
      cutoff: "99+ percentile",
      applicationDeadline: "January 15"
    },
    facilities: ["Case Study Rooms", "Library", "Sports Center", "Hostels", "Executive Lounge"],
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
  },
  {
    id: "nit-karnataka",
    name: "National Institute of Technology Karnataka",
    description: "Premier technical institute offering undergraduate and postgraduate programs",
    type: "Government",
    location: "Surathkal, Karnataka",
    rating: 4.5,
    courses: ["B.Tech", "M.Tech", "MBA", "Ph.D"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 30000, max: 50000 }
    },
    placement: {
      percentage: 92,
      averagePackage: 1400000,
      highestPackage: 4500000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Flipkart"]
    },
    admission: {
      examAccepted: ["JEE Main", "GATE"],
      cutoff: "JEE Main Rank < 5000",
      applicationDeadline: "June 30"
    },
    facilities: ["Labs", "Library", "Sports Complex", "Hostels", "Innovation Hub"],
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
  },
  {
    id: "iiit-bangalore",
    name: "International Institute of Information Technology Bangalore",
    description: "Research-focused institute specializing in IT and related areas",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.4,
    courses: ["B.Tech", "M.Tech", "Ph.D", "Integrated M.Tech"],
    fees: {
      tuition: { min: 320000, max: 380000 },
      hostel: { min: 120000, max: 150000 },
      other: { min: 40000, max: 60000 }
    },
    placement: {
      percentage: 95,
      averagePackage: 1600000,
      highestPackage: 5200000,
      topRecruiters: ["Google", "Microsoft", "Samsung", "Intel"]
    },
    admission: {
      examAccepted: ["JEE Main", "COMEDK"],
      cutoff: "JEE Main Rank < 8000",
      applicationDeadline: "May 31"
    },
    facilities: ["Research Labs", "Library", "Innovation Center", "Hostels", "Cafeteria"],
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
  },
  {
    id: "manipal-university",
    name: "Manipal Academy of Higher Education",
    description: "Deemed university offering diverse programs in engineering, medicine, and management",
    type: "Private",
    location: "Manipal, Karnataka",
    rating: 4.3,
    courses: ["B.Tech", "MBBS", "BDS", "MBA", "B.Arch"],
    fees: {
      tuition: { min: 280000, max: 450000 },
      hostel: { min: 100000, max: 140000 },
      other: { min: 50000, max: 80000 }
    },
    placement: {
      percentage: 88,
      averagePackage: 750000,
      highestPackage: 4200000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Accenture"]
    },
    admission: {
      examAccepted: ["MET", "JEE Main", "NEET"],
      cutoff: "MET Rank < 5000",
      applicationDeadline: "April 30"
    },
    facilities: ["Hospital", "Labs", "Library", "Sports Complex", "Hostels"],
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  },
  {
    id: "rv-college",
    name: "R.V. College of Engineering",
    description: "Autonomous engineering college affiliated to Visvesvaraya Technological University",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.2,
    courses: ["B.E", "M.Tech", "MBA", "MCA"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 80000, max: 100000 },
      other: { min: 30000, max: 50000 }
    },
    placement: {
      percentage: 90,
      averagePackage: 650000,
      highestPackage: 2800000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Cognizant"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 2000",
      applicationDeadline: "June 15"
    },
    facilities: ["Labs", "Library", "Sports", "Auditorium", "Canteen"],
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
  },
  {
    id: "pes-university",
    name: "PES University",
    description: "Private university known for engineering and technology programs",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.1,
    courses: ["B.Tech", "M.Tech", "MBA", "BBA", "MCA"],
    fees: {
      tuition: { min: 250000, max: 350000 },
      hostel: { min: 120000, max: 160000 },
      other: { min: 40000, max: 70000 }
    },
    placement: {
      percentage: 85,
      averagePackage: 800000,
      highestPackage: 4000000,
      topRecruiters: ["Amazon", "Microsoft", "Flipkart", "Oracle"]
    },
    admission: {
      examAccepted: ["PESSAT", "JEE Main"],
      cutoff: "PESSAT Rank < 3000",
      applicationDeadline: "May 31"
    },
    facilities: ["Innovation Labs", "Library", "Sports Complex", "Hostels", "Incubation Center"],
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
  },
  {
    id: "bmsce-bangalore",
    name: "B.M.S. College of Engineering",
    description: "Autonomous engineering college with strong industry connections",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.0,
    courses: ["B.E", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 160000, max: 200000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 25000, max: 40000 }
    },
    placement: {
      percentage: 88,
      averagePackage: 550000,
      highestPackage: 2500000,
      topRecruiters: ["TCS", "Infosys", "Accenture", "IBM"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 3000",
      applicationDeadline: "June 20"
    },
    facilities: ["Labs", "Library", "Placement Cell", "Sports", "Cafeteria"],
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
  },
  {
    id: "msrit-bangalore",
    name: "M.S. Ramaiah Institute of Technology",
    description: "Premier engineering institute with excellent infrastructure and faculty",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.1,
    courses: ["B.E", "M.Tech", "MBA", "MCA"],
    fees: {
      tuition: { min: 200000, max: 250000 },
      hostel: { min: 80000, max: 110000 },
      other: { min: 30000, max: 50000 }
    },
    placement: {
      percentage: 87,
      averagePackage: 700000,
      highestPackage: 3200000,
      topRecruiters: ["Microsoft", "Amazon", "SAP", "Bosch"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 2500",
      applicationDeadline: "June 15"
    },
    facilities: ["Research Labs", "Library", "Sports Complex", "Hostels", "Medical Center"],
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
  },
  {
    id: "dayananda-sagar",
    name: "Dayananda Sagar College of Engineering",
    description: "Autonomous engineering college with modern facilities and industry partnerships",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 3.9,
    courses: ["B.E", "M.Tech", "MBA", "MCA"],
    fees: {
      tuition: { min: 150000, max: 190000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 25000, max: 40000 }
    },
    placement: {
      percentage: 82,
      averagePackage: 480000,
      highestPackage: 2200000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "Capgemini"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 4000",
      applicationDeadline: "June 25"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Innovation Center"],
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  },
  {
    id: "sjce-mysore",
    name: "Sri Jayachamarajendra College of Engineering",
    description: "Government engineering college affiliated to Visvesvaraya Technological University",
    type: "Government",
    location: "Mysore, Karnataka",
    rating: 4.0,
    courses: ["B.E", "M.Tech", "Ph.D"],
    fees: {
      tuition: { min: 80000, max: 120000 },
      hostel: { min: 50000, max: 70000 },
      other: { min: 20000, max: 35000 }
    },
    placement: {
      percentage: 85,
      averagePackage: 520000,
      highestPackage: 2000000,
      topRecruiters: ["Infosys", "TCS", "L&T", "KPTCL"]
    },
    admission: {
      examAccepted: ["KCET"],
      cutoff: "KCET Rank < 5000",
      applicationDeadline: "June 30"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Workshop"],
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
  },
  {
    id: "uvce-bangalore",
    name: "University Visvesvaraya College of Engineering",
    description: "Constituent college of Bangalore University with rich heritage",
    type: "Government",
    location: "Bangalore, Karnataka",
    rating: 3.8,
    courses: ["B.E", "M.Tech", "Ph.D"],
    fees: {
      tuition: { min: 60000, max: 90000 },
      hostel: { min: 40000, max: 60000 },
      other: { min: 15000, max: 25000 }
    },
    placement: {
      percentage: 78,
      averagePackage: 450000,
      highestPackage: 1800000,
      topRecruiters: ["TCS", "Infosys", "IBM", "Cognizant"]
    },
    admission: {
      examAccepted: ["KCET"],
      cutoff: "KCET Rank < 6000",
      applicationDeadline: "July 5"
    },
    facilities: ["Labs", "Library", "Alumni Network", "Sports", "Canteen"],
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
  },
  {
    id: "nie-mysore",
    name: "The National Institute of Engineering",
    description: "Autonomous engineering institution with focus on research and innovation",
    type: "Private",
    location: "Mysore, Karnataka",
    rating: 3.9,
    courses: ["B.E", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 140000, max: 180000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 25000, max: 40000 }
    },
    placement: {
      percentage: 80,
      averagePackage: 400000,
      highestPackage: 1600000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Bosch"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 8000",
      applicationDeadline: "June 30"
    },
    facilities: ["Labs", "Library", "Sports Complex", "Hostels", "Training Center"],
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
  },
  {
    id: "christ-university",
    name: "Christ University",
    description: "Deemed university offering diverse programs with focus on holistic education",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.2,
    courses: ["B.Tech", "BBA", "MBA", "B.Com", "M.Com"],
    fees: {
      tuition: { min: 200000, max: 350000 },
      hostel: { min: 100000, max: 140000 },
      other: { min: 40000, max: 60000 }
    },
    placement: {
      percentage: 88,
      averagePackage: 650000,
      highestPackage: 2800000,
      topRecruiters: ["Deloitte", "EY", "KPMG", "Amazon"]
    },
    admission: {
      examAccepted: ["CUET", "Christ University Entrance Test"],
      cutoff: "Merit Based",
      applicationDeadline: "May 15"
    },
    facilities: ["Library", "Sports Complex", "Hostels", "Chapel", "Research Centers"],
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
  },
  {
    id: "jss-mysore",
    name: "JSS Science and Technology University",
    description: "Deemed university with strong focus on science, technology and research",
    type: "Private",
    location: "Mysore, Karnataka",
    rating: 4.0,
    courses: ["B.Tech", "MBBS", "BDS", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 180000, max: 400000 },
      hostel: { min: 80000, max: 120000 },
      other: { min: 30000, max: 50000 }
    },
    placement: {
      percentage: 83,
      averagePackage: 580000,
      highestPackage: 2400000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T"]
    },
    admission: {
      examAccepted: ["JEE Main", "NEET", "KCET"],
      cutoff: "JEE Main Rank < 50000",
      applicationDeadline: "June 15"
    },
    facilities: ["Hospital", "Labs", "Library", "Sports", "Hostels"],
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  },
  {
    id: "bit-bangalore",
    name: "Bangalore Institute of Technology",
    description: "Autonomous engineering college with excellent academic record",
    type: "Government",
    location: "Bangalore, Karnataka",
    rating: 3.9,
    courses: ["B.E", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 70000, max: 100000 },
      hostel: { min: 45000, max: 65000 },
      other: { min: 20000, max: 30000 }
    },
    placement: {
      percentage: 82,
      averagePackage: 500000,
      highestPackage: 1900000,
      topRecruiters: ["Infosys", "TCS", "Accenture", "IBM"]
    },
    admission: {
      examAccepted: ["KCET"],
      cutoff: "KCET Rank < 4500",
      applicationDeadline: "July 1"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Placement Cell"],
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
  },
  {
    id: "cmr-university",
    name: "CMR University",
    description: "Private university offering programs in engineering, management and sciences",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 3.8,
    courses: ["B.Tech", "MBA", "BBA", "M.Tech", "Ph.D"],
    fees: {
      tuition: { min: 180000, max: 280000 },
      hostel: { min: 90000, max: 120000 },
      other: { min: 35000, max: 55000 }
    },
    placement: {
      percentage: 78,
      averagePackage: 450000,
      highestPackage: 1800000,
      topRecruiters: ["TCS", "Wipro", "Capgemini", "Tech Mahindra"]
    },
    admission: {
      examAccepted: ["JEE Main", "COMEDK", "CMAT"],
      cutoff: "Merit Based",
      applicationDeadline: "June 30"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Innovation Hub"],
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
  },
  {
    id: "rvce-bangalore",
    name: "R.V. College of Engineering",
    description: "Premier autonomous engineering college with excellent placement record",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.2,
    courses: ["B.E", "M.Tech", "MBA", "MCA"],
    fees: {
      tuition: { min: 180000, max: 220000 },
      hostel: { min: 80000, max: 100000 },
      other: { min: 30000, max: 50000 }
    },
    placement: {
      percentage: 90,
      averagePackage: 650000,
      highestPackage: 2800000,
      topRecruiters: ["Microsoft", "Amazon", "Google", "Intel"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 2000",
      applicationDeadline: "June 15"
    },
    facilities: ["Research Labs", "Library", "Sports Complex", "Hostels", "Innovation Center"],
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
  },
  {
    id: "kletech-hubli",
    name: "KLE Technological University",
    description: "Deemed university with focus on technology and engineering education",
    type: "Private",
    location: "Hubli, Karnataka",
    rating: 3.8,
    courses: ["B.Tech", "M.Tech", "MBA", "MCA", "Ph.D"],
    fees: {
      tuition: { min: 160000, max: 220000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 25000, max: 40000 }
    },
    placement: {
      percentage: 80,
      averagePackage: 420000,
      highestPackage: 1600000,
      topRecruiters: ["TCS", "Infosys", "Wipro", "L&T"]
    },
    admission: {
      examAccepted: ["JEE Main", "KCET", "COMEDK"],
      cutoff: "JEE Main Rank < 60000",
      applicationDeadline: "June 30"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Research Centers"],
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
  },
  {
    id: "sdmit-ujire",
    name: "SDM Institute of Technology",
    description: "Engineering college with strong industry connections and placement support",
    type: "Private",
    location: "Ujire, Karnataka",
    rating: 3.7,
    courses: ["B.E", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 140000, max: 180000 },
      hostel: { min: 60000, max: 80000 },
      other: { min: 20000, max: 35000 }
    },
    placement: {
      percentage: 75,
      averagePackage: 380000,
      highestPackage: 1400000,
      topRecruiters: ["Infosys", "TCS", "Wipro", "Bosch"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 10000",
      applicationDeadline: "July 5"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Training Center"],
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  },
  {
    id: "canara-mangalore",
    name: "Canara Engineering College",
    description: "Engineering college with emphasis on practical learning and skill development",
    type: "Private",
    location: "Mangalore, Karnataka",
    rating: 3.6,
    courses: ["B.E", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 130000, max: 170000 },
      hostel: { min: 55000, max: 75000 },
      other: { min: 20000, max: 30000 }
    },
    placement: {
      percentage: 72,
      averagePackage: 350000,
      highestPackage: 1200000,
      topRecruiters: ["TCS", "Infosys", "Cognizant", "Mindtree"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 12000",
      applicationDeadline: "July 10"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Workshop"],
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
  },
  {
    id: "nmit-bangalore",
    name: "Nitte Meenakshi Institute of Technology",
    description: "Engineering college affiliated to Visvesvaraya Technological University",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 3.8,
    courses: ["B.E", "M.Tech", "MBA", "MCA"],
    fees: {
      tuition: { min: 160000, max: 200000 },
      hostel: { min: 75000, max: 95000 },
      other: { min: 25000, max: 40000 }
    },
    placement: {
      percentage: 78,
      averagePackage: 480000,
      highestPackage: 1800000,
      topRecruiters: ["Accenture", "TCS", "Wipro", "IBM"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 8000",
      applicationDeadline: "June 25"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Innovation Lab"],
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
  },
  {
    id: "ait-bangalore",
    name: "Acharya Institute of Technology",
    description: "Engineering college with modern infrastructure and industry partnerships",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 3.5,
    courses: ["B.E", "M.Tech", "MBA", "MCA"],
    fees: {
      tuition: { min: 120000, max: 160000 },
      hostel: { min: 70000, max: 90000 },
      other: { min: 25000, max: 35000 }
    },
    placement: {
      percentage: 70,
      averagePackage: 320000,
      highestPackage: 1000000,
      topRecruiters: ["TCS", "Infosys", "Capgemini", "Cognizant"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 15000",
      applicationDeadline: "July 15"
    },
    facilities: ["Labs", "Library", "Sports", "Hostels", "Cafeteria"],
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
  },
  {
    id: "rnsit-bangalore",
    name: "R.N.S. Institute of Technology",
    description: "Engineering college with focus on academic excellence and industry readiness",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 3.7,
    courses: ["B.E", "M.Tech", "MBA"],
    fees: {
      tuition: { min: 150000, max: 190000 },
      hostel: { min: 65000, max: 85000 },
      other: { min: 22000, max: 38000 }
    },
    placement: {
      percentage: 76,
      averagePackage: 420000,
      highestPackage: 1500000,
      topRecruiters: ["Infosys", "TCS", "Accenture", "Wipro"]
    },
    admission: {
      examAccepted: ["KCET", "COMEDK"],
      cutoff: "KCET Rank < 9000",
      applicationDeadline: "June 30"
    },
    facilities: ["Labs", "Library", "Sports Complex", "Hostels", "Placement Cell"],
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
  },
  {
    id: "vtu-belgaum",
    name: "Visvesvaraya Technological University",
    description: "State technological university offering various engineering and technology programs",
    type: "Government",
    location: "Belgaum, Karnataka",
    rating: 3.9,
    courses: ["B.E", "M.Tech", "MBA", "Ph.D"],
    fees: {
      tuition: { min: 80000, max: 120000 },
      hostel: { min: 50000, max: 70000 },
      other: { min: 20000, max: 35000 }
    },
    placement: {
      percentage: 80,
      averagePackage: 450000,
      highestPackage: 1600000,
      topRecruiters: ["TCS", "Infosys", "L&T", "KPTCL"]
    },
    admission: {
      examAccepted: ["KCET", "GATE"],
      cutoff: "KCET Rank < 8000",
      applicationDeadline: "July 1"
    },
    facilities: ["Research Centers", "Library", "Sports", "Hostels", "Innovation Hub"],
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
  },
  {
    id: "gitam-bangalore",
    name: "GITAM University Bangalore",
    description: "Deemed university offering diverse programs with modern facilities",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 3.8,
    courses: ["B.Tech", "MBA", "BBA", "M.Tech", "Ph.D"],
    fees: {
      tuition: { min: 200000, max: 300000 },
      hostel: { min: 100000, max: 130000 },
      other: { min: 40000, max: 60000 }
    },
    placement: {
      percentage: 79,
      averagePackage: 520000,
      highestPackage: 2000000,
      topRecruiters: ["Amazon", "Microsoft", "TCS", "Deloitte"]
    },
    admission: {
      examAccepted: ["GAT", "JEE Main", "CMAT"],
      cutoff: "Merit Based",
      applicationDeadline: "May 31"
    },
    facilities: ["Labs", "Library", "Sports Complex", "Hostels", "Research Centers"],
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
  },
  {
    id: "jain-university",
    name: "Jain University",
    description: "Deemed university offering comprehensive programs across multiple disciplines",
    type: "Private",
    location: "Bangalore, Karnataka",
    rating: 4.0,
    courses: ["B.Tech", "MBA", "BBA", "M.Tech", "Ph.D"],
    fees: {
      tuition: { min: 180000, max: 280000 },
      hostel: { min: 90000, max: 120000 },
      other: { min: 35000, max: 55000 }
    },
    placement: {
      percentage: 82,
      averagePackage: 580000,
      highestPackage: 2200000,
      topRecruiters: ["Microsoft", "Amazon", "Flipkart", "Accenture"]
    },
    admission: {
      examAccepted: ["JET", "JEE Main", "CAT"],
      cutoff: "Merit Based",
      applicationDeadline: "June 15"
    },
    facilities: ["Innovation Labs", "Library", "Sports Complex", "Hostels", "Incubation Center"],
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
  }
];

export function getCollegesByState(stateId: string): College[] {
  return colleges.filter(college => college.location.toLowerCase().includes(stateId.toLowerCase()));
}
