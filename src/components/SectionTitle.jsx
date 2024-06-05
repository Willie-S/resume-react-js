import { Typography } from "@mui/material";

const SectionTitle = ({ heading, ...props }) => {
    return (
        <Typography
            component="h3"
            variant="h5"
            className="sectionHeading"
            textAlign="center"
            {...props}
        >
            {heading}
        </Typography>
    );
};

export default SectionTitle;
