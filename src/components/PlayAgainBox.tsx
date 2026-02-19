import { Box, Button, Typography } from "@mui/material"

type PlayAgainProps = {
    playAgain: () => void,
    text:string,
}

export const PlayAgainBox = ({playAgain,text}:PlayAgainProps)=>{
    return <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"1px"}
            overflow ="visible"
            position={"relative"}
            bottom={{xs:"-190px",sm:"0"}}
            >
                <Typography
                variant="h3"
                color="secondary"
                textTransform={"uppercase"}
                sx={{
                    overflow: "visible",
                    whiteSpace: 'nowrap'
                }}
                >{text}</Typography>
                <Button 
                variant="contained"
                onClick={playAgain}
                sx={{
                    backgroundColor:"secondary.main",
                    color:"background.default",
                    overflow: "visible",
                    whiteSpace: 'nowrap',
                    py:1.5,
                    px:6,
                    letterSpacing:"3px",
                    ":hover":{
                        color:'error.main'
                    }
                }} 
                ><Typography
                fontSize={"22px"}
                >Play Again</Typography></Button>
            </Box>
}

