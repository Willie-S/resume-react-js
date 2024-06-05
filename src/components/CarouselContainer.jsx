import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItemComp from "./CarouselItemComp";

const config = {
    swipeable: true,
    draggable: true,
    showDots: true,
    arrows: false,
    infinite: true,
    autoPlay: false,
    //partialVisible: true,
    responsive: {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    },
};

const CarouselContainer = ({ items, ...props }) => {
    return (
        <Carousel {...config}>
            {items.map((item, index) => (
                <CarouselItemComp key={index} item={item} />
            ))}
        </Carousel>
    );
};

export default CarouselContainer;
