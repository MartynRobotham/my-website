import React from 'react';
import "./header.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className='test'>
            <h1>Martyn Robotham</h1>
            <h2>UI Developer with full stack experience</h2>
            {/*TODO: Change icons on mobile to be 2 X 2 for smaller screens*/}
            <p>
                <FontAwesomeIcon icon={faEnvelope} title={'Email'}/>
            </p>
            <p>
                <FontAwesomeIcon icon={faGithub} title={'GitHub'}/>
            </p>
            <p>
                <FontAwesomeIcon icon={faLinkedin} title={'LinkedIn'}/>
            </p>
            <p>
                <FontAwesomeIcon icon={faStackOverflow} title={'Stack Overflow'}/>
            </p>
        </div>
    );
};

export default Header;
