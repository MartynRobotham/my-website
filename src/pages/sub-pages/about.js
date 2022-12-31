import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            <h2 className={'alternate-text'}>About me</h2>
            <div className={'about-me-profile'}>
                <img className={'extend-image'} width={'40%'} src={'/images/headshot.jpg'} alt={'my headshot'}/>
                <div>
                    <p className={'alternate-text'}>I am an experienced Application / Web Developer specialising in
                        front
                        end development, but I also have
                        the skill set to work full stack using the .NET frameworks since 2015 - with a strong focus on
                        React,
                        Angular and Progressive Web Applications (PWA). I have helped build customer portals and
                        customer
                        facing
                        platforms to solve problems and help the business achieve their goals. Furthermore, I carry
                        experience
                        using SQL, Mongo, GraphQL and DynamoDB to store and retrieve data when building web
                        applications.</p>
                    <p className={'alternate-text'}>My current goals are to move into a senior developer role and
                        continue
                        to learn and improve as a
                        developer, using technologies such as React, GraphQL & Node.js, through developing new features
                        and
                        implementing bug fixes. I am known to be an approachable, polite, hard-working, committed
                        individual
                        with a passion to grow as a programmer and as an individual with my skill set, expertise and
                        knowledge,
                        I am always looking for ways to improve, and I am always ready to help others achieve their long
                        term
                        goals.</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
