import { ThemeProvider } from "@emotion/react"
import  { theme } from "./theme/theme"
import Home from "./pages/Home"
import { CssBaseline } from "@mui/material"


function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Home />
    </ThemeProvider>
  )
}

export default App
