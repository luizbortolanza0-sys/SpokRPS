import { Box, Button } from "@mui/material";


interface ButtonPlayProps {
    color: {
        main: string,
        dark: string
    },
    Icon: string,
    value: string,
     handleClickPlay: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

const ButtonPlay = ({ color, Icon, value, handleClickPlay }: ButtonPlayProps) => {
    return (
        <Box
            component={Button}
            onClick={handleClickPlay}
            value={value}
            height={{ xs: "150px", sm: "180px" }}
            width={{ xs: "150px", sm: "180px" }}
            borderRadius={"50%"}
            bgcolor={color.main}
            display={'flex'}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                borderBottom: `10px solid ${color.dark}`,
                ":hover":{
                    cursor:"pointer",
                    boxShadow:"10"
                }
            }}
        >
            <Button
                onClick={handleClickPlay}
                variant="contained"
                value={value}
                disableElevation={true}
                sx={(theme) => ({
                    borderTop: `10px solid ${theme.palette.primary.light}`,
                    backgroundColor: "white",
                    height: { xs: "110px", sm: "140px" },
                    width: { xs: "110px", sm: "140px" },
                    borderRadius: "50%",
                })}
            ><img src={Icon} alt={value} /></Button>
        </Box>);

}

export default ButtonPlay