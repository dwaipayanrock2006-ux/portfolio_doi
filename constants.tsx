
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
  tagline: "Growth, Strategy & AI — Building the Next Wave of Digital Products.",
  shortBio: "18-year-old BBA Business Analytics student and Growth Head Intern. Building a Harvey Specter mindset: confidence, strategic thinking, emotional control, execution, and leadership.",
  email: "dwaipayanrock2006@gmail.com",
  resumeLink: "#",
  profileImage: "/profile.png" 
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
    title: "Business & Growth",
    icon: TrendingUp,
    skills: [
      { name: "Business Analytics", level: 90 },
      { name: "Growth Strategy", level: 85 },
      { name: "Market Research", level: 80 },
      { name: "Product Thinking", level: 85 },
      { name: "Startup Execution", level: 75 }
    ]
  },
  {
    title: "AI & Tech",
    icon: Brain,
    skills: [
      { name: "AI & Automation", level: 85 },
      { name: "Python (Finance + Data)", level: 80 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Vibe Coding", level: 95 }
    ]
  },
  {
    title: "Tools & Financials",
    icon: PieChart,
    skills: [
      { name: "Financial Modeling", level: 70 },
      { name: "Advanced Excel", level: 95 },
      { name: "PowerPoint", level: 90 },
      { name: "Dashboarding", level: 85 }
    ]
  },
  {
    title: "Leadership",
    icon: Users,
    skills: [
      { name: "Brand Building", level: 80 },
      { name: "Public Speaking", level: 85 },
      { name: "Team Leadership", level: 75 },
      { name: "Strategic Communication", level: 90 }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Growth Head Intern",
    company: "Myndra AI (Myndset)",
    duration: "Present",
    description: "Leading growth and strategy for Myndra AI's media subsidiary.",
    achievements: [
      "Spearheading user acquisition for the newsletter and podcast platform.",
      "Developing engagement strategies to build a loyal community.",
      "Analyzing content metrics to optimize growth channels."
    ]
  },
  {
    role: "Co-Founder",
    company: "Porobangla AI",
    duration: "Present",
    description: "Building an AI-powered academic intelligence platform for students.",
    achievements: [
      "Designed the product roadmap for an all-in-one academic suite.",
      "Overseeing the development of notes generator, flashcards, and mock test features.",
      "Executing zero-to-one go-to-market strategy."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Porobangla AI",
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
