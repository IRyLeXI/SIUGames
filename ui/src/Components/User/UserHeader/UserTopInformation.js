import React from "react";

const UserTopInformation = (props) =>{
    return (
        <div>
            <h1 className="user-name"> {props.UserName} </h1>
            <p className="user-description"> {props.Description} </p>
        </div>
    )
}

export default UserTopInformation;