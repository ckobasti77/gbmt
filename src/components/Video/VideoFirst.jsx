import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "../Button";

const VideoFirst = () => {
  useGSAP(() => {
    gsap.to(".video-hero-elements", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <div className="min-h-screen w-screen bg-[url(/./new-bg-2.png)] bg-no-repeat bg-left lg:bg-top bg-cover text-white">
      <div className="overlay pt-24 min-h-screen">
        <div className="flex  lg:flex-row px-6 lg:px-48">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-8">
            <h1 className="text-gradient text-center video-hero-elements opacity-0 translate-y-32 text-4xl font-medium">
              Sveobuhvatni Sistemi Video Nadzora
            </h1>
            <h3 className="video-hero-elements font-bold opacity-0 translate-y-32 text-lg text-center">
              Povećajte sigurnost vašeg doma ili poslovnog prostora sa našim
              naprednim video nadzorom. Naši sistemi nude vrhunsku rezoluciju,
              pouzdanost i jednostavno upravljanje, pružajući vam potpunu
              zaštitu 24/7.
            </h3>
            <img
              src="/./single-camera.png"
              alt="camera"
              className="video-hero-elements block lg:hidden opacity-0 translate-y-32 w-5/6"
            />
            <Button
              to="/kontakt"
              text="Zakažite besplatnu konsultaciju"
              className="video-hero-elements"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full hidden lg:flex items-center justify-center lg:justify-end">
            <img
              src="/./single-camera.png"
              alt="camera"
              className="video-hero-elements opacity-0 translate-y-32 w-5/6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFirst;
