import React from "react";
import banner from "../img/banner.png";
import banner1 from "../img/banner1.png";

function Home() {
  return (
    <div className="container mx-auto">
      <div
        className="xl:rounded-2xl lg:rounded-2xl md:rounded-2xl rounded-none w-full"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat", backgroundSize:"cover",backgroundPosition:"center"
        }}
      >
        <div className="grid grid-cols md:grid-cols-2 xl:px-2 lg:px-2 md:px-1 sm:px-20 px-10 items-center">
          <div className="xl:px-28 lg:px-16 md:px-16 sm:px-16 px-10 xl:py-32 lg:py-32 md:py-32 sm:py-10 py-10">
            <h3 className=" text-base uppercase leading-5 tracking-widest text-gray-500">
              Best Application
            </h3>
            <h1 className="xl:text-5xl lg:text-5xl md:text-3xl sm:text-5xl text-2xl text-white tracking-wider font-bold py-5">
              Make It Easy With Our App
            </h1>
            <p className="text-white text-base tracking-wide font-normal py-2">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.
            </p>
            <button className="btn bg-yellow-500 uppercase px-8 py-2 my-5 text-white">
              Explore
            </button>
          </div>
          <div className="xl:mt-16 lg:mt-16 md:mt-16 sm:mt-1 xl:h-full pl-5">
            <div className="">
              <img
                src={banner1}
                alt="banner"
                className="h-96 sm:h-[550px] lg:h-full xl:h-full md:h-full text-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>


    </div>
  );
}
export default Home;
