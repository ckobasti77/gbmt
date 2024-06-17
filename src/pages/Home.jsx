import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeFirst from "../components/Home/HomeFirst";
import HomeSecond from "../components/Home/HomeSecond";
import HomeThird from "../components/Home/HomeThird";
import { Helmet } from "react-helmet";

gsap.registerPlugin(TextPlugin);

const Home = () => {
  useGSAP(() => {
    gsap.to(".title", {
      duration: 2,
      text: "Nadgledanje i Zaštita <br className='hidden lg:block' /> Vaša Sigurnost na Prvom Mestu",
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
    gsap.to(".scroll-to", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 3,
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dobrodošli u Global Beo Mobil Trend - Lider u Video Nadzoru i Iskopnim Radovima</title>
        <meta
          name="description"
          content="Global Beo Mobil Trend pruža vrhunske usluge ugradnje video nadzora i iskopnih radova. Otkrijte zašto smo vodeći u industriji sa našim profesionalnim i pouzdanim rešenjima."
        />
        <link rel="canonical" href="https://gbmt.rs/početna" />
      </Helmet>
      <div className="overflow-x-hidden">
        <HomeFirst />
        <HomeSecond />
        <HomeThird />
      </div>
    </>
  );
};

export default Home;
