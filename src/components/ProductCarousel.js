import React, {useEffect} from "react";

import Product from "../components/Product";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ProductCarousel(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  const { data, autoplay, loop, items } = props;

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
      autoplay = {autoplay}
      loop = {loop}
      items={items}
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
              stock={product.stock}
            />
          </div>
        );
      })}
    </OwlCarousel>
  );
}

ProductCarousel.defaultProps={
  autoplay: false,
  loop: false,
  items:5
}

export default ProductCarousel;
