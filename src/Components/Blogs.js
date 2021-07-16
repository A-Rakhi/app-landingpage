import React from "react";
import Footer from "./Footer";
import B1 from "../img/B1.png";
import B2 from "../img/B2.png";
import blog1 from "../img/blog1.png";
import blog2 from "../img/blog2.png";
import blog3 from "../img/blog3.png";
import blog4 from "../img/blog4.png";
import blog5 from "../img/blog5.png";

function Blogs() {
  return (

    <div>
    <div className="container mx-auto  xl:px-5 lg:px-5 px-2">
      <div>
        <div className="text-center py-16">
          <h3 className="text-base uppercase leading-5 tracking-wider text-gray-400">
            Our Blogs
          </h3>
          <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl text-black tracking-wider font-bold py-5">
            Latest Blogs & News{" "}
          </h1>
        </div>

        <div>
          <div class="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 my-5">
            <div className=" ">
              <div
                className=" py-32"
                style={{
                  backgroundImage: `url(${B1})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative px-8 top-28">
                  <p
                    className="  text-lg text-white
         order-first py-3"
                  >
                    {" "}
                    12 Jun 2020
                  </p>
                  <h3 className="font-semibold text-xl md:text-lg text-white w-80">
                    Far far away, behind the word mountains
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div
                className="py-32 "
                style={{
                  backgroundImage: `url(${B2})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="relative lg:px-8 md:px-5 xl:px-8 sm:px-8 px-5 top-28">
                  <p
                    className="  text-lg text-white
         order-first py-3"
                  >
                    {" "}
                    12 Jun 2020
                  </p>
                  <h3 className="font-semibold xl:text-xl lg:text-xl sm:text-xl text-lg md:text-lg text-white md:w-80 xl:w-96 lg:w-96 sm:w-96 w-80">
                    A small river named Duden flows by their place and supplies
                  </h3>
                </div>
              </div>
            </div>

            </div>
        </div>
      </div>

      <div
        className="py-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
    xl:grid-cols-2 items-center justify-between px-2"
      >
        <div className="px-5">
          <h3 className="text-2xl font-bold">NewsLetter</h3>
          <p className="text-base py-3 text-gray-400">
            Slapped cozy a that lightheartedly and far
          </p>
        </div>

        <div className="py-2 flex flex-col lg:flex-row xl:flex-row md:flex-row lg:items-center xl:items-center 
              md:items-center justify-center items-start space-x-4">
          <form className="py-5 pl-4">
            <input
              className="border border-gray-200 p-2 w-64 sm:w-96 lg:w-72 xl:w-72 md:w-48"
              placeholder="Email"
            />
          </form>
          <div className="">
            <button className="bg-blue-600 py-2 xl:px-10 lg:px-8 md:px-5 sm:px-40 px-20 text-white rounded-md">
              Subscribe{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="px-2 pb-16 flex flex-col xl:flex-row lg:flex-row md:flex-row justify-center 
      xl:space-x-24 lg:space-x-16 md:space-x-10  space-x-0 items-center">
        <div className="flex justify-between xl:space-x-24 lg:space-x-16 md:space-x-5 sm:space-x-20 space-x-8">
        <img src={blog1} alt="blog1" className="order-first"/>
            <img src={blog2} alt="blog1" className=""/>
            
        </div>
        <div className="flex justify-between xl:space-x-24 lg:space-x-16
         md:space-x-5  space-x-8 sm:space-x-20 py-10 xl:py-0 lg:py-0 md:py-0">
        <img src={blog3} alt="blog1" className=""/>
            <img src={blog4} alt="blog1" className=""/>

        </div>
        <div className="">
        <img src={blog5} alt="blog1" className="order-last"/></div>

            </div>
            </div>
       
       <Footer/>
    </div>
  );
}
export default Blogs;
