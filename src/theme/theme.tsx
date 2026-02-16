import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            light:"hsl(220, 15%, 72%)",
            main: 'hsl(246, 11%, 37%)'
        },
        text: {
            primary: 'hsl(229, 25%, 31%)',
            secondary: "hsl(229, 64%, 46%)"
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
