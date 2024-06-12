import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`w-screen overflow-hidden absolute bottom-0 left-0 right-0 flex justify-center py-4 border-t-4 border-blue-500 text-xs lg:text-xl text-nowrap bg-no-repeat bg-transparent bg-cover text-white`}
    >
      Copyright © {currentYear}
      <span className="text-gradient ml-1 font-bold">
        Global Beo Mobil Trend
      </span>
      . All rights reserved.
    </div>
  );
};

export default Footer;
