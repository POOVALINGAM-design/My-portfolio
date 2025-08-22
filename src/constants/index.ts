import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

// Commented out unused variables
// import { mobile, backend, creator, web, redux, git, figma, docker, meta, shopify, starbucks, tesla, carrent, jobit, tripguide, threejs } from "../assets/tech";

import reactjs from "../assets/tech/reactjs.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import tailwind from "../assets/tech/tailwind.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import laptop from "../assets/tech/laptop.svg";
import codebrackets from "../assets/tech/codebrackets.svg";
import spark from "../assets/tech/spark.svg";
import bootstrap from "../assets/tech/bootstrap.svg";
import mysql from "../assets/tech/mysql.svg";
import laabamone1 from "../assets/company/laabamone1.png";
import zoho from "../assets/company/zoho.png";
import vizhil from "../assets/project/vizhil.png";
import facepos from "../assets/project/facepos.png";
import vizhilVendor from "../assets/project/vizhil-supplier.png";
import linga from "../assets/project/linga-chemical.png";
import gemtrove from "../assets/project/gemtrove.png";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: laptop,
  },
  {
    title: "Core Skills",
    icon: codebrackets,
  },
  {
    title: "Modern Frameworks",
    icon: reactjs,
  },
  {
    title: "Smart & Responsive",
    icon: spark,
  },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
];

const experiences: TExperience[] = [
  {
    title: "Front-End Developer",
    companyName: "LaabamOne Business Solutions Private Limited",
    icon: laabamone1,
    iconBg: "#fff",
    date: "07/2023 - Present",
    points: [
      "Developing and maintaining web applications with React.js and modern frontend technologies.",
      "Collaborating with cross-functional teams to deliver business solutions.",
      "Implementing responsive UI and optimizing performance.",
    ],
  },
  // {
  //   title: "Front-End Developer",
  //   companyName: "LaabamOne Business Solutions Private Limited",
  //   icon: laabamone2,
  //   iconBg: "#fff",
  //   date: "07/2023 - Present",
  //   points: [
  //     "Working on client projects and delivering user-friendly interfaces.",
  //     "Ensuring code quality and best practices in frontend development.",
  //   ],
  // },
  {
    title: "Front-End Developer - Intern",
    companyName: "Zoho",
    icon: zoho,
    iconBg: "#fff",
    date: "08/2022 - 01/2023",
    points: [
      "Contributed to Zoho's web applications as a frontend intern.",
      "Gained experience in a fast-paced, product-driven environment.",
      "Worked with senior developers to learn industry standards.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Vizhil Super Application",
    description:
      "Vizhil Super App provides services like shopping, rides, food delivery, home services, groceries, and digital content—all in one platform.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "super-app", color: "pink-text-gradient" },
      { name: "multi-service", color: "green-text-gradient" },
    ],
  image: vizhil, // Vizhil Super App (vizhil.png)
    sourceCodeLink: "https://www.vizhil.com/",
  },
  {
    name: "GemTrove (Diamond Selling Website)",
    description:
      "GemTrove is a diamond selling website for a foreign client. Built with Next.js and optimized for speed using Google guidelines.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "seo", color: "green-text-gradient" },
      { name: "performance", color: "pink-text-gradient" },
    ],
  image: gemtrove, // GemTrove (gemtrove.png)
    sourceCodeLink: "https://gemtrove.com.au/",
  },
   {
    name: "FacePOS",
    description:
      "FacePOS offers complete management for customers and merchants, including profile details, transaction history, KYC status, and linked bank accounts. Real-time transaction monitoring and reporting features included.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mui", color: "green-text-gradient" },
      { name: "pos", color: "pink-text-gradient" },
    ],
  image: facepos, // FacePOS (facepos.png)
    sourceCodeLink: "https://crads.facepos.ie/login",
  },
  {
    name: "Creative Product Designer (Vendor Web Application)",
    description:
      "A vendor’s web application for product creation, stock management, order processing, and payment tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mui", color: "green-text-gradient" },
      { name: "vendor", color: "pink-text-gradient" },
    ],
  image: vizhilVendor, // Creative Product Designer (vizhil-supplier.png)
    sourceCodeLink: "https://app.vizhil.com",
  },
  {
    name: "Linga Chemicals",
    description:
      "A CRM website designed for seamless product entry and multilingual display through QR code scanning, developed using Next.js, Redux, and Context API for efficient state management and performance.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "crm", color: "pink-text-gradient" },
    ],
  image: linga, // Linga Chemicals (linga-chemical.png)
    sourceCodeLink: "https://adminctrl.lingachem.com/sign-in",
  },
 
];

export const contactInfo = {
  email: "sivapoovalingam6421@gmail.com",
  linkedin: "https://www.linkedin.com/in/poovalingam-mani-165b88277",
  phone: "9944785216",
  resume: "/Poovalingam(Frontend_Developer).pdf",
  social: [
    {
      name: "Email",
      icon: "mdi:email-outline",
      link: "mailto:sivapoovalingam6421@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/poovalingam-mani-165b88277",
    },
    {
      name: "Phone",
      icon: "mdi:phone",
      link: "tel:9944785216",
    },
    {
      name: "Resume",
      icon: "mdi:file-download",
      link: "/Poovalingam(Frontend_Developer).pdf",
    },
  ],
};

export { services, technologies, experiences, testimonials, projects };
