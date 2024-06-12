import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeSecond = () => {
  useGSAP(() => {
    gsap.to(".video-stagger", {
      scrollTrigger: ".video-slika",
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
    gsap.to(".iskopi-stagger", {
      scrollTrigger: ".iskopi-slika",
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <div
      id="sekcija-dva"
      className="min-h-screen w-screen bg-[url(/./new-bg-mirror.png)] bg-no-repeat bg-left lg:bg-bottom bg-cover size text-white"
    >
      <div className="overlay min-h-screen w-full bg-opacity-20 flex flex-col lg:flex-row items-center justify-between">
        <div style={{backgroundPosition: "calc(0% + 10px) top;"}} className="w-full bg-[url(/./new-bg-mirror.png)] bg-no-repeat lg:bg-top bg-cover lg:bg-none h-screen lg:h-full">
          <div className="overlay h-full lg:bg-none flex flex-col items-center justify-between py-16">
            <h2 className="text-gradient video-stagger translate-y-32 opacity-0 text-3xl font-bold">
              Video nadzor
            </h2>
            <img
              src="/./single-camera.png"
              alt="camera"
              className="video-stagger video-slika translate-y-32 opacity-0 w-2/6 camera"
            />
            <p className="px-6 lg:px-36 text-lg text-justify my-12 video-stagger translate-y-32 opacity-0">
              Dobrodošli u{" "}
              <span className="font-bold text-gradient">Global Beo Mobil Trend</span>, vašeg
              pouzdanog partnera za sve potrebe video nadzora. Specijalizovani
              smo za ugradnju i održavanje najsavremenijih sistema video
              nadzora, pružajući vam sigurnost i mir. Naš tim stručnjaka koristi
              najnoviju tehnologiju kako bi osigurao da vaša imovina bude
              zaštićena u svakom trenutku.
            </p>
            <Link
              to="/video-nadzor"
              className="video-stagger group opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
            >
              Saznaj više{" "}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
            </Link>
          </div>
        </div>
        <div className="w-full bg-[url(/./new-bg-2.png)] bg-no-repeat bg-left lg:bg-top bg-cover lg:bg-none h-screen lg:h-full">
          <div className="overlay h-full lg:bg-none flex flex-col items-center justify-between py-16">
            <h2 className="text-gradient iskopi-stagger translate-y-32 opacity-0 text-3xl font-bold">
              Iskopi
            </h2>
            <img
              src="/./bager.png"
              alt="camera"
              className="w-2/6 iskopi-stagger iskopi-slika translate-y-32 opacity-0 bager"
            />
            <p className="px-6 lg:px-36 text-lg text-justify my-12 iskopi-stagger translate-y-32 opacity-0">
              Pored video nadzora, nudimo sve vrste iskopnih radova sa našom
              modernom flotom bagera. Bilo da se radi o građevinskim projektima,
              uređenju terena ili drugim vrstama iskopavanja, naši iskusni
              operateri osiguravaju efikasnost i preciznost u svakom zadatku.
              Vaši projekti će biti završeni na vreme i u okviru dogovorenog
              budžeta.
            </p>
            <Link
              to="/iskopi"
              className="iskopi-stagger group opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
            >
              Saznaj više{" "}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
