import React from 'react';
import CardHeader from './CardHeader.js';
import './Card.css'

const Card = (props) => {
    return (
    <div onClick={HereWillBeClickHandler} className='card-container'>
       <img className="card-image" src = {props.Image} alt="Pizza"/>
       <CardHeader GameName = {props.GameName} Description = {props.Description} Tags = {props.Tags} GameDev = {props.GameDev}/> 
    </div>);
}

function HereWillBeClickHandler() {
    
}

export default Card;
