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
    " After joining Tangram 3DS in August 2024 as a Junior Web Designer and Graphic Designer, I've contributed to a wide range of internal marketing and web projects. Working in a small boutique agency required me to wear many hats. From maintaining and evolving the company website , producing marketing collateral, email campaigns, and social media content while managing the client projects we had on the roster. After one year I was promoted to an Associate role with a focus in UI/UX design, client relations, content management, information architecture and web development. My work spans the full design-to-deployment pipeline — from early concept and wireframe through to live implementation.",
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
    subtitle: "React | Bootstrap | JavaScript | CSS | HTML",
    category: "Web Development",
    year: "2023",
    role: "Full Stack Developer",
    description:
      "CookiJar is a productivity tracking application that gamifies task management. Built with React and JSON server, it allows users to assign point values to tasks and earn rewards upon completion. The application features full CRUD functionality, user authentication, and a responsive design.",
    problem:
      "The challenge was to create an application that allows users to manage tasks and rewards, with a responsive design for various media displays. It required a login and registration page, account-specific resources upon authentication, and CRUD operations for tasks and rewards.",
    solution:
      "CookiJar meets this challenge by allowing users to define their own rewards and point system. Users can create, view, edit, and delete tasks, earning points for each completed task. Accumulated points can be redeemed for user-defined rewards. The application ensures a responsive user experience with Bootstrap and flexboxes, and provides error handling for form submissions and deletions. All user data is stored in a JSON server, making each user's experience unique. This project, my first using React, enhanced my understanding of the framework, REST APIs, and fetch calls for querying APIs.",
    techStack: ["React", "Bootstrap", "JavaScript", "CSS", "HTML", "JSON Server"],
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
      "ShopTheBlock is a full-stack eCommerce platform designed to empower local artists and makers by providing a dedicated space to connect with and sell directly to their community. The platform is built with React.JS, ASP.NET Core, and SQL.",
    problem:
      "To build a full-stack application with user authentication, full CRUD functionality, and an SQL database. The application should have a login and registration page, allowing users to create, read, update, and delete resources. It should support form-based resource creation and updates, querying options from the database using input selectors (radio, drop-down, check-box), and deleting resources. The application should be responsive, following the Single Responsibility principle and emphasizing modular code.",
    solution:
      " An eCommerce platform offering personalized user account privileges. Upon registration, users gain the ability to browse and shop by specific categories or utilize a search function to find desired items. The platform features a user-friendly shopping cart where items can be added and stored as users continue to browse. A seamless checkout process culminates in an order confirmation, enhancing the overall shopping experience.",
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
