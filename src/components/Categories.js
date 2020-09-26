import React from 'react';
import "../style/Categories.css";

function Categories(){
    return(
        <div className="categoriesContainer">
            <div className="categoriesHead">Kategoriler</div>
            <div className="categoriesBody">
                <ul>
                    <li>Araba</li>
                    <li>Bebek</li>
                    <li>Kitap</li>
                    <li>Oyuncak</li>
                    <li>Uçak</li>
                </ul>
            </div>
        </div>
    );
}

export default Categories;