
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
    flagUrl: "https://images.unsplash.com/photo-1508323297387-18aea0c35cc4",
    description: "Home to some of the world's top universities offering diverse scholarships for international students."
  },
  {
    id: "uk",
    name: "United Kingdom",
    flagUrl: "https://images.unsplash.com/photo-1526659666037-6558fb67f2c7",
    description: "Renowned for prestigious institutions with several scholarship schemes for international students."
  },
  {
    id: "canada",
    name: "Canada",
    flagUrl: "https://images.unsplash.com/photo-1551668231-6a0f9ccc2daf",
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
    flagUrl: "https://images.unsplash.com/photo-1527866512907-a35e06e7e533",
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
    flagUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
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
    flagUrl: "https://images.unsplash.com/photo-1610555356840-9c0aba1a46bc",
    description: "Offers free education for EU students and numerous scholarship opportunities for international students."
  }
];

export const studyAbroadColleges: StudyAbroadCollege[] = [
  // USA Universities
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
  
  // UK Universities
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
  
  // Canada Universities
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
        deadline: "September 22",
        link: "https://mccallmacbainscholars.org/"
      },
      {
        name: "Major Entrance Scholarships",
        amount: "CAD $3,000 - $10,000",
        eligibility: "Incoming undergraduate students with top academic standing",
        deadline: "March 7",
        link: "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergrads/entrance-scholarships"
      }
    ],
    website: "https://www.mcgill.ca/",
    ranking: 31,
    tuitionFee: "CAD $29,200 - $58,120 per year",
    acceptanceRate: "46.3%"
  },
  
  // Australia Universities
  {
    id: "melbourne",
    name: "University of Melbourne",
    country: "Australia",
    description: "Australia's leading university and an integral part of the city of Melbourne's character.",
    imageUrl: "https://images.unsplash.com/photo-1602941800793-78c77492baa7",
    scholarships: [
      {
        name: "Melbourne International Undergraduate Scholarship",
        amount: "50% to 100% fee remission",
        eligibility: "High-achieving international undergraduate students",
        deadline: "December 15",
        link: "https://scholarships.unimelb.edu.au/awards/melbourne-international-undergraduate-scholarship"
      },
      {
        name: "Australia Awards Scholarship",
        amount: "Full tuition, return airfare, establishment allowance, and health insurance",
        eligibility: "International students from developing countries",
        deadline: "April 30",
        link: "https://www.dfat.gov.au/people-to-people/australia-awards/Pages/australia-awards-scholarships"
      }
    ],
    website: "https://www.unimelb.edu.au/",
    ranking: 33,
    tuitionFee: "AUD $42,000 - $48,000 per year",
    acceptanceRate: "70%"
  },
  {
    id: "sydney",
    name: "University of Sydney",
    country: "Australia",
    description: "Australia's first university with a legacy of innovation and progressive thinking.",
    imageUrl: "https://images.unsplash.com/photo-1600359797052-07991cdc417d",
    scholarships: [
      {
        name: "Sydney Scholars Award",
        amount: "AUD $6,000 - $50,000",
        eligibility: "High-achieving domestic and international students",
        deadline: "September 30",
        link: "https://www.sydney.edu.au/scholarships/e/sydney-scholars-awards.html"
      },
      {
        name: "Vice-Chancellor's International Scholarship",
        amount: "AUD $40,000",
        eligibility: "Outstanding international students commencing undergraduate or postgraduate studies",
        deadline: "January 11",
        link: "https://www.sydney.edu.au/scholarships/"
      }
    ],
    website: "https://www.sydney.edu.au/",
    ranking: 40,
    tuitionFee: "AUD $45,000 - $52,000 per year",
    acceptanceRate: "30%"
  },
  
  // Germany Universities
  {
    id: "munich",
    name: "Technical University of Munich",
    country: "Germany",
    description: "One of Europe's top universities with a focus on engineering and natural sciences.",
    imageUrl: "https://images.unsplash.com/photo-1599941973480-33ce6bbca25d",
    scholarships: [
      {
        name: "DAAD Scholarships",
        amount: "€850 monthly plus travel and health insurance",
        eligibility: "International students pursuing master's or PhD degrees",
        deadline: "October 15 / April 15",
        link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
      },
      {
        name: "Deutschlandstipendium",
        amount: "€300 monthly",
        eligibility: "Talented and high-achieving students of all nationalities",
        deadline: "June 30",
        link: "https://www.tum.de/en/studies/fees-and-financial-aid/scholarships/deutschlandstipendium"
      }
    ],
    website: "https://www.tum.de/en/",
    ranking: 50,
    tuitionFee: "No tuition fees (semester fee of €129)",
    acceptanceRate: "20%"
  },
  {
    id: "heidelberg",
    name: "Heidelberg University",
    country: "Germany",
    description: "Germany's oldest university and a globally recognized institution for research and education.",
    imageUrl: "https://images.unsplash.com/photo-1626866608829-47ebde548adf",
    scholarships: [
      {
        name: "Erasmus+ Programme",
        amount: "€850 - €1,000 monthly",
        eligibility: "EU students studying in another EU country",
        deadline: "March 1",
        link: "https://ec.europa.eu/programmes/erasmus-plus/"
      },
      {
        name: "PROMOS Scholarship",
        amount: "€300 - €500 monthly plus travel allowance",
        eligibility: "German students going abroad and international exchange students",
        deadline: "Varies by university",
        link: "https://www.uni-heidelberg.de/en/study/financing-your-studies/scholarships-and-grants"
      }
    ],
    website: "https://www.uni-heidelberg.de/en",
    ranking: 64,
    tuitionFee: "No tuition fees (semester fee of €171.80)",
    acceptanceRate: "13%"
  },
  
  // France Universities
  {
    id: "sorbonne",
    name: "Sorbonne University",
    country: "France",
    description: "One of France's most prestigious universities with a rich history and excellent research facilities.",
    imageUrl: "https://images.unsplash.com/photo-1541089404510-5c9a779570e2",
    scholarships: [
      {
        name: "Eiffel Excellence Scholarship",
        amount: "€1,200 monthly + benefits",
        eligibility: "Outstanding international students pursuing Master's or PhD",
        deadline: "January 10",
        link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
      },
      {
        name: "Sorbonne University Foundation Scholarship",
        amount: "€10,000 per year",
        eligibility: "International students with exceptional academic records",
        deadline: "March 15",
        link: "https://www.sorbonne-universite.fr/en"
      }
    ],
    website: "https://www.sorbonne-universite.fr/en",
    ranking: 83,
    tuitionFee: "€170 - €380 per year",
    acceptanceRate: "25%"
  },
  {
    id: "ecole-polytechnique",
    name: "École Polytechnique",
    country: "France",
    description: "A leading French institution specialized in science and technology education.",
    imageUrl: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
    scholarships: [
      {
        name: "Excellence Scholarship Program",
        amount: "Full tuition + €12,000 annually",
        eligibility: "Outstanding international students in Engineering and Sciences",
        deadline: "December 15",
        link: "https://www.polytechnique.edu/en/financial-aid-scholarships"
      },
      {
        name: "l'X International Scholarship",
        amount: "€12,000 per year",
        eligibility: "Top-tier international students with strong academic background",
        deadline: "February 28",
        link: "https://www.polytechnique.edu/en"
      }
    ],
    website: "https://www.polytechnique.edu/en",
    ranking: 68,
    tuitionFee: "€12,000 - €15,000 per year",
    acceptanceRate: "10%"
  },
  {
    id: "sciencespo",
    name: "Sciences Po",
    country: "France",
    description: "Renowned for political science, international relations, and social sciences education.",
    imageUrl: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103",
    scholarships: [
      {
        name: "Émile Boutmy Scholarship",
        amount: "€7,300 - €19,000 per year",
        eligibility: "International students from non-EU countries",
        deadline: "December 8",
        link: "https://www.sciencespo.fr/students/en/fees-funding/financial-aid/emile-boutmy-scholarship.html"
      },
      {
        name: "Sciences Po Europe Scholarship",
        amount: "Up to €10,000 per year",
        eligibility: "EU students with excellent academic records",
        deadline: "January 15",
        link: "https://www.sciencespo.fr/en"
      }
    ],
    website: "https://www.sciencespo.fr/en",
    ranking: 242,
    tuitionFee: "€10,540 - €18,700 per year",
    acceptanceRate: "15%"
  },
  {
    id: "paris-saclay",
    name: "University of Paris-Saclay",
    country: "France",
    description: "A world-class university focused on science and engineering disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    scholarships: [
      {
        name: "Paris-Saclay International Master's Scholarship",
        amount: "€10,000 per year",
        eligibility: "High-achieving international students entering Master's programs",
        deadline: "May 16",
        link: "https://www.universite-paris-saclay.fr/en/admission/scholarships-grants"
      },
      {
        name: "French Embassy Excellence Scholarship",
        amount: "€5,000 - €8,000 per year",
        eligibility: "Outstanding students from partner countries",
        deadline: "March 30",
        link: "https://www.universite-paris-saclay.fr/en"
      }
    ],
    website: "https://www.universite-paris-saclay.fr/en",
    ranking: 16,
    tuitionFee: "€243 - €3,770 per year",
    acceptanceRate: "35%"
  },
  {
    id: "grenoble",
    name: "Grenoble Alpes University",
    country: "France",
    description: "A multidisciplinary university known for research and innovation in the Alps region.",
    imageUrl: "https://images.unsplash.com/photo-1565803974275-dccd2f933cbb",
    scholarships: [
      {
        name: "IDEX Scholarship",
        amount: "€8,000 - €11,000 per year",
        eligibility: "Talented international students at Master's or PhD level",
        deadline: "April 30",
        link: "https://www.univ-grenoble-alpes.fr/en/large/menu/international/come-to-uga/"
      },
      {
        name: "Grenoble Excellence Scholarship",
        amount: "€5,000 per year",
        eligibility: "International students with outstanding academic achievements",
        deadline: "January 31",
        link: "https://www.univ-grenoble-alpes.fr/en/"
      }
    ],
    website: "https://www.univ-grenoble-alpes.fr/en/",
    ranking: 351,
    tuitionFee: "€243 - €3,770 per year",
    acceptanceRate: "60%"
  },
  
  // Japan Universities
  {
    id: "tokyo",
    name: "University of Tokyo",
    country: "Japan",
    description: "Japan's top university known for cutting-edge research and academic excellence.",
    imageUrl: "https://images.unsplash.com/photo-1542310503-ff8da9c02372",
    scholarships: [
      {
        name: "University of Tokyo Scholarship",
        amount: "¥150,000 monthly",
        eligibility: "Outstanding international students in all fields",
        deadline: "December 15",
        link: "https://www.u-tokyo.ac.jp/en/prospective-students/scholarships.html"
      },
      {
        name: "MEXT Japanese Government Scholarship",
        amount: "Full tuition + ¥144,000 - ¥148,000 monthly",
        eligibility: "International students with excellent academic records",
        deadline: "Varies by country",
        link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm"
      }
    ],
    website: "https://www.u-tokyo.ac.jp/en/",
    ranking: 24,
    tuitionFee: "¥535,800 per year",
    acceptanceRate: "33%"
  },
  {
    id: "kyoto",
    name: "Kyoto University",
    country: "Japan",
    description: "A leading research university known for producing numerous Nobel laureates.",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    scholarships: [
      {
        name: "Kyoto University International Scholarship",
        amount: "¥100,000 monthly",
        eligibility: "Self-financed international students with top academic records",
        deadline: "February 28",
        link: "https://www.kyoto-u.ac.jp/en/education-campus/procedures/scholarships"
      },
      {
        name: "JASSO Scholarship",
        amount: "¥48,000 monthly",
        eligibility: "Outstanding international exchange students",
        deadline: "Varies by program",
        link: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/index.html"
      }
    ],
    website: "https://www.kyoto-u.ac.jp/en",
    ranking: 33,
    tuitionFee: "¥535,800 per year",
    acceptanceRate: "38%"
  },
  {
    id: "waseda",
    name: "Waseda University",
    country: "Japan",
    description: "A prestigious private university with strong programs in business and international relations.",
    imageUrl: "https://images.unsplash.com/photo-1495562569060-2eec283d3391",
    scholarships: [
      {
        name: "Waseda Global Scholarship",
        amount: "Full tuition + ¥100,000 monthly",
        eligibility: "Exceptional international students in undergraduate programs",
        deadline: "October 31",
        link: "https://www.waseda.jp/inst/cie/en/life/aid"
      },
      {
        name: "Monbukagakusho Honors Scholarship",
        amount: "¥48,000 monthly",
        eligibility: "International students with outstanding academic performance",
        deadline: "April application",
        link: "https://www.waseda.jp/inst/scholarship/en/"
      }
    ],
    website: "https://www.waseda.jp/top/en",
    ranking: 189,
    tuitionFee: "¥1,350,000 - ¥1,950,000 per year",
    acceptanceRate: "20%"
  },
  {
    id: "tohoku",
    name: "Tohoku University",
    country: "Japan",
    description: "Known for its research excellence, especially in materials science and engineering.",
    imageUrl: "https://images.unsplash.com/photo-1565362796128-2b10cc1fad44",
    scholarships: [
      {
        name: "Tohoku University President Fellowship",
        amount: "¥150,000 monthly + research grant",
        eligibility: "Outstanding international PhD students",
        deadline: "January 31",
        link: "https://www.tohoku.ac.jp/en/admissions/financial_aid.html"
      },
      {
        name: "Tohoku University Global Hagi Scholarship",
        amount: "Full tuition waiver",
        eligibility: "International students with excellent academic records",
        deadline: "December 1",
        link: "https://www.tohoku.ac.jp/en/"
      }
    ],
    website: "https://www.tohoku.ac.jp/en/",
    ranking: 82,
    tuitionFee: "¥535,800 per year",
    acceptanceRate: "45%"
  },
  {
    id: "osaka",
    name: "Osaka University",
    country: "Japan",
    description: "A comprehensive research university with strengths in medicine and technology.",
    imageUrl: "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf",
    scholarships: [
      {
        name: "Osaka University International Student Scholarship",
        amount: "¥100,000 monthly",
        eligibility: "High-achieving international students in graduate programs",
        deadline: "March 31",
        link: "https://www.osaka-u.ac.jp/en/international/inbound/support/scholarship"
      },
      {
        name: "Osaka University Graduate School Scholarship",
        amount: "Full tuition waiver",
        eligibility: "Graduate students with excellent academic background",
        deadline: "November 30",
        link: "https://www.osaka-u.ac.jp/en"
      }
    ],
    website: "https://www.osaka-u.ac.jp/en",
    ranking: 75,
    tuitionFee: "¥535,800 per year",
    acceptanceRate: "49%"
  },
  
  // Singapore Universities
  {
    id: "nus",
    name: "National University of Singapore",
    country: "Singapore",
    description: "Singapore's flagship university with comprehensive programs across disciplines.",
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
    scholarships: [
      {
        name: "NUS Merit Scholarship",
        amount: "Full tuition + SGD$6,000 annual stipend",
        eligibility: "Outstanding international undergraduate students",
        deadline: "March 31",
        link: "https://www.nus.edu.sg/oam/scholarships"
      },
      {
        name: "Science & Technology Scholarship",
        amount: "Full tuition + SGD$12,000 annual stipend",
        eligibility: "Exceptional students in STEM fields",
        deadline: "January 31",
        link: "https://www.nus.edu.sg/admissions/scholarships"
      }
    ],
    website: "https://www.nus.edu.sg/",
    ranking: 11,
    tuitionFee: "SGD$29,350 - SGD$38,200 per year",
    acceptanceRate: "5%"
  },
  {
    id: "nanyang",
    name: "Nanyang Technological University",
    country: "Singapore",
    description: "A research-intensive university known for engineering and business programs.",
    imageUrl: "https://images.unsplash.com/photo-1599687266725-0d14ee542335",
    scholarships: [
      {
        name: "ASEAN Undergraduate Scholarship",
        amount: "Full tuition + living allowance",
        eligibility: "Outstanding students from ASEAN countries",
        deadline: "December 15",
        link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/asean-undergraduate-scholarship"
      },
      {
        name: "Nanyang Scholarship",
        amount: "Full tuition + SGD$6,500 annual stipend + laptop",
        eligibility: "Exceptional students with strong leadership potential",
        deadline: "January 31",
        link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/nanyang-scholarship"
      }
    ],
    website: "https://www.ntu.edu.sg/",
    ranking: 19,
    tuitionFee: "SGD$29,600 - SGD$36,830 per year",
    acceptanceRate: "36%"
  },
  {
    id: "smu",
    name: "Singapore Management University",
    country: "Singapore",
    description: "A specialized university focused on business, management, and social sciences.",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3",
    scholarships: [
      {
        name: "SMU Global Impact Scholarship",
        amount: "Full tuition + SGD$5,000 annual stipend",
        eligibility: "Outstanding international students with leadership potential",
        deadline: "December 15",
        link: "https://www.smu.edu.sg/admissions/scholarships"
      },
      {
        name: "Lee Kong Chian Scholarship",
        amount: "Full tuition + SGD$5,000 annual allowance",
        eligibility: "Exceptional students with outstanding academic achievements",
        deadline: "March 31",
        link: "https://www.smu.edu.sg/admissions/scholarships/lee-kong-chian-scholars-programme"
      }
    ],
    website: "https://www.smu.edu.sg/",
    ranking: 511,
    tuitionFee: "SGD$28,000 - SGD$32,000 per year",
    acceptanceRate: "25%"
  },
  {
    id: "sutd",
    name: "Singapore University of Technology and Design",
    country: "Singapore",
    description: "A specialized university focusing on design and technology innovation.",
    imageUrl: "https://images.unsplash.com/photo-1544531585-9847b68c8c86",
    scholarships: [
      {
        name: "SUTD Global Merit Scholarship",
        amount: "Full tuition + SGD$8,000 annual allowance",
        eligibility: "Academically outstanding international students",
        deadline: "March 31",
        link: "https://www.sutd.edu.sg/Admissions/Undergraduate/Scholarship-and-Financial-Aid/Scholarship-Information"
      },
      {
        name: "ASEAN Undergraduate Scholarship",
        amount: "Full tuition fee subsidy",
        eligibility: "Outstanding students from ASEAN countries",
        deadline: "March 31",
        link: "https://www.sutd.edu.sg/Admissions/Undergraduate/Scholarship-and-Financial-Aid/Scholarship-Information"
      }
    ],
    website: "https://www.sutd.edu.sg/",
    ranking: 701,
    tuitionFee: "SGD$20,100 per year",
    acceptanceRate: "30%"
  },
  {
    id: "sit",
    name: "Singapore Institute of Technology",
    country: "Singapore",
    description: "A university focusing on applied learning and industry partnerships.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    scholarships: [
      {
        name: "SIT Global Scholarship",
        amount: "Full tuition + SGD$4,000 annual allowance",
        eligibility: "Outstanding international students with strong academic records",
        deadline: "February 28",
        link: "https://www.singaporetech.edu.sg/admissions/scholarships"
      },
      {
        name: "Industry Scholarship",
        amount: "Full tuition + monthly allowance",
        eligibility: "Students committed to working with sponsoring companies after graduation",
        deadline: "January 31",
        link: "https://www.singaporetech.edu.sg/admissions/scholarships"
      }
    ],
    website: "https://www.singaporetech.edu.sg/",
    ranking: 801,
    tuitionFee: "SGD$15,000 - SGD$20,000 per year",
    acceptanceRate: "40%"
  },
  
  // Netherlands Universities
  {
    id: "amsterdam",
    name: "University of Amsterdam",
    country: "Netherlands",
    description: "One of Europe's most innovative and research-intensive universities.",
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
    scholarships: [
      {
        name: "Amsterdam Merit Scholarship",
        amount: "€5,000 - €25,000",
        eligibility: "Non-EEA students with excellent academic achievements",
        deadline: "January 15",
        link: "https://www.uva.nl/en/education/master-s/scholarships-tuition/scholarships-and-loans/amsterdam-merit-scholarships/amsterdam-merit-scholarships.html"
      },
      {
        name: "Holland Scholarship",
        amount: "€5,000",
        eligibility: "International students from outside the EEA",
        deadline: "February 1",
        link: "https://www.uva.nl/en/education/master-s/scholarships-tuition/scholarships-and-loans/holland-scholarship/holland-scholarship.html"
      }
    ],
    website: "https://www.uva.nl/en",
    ranking: 55,
    tuitionFee: "€8,900 - €18,500 per year",
    acceptanceRate: "40%"
  },
  {
    id: "delft",
    name: "Delft University of Technology",
    country: "Netherlands",
    description: "The oldest and largest Dutch public technical university, focusing on engineering and applied sciences.",
    imageUrl: "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498",
    scholarships: [
      {
        name: "Justus & Louise van Effen Excellence Scholarship",
        amount: "Full tuition + €11,000 living expenses",
        eligibility: "Excellent international students for MSc programs",
        deadline: "December 1",
        link: "https://www.tudelft.nl/en/education/practical-matters/scholarships"
      },
      {
        name: "TU Delft Excellence Scholarship",
        amount: "Full tuition or €10,000",
        eligibility: "Outstanding students with excellent academic records",
        deadline: "December 1",
        link: "https://www.tudelft.nl/en/education/practical-matters/scholarships"
      }
    ],
    website: "https://www.tudelft.nl/en/",
    ranking: 61,
    tuitionFee: "€18,750 per year",
    acceptanceRate: "30%"
  },
  {
    id: "utrecht",
    name: "Utrecht University",
    country: "Netherlands",
    description: "A research university with a focus on interdisciplinary collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1599500848984-126a42f9099a",
    scholarships: [
      {
        name: "Utrecht Excellence Scholarship",
        amount: "€5,000 - €30,000",
        eligibility: "Outstanding non-EU/EEA students",
        deadline: "February 1",
        link: "https://www.uu.nl/en/masters/general-information/application-and-admission/scholarships-and-grants/utrecht-excellence-scholarships"
      },
      {
        name: "Orange Tulip Scholarship",
        amount: "Full or partial tuition waiver",
        eligibility: "Students from specific countries (Brazil, China, India, etc.)",
        deadline: "April 1",
        link: "https://www.uu.nl/en/education/exchange-and-visiting-students/finances/grants-and-scholarships"
      }
    ],
    website: "https://www.uu.nl/en",
    ranking: 124,
    tuitionFee: "€15,000 - €20,000 per year",
    acceptanceRate: "35%"
  },
  {
    id: "groningen",
    name: "University of Groningen",
    country: "Netherlands",
    description: "A research university with a global outlook, focusing on energy, healthy aging, and sustainable society.",
    imageUrl: "https://images.unsplash.com/photo-1615564044178-251190bd1f4a",
    scholarships: [
      {
        name: "Eric Bleumink Fund Scholarship",
        amount: "Full tuition + €850 monthly living expenses",
        eligibility: "Talented students from developing countries",
        deadline: "January 15",
        link: "https://www.rug.nl/education/scholarships/eric-bleumink-fund"
      },
      {
        name: "Holland Scholarship",
        amount: "€5,000",
        eligibility: "International students from outside the EEA",
        deadline: "February 1",
        link: "https://www.rug.nl/education/scholarships/holland-scholarship"
      }
    ],
    website: "https://www.rug.nl/",
    ranking: 80,
    tuitionFee: "€14,200 - €16,000 per year",
    acceptanceRate: "30%"
  },
  {
    id: "leiden",
    name: "Leiden University",
    country: "Netherlands",
    description: "The oldest university in the Netherlands, known for its research excellence.",
    imageUrl: "https://images.unsplash.com/photo-1583373834259-46cc92173cb7",
    scholarships: [
      {
        name: "Leiden University Excellence Scholarship",
        amount: "€10,000 - €25,000",
        eligibility: "Excellent students from non-EEA countries",
        deadline: "October 1 / February 1",
        link: "https://www.universiteitleiden.nl/en/scholarships/sea/leiden-university-excellence-scholarship-programme"
      },
      {
        name: "Orange Tulip Scholarship Programme",
        amount: "Varies by country",
        eligibility: "Students from specific countries with excellent academic records",
        deadline: "April 1",
        link: "https://www.universiteitleiden.nl/en/scholarships/sea/orange-tulip-scholarship-programme"
      }
    ],
    website: "https://www.universiteitleiden.nl/en",
    ranking: 112,
    tuitionFee: "€15,000 - €20,000 per year",
    acceptanceRate: "25%"
  },
  
  // Sweden Universities
  {
    id: "lund",
    name: "Lund University",
    country: "Sweden",
    description: "One of northern Europe's oldest and most prestigious universities.",
    imageUrl: "https://images.unsplash.com/photo-1571169644780-61d633c31b45",
    scholarships: [
      {
        name: "Lund University Global Scholarship",
        amount: "25% - 100% of tuition fees",
        eligibility: "Non-EU/EEA students with exceptional academic records",
        deadline: "January 15",
        link: "https://www.lunduniversity.lu.se/admissions/bachelors-and-masters/scholarships-and-awards/lund-university-global-scholarship"
      },
      {
        name: "Swedish Institute Scholarships for Global Professionals",
        amount: "Full tuition + monthly stipend + travel grant",
        eligibility: "Students from specific countries with leadership potential",
        deadline: "February 10",
        link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
      }
    ],
    website: "https://www.lunduniversity.lu.se/",
    ranking: 95,
    tuitionFee: "SEK 120,000 - SEK 260,000 per year",
    acceptanceRate: "35%"
  },
  {
    id: "uppsala",
    name: "Uppsala University",
    country: "Sweden",
    description: "Sweden's oldest university with a strong focus on research and education.",
    imageUrl: "https://images.unsplash.com/photo-1559236454-bc1f39000603",
    scholarships: [
      {
        name: "Uppsala University President's Club Scholarship",
        amount: "Full tuition",
        eligibility: "Outstanding international students from non-EU/EEA countries",
        deadline: "January 20",
        link: "https://www.uu.se/en/admissions/scholarships/uppsala-university/"
      },
      {
        name: "Anders Wall Scholarship",
        amount: "SEK 100,000",
        eligibility: "Chinese students with exceptional academic records",
        deadline: "January 15",
        link: "https://www.uu.se/en/admissions/scholarships/anders-wall/"
      }
    ],
    website: "https://www.uu.se/en",
    ranking: 111,
    tuitionFee: "SEK 140,000 - SEK 250,000 per year",
    acceptanceRate: "40%"
  },
  {
    id: "kth",
    name: "KTH Royal Institute of Technology",
    country: "Sweden",
    description: "Sweden's largest technical university focusing on engineering and technology.",
    imageUrl: "https://images.unsplash.com/photo-1565362494805-8f069b05ff7e",
    scholarships: [
      {
        name: "KTH Scholarship",
        amount: "50% - 100% of tuition fees",
        eligibility: "Fee-paying students with excellent academic performance",
        deadline: "January 15",
        link: "https://www.kth.se/en/studies/master/scholarships/kth-scholarship-1.72827"
      },
      {
        name: "KTH India Scholarship Foundation",
        amount: "Full tuition",
        eligibility: "Outstanding Indian students",
        deadline: "January 15",
        link: "https://www.kth.se/en/studies/master/scholarships"
      }
    ],
    website: "https://www.kth.se/en",
    ranking: 98,
    tuitionFee: "SEK 155,000 - SEK 310,000 per year",
    acceptanceRate: "25%"
  },
  {
    id: "chalmers",
    name: "Chalmers University of Technology",
    country: "Sweden",
    description: "A research-intensive university focusing on technology, science, and sustainable development.",
    imageUrl: "https://images.unsplash.com/photo-1544256718-3bcf237f3974",
    scholarships: [
      {
        name: "Chalmers IPOET Scholarship",
        amount: "75% - 100% of tuition fees",
        eligibility: "Outstanding fee-paying students from non-EU/EEA countries",
        deadline: "January 15",
        link: "https://www.chalmers.se/en/education/fees-finance/Pages/Scholarships.aspx"
      },
      {
        name: "Adlerbert Study Scholarships",
        amount: "Full tuition + living expenses",
        eligibility: "Excellent students pursuing Master's degree programs",
        deadline: "January 15",
        link: "https://www.chalmers.se/en/education/fees-finance/Pages/Scholarships.aspx"
      }
    ],
    website: "https://www.chalmers.se/en",
    ranking: 125,
    tuitionFee: "SEK 140,000 - SEK 310,000 per year",
    acceptanceRate: "28%"
  },
  {
    id: "stockholm",
    name: "Stockholm University",
    country: "Sweden",
    description: "A major public university in Stockholm known for natural sciences and humanities.",
    imageUrl: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0",
    scholarships: [
      {
        name: "Stockholm University Scholarship",
        amount: "Partial to full tuition",
        eligibility: "Outstanding students from countries outside EU/EEA/Switzerland",
        deadline: "February 1",
        link: "https://www.su.se/english/education/admissions/scholarships"
      },
      {
        name: "Swedish Institute Study Scholarships",
        amount: "Full tuition + monthly stipend + insurance",
        eligibility: "Students from specific countries with professional experience",
        deadline: "February 10",
        link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
      }
    ],
    website: "https://www.su.se/english/",
    ranking: 176,
    tuitionFee: "SEK 90,000 - SEK 140,000 per year",
    acceptanceRate: "45%"
  }
];

// Helper function to get colleges by country
export const getCollegesByCountry = (countryId: string): StudyAbroadCollege[] => {
  return studyAbroadColleges.filter(college => college.country.toLowerCase() === 
    countries.find(c => c.id === countryId)?.name.toLowerCase());
};
