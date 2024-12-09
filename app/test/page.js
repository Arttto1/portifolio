"use client";

import { useRef, useEffect, useState } from "react";

export default function Test() {
  const redSquare = useRef(null);
  const blueSquare = useRef(null);
  const mainPage = useRef(null);
  const positionY = useRef(0);
  const [overflow, setOverflow] = useState("hidden");

  function deslocarDivs(e) {
    console.log(mainPage.current.style.scale, positionY.current);
    const maxValue = (window.innerWidth + redSquare.current.offsetWidth) / 2;
    // if (positionY.current === 0) {
    //   e.preventDefault();
    //   setOverflow("hidden")
    // }
    if (mainPage.current.style.scale === "1") {
      setOverflow("visible");
    } else {
      e.preventDefault();
      setOverflow("hidden")
    }

    if (window.scrollY === 0) {
      positionY.current = Math.max(
        0,
        Math.min(
          maxValue,
          positionY.current + (e.deltaY)
        )
      );
    }

    // console.log(positionY.current)
    
    if (positionY.current >= 0 && window.scrollY === 0) {
      redSquare.current.style.transform = `translateX(${positionY.current}px)`;
      blueSquare.current.style.transform = `translateX(${-positionY.current}px)`;
      mainPage.current.style.scale = Math.min(1, positionY.current / maxValue);
      mainPage.current.style.opacity = Math.min(
        1,
        positionY.current / maxValue
      );
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", deslocarDivs, { passive: false });
    return () => window.removeEventListener("wheel", deslocarDivs);
  }, [overflow]);

  return (
    <>
      <div className="absolute flex flex-col w-full h-full justify-center items-center overflow-hidden z-10">
        <div ref={redSquare} className="w-[30vw] h-[15vw] bg-red-500"></div>
        <div ref={blueSquare} className="w-[30vw] h-[15vw] bg-blue-500"></div>
      </div>
      <div
        ref={mainPage}
        className="w-full h-full flex flex-col gap-8 text-center items-center"
        style={{ scale: 0, opacity: 0, overflow: overflow }}
      >
        <h1 className="">Titulo</h1>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p className="max-w-[75vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </>
  );
}
