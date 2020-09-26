import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../style/Navbar.css";
import {
    Link
} from "react-router-dom";

function Navbar(){
    const [showBar, setShowBar] = useState(true)
    const onClickEvent = () => {
        setShowBar(!showBar);
    }

    return(
        <div className="navbarContainer">
            <FontAwesomeIcon onClick={onClickEvent} icon="bars" className="display-bar"/>
            <ul style={{display: showBar ? "flex" : "none" }}>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/toys">Oyuncaklar</Link></li>
                <li>Kitaplar</li>
                <li>Okul & Kirtasiye</li>
                <li>Yeni Ürünler</li>
                <li>Kampanyalar</li>
            </ul>
        </div>
    );
}

export default Navbar;