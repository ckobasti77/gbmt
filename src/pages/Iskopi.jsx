import React from "react";
import IskopiFirst from "../components/Iskopi/IskopiFirst";
import IskopiSecond from "../components/Iskopi/IskopiSecond";
import IskopiThird from "../components/Iskopi/IskopiThird";
import { Helmet } from "react-helmet";

const Iskopi = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Profesionalni Iskopni Radovi za Svaki Projekat - Global Beo Mobil
          Trend
        </title>
        <meta
          name="description"
          content="Pružamo precizne, efikasne i bezbedne iskopne radove za sve vaše građevinske projekte. Oslonite se na našu stručnost i modernu opremu za vrhunske rezultate."
        />
        <link rel="canonical" href="https://gbmt.rs/iskopi" />
      </Helmet>
      <div className="overflow-x-hidden">
        <IskopiFirst />
        <IskopiSecond />
        <IskopiThird />
      </div>
    </>
  );
};

export default Iskopi;
