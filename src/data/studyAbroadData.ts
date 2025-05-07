
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
  }
];

export function getCollegesByCountry(countryId: string): StudyAbroadCollege[] {
  return studyAbroadColleges.filter(
    college => college.country.toLowerCase() === countryId.toLowerCase()
  );
}
