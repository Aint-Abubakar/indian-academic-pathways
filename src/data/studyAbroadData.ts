export interface Country {
  id: string;
  name: string;
  description: string;
  flagUrl: string;
}

export interface StudyAbroadCollege {
  id: string;
  countryId: string;
  name: string;
  imageUrl: string;
  description: string;
  ranking: number;
  tuitionFee: string;
  acceptanceRate: string;
  website: string;
  scholarships: Scholarship[];
}

interface Scholarship {
  name: string;
  amount: string;
  deadline: string;
  eligibility: string;
  link: string;
}

export const countries: Country[] = [
  {
    id: "usa",
    name: "United States",
    description: "The United States is a popular destination for international students, offering a wide range of academic programs and world-renowned universities.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
  },
  {
    id: "uk",
    name: "United Kingdom",
    description: "The United Kingdom boasts a rich history of academic excellence and is home to some of the world's most prestigious universities.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
  },
  {
    id: "canada",
    name: "Canada",
    description: "Canada is known for its high quality of life, multicultural environment, and affordable tuition fees, making it an attractive option for international students.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg"
  },
  {
    id: "australia",
    name: "Australia",
    description: "Australia offers a unique blend of world-class education, stunning natural landscapes, and a relaxed lifestyle, making it a desirable destination for students.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
  },
  {
    id: "germany",
    name: "Germany",
    description: "Germany is a hub for engineering and technology, offering free or low-cost tuition at public universities and a growing number of English-taught programs.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
  },
  // Adding new countries
  {
    id: "japan",
    name: "Japan",
    description: "Japan combines ancient traditions with cutting-edge technology and offers excellent universities with strong programs in engineering, technology, and arts.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg"
  },
  {
    id: "singapore",
    name: "Singapore",
    description: "Singapore is a global education hub with world-class universities, offering a safe, multicultural environment and strong connections to Asian business markets.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
  },
  {
    id: "sweden",
    name: "Sweden",
    description: "Sweden offers innovative education approaches with a focus on sustainability, creativity and critical thinking, with many programs taught entirely in English.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
  },
  {
    id: "france",
    name: "France",
    description: "France offers prestigious educational institutions, rich cultural experiences, and relatively affordable tuition fees, especially for public universities.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
  },
  {
    id: "netherlands",
    name: "Netherlands",
    description: "The Netherlands offers numerous English-taught programs in an international environment, with strong emphasis on innovation and practical applications.",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
  }
];

export const studyAbroadColleges: StudyAbroadCollege[] = [
  {
    id: "harvard",
    countryId: "usa",
    name: "Harvard University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_University_seal.svg/1200px-Harvard_University_seal.svg.png",
    description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, its history, influence, and wealth have made it one of the world's most prestigious universities.",
    ranking: 1,
    tuitionFee: "$54,768",
    acceptanceRate: "3.4%",
    website: "https://www.harvard.edu/",
    scholarships: [
      {
        name: "Need-Based Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on financial need",
        link: "https://college.harvard.edu/financial-aid/how-aid-works"
      },
      {
        name: "External Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Varies",
        link: "https://college.harvard.edu/financial-aid/apply-aid/outside-scholarships"
      }
    ]
  },
  {
    id: "stanford",
    countryId: "usa",
    name: "Stanford University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stanford_University_seal.svg/1200px-Stanford_University_seal.svg.png",
    description: "Stanford University, officially Leland Stanford Junior University, is a private research university in Stanford, California. Known for its academic strength, wealth, proximity to Silicon Valley, and selectivity, it is one of the world's most prestigious universities.",
    ranking: 3,
    tuitionFee: "$56,169",
    acceptanceRate: "3.9%",
    website: "https://www.stanford.edu/",
    scholarships: [
      {
        name: "Need-Based Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on financial need",
        link: "https://financialaid.stanford.edu/undergrad/apply/international.html"
      },
      {
        name: "Knight-Hennessy Scholars",
        amount: "Full tuition and stipend",
        deadline: "October",
        eligibility: "For graduate students",
        link: "https://knight-hennessy.stanford.edu/"
      }
    ]
  },
  {
    id: "mit",
    countryId: "usa",
    name: "Massachusetts Institute of Technology (MIT)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/MIT_Seal.svg/1200px-MIT_Seal.svg.png",
    description: "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts. MIT is dedicated to advancing knowledge and educating students in science, technology, and other areas of scholarship that will best serve the nation and the world.",
    ranking: 2,
    tuitionFee: "$55,510",
    acceptanceRate: "4.1%",
    website: "https://web.mit.edu/",
    scholarships: [
      {
        name: "Need-Based Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on financial need",
        link: "https://finaid.mit.edu/apply-for-aid/international-students/"
      },
      {
        name: "External Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Varies",
        link: "https://finaid.mit.edu/apply-for-aid/international-students/outside-resources/"
      }
    ]
  },
  {
    id: "oxford",
    countryId: "uk",
    name: "University of Oxford",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/University_of_Oxford-Logo.svg/1200px-University_of_Oxford-Logo.svg.png",
    description: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
    ranking: 5,
    tuitionFee: "£9,250 - £48,620",
    acceptanceRate: "17.5%",
    website: "https://www.ox.ac.uk/",
    scholarships: [
      {
        name: "Rhodes Scholarships",
        amount: "Full tuition and stipend",
        deadline: "Varies by country",
        eligibility: "For postgraduate students",
        link: "https://www.rhodeshouse.ox.ac.uk/scholarships/apply/"
      },
      {
        name: "Clarendon Scholarships",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "For graduate students",
        link: "https://www.ox.ac.uk/clarendon"
      }
    ]
  },
  {
    id: "cambridge",
    countryId: "uk",
    name: "University of Cambridge",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Cambridge_University_coat_of_arms.svg/1200px-Cambridge_University_coat_of_arms.svg.png",
    description: "The University of Cambridge is a collegiate public research university in Cambridge, England. Founded in 1209 and granted a royal charter by King Henry III in 1231, Cambridge is the second-oldest university in the English-speaking world and the world's fourth-oldest surviving university.",
    ranking: 7,
    tuitionFee: "£22,214 - £58,000",
    acceptanceRate: "21%",
    website: "https://www.cam.ac.uk/",
    scholarships: [
      {
        name: "Cambridge International Scholarships",
        amount: "Full tuition and stipend",
        deadline: "Varies",
        eligibility: "For PhD students",
        link: "https://www.graduate.study.cam.ac.uk/finance/funding/cambridge-international-scholarships"
      },
      {
        name: "Gates Cambridge Scholarships",
        amount: "Full tuition and stipend",
        deadline: "October",
        eligibility: "For postgraduate students",
        link: "https://www.gatescambridge.org/"
      }
    ]
  },
  {
    id: "ethzurich",
    countryId: "germany",
    name: "ETH Zurich",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/ETH_Z%C3%BCrich_logo.svg/1200px-ETH_Z%C3%BCrich_logo.svg.png",
    description: "ETH Zurich is a science and technology university in the city of Zürich, Switzerland. Founded in 1855, it is consistently ranked among the world's best universities.",
    ranking: 9,
    tuitionFee: "CHF 730 per semester",
    acceptanceRate: "27%",
    website: "https://ethz.ch/en.html",
    scholarships: [
      {
        name: "Excellence Scholarship & Opportunity Programme (ESOP)",
        amount: "Varies",
        deadline: "December",
        eligibility: "For master's students",
        link: "https://ethz.ch/students/en/studies/financial/scholarships/excellence-scholarship.html"
      },
      {
        name: "ETH-D Scholarship",
        amount: "Varies",
        deadline: "March",
        eligibility: "For doctoral students",
        link: "https://ethz.ch/services/en/news-and-events/internal-news/archive/2020/03/doctoral-scholarships.html"
      }
    ]
  },
  {
    id: "utoronto",
    countryId: "canada",
    name: "University of Toronto",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Toronto_Coat_of_Arms.svg/1200px-University_of_Toronto_Coat_of_Arms.svg.png",
    description: "The University of Toronto is a public research university in Toronto, Ontario, Canada. It was founded in 1827 as King's College, the first institution of higher education in Upper Canada.",
    ranking: 26,
    tuitionFee: "CAD $61,000 - $70,000",
    acceptanceRate: "43%",
    website: "https://www.utoronto.ca/",
    scholarships: [
      {
        name: "Lester B. Pearson International Scholarship",
        amount: "Full tuition, books, residence support",
        deadline: "January",
        eligibility: "International students",
        link: "https://future.utoronto.ca/pearson/"
      },
      {
        name: "University of Toronto Scholars Program",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Based on academic merit",
        link: "https://future.utoronto.ca/scholarships/"
      }
    ]
  },
  {
    id: "mcgill",
    countryId: "canada",
    name: "McGill University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png",
    description: "McGill University is a public research university in Montreal, Quebec, Canada. It was established in 1821 by royal charter, given by King George IV of the United Kingdom.",
    ranking: 31,
    tuitionFee: "CAD $20,000 - $60,000",
    acceptanceRate: "46%",
    website: "https://www.mcgill.ca/",
    scholarships: [
      {
        name: "McGill International Student Funding",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "International students",
        link: "https://www.mcgill.ca/studentaid/international-student-funding"
      },
      {
        name: "External Awards and Scholarships",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "Varies",
        link: "https://www.mcgill.ca/studentaid/scholarships-awards/external"
      }
    ]
  },
  {
    id: "anu",
    countryId: "australia",
    name: "Australian National University (ANU)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Australian_National_University_logo.svg/1200px-Australian_National_University_logo.svg.png",
    description: "The Australian National University (ANU) is a national research university located in Canberra, Australia. Its main campus in Acton encompasses seven teaching and research colleges.",
    ranking: 30,
    tuitionFee: "AUD $43,680",
    acceptanceRate: "35%",
    website: "https://www.anu.edu.au/",
    scholarships: [
      {
        name: "ANU International Excellence Scholarship",
        amount: "50% or 25% tuition fee reduction",
        deadline: "Varies",
        eligibility: "International students",
        link: "https://www.anu.edu.au/study/scholarships/find-a-scholarship/anu-international-excellence-scholarship"
      },
      {
        name: "Research Scholarships",
        amount: "Full tuition and stipend",
        deadline: "Varies",
        eligibility: "For research students",
        link: "https://www.anu.edu.au/study/scholarships/find-a-scholarship?field_faculty_target_id=All&field_scholarship_type_target_id=131"
      }
    ]
  },
  {
    id: "unimelb",
    countryId: "australia",
    name: "University of Melbourne",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Unimelb_logo.svg/1200px-Unimelb_logo.svg.png",
    description: "The University of Melbourne is a public research university located in Melbourne, Australia. Founded in 1853, it is the second oldest university in Australia and the oldest in Victoria.",
    ranking: 33,
    tuitionFee: "AUD $42,000 - $50,000",
    acceptanceRate: "30%",
    website: "https://www.unimelb.edu.au/",
    scholarships: [
      {
        name: "Melbourne International Undergraduate Scholarship",
        amount: "AUD $10,000 per year",
        deadline: "Varies",
        eligibility: "Undergraduate international students",
        link: "https://scholarships.unimelb.edu.au/awards/melbourne-international-undergraduate-scholarship"
      },
      {
        name: "Graduate Research Scholarships",
        amount: "Full tuition and stipend",
        deadline: "Varies",
        eligibility: "For graduate research students",
        link: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
      }
    ]
  },
  
  // Adding colleges for Japan
  {
    id: "utokyo",
    countryId: "japan",
    name: "University of Tokyo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/77/University_of_Tokyo_logo.svg",
    description: "The University of Tokyo is a leading research university located in Tokyo, Japan. It is the highest-ranked university in Asia and one of the most prestigious universities in the world.",
    ranking: 23,
    tuitionFee: "JPY 535,800 per year",
    acceptanceRate: "33%",
    website: "https://www.u-tokyo.ac.jp/en/",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "Full tuition and monthly stipend",
        deadline: "December",
        eligibility: "International students with exceptional academic records",
        link: "https://www.u-tokyo.ac.jp/en/prospective-students/mext_scholarship.html"
      },
      {
        name: "University of Tokyo Foundation Scholarship",
        amount: "JPY 150,000 per month",
        deadline: "April",
        eligibility: "Graduate students with research potential",
        link: "https://www.u-tokyo.ac.jp/en/prospective-students/scholarship.html"
      }
    ]
  },
  {
    id: "kyoto",
    countryId: "japan",
    name: "Kyoto University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Kyoto_University_emblem.svg",
    description: "Kyoto University is one of Japan's premier research institutions, known for producing numerous Nobel laureates and pioneering research across various fields.",
    ranking: 36,
    tuitionFee: "JPY 535,800 per year",
    acceptanceRate: "35%",
    website: "https://www.kyoto-u.ac.jp/en",
    scholarships: [
      {
        name: "MEXT Scholarship",
        amount: "Full tuition and monthly stipend",
        deadline: "December",
        eligibility: "International students with exceptional academic records",
        link: "https://www.kyoto-u.ac.jp/en/education-campus/international/students1/scholarship"
      },
      {
        name: "JASSO Student Exchange Support Program",
        amount: "JPY 80,000 per month",
        deadline: "Varies",
        eligibility: "Exchange students",
        link: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/index.html"
      }
    ]
  },
  
  // Adding colleges for Singapore
  {
    id: "nus",
    countryId: "singapore",
    name: "National University of Singapore",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b9/NUS_coat_of_arms.svg",
    description: "The National University of Singapore (NUS) is Singapore's flagship university, offering a global approach to education and research with a focus on Asian perspectives.",
    ranking: 11,
    tuitionFee: "SGD 29,350 - 42,100 per year",
    acceptanceRate: "5%",
    website: "https://www.nus.edu.sg/",
    scholarships: [
      {
        name: "NUS Merit Scholarship",
        amount: "Full tuition and living stipend",
        deadline: "March",
        eligibility: "Outstanding academic achievement and leadership qualities",
        link: "https://www.nus.edu.sg/oam/scholarships/freshmen-singapore-citizens"
      },
      {
        name: "ASEAN Undergraduate Scholarship",
        amount: "Full tuition and annual stipend",
        deadline: "March",
        eligibility: "Citizens of ASEAN countries (excluding Singapore)",
        link: "https://www.nus.edu.sg/oam/scholarships/freshmen/scholarship/asean-undergraduate-scholarship"
      }
    ]
  },
  {
    id: "ntu",
    countryId: "singapore",
    name: "Nanyang Technological University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e8/Nanyang_Technological_University_coat_of_arms.svg",
    description: "Nanyang Technological University (NTU) is a research-intensive public university in Singapore known for its strength in engineering, business, and digital innovation.",
    ranking: 15,
    tuitionFee: "SGD 20,100 - 35,450 per year",
    acceptanceRate: "36%",
    website: "https://www.ntu.edu.sg/",
    scholarships: [
      {
        name: "NTU Scholarship",
        amount: "Full tuition and living allowance",
        deadline: "February",
        eligibility: "Outstanding academic achievements",
        link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/scholarships-overview"
      },
      {
        name: "Nanyang Scholarship",
        amount: "Full tuition, monthly allowance, and travel grant",
        deadline: "December",
        eligibility: "Top achievers with leadership qualities",
        link: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/nanyang-scholarship"
      }
    ]
  },
  
  // Adding colleges for Sweden
  {
    id: "uppsala",
    countryId: "sweden",
    name: "Uppsala University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/Uppsala_University_seal.svg",
    description: "Founded in 1477, Uppsala University is the oldest university in Sweden and all of the Nordic countries, renowned for its quality of education and research.",
    ranking: 77,
    tuitionFee: "Free for EU students, SEK 140,000 per year for non-EU students",
    acceptanceRate: "35%",
    website: "https://www.uu.se/en",
    scholarships: [
      {
        name: "Uppsala University Global Scholarship",
        amount: "75-100% of tuition fees",
        deadline: "January",
        eligibility: "Non-EU/EEA students with outstanding academic records",
        link: "https://www.uu.se/en/admissions/scholarships/uppsala-university-global-scholarship/"
      },
      {
        name: "Swedish Institute Scholarships",
        amount: "Full tuition and living expenses",
        deadline: "February",
        eligibility: "Students from selected countries",
        link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
      }
    ]
  },
  {
    id: "kth",
    countryId: "sweden",
    name: "KTH Royal Institute of Technology",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/39/KTH_Royal_Institute_of_Technology_logo.svg",
    description: "KTH Royal Institute of Technology is Sweden's largest technical university, offering education in engineering, science, architecture, industrial management, and urban planning.",
    ranking: 98,
    tuitionFee: "Free for EU students, SEK 155,000 per year for non-EU students",
    acceptanceRate: "25%",
    website: "https://www.kth.se/en",
    scholarships: [
      {
        name: "KTH Scholarship",
        amount: "50-100% of tuition fees",
        deadline: "January",
        eligibility: "Fee-paying students with excellent academic records",
        link: "https://www.kth.se/en/studies/master/scholarships"
      },
      {
        name: "Erasmus+ Programme",
        amount: "Varies",
        deadline: "Varies",
        eligibility: "EU students for exchange programs",
        link: "https://www.kth.se/en/studies/exchange/erasmus"
      }
    ]
  },
  
  // Adding colleges for France
  {
    id: "sorbonne",
    countryId: "france",
    name: "Sorbonne University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Sorbonne_Universit%C3%A9_Logo.svg",
    description: "Sorbonne University is a public research university in Paris, France, which traces its history back to the 13th century and is one of the oldest in the world.",
    ranking: 83,
    tuitionFee: "€170 - €380 per year for EU students, €3,770 for non-EU students",
    acceptanceRate: "40%",
    website: "https://www.sorbonne-universite.fr/en",
    scholarships: [
      {
        name: "Eiffel Excellence Scholarship Program",
        amount: "€1,181 monthly and other benefits",
        deadline: "January",
        eligibility: "International students applying for Master's or PhD programs",
        link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
      },
      {
        name: "Make Our Planet Great Again Scholarships",
        amount: "Up to €1,700 monthly",
        deadline: "May",
        eligibility: "International students in climate change, earth system science",
        link: "https://www.campusfrance.org/en/make-our-planet-great-again-en"
      }
    ]
  },
  {
    id: "ecolepolytechnique",
    countryId: "france",
    name: "École Polytechnique",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Logo_EP_Couleur.svg",
    description: "École Polytechnique is a leading French engineering school that combines top-level research, academics, and innovation at the cutting-edge of science and technology.",
    ranking: 61,
    tuitionFee: "€12,000 - €15,000 per year",
    acceptanceRate: "18%",
    website: "https://www.polytechnique.edu/en",
    scholarships: [
      {
        name: "International Diversity Program",
        amount: "€5,000 - €15,000 per year",
        deadline: "January",
        eligibility: "International students with excellent academic credentials",
        link: "https://www.polytechnique.edu/en/financial-aids-and-scholarships"
      },
      {
        name: "Excellence Scholarships",
        amount: "Full tuition waiver",
        deadline: "December",
        eligibility: "Outstanding academic achievements",
        link: "https://www.polytechnique.edu/en/scholarship-excellence"
      }
    ]
  },
  
  // Adding colleges for Netherlands
  {
    id: "tudelft",
    countryId: "netherlands",
    name: "Delft University of Technology",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/Delft_University_of_Technology_seal.svg",
    description: "Delft University of Technology is the oldest and largest Dutch public technical university, known for its high-quality education in engineering, design and computer science.",
    ranking: 57,
    tuitionFee: "€2,168 for EU students, €15,166 for non-EU students",
    acceptanceRate: "30%",
    website: "https://www.tudelft.nl/en/",
    scholarships: [
      {
        name: "Justus & Louise van Effen Excellence Scholarships",
        amount: "Full tuition fee waiver",
        deadline: "December",
        eligibility: "Non-EU/EEA students with excellent academic records",
        link: "https://www.tudelft.nl/en/education/practical-matters/scholarships/justus-louise-van-effen-excellence-scholarships/"
      },
      {
        name: "Holland Scholarship",
        amount: "€5,000",
        deadline: "February",
        eligibility: "International students from outside the EEA",
        link: "https://www.tudelft.nl/en/education/practical-matters/scholarships/holland-scholarship"
      }
    ]
  },
  {
    id: "uva",
    countryId: "netherlands",
    name: "University of Amsterdam",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1a/University_of_Amsterdam_logo.svg",
    description: "The University of Amsterdam is the Netherlands' largest university, offering a wide range of programs across humanities, social sciences, law, economics, and sciences.",
    ranking: 55,
    tuitionFee: "€2,168 for EU students, €10,000 - €20,000 for non-EU students",
    acceptanceRate: "40%",
    website: "https://www.uva.nl/en",
    scholarships: [
      {
        name: "Amsterdam Merit Scholarships",
        amount: "€5,000 - €25,000",
        deadline: "January",
        eligibility: "Non-EU/EEA students with outstanding academic achievement",
        link: "https://www.uva.nl/en/education/master-s/scholarships-tuition/scholarships-and-loans/amsterdam-merit-scholarships/amsterdam-merit-scholarships.html"
      },
      {
        name: "Amsterdam Excellence Scholarship",
        amount: "€25,000 per year",
        deadline: "January",
        eligibility: "International students with excellent academic records",
        link: "https://www.uva.nl/en/education/master-s/scholarships-tuition/scholarships-and-loans/amsterdam-excellence-scholarship/amsterdam-excellence-scholarship.html"
      }
    ]
  },
  
  // Adding more US colleges
  {
    id: "yale",
    countryId: "usa",
    name: "Yale University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png",
    description: "Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, it is the third-oldest institution of higher education in the United States and one of the most prestigious in the world.",
    ranking: 4,
    tuitionFee: "$59,950",
    acceptanceRate: "5.9%",
    website: "https://www.yale.edu/",
    scholarships: [
      {
        name: "Yale Need-Based Financial Aid",
        amount: "Varies based on need",
        deadline: "March 15",
        eligibility: "Based on financial need assessment",
        link: "https://finaid.yale.edu/costs-affordability/undergraduate-cost-attendance"
      },
      {
        name: "Yale International Student Scholarships",
        amount: "Full tuition to full cost of attendance",
        deadline: "January 2",
        eligibility: "International students with demonstrated need",
        link: "https://finaid.yale.edu/costs-affordability/affordability-international-students"
      }
    ]
  },
  {
    id: "columbia",
    countryId: "usa",
    name: "Columbia University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Columbia_University_shield.svg/1200px-Columbia_University_shield.svg.png",
    description: "Columbia University is a private Ivy League research university in New York City. Founded in 1754, it is one of the oldest institutions of higher education in the United States and known for its strong programs in journalism, business, and engineering.",
    ranking: 6,
    tuitionFee: "$61,850",
    acceptanceRate: "6.1%",
    website: "https://www.columbia.edu/",
    scholarships: [
      {
        name: "Columbia Need-Based Financial Aid",
        amount: "Full tuition for families earning under $60,000",
        deadline: "January 1",
        eligibility: "Based on financial need",
        link: "https://cc-seas.financialaid.columbia.edu/"
      },
      {
        name: "Columbia International Student Scholarships",
        amount: "Varies based on need",
        deadline: "January 1",
        eligibility: "International students with demonstrated need",
        link: "https://www.columbia.edu/content/financial-aid-international-students"
      }
    ]
  },
  {
    id: "princeton",
    countryId: "usa",
    name: "Princeton University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png",
    description: "Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746, it is known for its undergraduate focus, beautiful campus, and strong programs across all disciplines.",
    ranking: 5,
    tuitionFee: "$57,410",
    acceptanceRate: "5.8%",
    website: "https://www.princeton.edu/",
    scholarships: [
      {
        name: "Princeton Financial Aid Initiative",
        amount: "Free tuition for families earning under $100,000",
        deadline: "January 1",
        eligibility: "Based on family income and need",
        link: "https://admission.princeton.edu/how-apply/financial-aid"
      },
      {
        name: "International Student Aid",
        amount: "Full need met for all admitted students",
        deadline: "January 1",
        eligibility: "All international students",
        link: "https://admission.princeton.edu/how-apply/international-students"
      }
    ]
  },
  {
    id: "uchicago",
    countryId: "usa",
    name: "University of Chicago",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/1200px-University_of_Chicago_shield.svg.png",
    description: "The University of Chicago is a private research university in Chicago, Illinois. Known for its rigorous academic programs, the Core Curriculum, and contributions to economics and social sciences.",
    ranking: 8,
    tuitionFee: "$59,298",
    acceptanceRate: "7.4%",
    website: "https://www.uchicago.edu/",
    scholarships: [
      {
        name: "UChicago Promise",
        amount: "Free tuition for families earning under $125,000",
        deadline: "January 2",
        eligibility: "US citizens and permanent residents",
        link: "https://collegeadmissions.uchicago.edu/costs-aid/uchicago-promise"
      },
      {
        name: "International Student Aid",
        amount: "Varies based on need",
        deadline: "January 2",
        eligibility: "International students with demonstrated need",
        link: "https://collegeadmissions.uchicago.edu/costs-aid/international-students"
      }
    ]
  },
  {
    id: "caltech",
    countryId: "usa",
    name: "California Institute of Technology",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1200px-Seal_of_the_California_Institute_of_Technology.svg.png",
    description: "Caltech is a private research university in Pasadena, California. Known for its strength in science and engineering, with a very small student body and exceptional research opportunities.",
    ranking: 9,
    tuitionFee: "$58,680",
    acceptanceRate: "6.4%",
    website: "https://www.caltech.edu/",
    scholarships: [
      {
        name: "Caltech Need-Based Aid",
        amount: "Average award $54,000",
        deadline: "January 3",
        eligibility: "Based on financial need",
        link: "https://finaid.caltech.edu/"
      },
      {
        name: "International Student Financial Aid",
        amount: "Limited aid available",
        deadline: "January 3",
        eligibility: "International students with exceptional need",
        link: "https://finaid.caltech.edu/international-students"
      }
    ]
  },
  {
    id: "upenn",
    countryId: "usa",
    name: "University of Pennsylvania",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png",
    description: "The University of Pennsylvania is a private Ivy League research university in Philadelphia. Home to the prestigious Wharton School of Business and strong programs across all disciplines.",
    ranking: 12,
    tuitionFee: "$60,042",
    acceptanceRate: "8.1%",
    website: "https://www.upenn.edu/",
    scholarships: [
      {
        name: "Penn First Plus",
        amount: "Full cost of attendance for families earning under $75,000",
        deadline: "February 15",
        eligibility: "First-generation college students",
        link: "https://www.sfs.upenn.edu/undergraduate/penn-first-plus"
      },
      {
        name: "International Student Aid",
        amount: "Varies based on need",
        deadline: "February 15",
        eligibility: "International students with demonstrated need",
        link: "https://www.sfs.upenn.edu/undergraduate/international-students"
      }
    ]
  },
  {
    id: "dartmouth",
    countryId: "usa",
    name: "Dartmouth College",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dartmouth_College_shield.svg/1200px-Dartmouth_College_shield.svg.png",
    description: "Dartmouth College is a private Ivy League research university in Hanover, New Hampshire. Known for its strong alumni network, outdoor recreation opportunities, and quarter system.",
    ranking: 18,
    tuitionFee: "$59,458",
    acceptanceRate: "9.2%",
    website: "https://www.dartmouth.edu/",
    scholarships: [
      {
        name: "Dartmouth Financial Aid",
        amount: "Average grant $56,000",
        deadline: "February 1",
        eligibility: "Based on financial need",
        link: "https://admissions.dartmouth.edu/afford/financial-aid"
      },
      {
        name: "International Student Aid",
        amount: "Limited need-based aid",
        deadline: "February 1",
        eligibility: "International students with exceptional need",
        link: "https://admissions.dartmouth.edu/afford/international-students"
      }
    ]
  },
  {
    id: "northwestern",
    countryId: "usa",
    name: "Northwestern University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Northwestern_University_seal.svg/1200px-Northwestern_University_seal.svg.png",
    description: "Northwestern University is a private research university in Evanston, Illinois. Known for its journalism, engineering, business, and performing arts programs.",
    ranking: 14,
    tuitionFee: "$58,701",
    acceptanceRate: "10.7%",
    website: "https://www.northwestern.edu/",
    scholarships: [
      {
        name: "Northwestern Commitment",
        amount: "Full tuition for families earning under $75,000",
        deadline: "January 1",
        eligibility: "US citizens and permanent residents",
        link: "https://undergradaid.northwestern.edu/northwestern-commitment/"
      },
      {
        name: "International Student Aid",
        amount: "Limited need-based aid",
        deadline: "January 1",
        eligibility: "International students",
        link: "https://undergradaid.northwestern.edu/international-students/"
      }
    ]
  },
  {
    id: "duke",
    countryId: "usa",
    name: "Duke University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_University_seal.svg/1200px-Duke_University_seal.svg.png",
    description: "Duke University is a private research university in Durham, North Carolina. Known for its strong academic programs, beautiful campus, and successful athletics programs.",
    ranking: 13,
    tuitionFee: "$60,244",
    acceptanceRate: "10.0%",
    website: "https://www.duke.edu/",
    scholarships: [
      {
        name: "DukeEngage",
        amount: "Full funding for service learning programs",
        deadline: "Varies",
        eligibility: "All Duke students",
        link: "https://dukeengage.duke.edu/"
      },
      {
        name: "Robertson Scholars Program",
        amount: "Full tuition, room, board, and enrichment",
        deadline: "October 15",
        eligibility: "Exceptional leadership and service",
        link: "https://robertsonscholars.org/"
      }
    ]
  },
  {
    id: "brown",
    countryId: "usa",
    name: "Brown University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Brown_University_CoA.svg/1200px-Brown_University_CoA.svg.png",
    description: "Brown University is a private Ivy League research university in Providence, Rhode Island. Known for its open curriculum and strong liberal arts programs.",
    ranking: 20,
    tuitionFee: "$60,696",
    acceptanceRate: "9.3%",
    website: "https://www.brown.edu/",
    scholarships: [
      {
        name: "Brown Promise",
        amount: "Free tuition for families earning under $100,000",
        deadline: "January 5",
        eligibility: "Based on family income",
        link: "https://www.brown.edu/admission/undergraduate/explore/tuition-aid-scholarships"
      },
      {
        name: "International Student Aid",
        amount: "Limited need-based aid",
        deadline: "January 5",
        eligibility: "International students with exceptional need",
        link: "https://www.brown.edu/admission/undergraduate/explore/international-students"
      }
    ]
  },
  {
    id: "vanderbilt",
    countryId: "usa",
    name: "Vanderbilt University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Vanderbilt_University_seal.svg/1200px-Vanderbilt_University_seal.svg.png",
    description: "Vanderbilt University is a private research university in Nashville, Tennessee. Known for its strong academic programs, beautiful campus, and vibrant social life.",
    ranking: 17,
    tuitionFee: "$56,886",
    acceptanceRate: "11.6%",
    website: "https://www.vanderbilt.edu/",
    scholarships: [
      {
        name: "Opportunity Vanderbilt",
        amount: "Full demonstrated need met without loans",
        deadline: "January 1",
        eligibility: "All admitted students",
        link: "https://www.vanderbilt.edu/scholarships/"
      },
      {
        name: "Cornelius Vanderbilt Scholarship",
        amount: "Full tuition plus summer stipend",
        deadline: "December 1",
        eligibility: "Academic excellence and leadership",
        link: "https://www.vanderbilt.edu/scholarships/cornelius-vanderbilt/"
      }
    ]
  },
  {
    id: "cornell",
    countryId: "usa",
    name: "Cornell University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_coat_of_arms.svg/1200px-Cornell_University_coat_of_arms.svg.png",
    description: "Cornell University is a private and statutory Ivy League research university in Ithaca, New York. Known for its diverse academic offerings and strong programs in engineering, agriculture, and veterinary medicine.",
    ranking: 19,
    tuitionFee: "$59,316",
    acceptanceRate: "15.1%",
    website: "https://www.cornell.edu/",
    scholarships: [
      {
        name: "Cornell Commitment",
        amount: "Free tuition for families earning under $75,000",
        deadline: "February 15",
        eligibility: "Based on family income",
        link: "https://finaid.cornell.edu/cornell-commitment"
      },
      {
        name: "International Student Aid",
        amount: "Limited need-based aid",
        deadline: "February 15",
        eligibility: "International students with demonstrated need",
        link: "https://finaid.cornell.edu/international-students"
      }
    ]
  },
  {
    id: "rice",
    countryId: "usa",
    name: "Rice University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rice_University_seal.svg/1200px-Rice_University_seal.svg.png",
    description: "Rice University is a private research university in Houston, Texas. Known for its small size, residential college system, and strong programs in engineering and natural sciences.",
    ranking: 16,
    tuitionFee: "$52,070",
    acceptanceRate: "11.0%",
    website: "https://www.rice.edu/",
    scholarships: [
      {
        name: "Rice Investment",
        amount: "Free tuition for families earning under $130,000",
        deadline: "January 4",
        eligibility: "Based on family income",
        link: "https://financialaid.rice.edu/rice-investment"
      },
      {
        name: "Trustee Distinguished Scholarships",
        amount: "Full tuition",
        deadline: "December 1",
        eligibility: "Academic excellence and leadership",
        link: "https://financialaid.rice.edu/trustee-distinguished-scholarships"
      }
    ]
  },
  {
    id: "cmu",
    countryId: "usa",
    name: "Carnegie Mellon University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png",
    description: "Carnegie Mellon University is a private research university in Pittsburgh, Pennsylvania. Renowned for its programs in computer science, engineering, robotics, and fine arts.",
    ranking: 22,
    tuitionFee: "$58,924",
    acceptanceRate: "17.3%",
    website: "https://www.cmu.edu/",
    scholarships: [
      {
        name: "Carnegie Scholars Program",
        amount: "$5,000 - $10,000 per year",
        deadline: "January 1",
        eligibility: "Academic excellence and community service",
        link: "https://www.cmu.edu/finaid/scholarships/carnegie-scholars.html"
      },
      {
        name: "International Merit Scholarships",
        amount: "Varies",
        deadline: "January 1",
        eligibility: "Outstanding international students",
        link: "https://www.cmu.edu/finaid/international/"
      }
    ]
  },
  {
    id: "emory",
    countryId: "usa",
    name: "Emory University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Emory_University_seal.svg/1200px-Emory_University_seal.svg.png",
    description: "Emory University is a private research university in Atlanta, Georgia. Known for its liberal arts college, business school, and medical school.",
    ranking: 24,
    tuitionFee: "$56,068",
    acceptanceRate: "19.0%",
    website: "https://www.emory.edu/",
    scholarships: [
      {
        name: "Emory Advantage",
        amount: "Full demonstrated need without loans",
        deadline: "November 1 or January 1",
        eligibility: "Students from families earning under $100,000",
        link: "https://www.emory.edu/financial-aid/undergraduate/emory-advantage.html"
      },
      {
        name: "Emory Scholars Program",
        amount: "Full tuition to full cost of attendance",
        deadline: "November 1",
        eligibility: "Exceptional academic achievement and leadership",
        link: "https://www.emory.edu/financial-aid/undergraduate/emory-scholars.html"
      }
    ]
  },
  {
    id: "georgetown",
    countryId: "usa",
    name: "Georgetown University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Georgetown_University_seal.svg/1200px-Georgetown_University_seal.svg.png",
    description: "Georgetown University is a private research university in Washington, D.C. Known for its School of Foreign Service, law school, and political connections.",
    ranking: 25,
    tuitionFee: "$59,784",
    acceptanceRate: "17.0%",
    website: "https://www.georgetown.edu/",
    scholarships: [
      {
        name: "Georgetown Scholarship Program",
        amount: "Up to full tuition",
        deadline: "January 10",
        eligibility: "Based on financial need and merit",
        link: "https://finaid.georgetown.edu/undergraduate-aid/"
      },
      {
        name: "International Student Aid",
        amount: "Limited need-based aid",
        deadline: "January 10",
        eligibility: "International students with exceptional need",
        link: "https://finaid.georgetown.edu/undergraduate-aid/international-students/"
      }
    ]
  }
];

export const getCollegesByCountry = (countryId: string): StudyAbroadCollege[] => {
  return studyAbroadColleges.filter(college => college.countryId === countryId);
};
