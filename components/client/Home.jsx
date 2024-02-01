"use client";
import React from "react";
import ServerHome from "../server/Home";
import style from "@/styles/home.module.scss";
import RevealWrapper from "next-reveal";

const Home = () => {
  return (
    <ServerHome>
      <div className={style.home}>
        <RevealWrapper
          rotate={{ x: 12, y: 40, z: 0 }}
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
          viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <h1 className="text-blue-700 text-6xl leading-5 mt-36">
            Welcome to{" "}
            <a
              className="focus:underline active:underline hover:underline"
              href="https://github.com/ritmillio/next-reveal"
            >
              next-reveal!
            </a>
          </h1>
          <p className="text-sm mt-5 ml-2">A package based on ScrollReveal</p>
        </RevealWrapper>
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
        <div className={style.right}>
          this place is called right han kya samjhe beru
        </div>
        {/* <Right /> */}
      </div>
    </ServerHome>
  );
};

// const Right = () => {
//   return (
//     <Canvas
//       camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 4, 7] }}
//       className={style.right}
//     >
//       <OrbitControls />
//       <ambientLight />
//       <Scene />
//     </Canvas>
//   );
// };

// // useFrame(() => {
// //   if (mesh.current) {
// //     mesh.current.rotation.x += 0.01;
// //     mesh.current.rotation.y += 0.01;
// //   }
// // });

// const Modals = () => {
//   return (
//     <Physics>
//       <Torus />
//       <Cube />
//       <Sphere />
//       <Dodecahedron />
//       <Octahedron />
//       <Lathe />
//       <Plane />
//     </Physics>
//   );
// };

// const Torus = ({ x, y, z }) => {
//   const [ref] = useSphere(() => ({ mass: 12, position: [0, 10, 0] }));
//   return (
//     <mesh ref={ref} position={[4, 10, 0]}>
//       <torusGeometry />
//       <meshStandardMaterial attach="material" color="gray" />
//     </mesh>
//   );
// };
// const Dodecahedron = ({ x, y, z }) => {
//   const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
//   return (
//     <mesh ref={ref} position={[6, 10, 0]}>
//       <dodecahedronGeometry />
//       <meshStandardMaterial attach="material" color="blue" />
//     </mesh>
//   );
// };
// const Octahedron = ({ x, y, z }) => {
//   const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
//   return (
//     <mesh ref={ref} position={[8, 10, 0]}>
//       <octahedronGeometry />
//       <meshStandardMaterial attach="material" color="yellow" />
//     </mesh>
//   );
// };
// const Lathe = ({ x, y, z }) => {
//   const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
//   return (
//     <mesh ref={ref} position={[8, 10, 0]}>
//       <latheGeometry />
//       <meshStandardMaterial attach="material" color="black" />
//     </mesh>
//   );
// };
// const Sphere = ({ x, y, z }) => {
//   const [ref] = useSphere(() => ({ mass: 12, position: [0, 10, 0] }));
//   return (
//     <mesh ref={ref} position={[0, 10, 0]}>
//       <sphereGeometry />
//       <meshStandardMaterial roughness={0.2} attach="material" color="red" />
//     </mesh>
//   );
// };
// const Cube = ({ x, y, z }) => {
//   const [ref] = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
//   return (
//     <mesh ref={ref} position={[2, 10, 0]}>
//       <boxGeometry />
//       <meshStandardMaterial attach="material" color="green" />
//     </mesh>
//   );
// };
// const Plane = ({ x, y, z }) => {
//   const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
//   return (
//     <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -5]}>
//       <planeGeometry args={[100, 100]} />
//       <meshStandardMaterial attach="material" color="#403e51" />
//     </mesh>
//   );
// };

// const Scene = () => {
//   return (
//     <Suspense fallback={null}>
//       <Modals />
//     </Suspense>
//   );
// };

export default Home;
