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
    repolink: "https://github.com/kawtarzz/cooki-jar",
    demo: "https://cooki-jar.vercel.app/",
    img: "images/cookijar_02.svg",
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
    repolink: "https://github.com/kawtarzz/shoptheblock-ecomm-fullstack",
    demo: "https://locus-app-f0eb9.web.app/",
    video: "videos/shoptheblock_1.mp4",
    img: "images/shoptheblock.svg",
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
    repolink: "https://github.com/kawtarzz/eComm-AdminDash",
    demo: "https://e-comm-admin-dash-git-main-kawtarzzs-projects.vercel.app/",
    img: "images/sellerdashboard.svg",

  }
];
