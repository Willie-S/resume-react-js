import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";

const SkillPercentageComp = ({ skillName, skillPercentage }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Typography variant="body1" textAlign="right" sx={{ flex: "0 0 25%" }}>
                {skillName}
            </Typography>

            <LinearProgress variant="determinate" value={skillPercentage} sx={{ flex: 1 }} />

            <Typography variant="body2" textAlign="left" sx={{ flex: "0 0 50px" }}>
                {Math.round(skillPercentage)}%
            </Typography>
        </Box>
    );
};

SkillPercentageComp.propTypes = {
    skillName: PropTypes.string.isRequired,
    skillPercentage: PropTypes.number.isRequired,
};

export default SkillPercentageComp;
