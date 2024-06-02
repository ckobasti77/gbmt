import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from 'gsap/all'
import { ChevronRight } from 'lucide-react'

gsap.registerPlugin(TextPlugin);

function App() {
  useGSAP(() => {
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      fontWeight: 600,
      duration: 1,
      stagger: 0.25,
    });

    gsap.to(".title", {
      duration: 2,
      text: "Nadgledanje i Zaštita <br /> Vaša Sigurnost na Prvom Mestu",
      ease: "none",
    });
    gsap.to(".description", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2,
    });
    gsap.to(".cta", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2.5,
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-[url(/./cameras-edit.png)] bg-no-repeat bg-bottom bg-cover montserrat-font text-[#252525]">
      <ul className="w-full py-6 px-48 flex items-center justify-between text-lg ">
        <h2 className="link text-5xl -translate-y-96 opacity-0 cursor-pointer font-bold tracking-widest text-blue-600">
          GBMT
        </h2>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Pocetna</li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Video nadzor</li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Iskopi</li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Recenzije</li>
        <li className="link -translate-y-96 opacity-0 cursor-pointer">Kontakt</li>
      </ul>
      <div className="flex flex-col items-center gap-y-6 px-80 mt-8 ml-4">
        <h1 className="title font-bold text-5xl text-center tracking-wider">
        </h1>
        <h3 className="description opacity-0 translate-y-32 font-semibold text-lg text-center">
          Najbolje HD sigurnosne kamere, stručno instalirane i prilagođene vašim
          potrebama. <br /> Osigurajte svoj dom ili posao uz našu pouzdanu zaštitu.
        </h3>
        <button className="group mt-64 cta opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center">Kontakt {" "} <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" /></button>
      </div>
    </div>
  );
}

export default App;
