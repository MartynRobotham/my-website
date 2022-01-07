import React from 'react';
import About from "./sub-pages/about";
import Experience from "./sub-pages/experience";
import History from "./sub-pages/history";
import Contact from "./sub-pages/contact";
import "./primary.scss";
import Header from "./sub-pages/header/header";

const Primary = () => {
    return (
        <React.Fragment>
            <div className='navigation'>
                <li>
                    <a href='#home'>Home</a>
                    <a href='#apple'>About</a>
                    <a href='#banana'>Work</a>
                    <a href='#mango'>Portfolio</a>
                    <a href='#contact'>Contact</a>
                </li>
            </div>
            <div id='home'>
                <Header />
            </div>
            <div id='apple'>
                <div className='about'>
                    <About/>
                </div>
            </div>
            <div id='banana'>
                <div className='history'>
                    <History/>
                </div>
            </div>
            <div id='mango'>
                <div className='experience'>
                    <Experience/>
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

export default Primary;
