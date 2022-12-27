import "./header.scss";
import React, {useState, useEffect, useRef} from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import * as THREE from "three";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const Header = () => {

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                RINGS({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 600.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xd6a3fb,
                    backgroundColor: 0xabf62d
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <React.Fragment>
            <div ref={vantaRef} className={'gap-reduction'}>
                <div className='main-content'>
                    <h1>Martyn Robotham</h1>
                    <h2>UI Developer with over seven years full stack experience</h2>
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
            </div>
        </React.Fragment>

    );
};

export default Header;
