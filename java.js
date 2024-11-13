/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
  };
  
  //SEO Related settings
  const seo = {
    title: "Deepak's Portfolio",
    description:
      "Data wizard transforming raw data into actionable insights! Master of Information Systems and Python, with a passion for uncovering stories hidden in the numbers. Let's make data-driven decisions with a smile!",
    og: {
      title: "Deepak Dhole's Portfolio",
      type: "website",
      url: "http://deepakdhole.info/",
    },
  };
  
  //Home Page
  const greeting = {
    title: "Deepak Dhole",
    logo_name: "Deepak",
    nickname: "he/him",
    subTitle:
      "Data wizard transforming raw data into actionable insights! Master of Information Systems and Python, with a passion for uncovering stories hidden in the numbers. Let's make data-driven decisions with a smile!",
    resumeLink:
      "https://drive.google.com/file/d/1NjnU6nY9L6YoBMhd392jSpe1d4QTQMh9/view?usp=sharing",
    portfolio_repository:
      "https://drive.google.com/file/d/1NjnU6nY9L6YoBMhd392jSpe1d4QTQMh9/view?usp=sharing",
    githubProfile: "https://github.com/deepakdhole777",
  };
  
  const socialMediaLinks = [
    {
      name: "Github",
      link: "https://github.com/deepakdhole777",
      fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
      backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/deepakdhole",
      fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
      backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    {
      name: "Gmail",
      link: "mailto:deepak.g.dhole@gmail.com",
      fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
      backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
  ];
  
  const skills = {
    data: [
      {
        title: "Data Science & AI",
        fileName: "DataScienceImg",
        skills: [
          "⚡ Designing dashboards to provide strategic insigts from consumer lending data",
          "⚡ Crafting robust models for diverse deep learning and statistical applications",
          "⚡ Experience of working with Computer Vision and NLP projects",
          "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        ],
        softwareSkills: [
          {
            skillName: "Tensorflow",
            fontAwesomeClassname: "logos-tensorflow",
            style: {
              backgroundColor: "transparent",
            },
          },
  
          {
            skillName: "PyTorch",
            fontAwesomeClassname: "logos-pytorch",
            style: {
              backgroundColor: "transparent",
            },
          },
          {
            skillName: "Python",
            fontAwesomeClassname: "ion-logo-python",
            style: {
              backgroundColor: "transparent",
              color: "#3776AB",
            },
          },
          {
            skillName: "Power Bi",
            imageSrc: "powerbi.png",
          },
        ],
      },
      {
        title: "Data Engineering & Pipelines",
        fileName: "FullStackImg",
        skills: [
          "⚡ Designing robust pipelines that extract, load, and transform data",
          "⚡ Achieving faster data transmission through techniques like micro-batching and parallel processing",
          "⚡ Securing data transfer using microservice-based architecture",
          "⚡ Simplifying database deployment using integration of Oracle Wallet and Jenkins",
        ],
        softwareSkills: [
          {
            skillName: "SQL Server",
            imageSrc: "mssql.png",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "Apache Spark",
            imageSrc: "spark.png",
            style: {
              color: "#E34F26",
            },
          },
          {
            skillName: "Jenkins",
            imageSrc: "jenkins.png",
            style: {
              color: "#1572B6",
            },
          },
        ],
      },
      {
        title: "Software Development",
        fileName: "DesignImg",
        skills: [
          "⚡ Designing and implementing web applications",
          "⚡ Experience working with micro-services architecture",
          "⚡ Implemented several data migration projects using Java and Spring Boot",
        ],
        softwareSkills: [
          {
            skillName: "Java",
            imageSrc: "java-logo.png",
            style: {
              color: "#FF2BC2",
            },
          },
          {
            skillName: "Oracle SQL",
            imageSrc: "oracle.svg",
            style: {
              color: "#F24E1E",
            },
          },
          {
            skillName: "R Programming Language",
            imageSrc: "R_logo.png",
            style: {
              color: "#FF7C00",
            },
          },
          {
            skillName: "Microsoft SQL Server",
            imageSrc: "mssql.png",
            style: {
              color: "#000000",
            },
          },
          {
            skillName: "InellIJ",
            imageSrc: "IntelliJ.png",
            style: {
              color: "#000000",
            },
          },
        ],
      },
      /*{
        title: "Database & Cloud Computing",
        fileName: "CloudInfraImg",
        skills: [
          "⚡ Experience working on multiple cloud platforms",
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
          "⚡ Defining intricate data models and devising advanced database designs",
          "⚡  Optimizing query performance through partitioning, bucketing, and indexing strategies",
        ],
        softwareSkills: [
          {
            skillName: "GCP",
            fontAwesomeClassname: "simple-icons:googlecloud",
            style: {
              color: "#4285F4",
            },
          },
          {
            skillName: "AWS",
            fontAwesomeClassname: "simple-icons:amazonaws",
            style: {
              color: "#FF9900",
            },
          },
          {
            skillName: "Azure",
            fontAwesomeClassname: "simple-icons:microsoftazure",
            style: {
              color: "#0089D6",
            },
          },
          {
            skillName: "Firebase",
            fontAwesomeClassname: "simple-icons:firebase",
            style: {
              color: "#FFCA28",
            },
          },
          {
            skillName: "PostgreSQL",
            fontAwesomeClassname: "simple-icons:postgresql",
            style: {
              color: "#336791",
            },
          },
          {
            skillName: "MongoDB",
            fontAwesomeClassname: "simple-icons:mongodb",
            style: {
              color: "#47A248",
            },
          },
          {
            skillName: "Docker",
            fontAwesomeClassname: "simple-icons:docker",
            style: {
              color: "#1488C6",
            },
          },
          {
            skillName: "Kubernetes",
            fontAwesomeClassname: "simple-icons:kubernetes",
            style: {
              color: "#326CE5",
            },
          },
        ],
      },*/
    ],
  };
  
  // Education Page
  const competitiveSites = {
    competitiveSites: [],
  };
  
  const degrees = {
    degrees: [
      {
        title: "University of Maryland, College Park",
        subtitle: "M.S. in Information Systems",
        logo_path: "umd.svg",
        alt_name: "UMD",
        duration: "2022 - 2023",
        descriptions: [
          "-- Rewarded Graduate Assistantship along with tuition waiver",
          "-- Coursework:",
          "⚡ Predictive Analytics and Data Mining",
          "⚡ Relational Database Mangement",
          "⚡ Data Visualization",
          "⚡ Python for Data Analytics and Data Visualization",
          "⚡ Project Mangement",
          "⚡ Management in Information Systems",
          "⚡ Applied Finance",
        ],
        website_link: "http://umd.edu",
      },
      {
        title: "Vishwakarma Institute of Technology, Pune",
        subtitle: "B.Tech. in Electronics Engineering",
        logo_path: "vit_logo.png",
        alt_name: "VIT Pune",
        duration: "2015 - 2019",
        descriptions: [
          "-- Honors in Robotics and Embedded Systems",
          "-- Coursework:",
          "⚡ Data Structures",
          "⚡ Image Processing",
          "⚡ Machine Learning",
          "⚡ Statistics",
          "⚡ Microprocessors",
        ],
        website_link: "http://vit.edu",
      },
    ],
  };
  
  // Experience Page
  const experience = {
    title: "Experience",
    subtitle: "",
    description:
      "🚀 Seasoned professional with expertise in developing scalable AI models, executing complex data engineering projects, and optimizing critical KPIs for impactful business outcomes.",
    header_image_path: "experience.svg",
    sections: [
      {
        title: "Work",
        work: true,
        experiences: [
          {
            title: "Business Intel Analyst",
            company: "Navy Federal Credit Union",
            company_url: "https://www.navyfederal.org/",
            logo_path: "nfcu.png",
            duration: "Feb 2024 - Present",
            location: "Vienna, Virginia",
            description: [
              "- Designed and maintained Litigation Dashboard using Power BI and underlying stored procedures using MSSQL server to track NFCU’s pending and completed Litigations.",
              "- Created deliquent start balances report for Credit Cards and Consumer Loans across various stages. This portfolio report and key takeaways are reported to Chief Lending Officer every start of the month.",
              "- Developed a utility using Python to track bugs which facilitates migration of data from MSSQL to ASL.",
            ],
            color: "#9b1578",
          },
          {
            title: "Summer Associate (Data Science)",
            company: "Navy Federal Credit Union",
            company_url: "https://www.navyfederal.org/",
            logo_path: "nfcu.png",
            duration: "May 2023 - December 2023",
            location: "Vienna, Virginia",
            description: [
              "- Oversaw and optimized 3 critical KPIs using MLflow and Databricks (PySpark), enhancing NFCU consumer financial assessments",
              "- Created corresponding Power BI dashboard based on the time series output of KPIs for strategic insights visualization",
              "- Trained a model for 'praise' detection from audio transcripts of MSRs and members using an MLflow-integrated feedback analysis system using NLP (Hugging Face, Python), achieving ~87% accuracy.",
            ],
            color: "#9b1578",
          },
          {
            title: "Graduate Assistant",
            company: "University of Maryland",
            company_url: "umd.edu",
            logo_path: "umd.svg",
            duration: "August 2022 - December 2023",
            location: "College Park, Maryland",
            description: [
              "- Designed and implemented a name-matching model utilizing Python and Natural Language Processing (NLP) for the integration of two databases in support of a Supply Chain Management initiative.",
              "- Conducted weekly in-person lectures for undergraduate students on Object-Oriented Programming using Python, unit-testing using Pytest, NLP (nltk), database ingestion using SQLite 3.",
            ],
            color: "#9b1578",
          },
          {
            title: "Senior Software Engineer",
            company: "HSBC Technology",
            company_url: "https://hsbc.com/",
            logo_path: "hsbc_logo.png",
            duration: "January 2021 - July 2022",
            location: "Pune, India",
            description: [
              "- Spearheaded AI-backed application development for extensive Optical Character Recognition of financial documents, enabling a 100% reduction in manual efforts for KYC automation, utilizing Python and NLP.",
              "- Designed a pre-processing pipeline for image cleaning to enhance the document snapshot for better accuracy of the OCR engine.",
              "- Created an automatic deployment pipeline using Jenkins for production including automated monitoring of health end-points",
              "- Maintained project documentation and conducted scrum ceremonies for effective project management and progress visiblity.",
            ],
            color: "#0879bf",
          },
          {
            title: "Software Engineer",
            company: "HSBC Technology",
            company_url: "https://hsbc.com/",
            logo_path: "hsbc_logo.png",
            duration: "July 2019 - December 2020",
            location: "Pune, India",
            description: [
              "- Engineered backend ETL services for data migration of a monolithic application into microservices-based suite using Java, web-services and SQL to facilitate secured dataflow of trading data to reduce incidents by ~70%.",
              "- Initiated and managed a project using JavaScript and Postgres (NoSQL) to build Q&A platform where people can ask varied questions from different technology stack to vendor applications or bespoke software used in HSBC.",
              "- Created database deployment pipeline using Oracle Wallet and Jenkins to avoid manual login on production servers to reduce PAR access by ~90% and efficient error-free database production release.",
            ],
            color: "#0879bf",
          },
          {
            title: "Machine Learning Intern",
            company: "Whirlpool Corporation",
            company_url: "https://www.whirlpool.com/",
            logo_path: "whirlppol.png",
            duration: "August 2018 - May 2019",
            location: "Pune, India",
            description: [
              "- Contributed to a Smart Refrigerator project, employing OpenCV, Python, and Keras to create a system for tracking food items entering and exiting using Mask Regional Convolutional Neural Network (RCNN) with ~80% accuracy.",
              "- Developed in-house semi-automatic image labeling tool to increase labelling speed by ~95%.",
            ],
            color: "#0879bf",
          },
          {
            title: "Robotics Engineer",
            company: "Trident Labs",
            company_url: "https://www.facebook.com/tridentlabs.vit/",
            logo_path: "tl.png",
            duration: "August 2016 - May 2017",
            location: "Pune, India",
            description: [
              "- Part of the programming team for the autonomus underwater vehicle (AUV) and organized workshops covering concepts of programming and robotics to raise funds for Singapore’s Autonomous Underwater Vehicle challenge",
              "- Helped AUV in locomotion and performing specified tasks using Computer Vision programmed on Raspberry Pi. (https://sauvc.org/2018/)",
            ],
            color: "#D83B01",
          },
        ],
      },
    ],
  };
  
  // Projects Page
  const projectsHeader = {
    title: "Projects",
    description:
      "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
    avatar_image_path: "projects_image.svg",
  };
  
  export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    experience,
    projectsHeader,
  };