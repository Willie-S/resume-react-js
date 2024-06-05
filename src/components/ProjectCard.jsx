import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import SectionHeading from "./SectionHeading";
import ViewButtonComp from "./ViewButtonComp";

const ProjectCard = ({ project, reverse = false }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* Project card info */}
            <Card
                className="projectCard"
                onClick={handleOpen}
                sx={{
                    flexDirection: reverse ? "row-reverse !important" : "row",
                }}
            >
                {/* Card image */}
                <Box
                    className="backgroundImage"
                    sx={{
                        backgroundImage: `url(${project.cardBackgroundImg})`,
                    }}
                />
                {/* Project info */}
                <CardContent className="projectCard">
                    <SectionHeading heading={project.projectName} />
                    <Typography variant="body2">{project.descShort}</Typography>
                    <ViewButtonComp>View Project Details</ViewButtonComp>
                </CardContent>
            </Card>

            {/* Project dialog */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                {/* Preview image */}
                <Box
                    sx={{
                        backgroundImage: `linear-gradient(${theme.palette.secondary.dark}80, ${theme.palette.secondary.dark}80), url(${project.previewImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: 4 / 3,
                        maxHeight: "40vh",
                    }}
                />
                {/* Project details */}
                <CardContent sx={{ gap: 4 }}>
                    {/* Project name */}
                    <SectionHeading heading={project.projectName} />

                    {/* Full description */}
                    <Box>
                        {project.descriptions.map((desc, i) => (
                            <Typography
                                key={i}
                                component="p"
                                variant="body2"
                                textAlign="justify"
                                gutterBottom
                            >
                                {desc}
                            </Typography>
                        ))}
                    </Box>

                    {/* URLs */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <ViewButtonComp
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </ViewButtonComp>
                        <ViewButtonComp
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Repository
                        </ViewButtonComp>
                    </Box>
                </CardContent>
            </Dialog>
        </>
    );
};

export default ProjectCard;
