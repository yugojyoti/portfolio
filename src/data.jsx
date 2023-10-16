import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiFlutter,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },

  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 " />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 " />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 " />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Typescript",
    icon: <SiTypescript className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: " Node ",
    icon: <SiNodedotjs className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: " Express ",
    icon: <SiExpress className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: " MongoDB",
    icon: <SiMongodb className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: " Next Js",
    icon: <TbBrandNextjs className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: "Golang",
    icon: <FaGolang className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: "Prisma",
    icon: <SiPrisma className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 " />,
    text: ".",
  },
  {
    id: nanoid(),
    title: "Flutter",
    icon: <SiFlutter className="h-16 w-16 " />,
    text: "",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/projectImage/bigBoxKart.png",
    url: " https://bigboxkaert.onrender.com/",
    github: "https://github.com/yugojyoti/ecommerce_mern",
    title: "BigBoxKart - A MERN Stack Ecommerce site",
    text: "A contemporary E-Commerce platform has been developed, with a front-end created using React, a back-end API built using Node and Express, and MongoDB serving as the database. This platform empowers users to seamlessly explore, review, and purchase products, while administrators can effortlessly manage product listings, edit details, and oversee the shipping process for customer purchases. To facilitate transactions, PayPal integration has been implemented. The technology stack includes React, Node, Express, MongoDB, and Redux for state management. ",
  },
  {
    id: nanoid(),
    img: "/projectImage/whiteboard.png",
    url: "https://whiteboard-uf3a.onrender.com",
    github: "https://github.com/yugojyoti/realtime_whiteboard_typescipt_react",
    title: "A Realtime WhiteBoard Sharing App using Mern Stack",
    text: "This is a real-time collaborative whiteboard application, enabling multiple users to join and observe live updates on the whiteboard. Users have the ability to utilize tools such as pencils, rectangles, and other shapes, as well as change colors, and perform redo and undo actions. This platform is ideal for real-time teaching or sharing creative concepts. The technology stack encompasses React, Node, Express, and Socket.IO for real-time communication, with Rough.js employed for canvas drawing. ",
  },
  {
    id: nanoid(),
    img: "/projectImage/connectZone.png",
    url: "https://connectzone.onrender.com/login",
    github: "https://github.com/yugojyoti/connectzone_mern",
    title: "ConnectZone - Mern Stack Social Media App",
    text: "This is a social media website developed with the MERN stack. Users have the ability to register, upload images, leave comments, and send friend requests to other users. Additionally, users can update their profile information. The images are stored on Cloudinary. The backend API is implemented using Express and Node.js. The technology stack includes React, Node.js, Express, MongoDB, Cloudinary, and Redux for state management. ",
  },
  {
    id: nanoid(),
    img: "/projectImage/foodpoint.png",
    url: "https://foodpoint.vercel.app/",
    github: "https://github.com/yugojyoti/reservation_2",
    title: "FoodPoint - Restaurant Booking App using Nextjs",
    text: "This is a Food booking web application, and it's entirely constructed using Next.js, encompassing both the front-end and back-end. Users can register, log in, and reserve tables for specific dates and times. For data storage, Prism and PostgreSQL are employed. The technology stack comprises Next.js, Prisma, and PostgreSQL.",
  },
  {
    id: nanoid(),
    img: "/projectImage/api.jpg",
    url: "",
    github: "https://github.com/yugojyoti/job-api_NODE-BACKEND",
    title: "Job API - Backend using Node, Express and MongoDb",
    text: "The backend API has been  developed using Node.js and Express, integrated with MongoDB. It empowers users to perform various actions, including login, registration, job creation, posting, editing, deletion, and accessing a comprehensive list of available job opportunities.",
  },
  {
    id: nanoid(),
    img: "/projectImage/api3.png",
    url: "",
    github: "https://github.com/yugojyoti/store_api_node_express",
    title: "Store API - Backend using Node, Express and MongoDb",
    text: "This straightforward store API has been crafted using Node, Express, and MongoDB. It enables users to seamlessly retrieve all store items and manage them by adding, updating, or modifying details as needed.",
  },
  {
    id: nanoid(),
    img: "/projectImage/api2.png",
    url: "",
    github: "https://github.com/yugojyoti/Task-Manager_nodejs",
    title: "TaskManager API - Backend using Node, Express and MongoDb",
    text: "This straightforward Task Manager API has been crafted using Node, Express, and MongoDB. It enables users to seamlessly retrieve all task items and manage them by adding, updating,deleting or modifying details as needed.",
  },
];
