import React from "react";
import {
  iskopiTestimonials,
  videoTestimonials,
} from "../../constants/constants";

const HomeThird = () => {
  return (
    <div className="py-6 lg:py-0 min-h-screen w-screen bg-[url(/./mobile-bg.png)] lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover">
      <h2 className="text-3xl text-center font-semibold mb-8">Recenzije</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center gap-y-16 w-full h-full py-12">
          {videoTestimonials.map((single) => (
            <div
              key={single.name}
              className="flex flex-col items-center w-5/6 lg:w-1/2 border-t-4 border-blue-600 rounded-2xl p-6 relative"
            >
              <img
                src={single.img}
                alt="img"
                className="w-20 h-20 rounded-2xl absolute -top-14"
              />
              <h3 className="text-xl font-bold">{single.name}</h3>
              <span className="text-md text-blue-600   ">
                {single.position}
              </span>
              <p className="mt-4">{single.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-16 w-full h-full py-12">
          {iskopiTestimonials.map((single) => (
            <div
              key={single.name}
              className="flex flex-col items-center w-5/6 lg:w-1/2 border-t-4 border-blue-600 rounded-2xl p-6 relative"
            >
              <img
                src={single.img}
                alt="img"
                className="w-20 h-20 rounded-2xl absolute -top-14"
              />
              <h3 className="text-xl font-bold">{single.name}</h3>
              <span className="text-md text-blue-600   ">
                {single.position}
              </span>
              <p className="mt-4">{single.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
