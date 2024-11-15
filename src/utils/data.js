import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaNodeJs, FaFigma, FaDatabase } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GoPackage } from "react-icons/go";
import { AiOutlineApi } from "react-icons/ai";


export const projectExperience = [
  {
    name: "Front-End Development (reactjs)",
    // projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "App Development (React Native)",
    // projects: 47,
    icon: TbBrandReactNative ,
    bg: "blue",
  },
  {
    name: "Figma",
    // projects: 47,
    icon: FaFigma,
    bg: "#286F6C",
  },
  {
    name: "Node.js/Express",
    // projects: 47,
    icon: FaNodeJs,
    bg: "#F26440",
  },
  {
    name: "MongoDB/SQL",
    // projects: 47,
    icon: FaDatabase,
    bg: "#F26440",
  },
  {
    name: "Mongoose/Jquery/Bootstrap",
    // projects: 47,
    icon: GoPackage,
    bg: "#F26440",
  }, 
  {
    name: "Rest API (Basics)",
    // projects: 47,
    icon: AiOutlineApi,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "My name is Abhishek. A student of Computer Science Engineering with multi-tasking abilities, I enjoy Web and Application development",
  "I am also involved in various extra-curricular activities such as event management, projects, hackathons, and projects, which demonstrate your commitment to learning and applying your skills to real-world challenges. Continue to seek out new possibilities and challenges, and don't be hesitant to venture outside of your comfort zone to attempt new things. With your multitasking abilities and commitment to study, you will be successful in whichever route you choose! as well as additional lines",
];

export const workExp = [
  {
    place: "IEEE Club",
    tenure: "June 2022 - 2023",
    role: "IEEE Lead",
    detail:
      "As an IEEE member, I organized and executed a variety of technical and non-technical events in college, including workshops on AI and IoT, guest lectures by industry experts, and hackathons promoting innovation. These events not only enhanced my leadership and project management skills but also fostered a collaborative learning environment for fellow students.",
  },
  {
    place: "Solitaire Infosys, Mohali ",
    tenure: "Sep 2021 - Till now",
    role: "Training",
    detail:
      "The National Service Scheme (NSS) is a program under the Ministry of Youth Affairs and Sports, Government of India. It is a voluntary organization that aims to develop the personality of students through community service. NSS offers a variety of volunteer roles to students who are interested in making a positive impact on their local communities",
  },
  {
    place: "UNified Mentor ",
    tenure: "FEB 2024 - May 2024",
    role: "Full Stack Internship",
    detail:
      "Successfully completed a 3-month internship at Unified Mentor, gaining hands-on experience in building and deploying web applications using technologies like React, Node.js, Express, and MongoDB. Developed responsive UIs, robust backends, and deployed applications to cloud platforms, enhancing my skills in both frontend and backend development.",
  },
  {
    place: "Homenetics Technology Pvt. Ltd.",
    tenure: "May 2024 - Till now",
    role: "App Developer Intern",
    detail:
      " Involving in the creation of a home automation application, integrating features that increased user customization options and streamlined device control ,Actively contributed to strategic planning and decision-making, influencing the technological direction of the company",
  },
  // {
  //   place: "Verzeo ",
  //   tenure: "Aug 2023 - Till now",
  //   role: "Campus Ambassador",
  //   detail:
  //     "A Campus Ambassador Internship is a programme in which students are chosen to represent a business or organisation on their campus. A campus ambassador's primary responsibility is to serve as a connection between the firm and the students on campus. I worked as an intermediary for the corporation on my campus.",
  // },
  // {
  //   place: "mnbm,m ",
  //   tenure: "March 2023 - Till now",
  //   role: "Internship",
  //   detail:
  //     "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  // },
];

export const comments = [
  {
    name: "Abhishek Mishra",
    post: "Creative Director",
    comment:
      "Great work! The design layout is clean and engaging. Looking forward to more from your portfolio.",
    img: "./abhishek.png",
  },
  {
    name: "Neha Sharma",
    post: "Graphic Designer",
    comment:
      "I love the use of color in your designs. It really makes the visuals pop!",
    img: "./neha.png",
  },
  {
    name: "Rajesh Kumar",
    post: "Marketing Manager",
    comment:
      "Your marketing mockups are impressive. They clearly convey the message without needing much text.",
    img: "./rajesh.png",
  },
  {
    name: "Priya Patel",
    post: "Content Writer",
    comment:
      "The content integration in your designs is seamless. It enhances the overall user experience.",
    img: "./priya.png",
  },
  {
    name: "Amit Singh",
    post: "UX/UI Designer",
    comment:
      "Your UX/UI designs are intuitive and user-friendly. It's clear you prioritize usability.",
    img: "./amit.png",
  },
  {
    name: "Pooja Gupta",
    post: "Product Manager",
    comment:
      "Impressive use of product features in your designs. It really showcases their functionality.",
    img: "./pooja.png",
  },
  {
    name: "Vikram Mehta",
    post: "Frontend Developer",
    comment:
      "Your frontend work is top-notch. The designs are not only visually appealing but also functional.",
    img: "./vikram.png",
  },
  {
    name: "Sneha Reddy",
    post: "SEO Specialist",
    comment:
      "Your site structure and layout are well-optimized for SEO. It's evident in the design choices.",
    img: "./sneha.png",
  },
  {
    name: "Kiran Verma",
    post: "Art Director",
    comment:
      "The art direction in your designs is outstanding. It effectively communicates the brand's aesthetics.",
    img: "./kiran.png",
  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
