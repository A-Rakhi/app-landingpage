import React from "react";
import pattern from "../img/pattern.png";
import MoreFeatures from "./MoreFeatures";

function Download() {
  return (
    <div>
      <div className="container mx-auto my-10  ">
        <div
          className="xl:rounded-2xl lg:rounded-2xl md:rounded-2xl rounded-none w-full"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "no-repeat", backgroundSize:"cover"
          }}
        >
          <div className="py-20 text-center">
            <div className="px-10">
              <h3 className=" text-base uppercase leading-5 tracking-widest text-gray-500">
                Download Now{" "}
              </h3>
              <h1 className="xl:px-44 lg:px-44 md:px-20 sm:px-16 px-5 xl:text-5xl lg:text-5xl md:text-3xl sm:text-5xl text-2xl text-white tracking-wide font-bold py-5">
                Download Our App Right Now{" "}
              </h1>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <button className="btn border border:bg-blue-300 uppercase px-8 py-2 my-5 text-white">
                Explore
              </button>
              <button className="btn bg-yellow-500 uppercase px-8 py-2 my-5 text-white">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <MoreFeatures />
      </div>
    </div>
  );
}

export default Download;
