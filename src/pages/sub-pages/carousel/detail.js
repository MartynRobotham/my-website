import React from 'react';
import "./detail.scss";

const Detail = (props) => {
    return (
        <React.Fragment>
            <div className='content'>
                <p><b>{props.position} at {props.company}</b></p>
                <p className='date'>{props.duration}</p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    );
};

export default Detail;
