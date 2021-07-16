import React from "react";
import about from "../img/about.png";
import about1 from "../img/about1.png";
import Download from "./Download";

function About() {
  return (
    <div className="container mx-auto  xl:px-5 lg:px-5 px-2">
      <div className=" p-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 my-8">
          <div>
            <img src={about} alt="about" />
          </div>
          <div className="lg:pr-10 xl:pr-10 pr-2">
            <h3 className=" text-base uppercase leading-5 tracking-widest text-gray-500">
              About Us{" "}
            </h3>
            <h1 className="xl:text-5xl lg:text-5xl md:text-3xl sm:text-5xl text-2xl tracking-tight font-bold py-5">
              We Do Things Differently{" "}
            </h1>
            <p className="text text-base tracking-wide font-normal py-4">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.
            </p>
            <button className="btn bg-blue-600 uppercase px-8 py-2 my-5 text-white">
              About Us
            </button>
          </div>
        </div>
      </div>

      <div className=" p-8">
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 my-10">
          <div className=" xl:px-10 lg:px-10 px-5">
            <div>
              <h3 className=" text-base uppercase leading-5 tracking-widest text-gray-500">
                Service{" "}
              </h3>
              <h1 className="xl:text-5xl lg:text-5xl md:text-3xl sm:text-5xl text-2xl tracking-tight font-bold py-5">
                Share With Your Friends{" "}
              </h1>
              <p className="text text-base tracking-wide font-normal py-4">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
            </div>

            <div className="py-4">
              <div className="flex gap-3">
                <span className=" w-8 h-8 bg-purple-600 rounded-full p-1">
                  <svg
                    class="w-6 h-6 text-purple-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <p className="text-base font-normal text-gray-400">
                  Email Marketing
                </p>
              </div>
              <div className="flex gap-3 py-2">
                <span className=" w-8 h-8 bg-purple-600 rounded-full p-1">
                  <svg
                    class="w-6 h-6 text-purple-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <p className="text-base font-normal text-gray-400">
                  Email Marketing
                </p>
              </div>
              <div className="flex gap-3">
                <span className=" w-8 h-8 bg-purple-600 rounded-full p-1">
                  <svg
                    class="w-6 h-6 text-purple-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <p className="text-base font-normal text-gray-400">
                  Email Marketing
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={about1} alt="about" />
          </div>
        </div>
      </div>

      <div>
        <Download />
      </div>
    </div>
  );
}
export default About;
