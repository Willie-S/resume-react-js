import React, { useState, useEffect, useRef } from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logos/logo.png";
import { PAGE_SECTIONS, PROFILE_DETAILS } from "../constants/appData";

const drawerWidth = 250;

const NavigationBar = (props) => {
    const theme = useTheme();
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

        PAGE_SECTIONS.map(s => s.id).forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                const threshold = isScrollingDown ? offsetHeight / 3 : offsetHeight * 2 / 3;

                if (currentScrollY >= offsetTop - threshold && currentScrollY < offsetTop + offsetHeight - threshold) {
                    currentSection = sectionId;
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
            <Box
                onClick={() => { window.location.href = "/"}}
                sx={{
                    padding: "1rem",
                    display: isMobile ? "none" : "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "center"
                }}
            >
                <img src={logo} alt="Logo" style={{ width: "80%" }} />
                <Box>
                    <Typography component="p" variant="overline" textAlign="center" sx={{ color: theme.palette.background.light, lineHeight: "normal" }}>
                        <strong>{PROFILE_DETAILS.fullName}</strong>
                    </Typography>
                    <Typography component="p" variant="caption" textAlign="center" sx={{color: theme.palette.background.light}}>
                        <strong>{PROFILE_DETAILS.occupation}</strong>
                    </Typography>
                </Box>
            </Box>
            
            <Divider />

            <List>
                {PAGE_SECTIONS.map((section) => (
                    <ListItem
                        button
                        key={section.id}
                        component="a"
                        href={`/#${section.id}`}
                        className={activeSection === section.id ? "active" : ""}
                    >
                        <ListItemText primary={section.displayText} />
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
                            <img src={logo} alt="Logo" style={{ width: 80, marginRight: "auto" }} />
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
                    >
                        {drawer}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        flexShrink: 0
                    }}
                >
                    {drawer}
                </Drawer>
            )}
            <Box sx={{marginLeft: `${drawerWidth}px`}}>
                {props.children}
            </Box>
        </>
    );
};

export default NavigationBar;
