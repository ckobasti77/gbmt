import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { iskopiTestimonials, videoTestimonials } from "../constants/constants";
import Footer from "./Footer";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  useGSAP(() => {
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

    gsap.to(".video-iskopi-naslov", {
      scrollTrigger: '.video-iskopi-slike',
      y: 0,
      opacity: 1,
    })
    gsap.to(".video-iskopi-slike", {
      scrollTrigger: '.video-iskopi-slike',
      y: 0,
      opacity: 1,
      delay: .5,
    })
    gsap.to(".video-iskopi-tekst", {
      scrollTrigger: '.video-iskopi-slike',
      y: 0,
      opacity: 1,
      delay: 1,
    })
    gsap.to(".video-iskopi-dugmad", {
      scrollTrigger: '.video-iskopi-slike',
      y: 0,
      opacity: 1,
      delay: 1.5,
    })
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen w-screen bg-[url(/./cameras-edit.png)] bg-no-repeat bg-bottom bg-cover montserrat-font text-[#252525] overflow-hidden">
        <Navbar />
        <div className="flex flex-col items-center gap-y-6 px-80 mt-8 ml-4">
          <h1 className="title font-bold text-5xl text-center tracking-wider"></h1>
          <h3 className="description opacity-0 translate-y-32 font-semibold text-lg text-blue-600 text-center">
            Najbolje HD sigurnosne kamere, stručno instalirane i prilagođene
            vašim potrebama. <br /> Osigurajte svoj dom ili posao uz našu
            pouzdanu zaštitu.
          </h3>
          <Link
            to="/kontakt"
            className="group mt-64 cta opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
          >
            Kontakt{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
          </Link>
          <a href="#sekcija-dva">
            <ChevronDown className="h-12 w-12" />
            <ChevronDown className="h-12 w-12 -translate-y-9" />
          </a>
        </div>
      </div>
      <div id="sekcija-dva" className="min-h-screen w-screen bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover flex items-center justify-between">
        <div className="flex flex-col items-center w-full h-full py-12">
          <h2 className="video-iskopi-naslov translate-y-32 opacity-0 text-3xl font-bold">Video nadzor</h2>
          <img src="/./single-camera.png" alt="camera" className="video-iskopi-slike translate-y-32 opacity-0 w-4/12 camera" />
          <p className="px-36 text-xl text-justify my-12 video-iskopi-tekst translate-y-32 opacity-0">
            Dobrodošli u{" "}
            <span className="font-bold">Global Beo Mobil Trend</span>, vašeg
            pouzdanog partnera za sve potrebe video nadzora. Specijalizovani smo
            za ugradnju i održavanje najsavremenijih sistema video nadzora,
            pružajući vam sigurnost i mir. Naš tim stručnjaka koristi najnoviju
            tehnologiju kako bi osigurao da vaša imovina bude zaštićena u svakom
            trenutku.
          </p>
          <Link
            to="/video-nadzor"
            className="video-iskopi-dugmad group cta opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
          >
            Saznaj više{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
          </Link>
        </div>
        <div className="flex flex-col items-center w-full h-full py-12">
          <h2 className="video-iskopi-naslov translate-y-32 opacity-0 text-3xl font-bold">Iskopi</h2>
          <img src="/./bager.png" alt="camera" className="w-4/12 video-iskopi-slike translate-y-32 opacity-0 ager" />
          <p className="px-36 text-xl text-justify my-12 video-iskopi-tekst translate-y-32 opacity-0">
            Pored video nadzora, nudimo sve vrste iskopnih radova sa našom
            modernom flotom bagera. Bilo da se radi o građevinskim projektima,
            uređenju terena ili drugim vrstama iskopavanja, naši iskusni
            operateri osiguravaju efikasnost i preciznost u svakom zadatku. Vaši
            projekti će biti završeni na vreme i u okviru dogovorenog budžeta.
          </p>
          <Link
            to="/iskopi"
            className="video-iskopi-dugmad group cta opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
          >
            Saznaj više{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
          </Link>
        </div>
      </div>
      <div className="min-h-screen w-screen bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover flex items-center justify-between">
        <div className="flex flex-col items-center gap-y-16 w-full h-full py-12">
          {videoTestimonials.map((single) => (
            <div className="flex flex-col items-center w-1/2 border-t-4 border-blue-600 rounded-2xl p-6 relative">
              <img
                src={single.img}
                alt="img"
                className="w-20 h-20 rounded-2xl absolute -top-14"
              />
              <h3 className="text-xl font-bold">{single.name}</h3>
              <span className="text-md text-blue-600   ">{single.position}</span>
              <p className="mt-4">{single.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-y-16 w-full h-full py-12">
          {iskopiTestimonials.map((single) => (
            <div className="flex flex-col items-center w-1/2 border-t-4 border-blue-600 rounded-2xl p-6 relative">
              <img
                src={single.img}
                alt="img"
                className="w-20 h-20 rounded-2xl absolute -top-14"
              />
              <h3 className="text-xl font-bold">{single.name}</h3>
              <span className="text-md text-blue-600   ">{single.position}</span>
              <p className="mt-4">{single.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
