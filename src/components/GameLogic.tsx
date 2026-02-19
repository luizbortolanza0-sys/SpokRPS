import { Box,Typography } from "@mui/material"
import {CustomizedChoice} from "./CustomizedChoice"
import { colors } from "../theme/theme"
import Rock from "../../images/icon-rock.svg"
import Paper from "../../images/icon-paper.svg"
import Scissors from "../../images/icon-scissors.svg"
import { useEffect, useState } from "react"
import { PlayAgainBox } from "./PlayAgainBox"

const min = 0;
const max = 3;
const RightRender = 2
const StartRender = 0
var Render = StartRender;

type GameLogicProps = {
    playAgain: () => void,
    addScore: () => void,
    value: string,
}



export const GameLogic = ({ playAgain, value, addScore }: GameLogicProps) => {

        const HousePick = ["Scissors", "Rock", "Paper"]

        function getRandomNumber() {
            return Math.trunc(Math.random() * (max - min) + min);
        }
        const [houseValue, setHouseValue] = useState("")
        const [winner, setWinner] = useState("")

        function compareValues(randomHousePick: string, value: string) {
            if (value === randomHousePick) {
                return "Draw"
            }
            if (value === "Scissors" && randomHousePick === "Rock") {
                return "House";
            }
            if (value === "Rock" && randomHousePick === "Paper") {
                return "House";
            }
            if (value === "Paper" && randomHousePick === "Scissors") {
                return "House";
            }
            return "Player"
        }

        function VerifyTheRightRender(){
            Render++;
            if(Render == RightRender){
                Render = StartRender;
                return true
            }
        }

        useEffect(() => {
            if (winner === "Player") {
                addScore();
            }
        }, [winner]);

        useEffect(() => {
            setTimeout(() => {
                if (VerifyTheRightRender()) {
                    const randomValue = getRandomNumber();
                    const randomHousePick = HousePick[randomValue];
                    setHouseValue(randomHousePick);
                    setWinner(compareValues(randomHousePick, value));
                }
            }, 1000);
        }, [value]);

        function VerifyWinner() {
            if (winner == "Draw") {
                return <PlayAgainBox text={"Draw"} playAgain={playAgain} />
            }
            if (winner == "House") {
                return <PlayAgainBox text={"You Lose"} playAgain={playAgain} />
            }
            if (winner == "Player") {
                return <PlayAgainBox text={"You Win"} playAgain={playAgain} />
            }
        }

        return (
            <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >

                <Box
                    display={"flex"}
                    flexDirection={{ xs: "column-reverse", sm: "column" }}
                    alignItems={"center"}
                    gap={5}

                >
                    <Typography
                        color="secondary"
                        variant="h5"
                    >
                        You Picked
                    </Typography>
                    {value === "Scissors" &&  <CustomizedChoice
                        color={colors.gold}
                        Icon={Scissors}
                    />}
                    {value === "Paper" &&  <CustomizedChoice
                        color={colors.blue}
                        Icon={Paper}
                    />}

                    {value === "Rock" &&  <CustomizedChoice
                        color={colors.red}
                        Icon={Rock}
                    />}
                </Box>

                {winner == "" ? "" : <VerifyWinner />}

                <Box
                    display={"flex"}
                    flexDirection={{ xs: "column-reverse", sm: "column" }}
                    alignItems={"center"}
                    gap={5}
                >
                    <Typography
                        color="secondary"
                        variant="h6"
                    >
                        The House Picked
                    </Typography>

                    {houseValue == "" && <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        overflow={"visible"}
                        sx={{
                            backgroundColor: "background.default",
                            opacity:"0.5",
                            height: { xs: "110px", sm: "140px" },
                            width: { xs: "110px", sm: "140px" },
                            borderRadius: "50%",
                        }}
                    >
                    </Box>}

                    {houseValue === "Rock" &&  <CustomizedChoice
                        color={colors.red}
                        Icon={Rock}
                    />}
                    {houseValue === "Scissors" &&  <CustomizedChoice
                        color={colors.gold}
                        Icon={Scissors}
                    />}
                    {houseValue === "Paper" &&  <CustomizedChoice
                        color={colors.blue}
                        Icon={Paper}
                    />}
                </Box>
            </Box>)

    return (<></>)
}