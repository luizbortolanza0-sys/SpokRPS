import { ThemeProvider } from "@emotion/react"
import  { theme } from "./theme/theme.ts"



function App() {

  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  )
}

export default App
