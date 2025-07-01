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
    id: "yale",
    countryId: "usa",
    name: "Yale University",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "Yale University is a private Ivy League research university in New Haven, Connecticut. Founded in 1701, Yale is the third-oldest institution of higher education in the United States and one of the most prestigious universities in the world.",
    ranking: 4,
    tuitionFee: "$62,250",
    acceptanceRate: "4.6%",
    website: "https://www.yale.edu/",
    scholarships: [
      {
        name: "Need-Based Financial Aid",
        amount: "Varies",
        deadline: "March",
        eligibility: "Based on demonstrated financial need",
        link: "https://finaid.yale.edu/"
      },
      {
        name: "Yale World Fellows Program",
        amount: "Full fellowship",
        deadline: "February",
        eligibility: "Mid-career professionals",
        link: "https://worldfellows.yale.edu/"
      }
    ]
  },
  {
    id: "princeton",
    countryId: "usa",
    name: "Princeton University",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "Princeton University is a private Ivy League research university in Princeton, New Jersey. Founded in 1746, Princeton is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges chartered before the American Revolution.",
    ranking: 1,
    tuitionFee: "$57,410",
    acceptanceRate: "3.9%",
    website: "https://www.princeton.edu/",
    scholarships: [
      {
        name: "Princeton Financial Aid",
        amount: "Full need met",
        deadline: "January",
        eligibility: "All admitted students based on need",
        link: "https://finaid.princeton.edu/"
      },
      {
        name: "Princeton in Africa Fellowship",
        amount: "Full stipend",
        deadline: "February",
        eligibility: "Recent graduates",
        link: "https://piaf.princeton.edu/"
      }
    ]
  },
  {
    id: "columbia",
    countryId: "usa",
    name: "Columbia University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Columbia University is a private Ivy League research university in New York City. Established in 1754, Columbia is the oldest institution of higher learning in New York and the fifth-oldest in the United States.",
    ranking: 18,
    tuitionFee: "$63,530",
    acceptanceRate: "3.7%",
    website: "https://www.columbia.edu/",
    scholarships: [
      {
        name: "Columbia College Scholarship",
        amount: "Up to full tuition",
        deadline: "January",
        eligibility: "Based on academic merit and financial need",
        link: "https://cc.columbia.edu/preprofessional/scholarships"
      },
      {
        name: "International Students Scholarship",
        amount: "Varies",
        deadline: "January",
        eligibility: "International students with financial need",
        link: "https://studentaid.columbia.edu/how/international"
      }
    ]
  },
  {
    id: "uchicago",
    countryId: "usa",
    name: "University of Chicago",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "The University of Chicago is a private research university in Chicago, Illinois. Founded in 1890, the University of Chicago is known for its devotion to academic scholarship and research and the creation of several academic disciplines.",
    ranking: 6,
    tuitionFee: "$61,179",
    acceptanceRate: "6.2%",
    website: "https://www.uchicago.edu/",
    scholarships: [
      {
        name: "UChicago Promise",
        amount: "Full tuition",
        deadline: "January",
        eligibility: "Families earning less than $125,000",
        link: "https://collegeadmissions.uchicago.edu/afford/uchicago-promise"
      },
      {
        name: "Odyssey Scholarship",
        amount: "Full need met",
        deadline: "January",
        eligibility: "First-generation college students",
        link: "https://collegeadmissions.uchicago.edu/afford/odyssey-scholarship"
      }
    ]
  },
  {
    id: "upenn",
    countryId: "usa",
    name: "University of Pennsylvania",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Pennsylvania is a private Ivy League research university in Philadelphia, Pennsylvania. Founded in 1740, Penn is the fourth-oldest institution of higher education in the United States and one of the nine colonial colleges.",
    ranking: 8,
    tuitionFee: "$63,452",
    acceptanceRate: "5.7%",
    website: "https://www.upenn.edu/",
    scholarships: [
      {
        name: "Penn First Plus",
        amount: "Full aid package",
        deadline: "February",
        eligibility: "First-generation, low-income students",
        link: "https://www.upenn.edu/pennfirst/penn-first-plus"
      },
      {
        name: "Benjamin Franklin Scholars",
        amount: "Merit-based aid",
        deadline: "December",
        eligibility: "High-achieving students",
        link: "https://www.upenn.edu/pennfirst/scholarships"
      }
    ]
  },
  {
    id: "caltech",
    countryId: "usa",
    name: "California Institute of Technology (Caltech)",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "The California Institute of Technology is a private research university in Pasadena, California. Known for its strength in science and engineering, Caltech is one of the world's most prestigious institutions of technology.",
    ranking: 9,
    tuitionFee: "$60,864",
    acceptanceRate: "6.4%",
    website: "https://www.caltech.edu/",
    scholarships: [
      {
        name: "Caltech Need-Based Aid",
        amount: "Up to full cost",
        deadline: "February",
        eligibility: "Students with demonstrated financial need",
        link: "https://finaid.caltech.edu/"
      },
      {
        name: "Caltech Graduate Fellowships",
        amount: "Full tuition and stipend",
        deadline: "December",
        eligibility: "Graduate students in STEM fields",
        link: "https://www.gradoffice.caltech.edu/financialsupport"
      }
    ]
  },
  {
    id: "duke",
    countryId: "usa",
    name: "Duke University",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "Duke University is a private research university in Durham, North Carolina. Founded in 1838, Duke is known for its highly ranked programs in law, medicine, business, and engineering.",
    ranking: 10,
    tuitionFee: "$63,450",
    acceptanceRate: "6.3%",
    website: "https://duke.edu/",
    scholarships: [
      {
        name: "Robertson Scholars Leadership Program",
        amount: "Full tuition, room, and board",
        deadline: "December",
        eligibility: "Leadership potential and academic excellence",
        link: "https://robertsonscholars.org/"
      },
      {
        name: "Duke University Scholarship",
        amount: "Up to full tuition",
        deadline: "December",
        eligibility: "Merit-based for exceptional students",
        link: "https://financialaid.duke.edu/undergraduate-applicants/merit-scholarships"
      }
    ]
  },
  {
    id: "northwestern",
    countryId: "usa",
    name: "Northwestern University",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "Northwestern University is a private research university in Evanston, Illinois. Founded in 1851, Northwestern is known for its highly ranked programs in journalism, business, law, and medicine.",
    ranking: 11,
    tuitionFee: "$63,468",
    acceptanceRate: "7.2%",
    website: "https://www.northwestern.edu/",
    scholarships: [
      {
        name: "Northwestern Scholarship",
        amount: "Up to full tuition",
        deadline: "January",
        eligibility: "Need-based financial aid",
        link: "https://undergradaid.northwestern.edu/"
      },
      {
        name: "Good Neighbor Great University Scholarship",
        amount: "Full tuition",
        deadline: "December",
        eligibility: "Chicago Public Schools graduates",
        link: "https://undergradaid.northwestern.edu/types-of-aid/scholarships-and-grants/good-neighbor-great-university/"
      }
    ]
  },
  {
    id: "dartmouth",
    countryId: "usa",
    name: "Dartmouth College",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "Dartmouth College is a private Ivy League research university in Hanover, New Hampshire. Founded in 1769, Dartmouth is known for its strong alumni network, outdoor recreation opportunities, and liberal arts education.",
    ranking: 12,
    tuitionFee: "$62,430",
    acceptanceRate: "6.2%",
    website: "https://dartmouth.edu/",
    scholarships: [
      {
        name: "Dartmouth Scholarship",
        amount: "Up to full cost",
        deadline: "February",
        eligibility: "Need-based financial aid",
        link: "https://financialaid.dartmouth.edu/"
      },
      {
        name: "Dartmouth Bound",
        amount: "Full financial aid package",
        deadline: "February",
        eligibility: "Students from specific backgrounds",
        link: "https://admissions.dartmouth.edu/afford/dartmouth-bound"
      }
    ]
  },
  {
    id: "brown",
    countryId: "usa",
    name: "Brown University",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "Brown University is a private Ivy League research university in Providence, Rhode Island. Founded in 1764, Brown is known for its open curriculum and strong programs in the liberal arts and sciences.",
    ranking: 13,
    tuitionFee: "$62,680",
    acceptanceRate: "5.4%",
    website: "https://www.brown.edu/",
    scholarships: [
      {
        name: "Brown Scholarship",
        amount: "Up to full cost",
        deadline: "February",
        eligibility: "Need-based financial aid",
        link: "https://www.brown.edu/admission/undergraduate/afford/aid-programs"
      },
      {
        name: "Sidney E. Frank Scholarship",
        amount: "Full tuition and expenses",
        deadline: "December",
        eligibility: "First-generation college students",
        link: "https://www.brown.edu/admission/undergraduate/afford/frank-scholarship"
      }
    ]
  },
  {
    id: "cornell",
    countryId: "usa",
    name: "Cornell University",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "Cornell University is a private Ivy League statutory land-grant research university in Ithaca, New York. Founded in 1865, Cornell is known for its highly ranked programs in engineering, agriculture, business, and veterinary medicine.",
    ranking: 17,
    tuitionFee: "$63,200",
    acceptanceRate: "8.7%",
    website: "https://www.cornell.edu/",
    scholarships: [
      {
        name: "Cornell Commitment",
        amount: "Full aid for families earning <$75K",
        deadline: "February",
        eligibility: "Students from low-income families",
        link: "https://finaid.cornell.edu/apply/cornell-commitment"
      },
      {
        name: "Cornell Presidential Research Scholars",
        amount: "$4,000 research funding",
        deadline: "February",
        eligibility: "High-achieving undergraduate researchers",
        link: "https://cprs.cornell.edu/"
      }
    ]
  },
  {
    id: "rice",
    countryId: "usa",
    name: "Rice University",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "Rice University is a private research university in Houston, Texas. Known for its applied science programs, highly selective admissions, and collegiate system, Rice consistently ranks among the top universities in the United States.",
    ranking: 15,
    tuitionFee: "$54,960",
    acceptanceRate: "8.7%",
    website: "https://www.rice.edu/",
    scholarships: [
      {
        name: "Rice Investment",
        amount: "Free tuition for families earning <$200K",
        deadline: "January",
        eligibility: "Students from middle and low-income families",
        link: "https://financialaid.rice.edu/rice-investment"
      },
      {
        name: "Century Scholars Program",
        amount: "Full tuition and fees",
        deadline: "December",
        eligibility: "Outstanding students from Texas",
        link: "https://financialaid.rice.edu/types-aid/scholarships-and-grants/century-scholars"
      }
    ]
  },
  {
    id: "vanderbilt",
    countryId: "usa",
    name: "Vanderbilt University",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Vanderbilt University is a private research university in Nashville, Tennessee. Founded in 1873, Vanderbilt is known for its strong programs in education, law, medicine, and music.",
    ranking: 18,
    tuitionFee: "$58,130",
    acceptanceRate: "6.7%",
    website: "https://www.vanderbilt.edu/",
    scholarships: [
      {
        name: "Opportunity Vanderbilt",
        amount: "Full need met without loans",
        deadline: "January",
        eligibility: "Students with demonstrated financial need",
        link: "https://www.vanderbilt.edu/financialaid/opportunity-vanderbilt/"
      },
      {
        name: "Cornelius Vanderbilt Scholarship",
        amount: "Full tuition plus stipend",
        deadline: "December",
        eligibility: "Merit-based for exceptional students",
        link: "https://admissions.vanderbilt.edu/merit/"
      }
    ]
  },
  {
    id: "notre-dame",
    countryId: "usa",
    name: "University of Notre Dame",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Notre Dame is a private Catholic research university in Notre Dame, Indiana. Founded in 1842, Notre Dame is known for its strong alumni network, athletics program, and commitment to undergraduate education.",
    ranking: 20,
    tuitionFee: "$59,794",
    acceptanceRate: "15.8%",
    website: "https://www.nd.edu/",
    scholarships: [
      {
        name: "Notre Dame Scholarship",
        amount: "Up to full tuition",
        deadline: "January",
        eligibility: "Need-based and merit-based aid",
        link: "https://financialaid.nd.edu/"
      },
      {
        name: "Hesburgh-Yusko Scholars Program",
        amount: "Full tuition and enrichment",
        deadline: "November",
        eligibility: "Students committed to social justice",
        link: "https://admissions.nd.edu/apply/hesburgh-yusko-scholars/"
      }
    ]
  },
  {
    id: "ucla",
    countryId: "usa",
    name: "University of California, Los Angeles (UCLA)",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of California, Los Angeles is a public land-grant research university in Los Angeles, California. UCLA is considered one of the most prestigious public universities in the United States.",
    ranking: 21,
    tuitionFee: "$46,326 (out-of-state)",
    acceptanceRate: "10.8%",
    website: "https://www.ucla.edu/",
    scholarships: [
      {
        name: "Regents Scholarship",
        amount: "Up to full cost of attendance",
        deadline: "November",
        eligibility: "Outstanding academic achievement",
        link: "https://www.ucla.edu/admission/undergraduate-admission/scholarships/regents-scholarship"
      },
      {
        name: "Alumni Scholarship",
        amount: "$4,000 - $20,000",
        deadline: "December",
        eligibility: "Merit-based for exceptional students",
        link: "https://www.uclaalumni.net/scholarships/"
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
    id: "imperial",
    countryId: "uk",
    name: "Imperial College London",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "Imperial College London is a public research university in London, England. Known for its focus on science, engineering, medicine, and business, it consistently ranks among the world's top universities.",
    ranking: 8,
    tuitionFee: "£32,000 - £45,000",
    acceptanceRate: "14%",
    website: "https://www.imperial.ac.uk/",
    scholarships: [
      {
        name: "President's PhD Scholarships",
        amount: "Full tuition and stipend",
        deadline: "December",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.imperial.ac.uk/study/pg/fees-and-funding/scholarships/presidents-phd-scholarships/"
      },
      {
        name: "Imperial College Scholarships",
        amount: "£5,000 - £10,000",
        deadline: "March",
        eligibility: "International students with academic excellence",
        link: "https://www.imperial.ac.uk/study/fees-and-funding/postgraduate-taught/scholarships/"
      }
    ]
  },
  {
    id: "ucl",
    countryId: "uk",
    name: "University College London (UCL)",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "University College London is a public research university in London, England. It is a member institution of the federal University of London and is the second-largest university in the UK by total enrollment.",
    ranking: 10,
    tuitionFee: "£24,000 - £38,000",
    acceptanceRate: "48%",
    website: "https://www.ucl.ac.uk/",
    scholarships: [
      {
        name: "UCL Global Masters Scholarship",
        amount: "£15,000",
        deadline: "March",
        eligibility: "International students applying for Master's programs",
        link: "https://www.ucl.ac.uk/scholarships/ucl-global-masters-scholarship"
      },
      {
        name: "Denys Holland Scholarship",
        amount: "£9,000 per year",
        deadline: "May",
        eligibility: "Students with financial need and academic merit",
        link: "https://www.ucl.ac.uk/scholarships/denys-holland-scholarship"
      }
    ]
  },
  {
    id: "lse",
    countryId: "uk",
    name: "London School of Economics (LSE)",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "The London School of Economics and Political Science is a public research university in London, England. LSE is a specialist university with an international intake and a global reach, focusing on social sciences.",
    ranking: 49,
    tuitionFee: "£22,430 - £34,200",
    acceptanceRate: "8.9%",
    website: "https://www.lse.ac.uk/",
    scholarships: [
      {
        name: "LSE Graduate Support Scheme",
        amount: "Up to £18,000",
        deadline: "April",
        eligibility: "Home and EU students with financial need",
        link: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/Graduate-Support-Scheme"
      },
      {
        name: "International Excellence Awards",
        amount: "£25,000",
        deadline: "April",
        eligibility: "Outstanding international students",
        link: "https://www.lse.ac.uk/study-at-lse/Graduate/fees-and-funding/scholarships/international-excellence-awards"
      }
    ]
  },
  {
    id: "kings",
    countryId: "uk",
    name: "King's College London",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "King's College London is a public research university located in London, England. Founded in 1829, King's is one of the oldest universities in England and a founding constituent college of the University of London.",
    ranking: 40,
    tuitionFee: "£19,740 - £45,600",
    acceptanceRate: "13%",
    website: "https://www.kcl.ac.uk/",
    scholarships: [
      {
        name: "King's International Scholarships",
        amount: "£10,000",
        deadline: "April",
        eligibility: "International students with academic excellence",
        link: "https://www.kcl.ac.uk/study/funding/kings-international-scholarships"
      },
      {
        name: "Desmond Tutu Scholarship",
        amount: "Full tuition and living expenses",
        deadline: "January",
        eligibility: "Students from developing countries",
        link: "https://www.kcl.ac.uk/study/funding/desmond-tutu-scholarship"
      }
    ]
  },
  {
    id: "edinburgh",
    countryId: "uk",
    name: "University of Edinburgh",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Edinburgh is a public research university based in Edinburgh, Scotland. Founded in 1583, it is the sixth-oldest university in continuous operation in the English-speaking world.",
    ranking: 22,
    tuitionFee: "£23,100 - £34,800",
    acceptanceRate: "40%",
    website: "https://www.ed.ac.uk/",
    scholarships: [
      {
        name: "Edinburgh Global Research Scholarship",
        amount: "Full tuition and stipend",
        deadline: "February",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.ed.ac.uk/studying/postgraduate/finances/funding/university-scholarships/global-research"
      },
      {
        name: "Principal's Career Development PhD Scholarship",
        amount: "Full tuition and stipend",
        deadline: "December",
        eligibility: "Early career researchers",
        link: "https://www.ed.ac.uk/studying/postgraduate/finances/funding/university-scholarships/principals-career-development"
      }
    ]
  },
  {
    id: "manchester",
    countryId: "uk",
    name: "University of Manchester",
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
    description: "The University of Manchester is a public research university in Manchester, England. Formed in 2004 by the merger of the University of Manchester Institute of Science and Technology and the Victoria University of Manchester.",
    ranking: 28,
    tuitionFee: "£20,000 - £47,000",
    acceptanceRate: "56%",
    website: "https://www.manchester.ac.uk/",
    scholarships: [
      {
        name: "Manchester Global Masters Scholarship",
        amount: "£5,000",
        deadline: "June",
        eligibility: "International students with academic excellence",
        link: "https://www.manchester.ac.uk/study/masters/funding/scholarships/manchester-global-masters-scholarship/"
      },
      {
        name: "President's Doctoral Scholar Award",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.manchester.ac.uk/study/postgraduate-research/funding/presidents-doctoral-scholar-award/"
      }
    ]
  },
  {
    id: "bristol",
    countryId: "uk",
    name: "University of Bristol",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Bristol is a red brick Russell Group research university in Bristol, England. It received its royal charter in 1909, although it can trace its roots to a Merchant Venturers' school founded in 1595.",
    ranking: 55,
    tuitionFee: "£20,100 - £24,700",
    acceptanceRate: "66%",
    website: "https://www.bristol.ac.uk/",
    scholarships: [
      {
        name: "Think Big Scholarships",
        amount: "£6,500 - £20,000",
        deadline: "March",
        eligibility: "International students with academic excellence",
        link: "https://www.bristol.ac.uk/fees-funding/awards/think-big-scholarships/"
      },
      {
        name: "Global Economics Postgraduate Scholarship",
        amount: "£2,000",
        deadline: "July",
        eligibility: "International students studying Economics",
        link: "https://www.bristol.ac.uk/fees-funding/awards/global-economics/"
      }
    ]
  },
  {
    id: "warwick",
    countryId: "uk",
    name: "University of Warwick",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of Warwick is a public research university on the outskirts of Coventry between the West Midlands and Warwickshire, England. The university was founded in 1965 as part of governmental efforts to expand higher education.",
    ranking: 67,
    tuitionFee: "£20,210 - £45,950",
    acceptanceRate: "56%",
    website: "https://warwick.ac.uk/",
    scholarships: [
      {
        name: "Warwick Chancellor's International Scholarships",
        amount: "Full tuition fees",
        deadline: "January",
        eligibility: "Outstanding international students",
        link: "https://warwick.ac.uk/services/dc/schols_fund/scholarships_and_funding/chancellorsint/"
      },
      {
        name: "Warwick Business School Scholarships",
        amount: "Up to £25,000",
        deadline: "April",
        eligibility: "Students applying to WBS programs",
        link: "https://www.wbs.ac.uk/about/fees-funding/scholarships/"
      }
    ]
  },
  {
    id: "glasgow",
    countryId: "uk",
    name: "University of Glasgow",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of Glasgow is a public research university in Glasgow, Scotland. Founded by papal bull in 1451, it is the fourth-oldest university in the English-speaking world and one of Scotland's four ancient universities.",
    ranking: 81,
    tuitionFee: "£19,350 - £25,650",
    acceptanceRate: "77%",
    website: "https://www.gla.ac.uk/",
    scholarships: [
      {
        name: "International Leadership Scholarship",
        amount: "£10,000",
        deadline: "June",
        eligibility: "International students with leadership potential",
        link: "https://www.gla.ac.uk/scholarships/internationaleadershipscholarship/"
      },
      {
        name: "Postgraduate Excellence Scholarship",
        amount: "£5,000",
        deadline: "June",
        eligibility: "International postgraduate students",
        link: "https://www.gla.ac.uk/scholarships/postgraduateexcellencescholarship/"
      }
    ]
  },
  {
    id: "birmingham",
    countryId: "uk",
    name: "University of Birmingham",
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
    description: "The University of Birmingham is a public research university in Birmingham, England. It received its royal charter in 1900 as a successor to Queen's College, Birmingham and Mason Science College, making it the first English civic university.",
    ranking: 84,
    tuitionFee: "£19,740 - £23,310",
    acceptanceRate: "85%",
    website: "https://www.birmingham.ac.uk/",
    scholarships: [
      {
        name: "Global Masters Scholarships",
        amount: "£2,000 - £10,000",
        deadline: "June",
        eligibility: "International students with academic merit",
        link: "https://www.birmingham.ac.uk/international/fees-and-funding/Global-Masters-Scholarships.aspx"
      },
      {
        name: "Birmingham Business School Scholarships",
        amount: "Up to £10,000",
        deadline: "April",
        eligibility: "Students applying to Business School programs",
        link: "https://www.birmingham.ac.uk/schools/business/courses/scholarships/index.aspx"
      }
    ]
  },
  {
    id: "leeds",
    countryId: "uk",
    name: "University of Leeds",
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&h=600&fit=crop",
    description: "The University of Leeds is a public research university in Leeds, West Yorkshire, England. It was established in 1874 as the Yorkshire College of Science and in 1884 it merged with the Leeds School of Medicine.",
    ranking: 86,
    tuitionFee: "£20,250 - £24,500",
    acceptanceRate: "77%",
    website: "https://www.leeds.ac.uk/",
    scholarships: [
      {
        name: "Leeds International Study Centre Scholarship",
        amount: "£5,000",
        deadline: "June",
        eligibility: "International students progressing to Leeds",
        link: "https://www.leeds.ac.uk/international-study-centre/progression-scholarships"
      },
      {
        name: "Think Leeds Scholarships",
        amount: "£2,500 - £5,000",
        deadline: "June",
        eligibility: "International students with academic excellence",
        link: "https://www.leeds.ac.uk/international/scholarships-finance/think-leeds-scholarships"
      }
    ]
  },
  {
    id: "nottingham",
    countryId: "uk",
    name: "University of Nottingham",
    imageUrl: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
    description: "The University of Nottingham is a public research university in Nottingham, England. It was founded as University College Nottingham in 1881, and was granted a royal charter in 1948.",
    ranking: 100,
    tuitionFee: "£20,000 - £26,500",
    acceptanceRate: "83%",
    website: "https://www.nottingham.ac.uk/",
    scholarships: [
      {
        name: "International Office Excellence Scholarship",
        amount: "£4,000",
        deadline: "April",
        eligibility: "International students with high academic achievement",
        link: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/masters-scholarships.aspx"
      },
      {
        name: "Developing Solutions Scholarships",
        amount: "Full tuition and living expenses",
        deadline: "April",
        eligibility: "Students from Africa and India",
        link: "https://www.nottingham.ac.uk/studywithus/international-applicants/scholarships-fees-and-finance/scholarships/developing-solutions-scholarships.aspx"
      }
    ]
  },
  {
    id: "sheffield",
    countryId: "uk",
    name: "University of Sheffield",
    imageUrl: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop",
    description: "The University of Sheffield is a public research university in Sheffield, South Yorkshire, England. Its history traces back to the foundation of Sheffield Medical School in 1828, Firth College in 1879, and Sheffield Technical School in 1884.",
    ranking: 104,
    tuitionFee: "£19,450 - £24,450",
    acceptanceRate: "84%",
    website: "https://www.sheffield.ac.uk/",
    scholarships: [
      {
        name: "International Merit Postgraduate Scholarship",
        amount: "£2,500",
        deadline: "June",
        eligibility: "International students with academic merit",
        link: "https://www.sheffield.ac.uk/international/money-and-funding/scholarships/postgraduate"
      },
      {
        name: "Faculty PhD Scholarships",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.sheffield.ac.uk/postgraduate/research/scholarships"
      }
    ]
  },
  {
    id: "st-andrews",
    countryId: "uk",
    name: "University of St Andrews",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    description: "The University of St Andrews is a public university in St Andrews, Fife, Scotland. It is the oldest of the four ancient universities of Scotland and the third oldest university in the English-speaking world, founded in 1413.",
    ranking: 95,
    tuitionFee: "£20,370 - £30,160",
    acceptanceRate: "8.35%",
    website: "https://www.st-andrews.ac.uk/",
    scholarships: [
      {
        name: "St Andrews Scholarships for Excellence",
        amount: "£8,000",
        deadline: "March",
        eligibility: "International students with outstanding academic records",
        link: "https://www.st-andrews.ac.uk/study/fees-and-funding/undergraduate/scholarships/"
      },
      {
        name: "Gateway to Research Scholarship",
        amount: "Full tuition and stipend",
        deadline: "February",
        eligibility: "Students from underrepresented countries",
        link: "https://www.st-andrews.ac.uk/study/fees-and-funding/postgraduate/scholarships/gateway-to-research/"
      }
    ]
  },
  {
    id: "southampton",
    countryId: "uk",
    name: "University of Southampton",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    description: "The University of Southampton is a public research university in Southampton, England. Southampton is a founding member of the Russell Group of research-intensive universities in the United Kingdom.",
    ranking: 108,
    tuitionFee: "£19,300 - £22,760",
    acceptanceRate: "84%",
    website: "https://www.southampton.ac.uk/",
    scholarships: [
      {
        name: "Vice-Chancellor's International Scholarship",
        amount: "£3,000",
        deadline: "July",
        eligibility: "International students with academic excellence",
        link: "https://www.southampton.ac.uk/study/fees-funding/scholarships/vice-chancellors-international-scholarship.page"
      },
      {
        name: "Presidential Research Scholarship",
        amount: "Full tuition and stipend",
        deadline: "January",
        eligibility: "Outstanding PhD candidates",
        link: "https://www.southampton.ac.uk/study/postgraduate-research/funding-fees/presidential-research-scholarships.page"
      }
    ]
  }
];

export const getCollegesByCountry = (countryId: string): StudyAbroadCollege[] => {
  return studyAbroadColleges.filter(college => college.countryId === countryId);
};
