import { createTheme } from "@mui/material/styles";

const grey = "#3D404F";
const lightGrey = "#717e85";
const blueGrey = "#3D404F";
const blueGreyDark = "#2B2E3B";
const blueGreyLight = "#4F5361";
const offWhite = "#d9d9d9";
const neonOrange = "#ffa500";
const neonOrangeDark = "#cc8400";
const neonOrangeLight = "#ffb732";

const customTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: grey,
            light: lightGrey
        },
        text: {
            primary: offWhite,
            secondary: blueGreyDark,
            accent: neonOrange,
            emphasis: blueGreyLight
        },
        primary: {
            main: neonOrange,
            dark: neonOrangeDark,
            light: neonOrangeLight
        },
        secondary: {
            main: blueGrey,
            dark: blueGreyDark,
            light: blueGreyLight
        }
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
                        animation: 'pulsingTextShadow 2s infinite ease',
                        '@keyframes pulsingTextShadow': {
                            '0%': {
                                textShadow: `0 0 0 ${neonOrange}`,
                            },
                            '50%': {
                                textShadow: `0 0 20px ${neonOrange}`,
                            },
                            '100%': {
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
    },
});

export default customTheme;