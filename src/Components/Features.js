import React from "react";
import About from "./About";

function Features() {
  return (

    <div className="container mx-auto xl:px-5 lg:px-5 px-2 py-5">
    <div className="container mx-auto px-2">
      <div className=" py-16">
        <div className="text-center">
          <h3 className="text-base uppercase leading-5 tracking-wider text-gray-400">
            Our Features
          </h3>
          <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl text-black tracking-tight font-bold py-5">
            Great Features Of Our App
          </h1>
        </div>

        <div>
          <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-16">
            {/* <!--Card 1--> */}
            <div className="rounded overflow-hidden shadow-lg">
              <div className="pl-5 pt-8">
                <div className=" bg-yellow-100 rounded-full w-16 h-16 p-4 ">
                  <svg
                    class="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                </div>
              </div>
              <div className="px-6 py-4">
                <h3 className="font-normal font-display text-2xl py-2">
                  Responsive
                </h3>
                <p className="text-gray-500 text-base py-2 font-normal font-body">
                  Nothing the copy said could convince her and so it didn’t take
                  long.{" "}
                </p>
              </div>
            </div>
            {/* <!--Card 2--> */}
            <div className="rounded overflow-hidden shadow-lg">
              <div className="pl-5 pt-8">
                <div className=" bg-purple-200 rounded-full w-16 h-16 p-4 ">
                  <svg
                    class="w-8 h-8 text-purple-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="px-6 py-4">
                <h3 className="font-normal font-display text-2xl py-2">
                  Responsive
                </h3>
                <p className="text-gray-500 text-base py-2 font-normal font-body">
                  Nothing the copy said could convince her and so it didn’t take
                  long.{" "}
                </p>
              </div>
            </div>

            {/* <!--Card 3--> */}
            <div className="rounded overflow-hidden shadow-lg">
              <div className="pl-5 pt-8">
                <div className=" bg-red-100 rounded-full w-16 h-16 p-4 ">
                  <svg
                    class="w-8 h-8 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {/* <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                </div>
              </div>
              <div className="px-6 py-4">
                <h3 className="font-normal font-display text-2xl py-2">
                  Responsive
                </h3>
                <p className="text-gray-500 text-base py-2 font-normal font-body">
                  Nothing the copy said could convince her and so it didn’t take
                  long.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     <About/>
    </div>
    </div>
  );
}
export default Features;
