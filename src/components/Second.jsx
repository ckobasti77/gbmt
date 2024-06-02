import React from "react";
import Navbar from "./Navbar";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Second = () => {
  useGSAP(() => {
    gsap.to(".title", {
      duration: 2,
      text: "Nadgledanje i Zaštita <br /> Vaša Sigurnost na Prvom Mestu",
      ease: "none",
    });
    gsap.to(".description", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2,
    });
    gsap.to(".cta", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2.5,
    });
    gsap.to(".slika-kamere", {
      x: 0,
      scale: 1,
      delay: 2.5,
    });
  }, []);

  return (
    <div className="relative h-screen w-screen montserrat-font text-[#e0e0e0] overflow-hidden bg-[url(/./drag.webp)] bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="flex gap-x-12 px-12 items-center justify-center ">
        <div className="flex flex-col py-12 justify-center items-center rounded-2xl bg-blur">
          <h1 className="title font-bold text-4xl text-center tracking-wider mb-8"></h1>
          <h3 className="description opacity-0 translate-y-32 font-semibold text-lg text-center">
            Najbolje HD sigurnosne kamere, stručno instalirane i prilagođene
            vašim potrebama. Osigurajte svoj dom ili posao uz našu pouzdanu
            zaštitu.
          </h3>
          <button className="group mt-8 cta opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center">
            Kontakt{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/./single-camera.png"
            alt="camera"
            className="slika-kamere scale-0 translate-x-full"
          />
        </div>
      </div>
      <div className="absolute bottom-5 right-0 left-0 mx-auto cursor-pointer">
        <ChevronDown className="w-10 h-10 mx-auto" />
        <ChevronDown className="w-10 h-10 mx-auto -mt-7" />
      </div>
    </div>
  );
};

export default Second;
