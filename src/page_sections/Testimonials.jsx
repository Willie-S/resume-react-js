import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import CarouselContainer from "../components/CarouselContainer";
import { PROFILE_DETAILS } from "../constants/appData";
import TestimonyCard from "../components/TestimonyCard";

const Testimonials = () => {
    return (
        <section id="testimonials" style={{ padding: "20px", height: "100vh" }}>
            <SectionTitle title={"Testimonials"} />

            {/* Testimonials carousel container */}
            {/* <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {PROFILE_DETAILS.testimonials.map((testimonial, i) => (
                    <TestimonyCard
                        key={i}
                        name={testimonial.name}
                        title={testimonial.title}
                        testimony={testimonial.testimony}
                    />
                ))}
            </Box> */}

            <Box
                sx={{
                    height: "80%",
                    //display: "flex",
                    justifyContent: "center",
                }}
            >
                <CarouselContainer
                    items={PROFILE_DETAILS.testimonials.map((testimonial, i) => (
                        <TestimonyCard
                            key={i}
                            name={testimonial.name}
                            title={testimonial.title}
                            testimony={testimonial.testimony}
                        />
                    ))}
                />
            </Box>
        </section>
    );
};

export default Testimonials;
