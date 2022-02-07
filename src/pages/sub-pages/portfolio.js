import React from 'react';
import "../primary.scss";

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="portfolio-grid">
                <div className="one">
                    <h4>This website</h4>
                    <p>I have created this website using a range of technologies, primarily as a Gastsby PWA</p>
                    <a href='https://www.gatsbyjs.com/'>Interested? Click here to visit</a>
                </div>
                <div className="two">
                    <h4>Blood donation project</h4>
                    <p>A side project that gives a detailed history of my blood donations</p>
                    <a href='https://blood-ibnhsa.martynrobotham.co.uk/'>Interested? Click here to visit</a>
                </div>
                <div className="three">
                    <h4>Open Source contributions</h4>
                    <p>I have made small contributions to open source projects, including single-spa.js</p>
                    <a href='https://github.com/single-spa/single-spa.js.org/graphs/contributors'>Interested? Click here to visit</a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
