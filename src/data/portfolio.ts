import maheberImg from "@/assets/proj-maheber.jpg";
import libraryImg from "@/assets/proj-library.jpg";
import resumePdf from "@/assets/Zarihun_Bayisa_Gadisa_CV.pdf";
import tempoPdf from "@/assets/tempo.pdf";

export const profile = {
  name: "Zarihun Bayisa Gadisa",
  title: "Full-Stack Web Developer | Java & Spring Boot Developer",
  intro:
    "I am a passionate software developer who builds modern, scalable, and user-friendly web applications. I work across frontend and backend technologies and have experience building full-stack applications, REST APIs, microservices, database-driven systems, and modern React applications.",
  github: "https://github.com/zarihun-bayisa?utm_source=chatgpt.com",
  linkedin: "https://www.linkedin.com/in/",
  email: "zarihunbayisa76@gmail.com",
  phone: "+251982407645",
  resume: resumePdf,
  tempo: tempoPdf,
  languages: ["English", "Amharic", "Afaan Oromo"],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Node.js",
];

export const stats = [
  { value: "3.64", label: "CGPA" },
  { value: "2024", label: "Graduation" },
  { value: "Full Stack", label: "Development" },
  { value: "Microservices", label: "Architecture" },
];

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Router",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "NestJS",
      "PHP",
      "REST APIs",
      "Microservices",
      "Spring Cloud",
      "Feign Client",
      "Eureka",
    ],
  },
  { category: "Database", items: ["PostgreSQL", "MySQL", "Prisma"] },
  { category: "Mobile", items: ["Flutter", "React Native", "Expo", "Android", "Kotlin"] },
  { category: "Tools", items: ["Git", "GitHub", "Maven", "Docker", "Postman", "VS Code"] },
];

export const experience = [
  {
    role: "Customer Support Officer",
    company: "Atlas Computer Technology PLC",
    period: "2025 – Present",
    points: [
      "Providing technical and customer support",
      "Troubleshooting software and hardware issues",
      "Assisting users with technical problems",
      "Data entry and documentation",
      "Supporting day-to-day IT operations",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  mobile?: boolean;
};

export const projectFilters = [
  "All",
  "Full Stack",
  "React",
  "Spring Boot",
  "Microservices",
  "Mobile",
];

export const projects: Project[] = [
  {
    id: "maheber",
    title: "Maheber Management System",
    description:
      "A comprehensive management platform designed for Ethiopian cultural and community organizations.",
    features: [
      "Member Management",
      "Monthly Contributions",
      "Expense Management",
      "Events",
      "Attendance",
      "Reports",
      "User Management",
      "Authentication",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Cloud",
      "REST APIs",
      "Microservices",
    ],
    tags: ["Full Stack", "React", "Spring Boot", "Microservices"],
    github: "https://github.com/zarihun-bayisa/maheber-management.git",
    image: maheberImg,
  },
  {
    id: "library",
    title: "Library Management Microservices",
    description:
      "A distributed library management system built using microservice architecture with service discovery and an API gateway.",
    features: [
      "Book Service",
      "Member Service",
      "Borrowing Service",
      "Category Service",
      "Notification Service",
      "API Gateway",
      "Eureka Service Discovery",
    ],
    tech: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "Feign Client", "MySQL", "React"],
    tags: ["Full Stack", "Spring Boot", "Microservices", "React"],
    github: "https://github.com/zarihun-bayisa/library-management-microservice.git",
    image: libraryImg,
  },
  {
    id: "school",
    title: "School Management System",
    description:
      "A full-stack school management application designed to manage students, academic information, and school operations.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "React"],
    tags: ["Full Stack", "Spring Boot", "React"],
  },
  {
    id: "realestate",
    title: "Real Estate Management System",
    description:
      "A web-based real estate application for managing properties and property-related information.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    tags: ["Full Stack"],
  },
  {
    id: "hotel",
    title: "Hotel Management System",
    description:
      "A management system designed to support hotel operations and record management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    tags: ["Full Stack"],
  },
  {
    id: "prison",
    title: "Asela Prison Management System",
    description:
      "A PHP and MySQL management system for organizing prison records, administration, and secure staff access.",
    features: [
      "Secure Admin Login",
      "Prisoner Records",
      "Staff Management",
      "Administrative Dashboard",
      "Record Management",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    tags: ["Full Stack"],
  },
  {
    id: "pcb",
    title: "PCB Three.js Viewer",
    description: "An interactive web application for visualizing PCB designs in 3D.",
    tech: ["React", "Three.js", "JavaScript"],
    tags: ["React"],
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description:
      "Selected mobile development work covering cross-platform and native Android applications.",
    tech: ["Flutter", "React Native", "Expo", "Android", "Kotlin"],
    tags: ["Mobile"],
    mobile: true,
  },
];

export const process = [
  { step: "01", title: "Understand", text: "Understand the problem and requirements." },
  { step: "02", title: "Design", text: "Plan architecture, database, API, and user experience." },
  { step: "03", title: "Build", text: "Develop clean, maintainable, scalable software." },
  { step: "04", title: "Improve", text: "Test, optimize, deploy, and continuously improve." },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Arsi University",
  period: "2020 – 2024",
  cgpa: "3.64",
};

export const architecture = [
  { layer: "Frontend", tech: ["React", "TypeScript", "Tailwind CSS"] },
  { layer: "API Gateway", tech: ["Spring Cloud Gateway", "REST API"] },
  { layer: "Microservices", tech: ["Spring Boot", "Feign", "Eureka"] },
  { layer: "Database", tech: ["PostgreSQL", "MySQL"] },
];
