import React from "react";
import UserAvatar from "./UserAvatar.js";
import UserTopInformation from "./UserTopInformation.js";
import "./UserHeader.css"

const UserHeader = (props) =>{
    return (
        <div className="user-header">
            <div>
                <UserAvatar Image = {props.Image} />
            </div>
            <div>
                <UserTopInformation UserName = {props.UserName} Description = {props.Description} />
            </div>
        </div>
    );
}

export default UserHeader;