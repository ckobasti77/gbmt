import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useGSAP(() => {
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      fontWeight: 600,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <ul className={`w-full py-6 px-48 flex items-center justify-between text-lg ${currentPath === '/' ? 'text-[#252525]' : 'text-[#e0e0e0]'}`}>
      <h2 className="link text-5xl -translate-y-96 opacity-0 cursor-pointer font-bold tracking-widest text-blue-800">
        GBMT
      </h2>
      <div className="flex items-center gap-x-8">
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Pocetna</li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">
            Video nadzor
        </li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Iskopi</li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">
            Recenzije
        </li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Kontakt</li>
      </div>
    </ul>
  );
};

export default Navbar;
