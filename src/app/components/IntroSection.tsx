import React from "react";

const IntroSection = () => {
  return (
    <section className="text-white py-16 pt-0 flex">
      <div className="flex">
        <div
          className="pt-10 mt-10"
          style={{ marginLeft: "-250px", width: "140%" }}
        >
          <img src="/images/intro-image.svg"></img>
        </div>
        <div className="flex flex-col pr-6">
          <div className="py-20 pb-0 mt-10 p-10 ml-5">
            <h2 className="font-title text-[40px] leading-[112.5%] pb-7 text-white tracking-tight">
              What is DevOptima?
            </h2>
            <p className="text-gray-400 text-[20px] font-light pt-0 pb-9">
              At DevOptima, we are a team of passionate DevOps experts committed
              to transforming the way businesses approach software development
              and operations.
            </p>
          </div>
          <div className="flex">
            <div className="ml-8">
              <div className="">
                <img src="/images/devops.svg"></img>
              </div>
              <div className="ml-8" style={{ marginTop: "-20px" }}>
                <h3>DevOps transformation</h3>
              </div>
              <p className="text-gray-400 text-[16px] font-light ml-8">
                {" "}
                Reshaping businesses with DevOps expertise.
              </p>
            </div>
            <div className="ml-8">
              <div className="">
                <img src="/images/devops.svg"></img>
              </div>
              <div className="ml-8" style={{ marginTop: "-20px" }}>
                <h3>DevOps transformation</h3>
              </div>
              <p className="text-gray-400 text-[16px] font-light ml-8">
                {" "}
                Reshaping businesses with DevOps expertise.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-8">
              <div className="">
                <img src="/images/devops.svg"></img>
              </div>
              <div className="ml-8" style={{ marginTop: "-20px" }}>
                <h3>DevOps transformation</h3>
              </div>
              <p className="text-gray-400 text-[16px] font-light ml-8">
                {" "}
                Reshaping businesses with DevOps expertise.
              </p>
            </div>
            <div className="ml-8">
              <div className="">
                <img src="/images/devops.svg"></img>
              </div>
              <div className="ml-8" style={{ marginTop: "-20px" }}>
                <h3>DevOps transformation</h3>
              </div>
              <p className="text-gray-400 text-[16px] font-light ml-8">
                {" "}
                Reshaping businesses with DevOps expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
