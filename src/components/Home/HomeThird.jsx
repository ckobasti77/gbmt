import React from "react";
import {
  iskopiTestimonials,
  videoTestimonials,
} from "../../constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeThird = () => {
  useGSAP(() => {
    gsap.to(".home-3-title", {
      scrollTrigger: ".home-3-title",
      y: 0,
      opacity: 1,
    });
    gsap.to(".recenzije-stagger-video", {
      scrollTrigger: ".recenzije-stagger-video",
      y: 0,
      opacity: 1,
      stagger: 0.15,
    });
    gsap.to(".recenzije-stagger-iskopi", {
      scrollTrigger: ".recenzije-stagger-iskopi",
      y: 0,
      delay: 0.75,
      opacity: 1,
      stagger: 0.15,
    });
  }, []);
  return (
    <div className="w-screen bg-[url(/./new-bg-2.avif)] bg-no-repeat bg-left lg:bg-top bg-cover overflow-hidden text-white">
      <div className="overlay min-h-screen pb-12">
        <h2 className="text-gradient hidden lg:block home-3-title text-3xl text-center font-semibold pb-8 translate-y-32 opacity-0">
          Recenzije
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div style={{ backgroundPosition: window.innerWidth < 1024 && '22.5% 50%' }} className="bg-[url(/./new-bg-mirror.avif)] lg:bg-none bg-no-repeat bg-cover bg-left flex flex-col items-center gap-y-16 w-full h-screen">
            <div className="overlay lg:bg-none flex flex-col items-center justify-between gap-y-12 py-12 h-full">
              <h2 className="text-gradient block lg:hidden home-3-title text-3xl text-center font-semibold pb-8 translate-y-32 opacity-0">
                Recenzije
              </h2>
              {videoTestimonials.map((single) => (
                <div
                  key={single.name}
                  className="flex flex-col items-center w-5/6 lg:w-1/2 border-t-4 backdrop-blur-lg border-blue-500 rounded-2xl p-6 relative translate-y-32 opacity-0 recenzije-stagger-video"
                >
                  <img
                    src={single.img}
                    alt="img"
                    className="w-20 h-20 rounded-2xl absolute -top-14 translate-y-32 opacity-0 recenzije-stagger-video"
                  />
                  <h3 className="text-xl font-semibold translate-y-32 opacity-0 recenzije-stagger-video">
                    {single.name}
                  </h3>
                  <span className="text-md font-black tracking-wider text-gradient translate-y-32 opacity-0 recenzije-stagger-video">
                    {single.position}
                  </span>
                  <p className="mt-4 min-h-36 translate-y-32 opacity-0 recenzije-stagger-video">
                    {single.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundPosition: window.innerWidth < 1024 && '22.5% 50%' }} className="bg-[url(/./new-bg-2.avif)] bg-no-repeat bg-cover bg-left lg:bg-none flex flex-col items-center gap-y-16 w-full h-screen">
            <div className="overlay lg:bg-none flex flex-col items-center justify-between gap-y-16 py-36 lg:py-12 h-full">
              {iskopiTestimonials.map((single) => (
                <div
                  key={single.name}
                  className="flex flex-col items-center w-5/6 lg:w-1/2 border-t-4 backdrop-blur-lg border-blue-500 rounded-2xl p-6 relative translate-y-32 opacity-0 recenzije-stagger-iskopi"
                >
                  <img
                    src={single.img}
                    alt="img"
                    className="w-20 h-20 rounded-2xl absolute -top-14 translate-y-32 opacity-0 recenzije-stagger-iskopi"
                  />
                  <h3 className="text-xl font-semibold translate-y-32 opacity-0 recenzije-stagger-iskopi">
                    {single.name}
                  </h3>
                  <span className="text-md font-black tracking-wider text-gradient translate-y-32 opacity-0 recenzije-stagger-iskopi">
                    {single.position}
                  </span>
                  <p className="mt-4 min-h-36 flex items-center translate-y-32 opacity-0 recenzije-stagger-iskopi">
                    {single.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
