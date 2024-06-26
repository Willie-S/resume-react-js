import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const grey = "#3D404F";
const lightGrey = "#717e85";
const blueGrey = "#3D404F";
const blueGreyDark = "#2B2E3B";
const blueGreyLight = "#4F5361";
const offWhite = "#d9d9d9";
const neonOrange = "#ffa500";
const neonOrangeDark = "#cc8400";
const neonOrangeLight = "#ffb732";

const breakpoints = createBreakpoints({});

const customTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: grey,
            light: lightGrey,
        },
        text: {
            primary: offWhite,
            secondary: blueGreyDark,
            accent: neonOrange,
            emphasis: blueGreyLight,
        },
        primary: {
            main: neonOrange,
            dark: neonOrangeDark,
            light: neonOrangeLight,
        },
        secondary: {
            main: blueGrey,
            dark: blueGreyDark,
            light: blueGreyLight,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
                containedPrimary: {
                    backgroundColor: neonOrange,
                    color: blueGreyDark,
                    "&:hover": {
                        backgroundColor: neonOrangeLight,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: blueGreyDark,
                    backgroundImage: "none",
                    color: offWhite,
                    textAlign: "center",
                    borderRadius: "2rem",
                    boxShadow: `2px 5px 5px ${neonOrange}40`,
                    transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    "& .icon": {
                        fontSize: "60px",
                        marginBottom: "10px",
                        //color: neonOrange
                    },
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                    "&.projectCard": {
                        display: "flex",
                        flexDirection: "row",
                        aspectRatio: 10 / 3,
                        [breakpoints.down("md")]: {
                            flexDirection: "column !important",
                            aspectRatio: "auto",
                        },
                        "& .backgroundImage": {
                            transition: "transform 0.3s ease-in-out",
                            width: "50%",
                            aspectRatio: 2,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            [breakpoints.down("md")]: {
                                width: "100%",
                            },
                        },
                        "&:hover": {
                            transform: "none",
                            "&:hover .backgroundImage": {
                                transform: "scale(1.1)",
                            },
                        },
                    },
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "inherit !important",
                    "&.projectCard": {
                        width: "50%",
                        [breakpoints.down("md")]: {
                            width: "100%",
                        },
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: blueGrey,
                    borderRadius: "1rem",
                    "&.fullMode": {
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                    },
                    "&.MuiDialog-paper": {
                        "&.fullMode": {
                            [breakpoints.down("md")]: {
                                margin: "1rem",
                                width: "calc(100% - 1rem)",
                            },
                        },
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 250,
                    background: blueGreyDark,
                    color: offWhite,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    "&.active": {
                        color: neonOrange,
                        animation: "pulsingTextShadow 2s infinite ease",
                        "@keyframes pulsingTextShadow": {
                            "0%": {
                                textShadow: `0 0 0 ${neonOrange}`,
                            },
                            "50%": {
                                textShadow: `0 0 20px ${neonOrange}`,
                            },
                            "100%": {
                                textShadow: `0 0 0 ${neonOrange}`,
                            },
                        },
                    },
                    "&:hover": {
                        backgroundColor: `${neonOrange}80`,
                    },
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: blueGreyDark,
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "& > .MuiTableCell-root": {
                        borderBottomColor: blueGreyLight,
                    },
                    "& > .MuiTableCell-head": {
                        borderBottomColor: `${neonOrange}40`,
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    "&.noWrap": {
                        whiteSpace: "nowrap",
                    },
                    [breakpoints.down("md")]: {
                        padding: "0.5rem",
                    },
                },
                head: {
                    textAlign: "center",
                    color: neonOrange,
                    fontWeight: 600,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    "&.sectionTitle": {
                        textAlign: "center",
                        textTransform: "uppercase",
                        width: "fit-content",
                        padding: "0 20px 10px 20px",
                        borderBottom: `1px solid ${neonOrange}`,
                        //color: blueGreyDark,
                        textShadow: `0 0 20px ${neonOrange}`,
                    },
                    "&.sectionHeading": {
                        color: neonOrange,
                    },
                },
            },
        },
    },
});

export default responsiveFontSizes(customTheme);
