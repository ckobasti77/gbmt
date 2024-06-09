import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Iskopi = () => {
  return (
    <div className="min-h-screen w-screen bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover">
      <Navbar />
      <div className="flex px-48">
        <div className="w-1/2 flex flex-col justify-center items-start gap-y-8">
          <h1 className="text-4xl">
            Prvoklasni Iskopi za Sve Vaše Građevinske Potrebe
          </h1>
          <h3 className="text-lg text-blue-600">
            Iskoristite našu naprednu tehnologiju i stručnost za brze i precizne
            iskopne radove. Pružamo pouzdana rešenja koja će osigurati uspeh
            vašeg projekta.
          </h3>
          <Link
            to="/kontakt"
            className="group px-6 py-2 rounded-full bg-blue-600 text-white flex items-center justify-center"
          >
            Kontakt{" "}
            <ChevronRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all text-white" />
          </Link>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end">
          <img src="/./bager.png" alt="bager" />
        </div>
      </div>
    </div>
  );
};

export default Iskopi;
