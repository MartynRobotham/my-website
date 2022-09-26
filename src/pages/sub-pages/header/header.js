import React from 'react';
import "./header.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className='test'>
            <h1>Martyn Robotham</h1>
            <h2>UI Developer with full stack experience</h2>
            <div className={'icon-grid'}>
                <p className={'start-item'}>
                    <a href={'mailto:martyn_robotham@hotmail.co.uk'}>
                        <FontAwesomeIcon icon={faEnvelope} title={'Email'}/>
                    </a>
                </p>
                <p className={'end-item'}>
                    <a href={'https://github.com/MartynRobotham'}>
                        <FontAwesomeIcon icon={faGithub} title={'GitHub'}/>
                    </a>
                </p>
                <p className={'start-item'}>
                    <a href={'https://www.linkedin.com/in/martyn-robotham-21617a87/'}>
                        <FontAwesomeIcon icon={faLinkedin}
                                         title={'LinkedIn'}/>
                    </a>
                </p>
                <p className={'end-item'}>
                    <a href={'https://stackoverflow.com/users/6200847/martyn93'}>
                        <FontAwesomeIcon icon={faStackOverflow}
                                         title={'Stack Overflow'}/>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Header;
