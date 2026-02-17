import { Box, Button, Card, Dialog, Typography } from "@mui/material"
import CloseIcon from "../../images/icon-close.svg"
import RulesImage from "../../images/image-rules.svg"


type RulesProps = {
    openRules: boolean,
    setOpenRules: React.Dispatch<React.SetStateAction<boolean>>
}



export const Rules = ({ openRules, setOpenRules }: RulesProps) => {
    return <Dialog
        open={openRules}
    >
        <Card
            component={Box}
            display={"flex"}
            flexDirection={"column"}
            padding={"25px"}
            gap={"15px"}
        >
            <Box
                justifyContent={"space-between"}
                display={"flex"}
            >
                <Typography
                    variant="h4"
                    textTransform={"uppercase"}
                >
                    Rules
                </Typography>
                <Button
                    onClick={() => {
                        setOpenRules(false)
                    }}
                    color="primary"
                    variant="text"
                    sx={{
                        px: "28px",
                        py: "10px",
                        borderRadius: "10px"

                    }}
                >
                    <img src={CloseIcon} alt="Close Icon" />
                </Button>
            </Box>

            <img src={RulesImage} alt="Rules Image" />
        </Card>
    </Dialog>
}