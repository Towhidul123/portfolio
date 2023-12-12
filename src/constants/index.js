import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Anime Lover",
      icon: mobile,
    },
    {
      title: "Pro Gamer",
      icon: backend,
    },
    {
      title: "Single",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Part time tutor",
      company_name: "Edify tution",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2015 - April 2017",
      points: [
        "As a Part-Time O'Level Tutor at Edify Tuition, I played a pivotal role in providing quality education and academic support to students preparing for their O'Level examinations.",
        "My responsibilities encompassed a range of tasks, contributing to the overall success of the students and the institution.",
        
      ],
    },
    {
      title: "volunteer in Event management",
      company_name: "MLIS",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Jan 2017",
      points: [
        "As a committed volunteer in Event Management at MLIS School, I actively contributed to the planning, coordination, and execution of various school events.  ",
        "This role allowed me to gain valuable experience in event logistics while actively participating in creating memorable experiences for both students and stakeholders.",
       
      ],
    },
    {
      title: "Web Developer",
      company_name: "Personal Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - April 2022",
      points: [
        "Developed an Automated Weather App as part of the Web App course. The primary objective was to create a user-friendly application that provides real-time weather information. The app utilized APIs to fetch live weather data, allowing users to access accurate and up-to-date information about various locations.",
        "Created a Flower Vending Website with the goal of providing an interactive platform for users to explore and purchase flowers online. The project encompassed various elements of e-commerce and focused on delivering a seamless and enjoyable shopping experience.",
        
      ],
    },
    {
      title: "Internship",
      company_name: "ABA Group",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2022 - Sep 2022",
      points: [
        "During my internship as a Network Engineer at ABA Group, I had the opportunity to immerse myself in the dynamic field of networking and gain practical experience in designing, implementing, and maintaining robust network infrastructures. ",
        "The internship provided a comprehensive learning environment, allowing me to contribute to real-world projects and collaborate with seasoned professionals.",
  
      ],
    },
  ];
  
  const educations = [
    {
      title: "O'Level",
      company_name: "Maple Leaf International School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2014 - Jan 2015",
      points: [
        "Completed O'Level from MLIS with GPA 4.63 in 7 subjects.",
       
        
      ],
    },
    {
      title: "A'Level",
      company_name: "Maple Leaf International School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2015 - Jan 2018",
      points: [
        " Completed A'Level from MLIS with GPA 2.5 in 2 subjects.",
        
       
      ],
    },
    {
      title: "CSE",
      company_name: "Independent University, Bangladesh",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "May 2018 - Sep 2022",
      points: [
        "Graduated from IUB with CGPA 2.89, majoring on Computer Science and Engineering and minor on Human Resource Management",
        
        
      ],
    }
   
  ];


  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GrabCar",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Towhidul123/brandShop-client",
    },
    {
      name: "TechFusion",
      description:
        "Web application that enables users to showcase products which are reviewed by users and where other users can post products to be reviewed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Towhidul123/tech-client",
    },
    {
      name: "BoBo Motel",
      description:
        "A comprehensive travel booking platform that allows users to book  hotels and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Towhidul123/hotel-client",
    },
  ];
  
  export { services, technologies, experiences,educations, testimonials, projects };