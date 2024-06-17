import React from "react";
import AutoSwiper from "../AutoSwiper";
import Gallery from "../Gallery";
import ImageTicker from "../ImageTicker";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const VideoThird = () => {
  useGSAP(() => {
    gsap.to(".video-third-stagger", {
      scrollTrigger: ".video-third-stagger",
      opacity: 1,
      y: 0,
      stagger: 0.15,
    })
  }, [])

  return (
    <div
      style={{
        backgroundPosition: window.innerWidth < 1024 && "22.5% 50%",
      }}
      className="min-h-screen bg-[url(/./new-bg-mirror.avif)] lg:bg-[url(/./new-bg-2.avif)] lg:bg-top bg-cover bg-no-repeat"
    >
      <div className="overlay min-h-screen px-6 lg:px-48 flex flex-col justify-evenly">
        <h1 className="video-third-stagger opacity-0 translate-y-32 text-2xl lg:text-5xl text-gradient text-center">
          Izaberite Savršenu Kameru za Vaš Nadzor
        </h1>
        <p className="video-third-stagger opacity-0 translate-y-32 text-white font-semibold">
          Otkrijte našu impresivnu kolekciju kamera dizajniranih da zadovolje
          sve vaše sigurnosne potrebe. Bez obzira na uslove, naše kamere pružaju
          izvanrednu jasnoću i pouzdanost. Od diskretnih modela za unutrašnju
          upotrebu do robustnih kamera za spoljašnje uslove, imamo sve što vam
          treba da osigurate svoj prostor. Pregledajte našu ponudu i pronađite
          idealnu kameru koja će vam doneti mir i sigurnost.
        </p>
        <ImageTicker />
      </div>
    </div>
  );
};

export default VideoThird;
