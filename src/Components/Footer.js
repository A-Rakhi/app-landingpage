import React from "react";
import pattern from "../img/pattern.png";
import social from '../img/social (1).png'

function Footer() {
  return (
    <div className="container mx-auto px-2">
      <div className="my-16 container mx-auto">
        <div
          className="xl:rounded-2xl lg:rounded-2xl md:rounded-2xl rounded-none w-full"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "no-repeat", backgroundSize:"cover",
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

      <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1
                  py-5 px-2">

                    <div  className="px-8 text-4xl pb-16 pt-5 md:pb-1 font-serif ">
                        <h1 className="" >APP</h1>
                    </div>

                    <div className="md:pl-20 pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
                            <div className="md:p-2  text-gray-800 text-xl pb-8">Menu</div>
                            <div className="md:p-2 text-gray-500 py-1">About</div>
                            <div className="md:p-2  text-gray-500 py-1">Menu</div>
                            <div className="md:p-2  text-gray-500 py-1">BLog</div>
                            <div className="md:p-2  text-gray-500 py-1">Contact</div>
                        </div>
                    </div>
                    <div className="md:pl-20 pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
                            <div className="md:p-2  text-gray-800 text-xl pb-8">Service</div>
                            <div className="md:p-2 py-1 text-gray-500">About</div>
                            <div className="md:p-2 py-1 text-gray-500">Menu</div>
                            <div className="md:p-2 py-1 text-gray-500">BLog</div>
                            <div className="md:p-2 py-1 text-gray-500">Download</div>
                        </div>
                    </div>
                    <div className=" pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5">
                            <div className=" text-xl">Social</div>
                            <div className="py-5">
                                <img src={social} alt="social-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="" style={{ border: '0.5px solid black' }} />

                <footer className=" flex md:flex-row flex-col md:py-10 lg:py-10 py-8">

                    <div className="flex-1 bd-highlight px-10">
                        <div className="leading-loose flex-grow-1 bd-highlight text-gray-600">
                            Copyright © 2020. All Rights Reserved.
                        </div>
                    </div>

                    <div className="flex flex-row md:flex-row md:px-24 px-8 py-5 md:py-0 justify-between">
                        <p className=" text-gray-500 tracking-tighter" >Terms of Use</p>
                        <p className=" text-gray-500  md:pl-10 pl-32 tracking-tighter">Privacy Policy</p>
                    </div>
                </footer>

            </div>
      </div>

  );
}

export default Footer;
