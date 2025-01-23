import React from "react";

const InnovationSection = () => {
  return (
    <section className="text-white py-16 pt-8">
      <div className="container mx-auto text-center max-w-section flex flex-col justify-center">
        <div className="flex flex-col align-center ">
          <h2 className="font-title text-[40px]">Innovative solutions</h2>
          <h2 className="font-title text-[40px]">for operational excellence</h2>
        </div>
        <div className="text-gray-400 text-[20px] font-light">
          <p>
            Tailored DevOps expertise driving your business momentum.
          </p>
          <p>Personalized solutions for growth and evolution.</p>
        </div>
      </div>
      <div>
        <div className="flex mt-8">
          <img width={400} src="/images/innovation-image3.svg"></img>
          <img width={400} src="/images/innovation-image2.svg"></img>
          <img width={400} src="/images/innovation-image.svg"></img>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
