import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BackgroundImg from "../assets/images/background_3.jpg";
//import HeroImg from "../assets/images/chat_bubble.png";
import ProfileImg from "../assets/avatars/cartooned_profile_cropped.png";

const Home = () => {
    const theme = useTheme();
    const backdropColor = theme.palette.secondary.light;
    const titleColor = theme.palette.text.secondary;
    const shadowColor = theme.palette.text.secondary;
    const accentColor = theme.palette.text.accent;

    return (
        <section
            id="home"
            style={{
                height: "100vh",
                backgroundImage: `linear-gradient(${backdropColor}cc, ${backdropColor}cc), url(${BackgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <Box sx={{
                    height: "50%"
                }}>
                    <img alt="Profile" src={ProfileImg} height="100%" />
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Box width="49%" p={1}>
                        <Typography component="h1" variant="h2" textAlign="left" sx={{color: titleColor, 
                        textShadow: `0 0 15px ${accentColor}`,}} gutterBottom>
                            <span style={{color: accentColor}}>{'<'}</span>developer<span style={{color: accentColor}}>{'>'}</span>
                        </Typography>
                        <Typography component="p" variant="h5" textAlign="left" sx={{color: titleColor, textShadow: `0 0 20px ${shadowColor}`}}>
                            Fullstack web developer speciallising in SDLC from concept to production
                        </Typography>
                    </Box>
                    <Box width="49%" p={1}>
                        <Typography component="h1" variant="h2" textAlign="right" sx={{color: titleColor, textShadow: `0 0 15px ${accentColor}`}} gutterBottom>
                            <span style={{color: accentColor}}>{'<'}</span>engineer<span style={{color: accentColor}}>{'>'}</span>
                        </Typography>
                        <Typography component="p" variant="h5" textAlign="right" sx={{color: titleColor, textShadow: `0 0 20px ${shadowColor}`}}>
                            It's not just about the solution, it's about elegence and efficiency
                        </Typography>
                    </Box>
                </Box>
                {/* <Box height="40%">
                    <img alt="Hero" src={HeroImg} height="100%"/>
                </Box> */}
            </Box>
        </section>
    );
};

export default Home;
