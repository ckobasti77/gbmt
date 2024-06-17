import React, { useRef, useState } from "react";
import { PhoneCallIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const Kontakt = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jovan",
          from_email: form.name,
          to_email: "office@gbmt.rs",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        toast.success("Poruka uspešno poslata")

        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Poruka nije poslata. Pokušajte ponovo.")
      });
  };

  useGSAP(() => {
    gsap.to(".kontakt-stagger", {
      opacity: 1,
      y: 0,
      stagger: 0.15,
    });
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kontaktirajte nas za Video Nadzor i Iskopne Radove - Global Beo Mobil
          Trend
        </title>
        <meta
          name="description"
          content="Obratite nam se za sve informacije i besplatne konsultacije. Naš tim je spreman da vam pomogne sa vašim potrebama za video nadzor i iskopne radove."
        />
        <link rel="canonical" href="https://gbmt.rs/kontakt" />
      </Helmet>
      <div
        style={{ backgroundPosition: window.innerWidth < 1024 && "22.5% 50%" }}
        className="min-h-screen overflow-y-hidden w-screen bg-[url(/./new-bg.avif)] bg-no-repeat bg-left lg:bg-top bg-cover text-white"
      >
        <div className="overlay py-16 min-h-screen flex flex-col justify-center">
          <h1 className="kontakt-stagger text-2xl lg:text-5xl text-center font-semibold mt-4 text-gradient">
            Zakažite Konsultacije
          </h1>
          <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row gap-x-8 px-6 lg:px-48 mt-12">
            <form
              // onSubmit={handleSubmit}
              action="https://formsubmit.co/office@gbmt.rs"
              method="POST"
              className="flex flex-col gap-y-8 w-full lg:w-1/2"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="Ime"
                  className="font-bold kontakt-stagger opacity-0 translate-y-32"
                >
                  Vaše Ime:
                </label>
                <input
                  required
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  name="Ime"
                  id="Ime"
                  style={{
                    transition: "border-radius transform .3s ease-in-out",
                  }}
                  className="focus:-skew-x-0 backdrop-blur-2xl bg-transparent px-4 border-[#1E3E81] border-t-2 border-l-2 rounded-tl-xl rounded-br-xl focus:rounded-tl-none focus:rounded-tr-xl focus:rounded-br-none focus:rounded-bl-xl focus:outline-none kontakt-stagger opacity-0 translate-y-32 rounded-2xl py-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Email:"
                  className="font-bold kontakt-stagger opacity-0 translate-y-32"
                >
                  Vaš Email:
                </label>
                <input
                  required
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  name="Email:"
                  id="Email:"
                  style={{
                    transition: "border-radius transform .3s ease-in-out",
                  }}
                  className="focus:-skew-x-0 backdrop-blur-2xl bg-transparent px-4 border-[#1E3E81] border-t-2 border-l-2 rounded-tl-xl rounded-br-xl focus:rounded-tl-none focus:rounded-tr-xl focus:rounded-br-none focus:rounded-bl-xl focus:outline-none kontakt-stagger opacity-0 translate-y-32 rounded-2xl py-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Poruka"
                  className="mb-1 font-bold flex items-center kontakt-stagger opacity-0 translate-y-32"
                >
                  Poruka (ili nas odmah pozovite{" "}
                  <a
                    href="tel:+381641234567"
                    className="h-8 w-8 mx-1 bg-green-600 rounded-full inline-grid place-items-center text-white"
                  >
                    <PhoneCallIcon className="w-4 h-4" />
                  </a>
                  ) :
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={handleChange}
                  type="text"
                  name="Poruka"
                  id="Poruka"
                  style={{ transition: "border-radius .3s ease-in-out" }}
                  className="focus:-skew-x-0 backdrop-blur-2xl bg-transparent px-4 border-[#1E3E81] border-t-2 border-l-2 rounded-tl-xl rounded-br-xl focus:rounded-tl-none focus:rounded-tr-xl focus:rounded-br-none focus:rounded-bl-xl focus:outline-none kontakt-stagger opacity-0 translate-y-32 rounded-2xl"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="kontakt-stagger opacity-0 translate-y-32 px-6 py-2 rounded-full bg-[#1E3E81] text-white overflow-hidden relatve"
              >
                Pošalji
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
