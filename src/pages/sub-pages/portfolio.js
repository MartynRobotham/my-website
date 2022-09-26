import React from 'react';
import "../primary.scss";

const Portfolio = () => {
    return (
        <React.Fragment>
            <h2>Other Projects</h2>
            <div className="portfolio-grid">
                <div className="one">
                    <h4>This website</h4>
                    <p>I have created this website using a range of technologies, primarily as a Gatsby PWA</p>
                    <a href='https://www.gatsbyjs.com/'>Interested? Click here to visit</a>
                </div>
                <div className="two">
                    <h4>Blood donation project</h4>
                    <p>A side project that gives a detailed history of my blood donations</p>
                    <a href='https://joyful-croquembouche-92ee5d.netlify.app/'>Interested? Click here to visit</a>
                </div>
                <div className="three">
                    <h4>Open Source contributions</h4>
                    <p>I have made small contributions to open source projects, including single-spa.js</p>
                    <a href='https://github.com/single-spa/single-spa.js.org/graphs/contributors'>Interested? Click here
                        to visit</a>
                </div>
                <div className="four">
                    <h4>Wedding</h4>
                    <p className='no-interest'>A project that was created to let us know which guests are attending &
                        show a full itinerary of
                        the day</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
