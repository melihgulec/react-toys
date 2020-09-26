import React from 'react';

import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(){
    return(
        <div className="container">
            <div className="footer-company">
                <h2>X TOYS</h2>
                <p>Mağazamız 2000 yılından bu yana hizmet vermektedir.<br/>Çalışma saatleri: 10:00 - 22:00</p>
                <p>Gev gev Mh. Talk talk Sk. No: 22 D:3 <br/>Osmangazi/BURSA</p>
                <p>
                    Tel : +90 224 100 20 30<br/>
                    Faks : +90 224 200 30 40<br/>
                    E-Mail : info@xtoys.com
                </p>
            </div>
            <div className="footer-fast">
                <h2>Hızlı Erişim</h2>
                <ul>
                    <li>Anasayfa</li>
                    <li>Oyuncaklar</li>
                    <li>Kitaplar</li>
                    <li>Okul & Kirtasiye</li>
                    <li>Yeni Ürünler</li>
                    <li>Kampanyalar</li>
                </ul>
            </div>
            <div className="footer-fast">
                <h2>Yardım</h2>
                <ul>
                    <li>Sıkça Sorulan Sorular</li>
                    <li>Nasıl iade ederim</li>
                    <li>Hakkımızda</li>
                </ul>
            </div>
            <div className="footer-social-media">
                <h2>Sosyal Medyada X TOYS</h2>
                <div className="footer-social-media-list">
                    <FontAwesomeIcon style={{paddingRight: "30"}} icon={["fab", "twitter"]} />
                    <FontAwesomeIcon style={{paddingRight: "30"}} icon={["fab", "facebook"]} />
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                </div>
            </div>
        </div>
    );
}

export default Footer;