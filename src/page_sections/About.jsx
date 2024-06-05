import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogContent,
    DialogActions,
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
} from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { PROFILE_DETAILS } from "../constants/appData";
import ProfileImg from "../assets/avatars/real_profile.png";
import SectionTitle from "../components/SectionTitle";
import SectionHeading from "../components/SectionHeading";
import SkillPercentageComp from "../components/SkillPercentageComp";
import InLineLinkComp from "../components/InLineLinkComp";
import ViewButtonComp from "../components/ViewButtonComp";

const About = () => {
    const theme = useTheme();
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
            title: "Online Courses",
            description: `Completed over ${PROFILE_DETAILS.onlineCourses.total} online courses to enhance my skills.`,
        },
    ];

    return (
        <section id="about" style={{ padding: "20px", minHeight: "100vh" }}>
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

                <Typography component="p" variant="body1" my={2}>
                    Below are my self-assessed
                    <InLineLinkComp onClickHandler={handleOpenProficiency}>
                        proficiency levels
                    </InLineLinkComp>
                    for various technologies I have experience in. To ensure objectivity, I have
                    evaluated each skill based on a consistent set of
                    <InLineLinkComp onClickHandler={handleOpenCriteria}>criteria.</InLineLinkComp>
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
            <Dialog open={openCriteria} onClose={handleCloseCriteria} maxWidth="md" fullWidth>
                <DialogContent dividers>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Criteria</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Years of Experience</TableCell>
                                    <TableCell>
                                        How long have you been working with the technology?
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Project Complexity</TableCell>
                                    <TableCell>
                                        What types of projects have you completed using the
                                        technology? Consider the complexity and scope.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Frequency of Use</TableCell>
                                    <TableCell>
                                        How often do you use the technology in your daily work?
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Depth of Knowledge</TableCell>
                                    <TableCell>
                                        How well do you understand the core concepts and advanced
                                        features?
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Problem-Solving Ability</TableCell>
                                    <TableCell>
                                        Can you solve complex problems and troubleshoot issues
                                        independently?
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Community Contribution</TableCell>
                                    <TableCell>
                                        Have you contributed to the technology’s community, such as
                                        through openCriteria-source projects, forums, or tutorials?
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCriteria}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Modal for Proficiency */}
            <Dialog open={openProficiency} onClose={handleCloseProficiency} maxWidth="md" fullWidth>
                <DialogContent dividers>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Level</TableCell>
                                    <TableCell>Proficiency</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="noWrap">1 - 20%</TableCell>
                                    <TableCell>Novice</TableCell>
                                    <TableCell>
                                        Just started learning the technology. Basic understanding
                                        and ability to write simple code.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="noWrap">21 - 40%</TableCell>
                                    <TableCell>Beginner</TableCell>
                                    <TableCell>
                                        Some experience with the technology. Can write more complex
                                        code but still relies heavily on documentation and guidance.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="noWrap">41 - 60%</TableCell>
                                    <TableCell>Intermediate</TableCell>
                                    <TableCell>
                                        Comfortable with the technology. Can build complete
                                        applications, solve most problems independently, and
                                        understand core concepts well.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="noWrap">61 - 80%</TableCell>
                                    <TableCell>Advanced</TableCell>
                                    <TableCell>
                                        Extensive experience with the technology. Can optimize and
                                        refactor code, understands advanced concepts, and can mentor
                                        others.
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="noWrap">81 - 100%</TableCell>
                                    <TableCell>Expert</TableCell>
                                    <TableCell>
                                        Deep expertise and mastery. Can design and architect complex
                                        systems, contribute to the technology's community, and
                                        innovate within the field.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseProficiency}>Close</Button>
                </DialogActions>
            </Dialog>
        </section>
    );
};

export default About;
