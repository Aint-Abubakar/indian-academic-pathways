
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
  },
  // Adding 15 more AI and programming focused courses
  {
    id: "11",
    title: "Deep Learning Specialization",
    provider: "deeplearning.ai",
    category: "Artificial Intelligence",
    description: "Master deep learning fundamentals and build neural networks with leading AI practitioners.",
    duration: "3 months",
    certificate: true,
    link: "https://www.coursera.org/specializations/deep-learning",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    skills: ["Neural Networks", "Deep Learning", "TensorFlow", "Convolutional Networks", "Sequence Models"]
  },
  {
    id: "12",
    title: "AI For Everyone",
    provider: "deeplearning.ai",
    category: "Artificial Intelligence",
    description: "A non-technical course designed to help you understand AI technologies and how they can impact your organization.",
    duration: "4 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/ai-for-everyone",
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    skills: ["AI Concepts", "Machine Learning", "AI Strategy", "Data Ethics"]
  },
  {
    id: "13",
    title: "TensorFlow Developer Certificate",
    provider: "Google",
    category: "Artificial Intelligence",
    description: "Learn how to build and train neural networks using TensorFlow, an open-source machine learning framework.",
    duration: "Self-paced",
    certificate: true,
    link: "https://www.tensorflow.org/certificate",
    imageUrl: "https://images.unsplash.com/photo-1677442135146-98444abcbde2",
    skills: ["TensorFlow", "Machine Learning", "Neural Networks", "Deep Learning", "Python"]
  },
  {
    id: "14",
    title: "Python for Everybody",
    provider: "University of Michigan",
    category: "Programming",
    description: "Learn to program and analyze data with Python. No prior experience required.",
    duration: "8 weeks",
    certificate: true,
    link: "https://www.coursera.org/specializations/python",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    skills: ["Python", "Data Structures", "Web Scraping", "Databases", "Data Analysis"]
  },
  {
    id: "15",
    title: "React - The Complete Guide",
    provider: "Academind",
    category: "Web Development",
    description: "Dive into React, the JavaScript library for building user interfaces, and master modern React development.",
    duration: "40 hours",
    certificate: true,
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    skills: ["React", "JavaScript", "Redux", "Hooks", "React Router", "Next.js"]
  },
  {
    id: "16",
    title: "Natural Language Processing Specialization",
    provider: "deeplearning.ai",
    category: "Artificial Intelligence",
    description: "Learn how to process and analyze text data using NLP techniques and tools.",
    duration: "4 months",
    certificate: true,
    link: "https://www.coursera.org/specializations/natural-language-processing",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    skills: ["NLP", "Text Mining", "Sentiment Analysis", "Machine Translation", "Transformers"]
  },
  {
    id: "17",
    title: "Full Stack JavaScript Development",
    provider: "The Odin Project",
    category: "Web Development",
    description: "Learn full-stack web development with JavaScript, from frontend to backend technologies.",
    duration: "Self-paced",
    certificate: false,
    link: "https://www.theodinproject.com/paths/full-stack-javascript",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "RESTful APIs"]
  },
  {
    id: "18",
    title: "Practical Deep Learning for Coders",
    provider: "fast.ai",
    category: "Artificial Intelligence",
    description: "A course designed to get you started with deep learning using practical, hands-on applications.",
    duration: "7 weeks",
    certificate: false,
    link: "https://course.fast.ai/",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    skills: ["Deep Learning", "PyTorch", "Computer Vision", "NLP", "Practical Applications"]
  },
  {
    id: "19",
    title: "CS50's Introduction to Artificial Intelligence with Python",
    provider: "Harvard University",
    category: "Artificial Intelligence",
    description: "Explore the concepts and algorithms at the foundation of modern artificial intelligence.",
    duration: "7 weeks",
    certificate: true,
    link: "https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python",
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c",
    skills: ["AI Algorithms", "Python", "Search Algorithms", "Reinforcement Learning", "Neural Networks"]
  },
  {
    id: "20",
    title: "Flutter & Dart - The Complete Guide",
    provider: "Academind",
    category: "Mobile Development",
    description: "Learn Flutter and Dart to build iOS and Android apps with a single codebase.",
    duration: "45 hours",
    certificate: true,
    link: "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    skills: ["Flutter", "Dart", "Mobile App Development", "Cross-platform", "UI Design"]
  },
  {
    id: "21",
    title: "AWS Machine Learning Engineer Nanodegree",
    provider: "Udacity",
    category: "Artificial Intelligence",
    description: "Learn to deploy machine learning models and build end-to-end ML pipelines in AWS.",
    duration: "3 months",
    certificate: true,
    link: "https://www.udacity.com/course/aws-machine-learning-engineer-nanodegree--nd189",
    imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
    skills: ["AWS", "Machine Learning", "MLOps", "Cloud Computing", "Data Engineering"]
  },
  {
    id: "22",
    title: "Modern JavaScript From The Beginning",
    provider: "Brad Traversy",
    category: "Programming",
    description: "Learn modern JavaScript fundamentals from the beginning, no frameworks or libraries.",
    duration: "21 hours",
    certificate: true,
    link: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async JS", "Error Handling"]
  },
  {
    id: "23",
    title: "Reinforcement Learning Specialization",
    provider: "University of Alberta",
    category: "Artificial Intelligence",
    description: "Master the fundamentals of reinforcement learning, the technology behind AlphaGo and self-driving cars.",
    duration: "4 months",
    certificate: true,
    link: "https://www.coursera.org/specializations/reinforcement-learning",
    imageUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    skills: ["Reinforcement Learning", "Markov Decision Process", "Q-Learning", "Policy Gradients", "Deep RL"]
  },
  {
    id: "24",
    title: "Introduction to Quantum Computing",
    provider: "MIT",
    category: "Computer Science",
    description: "Learn the fundamentals of quantum computing, quantum algorithms, and their applications.",
    duration: "10 weeks",
    certificate: true,
    link: "https://www.edx.org/course/quantum-information-science-i-part-1",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    skills: ["Quantum Computing", "Quantum Mechanics", "Quantum Algorithms", "Quantum Information Theory"]
  },
  {
    id: "25",
    title: "Build a Modern Computer from First Principles",
    provider: "Hebrew University of Jerusalem",
    category: "Computer Science",
    description: "Build a modern computer system, from the ground up: from Nand to Tetris, in 12 steps.",
    duration: "6 weeks",
    certificate: true,
    link: "https://www.coursera.org/learn/build-a-computer",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    skills: ["Computer Architecture", "Hardware Design", "Logic Gates", "Assembly Language", "Operating Systems"]
  }
];
