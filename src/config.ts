import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
  WorkPageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Anika Somaia",
  logo: "/logo.webp",
  email: "anika.somaia@columbia.edu",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Work",
    url: "/work",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/ads2280",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/anika-somaia/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:anika.somaia@columbia.edu",
    icon: "mdi:email",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Anika Somaia",
    description:
      "Columbia student interested in ML, math and building.",
    image: identity.logo,
  },
  role: "Student, researcher, occasionally writes code that works",
  description:
    "I'm Anika Somaia, a student from London and California who loves math, ML and building things.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Anika Somaia",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "",
  about: {
    description: `
I'm Anika Somaia, a software engineer intern at LangChain working on AI observability products and a Neo Scholar (2025 cohort). Previously, I worked on generative video models at Pika.

&nbsp;

I'm currently on leave from Columbia University, where I study Computer Science and Math, serve as research lead at Columbia's AI Alignment Club, and play lots of tennis.

&nbsp;

[Learn more →](/work) 
`
, // Markdown is supported
    image_l: {
      url: "/langchain2.webp",
      alt: "LangChain",
      link: "https://langchain.com",
    },
    image_r: {
      url: "/neo.webp",
      alt: "Neo Scholar",
      link: "https://neo.com",
    },
  },
  connect: {
    description: `You can reach out to me at [anika.somaia@columbia.edu](mailto:anika.somaia@columbia.edu).`, // Markdown is supported
    links: [],
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Anika Somaia",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Passive Logging for Computer-Use Modeling",
      description: "Built a non-invasive app to collect behavioral data for computer use models. Explores what counts as ground truth in computer use data and how models reason about user intent.",
      image: "/project2.jpg",
      year: "2024",
      url: "https://dropbox.com/scl/fi/7w8dt2uq9rjto7h32iq0w/ActivityRecorderProject.zip?rlkey=e8rpa2z23limxn09kg51mj0a7&st=r2g4fu02&dl=0",
      demoUrl: "https://www.dropbox.com/scl/fi/d7skn5sj7i1gfwa8yex27/ActivityRecorder-Demo.mp4?rlkey=4bezm8kkyc1sji8prb8ws5tnw&e=1&st=l4gjm56v&dl=0",
    },
   {
      title: "LLM Evaluation Uncertainty",
      description: "Conformal prediction for LLM-as-judge systems to quantify evaluation uncertainty. Includes LLM-as-judge evaluation using Sonnet 4, multiple conformal prediction strategies, and interactive visualization for uncertainty quantification.",
      image: "/project3.jpg",
      year: "2024",
      url: "https://www.notion.so/Quantifying-LLM-Evaluation-Uncertainty-23e808527b1780649908c417cc1f6fd9?source=copy_link",
    },
    {
      title: "Lightweight eBPF Runtime for SmallSat Operations",
      description: "Research on novel runtime systems for multi-tenant satellite operations. Addresses the challenges of managing hundreds of commodity SmallSats with varying hardware capabilities under intermittent communication, focusing on isolation and security in constrained space environments.",
      image: "/project4.jpg",
      year: "2025",
      url: "https://hotnets25.hotcrp.com/doc/hotnets25-paper142.pdf?cap=hcav142dbJcQUYfioxkLUtMxBWhEDhC",
    },
  ],
};

// Work (/work)
export const workPageContent: WorkPageContent = {
  seo: {
    title: "Work | Anika Somaia",
    description: "My work experience and professional journey.",
    image: identity.logo,
  },
  subtitle: "My professional journey and work experience.",
  description: `I've worked across research, education, and industry, focusing on AI safety, machine learning, and software engineering.`,
  items: [
    {
      title: "Software Engineer",
      company: {
        name: "LangChain",
        image: "/langchain.webp",
        url: "https://www.langchain.com/langsmith",
      },
      date: "Jun 2025 - Present",
      description: "Observability and evals. Learn more →",
    },
    {
      title: "Research Assistant - ARISE Lab",
      company: {
        name: "Columbia University",
        image: "/columbia.webp",
        url: "https://www.columbia.edu",
      },
      date: "Jan 2025 - Jun 2025",
      description: "Investigating why models fail on complex programming tasks under Prof. Baishakhi Ray. Built classifiers to distinguish between reasoning and output errors in AI systems.",
    },
    {
      title: "Course Assistant",
      company: {
        name: "Columbia University CS",
        image: "/cs@cu.webp",
        url: "https://www.cs.columbia.edu",
      },
      date: "Jan 2025 - Jun 2025",
      description: "Led workshops on Natural Language Processing, Computer Vision, and Machine Learning for 100+ students in an applied AI course.",
    },
    {
      title: "Technical Fellow",
      company: {
        name: "Columbia AI Alignment Club",
        image: "/caiac.webp",
        url: "https://www.columbia.edu",
      },
      date: "Jan 2025 - Jun 2025",
      description: "Conceived and developed a novel mathematical framework and benchmark dataset for detecting cumulative risk in AI agents, securing Open Philanthropy funding.",
    },
    {
      title: "Product and Research Intern",
      company: {
        name: "Pika",
        image: "/pika.webp",
        url: "https://pika.art",
      },
      date: "Jul 2024 - Jan 2025",
      description: "Fine-tuned image-to-video models at a generative video company. Built software to automate video pre-processing workflows and researched alternative training pipelines.",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Anika Somaia",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
