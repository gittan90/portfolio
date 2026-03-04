import { useState } from "react";
import heroImg from "../assets/UPDATE AD PORTFOLIO.jpg";

export default function Hero() {
  const [active, setActive] = useState("work");

  return (
    <header className="pt-14 md:pt-18">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-[0.28em] text-gray-500">
            Portfolio
          </p>

          <nav className="hidden md:flex items-center gap-7 text-sm text-gray-700">
            <a href="#about" className="hover:underline underline-offset-4">
              about
            </a>
            <a href="#work" className="hover:underline underline-offset-4">
              work
            </a>
            <a href="#contact" className="hover:underline underline-offset-4">
              contact
            </a>
          </nav>
        </div>

        <div className="mt-6 border-t border-gray-200" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6">
            <h1 className="text-[44px] leading-[1.0] md:text-[70px] tracking-[-0.035em] text-gray-900">
              <span className="font-semibold">ANNA</span>{" "}
              <span className="font-light">DÖHMERS</span>
            </h1>

            <p className="mt-6 max-w-md text-[16px] leading-[2.0] text-gray-700">
              UX & UI designer with a frontend background — creating digital
              experiences that are intuitive, strategic, and built to drive real
              business value.
            </p>

            <div className="mt-10">
              <div
                className="inline-flex gap-2"
                onMouseLeave={() => setActive("work")}
              >
                <a
                  href="#work"
                  onMouseEnter={() => setActive("work")}
                  className={[
                    "inline-flex items-center justify-center px-5 py-2.5 text-sm border transition-colors",
                    active === "work"
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
                  ].join(" ")}
                >
                  View selected work
                </a>

                <a
                  href="#contact"
                  onMouseEnter={() => setActive("contact")}
                  className={[
                    "inline-flex items-center justify-center px-5 py-2.5 text-sm border transition-colors",
                    active === "contact"
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
                  ].join(" ")}
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-6"></div>

            <nav className="mt-8 flex md:hidden items-center gap-6 text-sm text-gray-700">
              <a href="#about" className="hover:underline underline-offset-4">
                About
              </a>
              <a href="#work" className="hover:underline underline-offset-4">
                Work
              </a>
              <a href="#contact" className="hover:underline underline-offset-4">
                Contact
              </a>
            </nav>
          </div>

          <div className="md:col-span-6">
            <div className="border border-gray-200 bg-white">
              <img
                src={heroImg}
                alt="Portrait"
                className="
                  h-[360px] w-full md:h-[520px]
                  object-cover object-[50%_35%]
                  transition-all duration-300 ease-out
                  hover:grayscale hover:contrast-125 hover:brightness-90
                "
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
