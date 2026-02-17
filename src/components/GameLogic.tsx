import { Box, Button} from "@mui/material"
import ButtonPlay from "./ButtonPlay"
import { colors } from "../theme/theme"
import Rock from "../../images/icon-rock.svg"
import Paper from "../../images/icon-paper.svg"
import Scissors from "../../images/icon-scissors.svg"

type GameLogicProps = {
    playAgain: ()=>void
}


export const GameLogic = ({playAgain}: GameLogicProps) => {
    
    function handleClickPlay (){

    }
    
    return (
    <Box
    width={"100%"}
    display={"flex"}
    >
        <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.blue}
                Icon={Paper}
                value="Paper"
            />
            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.gold}
                Icon={Scissors}
                value="Scissors"
            />
        <Button onClick={playAgain} >Play Again</Button>
    </Box>)
}