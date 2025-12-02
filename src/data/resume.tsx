import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Chonghan Wang",
  initials: "CW",
  url: "https://chonghanwang.com",
  location: "Davis, CA",
  locationLink: "https://maps.app.goo.gl/nrH23PosNWN6RR677",
  description: `
    Software Engineer who enjoys building reliable systems, clean workflows,
    and products that actually solve problems. I work across full-stack
    applications, backend automation, and AI-driven pipelines—using Docker,
    Linux, and multi-language tooling to create reproducible, well-designed
    experiences. I like turning complex ideas into clear, maintainable
    systems that teams can easily build on.
  `,
  summary: [
    "Engineer with experience across scalable backend systems, containerized",
    "development environments, and AI/LLM orchestration pipelines. I design",
    "reproducible workflows, automate multi-process data pipelines, and build",
    "full-stack applications that integrate Python, TypeScript, and C/C++",
    "ecosystems. My work spans Chrome Extensions, RAG-based story platforms,",
    "AWS and BigQuery analytics, and deterministic testing suites—supported",
    "by strong documentation, automation, and cross-team collaboration.",
  ].join(" "),
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "C/C++",
    "Bash",
    "Go",
    "Rust",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Docker",
    "AWS",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "CI/CD",
    "Linux/Unix",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "cwang942@usc.edu",
    tel: "+1-530-723-3675",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vincent-WangCH",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/chonghan-wang-488a61266",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Better Buy",
      href: "https://www.addbetterbuy.com/",
      badges: [],
      location: "Los Angeles, CA",
      title: "Software Engineer",
      logoUrl: "/better_buy.png",
      start: "Feb 2024",
      end: "Present",
      description: [
        "Built a full-stack Chrome Extension ecosystem supported by a",
        "containerized backend, reproducible workflows, and automated data",
        "pipelines. Designed deterministic testing, SQLAlchemy-based schema",
        "versioning, and Linux/Bash-driven developer workflows to ensure",
        "consistency across environments. Integrated BigQuery analytics with",
        "LangGraph and LangSmith to generate persona insights and guide product",
        "decisions. Delivered a reliable, well-documented system used for",
        "behavior analysis, debugging, and iterative UX improvements."
      ].join(" "),
    },
    {
      company: "HeartyByte Inc",
      href: "https://www.storioai.com/",
      badges: [],
      location: "San Mateo, CA",
      title: "Software Engineer",
      logoUrl: "/storio_logo.png",
      start: "May 2025",
      end: "Nov 2025",
      description: [
        "Developed an AI-powered story management and SEO automation platform",
        "combining RAG pipelines, LangGraph orchestration, and dynamic content",
        "generation. Enhanced the Next.js/React frontend while building backend",
        "workflows that analyze narrative patterns, ensure character consistency,",
        "and generate structured creative outputs. Integrated Google Trends and",
        "Perplexity APIs to produce adaptive SEO layouts, containerized with",
        "Docker for reproducibility. Strengthened CI/CD reliability and authored",
        "clear documentation for system architecture, data flows, and deployment",
        "procedures."
      ].join(" "),
    },
    {
      company: "ENERlite Consulting, Inc",
      href: "https://www.enerlite-consulting.com/",
      badges: [],
      location: "Sacramento, CA",
      title: "Software Engineer",
      logoUrl: "/EnerliteConsulting.png",
      start: "Feb 2022",
      end: "Feb 2024",
      description: `
        Developed a multi-process AWS pipeline for energy modeling and
        optimization, focusing on reproducibility, scalability, and deterministic
        results. Built data ingestion and validation systems that enforced
        parameter correctness and ensured consistent multi-step analysis
        workflows. Automated backend processing for simulations, created modular
        visualization tools, and containerized the entire pipeline with Docker
        to guarantee reproducible environments across AWS instances. Authored
        detailed documentation covering workflows, testing procedures, and
        expected outputs to support research teams and long-term maintenance.
      `,
    },
  ],
  education: [
    {
      school: "University of Southern California",
      href: "https://viterbischool.usc.edu/",
      degree: "Master of Science in Computer Science",
      logoUrl: "/PrimShield_USC.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "University of California, Davis",
      href: "https://engineering.ucdavis.edu/",
      degree: "Bachelor of Science in Computer Science and Engineering",
      logoUrl: "/UCDavis_logo_gold-blue.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Storio AI",
      href: "https://www.storioai.com/",
      dates: "May 2025 - Nov 2025",
      active: true,
      description: [
        "Built a reproducible, Docker-based Chrome Extension platform with automated",
        "data pipelines, deterministic testing, and BigQuery + LangGraph analytics",
        "for user-behavior insights and persona generation."
      ].join(" "),
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Docker",
        "Jenkins",
        "GitHub Actions",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.storioai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Better Buy",
      href: "https://www.addbetterbuy.com/",
      dates: "Feb 2024 - Present",
      active: true,
      description: [
        "An AI-powered story and SEO automation system using RAG, LangGraph,",
        "and dynamic data pipelines, enhancing the Next.js frontend and enabling adaptive,",
        "trend-driven content generation."
      ].join(" "),
      technologies: [
        "Chrome Extension",
        "Python",
        "JavaScript",
        "Docker",
        "MySQL",
        "SQLAlchemy",
        "Crawl4AI",
        "Linux/Bash",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.addbetterbuy.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ENERtune",
      href: "https://www.enerlite-consulting.com/enertune",
      dates: "Feb 2022 - Feb 2024",
      active: true,
      description: [
        "A multi-process AWS modeling pipeline with reproducible workflows,",
        "automated data validation, and Docker-based simulation environments to deliver",
        "deterministic energy-analysis results."
      ].join(" "),
      technologies: [
        "Python",
        "AWS",
        "Docker",
        "PostgreSQL",
        "React",
        "Data Visualization",
        "CI/CD",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.enerlite-consulting.com/enertune",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
