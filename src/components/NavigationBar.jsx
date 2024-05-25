// src/components/NavigationBar.jsx
import React, { useState } from "react";
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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <div style={{ padding: "10px", textAlign: "center" }}>
                <img src={logo} alt="Logo" style={{ width: "100%" }} />
            </div>
            <Divider />
            <List>
                {sections.map((text) => (
                    <ListItem
                        button
                        key={text}
                        sx={{
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
