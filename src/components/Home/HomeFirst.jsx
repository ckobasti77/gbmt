import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeFirst = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 px-6 lg:px-80 mt-8 ml-4">
      <h1 className="title mt-8 lg:mt-0 font-bold text-2xl lg:text-5xl text-center tracking-wider"></h1>
      <h3 className="description z-40 opacity-0 translate-y-32 font-semibold text-md lg:text-lg text-blue-600 text-center">
        Najbolje HD sigurnosne kamere, stručno instalirane i prilagođene vašim
        potrebama. <br /> Osigurajte svoj dom ili posao uz našu pouzdanu
        zaštitu.
      </h3>
      <img src="/./single-camera-1.png" alt="camera" className="absolute w-2/6 right-0 top-[480px] block lg:hidden overflow-hidden" />
      <div className="absolute bottom-1 ml-2.5 flex flex-col items-center justify-center">
        <Link
            to="/kontakt"
            className="group cta opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
        >
            Kontakt{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
        </Link>
        <a href="#sekcija-dva" className="scroll-to opacity-0 translate-y-32">
            <ChevronDown className="h-12 w-12" />
            <ChevronDown className="h-12 w-12 -translate-y-9" />
        </a>
      </div>
    </div>
  );
};

export default HomeFirst;
