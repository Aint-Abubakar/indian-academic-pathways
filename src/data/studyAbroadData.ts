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
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg"
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
  }
];

export const getCollegesByCountry = (countryId: string): StudyAbroadCollege[] => {
  return studyAbroadColleges.filter(college => college.countryId === countryId);
};
