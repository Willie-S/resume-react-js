import React, { useState, useEffect } from "react";
import {
    Box,
    Card,
    CardContent,
    Dialog,
    Fade,
    Grid,
    Paper,
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    TableContainer,
    Typography,
    useTheme,
    useMediaQuery,
    Tooltip,
} from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { PROFILE_DETAILS, SKILLS_CRITERIA, SKILLS_PROFICIENCY_LEVELS } from "../constants/appData";
import ProfileImg from "../assets/avatars/about.png";
import SectionTitle from "../components/SectionTitle";
import SectionHeading from "../components/SectionHeading";
import SkillPercentageComp from "../components/SkillPercentageComp";
import InLineLinkComp from "../components/InLineLinkComp";
import ViewButtonComp from "../components/ViewButtonComp";

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [visibleKeywords, setVisibleKeywords] = useState([]);
    const [openCriteria, setOpenCriteria] = useState(false);
    const [openProficiency, setOpenProficiency] = useState(false);

    const handleOpenCriteria = () => {
        setOpenCriteria(true);
    };

    const handleCloseCriteria = () => {
        setOpenCriteria(false);
    };

    const handleOpenProficiency = () => {
        setOpenProficiency(true);
    };

    const handleCloseProficiency = () => {
        setOpenProficiency(false);
    };

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
            title: "Online Training",
            description: `Viewied countless YouTube tutorials. Completed over ${PROFILE_DETAILS.onlineCourses.totalCourses} online courses, exceeding ${PROFILE_DETAILS.onlineCourses.totalHours} hours.`,
        },
    ];

    return (
        <section id="about">
            <SectionTitle title={"About"} />

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
                my={5}
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
                    <SectionHeading heading={"My Journey"} textAlign="left" gutterBottom />

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
                        className="sectionHeading"
                        sx={{
                            //position: 'absolute',
                            animation: `flyInOut ${1 + ((visibleKeywords.length - 1) * 0.5 - (index * 0.5))}s ease ${index * 0.5}s infinite`,
                            
                        }}
                        textAlign="center"
                    >
                        {keyword}
                    </Typography>
                ))}
            </Box> */}

            {/* Skills matrix */}
            <Box sx={{ margin: "0 auto" }}>
                <SectionHeading heading={"Skills Matrix"} />

                <Typography component="p" variant="body1" textAlign="justify" my={2}>
                    Below are my self-assessed
                    <InLineLinkComp component="span" onClickHandler={handleOpenProficiency}>
                        proficiency levels
                    </InLineLinkComp>
                    for various technologies I have experience in. To ensure objectivity, I have
                    evaluated each skill based on a consistent set of
                    <InLineLinkComp component="span" onClickHandler={handleOpenCriteria}>
                        criteria.
                    </InLineLinkComp>
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                    }}
                >
                    <ViewButtonComp onClick={handleOpenProficiency}>
                        View Proficiency Levels
                    </ViewButtonComp>
                    <ViewButtonComp onClick={handleOpenCriteria}>View Criteria</ViewButtonComp>
                </Box>

                <Grid container spacing={2} alignItems="center">
                    {PROFILE_DETAILS.skills
                        .sort(
                            (a, b) =>
                                a.category.order - b.category.order ||
                                a.skillName.localeCompare(b.skillName)
                        )
                        .reduce((acc, skill, index, array) => {
                            if (
                                index === 0 ||
                                skill.category.name !== array[index - 1].category.name
                            ) {
                                acc.push(
                                    <Grid key={skill.category.name} item xs={12}>
                                        <Typography
                                            component="h6"
                                            variant="overline"
                                            textAlign="center"
                                        >
                                            {skill.category.name}
                                        </Typography>
                                    </Grid>
                                );
                            }
                            acc.push(
                                <Grid key={skill.skillName} item xs={12} md={6}>
                                    <SkillPercentageComp
                                        skillName={skill.skillName}
                                        skillPercentage={skill.skillPercentage}
                                    />
                                </Grid>
                            );
                            return acc;
                        }, [])}
                </Grid>
            </Box>

            {/* Modal for Criteria */}
            <Dialog
                PaperProps={{ className: "fullMode" }}
                open={openCriteria}
                onClose={handleCloseCriteria}
                maxWidth="md"
                fullWidth
            >
                <CloseIcon
                    onClick={handleCloseCriteria}
                    color="primary"
                    sx={{ alignSelf: "flex-end" }}
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {SKILLS_CRITERIA.columns.map((col, i) => (
                                    <TableCell key={i}>{col.displayText}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {SKILLS_CRITERIA.rows.map((row, r) => (
                                <TableRow key={r}>
                                    {SKILLS_CRITERIA.columns.map((col, c) => (
                                        <TableCell key={`${r}${c}`}>{row[col.name]}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>

            {/* Modal for Proficiency */}
            <Dialog
                PaperProps={{ className: "fullMode" }}
                open={openProficiency}
                onClose={handleCloseProficiency}
                maxWidth="md"
                fullWidth
            >
                <CloseIcon
                    onClick={handleCloseProficiency}
                    color="primary"
                    sx={{ alignSelf: "flex-end" }}
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {SKILLS_PROFICIENCY_LEVELS.columns.map((col, i) => {
                                    return col.hideForMobile && isMobile ? null : (
                                        <TableCell key={i} hidden={col.hideForMobile && isMobile}>
                                            {col.displayText}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {SKILLS_PROFICIENCY_LEVELS.rows.map((row, r) => (
                                <TableRow key={r}>
                                    {SKILLS_PROFICIENCY_LEVELS.columns.map((col, c) => {
                                        return col.hideForMobile && isMobile ? null : (
                                            <TableCell
                                                key={`${r}${c}`}
                                                className={c === 0 ? "noWrap" : ""}
                                            >
                                                {row[col.name]}
                                                {col.showToolTip && isMobile && (
                                                    <Tooltip
                                                        TransitionComponent={Fade}
                                                        TransitionProps={{ timeout: 600 }}
                                                        enterTouchDelay={0}
                                                        leaveTouchDelay={5000}
                                                        arrow
                                                        title={
                                                            row[
                                                                SKILLS_PROFICIENCY_LEVELS.columns.find(
                                                                    (c) => c.hideForMobile
                                                                ).name
                                                            ]
                                                        }
                                                    >
                                                        <HelpOutlineIcon
                                                            fontSize="small"
                                                            sx={{
                                                                color: theme.palette.background
                                                                    .light,
                                                                verticalAlign: "bottom",
                                                                float: "right",
                                                            }}
                                                        />
                                                    </Tooltip>
                                                )}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </section>
    );
};

export default About;
