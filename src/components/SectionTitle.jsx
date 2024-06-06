import { Box, Typography } from "@mui/material";

const SectionTitle = ({ title, ...props }) => {
    return (
        <Box display="flex" justifyContent="center">
            <Typography component="h2" variant="h4" className="sectionTitle">
                {title}
            </Typography>
        </Box>
    );
};

export default SectionTitle;
