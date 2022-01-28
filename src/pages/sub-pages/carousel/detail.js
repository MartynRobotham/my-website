import React from 'react';
import "./detail.scss";

const Detail = (props) => {
    return (
        <div className='content'>
            <p>{props.position} at {props.company}</p>
            <p>{props.description}</p>
        </div>
    );
};

export default Detail;
