// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section className="text-white py-16 pt-0 flex">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col">
        <h1 className="font-title text-6xl leading-tight pb-7 bg-clip-text text-transparent bg-gradient-to-r from-[#6D9CF6] to-white pt-10">
          Revolutionize <br /> your DevOps journey <br /> with DevOptima
        </h1>
        <p className="text-gray-400 text-[20px] md:text-l mt-3 mb-3 text-start max-w-3xl">
          Empower teams to innovate faster through streamlined development,
          efficient automated workflows, and reliable scaling.
        </p>
        <div className="mt-4 rounded-full max-h-14 max-w-[450px] overflow-hidden border border-[#3A4C91] transition-transform transform ">
          <form className="bg-gradient-to-r from-[#18264A] to-[#0F1631] flex rounded-full items-center justify-between max-h-[54px] overflow-hidden">
            <input
              type="email"
              placeholder="Your business email..."
              className="outline-none bg-transparent flex-1 text-sm pl-6 py-4 text-white placeholder-gray-500 font-light"
            />
            <button
              type="submit"
              className="flex items-center rounded-full leading-4 text-base font-semibold px-8 h-12 m-1 bg-[#243BB9] hover:bg-[#3F57DA] border border-transparent text-white transition-colors duration-200"
            >
              Free trial
            </button>
          </form>
        </div>
      </div>
      <div className="pt-10 mt-10">
        <img src="/images/hero-illustration.svg" style={{maxWidth: '100%'}}></img>
      </div>
    </section>
  );
};

export default HeroSection;
