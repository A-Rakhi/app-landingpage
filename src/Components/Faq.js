import React from "react";
import q from "../img/q.png";
import Testimonial from "./Testimonial";

function Faq() {
  return (
    <div>
      <div className="container mx-auto  xl:px-5 lg:px-5 px-2 py-16">
        <div className="bg-red-200 rounded-lg  py-12 px-2">
          <div className="text-center">
            <h3 className="text-base uppercase leading-5 tracking-wider text-gray-400">
              F.A.Q
            </h3>
            <h1 className="text-5xl  text-black tracking-tight font-bold py-5">
              Frequently Asked Questions{" "}
            </h1>
          </div>

          <div className="py-5 ">
            <div className="flex items-center justify-center xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6 gap-2">
              <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg  ">
                <img src={q} alt="q" />
              </div>

              <div className="w-72 sm:w-96 md:w-96 lg:w-96 xl:w-96">
                <h2 className="font-bold text-lg xl:text-xl lg:text-xl md:text-xl sm:text-xl  tracking-wide py-2">
                  Which license do I need?
                </h2>
                <p className="">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 ">
            <div className="flex items-center justify-center xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6 gap-2">
              <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg  ">
                <img src={q} alt="q" />
              </div>

              <div className="w-72 sm:w-96 md:w-96 lg:w-96 xl:w-96">
                <h2 className="font-bold  text-lg xl:text-xl lg:text-xl md:text-xl sm:text-xl  tracking-wide py-2">
                  Which license do I need?
                </h2>
                <p className="">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
          <div className="py-5 ">
            <div className="flex items-center justify-center  xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6 gap-2">
              <div className="w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg  ">
                <img src={q} alt="q" />
              </div>

              <div className="w-72 sm:w-96 md:w-96 lg:w-96 xl:w-96">
                <h2 className="font-bold  text-lg xl:text-xl lg:text-xl md:text-xl sm:text-xl  tracking-wide py-2">
                  Which license do I need?
                </h2>
                <p className="">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
}

export default Faq;
