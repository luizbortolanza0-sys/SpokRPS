import { Box, Button, Card, Stack, Typography } from "@mui/material"
import ButtonPlay from "../components/ButtonPlay"
import Rock from "../../images/icon-rock.svg"
import Paper from "../../images/icon-paper.svg"
import Scissors from "../../images/icon-scissors.svg"
import Logo from "../../images/logo.svg"
import { colors } from "../theme/theme"
import { siLK } from "@mui/material/locale"

const Home = () => {

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
            height={"100vh"}
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
                component="img"
                src={Logo}
                >

                </Box>
                <Card
                component={Box}
                elevation={5}
                height={"75%"}
                width={{xs:"30%", sm:"15%"}}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
            
                >
                    <Typography
                    sx={{
                        letterSpacing:"3px"
                    }}
                    >
                        SCORE
                    </Typography>
                    <Typography
                    fontSize={"45px"}
                    >
                        12
                    </Typography>
                </Card>
            </Box>
            <Box
                width={{ xs: '100%', sm: "90%", md: '80%' }}
                height={"50vh"}
                display={"flex"}
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
                    color={colors.red}
                    Icon={Rock}
                    value="Rock"
                    />
                    <ButtonPlay
                    color={colors.blue}
                    Icon={Paper}
                    value="Paper"
                    />
                </Box>
                <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                >
                    <ButtonPlay
                    color={colors.gold}
                    Icon={Scissors}
                    value="Scissors"
                    />
                </Box>
                
            </Box>
        </Box>
        <Box
        alignSelf={"flex-end"}
        >
            <Button
        
        >rules</Button>
        </Box>
        

    </Stack>
    )
}

export default Home