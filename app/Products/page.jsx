"use client";

import style from "@/styles/product.module.scss";
import Footer from "@/components/Client/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
    return (
        <>
        <Header />
        <div className={style.product}>
            <h2>Our Products</h2>
        </div>
        <Footer />
        </>
    )
}