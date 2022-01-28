import React from 'react';
import "./detail.scss";

const Detail = (props) => {
    return (
        <React.Fragment>
            <div className='content'>
                <p>{props.position} at {props.company}</p>
                <p className='date'>May 2021 - Present</p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    );
};

export default Detail;
