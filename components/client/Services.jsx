import React from "react";
import { MdAddIcCall } from "react-icons/md";
import style from "@/styles/services.module.scss";

const Services = () => {
  return (
    <div className={style.service}>
      <div className={style.servicecontent}>
        <h1>
          We Provide Best Services <br /> For Industries
        </h1>
        <div className={style.container}>
          <div className={style.box}>
            <div className={style.icon}>
              <MdAddIcCall />
            </div>
            <div className={style.boxcontainer}>
              <h2>Power & Energy</h2>
              <p>
                Lorem ipsum dolor sit amet & consectetur adipisicing elit.
                Excepturi, voluptas cum.
              </p>
            </div>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
