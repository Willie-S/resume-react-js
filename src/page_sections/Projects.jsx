import React from "react";
import { Box, Grid } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { PROFILE_DETAILS } from "../constants/appData";

const Projects = () => {
    return (
        <section id="projects" style={{ padding: "20px", minHeight: "100vh" }}>
            <SectionTitle title={"Projects"} />

            {/* Projects container */}
            <Box my={4} width="100%" display="flex" flexDirection="column" alignItems="center">
                {PROFILE_DETAILS.projects.map((project, index) => (
                    <Box key={index} my={2} width="100%" maxWidth="800px">
                        <ProjectCard project={project} reverse={index % 2 !== 0} />
                    </Box>
                ))}
            </Box>
        </section>
    );
};

export default Projects;
