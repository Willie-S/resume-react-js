// src/App.js
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#3D404F",
        },
        text: {
            primary: "#d9d9d9",
        },
        primary: {
            main: "#ffa500",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar />
            <div style={{ marginLeft: "250px" }}>
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </ThemeProvider>
    );
}

export default App;
