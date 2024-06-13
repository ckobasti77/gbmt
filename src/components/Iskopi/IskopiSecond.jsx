import React from "react";
import { iskopiCards, iskopiCards2 } from "../../constants/constants";

const IskopiSecond = () => {
  return (
    <div className="overflow-y-hidden min-h-screen text-white w-screen  bg-[url(/./new-bg-mirror.avif)] bg-no-repeat bg-left lg:bg-bottom bg-cover">
      <div className="overlay flex flex-col lg:flex-row justify-center items-center">
        <div style={{ backgroundPosition: window.innerWidth < 1024 && '22.5% 50%' }}className="bg-[url(/./new-bg-mirror.avif)] w-full lg:w-1/2 h-screen lg:bg-none bg-cover bg-left bg-no-repeat">
          <div className="overlay h-screen lg:bg-none flex flex-col items-center justify-center gap-y-12 px-6 lg:px-0 py-6 lg:py-0 ">
            {iskopiCards.map((iskop, i) => (
              <div
                key={i}
                className="relative w-full lg:w-1/2 lg:mx-4 rounded-xl border-t-4 backdrop-blur-lg border-blue-600 flex flex-col items-center justify-between px-8 py-4 gap-y-2"
              >
                <div className="absolute -top-11 rounded-full border-blue-600 border-4 w-20 h-20 grid place-items-center">
                  <iskop.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="mt-8 text-2xl font-bold text-center text-gradient">
                  {iskop.title}
                </h2>
                <p style={{ textShadow: '1px 1px 3px #000' }}className="min-h-30 text-center text-md font-semibold">
                  {iskop.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundPosition: window.innerWidth < 1024 && '22.5% 50%' }} className="bg-[url(/./new-bg-2.avif)] w-full lg:w-1/2 h-screen lg:bg-none bg-cover bg-left bg-no-repeat">
          <div className="overlay h-screen lg:bg-none flex flex-col items-center justify-center gap-y-12 px-6 lg:px-0 py-6 lg:py-0 ">
            {iskopiCards2.map((iskop, i) => (
              <div
                key={i}
                className="relative w-full lg:w-1/2 lg:mx-4 rounded-xl border-t-4 backdrop-blur-lg border-blue-600 flex flex-col items-center justify-between px-8 py-4 gap-y-2"
              >
                <div className="absolute -top-11 backdrop-blur-2xl rounded-full border-blue-600 border-4 w-20 h-20 grid place-items-center">
                  <iskop.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="mt-8 text-2xl font-bold text-center text-gradient">
                  {iskop.title}
                </h2>
                <p style={{ textShadow: '1px 1px 3px #000' }}className="min-h-30 text-center text-md font-semibold">
                  {iskop.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IskopiSecond;
