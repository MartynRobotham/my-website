import React from 'react';
import About from "./sub-pages/about";
import Portfolio from "./sub-pages/portfolio";
import Experience from "./sub-pages/experience";
import Contact from "./sub-pages/contact";
import "./primary.scss";
import Header from "./sub-pages/header/header";

const Index = () => {
    return (
        <React.Fragment>
            <div className='header-grid'>
                <div className='icon-item'/>
                <a className='header-item' href='#home'>Home</a>
                <a className='header-item' href='#about'>About</a>
                <a className='header-item' href='#experience'>Work</a>
                <a className='header-item' href='#portfolio'>Portfolio</a>
                <a className='header-item' href='#contact'>Contact</a>
            </div>
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
        </React.Fragment>
    );
};

export default Index;
