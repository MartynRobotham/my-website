import React from 'react';
import "./contact.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className={'footer'}>
            <div>
                <span>© {(new Date().getFullYear())} Martyn Robotham</span>
            </div>
            <div className={'icons'}>
                <a href={'mailto:martyn_robotham@hotmail.co.uk'}>
                    <FontAwesomeIcon className={'icon'} icon={faEnvelope} title={'Email'}/>
                </a>
                <a href={'https://github.com/MartynRobotham'}>
                    <FontAwesomeIcon className={'icon'} icon={faGithub} title={'GitHub'}/>
                </a>
                <a href={'https://www.linkedin.com/in/martyn-robotham-21617a87/'}>
                    <FontAwesomeIcon className={'icon'} icon={faLinkedin} title={'LinkedIn'}/>
                </a>
                <a href={'https://stackoverflow.com/users/6200847/martyn93'}>
                    <FontAwesomeIcon className={'icon'} icon={faStackOverflow} title={'Stack Overflow'}/>
                </a>
            </div>
        </div>
    );
};

export default Contact;
