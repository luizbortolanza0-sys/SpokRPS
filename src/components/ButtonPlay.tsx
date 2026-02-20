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
            height={{ xs: "110px", sm: "150px" }}
            width={{ xs: "110px", sm: "150px" }}
            borderRadius={"50%"}
            bgcolor={color.main}
            display={'flex'}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
                borderBottom: {xs:`5px solid ${color.dark}`,sm:`10px solid ${color.dark}`},
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
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    borderTop: {xs:`5px solid ${theme.palette.primary.light}`, sm:`10px solid ${theme.palette.primary.light}`},
                    backgroundColor: "white",
                    height: { xs: "80px", sm: "110px" },
                    width: { xs: "80px", sm: "110px" },
                    borderRadius: "50%",
                })}
            ><Box component={"img"}
            sx={{
                height:{xs:"45px",sm:"63px"}
            }}            
            src={Icon}
            alt={value}
            ></Box></Button>
        </Box>);

}

export default ButtonPlay