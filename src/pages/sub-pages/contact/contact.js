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
                <FontAwesomeIcon className={'icon'} icon={faEnvelope} title={'Email'}/>
                <FontAwesomeIcon className={'icon'} icon={faGithub} title={'GitHub'}/>
                <FontAwesomeIcon className={'icon'} icon={faLinkedin} title={'LinkedIn'}/>
                <FontAwesomeIcon className={'icon'} icon={faStackOverflow} title={'Stack Overflow'}/>
            </div>
        </div>
    );
};

export default Contact;
