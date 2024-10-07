import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shihab Newaz",
  initials: "SN",
  url: "https://shihab-newaz-portfolio.vercel.app/",
  location: "MS Club Road,Bogura,Bangladesh",
  locationLink: "https://maps.app.goo.gl/mNMPtDtWyTeA3VB48",
  description:
    "Passionate web developer and blockchain enthusiast with a strong foundation in software engineering. Adept at coding with excellent problem-solving skills.",
  summary:
    "I am a passionate web developer and blockchain enthusiast with a strong foundation in software engineering. Currently pursuing a Bachelor's degree in Computer Science and Engineering at Khulna University of Engineering Technology (KUET). I have experience in various programming languages and technologies, including C/C++, JavaScript, Solidity, and web development frameworks. My goal is to contribute my expertise to innovative projects in web development, software engineering, and blockchain technology.",
  avatarUrl: "/me.png",
  skills: [
    "Solidity",
    "React",
    "Next.js",
    "Express.js",
    "Laravel",
    "MongoDB",
    "MySQL",
    "TailwindCSS",
    "Docker",
    "Typescript",
    "PHP",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shihab.newaz.563@gmail.com",
    tel: "+8801612201607",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shihab-newaz",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shihab-newaz-68615a204/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/shihab.newaz.9",
        icon: Icons.facebook,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/newaz_shihab",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: `mailto:${"shihab.newaz.563@gmail.com"}`,
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Lead Academy",
      href: "https://lead.academy",
      badges: [],
      location: "Remote",
      title: "Blockchain Developer Intern",
      logoUrl: "/lead_logo.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed and integrated a blockchain-based certification system for the company's Learning Management System (LMS).",
    },
  ],
  education: [
    {
      school: "Khulna University of Engineering Technology (KUET)",
      href: "https://kuet.ac.bd",
      degree: "B.Sc. in Computer Science and Engineering",
      logoUrl: "/kuet.png",
      start: "2019",
      end: "2024",
    },
    {
      school: "Govt.Azizul Haque College,Bogura",
      href: "https://www.ahcollege.gov.bd/",
      degree: "HSC",
      logoUrl: "/logo2.png",
      start: "2016",
      end: "2018",
    },
    {
      school: "Bogura Zilla School,Bogura",
      href: "https://bograzillaschool.edu.bd/",
      degree: "SSC",
      logoUrl: "/bzs.png",
      start: "2008",
      end: "2016",
    },
  ],
  programming: {
    leetcode: {
      solved: "120+",
      icon: Icons.leetcode,
      url: "https://leetcode.com/u/shihab-newaz/",
    },
    codeforces: {
      solved: "50+",
      icon: Icons.codeforces,
      url: "https://codeforces.com/profile/shihab_newaz_023",
    },
    others: { 
      solved: "100+",
      icon: Icons.code,
      description: "Various programming challenges and contests",
      url: "#",
    },
  },
  projects: [
    {
      title: "Secure Academic Certificates using Blockchain",
      href: "https://github.com/shihab-newaz/Academic-Certification-System",
      dates: "2023",
      active: true,
      description:
        "An academic certificate issuance and verification system using blockchain technology.",
      technologies: ["React", "Ethers.js", "Node.js", "Solidity", "Hardhat"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/shihab-newaz/Academic-Certification-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real Estate NFT Marketplace",
      href: "https://github.com/shihab-newaz/Real_Estate_NFT_MarketPlace",
      dates: "2024",
      active: true,
      description:
        "A decentralized platform for buying, selling, and trading tokenized real estate properties as NFTs.",
      technologies: ["Solidity", "Next.js", "Ethers.js", "Tailwind CSS"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/shihab-newaz/Real_Estate_NFT_MarketPlace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TechVibe",
      href: "https://github.com/shihab-newaz/TechVibe",
      dates: "2024",
      active: true,
      description:
        "A full-stack e-commerce application with integrated sentiment analysis for product reviews. It uses Django for the backend, React for the frontend, and MongoDB as the database.",
      technologies: ["Django", "React", "MongoDB", "NLTK", "scikit-learn"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/shihab-newaz/TechVibe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CardiacMonitor",
      href: "https://github.com/shihab-newaz/CardiacRecorder",
      dates: "2024",
      active: true,
      description:
        "Java and SQLite based Android application for monitoring blood pressure. This purpose of this project was to learn about version control and CI/CD with Git and Github-Actions.",
      technologies: ["Android", "SQLite", "Java", "Git", "GitHub Actions"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/shihab-newaz/CardiacRecorder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;