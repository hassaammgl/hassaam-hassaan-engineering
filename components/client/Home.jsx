"use client";
import React from "react";
import ServerHome from "../server/Home";
import style from "@/styles/home.module.scss";
import Image from "next/image";
import right from "@/Images/right.png";

const Home = () => {
  return (
    <ServerHome>
      <div className={style.home}>
        <div className={style.left}>
          <h2 className={`${style.lefth2} ${style.tiltleft}`}>
            Welcome You By <span>HHE</span>
          </h2>

          <h1 className={style.bounceleft}>
            We&#39;re Best <span>Providing</span> <br /> Mechanical Engineering
            Company
          </h1>
          <p className={`${style.companyp} ${style.slideleft}`}>
            Our company is ready to help you in making unique-looking <br /> and
            best products.
          </p>
        </div>
        <div className={style.right}>
          <Image src={right}  alt=""  />
        </div>
      </div>
    </ServerHome>
  );
};


export default Home;
