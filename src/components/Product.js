import React from "react";
import "../style/Product.css";

import { Link } from "react-router-dom";

function Product(props) {
  const { price, head, path, id } = props;
  return (
    <div className="cardContainer">
      <div className="cardPicContainer">
        <img
          className="cardPic"
          alt="product"
          src={require("../img/" + path)}
        ></img>
      </div>
      <div className="cardBody">
        <div className="cardHead">{head}</div>
        <div className="cardPrice">{price} TL</div>
        <Link to={"/productDetail/" + id + "/" + head + "/" + price + "/" + path}>
          <div className="cardButton">ÜRÜNE GİT</div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
