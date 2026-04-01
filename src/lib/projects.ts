import { Project } from "./types";

const projects: Project[] = [
  {
    id: 1,
    slug: "seabrook-hamptons-estuary-alliance",
    title: "Seabrook-Hamptons Estuary Alliance",
    subtitle: "WordPress · Cornerstone · CSS · UI/UX · Content Strategy",
    category: "Web Design & Development",
    year: "2024–2025",
    role: "Web Designer & Developer — Tangram 3DS",
    description:
      "SHEA is a New Hampshire coastal conservation nonprofit dedicated to protecting the Hampton-Seabrook Estuary — the state's second-largest estuary and largest continuous salt marsh. I designed and built their full public-facing website at Tangram 3DS, creating a platform that communicates their conservation mission, surfaces the Estuary Management Plan and scientific resources, and drives community engagement across Hampton, Hampton Falls, and Seabrook.",
    problem:
      "SHEA needed a professional, accessible website to replace their outdated presence and serve diverse stakeholders — from scientists and local policymakers to property owners and recreational visitors. The site had to organize complex environmental information, showcase ongoing projects like the Coastal Hazards Adaptation Team (CHAT), support event calendars and workshop registration, facilitate grant applications, and enable easy content updates by non-technical staff.",
    solution:
      "I built a responsive WordPress site using Cornerstone and custom CSS with a coastal-themed design system featuring intuitive navigation and dynamic content features. The information architecture organizes content into clear pathways: Discover (geography, ecology, land use, flood risks), Our Work (Estuary Management Plan, committees, workshops, projects), and Get Involved (events calendar, photo contests, tools & resources, grants). I implemented interactive components including scrolling calendar banners, carousel galleries for educational content, and filterable resource libraries. Throughout the project, I managed an extensive stakeholder review process, synthesizing feedback from 30+ comment threads across board members and staff to refine the UI, navigation structure, and content presentation. I also created documentation and page templates to empower the SHEA team to manage ongoing content independently.",
    techStack: [
      "WordPress",
      "Cornerstone Page Builder",
      "Custom CSS",
      "PHP",
      "Advanced Custom Fields",
      "Responsive Design",
      "UI/UX Design",
      "Content Strategy",
      "Information Architecture",
      "Accessibility (WCAG)",
      "SEO",
    ],
    url: "",
    demo: "https://shea4nh.org/",
    img: "/images/shea-preview.webp"
  },
  {
    id: 2,
    slug: "florida-wildlife-corridor",
    title: "Florida Wildlife Corridor Foundation",
    subtitle: "WordPress · ACF Pro · Custom PHP · Mapbox GL JS · UI/UX",
    category: "Web Design & Development",
    year: "2024–2025",
    role: "Web Designer / Developer — Tangram 3DS",
    description:
      "The Florida Wildlife Corridor Foundation protects and connects wild Florida through land conservation, advocacy, and public engagement. At Tangram 3DS, I led the full redesign and development of their public-facing website — architecting a scalable WordPress build from the ground up and carrying it from concept through launch and into ongoing post-launch support.",
    problem:
      "FWCF's existing site no longer reflected the scale or sophistication of the organization. They needed a redesigned digital presence that could support complex content ecosystems — expeditions, impact campaigns, a resource library, donation flows, and live event integration — while maintaining brand consistency, WCAG AA accessibility standards, and a museum-quality aesthetic across a large, multi-stakeholder site.",
    solution:
      "I designed and built a full WordPress site using Cornerstone/Pro Theme with ACF Pro, implementing custom post types for Resources, Impact Campaigns, Events, and Expeditions — each with AJAX-powered filtering and structured metadata. I built a custom Eventbrite sync plugin from scratch to pull live event data, integrated Mapbox GL JS for interactive corridor mapping with custom markers and layer toggles, and wired up Neon CRM for donation forms. The design system — rooted in the brand's Osceola Green, Everglade Teal, and Key Lime palette with Proxima Nova and Phosphate Solid typography — was implemented through a consolidated child theme with external stylesheets for long-term maintainability. Post-launch, I supported content migration, delivered CMS training for the client team, and continued iterating on Phase 2 features including a mega menu and expanded Mapbox architecture.",
    techStack: [
      "WordPress",
      "PHP",
      "ACF Pro",
      "Cornerstone / Pro Theme",
      "Mapbox GL JS",
      "CSS",
      "JavaScript / AJAX",
      "REST API",
      "Neon CRM",
      "Eventbrite API",
      "UI/UX Design",
      "WCAG Accessibility",
      "Content Strategy",
    ],
    url: "",
    demo: "https://floridawildlifecorridor.org/",
    img: "/images/fwcf-preview.webp",
  },
  {
    id: 3,
    slug: "tangram-3ds-internal",
    title: "Tangram 3DS — Internal Marketing & Web",
    subtitle: "WordPress · Figma · Email · Social · Brand · UI/UX",
    category: "In-House Design & Development",
    year: "2024-2026",
    role: "Associate Web Developer/Designer",
    description:
    " After joining Tangram 3DS in August 2024 as a Junior Web Designer and Graphic Designer, I contributed to a wide range of internal marketing and web projects. Working in a small boutique agency required me to wear many hats. From maintaining and evolving the company website , producing marketing collateral, email campaigns, and social media content while managing the client projects we had on the roster. After one year I was promoted to an Associate role with a focus in UI/UX design, client relations, content management, information architecture and web development. My work spans the full design-to-deployment pipeline — from early concept and wireframe through to live implementation.",
    techStack: [
      "WordPress",
      "Figma",
      "UI/UX Design",
      "Information Architecture",
      "Email Marketing",
      "Social Media",
      "Content Management",
      "Client Relations",
      "Brand Design",
      "Graphic Design",
    ],
    url: "",
    demo: "https://www.tangram3ds.com/",
    img: "/images/tangram-3ds.jpeg",
    features: [
      "Website content updates and page development in WordPress",
      "Figma design system for marketing assets and wireframes",
      "Email marketing campaigns for client outreach and announcements",
      "Social media content creation and brand management",
      "Client-facing design presentations and UI/UX mockups",
      "Information architecture planning for client websites",
      "Brand asset library maintenance and expansion",
    ]
  },
  {
    id: 4,
    slug: "cookijar",
    title: "Cookijar",
    subtitle: "Rewarding productivity!",
    category: "Front End Development",
    year: "2023",
    role: "Frontend Developer",
    description:
      "CookiJar is a productivity tracking application designed to gamify task management. Built with React and JSON Server, it allows users to move beyond a simple to-do list by assigning point values to their tasks. By completing goals, users earn points that can be redeemed for custom, user-defined rewards. The project features full CRUD functionality and a responsive design, providing a fun and interactive way to stay organized.",
    problem: "The goal was to create a client-side application with React utilizing a REST API with JSON Server. that required secure user authentication and unique data sets for each user. I needed to implement a system where users could create, read, update, and delete both tasks and rewards while ensuring the UI was intuitive and responsive. Technical requirements included handling complex form states, managing a mock REST API with JSON Server, and utilizing various input selectors to ensure a smooth data-entry experience.",
    solution:
      "CookiJar meets this challenge by allowing users to define their own rewards and point system. When a user creates a task, they assign it a point value; once marked complete, those points are added to their total, which can then be 'spent' on rewards they’ve created. The layout uses a mobile-first approach with Tailwind CSS and Flexbox to ensure it looks great on any device. As my first React application, this project was pivotal in helping me master component-based architecture, state management, and using asynchronous fetch calls to interact with a REST API.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "CSS", "HTML", "JSON Server"],
    url: "https://github.com/kawtarzz/cooki-jar",
    demo: "https://cookijar.netlify.app/",
    img: "/images/cookijar_02.svg",
    features: [
      "User authentication with login and registration",
      "Create, edit, and delete custom tasks with point values",
      "Define custom rewards with point costs",
      "Track accumulated points from completed tasks",
      "Redeem points for user-defined rewards",
      "Responsive design optimized for multiple devices",
      "Real-time form validation and error handling",
    ]
  },
  {
    id: 5,
    slug: "shoptheblock",
    title: "ShoptheBlock",
    subtitle:
      "React | Firebase | JavaScript | Bootstrap/Reactstrap | C# | .NET Core | SQL Server | CSS | HTML",
    category: "Full Stack Development",
    year: "2023",
    role: "Full Stack Developer",
    description:
     "A full-stack E-Commerce platform built as my capstone project at Nashville Software School. ShoptheBlock features secure user authentication and a robust SQL database to manage products and orders. I developed a RESTful web API using C# and .NET Core to handle server-side logic, while building a dynamic, responsive frontend with React. From registration to order confirmation, the app provides a seamless shopping experience with real-time data management.",
    problem:
      "The challenge was to build a comprehensive full-stack application that implemented secure user authentication and full CRUD functionality within an SQL database. Beyond basic data handling, the project required a modular architecture following the Single Responsibility Principle. Key requirements included a responsive UI, complex form handling with various input selectors (dropdowns, radios, etc.), and an efficient way for users to manage their resources—all while maintaining clean, scalable code.",
    solution:
     "I began by mapping out user stories and wireframes to define the core experience, followed by designing a detailed ERD using DBdiagram to manage complex one-to-many and many-to-many relationships. On the backend, I utilized ADO.NET and SQL Server to build the API, while Firebase handled user authorization. On the frontend, I used React and Bootstrap to create a smooth user flow: shoppers can browse by category, search for items, and manage their persistent cart. The process culminates in a multi-step checkout that includes an order summary and payment form. This project was a deep dive into the React framework and taught me how to bridge the gap between a structured C# backend and a dynamic JavaScript frontend.",
    techStack: [
      "React",
      "Firebase",
      "JavaScript",
      "Bootstrap/Reactstrap",
      "C#",
      ".NET Core",
      "SQL Server",
      "CSS",
      "HTML",
    ],
    url: "https://github.com/kawtarzz/shoptheblock-ecomm-fullstack",
    demo: "https://locus-app-f0eb9.web.app/",
    video: "videos/shoptheblock_1.mp4",
    img: "/images/shoptheblock.svg",
    features: [
      "User authentication and registration with Firebase",
      "Browse products by category with filtering options",
      "Search functionality for product discovery",
      "Shopping cart with persistent session storage",
      "Full checkout flow with order confirmation",
      "Admin dashboard for product and inventory management",
      "Responsive design across desktop and mobile devices",
      "RESTful API built with ASP.NET Core and SQL Server",
    ]
  }
];

export default projects;
