// src/components/Home.jsx
import React from "react";
import BackgroundImg from "../assets/images/background_1.jpg";

const Home = () => {
    return (
        <section
            id="home"
            style={{
                padding: "20px",
                height: "100vh", // Make it full viewport height
                backgroundImage: `url(${BackgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "#d9d9d9", // Ensure text is readable
            }}
        >
            <h1>Home</h1>
            <p>Welcome to my portfolio.</p>
        </section>
    );
};

export default Home;
