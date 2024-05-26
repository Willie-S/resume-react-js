// src/components/NavigationBar.jsx
import React, { useState, useEffect, useRef } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    AppBar,
    Toolbar,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logos/logo.png";

const NavigationBar = () => {
    const sections = ["Home", "About", "Projects", "Contact"];
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const lastScrollY = useRef(0);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY.current;

        let currentSection = "";
        lastScrollY.current = currentScrollY;

        sections.map(s => s.toLowerCase()).forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                const threshold = isScrollingDown ? offsetHeight / 3 : offsetHeight * 2 / 3;

                if (currentScrollY >= offsetTop - threshold && currentScrollY < offsetTop + offsetHeight - threshold) {
                    currentSection = section;
                }
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const drawer = (
        <>
            <div style={{ padding: "10px", textAlign: "center" }} onClick={() => { window.location.href = "/"}} >
                <img src={logo} alt="Logo" style={{ width: "100%" }} />
            </div>
            <Divider />
            <List>
                {sections.map((text) => (
                    <ListItem
                        button
                        key={text.toLowerCase()}
                        component="a"
                        href={`/#${text.toLowerCase()}`}
                        sx={{
                            backgroundColor: activeSection === text.toLowerCase() ? "rgba(255, 165, 0, 0.5)" : "transparent",
                            "&:hover": {
                                backgroundColor: "rgba(255, 165, 0, 0.5)",
                            },
                        }}
                    >
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Button variant="contained" color="primary" sx={{ margin: "10px" }}>
                Download CV
            </Button>
        </>
    );

    return (
        <>
            {isMobile ? (
                <>
                    <AppBar position="fixed">
                        <Toolbar>
                            <img src={logo} alt="Logo" style={{ width: 40, marginRight: "auto" }} />
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        anchor="right"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            "& .MuiDrawer-paper": {
                                width: 250,
                                background: "#2B2E3B",
                                color: "#d9d9d9",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 250,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: 250,
                            background: "#2B2E3B",
                            color: "#d9d9d9",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            )}
        </>
    );
};

export default NavigationBar;
