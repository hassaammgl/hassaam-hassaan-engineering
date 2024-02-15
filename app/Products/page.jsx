"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Client/Footer";
import style from "@/styles/product.module.scss";
import ProductDetails from "@/components/Client/ProductDetails";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.product}>
        <div className={style.menu}>
        </div>
        <h2>Our Products</h2>
        <div className={style.productdet}>
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
        </div>
      </div>
      <Footer />
    </>
  );
}
