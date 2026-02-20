import { Box, Button, Card, Stack, Typography } from "@mui/material"
import Logo from "../../images/logo-bonus.svg"
import { useState } from "react"
import { Rules } from "../components/Rules"
import { GameChoices } from "../components/GameChoices"
import { GameLogic } from "../components/GameLogic"


const Home = () => {

    const [openRules, setOpenRules] = useState(false);
    const [selectPlay, setSelectPlay] = useState(false);
    const [playOption, setPlayOption] = useState("");
    const [score, setScore] = useState(0);

    function addScore (){
        setScore(score + 1)
        return
    }

    function handleClickPlay(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const value = e.currentTarget.value
        setPlayOption(value);
        setSelectPlay(true)
    }
    function playAgain(){
        setPlayOption("");
        setSelectPlay(false);
    }

    return (<Stack
        component={Box}
        height={"100vh"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}

        sx={{
            background: "radial-gradient(circle at center, hsl(214, 47%, 23%), hsl(237, 48%, 15%))"
        }}
    >
        <Box
            width={{ xs: "90%", sm: "80%", md: "65%" }}
            height={{ xs: "80vh", sm: "100vh" }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"50px"}
        >
            <Box
                width={{ xs: '100%', sm: "90%", md: '80%' }}
                height={"20vh"}
                mt={"50px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                    border: "solid 3px",
                    borderRadius: "20px"
                }}
            >
                <Box
                    pl={"15px"}
                    component="img"
                    src={Logo}
                >

                </Box>
                <Card
                    component={Box}
                    elevation={5}
                    height={"75%"}
                    width={{ xs: "35%", sm: "18%" }}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    mr={"15px"}
                >
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            letterSpacing: "3px"
                        }}
                    >
                        SCORE
                    </Typography>
                    <Typography
                        variant="h2"
                    >
                        {score}
                    </Typography>
                </Card>
            </Box>

            {selectPlay === true && <GameLogic playAgain={playAgain} value={playOption} addScore={addScore} />}
            {selectPlay === false && <GameChoices handleClickPlay={handleClickPlay} />}

        </Box>
        <Box
            alignSelf={{ xs: "center", sm: "flex-end" }}
            marginBottom={{ xs: "0px", sm: "40px" }}
            marginRight={{ xs: "0px", sm: "40px" }}
        >
            <Button
                onClick={() => {
                    setOpenRules(true)
                }}
                color="secondary"
                variant="outlined"
                sx={{
                    px: "28px",
                    py: "10px",
                    borderRadius: "10px"

                }}
            >
                <Typography
                    variant="body2"
                    marginLeft={"5px"}
                    letterSpacing={"3px"}
                >Rules
                </Typography>
            </Button>
            <Rules openRules={openRules} setOpenRules={setOpenRules} />
        </Box>


    </Stack>
    )
}

export default Home