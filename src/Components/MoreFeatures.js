import React from 'react';
import f from '../img/f.png'
import Steps from './Steps';
function MoreFeatures(){
    return(
        <div>
        <div className="container mx-auto xl:px-5 lg:px-5 px-2 py-5">
            <div className="py-5 px-6">
            <h3 className=" text-base uppercase leading-5 tracking-widest text-gray-500">
            Powerful     </h3>
            <h1 className="xl:text-5xl lg:text-5xl md:text-3xl sm:text-5xl text-2xl tracking-tight font-bold py-5 xl:w-96 lg:w-96">
            Explore Our 
               Business Features    </h1>

            </div>
            <div className=" py-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-3">
                <div>
                <div className="px-6">
                    <div className=" bg-yellow-100 rounded-full w-12 h-12 p-3 ">
                  <svg
                    class="w-6 h-6 text-yellow-600"
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
                </div>
                <div className="py-3">
                <h3 className=" font-display text-2xl py-2 font-bold">
                Powerful               </h3>
                <p className="pr-20 md:pr-10 text-gray-500 text-base py-2 font-normal font-body">
                Said could convince her and so it didn’t take long until.{" "}
                </p>
              </div>
            </div>  
            
            <div className="px-6 py-10">
                    <div className=" bg-yellow-100 rounded-full w-12 h-12 p-3 ">
                  <svg
                    class="w-6 h-6 text-yellow-600"
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
                </div>
                <div className="py-3">
                <h3 className="font-bold font-display text-2xl py-2">
                Easy Scale                </h3>
                <p className= "pr-20  md:pr-10 text-gray-500 text-base py-2 font-normal font-body">
                Agency, where they abused her for their projects again and again.            </p>
              </div>
            </div> 
            
                    </div>

                    <div className="xl:order-none lg:order-none md:order-none order-first ">
                        <img src={f} alt="feat" className="xl:h-full lg:h-full md:h-full w-96"/>
                    </div>

                    <div className="">
                <div className="px-6">
                    <div className=" bg-yellow-100 rounded-full w-12 h-12 p-3 ">
                  <svg
                    class="w-6 h-6 text-yellow-600"
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
                </div>
                <div className="py-3">
                <h3 className="font-bold font-display text-2xl py-3">
                Smart                </h3>
                <p className="pr-20 md:pr-10 text-gray-500 text-base py-2 font-normal font-body">
                Ambushed her, made her drunk with Longe and Parole.{" "}
                </p>
              </div>
            </div>  
            
            <div className="px-6 py-10">
                    <div className=" bg-yellow-100 rounded-full w-12 h-12 p-3 ">
                  <svg
                    class="w-6 h-6 text-yellow-600"
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
                </div>
                <div className="py-3">
                <h3 className="font-bold font-display text-2xl py-3">
                  Professional
                </h3>
                <p className="pr-20 md:pr-10 text-gray-500 text-base py-2 font-normal font-body">
                Behind the word mountains, far from the countries Vokalia.{" "}
                </p>
              </div>
            </div> 
            
                    </div>
                </div>
              
            </div>
            
            <div>
                <Steps/>
            </div>
            </div>
    )
}

export default MoreFeatures;