import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BackgroundImg from "../assets/images/background_3.jpg";
import ProfileImg from "../assets/avatars/cartooned_profile_cropped.png";
import "../index.css";

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const backdropColor = theme.palette.secondary.light;
    const titleColor = theme.palette.text.secondary;
    const shadowColor = "#000"; // Background's darker shade is not prominent enough
    const accentColor = theme.palette.text.accent;

    return (
        <section
            id="home"
            style={{
                minHeight: isMobile ? "calc(100vh - 5rem)" : "100vh",
                backgroundImage: `linear-gradient(${backdropColor}cc, ${backdropColor}cc), url(${BackgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                justifyContent: "flex-start",
            }}
        >
            {/* Central bottom image */}
            <Box
                sx={{
                    height: "50%",
                    maxWidth: "90%",
                }}
            >
                <img alt="Profile" src={ProfileImg} width="100%" />
            </Box>

            {/* Text containers */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "space-evenly",
                    animation: "fallAndBounce 2s ease 0s 1 normal forwards",
                }}
            >
                {/* Left-hand (upper) text */}
                <Box flex="1" minWidth="300px" p={2}>
                    <Typography
                        component="h1"
                        variant="h2"
                        textAlign="left"
                        sx={{ color: titleColor, textShadow: `0 0 15px ${accentColor}` }}
                        gutterBottom
                    >
                        <span style={{ color: accentColor }}>{"<"}</span>developer
                        <span style={{ color: accentColor }}>{">"}</span>
                    </Typography>
                    <Typography
                        component="p"
                        variant="h5"
                        textAlign="left"
                        sx={{ color: accentColor, textShadow: `0 0 20px ${shadowColor}` }}
                    >
                        Fullstack web developer speciallising in SDLC from concept to production
                    </Typography>
                </Box>

                {/* Right-hand (lower) text */}
                <Box flex="1" minWidth="300px" p={2}>
                    <Typography
                        component="h1"
                        variant="h2"
                        textAlign="right"
                        sx={{ color: titleColor, textShadow: `0 0 15px ${accentColor}` }}
                        gutterBottom
                    >
                        <span style={{ color: accentColor }}>{"<"}</span>engineer
                        <span style={{ color: accentColor }}>{">"}</span>
                    </Typography>
                    <Typography
                        component="p"
                        variant="h5"
                        textAlign="right"
                        sx={{ color: accentColor, textShadow: `0 0 20px ${shadowColor}` }}
                    >
                        It's not just about the solution, it's about elegence and efficiency
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default Home;
