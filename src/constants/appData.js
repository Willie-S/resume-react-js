import About from "../page_sections/About";
import Contact from "../page_sections/Contact";
import Home from "../page_sections/Home";
import Projects from "../page_sections/Projects";

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
    occupation: "Fullstack Developer"
}