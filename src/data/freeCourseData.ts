
export interface FreeCourse {
  id: string;
  title: string;
  provider: string;
  category: string;
  description: string;
  duration: string;
  certificate: boolean;
  link: string;
  imageUrl: string;
  skills: string[];
}

export const freeCourses: FreeCourse[] = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    provider: "Harvard University (CS50)",
    category: "Computer Science",
    description: "An introduction to the intellectual enterprises of computer science and the art of programming.",
    duration: "11 weeks",
    certificate: true,
    link: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
    imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    skills: ["Programming Fundamentals", "C", "Python", "SQL", "HTML", "JavaScript"]
  },
  {
    id: "2",
    title: "Machine Learning",
    provider: "Stanford University",
    category: "Data Science",
    description: "This course provides a broad introduction to machine learning, data mining, and statistical pattern recognition.",
    duration: "11 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/machine-learning",
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
    skills: ["Machine Learning", "Python", "Data Analysis", "Neural Networks"]
  },
  {
    id: "3",
    title: "The Science of Well-Being",
    provider: "Yale University",
    category: "Psychology",
    description: "Learn evidence-based strategies for becoming happier and building more productive habits.",
    duration: "10 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/the-science-of-well-being",
    imageUrl: "https://images.unsplash.com/photo-1551894116-f9b4fe184996",
    skills: ["Positive Psychology", "Mental Health", "Happiness", "Well-being"]
  },
  {
    id: "4",
    title: "Financial Markets",
    provider: "Yale University",
    category: "Finance",
    description: "An overview of the ideas, methods, and institutions that permit human society to manage risks and foster enterprise.",
    duration: "7 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/financial-markets-global",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    skills: ["Financial Markets", "Risk Management", "Investment", "Economic Principles"]
  },
  {
    id: "5",
    title: "Learning How to Learn",
    provider: "Deep Teaching Solutions",
    category: "Education",
    description: "Powerful mental tools to help you master tough subjects and learn effectively.",
    duration: "4 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/learning-how-to-learn",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    skills: ["Learning Techniques", "Memory", "Focused Learning", "Procrastination"]
  },
  {
    id: "6",
    title: "Web Development Bootcamp",
    provider: "freeCodeCamp",
    category: "Web Development",
    description: "A complete web development curriculum covering HTML, CSS, JavaScript, and modern frameworks.",
    duration: "Self-paced",
    certificate: true,
    link: "https://www.freecodecamp.org/",
    imageUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: "7",
    title: "English for Career Development",
    provider: "University of Pennsylvania",
    category: "Languages",
    description: "Learn professional English and improve your communication skills for the global workplace.",
    duration: "5 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/english-for-career-development",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db",
    skills: ["Business English", "Resume Writing", "Interview Skills", "Communication"]
  },
  {
    id: "8",
    title: "Introduction to Digital Photography",
    provider: "Alison",
    category: "Art & Design",
    description: "Learn the basics of digital photography, including camera functions, composition, and editing.",
    duration: "4-5 hours",
    certificate: true,
    link: "https://alison.com/course/introduction-to-digital-photography",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    skills: ["Photography", "Composition", "Camera Settings", "Photo Editing"]
  },
  {
    id: "9",
    title: "Data Science: R Basics",
    provider: "Harvard University",
    category: "Data Science",
    description: "Build a foundation in R and learn how to wrangle, analyze, and visualize data.",
    duration: "8 weeks",
    certificate: true,
    link: "https://www.edx.org/course/data-science-r-basics",
    imageUrl: "https://images.unsplash.com/photo-1543286386-2e659306cd6c",
    skills: ["R Programming", "Data Analysis", "Statistics", "Data Visualization"]
  },
  {
    id: "10",
    title: "Fundamentals of Graphic Design",
    provider: "CalArts",
    category: "Art & Design",
    description: "Introduction to the fundamental principles of graphic design and visual communication.",
    duration: "4 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/fundamentals-of-graphic-design",
    imageUrl: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9",
    skills: ["Design Principles", "Typography", "Color Theory", "Composition"]
  }
];
