import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeFirst from "../components/Home/HomeFirst";
import HomeSecond from "../components/Home/HomeSecond";
import HomeThird from "../components/Home/HomeThird";

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

    gsap.to(".video-iskopi-naslov", {
      scrollTrigger: ".video-iskopi-slike",
      y: 0,
      opacity: 1,
    });
    gsap.to(".video-iskopi-slike", {
      scrollTrigger: ".video-iskopi-slike",
      y: 0,
      opacity: 1,
      delay: 0.5,
    });
    gsap.to(".video-iskopi-tekst", {
      scrollTrigger: ".video-iskopi-slike",
      y: 0,
      opacity: 1,
      delay: 1,
    });
    gsap.to(".video-iskopi-dugmad", {
      scrollTrigger: ".video-iskopi-slike",
      y: 0,
      opacity: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
    </div>
  );
};

export default Home;
