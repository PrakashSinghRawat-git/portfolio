import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    firebase,
    supabase,
    next,
    texty,
    jobit,
    tripguide,
} from "@/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Competetive Programming and DSA",
        icon: mobile,
    },
    {
        title: "AI + ML",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next Js",
        icon: next,
    },

    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "firebase",
        icon: firebase,
    },
    {
        name: "supabase",
        icon: supabase,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "My Education",
        company_name: "",
        icon: "",
        iconBg: "#383E56",
        date: "",
        points: [
            "Passed my 10th class with 95.6% marks from Govt. Boys Sr. Sec. School, Delhi in 2019",
            "Passed my 10th class with 95.6% marks from Rajkiya Pratibha Vikas Vidyalaya, Delhi in 2019",
            "Pursuing my degre in ECE(ai+ml) from NETAJI SUBHASH UNIVERSITY OF TECHNOLOGY, DELHI (2022-26 batch)",
        ],
    },

    {
        title: "Full stack Developer",
        company_name: "",
        icon: "",
        iconBg: "#E6DEDD",
        date: "J",
        points: [
            "Developed many meaningfull projects using react and next",
            "Using express and node.js for backend",
            "Used mongodb, firebase and supabase for database",
            "Implemented O-auth authentication firebaseAuth, NextAuth.js",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "He is one of the best developer i met. He knows how to fix stuffs and make the best of them. He is a very quick learner",
        name: "Dilshad",
        designation: "Web Developer",
        company: "carskarkhana",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
];

const projects = [
    {
        name: "Text Formatter",
        description:
            "Web-based platform that allows users to edit and format the text by capitalizing, changing the case, remove extraspaces and read aloud functionality. User can upload .txt files and then download them after editing.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: texty,
        source_code_link: "https://github.com/PrakashSinghRawat-git/texty-frontend",
        site_link: "https://texty-topaz.vercel.app/",
    },
    
];

export { services, technologies, experiences, testimonials, projects };