import React, {useEffect} from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";

import "../App.css";
import "../components/Icons";

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
});
  const products = [
    {
      id: 1,
      name: "Lego Friends",
      price: "500",
      path: "product2.jpg",
    },
    {
      id: 2,
      name: "Die Cast Toy Vehicles",
      price: "285",
      path: "product7.jpg",
    },
    {
      id: 3,
      name: "Die Cast Toy Vehicles",
      price: "285",
      path: "product8.jpg",
    },
    {
      id: 4,
      name: "Duplo",
      price: "257",
      path: "product3.jpg",
    },
    {
      id: 5,
      name: "Duplo Toys",
      price: "180",
      path: "product4.jpg",
    },
    {
      id: 6,
      name: "Robot",
      price: "320",
      path: "product5.jpg",
    },
  ];

  const newProducts = [
    {
      id: 7,
      name: "Die Cast Toy Vehicles",
      price: "285",
      path: "product7.jpg",
    },
    {
      id: 8,
      name: "Girl",
      price: "45",
      path: "product8.jpg",
    },
    {
      id: 9,
      name: "Horse",
      price: "795",
      path: "product9.jpg",
    },
    {
      id: 10,
      name: "Treehouse",
      price: "520",
      path: "product10.jpg",
    },
    {
      id: 11,
      name: "Die Cast Toy Vehicles",
      price: "285",
      path: "product7.jpg",
    },
    {
      id: 12,
      name: "Girl",
      price: "45",
      path: "product8.jpg",
    },
    {
      id: 13,
      name: "Horse",
      price: "795",
      path: "product9.jpg",
    },
    {
      id: 14,
      name: "Treehouse",
      price: "520",
      path: "product10.jpg",
    },
  ];

  const soonProducts = [
    {
      id: 15,
      name: "Bear",
      price: "25",
      path: "product12.png",
    },
    {
      id: 16,
      name: "Lego Toy Story",
      price: "1100",
      path: "product13.jpg",
    },
    {
      id: 17,
      name: "Lego Friends Two",
      price: "500",
      path: "product14.jpg",
    },
    {
      id: 18,
      name: "Lego Toy RRE",
      price: "1100",
      path: "product15.jpg",
    },
    {
      id: 19,
      name: "Bear",
      price: "25",
      path: "product12.png",
    },
    {
      id: 20,
      name: "Lego Toy Story",
      price: "1100",
      path: "product13.jpg",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="Content">
        <Slider />
        <div className="separatorContainer">
          <Separator headName="ÇOK SATANLAR" />
        </div>
        <div className="productContainer">
          <ProductCarousel data={products} />
        </div>
        <div className="separatorContainer">
          <Separator headName="YENİLER" />
        </div>
        <div className="productContainer">
          <ProductCarousel data={newProducts} />
        </div>
        <div className="separatorContainer">
          <Separator headName="YAKINDA GELECEKLER" />
        </div>
        <div className="productContainer">
          <ProductCarousel data={soonProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
