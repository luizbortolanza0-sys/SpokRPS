import { Box } from "@mui/material"
import { colors } from "../theme/theme"
import ButtonPlay from "../components/ButtonPlay"
import Rock from "../../images/icon-rock.svg"
import Paper from "../../images/icon-paper.svg"
import Scissors from "../../images/icon-scissors.svg"

type Props = {
  handleClickPlay: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
};

export const GameChoices = ({handleClickPlay}: Props) => {
    return <Box
        width={{ xs: '100%', sm: "90%", md: '80%' }}
        height={"350px"}
        display={"flex"}
        gap={{ xs: "20px", sm: "0" }}
        flexDirection={"column"}
        sx={{
            background: `url(../../images/bg-triangle.svg) no-repeat center`,
            backgroundSize: "",
        }}
    >
        <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            gap={5}
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
        </Box>
        <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
        >

            <ButtonPlay
                handleClickPlay={handleClickPlay}
                color={colors.red}
                Icon={Rock}
                value="Rock"
            />
        </Box>

    </Box>
}