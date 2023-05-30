import React from 'react';
import About from "./sub-pages/about";
import Portfolio from "./sub-pages/portfolio";
import Experience from "./sub-pages/experience";
import Contact from "./sub-pages/contact/contact";
import "./primary.scss";
import Header from "./sub-pages/header/header";
import Navbar from "./sub-pages/navbar";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme"
import "@fontsource/urbanist";

const Index = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <title>Martyn Robotham - Experienced Front End Developer</title>
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
