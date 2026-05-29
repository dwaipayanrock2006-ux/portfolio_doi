
import { 
  TrendingUp, 
  Brain, 
  PieChart, 
  Users, 
  Linkedin,
  Twitter,
  Github,
  Mail,
} from 'lucide-react';
import { NavItem, SkillCategory, ExperienceItem, ProjectItem, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Dwaipayan Pal",
  tagline: "BBA Business Analytics | Co-Founder, Supermynd AI | Growth & Strategy, Myndra AI",
  shortBio: "BBA Business Analytics student at Bennett University. Co-Founder of Supermynd AI and Growth & Strategy at Myndra AI. Skilled in product strategy, business analysis, go-to-market execution, market research, financial modelling, and AI-powered workflows. Certified in Product Strategy, Prioritization, and Discovery. VP of FORGE Club and E-Cell Finance Core Member.",
  email: "dwaipayanrock2006@gmail.com",
  resumeLink: "#",
  profileImage: "https://res.cloudinary.com/dzxejgtiw/image/upload/v1776617352/53372_ctbxv6.png" 
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Business & Analytics",
    icon: TrendingUp,
    skills: [
      { name: "Business Analysis", level: 90 },
      { name: "Market Research", level: 85 },
      { name: "Financial Modelling", level: 80 },
      { name: "Data-Driven Decision Making", level: 85 },
      { name: "Case Solving (MECE)", level: 80 }
    ]
  },
  {
    title: "Product & Growth",
    icon: Brain,
    skills: [
      { name: "Product Roadmapping", level: 85 },
      { name: "Go-to-Market Strategy", level: 90 },
      { name: "Growth Strategy", level: 85 },
      { name: "User Acquisition", level: 80 },
      { name: "TAM/SAM/SOM", level: 85 }
    ]
  },
  {
    title: "Technical",
    icon: PieChart,
    skills: [
      { name: "Advanced Excel", level: 95 },
      { name: "Python (Analytics)", level: 80 },
      { name: "AI Workflow Automation", level: 85 },
      { name: "Prompt Engineering", level: 90 },
      { name: "PowerPoint", level: 90 }
    ]
  },
  {
    title: "Leadership & Ops",
    icon: Users,
    skills: [
      { name: "Budgeting", level: 80 },
      { name: "Backlog Management", level: 85 },
      { name: "Event Operations", level: 80 },
      { name: "Team Leadership", level: 85 }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Growth & Strategy",
    company: "Myndra AI",
    duration: "Nov 2025 – Present",
    description: "Driving user acquisition and engagement strategy for Myndset - an AI-powered media and knowledge platform.",
    achievements: [
      "Drive user acquisition, audience growth, and engagement strategy.",
      "Design data-driven retention and distribution systems.",
      "Collaborate with product and AI teams on platform adoption."
    ]
  },
  {
    role: "Co-Founder & Product",
    company: "Supermynd AI",
    duration: "Apr 2025 – Present",
    description: "Built and shipped AI Notes Generator, Study Guide Creator, Predict Your Paper, and Flashcards.",
    achievements: [
      "Owned product roadmap from ideation to deployment in under 4 months.",
      "Conducted TAM/SAM/SOM market sizing for Indian EdTech and competitor analysis.",
      "Executed go-to-market and build-in-public content strategy on LinkedIn and X.",
      "Managed React routing migration for SEO."
    ]
  },
  {
    role: "Core Member - Finance & Ops",
    company: "E-Cell, Bennett University",
    duration: "Feb 2026 – Present",
    description: "Managed budgeting, sponsorship, and led event operations.",
    achievements: [
      "Managed budgeting and sponsorship for the cell.",
      "Led operations for 30 attendee Entrepreneurship Bootcamp as Hospitality & Ops Lead."
    ]
  },
  {
    role: "Founder and Vice President",
    company: "FORGE Club, Bennett University",
    duration: "2025 – Present",
    description: "Founded FORGE, Bennett's first Product Management Club.",
    achievements: [
      "Obtained Dean approval and recruited 12 core members.",
      "Built the official website and planned semester-wide events."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "SuperMynd ai",
    role: "Co-Founder",
    description: "An all-in-one AI academic suite designed to revolutionize how students prepare for CBSE, UG, PG, and competitive exams. Features include instant notes generation, smart flashcards, and adaptive mock tests.",
    tags: ["AI Product", "EdTech", "React", "Python"],
    category: "Product",
    highlight: true,
    imagePlaceholder: "/porobangla_preview.png",
    link: "https://supermynd.in"
  },
  {
    title: "Myndset Growth Strategy",
    role: "Growth Head",
    description: "Comprehensive growth engine for a newsletter and podcast platform. Focused on organic user acquisition, funnel optimization, and community engagement metrics.",
    tags: ["Growth Hacking", "Analytics", "Content Strategy"],
    category: "Growth",
    highlight: true,
    imagePlaceholder: "/myndset_preview.png",
    link: "https://www.myndset.co.in/"
  },
  {
    title: "Finance & Analytics Insights",
    role: "Content Creator",
    description: "A weekly personal content initiative breaking down complex financial concepts and data analytics trends for a general audience.",
    tags: ["Content Creation", "Finance", "Data Viz"],
    category: "Content",
    highlight: false,
    imagePlaceholder: "/finance_preview.png"
  },
  {
    title: "Market Analysis Dashboard",
    role: "Developer",
    description: "Interactive dashboard built with Python and Excel to visualize stock market trends and financial performance indicators.",
    tags: ["Python", "Excel", "Data Visualization"],
    category: "Tech",
    highlight: false
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Twitter (X)", url: "https://twitter.com", icon: Twitter },
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail }
];
