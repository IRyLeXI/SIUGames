import React from 'react';
import './CardHeader.css';

const CardHeader = (props) => {
    return( 
    <div className='card-header'>
        <h5> {props.Tags} </h5>
        <h2> {props.GameName} </h2>
        <p> {props.GameDev} </p>    
    </div>);
}

export default CardHeader;