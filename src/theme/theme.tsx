import { createTheme } from "@mui/material";
import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";

export const theme = createTheme({
    palette: {
        primary: {
            light:"hsl(220, 15%, 86%)",
            main: 'hsl(246, 11%, 37%)'
        },
        secondary:{
            main:"hsl(0, 0%, 100%)"
        },
        background:{
            default:"hsl(237, 48%, 15%, 0.5)"
        },
        text: {
            primary: 'hsl(229, 25%, 31%)',
            secondary: "hsl(229, 64%, 46%)",
        }
    },
    typography:{
        fontFamily:"'Barlow Semi Condensed', sans-serif",
        h2:{
            fontWeight:"700"
        },
        h4:{
            fontWeight:"700"
        },
        body2:{
            fontWeight:"600"
        }
    }
});


export const colors = {

    gold: {
        main: "hsl(39, 89%, 49%)",
        dark: "hsl(28, 76%, 44%)",
    },
    blue: {
        main: "hsl(230, 89%, 62%)",
        dark: "hsl(229, 64%, 46%)",
    },
    red: {
        main: "hsl(349, 71%, 52%)",
        dark: "hsl(347, 75%, 35%)",
    },
};
