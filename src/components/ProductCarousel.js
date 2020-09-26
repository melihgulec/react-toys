import React from "react";

import Product from "../components/Product";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ProductCarousel(props) {
  const { data } = props;
  const responsiveOptions = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  };
  return (
    <OwlCarousel
      className="owl-theme"
      responsiveClass={true}
      items={5}
      responsive={responsiveOptions}
    >
      {data.map((product) => {
        return (
          <div className="item">
            <Product
              key={product.id}
              head={product.name}
              price={product.price}
              path={product.path}
              id={product.id}
            />
          </div>
        );
      })}
    </OwlCarousel>
  );
}

export default ProductCarousel;
