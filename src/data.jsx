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
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "/projectImage/whiteboard.png",
    url: "https://whiteboard-uf3a.onrender.com",
    github: "https://github.com/yugojyoti/realtime_whiteboard_typescipt_react",
    title: "A Realtime WhiteBoard Sharing App using Mern Stack",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "/projectImage/connectZone.png",
    url: "https://connectzone.onrender.com/login",
    github: "https://github.com/yugojyoti/connectzone_mern",
    title: "ConnectZone - Mern Stack Social Media App",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "/projectImage/foodpoint.png",
    url: "https://foodpoint.vercel.app/",
    github: "https://github.com/yugojyoti/reservation_2",
    title: "FoodPoint - Restaurant Booking App using Nextjs",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "/projectImage/api.jpg",
    url: "",
    github: "https://github.com/yugojyoti/job-api_NODE-BACKEND",
    title: "Job API - Backend using Node, Express and MongoDb",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "/projectImage/api3.png",
    url: "",
    github: "https://github.com/yugojyoti/store_api_node_express",
    title: "Store API - Backend using Node, Express and MongoDb",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
