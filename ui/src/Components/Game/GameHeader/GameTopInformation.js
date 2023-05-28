import React from "react";
import "./GameTopInformation.css"

const GameTopInformation = (props) =>{
    return ( 
    <div className="game-top-information">
        <h1 className="game-title"> {props.Title} </h1>
        <h4 className="game-tags"> {props.Tags} </h4>
        <h5 className="game-developer"> {props.Developer} </h5>
    </div>);
}

export default GameTopInformation;