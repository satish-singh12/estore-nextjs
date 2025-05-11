"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductBox from "./ProductBox";

export default function RecentlyAdded() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  return (
    <Container className="bg-blue-100 mt-5 px-6 py-6">
      <h1 className="50 font-bold text-2xl text-center mt-4 mb-5">
        Recently added products
      </h1>
      <ProductBox products={products} />
    </Container>
  );
}
