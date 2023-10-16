import React from "react";
import contactImage from "../assets/contact.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
const ContactDetail = () => (
  <>
    <div className="bg-emerald-300 " id="contact">
      <h1 className="p-5 text-3xl font-semibold text-center lg:text-start ">
        Contact{" "}
      </h1>
      <div className=" rounded-lg p-4 flex  justify-around items-center">
        <img
          src={contactImage} // Replace with the path to your image
          alt="Contact"
          height={400}
          width={400}
          className=" rounded-full mr-4 hidden lg:block"
        />
        <div className="text-3xl mx-5 bg-black box-border py-12 px-14 rounded hover:bg-gray-200 group text-green-600 hover:text-black">
          <div className="  mt-3 ">{"{"}</div>
          <div className="ml-4 mb-2 text-white group-hover:text-purple-700">
            <span className="text-sky-400 group-hover:text-orange-600">
              "name"{" "}
            </span>
            :{" "}
            <span className="text-orange-400 group-hover:text-green-500">
              " Yugojyoti Mohanta "
            </span>
            ,
          </div>
          <div className="ml-4 text-white mb-2 group-hover:text-purple-700">
            <span className="text-sky-400 group-hover:text-orange-600">
              "email"{" "}
            </span>
            :{" "}
            <span className="text-orange-400 text-2xl group-hover:text-green-500">
              " yugojyotimohanta@gmail.com "
            </span>
            ,
          </div>
          <div className="ml-4 mb-2 mt-2 text-white group-hover:text-purple-700">
            <span className="text-sky-400 group-hover:text-orange-600">
              "phone"{" "}
            </span>{" "}
            :{" "}
            <span className="text-orange-400 group-hover:text-green-500">
              " 7978092900 "
            </span>
          </div>
          <div className="mt-3">{"}"}</div>
          <div className="flex gap-x-4 mt-4  justify-center">
            <a href="https://github.com/yugojyoti">
              <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-black bg-white duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/yugojyoti-mohanta-067985178/">
              <FaLinkedin className="h-8 w-8 text-blue-700 hover:text-blue-900 duration-300  bg-white" />
            </a>
            <a href="https://twitter.com/yugojyotimuna">
              <FaTwitterSquare className="h-8 w-8 text-sky-500 hover:text-blue-900 duration-300  bg-white" />
            </a>
            <a href="mailto:yugojyotimohanta@gmail.com">
              <MdEmail className="h-8 w-8 text-purple-600 hover:text-purple-800 duration-300  bg-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ContactDetail;
