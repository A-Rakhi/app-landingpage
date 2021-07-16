import React from 'react';
import step from '../img/step.png'
import Faq from './Faq';

function Steps(){
    return(

        <div>
        <div className="container mx-auto  xl:px-5 lg:px-5 px-2">
        <div className=" py-10">
          <div className="text-left px-5">
            <h3 className="text-base uppercase leading-5 tracking-wider text-gray-400">
            3 Steps
            </h3>
            <h1 className="w-72 xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-2xl text-black tracking-tight font-bold py-5">
              You'll Love 
               To Use It
            </h1>
          </div>
  
          <div>
            <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-10">
              {/* <!--Card 1--> */}
              <div className="rounded overflow-hidden shadow-lg">
                <div className="pl-5 pt-8">
                  <div className=" rounded-full w-16 h-16 p-4 " style={{backgroundImage:` url(${step})`}}>
                      <h5 className="font-bold text-4xl text-white text-center ">1</h5>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="font-normal font-display text-2xl py-2">
                    Responsive
                  </h3>
                  <p className="text-gray-500 text-base py-2 font-normal font-body pr-8 md:pr-1">
                    Nothing the copy said could convince her and so it didn’t take
                    long.{" "}
                  </p>
                  <h5 className="py-2">Create Now</h5>
                </div>
              </div>
              {/* <!--Card 2--> */}
              <div className="rounded overflow-hidden shadow-lg">
                <div className="pl-5 pt-8">
                  <div className=" rounded-full w-16 h-16 p-4 " style={{backgroundImage:` url(${step})`}}>
                      <h5 className="font-bold text-4xl text-white text-center ">1</h5>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="font-normal font-display text-2xl py-2">
                    Responsive
                  </h3>
                  <p className="text-gray-500 text-base py-2 font-normal font-body pr-8 md:pr-1">
                    Nothing the copy said could convince her and so it didn’t take
                    long.{" "}
                  </p>
                  <h5 className="py-2">Create Now</h5>
                </div>
              </div>
              <div className="rounded overflow-hidden shadow-lg">
                <div className="pl-5 pt-8">
                  <div className=" rounded-full w-16 h-16 p-4 " style={{backgroundImage:` url(${step})`}}>
                      <h5 className="font-bold text-4xl text-white text-center ">1</h5>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="font-normal font-display text-2xl py-2">
                    Responsive
                  </h3>
                  <p className="text-gray-500 text-base py-2 font-normal font-body pr-8 md:pr-1">
                    Nothing the copy said could convince her and so it didn’t take
                    long.{" "}
                  </p>
                  <h5 className="py-2">Create Now</h5>
                </div>
              </div>
            </div>
            </div>
            </div>
            </div>

            <Faq/>
            </div>
  

    )
}
export default Steps;