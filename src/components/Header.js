import React from 'react';
import "../style/Header.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
    return(
        <div className="headerContainer">
            <div className="headerGroup">
                <FontAwesomeIcon icon="home" />
            </div>
            <Logo width="400" height="100"/>
            <div className="headerGroup">
                <FontAwesomeIcon style={{paddingRight: "10"}} icon={["fab", "twitter"]} />
                <FontAwesomeIcon style={{paddingRight: "10"}} icon={["fab", "facebook"]} />
                <FontAwesomeIcon style={{paddingRight: "10"}} icon={["fab", "instagram"]} />
            </div>
        </div>
    );
}

export default Header;