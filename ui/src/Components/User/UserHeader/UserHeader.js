import React from "react";
import UserAvatar from "./UserAvatar.js";
import UserTopInformation from "./UserTopInformation.js";

const UserHeader = (props) =>{
    return (
        <>
            <UserAvatar Image = {props.Image} />
            <UserTopInformation UserName = {props.UserName} Description = {props.Description} />
        </>
    );
}

export default UserHeader;