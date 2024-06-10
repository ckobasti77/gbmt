import React from "react";
import { Mail, PhoneCallIcon } from "lucide-react";
import Navbar from "../components/Navbar";

const Kontakt = () => {
  return (
    <div className="min-h-screen w-screen bg-[url(/./mobile-bg-2.png)] lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover">
      <Navbar />
      <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row items-center gap-x-8 px-6 lg:px-48 mt-24">
        <form action="" className="flex flex-col gap-y-8 w-full lg:w-1/2">
          <div className="flex flex-col">
            <label htmlFor="name">Ime:</label>
            <input type="text" name="name" id="name" className="rounded-2xl py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" className="rounded-2xl py-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="poruka">Poruka:</label>
            <textarea type="text" name="poruka" id="poruka" className="rounded-2xl" rows={5} />
          </div>
          <button type="submit" className="px-6 py-2 rounded-full bg-blue-600 text-white ">Pošalji</button>
        </form>
        {/* <div className="w-full lg:w-1/2 pl-0 lg:pl-4 flex items-center flex-col">
          <div className="flex items-center gap-x-4">
            <span className="text-2xl font-bold">+381 64 123 45 67</span>
            <a href="tel:+381641234567" className="h-12 w-12 bg-green-600 rounded-full grid place-items-center text-white">
              <PhoneCallIcon />
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-2xl font-bold">johndoe@gmail.com</span>
            <a href="email:johndoe@gmail.com" className="h-12 w-12 bg-green-600 rounded-full grid place-items-center text-white">
              <Mail />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Kontakt;
