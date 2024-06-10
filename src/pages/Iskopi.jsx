import React from "react";
import IskopiFirst from "../components/Iskopi/IskopiFirst";
import IskopiSecond from "../components/Iskopi/IskopiSecond";
import Footer from "../components/Footer";

const Iskopi = () => {
  return (
    <div className="overflow-x-hidden">
      <IskopiFirst />
      <IskopiSecond />
      <Footer />
    </div>
  );
};

export default Iskopi;
