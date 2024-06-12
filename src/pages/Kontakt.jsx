import React, { useEffect, useRef, useState } from "react";
import { Mail, PhoneCallIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jovan",
          from_email: form.name,
          to_email: "jovanm028@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          show: true,
          text: "I didnt receive your message",
          type: "danger",
        });
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
    <div className="min-h-screen overflow-y-hidden w-screen bg-[url(/./new-bg.jpg)] bg-no-repeat bg-left lg:bg-top bg-cover text-white">
      <div className="overlay py-20 min-h-screen flex flex-col justify-center">
        <h1 className="kontakt-stagger text-2xl lg:text-5xl text-center font-semibold mt-4 text-gradient">
          Zakažite Konsultacije
        </h1>
        <div className="w-full h-full flex flex-col items-center justify-center lg:flex-row gap-x-8 px-6 lg:px-48 mt-12">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-y-8 w-full lg:w-1/2"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-bold kontakt-stagger opacity-0 translate-y-32"
              >
                Vaše Ime:
              </label>
              <input
                required
                value={form.name}
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                style={{
                  transition: "border-radius transform .3s ease-in-out",
                }}
                className="focus:-skew-x-0 backdrop-blur-2xl bg-transparent px-4 border-blue-500 border-t-2 border-l-2 rounded-tl-xl rounded-br-xl focus:rounded-tl-none focus:rounded-tr-xl focus:rounded-br-none focus:rounded-bl-xl focus:outline-none kontakt-stagger opacity-0 translate-y-32 rounded-2xl py-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-bold kontakt-stagger opacity-0 translate-y-32"
              >
                Vaš Email:
              </label>
              <input
                required
                value={form.email}
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                style={{
                  transition: "border-radius transform .3s ease-in-out",
                }}
                className="focus:-skew-x-0 backdrop-blur-2xl bg-transparent px-4 border-blue-500 border-t-2 border-l-2 rounded-tl-xl rounded-br-xl focus:rounded-tl-none focus:rounded-tr-xl focus:rounded-br-none focus:rounded-bl-xl focus:outline-none kontakt-stagger opacity-0 translate-y-32 rounded-2xl py-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="font-bold flex items-center kontakt-stagger opacity-0 translate-y-32"
              >
                Poruka (ili nas odmah pozovite{" "}
                <a
                  href="tel:+381641234567"
                  className="h-12 w-12 mx-1 bg-green-600 rounded-full inline-grid place-items-center text-white"
                >
                  <PhoneCallIcon />
                </a>
                ) :
              </label>
              <textarea
                required
                value={form.message}
                onChange={handleChange}
                type="text"
                name="message"
                id="poruka"
                style={{ transition: "border-radius .3s ease-in-out" }}
                className="focus:-skew-x-0 backdrop-blur-2xl bg-transparent px-4 border-blue-500 border-t-2 border-l-2 rounded-tl-xl rounded-br-xl focus:rounded-tl-none focus:rounded-tr-xl focus:rounded-br-none focus:rounded-bl-xl focus:outline-none kontakt-stagger opacity-0 translate-y-32 rounded-2xl"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="kontakt-stagger opacity-0 translate-y-32 px-6 py-2 rounded-full bg-blue-600 text-white overflow-hidden relatve"
            >
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
