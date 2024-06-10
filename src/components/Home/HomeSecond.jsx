import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeSecond = () => {
  useGSAP(() => {
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
    <div id="sekcija-dva" className="min-h-screen w-screen bg-[url(/./mobile-bg-2.png)] lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center w-full h-full py-6">
          <h2 className="video-iskopi-naslov translate-y-32 opacity-0 text-3xl font-bold">Video nadzor</h2>
          <img src="/./single-camera.png" alt="camera" className="video-iskopi-slike translate-y-32 opacity-0 w-2/6 camera" />
          <p className="px-6 lg:px-36 text-lg text-justify my-12 video-iskopi-tekst translate-y-32 opacity-0">
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
        <div className="flex flex-col items-center w-full h-full py-6">
          <h2 className="video-iskopi-naslov translate-y-32 opacity-0 text-3xl font-bold">Iskopi</h2>
          <img src="/./bager.png" alt="camera" className="w-2/6 video-iskopi-slike translate-y-32 opacity-0 bager" />
          <p className="px-6 lg:px-36 text-lg text-justify my-12 video-iskopi-tekst translate-y-32 opacity-0">
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
  )
}

export default HomeSecond