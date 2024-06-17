import React, { useCallback, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/constants";
import { Menu, PhoneCallIcon } from "lucide-react";
import { scrollToTop } from "./ScrollToTop";
import Burger from "./Burger";

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

  const [showNav, setShowNav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = scrollPos > currentScrollPos;
      setScrollPos(currentScrollPos);
      setShowNav(visible);
      setNavOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  const toggleNav = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <ul
      className={`fixed top-0 w-full py-6 px-6 lg:px-48 flex items-center justify-between text-lg z-[999999] transition-all lg:hover:backdrop-blur-lg ${
        showNav ? "transform-none " : "transform -translate-y-full"
      }`}
    >
      <a
          href="tel:+381641234567"
          className="link -translate-y-96 opacity-0 h-12 w-12 bg-green-600 rounded-full grid lg:hidden place-items-center text-white"
        >
          <PhoneCallIcon />
        </a>
      <div className="justify-start gap-x-6 hidden lg:flex">
        {navLinks.slice(0,2).map((link) => (
            <Link
              onClick={() => {
                setNavOpen(false);
                scrollToTop();
              }}
              key={link.id}
              to={link.to}
              className={`link z-50 -translate-y-96 opacity-0 cursor-pointer ${currentPath === link.to ? "text-blue-500" : "text-white"}`}
              style={{textShadow: currentPath === link.to ? "1px 1px 5px #000" : ''}}
            >
              {link.text}
            </Link>
          ))}
      </div>
      <Link
        to="/"
        className="link text-5xl -translate-y-96 opacity-0 cursor-pointer font-bold tracking-widest text-blue-500 drop-shadow-2xl"
      >
        <img src="/./logo-mix.avif" alt="logo" width={150} />
      </Link>
      <div className="justify-end gap-x-6 hidden lg:flex">
        {navLinks.slice(2,4).map((link) => (
            <Link
              onClick={() => {
                setNavOpen(false);
                scrollToTop();
              }}
              key={link.id}
              to={link.to}
              className={`link z-50 -translate-y-96 opacity-0 cursor-pointer ${currentPath === link.to ? "text-blue-500" : "text-white"}`}
              style={{textShadow: currentPath === link.to ? "1px 1px 10px #000" : ''}}
            >
              {link.text}
            </Link>
          ))}
      </div>
      <Burger navOpen={navOpen} toggleNav={toggleNav} />
      <div
        className={`lg:hidden border-b-4 border-blue-500 lg:border-none py-8 lg:py-0 z-[9999999] rounded-b-xl  lg:rounded-b-none backdrop-blur-lg lg:backdrop-blur-none lg:bg-none flex flex-col lg:flex-row items-center gap-x-8 fixed lg:static ${navOpen ? "top-20" : "-top-96"} transition-all left-0 right-0 gap-y-8`}
      >
        {navLinks.map((link) => (
          <Link
            onClick={() => {
              setNavOpen(false);
              scrollToTop();
            }}
            key={link.id}
            to={link.to}
            className={`link z-50 -translate-y-96 opacity-0 cursor-pointer ${currentPath === link.to ? "text-blue-500" : "text-white"}`}
            style={{textShadow: currentPath === link.to ? "1px 1px 10px #000" : ''}}
          >
            {link.text}
          </Link>
        ))}
        <a
          href="tel:+381641234567"
          className="link -translate-y-96 opacity-0 h-12 w-12 bg-green-600 rounded-full grid lg:hidden place-items-center text-white"
        >
          <PhoneCallIcon />
        </a>
      </div>
    </ul>
  );
};

export default Navbar;
