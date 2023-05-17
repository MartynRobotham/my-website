import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            <h2 className={'alternate-text'}>About me</h2>
            <div className={'about-me-profile'}>
                <img className={'extend-image'} width={'40%'} src={'/images/headshot.jpg'} alt={'my headshot'}/>
                <div>
                    <p className={'alternate-text'}>As an experienced Application/Web Developer, I specialize in
                        front-end development with a skill set that extends to full-stack development using .NET
                        frameworks since 2015. My expertise lies in React, Angular, and Progressive Web Applications
                        (PWA). I have a track record of building customer portals and customer-facing platforms to solve
                        problems and help businesses achieve their goals. I am proficient in using SQL, Mongo, GraphQL,
                        and DynamoDB to store and retrieve data when building web applications.</p>
                    <p className={'alternate-text'}>My goal is to take on a senior developer role while continuing to
                        learn and improve as a developer. I aim to utilize technologies like React, GraphQL, and Node.js
                        in developing new features and implementing bug fixes. I am approachable, polite, hard-working,
                        and committed, with a passion to grow as a programmer and an individual with my expertise,
                        knowledge, and skill set. I strive to continuously improve and help others achieve their
                        long-term goals.</p>
                    <div className={'tech-assets'}>
                        <h3>Over the years, I have honed my expertise in various technologies, including but not limited
                            to those listed below.</h3>
                        <div className={'logo-grid'}>
                            <div style={{gridColumn: 1}}>
                                <img src={'/images/logos/javascript.svg'} height={'100px'} alt={'JavaScript'}/>
                            </div>
                            <div style={{gridColumn: 2}}>
                                <img src={'/images/logos/graphql.svg'} height={'100px'} alt={'GraphQL'}/>
                            </div>
                            <div style={{gridColumn: 3}}>
                                <img src={'/images/logos/material-ui.svg'} height={'100px'} alt={'Material UI'}/>
                            </div>
                            <div>
                                <img src={'/images/logos/mongodb.svg'} height={'100px'} alt={'Mongo DB'}/>
                            </div>
                            <div>
                                <img src={'/images/logos/react.svg'} height={'100px'} alt={'React'}/>
                            </div>
                            <div>
                                <img src={'/images/logos/github.svg'} height={'100px'} alt={'GitHub'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
