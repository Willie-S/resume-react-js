import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const About = () => {
    const theme = useTheme();

    return (
        <section id="about" style={{ padding: "20px", minHeight: "100vh" }}>
            <Box sx={{textAlign: "-webkit-center"}}>
                <Typography component="h2" variant="h4" className="sectionTitle">
                    About
                </Typography>
            </Box>

            
        </section>
    );
};

export default About;
