import React from "react";

const ActionCallSection = () => {
  return (
    <section className="pt-20 py-20 text-center">
      <div className="container mx-auto">
      <h2 className="font-title text-4xl leading-tight pb-7 bg-clip-text text-transparent bg-gradient-to-r from-[#6D9CF6] to-white pt-10">
          Ready to elevate your DevOps strategy?
        </h2>
        <div className="text-gray-400 text-lg leading-relaxed font-light tracking-tight pt-0 pb-9">
          <p>
            Join the multitude of companies benefiting from optimized DevOps
            practices.
          </p>
          <p>Contact us to discover how DevOptima can help your business.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center rounded-full leading-4 text-base font-semibold px-9 h-12 bg-[#243BB9] hover:bg-[#3F57DA] border border-transparent text-white">
            Contact us
          </button>
          <button className="flex items-center rounded-full leading-4 text-base font-semibold px-9 h-12 bg-[#243BB933] border border-[#243BB9] text-white hover:bg-[#243BB980] hover:border-[#3F57DA]" >
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionCallSection;
