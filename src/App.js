import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import customTheme from "./constants/theme";
import { PAGE_SECTIONS } from "./constants/appData";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <NavigationBar>{[...PAGE_SECTIONS.map((section) => section.component)]}</NavigationBar>
        </ThemeProvider>
    );
}

export default App;
