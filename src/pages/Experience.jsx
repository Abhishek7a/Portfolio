import React from "react";

export default function Experience() {
  return (
    <div className="w-1/2 mx-auto mt-10">
      <h3 className="text-2xl text-gray-700 font-bold mb-6 ml-3">
        {" "}
        Experience
      </h3>
      <ol>
        <li className="border-l-2 border-green-600">
          <div className="flex flex-start ">
            <div className="bg-green-600 w-8 h-8 flex items-center justify-center rounded-full -ml-4 animate-pulse">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <circle cx="250" cy="250" r="190" fill="white" />
              </svg>
            </div>
            <div className="block px-10 md:pt-4 w-64  py-2 rounded-lg shadow-lg bg-gray-900 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between md:mb-4">
                <div className="font-normal  text-green-800 hover:text-green-700 focus:text-green-800  duration-300 transition ease-in-out md:text-xl">
                  Teliolabs Communication
                </div>
              </div>
              <div className="flex justify-around text-gray-400">
                <div>Junior Developer</div>
                <div>1 Year</div>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-2 border-orange-600 mt-1">
          <div className="flex flex-start">
            <div className="bg-orange-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <circle cx="250" cy="250" r="150" fill="white" />
              </svg>
            </div>
            <div className="block px-10 pt-4 md:py-2 w-64 rounded-lg shadow-lg bg-gray-900 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between mb-4">
                <div className="font-medium text-orange-600 hover:text-orange-700 focus:text-orange-800 duration-300 transition ease-in-out md:text-xl">
                  JP Morgan Chase
                </div>
              </div>
              <div className="flex justify-around text-gray-400">
                <div>Intership</div>
                <div>1 Month</div>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-2 border-orange-600 mt-1">
          <div className="flex flex-start">
            <div className="bg-orange-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <circle cx="250" cy="250" r="150" fill="white" />
              </svg>
            </div>
            <div className="block px-6 md:px-10 pt-4 md:py-2 w-64  rounded-lg shadow-lg bg-gray-900 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between mb-4">
                <div className="font-medium text-orange-600  hover:text-orange-700 focus:text-orange-800 duration-300 transition ease-in-out md:text-xl text-sm">
                  Potentia Academy
                </div>
              </div>
              <div className="flex justify-around text-gray-400">
                <div>Intership</div>
                <div>3 Month</div>
              </div>
            </div>
          </div>
        </li>
        <li className=" border-orange-600 mt-1">
          <div className="flex flex-start">
            <div className="bg-orange-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <circle cx="250" cy="250" r="150" fill="white" />
              </svg>
            </div>
            <div className="block px-6 md:px-10 pt-4 md:py-2 w-64  rounded-lg shadow-lg bg-gray-900 max-w-md ml-6 md:mb-10">
              <div className="flex justify-between mb-4">
                <div className="font-medium text-orange-600 hover:text-orange-700 focus:text-orange-800 duration-300 transition ease-in-out ,md:text-xl">
                  Suvidha Foundations
                </div>
              </div>
              <div className="flex justify-around text-gray-400">
                <div>Intership</div>
                <div>1 Month</div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
