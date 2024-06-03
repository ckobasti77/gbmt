import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/constants";

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
    <ul className={`w-full py-6 px-48 flex items-center justify-between text-lg sticky top-0`}>
      <Link to='/' className="link text-5xl -translate-y-96 opacity-0 cursor-pointer font-bold tracking-widest text-blue-800">
        GBMT
      </Link>
      <div className="flex items-center gap-x-8">
      {navLinks.map((link) => (
          <Link key={link.id} to={link.to} className={`link -translate-y-96 opacity-0 cursor-pointer ${currentPath === link.to ? 'text-blue-600' : ''}`}>{link.text}</Link>
        ))}
      </div>
    </ul>
  );
};

export default Navbar;
