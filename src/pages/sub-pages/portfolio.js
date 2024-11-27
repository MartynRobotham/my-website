import React from 'react';
import "../primary.scss";

const Portfolio = () => {
    return (
        <React.Fragment>
            <h2 className={'alternate-text'}>Other Projects</h2>
            <div className="portfolio-grid">
                <div className="one">
                    <h3 className={'alternate-text'}>This website</h3>
                    <p className={'alternate-text'}>I have created this website using a range of technologies, primarily as a Gatsby PWA optimising accessibility</p>
                    <a className={'alternate-text'} href='https://www.gatsbyjs.com/'>Interested? Click here to visit</a>
                </div>
                <div className="two">
                    <h3 className={'alternate-text'}>Blood donation project</h3>
                    <p className={'alternate-text'}>A side project that gives a detailed history of my blood donations</p>
                    <a className={'alternate-text'} href='https://blood.martynrobotham.co.uk/'>Interested? Click here to visit</a>
                </div>
                <div className="three">
                    <h3 className={'alternate-text'}>Open Source contributions</h3>
                    <p className={'alternate-text'}>I have made small contributions to open source projects, including single-spa.js</p>
                    <a className={'alternate-text'} href='https://github.com/single-spa/single-spa.js.org/graphs/contributors'>Interested? Click here
                        to visit</a>
                </div>
                <div className="four">
                    <h3 className={'alternate-text'}>Wedding</h3>
                    <p className='no-interest alternate-text'>A small wedding management application that was created to allow guests to confirm
                    their attendance and see a full itinerary of the day at any time</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
