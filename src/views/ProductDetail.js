import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Separator from '../components/Separator';
import ProductCarousel from '../components/ProductCarousel';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/ProductDetail.css';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function ProductDetail({match}){  
    const {id, name, path, price, stock} = match.params;
    const suggestedProducts = [
        {
          id: 1,
          name: "Lego Friends",
          price: "500",
          path: "product2.jpg",
          stock: 1,
        },
        {
          id: 2,
          name: "Die Cast Toy Vehicles",
          price: "285",
          path: "product7.jpg",
          stock: 1,
        },
        {
          id: 3,
          name: "Die Cast Toy Vehicles",
          price: "285",
          path: "product8.jpg",
          stock: 1,
        },
        {
          id: 4,
          name: "Duplo",
          price: "257",
          path: "product3.jpg",
          stock: 1,
        },
        {
          id: 5,
          name: "Duplo Toys",
          price: "180",
          path: "product4.jpg",
          stock: 1,
        },
        {
          id: 6,
          name: "Robot",
          price: "320",
          path: "product5.jpg",
          stock: 1,
        },
        
      ];

    return(
        <div>
            <Header/>
            <Navbar/>
            <div className="productDetailContent">
                <div className="productDetailContainer">
                    <div className="productDetailPhoto">
                        <img alt={"productDetailPhoto"} src={require('../img/' + path)} />
                    </div>
                    <div className="productDescription">
                        <h2>
                            NO: {id}, {name}
                        </h2>
                        <p>
                            <span className="bold">Fiyat: </span>{price} TL
                        </p>
                        <p>
                            <span className="bold">Stok durumu: </span> 
                            {
                              stock === "1" ? 
                              <span>
                                <FontAwesomeIcon icon={faCheckCircle} color={"green"}/>
                                &nbsp;VAR
                              </span>
                              : 
                              <span>
                                <FontAwesomeIcon icon={faTimesCircle} color={"red"}/>
                                &nbsp;YOK
                              </span>
                            }
                        </p>
                        <div>
                            <p className="bold">SATIN ALMAK İÇİN İLETİŞİME GEÇİN</p>
                            <span className="bold tel">+90 224 100 20 30</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productDetailSeparator">
                <Separator headName="İLGİNİZİ ÇEKEBİLİR" />
            </div>
            <div className="suggestContainer">
                <ProductCarousel data={suggestedProducts} autoplay={true} loop={true} />
            </div>
            <Footer/>   
        </div>
    );
}

export default ProductDetail;