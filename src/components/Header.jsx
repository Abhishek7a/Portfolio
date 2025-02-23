import React from "react";
import img from "../assets/Portfolio1.png";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";

export default function Header() {
  const { dark, setDark } = useAppContext();
  return (
    <header className={`z-40`}>
      <div className={`mx-auto flex flex-col md:flex-row-reverse items-center p-6 justify-around  ${dark===false? "dark:text-gray-100 bg-gray-900":"bg-gray-100"} `}>
          {/* Image */}
          <div className="mt-6 md:mt-0">
          <img src={img} alt="Abhishek" className="w-40 md:w-64 rounded-full" />
        </div>
        

        <div className="text-center py-10 md:text-left ">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello! <br /> I'm{" "}
            <span className="text-orange-500">Abhishek Arora</span>
          </h1>
          <p className="text-gray-400">Fullstack Web Developer</p>

          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            <Link
              to="#"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Hire Me
            </Link>
            <Link
              to="/projects"
              className="border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 font-bold py-2 px-4 rounded"
            >
              My Works
            </Link>
          </div>
        </div>

        <div className="md:flex-col justify-between items-center flex space-x-4 mb-4 md:mb-0">
          <Link
            to="https://www.linkedin.com/in/abhishek-arora-688a6020b/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:pt-2 md:pl-3"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.6 4.08 5.5 2.98 5.5C1.87 5.5 0.98 4.6 0.98 3.5C0.98 2.4 1.87 1.5 2.98 1.5C4.08 1.5 4.98 2.4 4.98 3.5ZM5 7H1V21H5V7ZM9 7H13V9H13.1C13.8 7.9 15.1 7 16.7 7C20.2 7 21 9.2 21 12.4V21H17V13.3C17 11.7 16.9 10 15.2 10C13.5 10 13.2 11.5 13.2 13.3V21H9V7Z" />
            </svg>
          </Link>
          <Link
            to="https://github.com/Abhishek7a"
            target="_blank"
            rel="noopener noreferrer"
            className="md:pt-3"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
