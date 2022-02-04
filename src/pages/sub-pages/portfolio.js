import React from 'react';
import "../primary.scss";

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="portfolio-grid">
                <div className="one">
                    <p>This website</p>
                    <p>React, Gatsby, PWA</p></div>
                <div className="two">
                    <p>Blood website</p>
                    <p>Angular, Bing maps, PWA</p>
                </div>
                <div className="three">
                    <p>Open Source contributions</p>
                    <p>JS, Documentation</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
