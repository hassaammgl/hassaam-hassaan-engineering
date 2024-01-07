"use client";
import React, { useRef, Suspense } from "react";
import ServerHome from "../server/Home";
import { PiPhoneCall } from "react-icons/pi";
import style from "@/styles/home.module.scss";
import Button from "../Button";
import { font } from "../fonts";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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
        <Right />
      </div>
    </ServerHome>
  );
};

const Right = () => {
  return (
    <Canvas className={style.right}>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
  );
};

// useFrame(() => {
//   if (mesh.current) {
//     mesh.current.rotation.x += 0.01;
//     mesh.current.rotation.y += 0.01;
//   }
// });

const Modal = () => {
  return (
    <group>
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial attach="material" wireframe color="red" />
      </mesh>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial attach="material" wireframe color="green" />
      </mesh>
      <mesh>
        <torusGeometry />
        <meshStandardMaterial attach="material" wireframe color="gray" />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <Modal />
    </Suspense>
  );
};

export default Home;
