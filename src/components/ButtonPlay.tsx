import { Box, Button } from "@mui/material";


interface ButtonPlayProps {
    color: {
        main: string,
        dark: string
    },
    Icon: string,
    value: string,
    handleClickPlay: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ButtonPlay = ({ color, Icon, value, handleClickPlay }: ButtonPlayProps) => {
    return (
        <Box
            component={Button}
            onClick={handleClickPlay}
            value={value}
            height={{ xs: "110px", xl: "150px" }}
            width={{ xs: "110px", xl: "150px" }}
            borderRadius={"50%"}
            bgcolor={color.main}
            display={'flex'}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                borderBottom: { xs: `5px solid ${color.dark}`, xl: `8px solid ${color.dark}` },
                ":hover": {
                    cursor: "pointer",
                    boxShadow: "10",
                }
            }}
        >
            <Button
                onClick={handleClickPlay}
                variant="contained"
                value={value}
                disableElevation={true}
                sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: { xs: `5px solid ${theme.palette.primary.light}`, xl: `8px solid ${theme.palette.primary.light}` },
                    backgroundColor: "white",
                    height: { xs: "80px", xl: "110px" },
                    width: { xs: "80px", xl: "110px" },
                    borderRadius: "50%"
                })}
            ><Box component={"img"}
                sx={{
                    height: { xs: "45px", xl: "63px" }
                }}
                src={Icon}
                alt={value}
            ></Box></Button>
        </Box>);

}

export default ButtonPlay