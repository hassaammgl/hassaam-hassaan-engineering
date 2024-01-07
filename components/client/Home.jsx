"use client";
import React from "react";
import ServerHome from "../server/Home";
import { PiPhoneCall } from "react-icons/pi";
import style from "@/styles/home.module.scss";
import Button from "../Button";
import { font } from "../fonts";

const Home = () => {
  return (
    <ServerHome>
      <div className={style.home}>
        <div className={style.left}>
          <h2 className={style.lefth2}>
            Welcome You By <span>HHE</span>
          </h2>
          <h1>
            We&#39;re Best <span>Providing</span> <br /> Mechanical Engineering
            Company
          </h1>
          <p className={style.companyp}>
            Our company is ready to help you in making unique-looking <br /> and
            best products.
          </p>
        </div>
        <div className={style.right}>gears</div>
      </div>
    </ServerHome>
  );
};

export default Home;
