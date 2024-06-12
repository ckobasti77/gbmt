import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, text, className }) => {
  return (
    <Link
      to={to}
      className={`group opacity-0 translate-y-32 px-6 py-2 -skew-x-[15deg] border-blue-500 border-2 rounded-tl-xl rounded-br-xl hover:rounded-tl-none hover:rounded-tr-xl hover:rounded-br-none hover:rounded-bl-xl transition-all capitalize backdrop-blur-2xl text-white flex items-center justify-center ${className}`}
    >
      {text}{" "}
      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all text-white" />
      <ChevronRight className="w-4 h-4 -ml-4 group-hover:translate-x-2.5 transition-all text-white" />
    </Link>
  );
};

export default Button;
