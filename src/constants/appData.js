import GitHubIcon from "@mui/icons-material/GitHub";
import About from "../page_sections/About";
import Contact from "../page_sections/Contact";
import Home from "../page_sections/Home";
import Projects from "../page_sections/Projects";
import { getNumYears } from "../utilities/generalHelper";
import LogoImg from "../assets/logos/logo.png";
import ResumeCardImg from "../assets/images/resume_card.png";
import ResumePreviewImg from "../assets/images/resume_preview.png";

export const PAGE_SECTIONS = [
    {
        id: "home",
        displayText: "Home",
        component: <Home />,
    },
    {
        id: "about",
        displayText: "About",
        component: <About />,
    },
    {
        id: "projects",
        displayText: "Projects",
        component: <Projects />,
    },
    {
        id: "contact",
        displayText: "Contact",
        component: <Contact />,
    },
];

export const PROFILE_DETAILS = {
    firstName: "Willie",
    fullName: "Willie Swanepoel",
    occupation: "Fullstack Developer",
    qualification: {
        shortDesc: "BEng (Mechatronics)",
        fullDesc: "Bachelor's degree of engineering in Mechatronics",
        institutionShort: "NMMU",
        institutionFull: "Nelson Mandela Metropolitan University",
    },
    careerDetails: {
        durationTotal: getNumYears(2014),
        durationFullstack: getNumYears(2020),
        durationDeveloper: getNumYears(2017, false),
    },
    onlineCourses: {
        total: 10,
        names: ["course 1"],
    },
    skills: [
        { skillName: "React", skillPercentage: 65, category: { order: 1, name: "Frontend" } },
        { skillName: "Material UI", skillPercentage: 65, category: { order: 1, name: "Frontend" } },
        { skillName: "Typescript", skillPercentage: 45, category: { order: 1, name: "Frontend" } },
        { skillName: "JavaScript", skillPercentage: 75, category: { order: 1, name: "Frontend" } },
        { skillName: "HTML & CSS", skillPercentage: 70, category: { order: 1, name: "Frontend" } },
        { skillName: "AngularJS", skillPercentage: 40, category: { order: 1, name: "Frontend" } },
        { skillName: "Bootstrap", skillPercentage: 40, category: { order: 1, name: "Frontend" } },
        { skillName: "C#", skillPercentage: 85, category: { order: 2, name: "Backend" } },
        {
            skillName: ".Net Framework",
            skillPercentage: 80,
            category: { order: 2, name: "Backend" },
        },
        { skillName: "ASP.Net", skillPercentage: 75, category: { order: 2, name: "Backend" } },
        { skillName: "Restful API", skillPercentage: 75, category: { order: 2, name: "Backend" } },
        {
            skillName: "Entity Framework",
            skillPercentage: 70,
            category: { order: 2, name: "Backend" },
        },
        { skillName: "SQL Server", skillPercentage: 70, category: { order: 2, name: "Backend" } },
        {
            skillName: "S3 (AWS)",
            skillPercentage: 60,
            category: { order: 3, name: "Cloud Services" },
        },
        {
            skillName: "CloudFront (AWS)",
            skillPercentage: 60,
            category: { order: 3, name: "Cloud Services" },
        },
        {
            skillName: "CodeBuild (AWS)",
            skillPercentage: 60,
            category: { order: 3, name: "Cloud Services" },
        },
        { skillName: "Azure", skillPercentage: 60, category: { order: 3, name: "Cloud Services" } },
        {
            skillName: "Unit/Integration Tests",
            skillPercentage: 35,
            category: { order: 5, name: "Other" },
        },
        { skillName: "WPF", skillPercentage: 20, category: { order: 1, name: "Frontend" } },
        { skillName: "MVC", skillPercentage: 20, category: { order: 5, name: "Other" } },
        { skillName: "MVVM", skillPercentage: 20, category: { order: 5, name: "Other" } },
        { skillName: "Xamarin", skillPercentage: 15, category: { order: 4, name: "Mobile" } },
        { skillName: "SQLite", skillPercentage: 15, category: { order: 4, name: "Mobile" } },
    ],
    projects: [
        {
            projectName: "Resumé ME",
            descShort: "A personal portfolio site written in ReactJS with Material-UI",
            descriptions: [
                "Well, you know, it's this exact application...",
                "It's a single-page ReactJS web application built with Material UI to build up my portfolio as a software developer.",
                "At the time of its creation, it's purely a frontend application with static assets and profile details. However, to showcase my abilities as a fullstack developer (as advertised), I will be moving all the static details into a database and create a backend API to fetch the data.",
            ],
            url: "https://localhost:3000",
            repoUrl: "https://github.com/Willie-S/resume-react-js",
            repoIcon: <GitHubIcon />,
            cardBackgroundImg: ResumeCardImg,
            logoImg: LogoImg,
            previewImg: ResumePreviewImg,
        },
        {
            projectName: "Resumé ME",
            descShort: "A personal portfolio site written in ReactJS with Material-UI",
            descriptions: [
                "Well, you know, it's this exact application...",
                "It's a single-page ReactJS web application built with Material UI to build up my portfolio as a software developer.",
                "At the time of its creation, it's purely a frontend application with static assets and profile details. However, to showcase my abilities as a fullstack developer (as advertised), I will be moving all the static details into a database and create a backend API to fetch the data.",
            ],
            url: "https://localhost:3000",
            repoUrl: "https://github.com/Willie-S/resume-react-js",
            repoIcon: <GitHubIcon />,
            cardBackgroundImg: ResumeCardImg,
            logoImg: LogoImg,
            previewImg: ResumePreviewImg,
        },
    ],
};
