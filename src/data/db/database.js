import Mock from "../mock";

const database = {
  information: {
    name: "Edoardo Manieri",
    aboutContent:
      " I am a passionate Software Engineer with experience in Python and Java",
    age: 25,
    phone: "",
    nationality: "Italian",
    language: "English, Italian",
    email: "edoardomanieri@gmail.com",
    address: "London, UK",
    hobbies: "Football, Calisthenics, Programming",
    freelanceStatus: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/edoardomanieri/",
      dribbble: "",
      github: "https://github.com/edoardomanieri",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/foto.jpeg",
    aboutImageLg: "/images/foto.jpeg",
    cvfile: "/files/Edoardo_Manieri_Resume.pdf",
  },
  services: [
    {
      title: "Software Engineering",
      icon: "stackoverflow",
      details:
        "Experience in different Software Engineer roles and side-projects. Proficient in Python, Javascript and Java, currently employed as a Backend Engineer (Django)",
    },
    {
      title: "Data Engineering",
      icon: "database",
      details:
        "Previous working experiennce in Data Engineer, working with technologies like Python, SQL, Spark, Hadoop, Hive, Hbase, HDFS.",
    },
    {
      title: "Machine Learning",
      icon: "library",
      details:
        "Master's in Data Science and passionate about Machine Learning. Working experience in different roles using Python and its data science library stack: pandas, numpy, sklearn, scipy, matplotlib, Keras",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "Python",
      value: 95,
    },
    {
      title: "Django",
      value: 95,
    },
    {
      title: "Postgres",
      value: 95,
    },
    {
      title: "Java",
      value: 90,
    },
    {
      title: "SQL",
      value: 70,
    },
    {
      title: "C",
      value: 85,
    },
    {
      title: "Bash",
      value: 80,
    },
    {
      title: "Google Cloud Platform",
      value: 65,
    },
    {
      title: "Hadoop Ecosystem",
      value: 65,
    },
    {
      title: "HTML, CSS, Javascript",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "BetterPass",
      subtitle: "Password Manager WebApp",
      imageUrl: "/images/safeapp.jpg",
      largeImageUrl: ["/images/safeapp.jpg"],
      url: "https://github.com/edoardomanieri/password-manager",
    },
    {
      id: 2,
      title: "Car Recognition App",
      subtitle:
        "App able to predict make and model of European cars from images",
      imageUrl: "/images/car.jpg",
      largeImageUrl: ["/images/car.jpg"],
      url: "https://github.com/Edoardopericoli/car-recognition-app",
    },
    {
      id: 3,
      title: "Parliament Network",
      subtitle: "Identify latent networks inside the italian parliament",
      imageUrl: "/images/network.jpg",
      largeImageUrl: ["/images/network.jpg"],
      url: "https://github.com/edoardomanieri/parliament-network",
    },
    {
      id: 4,
      title: "Soccer Bet Bot",
      subtitle:
        "Bot that provides live outcome predictions on football matches",
      imageUrl: "/images/betbot.jpg",
      largeImageUrl: ["/images/betbot.jpg"],
      url: "https://github.com/edoardomanieri/soccer-bet-bot",
    },
    {
      id: 5,
      title: "Reinforcement Learning Library",
      subtitle: "Implementation fo some reinforcement learning algorithms",
      imageUrl: "/images/robot.jpg",
      largeImageUrl: ["/images/robot.jpg"],
      url: "https://github.com/edoardomanieri/reinforcement-learning-lib",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Backend Engineer",
        company: "iwoca",
        details: [
          "Implementing and mantaining the internal facing API to iwoca website.",
          "Implementing and mantaining external API to allow partners to integrate with our services.",
          "implementing webhook framework in order to send information to partners.",
          "Tech stack: Python (Django), Postgres.",
        ],
      },
      {
        id: 2,
        year: "2020 - 2021",
        position: "Data Engineer",
        company: "Lloyds Banking Group",
        details: [
          "Retrieving, processing and structuring data to improve the quality of the modeling phase.",
          "Implementing and maintaining the Hadoop data infrastructure for mortgage data using Spark, Python.",
        ],
      },
      {
        id: 3,
        year: "2020 - 2020",
        position: "Software Engineer Intern",
        company: "Goldman Sachs International",
        details: [
          "Implemented a rule engine to automate event handling using Java, Spring and Kafka.",
        ],
      },
      {
        id: 4,
        year: "2019 - 2020",
        position: "Machine Learning Engineer",
        company: "SmartFAB",
        details: [
          "Developed an AI-based software aimed at performing automate analytics for the manufacturing industry.",
          "Designed, implemented and evaluated machine learning pipelines in Python.",
        ],
      },
      {
        id: 5,
        year: "2019 - 2019",
        position: "Machine Learning Intern",
        company: "MindIT Solutions",
        details: [
          "Evaluated and implemented different Deep Reinforcement Learning algorithms such as A2C, A3C, DQN on OpenAI Gym environments using numpy, pandas, gym, Keras (Python).",
          "Implemented a Deep Reinforcement Learning model on a custom environment in order to optimize the work process of a manufacturing company.",
        ],
      },
      {
        id: 6,
        year: "2018 - 2018",
        position: "Database Analyst Intern",
        company: "AEA s.r.l., Loccioni Group",
        details: [
          "Evaluated a database migration from SQLServer to MongoDB by replicating the entire SQLServer database on a MongoDB instance and by developing a performance test software using C#, Java, SQL.",
          "Implemented a system that guarantees high performances on queries on the most recent period and that also allows long-term queries.",
        ],
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2020",
        graduation: "MSc Data Science",
        university: "Bocconi University, Grade: 110 cum laude/110",
        details: [
          "Selected as one of the five students from other Italian universities.",
          "Relevant coursework: Machine Learning I, Machine Learning II, Computer Programming and Database Systems, Statistics and Probability, Optimization",
          "Thesis work: Bayesian Learning of Stochastic Block Structures in Network Data via Pitman-Yor Processes",
        ],
      },
      {
        id: 2,
        year: "2015 - 2018",
        graduation: "BEng Computer Engineering",
        university: "University of Bologna, Grade: 110 cum laude/110",
        details: [
          "Merit Scholarship Winner, ranking in the top 30 engineering students (2017)",
          "Relevant coursework: Programming I, Programming II, Operating Systems, Distributed Systems, Database Systems, System Administration, Mathematical Analisys I, Mathematical Analisys II",
        ],
      },
    ],
    additionalExperience: [
      {
        id: 1,
        year: "2019 - Present",
        graduation: "LeadTheFuture",
        university: "Mentee",
        details: [
          "Among the few Italian students selected to be mentees for LeadTheFuture, a leading mentorship non-profit organization for students in STEM. LeadTheFuture empowers top-performing students to achieve their goals by giving them one-on-one guidance from high-impact mentors coming from the world’s leading STEM innovation hubs such as Silicon Valley.",
        ],
      },
      {
        id: 2,
        year: "2019 - 2020",
        graduation: "Bocconi Students for Data Science",
        university: "Co-Founder",
        details: [
          "Student association aimed at building a community of people interested in Artificial Intelligence and Data Science.",
        ],
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: [""],
    emailAddress: ["edoardomanieri@gmail.com"],
    address: "London, United Kingdom",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
