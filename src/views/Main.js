import React from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductCarousel";

import "../App.css";
import "../components/Icons";

function Main() {
  const products = [
    {
      id: 1,
      name: "Kids Kitchen Play",
      price: "500",
      path: "product1.jpg",
    },
    {
      id: 2,
      name: "Lego City 60585",
      price: "285",
      path: "product2.jpg",
    },
    {
      id: 3,
      name: "Lego Friends 65231",
      price: "285",
      path: "product3.jpg",
    },
    {
      id: 4,
      name: "Lego Duplo 62128",
      price: "257",
      path: "product4.jpg",
    },
    {
      id: 5,
      name: "Toy Story Figures",
      price: "180",
      path: "product5.jpg",
    },
    {
      id: 6,
      name: "Donkey Plush",
      price: "320",
      path: "product6.jpg",
    },
  ];

  const newProducts = [
    {
      id: 7,
      name: "Dinosaur Plush",
      price: "285",
      path: "product7.jpg",
    },
    {
      id: 8,
      name: "Die-Cast Toy Vehicles",
      price: "45",
      path: "product8.jpg",
    },
    {
      id: 9,
      name: "Baby Girl Plush",
      price: "795",
      path: "product9.jpg",
    },
    {
      id: 10,
      name: "Horse",
      price: "520",
      path: "product10.jpg",
    },
    {
      id: 11,
      name: "Treehouse",
      price: "285",
      path: "product11.jpg",
    },
    {
      id: 12,
      name: "Code Learn KinderBot",
      price: "455",
      path: "product12.png",
    },
    {
      id: 13,
      name: "LINE-UP Bul Sırala Öğren",
      price: "255",
      path: "product13.jpg",
    },
    {
      id: 14,
      name: "Bear Plush with Honey",
      price: "225",
      path: "product14.jpg",
    },
  ];

  const soonProducts = [
    {
      id: 15,
      name: "Lego Duplo TOY Story™",
      price: "899",
      path: "product15.jpg",
    },
    {
      id: 16,
      name: "Toy Story 4 Hareketli Figür",
      price: "850",
      path: "product16.jpg",
    },
    {
      id: 17,
      name: "Foxy Plush Toy",
      price: "42",
      path: "product17.png",
    },
    {
      id: 18,
      name: "Uzaktan Kumandalı Araba",
      price: "59",
      path: "product18.jpeg",
    },
    {
      id: 19,
      name: "Marvel Avengers Toy",
      price: "320",
      path: "product19.jpg",
    },
    {
      id: 20,
      name: "Home Supermarket Toy Set",
      price: "1100",
      path: "product20.jpg",
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
