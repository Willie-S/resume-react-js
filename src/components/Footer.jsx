import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                padding: "2rem",
                textAlign: "center",
                mt: 4,
                borderTop: "1px solid",
            }}
        >
            <Typography component="p" variant="caption">
                <strong>Disclaimer:</strong> "I am a web developer, not a web designer. This
                portfolio website is my first project where I designed the theme and UI in addition
                to building the site. Typically, I work from Figma or PDL designs."
            </Typography>
        </Box>
    );
};

export default Footer;
