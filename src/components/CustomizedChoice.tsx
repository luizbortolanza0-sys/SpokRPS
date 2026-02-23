import { Box } from "@mui/material"

interface CustomizedChoiceProps {
    color: {
        main: string,
        dark: string
    },
    Icon: string,
    winner: boolean
}

export const CustomizedChoice = ({ color, Icon, winner }: CustomizedChoiceProps) => {
    return (<Box
        height={{ xs: "150px", xl: "270px" }}
        width={{ xs: "150px", xl: "270px" }}
        borderRadius={"50%"}
        bgcolor={color.main}
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        sx={{
            borderBottom: `10px solid ${color.dark}`
        }}
    >
        <Box
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: `10px solid ${theme.palette.primary.light}`,
                backgroundColor: "white",
                height: { xs: "110px", xl: "210px" },
                width: { xs: "110px", xl: "210px" },
                borderRadius: "50%",
                ...(winner && {
                    "&::before, &::after": {
                        content: '""',
                        position: "absolute",
                        inset: "-25px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        animation: "ripple 2.5s infinite",
                    },

                    "&::after": {
                        animationDelay: "0.8s",
                    },

                    "& span": {
                        content: '""',
                        position: "absolute",
                        inset: "-25px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.1)",
                        animation: "ripple 2.5s infinite",
                        animationDelay: "1.6s",
                    },
                }),

                "@keyframes ripple": {
                    "0%": {
                        transform: "scale(1)",
                        opacity: 0.7,
                    },
                    "70%": {
                        transform: "scale(1.8)",
                        opacity: 0.5,
                    },
                    "100%": {
                        transform: "scale(2.2)",
                        opacity: 0.3,
                    },
                },
            })}
        >
            <Box component={"img"}
                src={Icon}
                sx={{
                    height: { xs: "auto", xl: "100px" },

                }}
            ></Box>
        </Box>
    </Box>)
}