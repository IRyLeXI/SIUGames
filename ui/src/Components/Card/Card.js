import React from 'react';
import CardHeader from './CardHeader.js';
import './Card.css';
import { Link, useNavigate } from "react-router-dom";



const Card = (props) => {
    let navigate = useNavigate();
    function handleClick() {
        localStorage.setItem('cardId', props.Id);
        navigate('/Game');
    }
    return (
        <div className='card-container' onClick={handleClick}>
            <img className="card-image" src={props.Image} alt="GameImage" />
            <CardHeader GameName={props.GameName} Description={props.Description} Tags={props.Tags} GameDev={props.GameDev} />
        </div>);
}

function HereWillBeClickHandler() {

}

export default Card;
