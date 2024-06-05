import { Box, Typography } from "@mui/material";

const SectionHeading = ({ title, ...props }) => {
    return (
        <Typography component="h2" variant="h4" className="sectionTitle">
            {title}
        </Typography>
    );
};

export default SectionHeading;
