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
      scrollTrigger: '.home-3-title',
      y: 0,
      opacity: 1,
    })
    gsap.to(".recenzije-stagger-video", {
      scrollTrigger: '.recenzije-stagger-video',
      y: 0,
      opacity: 1,
      stagger: 0.15,
    })
    gsap.to(".recenzije-stagger-iskopi", {
      scrollTrigger: '.recenzije-stagger-iskopi',
      y: 0,
      delay: 0.75,
      opacity: 1,
      stagger: 0.15,
    })
  }, []);
  return (
    <div className="py-6 lg:py-0 w-screen bg-[url(/./mobile-bg.png)] lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover overflow-hidden">
      <h2 className="home-3-title text-3xl text-center font-semibold mb-8 translate-y-32 opacity-0">Recenzije</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center gap-y-16 w-full h-full py-12">
          {videoTestimonials.map((single) => (
            <div
              key={single.name}
              className="flex flex-col items-center w-5/6 lg:w-1/2 border-t-4 border-blue-600 rounded-2xl p-6 relative translate-y-32 opacity-0 recenzije-stagger-video"
            >
              <img
                src={single.img}
                alt="img"
                className="w-20 h-20 rounded-2xl absolute -top-14 translate-y-32 opacity-0 recenzije-stagger-video"
              />
              <h3 className="text-xl font-semibold translate-y-32 opacity-0 recenzije-stagger-video">{single.name}</h3>
              <span className="text-md font-black tracking-wider text-blue-600 translate-y-32 opacity-0 recenzije-stagger-video">
                {single.position}
              </span>
              <p className="mt-4 translate-y-32 opacity-0 recenzije-stagger-video">{single.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-16 w-full h-full py-12">
          {iskopiTestimonials.map((single) => (
            <div
              key={single.name}
              className="flex flex-col items-center w-5/6 lg:w-1/2 border-t-4 border-blue-600 rounded-2xl p-6 relative translate-y-32 opacity-0 recenzije-stagger-iskopi"
            >
              <img
                src={single.img}
                alt="img"
                className="w-20 h-20 rounded-2xl absolute -top-14 translate-y-32 opacity-0 recenzije-stagger-iskopi"
              />
              <h3 className="text-xl font-semibold translate-y-32 opacity-0 recenzije-stagger-iskopi">{single.name}</h3>
              <span className="text-md font-black tracking-wider text-blue-600 translate-y-32 opacity-0 recenzije-stagger-iskopi">
                {single.position}
              </span>
              <p className="mt-4 translate-y-32 opacity-0 recenzije-stagger-iskopi">{single.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
