import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="text-white py-16 pt-12">
      <div className="relative mt-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg.svg')",
            backgroundSize: "140%",
          }}
        ></div>

        {/* Content */}
        <div className="relative flex text-white pb-20" style={{paddingTop: '100px'}}>
          <div className="mr-20">
            <img
              src="/images/testimonial-icon1.svg"
              alt="Logo"
              className="w-32 mb-4 ml-16 pl-2 pt-3"
            />
            <p className="text-lg max-w-xl ml-14 pl-14" style={{marginTop:'-30px'}}>
            Thanks to DevOptima, our team can focus more on
              <strong>innovation</strong> and less on operational challenges. Their <strong>cloud
              management solutions</strong> are top-notch.
            </p>
            <div className="flex mt-6 mb-20 ml-14 pl-6">
              <img className="pl-8" src="/images/avatar1.svg"></img>
              <div className="ml-4">
                <p>John Smith</p>
                <p className="text-gray-400">IT Director at Reflex</p>
              </div>
            </div>
          </div>
          <div className="mr-20 ml-14 pr-6 ">
            <img
              src="/images/testimonial-icon2.svg"
              style={{ marginLeft: "-35px" }}
              alt="Logo"
              className="w-32 mb-4"
            />
            <p className="text-lg max-w-xl ml-2" style={{ marginTop: "-30px" }}>
            DevOptima has been a game-changer for us. With their support, we have shifted our focus <strong>from operational hurdles to pushing boundaries in innovation.</strong>
            </p>
            <div className="flex mt-6 ml-2 mb-20">
              <img src="/images/avatar2.svg"></img>
              <div className="ml-4">
                <p>Jane Doe</p>
                <p className="text-gray-400">Tech Lead at Dribble</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
