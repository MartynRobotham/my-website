import React from 'react';
import About from "./sub-pages/about";
import Portfolio from "./sub-pages/portfolio";
import Experience from "./sub-pages/experience";
import Contact from "./sub-pages/contact/contact";
import "./primary.scss";
import Header from "./sub-pages/header/header";
import Navbar from "./sub-pages/navbar";
import {createTheme, ThemeProvider} from "@mui/material/styles";

// TODO: Export to isolated file, issue with module build
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
    }
})

const Index = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <title>Martyn Robotham Website</title>
                <Navbar/>
                <div id='home'>
                    <Header/>
                </div>
                <div id='about'>
                    <div className='about'>
                        <About/>
                    </div>
                </div>
                <div id='experience'>
                    <div className='experience'>
                        <Experience/>
                    </div>
                </div>
                <div id='portfolio'>
                    <div className='portfolio'>
                        <Portfolio/>
                    </div>
                </div>
                <div id='contact'>
                    <div className='contact'>
                        <Contact/>
                    </div>
                </div>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Index;
