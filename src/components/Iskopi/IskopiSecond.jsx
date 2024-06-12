import React from "react";
import { iskopiCards, iskopiCards2 } from "../../constants/constants";

const IskopiSecond = () => {
  return (
    <div className="overflow-hidden text-white w-screen  bg-[url(/./new-bg-mirror.png)] bg-no-repeat bg-left lg:bg-top bg-cover">
      <div className="overlay flex flex-col lg:flex-row justify-center items-center">
        <div className="bg-[url(/./new-bg-mirror.png)] w-full lg:w-1/2 h-screen lg:bg-none bg-cover bg-left bg-no-repeat">
          <div className="overlay h-screen lg:bg-none flex flex-col lg:flex-row items-center gap-y-8 px-6 lg:px-0 py-6 lg:py-0">
            {iskopiCards.map((iskop, i) => (
              <div
                key={i}
                className="w-full lg:w-1/2 lg:mx-4 lg:h-[480px] rounded-xl border-4 border-blue-600 flex flex-col items-center justify-between px-8 py-4 gap-y-4"
              >
                <div className="rounded-full border-blue-600 border-4 w-20 h-20 grid place-items-center">
                  <iskop.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-center text-gradient">
                  {iskop.title}
                </h2>
                <p className="text-center text-md font-semibold">
                  {iskop.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[url(/./new-bg-mirror.png)] w-full lg:w-1/2 h-screen lg:bg-none bg-cover bg-left bg-no-repeat">
          <div className="overlay h-screen lg:bg-none flex flex-col lg:flex-row items-center gap-y-8 px-6 lg:px-0 py-6 lg:py-0">
            {iskopiCards2.map((iskop, i) => (
              <div
                key={i}
                className="w-full lg:w-1/2 lg:mx-4 lg:h-[480px] rounded-xl border-4 border-blue-600 flex flex-col items-center justify-between px-8 py-4 gap-y-4"
              >
                <div className="rounded-full border-blue-600 border-4 w-20 h-20 grid place-items-center">
                  <iskop.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-center text-gradient">
                  {iskop.title}
                </h2>
                <p className="text-center text-md font-semibold">
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
