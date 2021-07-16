import React from "react";
import star from "../img/stars.png";
import t1 from "../img/t1.png";
import t2 from "../img/t2.png";
import t3 from "../img/t3.png";
import Price from "./Price";

function Testimonial() {
  return (
    <div>
      <div className="container mx-auto xl:px-5 lg:px-5 px-2 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4 px-2">
          <div className=" p-10">
            <div className=" py-5">
              <h4 className="py-5 text-xl tracking-widest uppercase text-gray-400">
                Testimonial
              </h4>
              <h1 className="text-4xl font-bold w-64">
                Customers Love Our App
              </h1>
              <p className="py-5 text-gray-500">
                It is a paradisematic country, in which roasted parts of
                sentences fly into your mouth.
              </p>
            </div>

            <div className="flex space-x-3 items-center">
              <p>4.7</p>
              <span>
                <img src={star} alt="img" />
              </span>
            </div>
          </div>

          <div>
            <div className="grid grid-flow-row py-5 px-2">
              <div className=" w-full lg:max-w-full lg:flex rounded overflow-hidden shadow-lg">
                <div className="flex-none bg-cover">
                  <img
                    className=" rounded-full m-5  no-repeat w-20 h-20"
                    src={t1}
                    alt="Avatar of Writer"
                  />
                </div>
                <div className=" bg-white p-2 flex flex-col justify-between leading-normal">
                  <div className="my-3 px-1">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      Alexander Ljung
                    </div>
                    <p className="text-gray-700 text-base">
                      "Nothing the copy said could convince her and so it didn’t
                      take long until a few insidious"
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="grid grid-flow-row py-5 px-2">
              <div className=" w-full lg:max-w-full lg:flex rounded overflow-hidden shadow-lg">
                <div className="flex-none bg-cover">
                  <img
                    className=" rounded-full m-5  no-repeat w-20 h-20"
                    src={t2}
                    alt="Avatar of Writer"
                  />
                </div>
                <div className=" bg-white p-2 flex flex-col justify-between leading-normal">
                  <div className="my-3 px-1">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      Alexander Ljung
                    </div>
                    <p className="text-gray-700 text-base">
                      "Nothing the copy said could convince her and so it didn’t
                      take long until a few insidious"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-flow-row py-5 px-2">
              <div className=" w-full lg:max-w-full lg:flex rounded overflow-hidden shadow-lg">
                <div className="flex-none bg-cover">
                  <img
                    className=" rounded-full m-5  no-repeat w-20 h-20"
                    src={t3}
                    alt="Avatar of Writer"
                  />
                </div>
                <div className=" bg-white p-2 flex flex-col justify-between leading-normal">
                  <div className="my-3 px-1">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      Alexander Ljung
                    </div>
                    <p className="text-gray-700 text-base">
                      "Nothing the copy said could convince her and so it didn’t
                      take long until a few insidious"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <Price />
    </div>
  );
}
export default Testimonial;
