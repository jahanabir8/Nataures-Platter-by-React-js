import React from "react";
import type { ProductType } from "../Type/ProductType";
import Product from "./Product";

import Onion from "../../assets/onion.png";
// import Ginger from '../../assets/images/ginger.png';
// import Tomato from '../../assets/images/tomato.png';

import OfferPhoto from "../../assets/Group 14.png";

const Popular = () => {
  const products: ProductType[] = [
    {
      id: 1,
      name: "Onion 1 KG",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 2,
      name: "Tomato 500 g",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 3,
      name: "Potato 1 KG",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 4,
      name: "Tomato 500 g",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 5,
      name: "Onion 1 KG",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 6,
      name: "Tomato 500 g",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 7,
      name: "Onion 1 KG",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 8,
      name: "Potato 1 KG",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
    {
      id: 9,
      name: "Potato 1 KG",
      rating: 4.5,
      price: 39.99,
      img: Onion,
    },
  ];
  return (
    <div className="popular-products py-35 bg-[#EFEBE3]">
      <div className="container max-w-330 mx-auto">
        <h2 className="text-[36px] mb-12 font-semibold text-[#179800]">
          Popular Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="offer col-span-1">
            <img src={OfferPhoto} alt="img" />
          </div>
          <div className="products col-span-2 grid grid-cols-3 gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
