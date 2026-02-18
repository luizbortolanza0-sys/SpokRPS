import { Box } from "@mui/material"

interface CustomizedChoiceProps {
    color: {
        main: string,
        dark: string
    },
    Icon: string,
}

export const CustomizedChoice = ({ color, Icon }: CustomizedChoiceProps) => {
    return (<Box
        height={{ xs: "150px", sm: "270px" }}
        width={{ xs: "150px", sm: "270px" }}
        borderRadius={"50%"}
        bgcolor={color.main}
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
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
                height: { xs: "110px", sm: "210px" },
                width: { xs: "110px", sm: "210px" },
                borderRadius: "50%",
            })}
        >
            <Box component={"img"}
            src={Icon}
            sx={{
                height: { xs: "auto", sm: "100px" },

            }}
            ></Box>
        </Box>
    </Box>)
}