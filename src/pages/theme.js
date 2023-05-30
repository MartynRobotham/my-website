import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            light: '#A1D8CE',
            main: '#4DB4A3',
            dark: '#009177'
        },
        secondary: {
            light: '#FB8AA4',
            main: '#F9537B'
        },
        info: {
            main: '#000000'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: '#ABF62D'
                }

            }
        },
        MuiButton: {
            root: '#3A4249'
        },
        MuiMobileStepper: {
            styleOverrides: {
                dotActive: '#3A4249'
            }
        },
        MuiToolbar: {
            styleOverrides: {
                dense: {
                    left: 0,
                    top: 0
                }
            }
        }
    },
    typography: {
        allVariants: {
            fontFamily: `"Urbanist", sans-serif`
        }
    }
})

export default theme;
