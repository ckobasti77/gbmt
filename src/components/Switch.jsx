import React from "react";
import { useLocation, Link } from "react-router-dom";
import { SwitchCamera } from 'lucide-react'

const Switch = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkPath = () => {
    if (currentPath === "/drugi") {
      return "/";
    } else if (currentPath === "/") {
      return "/drugi";
    } else {
      return "/"; // Default to home or another path if needed
    }
  };
  return (
    <Link
      to={getLinkPath()}
      className="absolute flex items-center justify-center bottom-5 right-5 rounded-full w-12 h-12 bg-blue-600"
    >
      <SwitchCamera className="w-4 h-4" />
    </Link>
  );
};

export default Switch;
