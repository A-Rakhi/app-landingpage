import React from "react";
import Blogs from "./Blogs";

function Price() {
  return (

    <div>
          <div className="container mx-auto xl:px-5 lg:px-5 px-2">
      <div className=" py-28">
        <div className="text-center">
          <h3 className="text-base uppercase leading-5 tracking-wider text-gray-400">
            Our Features
          </h3>
          <h1 className="xl:text-4xl lg:text-4xl md:text-4xl sm:text-4xl text-2xl text-black tracking-tight font-bold py-5">
            Great Features Of Our App
          </h1>
        </div>

        <div>
          <div class="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10">
            {/* <!--Card 1--> */}
            <div class="rounded overflow-hidden shadow-lg px-10 py-5">
                <div className="pl-5">
                    <h4 className="text-4xl font-bold lining-nums py-1">$38</h4>
                    <h5 className="text-lg font-bold py-2">Standard</h5>
                </div>
            <div className="py-4">
                    <div className="flex gap-3">
                         <span className=" p-1">
                         <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-700">Email Marketing</p>

                    </div>
                    <div className="flex gap-3 py-2">
                         <span className="p-1">
                         <svg class="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                             </path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-400">Email Marketing</p>

                    </div>
                    <div className="flex gap-3">
                         <span className="p-1">
                         <svg class="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                             </path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-400">Email Marketing</p>

                    </div>
                    </div>

                    <div className="py-3">
                      <button className="btn border border:bg-white py-2 px-8 text-blue-600">Get Now</button>
                    </div>

            </div>

            {/* <!--Card 2--> */}
            <div class="rounded overflow-hidden shadow-lg px-10 py-5 bg-gray-300">
                <div className="pl-5">
                    <h4 className="text-4xl font-bold lining-nums py-1">$38</h4>
                    <h5 className="text-lg font-bold py-2">Standard</h5>
                </div>
            <div className="py-4">
                    <div className="flex gap-3">
                         <span className=" p-1">
                         <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-700">Email Marketing</p>

                    </div>
                    <div className="flex gap-3 py-2">
                         <span className="p-1">
                         <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-700">Email Marketing</p>

                    </div>
                    <div className="flex gap-3">
                         <span className="p-1">
                         <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                         xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                             </path></svg>
                         </span>
                         <p className="text-base  md:text-sm font-normal text-gray-400">Email Marketing</p>

                    </div>
                    </div>

                    <div className="py-3">
                      <button className="btn bg-blue-600 py-2 px-8 text-white">Get Now</button>
                    </div>

            </div>
            {/* <!--Card 3--> */}
            <div class="rounded overflow-hidden shadow-lg px-10 py-5">
                <div className="pl-5">
                    <h4 className="text-4xl font-bold lining-nums py-1">$38</h4>
                    <h5 className="text-lg font-bold py-2">Standard</h5>
                </div>
            <div className="py-4">
                    <div className="flex gap-3">
                         <span className=" p-1">
                         <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-400">Email Marketing</p>

                    </div>
                    <div className="flex gap-3 py-2">
                         <span className="p-1">
                         <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-400">Email Marketing</p>

                    </div>
                    <div className="flex gap-3">
                         <span className="p-1">
                         <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                         </span>
                         <p className="text-base md:text-sm font-normal text-gray-400">Email Marketing</p>

                    </div>
                    </div>

                    <div className="py-3">
                      <button className="btn border border:bg-white py-2 px-8 text-blue-600">Get Now</button>
                    </div>

            </div>
          </div>
        </div>
      </div>

<div>
    </div>
    </div>
    
    <Blogs/>
    
    </div>

  );
}
export default Price;
