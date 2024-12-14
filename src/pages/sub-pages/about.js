import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            <h2 className={'alternate-text'}>About me</h2>
            <div className={'about-me-profile'}>
                <img className={'extend-image'} width={'40%'} src={'/images/headshot-dec-2024.jpg'} alt={'my headshot'}/>
                <div className={'about-me-content'}>
                    <p className={'alternate-text'}>As an experienced Application/Web Developer, I specialize in
                        front-end development with a skill set that extends to full-stack development using .NET
                        frameworks since 2015. My expertise lies in React, Angular, and Progressive Web Applications
                        (PWA) with a passion for an accessible web with a optimal experience for all. I have a track
                        record of building customer portals and customer-facing platforms to solve
                        problems and help businesses achieve their goals. I am proficient in using SQL, Mongo, GraphQL,
                        and DynamoDB to store and retrieve data when building web applications.</p>
                    <p className={'alternate-text'}>As a senior developer, my objective is to assume a leadership role
                        while maintaining a steadfast commitment to learning and advancing my skills. I am driven to
                        leverage cutting-edge technologies such as React, GraphQL, and Node.js to create innovative
                        features and resolve software problems. With a friendly and approachable demeanor, I am
                        dedicated, polite, and hardworking, constantly pushing myself to evolve as both a programmer and
                        an individual. My extensive expertise, knowledge, and skill set are assets that I
                        enthusiastically share to support others in accomplishing their long-term objectives.</p>
                    <div className={'tech-assets'}>
                        <h3>Over the years, I have honed my expertise in various technologies, including but not limited
                            to those listed below.</h3>
                        <div className={'logo-grid'}>
                            <div style={{gridColumn: 1}}>
                                <img src={'/images/logos/javascript.svg'}
                                     height={'100px'}
                                     alt={'JavaScript'}
                                     title={'JavaScript'}/>
                            </div>
                            <div style={{gridColumn: 2}}>
                                <img src={'/images/logos/graphql.svg'}
                                     height={'100px'}
                                     alt={'GraphQL'}
                                     title={'GraphQL'}/>
                            </div>
                            <div style={{gridColumn: 3}}>
                                <img src={'/images/logos/material-ui.svg'}
                                     height={'100px'}
                                     alt={'Material UI'}
                                     title={'Material UI'}/>
                            </div>
                            <div>
                                <img src={'/images/logos/mongodb.svg'}
                                     height={'100px'}
                                     alt={'Mongo DB'}
                                     title={'Mongo DB'}/>
                            </div>
                            <div>
                                <img src={'/images/logos/react.svg'} height={'100px'} alt={'React'} title={'React'}/>
                            </div>
                            <div>
                                <img src={'/images/logos/github.svg'} height={'100px'} alt={'GitHub'} title={'GitHub'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
