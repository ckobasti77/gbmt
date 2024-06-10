import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/constants";
import { Menu, PhoneCallIcon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [showMobileNav, setShowMobileNav] = useState(false)

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
    <ul className={`w-full py-6 px-6 lg:px-48 flex items-center justify-between text-lg z-[999999]`}>
      <Link to='/' className="link text-5xl -translate-y-96 opacity-0 cursor-pointer font-bold tracking-widest text-blue-800">
        GBMT
      </Link>
      <Menu className="w-10 h-10 block lg:hidden" onClick={() => setShowMobileNav(!showMobileNav)} />
      <div className={`border-b-4 border-blue-600 lg:border-none py-8 lg:py-0 z-[9999999] rounded-b-xl lg:rounded-b-none ${currentPath === '/kontakt' || currentPath === '/video-nadzor' ? 'bg-[url(/./mobile-bg-2.png)]' : 'bg-[url(/./mobile-bg.png)]'} lg:bg-none flex flex-col lg:flex-row items-center gap-x-8 fixed lg:static ${showMobileNav ? 'top-20' : '-top-96'} transition-all left-0 right-0 gap-y-8`}>
        {navLinks.map((link) => (
          <Link onClick={() => setShowMobileNav(false)} key={link.id} to={link.to} className={`link z-50 -translate-y-96 opacity-0 cursor-pointer ${currentPath === link.to ? 'text-blue-600' : ''}`}>{link.text}</Link>
        ))}
        <a href="tel:+381641234567" className="link -translate-y-96 opacity-0 h-12 w-12 bg-green-600 rounded-full grid place-items-center text-white">
          <PhoneCallIcon />
        </a>
      </div>
    </ul>
  );
};

export default Navbar;
