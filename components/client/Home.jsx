"use client";
import React from "react";
import ServerHome from "../server/Home";
import { PiPhoneCall } from "react-icons/pi";
import style from "@/styles/home.module.scss";

const Home = () => {
  return (
    <ServerHome>
      <div className={style.home}>
        <div className={style.left}>
          <h2 className={style.lefth2}>
            Welcome You By <span>HHE</span>
          </h2>
          <h1>
            We're Best <span>Providing</span> <br /> Mechanical Engineering Company
          </h1>
          <p className={style.companyp}>
            Our company is ready to help you in making unique-looking <br /> and best
            products.
          </p>
          <div className={style.buttoncontent}>
            <div className={style.btn}>
              <button>Book Now</button>
            </div>
            <div className={style.customer}>
              <div className={style.icon}>
                <PiPhoneCall className={style.headericon} />
              </div>
              <div className={style.content}>
                <h2>Call Us Now</h2>
                <p>+92 9876543210</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          gears
        </div>
      </div>
    </ServerHome>
  );
};

export default Home;
