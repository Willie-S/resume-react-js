import React from "react";
import { Box } from "@mui/material";

const CarouselItemComp = ({ item, ...props }) => {
    return (
        <Box mx={1} display="flex" justifyContent="center">
            {item}
        </Box>
    );
};

export default CarouselItemComp;
