import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SectionHeading from "./SectionHeading";

const TestimonyCard = ({ name, title, testimony }) => {
    return (
        <Box
            sx={{
                maxWidth: { xs: 300, sm: 400 },
                padding: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 2 }}>
                <FormatQuoteIcon />
            </Avatar>
            <Typography variant="body2" component="p" my={3}>
                <i>{testimony}</i>
            </Typography>
            <SectionHeading heading={name} />
            <Typography variant="subtitle1" mt={1}>
                {title}
            </Typography>
        </Box>
    );
};

export default TestimonyCard;
