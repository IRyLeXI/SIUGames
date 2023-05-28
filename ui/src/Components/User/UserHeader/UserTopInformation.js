import React from "react";
import "./UserTopInformation.css"

const UserTopInformation = (props) =>{
    return (
        <div className="user-top-information">
            <h1> {props.UserName} </h1>
            <p> {props.Description} </p>
        </div>
    )
}

export default UserTopInformation;