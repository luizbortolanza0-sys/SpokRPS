import { Box, Button, Typography } from "@mui/material"

type PlayAgainProps = {
    playAgain: () => void,
    text:string,
    color:string
}

export const PlayAgainBox = ({playAgain,text,color}:PlayAgainProps)=>{
    return <Box>
                <Typography>{text}</Typography>
                <Button onClick={playAgain} >Play Again</Button>
            </Box>
}

