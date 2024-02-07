import React from "react";
import Navbar from "../Navbar/navbar"


const FrontPage = () => {
  return (
    <>
  
  <Navbar/>
      <div className="flex flex-wrap justify-center items-center h-auto mt-44  ">
      
        <div className=" w-1/12"></div>
        <div className="w-10/12">
          <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow  ">
            <h3 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
              Shorten a long link
            </h3>

            <div class="mb-5">
              <label
                for="text"
                class="block mb-2 text-2xl font-medium text-gray-900 mt-8"
              >
                Paste a long URL
              </label>
              <input
                type="text"
                id="text"
                class=" border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-50 focus:border-blue-50 block w-full p-2.5 h-12"
                placeholder="Example:Something.com/endpoint"
                required
              />
            </div>

            <div className="flex items-center mt-8 ">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 h-12 w-1/3 focus:outline-none "
              >
                Signup and get your link
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/12"></div>
      </div>
     
    </>
  );
};

export default FrontPage;
