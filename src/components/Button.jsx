import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, text, className }) => {
  return (
    <Link
      style={{ transition: "border-radius .3s ease-in-out" }}
      to={to}
      className={`group opacity-0 translate-y-32 px-6 py-2 -skew-x-[15deg] border-blue-500 border-t-2 border-l-2 rounded-tl-xl rounded-br-xl hover:rounded-tl-none hover:rounded-tr-xl hover:rounded-br-none hover:rounded-bl-xl capitalize backdrop-blur-2xl text-white flex items-center justify-center font-bold ${className}`}
    >
      <span className="group-hover:skew-x-[15deg] skew-x-[15deg] flex">
        {text}{" "}
        <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-all text-white" />
        <ChevronRight className="w-6 h-6 -ml-4 group-hover:translate-x-2 transition-all text-white" />
      </span>
    </Link>
  );
};

export default Button;
