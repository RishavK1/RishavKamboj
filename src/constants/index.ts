import {
  JobPortal,
  css,
  chatpdf,
  docker,
  git,
  html,
  javascript,
  HospitalApp,
  mern,
  nextjs,
  postgres,
  prisma,
  recoil,
  CarRental,
  tailwind,
  turborepo,
  typescript,
  AirBnb,
  Langchain,
  Llamaindex,
  Python,
} from "@/assets";

export const navLinks = [
  {
    id: "/",
    title: "About",
  },
  {
    id: "/Projects",
    title: "Projects",
  },
  {
    id: "/Work",
    title: "Work",
  },
  {
    id: "/Tech",
    title: "Tech",
  },
  {
    id: "/Contact",
    title: "Contact",
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Langchain",
    icon: Langchain,
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
    name: "Python",
    icon: Python,
  },
  // {
  //   name: "Recoil",
  //   icon: recoil,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Mern",
  //   icon: mern,
  // },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Turborepo",
    icon: turborepo,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Rudra Infocom",
    date: "Currently Working Here", // You'll need to fill in the actual dates
    points: [
      "Developed an AI chatbot using Vercel AI to launch and manage Meta and Google marketing campaigns.",
      "Migrated the chatbot's core technology to LangGraph for enhanced capabilities.",
      "Implemented the chatbot with LlamaIndex to provide deep insights into Google and Meta campaigns.",
      "Created foundational libraries to streamline fetching and pushing campaign data, serving as the infrastructure for these products.",
      "Contributed to schema design and DevOps activities to support product development and deployment.",
    ],
  },
];

const projects = [
  {
    name: "Job Portal",
    description:
      "A full-stack job portal built with MERN and Clerk authentication, enabling users to search and apply for jobs with a secure login system.",
    isDeployed: false,
    deployedLink: "",
    image: JobPortal,
    github_link:
      "https://github.com/Pratham271/100xengineer/tree/initial-setup",
  },
  {
    name: "Car Rental",
    description:
      "A car rental web app where users can explore, book, and manage cars for rent with an easy-to-use interface.",
    isDeployed: false,
    deployedLink: "",
    image: CarRental,
    github_link: "https://github.com/Pratham271/Settle",
  },
  
  {
    name: "Airbnb Clone",
    description:
      "A clone of Airbnb built using MERN stack where users can list, browse, and book stays with authentication and clean UI.",
    isDeployed: true,
    deployedLink: "https://link-shrink-5el0.vercel.app/",
    image: AirBnb,
    github_link: "https://github.com/Pratham271/Url-shortener-frontend",
  },
  {
    name: "Hospital Appointment System",
    description:
      "A hospital booking platform with slot-based appointments, helping patients schedule visits seamlessly.",
    isDeployed: true,
    deployedLink: "https://write-with-ai.vercel.app/",
    image: HospitalApp,
    github_link: "https://github.com/Pratham271/write.it",
  },
];


export { experiences, projects, technologies };
// services, technologies,
