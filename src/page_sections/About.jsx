import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { PROFILE_DETAILS } from "../constants/appData";
import ProfileImg from "../assets/avatars/real_profile.png";

const About = () => {
    const theme = useTheme();
    const [visibleKeywords, setVisibleKeywords] = useState([]);

/*
    Perhaps use the animationend event:
    useEffect(() => {
        const handleAnimationEnd = (event) => {
            console.log('Animation ended for:', event.target.textContent);
        };

        keywordRefs.current.forEach((ref) => {
            if (ref) {
                ref.addEventListener('animationend', handleAnimationEnd);
            }
        });

        return () => {
            keywordRefs.current.forEach((ref) => {
                if (ref) {
                    ref.removeEventListener('animationend', handleAnimationEnd);
                }
            });
        };
    }, [visibleKeywords]);

    useEffect(() => {
        const keywords = [
            "Innovative",
            "Passionate",
            "Developer",
            "Engineer",
            "Full-Stack",
            "Problem Solver",
            "Team Player",
            "Tech Enthusiast",
            "Learner",
            "Mentor"
        ];
        let index = 0;

        const intervalId = setInterval(() => {
            setVisibleKeywords(keywords.slice(index, index + 3));
            index = (index + 3) % keywords.length;
        }, 3000); // Adjust timing as needed

        return () => clearInterval(intervalId);
    }, []);
*/
    const cardData = [
        {
            icon: <WorkHistoryIcon className="icon" />,
            title: `${PROFILE_DETAILS.careerDetails.durationDeveloper} Years`,
            description: `I have over ${PROFILE_DETAILS.careerDetails.durationDeveloper} years of experience as a developer, ${PROFILE_DETAILS.careerDetails.durationFullstack} of which have been spent as a full-stack developer`,
        },
        {
            icon: <SchoolIcon className="icon" />,
            title: "Qualifications",
            description: `I hold a ${PROFILE_DETAILS.qualification.fullDesc} awarded by ${PROFILE_DETAILS.qualification.institutionFull}`,
        },
        {
            icon: <ImportContactsIcon className="icon" />,
            title: "Online Courses",
            description: `Completed over ${PROFILE_DETAILS.onlineCourses.total} online courses to enhance my skills.`,
        },
    ];

    return (
        <section id="about" style={{ padding: "20px", minHeight: "100vh" }}>
            <Box sx={{ textAlign: "-webkit-center" }}>
                <Typography component="h2" variant="h4" className="sectionTitle">
                    About
                </Typography>
            </Box>

            {/* Info cards */}
            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems={{ xs: "center", md: "stretch" }}
                sx={{ marginY: "20px" }}
            >
                {cardData.map((card, index) => (
                    <Grid
                        item
                        xs={12}
                        md={4}
                        key={index}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Card sx={{ maxWidth: "400px" }}>
                            <CardContent>
                                {card.icon}
                                <Typography
                                    component="h3"
                                    variant="h5"
                                    className="sectionHeading"
                                    gutterBottom
                                >
                                    {card.title}
                                </Typography>
                                <Typography variant="body1">{card.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Bio container */}
            <Box
                my={4}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "2rem",
                }}
            >
                <Box sx={{ width: "100%", maxWidth: "300px", textAlign: "center" }}>
                    <img src={ProfileImg} alt="Profile" style={{ width: "100%" }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Typography component="h3" variant="h5" className="sectionHeading" gutterBottom>
                        My Journey
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: "justify" }}>
                        My passion for coding began early when I snagged the second prize at the
                        NMMU IT expo in my matric year. Even though my career started off as an
                        engineer in the oil & gas and forestry sectors, it was my natural affinity
                        for programming and the alure of software development that truly captivated
                        me, leading me to embark on a path where I found my true calling.
                        <br />
                        <br />
                        Initially I contributed to WPF desktop applications, but it was the dynamic
                        landscape of web development that beckoned. Through dedicated self-studies
                        (thanks Udemy, Pluralsight, MVA & Mosh Hamedani) and the following years of
                        practical experience, I swiftly evolved into a proficient full-stack
                        developer.
                        <br />
                        <br />
                        My fire shows no signs of dying out, as I aspire to become a solutions
                        architect, explore the realm of cyber security, and master the intricacies
                        of AWS. Whereto next? Who knows!
                    </Typography>
                </Box>
            </Box>

            {/* Keywords container */}
            {/* Going to take some time to perfect */}
            {/* <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: "space-around", position: 'relative' }}>
                {visibleKeywords.map((keyword, index) => (
                    <Typography
                        key={index}
                        sx={{
                            //position: 'absolute',
                            animation: `flyInOut ${1 * 3 + ((2 - index) * 0.5)}s ease ${index * 0.5}s infinite`,
                            
                        }}
                        textAlign="center"
                    >
                        {keyword}
                    </Typography>
                ))}
            </Box> */}
        </section>
    );
};

export default About;
