import React from "react";
import style from "@/styles/main.module.scss";

const Home = ({ children }) => {
  return <div className={style.main}>{children}</div>;
};

export default Home;
