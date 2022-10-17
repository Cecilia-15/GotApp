import { createTheme } from "@mui/material"
import { blueGrey, grey } from "@mui/material/colors"

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: blueGrey[900]
        },
        secondary: {
            main: blueGrey[50]
        }, 
        error: {
            main: grey.A400
        }
    }
})