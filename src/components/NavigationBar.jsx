import React, { useState, useEffect, useRef } from "react";
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { PAGE_SECTIONS, PROFILE_DETAILS } from "../constants/appData";
import Footer from "./Footer";
import logo from "../assets/logos/logo.png";
import CvFile from "../assets/documents/CV & References Willie Swanepoel.pdf";

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

    const handleCvDownload = () => {
        const link = document.createElement("a");
        link.href = CvFile;
        link.download = "CV & References Willie Swanepoel.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleScroll = () => {
        /*/
            Set active navigation link based on scrolling up or down. A section is marked active 
            as soon as a third of its contents come into view. When scrolling down, the top 33% 
            of the next section needs to be visible for it to be marked active. when scrolling up, 
            the bottom 33% of the previous section needs to be visible for it to be marked active
        /*/
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY.current;

        let currentSection = "";
        lastScrollY.current = currentScrollY;

        PAGE_SECTIONS.map((s) => s.id).forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                const threshold = isScrollingDown
                    ? window.innerHeight / 3
                    : (window.innerHeight * 2) / 3;

                if (
                    currentScrollY >= offsetTop - threshold &&
                    currentScrollY < offsetTop + offsetHeight - threshold
                ) {
                    currentSection = sectionId;
                }
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        // Manually trigger the scroll event to mark the default section active
        handleScroll();

        // Register the event listener
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Cleanup the event listener
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const drawer = (
        <>
            {/* Icon and profile name */}
            <Box
                onClick={() => {
                    window.location.href = "/";
                }}
                sx={{
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "center",
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: "80%", display: isMobile ? "none" : "block" }}
                />
                <Box>
                    <Typography
                        component="p"
                        variant="overline"
                        textAlign="center"
                        sx={{ color: theme.palette.background.light, lineHeight: "normal" }}
                    >
                        <strong>{PROFILE_DETAILS.fullName}</strong>
                    </Typography>
                    <Typography
                        component="p"
                        variant="caption"
                        textAlign="center"
                        sx={{ color: theme.palette.background.light }}
                    >
                        <strong>{PROFILE_DETAILS.occupation}</strong>
                    </Typography>
                </Box>
            </Box>

            <Divider />

            {/* Navigation links */}
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

            {/* A powerful quote I enjoy */}
            <Box my={2} mx={1}>
                <Typography component="p" variant="caption" textAlign="center" gutterBottom>
                    <i>
                        "Your <strong>attitude</strong>, not your <strong>aptitude</strong>, will
                        determine your <strong>altitude</strong>"
                    </i>
                </Typography>
                <Typography component="p" variant="caption" textAlign="center">
                    ~ Zig Ziglar
                </Typography>
            </Box>

            <Divider />

            {/* CV download button */}
            <Button variant="contained" onClick={handleCvDownload} sx={{ margin: "1rem 0.5rem" }}>
                Download CV
            </Button>

            <Divider />

            {/* Various Links */}
            <Box
                sx={{
                    margin: "1rem 0.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                {PROFILE_DETAILS.links.map((link, i) => (
                    <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </Link>
                ))}
            </Box>
        </>
    );

    return (
        <>
            {isMobile ? (
                <>
                    <AppBar position="fixed">
                        <Toolbar>
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ width: 80, padding: "10px", marginRight: "auto" }}
                            />
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
                    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                        {drawer}
                    </Drawer>
                </>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        flexShrink: 0,
                    }}
                >
                    {drawer}
                </Drawer>
            )}

            <Box
                sx={{
                    marginLeft: `${!isMobile ? drawerWidth : 0}px`,
                    marginTop: `${isMobile ? 5 : 0}rem`,
                }}
            >
                {props.children}
                <Footer />
            </Box>
        </>
    );
};

export default NavigationBar;
