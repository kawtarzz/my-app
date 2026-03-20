export const projects = [
  {
    id: 1,
    title: "Cookijar",
    subtitle: "React | Bootstrap | JavaScript | CSS | HTML",
    description:
      "CookiJar is a productivity tracking application that gamifies task management. Built with React and JSON server, it allows users to assign point values to tasks and earn rewards upon completion. The application features full CRUD functionality, user authentication, and a responsive design.",
    problem:
      "The challenge was to create an application that allows users to manage tasks and rewards, with a responsive design for various media displays. It required a login and registration page, account-specific resources upon authentication, and CRUD operations for tasks and rewards.",
    solution:
      "CookiJar meets this challenge by allowing users to define their own rewards and point system. Users can create, view, edit, and delete tasks, earning points for each completed task. Accumulated points can be redeemed for user-defined rewards. The application ensures a responsive user experience with Bootstrap and flexboxes, and provides error handling for form submissions and deletions. All user data is stored in a JSON server, making each user's experience unique. This project, my first using React, enhanced my understanding of the framework, REST APIs, and fetch calls for querying APIs.",
    url: "https://github.com/kawtarzz/cooki-jar",
    demo: "https://cooki-jar.vercel.app/",
    img: "images/cookijar_02.svg"
  },
  {
    id: 2,
    title: "ShoptheBlock",
    subtitle:
      "React | Firebase | JavaScript | Bootstrap/Reactstrap | C# | .NET Core | SQL Server | CSS | HTML",
    description:
      "ShopTheBlock is a full-stack eCommerce platform designed to empower local artists and makers by providing a dedicated space to connect with and sell directly to their community. The platform is built with React.JS, ASP.NET Core, and SQL."
     ,
    problem:
      "To build a full-stack application with user authentication, full CRUD functionality, and an SQL database. The application should have a login and registration page, allowing users to create, read, update, and delete resources. It should support form-based resource creation and updates, querying options from the database using input selectors (radio, drop-down, check-box), and deleting resources. The application should be responsive, following the Single Responsibility principle and emphasizing modular code.",
    solution:
      " An eCommerce platform offering personalized user account privileges. Upon registration, users gain the ability to browse and shop by specific categories or utilize a search function to find desired items. The platform features a user-friendly shopping cart where items can be added and stored as users continue to browse. A seamless checkout process culminates in an order confirmation, enhancing the overall shopping experience.",
    url: "https://github.com/kawtarzz/shoptheblock-ecomm-fullstack",
    demo: "https://locus-app-f0eb9.web.app/",
    video: "videos/shoptheblock_1.mp4",
    img: "images/shoptheblock.svg"
  },
  {
    id: 3,
    title: "Seller Dashboard",
    subtitle: "Next.js | Prisma | Clerk | MySQL | Tailwind CSS | Cloudinary",
    description:
      " Seller Dashboard is a full-stack application that utilizes Next.js, Prisma, Clerk, and MySQL to provide a platform for sellers to manage their products and orders. The application features user authentication, full CRUD functionality, and a responsive design.",
    problem:
      "Create an application that allows sellers to create and manage multiple stores, add and update products, and view orders. The application should have a login and registration page, allowing users to create, read, update, and delete resources. It should support form-based resource creation and updates, querying options from the database using input selectors (radio, drop-down, check-box), and deleting resources. The application should be responsive, following the Single Responsibility principle and emphasizing modular code.",
    solution: "I developed this project to challenge myself with a new technology stack. I used Next.js for the front end, Prisma for the ORM, Clerk for user authentication, and MySQL for the database. The application features a responsive design, user authentication, and full CRUD functionality. It also allows users to upload photos for their product and billboard listings. I faced challenges with configuring Cloudinary for image uploads and Clerk for user authentication, but I overcame these challenges by reading the documentation and seeking help from online developer communities.",
    url: "https://github.com/kawtarzz/eComm-AdminDash",
    demo: "https://e-comm-admin-dash-git-main-kawtarzzs-projects.vercel.app/",
    img: "images/sellerdashboard.svg"
  },
   {
    id: 4,
    slug: "seabrook-hamptons-estuary-alliance",
    title: "Seabrook-Hamptons Estuary Alliance",
    subtitle: "WordPress · Cornerstone · CSS · UI/UX · Content Strategy",
    category: "Web Design & Development",
    year: "2024–2025",
    role: "Web Designer & Developer — Tangram 3DS",
    description:
      "SHEA is a New Hampshire coastal conservation nonprofit dedicated to protecting the Hampton-Seabrook Estuary. I designed and built their full public-facing website at Tangram 3DS, creating a site that communicates the mission of the alliance, surfaces scientific resources, and drives community engagement across the towns of Hampton, Hampton Falls, and Seabrook.",
    problem:
      "SHEA needed a professional, accessible website that could serve a broad audience — from scientists and local policymakers to community members and recreational visitors — while also supporting ongoing content management, grant announcements, event listings, and newsletter signups.",
    solution:
      "I built the site in WordPress using Cornerstone and custom CSS, establishing a clean information architecture that organizes their work into intuitive sections: Discover, Our Work, Get Involved, and Resources. I worked closely with the SHEA team on content strategy and copywriting, designed reusable page templates to support ongoing content management, and ensured the site met accessibility standards and performed well across devices.",
    techStack: [
      "WordPress",
      "Cornerstone",
      "CSS",
      "PHP",
      "UI/UX Design",
      "Content Strategy",
      "Information Architecture",
      "SEO",
    ],
    url: "",
    demo: "https://shea4nh.org/",
    img: "/images/shea-preview.svg",
  },
  {
    id: 5,
    slug: "florida-wildlife-corridor",
    title: "Florida Wildlife Corridor Foundation",
    subtitle: "WordPress · CSS · Content Management · UI/UX",
    category: "Web Design & Maintenance",
    year: "2024–2025",
    role: "Web Designer / Developer — Tangram 3DS",
    description:
      "The Florida Wildlife Corridor Foundation works to protect and connect wild Florida through land conservation, advocacy, and public engagement. At Tangram 3DS, I supported ongoing design and website maintenance for this statewide conservation organization, helping to keep their digital presence polished, performant, and aligned with their mission.",
    problem:
      "A high-profile organization like the Florida Wildlife Corridor Foundation requires consistent, high-quality website maintenance — from keeping content current around campaigns and events, to implementing design updates that reflect the evolving brand and programmatic priorities of the foundation.",
    solution:
      "I handled ongoing content management, visual design updates, and technical maintenance on their WordPress site. This included updating pages for impact campaigns and expeditions, maintaining the resource library, and ensuring design consistency across new sections. I collaborated closely with the client on messaging and layout decisions to align web presence with communications strategy.",
    techStack: [
      "WordPress",
      "CSS",
      "Cornerstone",
      "UI/UX Design",
      "Content Management",
      "Client Relations",
    ],
    url: "",
    demo: "https://floridawildlifecorridor.org/",
    img: "/images/fwc-preview.svg",
  },
  {
    id: 6,
    slug: "tangram-3ds-internal",
    title: "Tangram 3DS — Internal Marketing & Web",
    subtitle: "WordPress · Figma · Email · Social · Brand · UI/UX",
    category: "In-House Design & Development",
    year: "2024–Present",
    role: "Junior Web Designer → Associate Web Developer/Designer",
    description:
      "Since joining Tangram 3DS in August 2024 as a Junior Web Designer and Graphic Designer, I've contributed to a wide range of internal marketing and web projects — from maintaining and evolving the company website to producing marketing collateral, email campaigns, and social media content. After one year I was promoted to an Associate role with a focus in UI/UX design, client relations, content management, and information architecture.",
    problem:
      "Growing a digital agency's internal brand requires the same rigor as client work — consistent visual systems, a clear content strategy, and a website that accurately reflects the team's evolving capabilities. Day-to-day, this means managing competing priorities: keeping web content current, supporting sales with design assets, and building brand presence across channels.",
    solution:
      "I developed and maintained internal web pages, created Figma-based design assets and wireframes, produced email marketing campaigns, and managed content updates across the company's digital touchpoints. In my promoted Associate role, I took on greater ownership of UI/UX decisions, client communication, and information architecture planning for both internal projects and client engagements. My work spans the full design-to-deployment pipeline — from early concept and wireframe through to live implementation.",
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
    img: "/images/tangram-preview.svg",
  },
 
  // ─── Personal / Dev Projects ─────────────────────────────────────────────
  {
    id: 1,
    slug: "cookijar",
    title: "Cookijar",
    subtitle: "React · Bootstrap · JavaScript · CSS · HTML",
    category: "Full-Stack Development",
    year: "2023",
    role: "Solo Developer",
    description:
      "CookiJar is a productivity tracking application that gamifies task management. Built with React and JSON Server, it allows users to assign point values to tasks and earn rewards upon completion. The application features full CRUD functionality, user authentication, and a responsive design.",
    problem:
      "The challenge was to create an application that allows users to manage tasks and rewards, with a responsive design for various media displays. It required a login and registration page, account-specific resources upon authentication, and CRUD operations for tasks and rewards.",
    solution:
      "CookiJar meets this challenge by allowing users to define their own rewards and point system. Users can create, view, edit, and delete tasks, earning points for each completed task. Accumulated points can be redeemed for user-defined rewards. The application ensures a responsive user experience with Bootstrap and flexboxes, and provides error handling for form submissions and deletions. All user data is stored in a JSON server, making each user's experience unique. This project, my first using React, enhanced my understanding of the framework, REST APIs, and fetch calls for querying APIs.",
    techStack: ["React", "Bootstrap", "JavaScript", "CSS", "HTML", "JSON Server"],
    url: "https://github.com/kawtarzz/cooki-jar",
    demo: "https://cooki-jar.vercel.app/",
    img: "/images/cookijar_02.svg",
  },
  {
    id: 2,
    slug: "shoptheblock",
    title: "ShoptheBlock",
    subtitle: "React · Firebase · C# · .NET Core · SQL Server · Bootstrap",
    category: "Full-Stack Development",
    year: "2023",
    role: "Solo Developer",
    description:
      "ShopTheBlock is a full-stack eCommerce platform designed to empower local artists and makers by providing a dedicated space to connect with and sell directly to their community. The platform is built with React.JS, ASP.NET Core, and SQL.",
    problem:
      "To build a full-stack application with user authentication, full CRUD functionality, and an SQL database. The application should have a login and registration page, allowing users to create, read, update, and delete resources. It should support form-based resource creation and updates, querying options from the database, and deleting resources. The application should be responsive, following the Single Responsibility principle and emphasizing modular code.",
    solution:
      "An eCommerce platform offering personalized user account privileges. Upon registration, users gain the ability to browse and shop by specific categories or utilize a search function to find desired items. The platform features a user-friendly shopping cart where items can be added and stored as users continue to browse. A seamless checkout process culminates in an order confirmation, enhancing the overall shopping experience.",
    techStack: ["React", "Firebase", "C#", ".NET Core", "SQL Server", "Bootstrap", "JavaScript"],
    url: "https://github.com/kawtarzz/shoptheblock-ecomm-fullstack",
    demo: "https://locus-app-f0eb9.web.app/",
    video: "/videos/shoptheblock_1.mp4",
    img: "/images/shoptheblock.svg",
  },
  {
    id: 3,
    slug: "seller-dashboard",
    title: "Seller Dashboard",
    subtitle: "Next.js · Prisma · Clerk · MySQL · Tailwind CSS · Cloudinary",
    category: "Full-Stack Development",
    year: "2024",
    role: "Solo Developer",
    description:
      "Seller Dashboard is a full-stack application that utilizes Next.js, Prisma, Clerk, and MySQL to provide a platform for sellers to manage their products and orders. The application features user authentication, full CRUD functionality, and a responsive design.",
    problem:
      "Create an application that allows sellers to create and manage multiple stores, add and update products, and view orders. The application should have a login and registration page, allowing users to create, read, update, and delete resources. It should support form-based resource creation and updates, querying options from the database, and deleting resources. The application should be responsive, following the Single Responsibility principle and emphasizing modular code.",
    solution:
      "I developed this project to challenge myself with a new technology stack. I used Next.js for the front end, Prisma for the ORM, Clerk for user authentication, and MySQL for the database. The application features a responsive design, user authentication, and full CRUD functionality. It also allows users to upload photos for their product and billboard listings. I faced challenges with configuring Cloudinary for image uploads and Clerk for user authentication, but overcame these by reading the documentation and seeking help from online developer communities.",
    techStack: ["Next.js", "Prisma", "Clerk", "MySQL", "Tailwind CSS", "Cloudinary"],
    url: "https://github.com/kawtarzz/eComm-AdminDash",
    demo: "https://e-comm-admin-dash-git-main-kawtarzzs-projects.vercel.app/",
    img: "/images/sellerdashboard.svg",
  },
];
