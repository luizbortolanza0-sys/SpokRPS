import { Box } from "@mui/material"
import { colors } from "../theme/theme"
import ButtonPlay from "../components/ButtonPlay"
import Rock from "../../images/icon-rock.svg"
import Paper from "../../images/icon-paper.svg"
import Scissors from "../../images/icon-scissors.svg"
import Lizard from "../../images/icon-lizard.svg"
import Spok from "../../images/icon-spock.svg"

type Props = {
  handleClickPlay: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
};

export const GameChoices = ({handleClickPlay}: Props) => {
    return <Box
        width={{ xs: '100%', sm: "90%", md: '80%' }}
        height={{xs:"280px",xl:"380px"}}
        display={"flex"}
        gap="20px"
        flexDirection={"column"}
        sx={{
            mt:'35px',
            background: `url(../../images/bg-pentagon.svg)no-repeat center`,
            backgroundSize: {xs:"280px",xl:"380px"},
        }}
    >
        <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            top={{xs:-45 ,xl:-65}}
        >
            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.gold}
                Icon={Scissors}
                value="Scissors"
            />
            
        </Box>
        <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            gap={{xs:15,xl:25}}
            position={"relative"}
            top={{xs:-75 ,xl:-100}}
        >
            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.lightBlue}
                Icon={Spok}
                value="Spok"
            />
            
            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.blue}
                Icon={Paper}
                value="Paper"
            />
            
        </Box>
        <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            gap={{xs:7,xl:15}}
            top={{xs:-55 ,xl:-65}}
        >
            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.purple}
                Icon={Lizard}
                value="Lizard"
            />
            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.red}
                Icon={Rock}
                value="Rock"
            />
            
        </Box>

    </Box>
}