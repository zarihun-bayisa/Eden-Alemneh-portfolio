import maheberImg from "@/assets/proj-maheber.jpg";
import libraryImg from "@/assets/proj-library.jpg";
import trafficImg from "@/assets/traffic .png";
import uniCashImg from "@/assets/unicash.png";

export const profile = {
  name: "Eden Alemneh",
  title: "Information Technology Graduate | Software Developer",
  intro:
    "I am an Information Technology graduate and software developer who builds modern, scalable, and user-friendly web applications. I work across frontend and backend technologies and have experience building full-stack applications, REST APIs, microservices, database-driven systems, and modern React applications.",
  github: "https://github.com/zarihun-bayisa",
  linkedin: "https://www.linkedin.com/in/",
  email: "Alemneheden7@gmail.com",
  phone: "+251 90 958 1116",
  languages: ["English", "Amharic", "Afaan Oromo"],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
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
  { value: "Full Stack", label: "Development" },
  { value: "Microservices", label: "Architecture" },
  { value: "12+", label: "Projects" },
  { value: "2024", label: "Graduate" },
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
    role: "IT Support Officer",
    company: "Ethiopian Railways Corporation (ERC)",
    period: "2025 – Present",
    points: [
      "Maintaining IT, communication, and digital systems across railway offices and stations",
      "Troubleshooting hardware, software, and network issues",
      "Providing technical support to railway staff",
      "Supporting the reliable operation of station and administrative technology",
      "Documenting support requests and IT operations",
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
    id: "traffic-management",
    title: "Traffic Management System",
    description:
      "A dashboard for managing vehicle fleets, drivers, traffic cameras, violations, and penalty payments.",
    features: [
      "Vehicle and Driver Management",
      "Traffic Camera Monitoring",
      "Violation Tracking",
      "Penalty Payments",
      "Agreements and Reports",
      "Python-Based Traffic Event Detection",
    ],
    tech: ["Next.js", "React", "Python", "Bootstrap"],
    tags: ["Full Stack", "React"],
    github: "https://github.com/zarihun-bayisa/traffic-management",
    image: trafficImg,
  },
  {
    id: "insurance-management",
    title: "Insurance Management System",
    description:
      "A full-stack insurance platform for managing clients, policies, premium payments, claims, and agents.",
    features: [
      "Client and Agent Management",
      "Insurance Policy Management",
      "Premium Payments",
      "Claims Processing",
      "Dashboard and Reports",
    ],
    tech: ["Java", "Spring Boot", "React", "Vite", "Bootstrap"],
    tags: ["Full Stack", "React", "Spring Boot"],
    github: "https://github.com/zarihun-bayisa/Insurance-mangement",
  },
  {
    id: "uni-cash-reconciliation",
    title: "Uni Cash Reconciliation",
    description:
      "A payment reconciliation workspace for comparing payment records, reviewing differences, and exporting clear reports.",
    features: [
      "Payment Record Comparison",
      "Difference Review",
      "Report Export",
      "Secure Sign-In",
    ],
    tech: ["Next.js", "React"],
    tags: ["React"],
    github: "https://github.com/zarihun-bayisa/Uni-Cash-Reconciliation",
    demo: "https://uni-cash-reconciliation-test.vercel.app/login",
    image: uniCashImg,
  },
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
    github: "https://github.com/zarihun-bayisa/maheber-management",
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
    github: "https://github.com/zarihun-bayisa/library-management-microservice",
    image: libraryImg,
  },
  {
    id: "school",
    title: "School Management System",
    description:
      "A full-stack school management application designed to manage students, academic information, and school operations.",
    tech: ["Spring Boot", "Java", "MySQL", "REST API", "React"],
    tags: ["Full Stack", "Spring Boot", "React"],
    github: "https://github.com/zarihun-bayisa/spring-boot-school",
  },
  {
    id: "realestate",
    title: "Real Estate Management System",
    description:
      "A web-based real estate application for managing properties and property-related information.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    tags: ["Full Stack"],
    github: "https://github.com/zarihun-bayisa/real-state",
  },
  {
    id: "hotel",
    title: "Hotel Management System",
    description:
      "A management system designed to support hotel operations and record management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    tags: ["Full Stack"],
    github: "https://github.com/zarihun-bayisa/hotel-management",
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
    github: "https://github.com/zarihun-bayisa/prison-management-final-project",
  },
  {
    id: "pcb",
    title: "PCB Three.js Viewer",
    description: "An interactive web application for visualizing PCB designs in 3D.",
    tech: ["React", "Three.js", "JavaScript"],
    tags: ["React"],
    github: "https://github.com/zarihun-bayisa/threejs-pcb-viewer",
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
  degree: "Bachelor of Information Technology",
  school: "Arsi University",
  period: "2020 – 2024",
};

export const architecture = [
  { layer: "Frontend", tech: ["React", "TypeScript", "Tailwind CSS"] },
  { layer: "API Gateway", tech: ["Spring Cloud Gateway", "REST API"] },
  { layer: "Microservices", tech: ["Spring Boot", "Feign", "Eureka"] },
  { layer: "Database", tech: ["PostgreSQL", "MySQL"] },
];
