import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "../Button";

const IskopiFirst = () => {
  useGSAP(() => {
    gsap.to(".video-hero-elements", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <div style={{ backgroundPosition: window.innerWidth < 1024 && '22.5% 50%' }} className="min-h-screen w-screen bg-[url(/./new-bg-2.avif)] bg-no-repeat bg-left lg:bg-top bg-cover text-white">
      <div className="overlay pt-24 min-h-screen">
        <div className="flex  lg:flex-row px-6 lg:px-48">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-8">
            <h1 className="text-gradient text-center video-hero-elements opacity-0 translate-y-32 text-4xl font-medium">
              Prvoklasni Iskopi za Sve Vaše Građevinske Potrebe
            </h1>
            <h3 className="video-hero-elements font-bold opacity-0 translate-y-32 text-lg text-center">
              Iskoristite našu naprednu tehnologiju i stručnost za brze i
              precizne iskopne radove. Pružamo pouzdana rešenja koja će
              osigurati uspeh vašeg projekta.
            </h3>
            <img
              src="/./bager.avif"
              alt="bager"
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
              src="/./bager.avif"
              alt="bager"
              className="video-hero-elements opacity-0 translate-y-32 w-5/6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IskopiFirst;
