import { div } from "framer-motion/client";
import React from "react";
import { Link} from "react-router-dom";

export default function CertificateCard(props) {
  return (
    <div className=" flex flex-wrap justify-around items-center">
    <div className=" w-full sm:w-1/2 md:w-1/3 mx-auto pt-2">
      <div className="relative  px-2">
        <Link
          to={props.link}
          target="_blank"
          className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div className="shadow p-4 rounded-lg bg-gray-900">
            <div className="flex justify-center relative rounded-lg overflow-hidden">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <img src={props.img} alt="room" className="w-full" />
              </div>

              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                {props.heading}
              </span>
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-base md:text-lg text-gray-100 line-clamp-1">
                {props.name}
              </h2>
              <p className="mt-2 text-sm text-gray-500 line-clamp-1">
                {props.date}
              </p>
            </div>
            <div className="p-6 pt-3">
              <Link
                className="block w-full bg-gray-700 select-none rounded-lg py-3 px-6 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105"
                to={props.link}
                target="_blank"
              >
                Link
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
    </div>

  );
}
