import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const VideoFirst = () => {
  useGSAP(() => {
    gsap.to(".video-hero-elements", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <div className="min-h-screen w-screen bg-[url(/./mobile-bg-2.png)] lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover pt-24">
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row px-6 lg:px-48">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-y-8">
          <h1 className="video-hero-elements opacity-0 translate-y-32 text-4xl font-medium">
            Sveobuhvatni Sistemi Video Nadzora
          </h1>
          <h3 className="video-hero-elements font-bold opacity-0 translate-y-32 text-lg text-blue-600">
            Povećajte sigurnost vašeg doma ili poslovnog prostora sa našim
            naprednim video nadzorom. Naši sistemi nude vrhunsku rezoluciju,
            pouzdanost i jednostavno upravljanje, pružajući vam potpunu zaštitu
            24/7.
          </h3>
          <Link
            to="/kontakt"
            className="text-nowrap video-hero-elements opacity-0 translate-y-32 group px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
          >
            Zakažite Besplatnu Konsultaciju{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:justify-end">
          <img
            src="/./single-camera.png"
            alt="camera"
            className="video-hero-elements opacity-0 translate-y-32 w-5/6"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoFirst;
