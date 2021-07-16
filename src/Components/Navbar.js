import React from "react";

function Navbar(){
    return(
        <div>
            <div className="container mx-auto px-8">
                <nav className="flex items-center justify-between flex-wrap py-6 px-8">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <h1 className="font-bold text-xl text-black">APP</h1>
                    </div>

                    <div className="flex justify-between items-center space-x-10 ">
                        <div className="md:block hidden ">
                        <ul className="flex space-x-6 " >
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                        </div>
                        <div className="md:block hidden ">
                            <button className="btn py-2 px-5 border border-blue-800 text-blue-800 ">Get App Now</button>
                        </div>
                    </div>

                    <div className="md:hidden block">
                        <button
                            className="flex items-center px-3 py-2 border rounded ">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>

                </nav>
            </div>
        </div>
    )
}
export default Navbar;