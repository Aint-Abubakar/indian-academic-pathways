export interface StudyAbroadCollege {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  scholarships: Scholarship[];
  website: string;
  ranking: number;
  tuitionFee: string;
  acceptanceRate: string;
}

export interface Scholarship {
  name: string;
  amount: string;
  eligibility: string;
  deadline: string;
  link: string;
}

export interface Country {
  id: string;
  name: string;
  flagUrl: string;
  description: string;
}

export const countries: Country[] = [
  {
    id: "usa",
    name: "United States",
    flagUrl: "https://ibb.co/7dsvCWzw",
    description: "Home to some of the world's top universities offering diverse scholarships for international students."
  },
  {
    id: "uk",
    name: "United Kingdom",
    flagUrl: "https://ibb.co/ycRSp163",
    description: "Renowned for prestigious institutions with several scholarship schemes for international students."
  },
  {
    id: "canada",
    name: "Canada",
    flagUrl: "https://ibb.co/pBGLn2J9",
    description: "Offers quality education with affordable tuition and numerous scholarship opportunities."
  },
  {
    id: "australia",
    name: "Australia",
    flagUrl: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8",
    description: "Features world-class universities with scholarships specifically designed for international students."
  },
  {
    id: "germany",
    name: "Germany",
    flagUrl: "https://ibb.co/xKQR0VW3",
    description: "Known for tuition-free public universities and various scholarship programs for foreign students."
  },
  // New countries
  {
    id: "france",
    name: "France",
    flagUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "Offers high-quality education with relatively low tuition fees and various scholarship opportunities for international students."
  },
  {
    id: "japan",
    name: "Japan",
    flagUrl: "https://ibb.co/zT9tbxL3",
    description: "Provides excellent academic programs with numerous scholarships for international students, especially in STEM fields."
  },
  {
    id: "singapore",
    name: "Singapore",
    flagUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    description: "A hub for educational excellence in Asia with world-class universities offering generous scholarships."
  },
  {
    id: "netherlands",
    name: "Netherlands",
    flagUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
    description: "Known for innovative education approaches with many English-taught programs and scholarship options."
  },
  {
    id: "sweden",
    name: "Sweden",
    flagUrl: "https://ibb.co/Fb2bzT30",
    description: "Offers free education for EU students and numerous scholarship opportunities for international students."
  }
];

export const studyAbroadColleges: StudyAbroadCollege[] = [
  // USA Universities - Original entries
  {
    id: "harvard",
    name: "Harvard University",
    country: "USA",
    description: "One of the most prestigious universities in the world, offering exceptional education across various disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1559135197-8a45e8919df9",
    scholarships: [
      {
        name: "Fulbright Program",
        amount: "Varies (Full Tuition + Stipend)",
        eligibility: "International students with exceptional academic records",
        deadline: "February 15",
        link: "https://www.fulbright.org/"
      },
      {
        name: "Harvard University Scholarship",
        amount: "Up to $70,000 per year",
        eligibility: "Need-based financial aid for international undergraduates",
        deadline: "January 1",
        link: "https://college.harvard.edu/financial-aid"
      }
    ],
    website: "https://www.harvard.edu/",
    ranking: 1,
    tuitionFee: "$54,000 per year",
    acceptanceRate: "4.6%"
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology",
    country: "USA",
    description: "A leading research institution focused on science, engineering, and technology education.",
    imageUrl: "https://images.unsplash.com/photo-1568792923760-d70635a89fdd",
    scholarships: [
      {
        name: "MIT International Scholarship",
        amount: "Up to full tuition",
        eligibility: "Need-based financial assistance for international students",
        deadline: "December 15",
        link: "https://sfs.mit.edu/"
      },
      {
        name: "Legatum Fellowship",
        amount: "Full tuition plus $30,000 annual stipend",
        eligibility: "Graduate students focusing on entrepreneurship in developing countries",
        deadline: "January 15",
        link: "https://legatum.mit.edu/fellowship/"
      }
    ],
    website: "https://www.mit.edu/",
    ranking: 2,
    tuitionFee: "$57,590 per year",
    acceptanceRate: "6.7%"
  },
  
  // Additional USA universities
  {
    id: "stanford",
    name: "Stanford University",
    country: "USA",
    description: "A world-renowned research university known for entrepreneurship and innovation.",
    imageUrl: "https://images.unsplash.com/photo-1541625407732-51bda672df2d",
    scholarships: [
      {
        name: "Knight-Hennessy Scholars",
        amount: "Full tuition and living stipend",
        eligibility: "International students with demonstrated leadership and civic commitment",
        deadline: "October 6",
        link: "https://knight-hennessy.stanford.edu/"
      },
      {
        name: "Stanford Graduate Fellowship",
        amount: "Full tuition plus $45,000 stipend annually",
        eligibility: "Outstanding graduate students in science and engineering",
        deadline: "December 1",
        link: "https://vpge.stanford.edu/fellowships-funding/sgf"
      }
    ],
    website: "https://www.stanford.edu/",
    ranking: 3,
    tuitionFee: "$56,169 per year",
    acceptanceRate: "4.3%"
  },
  {
    id: "caltech",
    name: "California Institute of Technology",
    country: "USA",
    description: "A world-leading science and engineering institute with an emphasis on research.",
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65",
    scholarships: [
      {
        name: "Caltech Merit Award",
        amount: "$15,000 - $35,000 per year",
        eligibility: "Merit-based scholarships for outstanding international students",
        deadline: "November 15",
        link: "https://www.finaid.caltech.edu/types-of-aid/scholarships-and-grants"
      },
      {
        name: "Summer Undergraduate Research Fellowship",
        amount: "$6,000 for 10 weeks",
        eligibility: "Undergraduate students interested in research",
        deadline: "February 15",
        link: "https://www.sfp.caltech.edu/programs/surf"
      }
    ],
    website: "https://www.caltech.edu/",
    ranking: 4,
    tuitionFee: "$58,680 per year",
    acceptanceRate: "6.4%"
  },
  {
    id: "princeton",
    name: "Princeton University",
    country: "USA",
    description: "An Ivy League research university with a strong focus on undergraduate education.",
    imageUrl: "https://images.unsplash.com/photo-1575384043001-f37b7016c45a",
    scholarships: [
      {
        name: "Princeton Financial Aid",
        amount: "Full demonstrated need covered",
        eligibility: "Need-based financial aid for international students",
        deadline: "January 1",
        link: "https://admission.princeton.edu/cost-aid"
      },
      {
        name: "Davis International Fellowship",
        amount: "$30,000 per year",
        eligibility: "International students with financial need",
        deadline: "December 15",
        link: "https://admission.princeton.edu/cost-aid/types-aid"
      }
    ],
    website: "https://www.princeton.edu/",
    ranking: 5,
    tuitionFee: "$56,010 per year",
    acceptanceRate: "5.8%"
  },
  {
    id: "yale",
    name: "Yale University",
    country: "USA",
    description: "An Ivy League university known for excellence in law, medicine, and the arts.",
    imageUrl: "https://images.unsplash.com/photo-1582727052104-5e5005b1b0de",
    scholarships: [
      {
        name: "Yale Need-Based Financial Aid",
        amount: "Full need met for all admitted students",
        eligibility: "International students with demonstrated financial need",
        deadline: "January 2",
        link: "https://finaid.yale.edu/"
      },
      {
        name: "Yale World Scholars Program",
        amount: "Full cost of attendance",
        eligibility: "Exceptional students from developing countries",
        deadline: "December 1",
        link: "https://world-fellows.yale.edu/"
      }
    ],
    website: "https://www.yale.edu/",
    ranking: 6,
    tuitionFee: "$59,950 per year",
    acceptanceRate: "6.1%"
  },
  {
    id: "columbia",
    name: "Columbia University",
    country: "USA",
    description: "An Ivy League university located in New York City with strong programs in journalism and business.",
    imageUrl: "https://images.unsplash.com/photo-1569328922724-1ff1646cca35",
    scholarships: [
      {
        name: "Columbia University Scholarship",
        amount: "Varies based on need",
        eligibility: "International students with demonstrated financial need",
        deadline: "January 1",
        link: "https://www.columbia.edu/content/financial-aid"
      },
      {
        name: "Global Fellowship",
        amount: "$25,000 - $45,000 per year",
        eligibility: "Outstanding international graduate students",
        deadline: "December 15",
        link: "https://gsas.columbia.edu/student-guide/financing-your-education"
      }
    ],
    website: "https://www.columbia.edu/",
    ranking: 7,
    tuitionFee: "$63,530 per year",
    acceptanceRate: "5.5%"
  },
  {
    id: "chicago",
    name: "University of Chicago",
    country: "USA",
    description: "A private research university known for rigorous academics and influential economic theories.",
    imageUrl: "https://images.unsplash.com/photo-1584721244072-a4b2994130bb",
    scholarships: [
      {
        name: "Odyssey Scholarship",
        amount: "Full tuition plus $5,000 annual stipend",
        eligibility: "Students from lower-income backgrounds with outstanding potential",
        deadline: "January 4",
        link: "https://collegeadmissions.uchicago.edu/cost-aid/scholarships"
      },
      {
        name: "International Student Scholarship",
        amount: "$15,000 - $50,000 per year",
        eligibility: "International students with exceptional academic records",
        deadline: "January 4",
        link: "https://collegeadmissions.uchicago.edu/cost-aid/international-aid"
      }
    ],
    website: "https://www.uchicago.edu/",
    ranking: 9,
    tuitionFee: "$60,963 per year",
    acceptanceRate: "6.2%"
  },
  {
    id: "upenn",
    name: "University of Pennsylvania",
    country: "USA",
    description: "An Ivy League institution with top-ranked Wharton School of Business.",
    imageUrl: "https://images.unsplash.com/photo-1565036558162-e551c82632c9",
    scholarships: [
      {
        name: "Penn World Scholars",
        amount: "Full cost of attendance",
        eligibility: "Outstanding international students from developing countries",
        deadline: "November 1",
        link: "https://srfs.upenn.edu/financial-aid/international-students"
      },
      {
        name: "Global Leadership Scholarship",
        amount: "$20,000 - $45,000 per year",
        eligibility: "Students with demonstrated leadership potential",
        deadline: "January 5",
        link: "https://srfs.upenn.edu/financial-aid"
      }
    ],
    website: "https://www.upenn.edu/",
    ranking: 10,
    tuitionFee: "$61,710 per year",
    acceptanceRate: "7.4%"
  },
  {
    id: "cornell",
    name: "Cornell University",
    country: "USA",
    description: "An Ivy League university with strengths in engineering, hospitality, and agriculture.",
    imageUrl: "https://images.unsplash.com/photo-1558711350-0a3979474414",
    scholarships: [
      {
        name: "Cornell International Student Financial Aid",
        amount: "Based on demonstrated need",
        eligibility: "International students with financial need",
        deadline: "January 2",
        link: "https://finaid.cornell.edu/apply-for-aid/international-applicants/"
      },
      {
        name: "Tata Scholarship",
        amount: "Full demonstrated need",
        eligibility: "Students from India with financial need",
        deadline: "January 2",
        link: "https://finaid.cornell.edu/apply-for-aid/international-applicants/tata-scholarship"
      }
    ],
    website: "https://www.cornell.edu/",
    ranking: 12,
    tuitionFee: "$61,015 per year",
    acceptanceRate: "8.7%"
  },
  {
    id: "berkeley",
    name: "University of California, Berkeley",
    country: "USA",
    description: "A public research university known for science, engineering, and liberal arts programs.",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
    scholarships: [
      {
        name: "Berkeley International Office Scholarship",
        amount: "$5,000 - $15,000",
        eligibility: "International students with exceptional academic achievements",
        deadline: "January 15",
        link: "https://financialaid.berkeley.edu/how-aid-works/international-student-financial-aid/"
      },
      {
        name: "Global Leadership Scholarship",
        amount: "$8,000 per year",
        eligibility: "International students with leadership potential",
        deadline: "December 15",
        link: "https://financialaid.berkeley.edu/types-of-aid/scholarships/"
      }
    ],
    website: "https://www.berkeley.edu/",
    ranking: 13,
    tuitionFee: "$44,007 per year (international)",
    acceptanceRate: "14.5%"
  },
  
  // UK Universities - Original entries
  {
    id: "oxford",
    name: "University of Oxford",
    country: "UK",
    description: "The oldest university in the English-speaking world with a reputation for outstanding academic achievement.",
    imageUrl: "https://images.unsplash.com/photo-1580844946486-f8f56af4c83c",
    scholarships: [
      {
        name: "Rhodes Scholarship",
        amount: "Full tuition and stipend (approx. £30,000 per year)",
        eligibility: "Outstanding students with proven leadership abilities",
        deadline: "August 1",
        link: "https://www.rhodeshouse.ox.ac.uk/"
      },
      {
        name: "Clarendon Scholarship",
        amount: "Full tuition and college fees plus stipend",
        eligibility: "Academically excellent graduate students of all nationalities",
        deadline: "January deadline (varies by course)",
        link: "https://www.ox.ac.uk/clarendon/"
      }
    ],
    website: "https://www.ox.ac.uk/",
    ranking: 5,
    tuitionFee: "£26,770 - £37,510 per year",
    acceptanceRate: "17.5%"
  },
  {
    id: "cambridge",
    name: "University of Cambridge",
    country: "UK",
    description: "A collegiate research university with a global reputation for academic excellence.",
    imageUrl: "https://images.unsplash.com/photo-1597524678053-5e6ddd172191",
    scholarships: [
      {
        name: "Cambridge International Scholarship",
        amount: "Full fees and maintenance allowance",
        eligibility: "Outstanding international students undertaking PhD studies",
        deadline: "December 3",
        link: "https://www.cambridgetrust.org/scholarships/"
      },
      {
        name: "Gates Cambridge Scholarship",
        amount: "Full cost of studying at Cambridge",
        eligibility: "Outstanding applicants from outside the UK planning to pursue graduate studies",
        deadline: "October/December/January (depends on course)",
        link: "https://www.gatescambridge.org/"
      }
    ],
    website: "https://www.cam.ac.uk/",
    ranking: 6,
    tuitionFee: "£22,227 - £58,038 per year",
    acceptanceRate: "21%"
  },
  
  // Additional UK universities
  {
    id: "imperial",
    name: "Imperial College London",
    country: "UK",
    description: "A science-based institution known for engineering, medicine, and business education.",
    imageUrl: "https://images.unsplash.com/photo-1590796583326-afd3bb20d22d",
    scholarships: [
      {
        name: "President's PhD Scholarships",
        amount: "Full tuition fees plus £21,600 stipend",
        eligibility: "Academically outstanding PhD candidates",
        deadline: "January 20",
        link: "https://www.imperial.ac.uk/study/pg/fees-and-funding/scholarships/presidents-phd-scholarships/"
      },
      {
        name: "Imperial College Master's Scholarships",
        amount: "£10,000 - Full tuition",
        eligibility: "Outstanding students pursuing master's degrees",
        deadline: "March 31",
        link: "https://www.imperial.ac.uk/study/pg/fees-and-funding/scholarships/"
      }
    ],
    website: "https://www.imperial.ac.uk/",
    ranking: 8,
    tuitionFee: "£32,500 - £45,300 per year",
    acceptanceRate: "14.3%"
  },
  {
    id: "ucl",
    name: "University College London",
    country: "UK",
    description: "A multidisciplinary university known for arts, sciences, and professional studies.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    scholarships: [
      {
        name: "Global Excellence Scholarship",
        amount: "£2,500 - £15,000",
        eligibility: "International students with outstanding academic achievements",
        deadline: "May 1",
        link: "https://www.ucl.ac.uk/prospective-students/scholarships/"
      },
      {
        name: "Denys Holland Scholarship",
        amount: "£18,000 per year",
        eligibility: "Students who would not otherwise be able to afford to study at UCL",
        deadline: "June 30",
        link: "https://www.ucl.ac.uk/scholarships/denys-holland-scholarship"
      }
    ],
    website: "https://www.ucl.ac.uk/",
    ranking: 17,
    tuitionFee: "£23,300 - £34,000 per year",
    acceptanceRate: "21%"
  },
  {
    id: "lse",
    name: "London School of Economics",
    country: "UK",
    description: "A specialist university focusing on social sciences, economics, and politics.",
    imageUrl: "https://images.unsplash.com/photo-1517404215738-15263e9f9178",
    scholarships: [
      {
        name: "LSE Master's Awards",
        amount: "£5,000 - £25,000",
        eligibility: "Outstanding students from specific regions",
        deadline: "April 27",
        link: "https://www.lse.ac.uk/study-at-lse/graduate/fees-and-funding/masters-financial-support"
      },
      {
        name: "Graduate Support Scheme",
        amount: "Up to £15,000",
        eligibility: "Students with financial need",
        deadline: "April 27",
        link: "https://www.lse.ac.uk/study-at-lse/graduate/fees-and-funding/graduate-support-scheme"
      }
    ],
    website: "https://www.lse.ac.uk/",
    ranking: 27,
    tuitionFee: "£23,520 - £32,136 per year",
    acceptanceRate: "9.5%"
  },
  {
    id: "edinburgh",
    name: "University of Edinburgh",
    country: "UK",
    description: "A historic university with strengths in arts, medicine, science, and engineering.",
    imageUrl: "https://images.unsplash.com/photo-1589892892997-043c86e115d4",
    scholarships: [
      {
        name: "Edinburgh Global Research Scholarships",
        amount: "PhD tuition fee difference between UK and international rate",
        eligibility: "International PhD candidates",
        deadline: "February 1",
        link: "https://www.ed.ac.uk/student-funding/postgraduate/international/global/research"
      },
      {
        name: "Principal's Career Development PhD Scholarships",
        amount: "Full tuition and stipend",
        eligibility: "Outstanding PhD candidates in any discipline",
        deadline: "January 25",
        link: "https://www.ed.ac.uk/student-funding/postgraduate/uk-eu/university-scholarships/development"
      }
    ],
    website: "https://www.ed.ac.uk/",
    ranking: 30,
    tuitionFee: "£24,500 - £32,100 per year",
    acceptanceRate: "40%"
  },
  {
    id: "manchester",
    name: "University of Manchester",
    country: "UK",
    description: "A research-intensive university with strengths in life sciences and engineering.",
    imageUrl: "https://images.unsplash.com/photo-1580834341580-8c17a3a6b19b",
    scholarships: [
      {
        name: "Manchester Presidential Scholarship",
        amount: "£3,000 - £10,000",
        eligibility: "International students with excellent academic records",
        deadline: "June 1",
        link: "https://www.manchester.ac.uk/study/international/finance-and-scholarships/funding/"
      },
      {
        name: "Manchester Global Futures Scholarship",
        amount: "£5,000 - £10,000",
        eligibility: "Outstanding students from developing countries",
        deadline: "May 31",
        link: "https://www.manchester.ac.uk/study/masters/fees-and-funding/masters-student-funding/international-students/"
      }
    ],
    website: "https://www.manchester.ac.uk/",
    ranking: 35,
    tuitionFee: "£20,000 - £28,500 per year",
    acceptanceRate: "59%"
  },
  {
    id: "kings",
    name: "King's College London",
    country: "UK",
    description: "A research-led university with strengths in humanities, law, and health sciences.",
    imageUrl: "https://images.unsplash.com/photo-1591284367486-50c907e9ce5f",
    scholarships: [
      {
        name: "King's International Scholarship",
        amount: "£25,000",
        eligibility: "International students with outstanding academic achievements",
        deadline: "March 31",
        link: "https://www.kcl.ac.uk/study/postgraduate/fees-and-funding/student-funding/postgraduate-scholarships"
      },
      {
        name: "Global Research Scholarship",
        amount: "£10,000 per year",
        eligibility: "International PhD students",
        deadline: "March 15",
        link: "https://www.kcl.ac.uk/study/postgraduate/fees-and-funding/student-funding"
      }
    ],
    website: "https://www.kcl.ac.uk/",
    ranking: 37,
    tuitionFee: "£21,300 - £34,500 per year",
    acceptanceRate: "36%"
  },
  {
    id: "bristol",
    name: "University of Bristol",
    country: "UK",
    description: "A research-intensive university known for engineering, humanities, and sciences.",
    imageUrl: "https://images.unsplash.com/photo-1569194856732-22d56b8ed9ff",
    scholarships: [
      {
        name: "Think Big Scholarships",
        amount: "£5,000 - £20,000",
        eligibility: "International undergraduate and postgraduate students",
        deadline: "March 28",
        link: "https://www.bristol.ac.uk/students/support/finances/scholarships/think-big-undergraduate/"
      },
      {
        name: "Bristol Merit Scholarships",
        amount: "£5,000 - £10,000",
        eligibility: "High-achieving international students",
        deadline: "June 30",
        link: "https://www.bristol.ac.uk/students/support/finances/scholarships/"
      }
    ],
    website: "https://www.bristol.ac.uk/",
    ranking: 62,
    tuitionFee: "£20,100 - £25,700 per year",
    acceptanceRate: "67%"
  },
  {
    id: "warwick",
    name: "University of Warwick",
    country: "UK",
    description: "A research-led university with strengths in business, economics, and mathematics.",
    imageUrl: "https://images.unsplash.com/photo-1591036640031-2a7ac9b1e1ac",
    scholarships: [
      {
        name: "Warwick International Scholarships",
        amount: "£5,000 - £15,000",
        eligibility: "Outstanding international students",
        deadline: "May 14",
        link: "https://warwick.ac.uk/study/international/admissions/finance/"
      },
      {
        name: "Warwick Chancellor's International Scholarships",
        amount: "Full tuition fees plus maintenance stipend",
        eligibility: "International PhD applicants with excellent academic qualifications",
        deadline: "January 15",
        link: "https://warwick.ac.uk/services/dc/schols_fund/scholarships_and_funding/chancellors_int/"
      }
    ],
    website: "https://warwick.ac.uk/",
    ranking: 64,
    tuitionFee: "£21,200 - £27,060 per year",
    acceptanceRate: "23%"
  },
  {
    id: "durham",
    name: "Durham University",
    country: "UK",
    description: "A historic university known for arts, humanities, and social sciences.",
    imageUrl: "https://images.unsplash.com/photo-1525971977907-18a40a12aad1",
    scholarships: [
      {
        name: "Durham Global Scholarship",
        amount: "£2,000 - £5,000",
        eligibility: "International students with excellent academic potential",
        deadline: "January 31",
        link: "https://www.dur.ac.uk/international/finance/scholarships/"
      },
      {
        name: "Vice Chancellor's Scholarships",
        amount: "£5,000 - £15,000",
        eligibility: "Outstanding international postgraduate taught students",
        deadline: "February 28",
        link: "https://www.dur.ac.uk/study/pg/finance/funding/bursaries/"
      }
    ],
    website: "https://www.dur.ac.uk/",
    ranking: 82,
    tuitionFee: "£20,500 - £26,000 per year",
    acceptanceRate: "41%"
  },
  
  // Canada Universities - Original entries
  {
    id: "toronto",
    name: "University of Toronto",
    country: "Canada",
    description: "Canada's leading institution of learning, discovery and knowledge creation.",
    imageUrl: "https://images.unsplash.com/photo-1569534065431-471ae66413ec",
    scholarships: [
      {
        name: "Lester B. Pearson International Scholarship",
        amount: "Full tuition, books, incidental fees, and residence support",
        eligibility: "International students demonstrating academic excellence and leadership",
        deadline: "November 30",
        link: "https://future.utoronto.ca/pearson/"
      },
      {
        name: "University of Toronto Fellowship",
        amount: "CAD $10,000 - $25,000",
        eligibility: "Graduate students with outstanding academic achievement",
        deadline: "Varies by program",
        link: "https://www.sgs.utoronto.ca/awards/"
      }
    ],
    website: "https://www.utoronto.ca/",
    ranking: 18,
    tuitionFee: "CAD $57,020 - $65,280 per year",
    acceptanceRate: "43%"
  },
  {
    id: "mcgill",
    name: "McGill University",
    country: "Canada",
    description: "One of Canada's best-known institutions of higher learning and one of the leading universities in the world.",
    imageUrl: "https://images.unsplash.com/photo-1610178318432-c906fda7b7f9",
    scholarships: [
      {
        name: "McCall MacBain Scholarships",
        amount: "Full tuition and living stipend (approx. CAD $80,000)",
        eligibility: "Outstanding students for master's or professional degrees",
        deadline: "September
