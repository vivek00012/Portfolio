import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Vivek Sinha",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer"],
    bio: "I’m a passionate software engineer with excellent skills in Java, Microservices, and Spring Boot. I specialize in crafting efficient and scalable solutions, delivering top-notch web applications that exceed client expectations. My expertise allows me to create robust architectures and ensure seamless integration across distributed systems. Let’s connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Food Ordering System - Using Outbox and Saga",
        desc: "The food ordering system is built using Domain-Driven Design (DDD) principles, leveraging the CQRS (Command Query Responsibility Segregation) and Saga patterns for transaction management and consistency. The Outbox pattern is utilized for event-driven communication between microservices. The system allows users to browse menus, place orders, and track deliveries, ensuring scalability and high availability.",
        image: "spring-kafka.png",
        live: false,
        technologies: ["springboot","apache-kafka","jpa","postgress"],
        link: "javascript:void(0)",
        github: "https://github.com/vivek00012/food-ordering-system-ddd"
    },
    {
        title: "Airbnb Clone",
        desc: "Developed an Airbnb clone using Next.js, Prisma, and Tailwind CSS, featuring Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimized performance. The project showcases a modern UI, dynamic data fetching, and efficient database integration, offering a seamless user experience similar to the original Airbnb platform..",
        image: "airbnb.png",
        live: false,
        technologies: ["React", "Tailwind", "Prisma","Mysql"],
        link: "javascript:void(0)",
        github: "https://github.com/vivek00012/NEXTJS-AIRBNB-CLONE"
    },
    {
        title: "Netflix Clone",
        desc: "Netflix clone using React and Tailwind CSS, replicating the platform’s modern UI and responsive design. The project includes key features such as dynamic content display, seamless navigation, and a user-friendly interface, providing an engaging and interactive user experience.”",
        image: "reacttail.png",
        live: false,
        technologies: ["React", "Tailwind"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL","KAFKA","AWS (Lambda)","Docker","Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman"]
    }
]
const socialLinks = [
    { link: "https://github.com/vivek00012", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/vivek0012/", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/viveksinha0012/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Senior Software Engineer",
        company: "Altimetrik",
        date: "MAY 2023 - April 2024",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "Microservices"]
    },
    {
        role: "Senior Software Engineer",
        company: "CitiusTech",
        date:"JAN 2023 - APR 2023",
        desc: "I utilized my expertise in React and Java Spring Boot to build dynamic, high-performance web applications. On the frontend, I developed responsive interfaces and implemented efficient state management, while on the backend, I created robust APIs and ensured smooth integration with databases. Through collaboration with cross-functional teams, I optimized both frontend and backend workflows to deliver seamless, full-stack solutions.",
        skills: ["Angular","C#","JAVA","SpringBoot"]
    },
    {
        role: "Senior Software Engineer",
        company: "Accolite Digital",
        date: "DEC 2020 - DEC 2023",
        desc: "I leveraged my expertise in Java, Spring Boot, and Kafka to design and implement microservices architectures, ensuring scalability and resilience in distributed systems. I developed robust APIs, enabling seamless communication between services, and utilized Kafka for efficient event-driven data streaming. By optimizing backend performance and ensuring smooth integration, I collaborated with cross-functional teams to deliver reliable and high-performance solutions in dynamic environments.",
        skills: ["Java", "SpringBoot", "Hibernate/JPA", "KAFKA", "AWS", "Docker", "Kubernetes"]
    },
    {
        role: "Software Enginner",
        company: "Happiest Minds Technologies Public Limited",
        date: "March 2019 - Aug 2020",
        desc: "I leveraged my skills in Angular, React, and Node.js to design and implement dynamic and responsive web applications, ensuring smooth user experiences and robust functionality. I optimized frontend and backend performance, collaborating with cross-functional teams to enhance system operations and ensure seamless integration across the full stack",
        skills: ["Angular","React","Nodejs"]
    },
    {
        role: "Futorix Solutions Private Limited",
        company: "Futorix Solutions PVT limited",
        date: "March 2017 - FEB 2018",
        desc: " I leveraged my skills in Java, Spring Boot, and PostgreSQL to design and implement robust backend services, ensuring scalable and efficient system architecture. I optimized application performance and reliability, collaborating with cross-functional teams to enhance system operations and ensure seamless integration within a monolithic architecture.",
        skills: ["Java", "Angular","Nodejs"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "java",
    "react",
    "angular",
    "android",
    "html5",
    "css3",
    "springboot",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "figma",
];
export { ExperienceInfo, Info, ProjectInfo, SkillInfo, Slugs, socialLinks };
