import { Typography } from "@mui/material";

const SectionHeading = ({ heading, ...props }) => {
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

export default SectionHeading;
