"use client";

import style from "@/styles/gallery.module.scss";
import React from "react";
import img from "@/Images/girl.jpg";
import Image from "next/image";
import { PT_Serif, Arapey } from "next/font/google";

const pt_serif = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

const arapey = Arapey({
  weight: "400",
  subsets: ["latin"],
});

export const Gallery = () => {
  return (
    <div>
      <div className={style.galleryimg}>
        <h1 className={`${style.header} ${arapey.className}`}>Gallery</h1>
        <div className={style.box}>
          <span style={{ "--i": 1 }}>
            <Image
              src={img}
              alt=""
            />
          </span>
          <span style={{ "--i": 2 }}>
        <Image 
        src={img}
        alt=""
         />
          </span>
          <span style={{ "--i": 3 }}>
          <Image 
        src={img}
        alt=""
         />
          </span>
          <span style={{ "--i": 4 }}>
          <Image 
        src={img}
        alt=""
         />
          </span>
          <span style={{ "--i": 5 }}>
          <Image 
        src={img}
        alt=""
         />
          </span>
        </div>
      </div>
    </div>
  );
};

