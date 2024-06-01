import About from "../page_sections/About";
import Contact from "../page_sections/Contact";
import Home from "../page_sections/Home";
import Projects from "../page_sections/Projects";
import { getNumYears } from "../utilities/generalHelper";

export const PAGE_SECTIONS = [
    {
        id: "home",
        displayText: "Home",
        component: <Home />
    },
    {
        id: "about",
        displayText: "About",
        component: <About />
    },
    {
        id: "projects",
        displayText: "Projects",
        component: <Projects />
    },
    {
        id: "contact",
        displayText: "Contact",
        component: <Contact />
    }
];

export const PROFILE_DETAILS = {
    firstName: "Willie",
    fullName: "Willie Swanepoel",
    occupation: "Fullstack Developer",
    qualification: {
        shortDesc: "BEng (Mechatronics)",
        fullDesc: "Bachelor's degree of engineering in Mechatronics",
        institutionShort: "NMMU",
        institutionFull: "Nelson Mandela Metropolitan University"
    },
    careerDetails: {
        durationTotal: getNumYears(2014),
        durationFullstack: getNumYears(2020),
        durationDeveloper: getNumYears(2017, false)
    },
    onlineCourses: {
        total: 10,
        names: [
            "course 1"
        ]
    }
}