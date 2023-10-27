import React, { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImg from "../assets/hero3.gif";
import "../App.css";
import TypingText from "./TypingText";

import ParticleBackground from "./ParticleBackground";
import AnimateText from "./AnimateText";
import { MdEmail } from "react-icons/md";
import profilePDF from "../assets/Profile.pdf";

const Hero = () => {
  return (
    <>
      <div className="bg-emerald-200 py-24 ">
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 gap-8">
          <article className="ml-10 section-with-particles" id="article">
            <ParticleBackground />
            <div>
              <h1 className="mb-2 font-pixify text-5xl text-orange-600 h-20 md:pb-2 lg:pb-2 sm:pb-2  hover:text-orange-600 ">
                Hi,{" "}
                <span>
                  {" "}
                  <TypingText text={"I'm  Yugojyoti Mohanta "} />
                </span>
              </h1>
            </div>

            <div className="mt-20 pt-2">
              {/* <p className="mt-4 text-3xl text-slate-900 capitalize tracking-wide">
                Full Stack Developer
              </p> */}
              <AnimateText />
              <p className="mt-2 text-xl text-slate-700 capitalize tracking-wide">
                Passonate about Science & Tech{" "}
              </p>
              <p className="mt-2 text-xl text-slate-700 capitalize tracking-wide">
                Loves Turning ideas Into Reality{" "}
              </p>
              <div className="flex gap-x-4 mt-4 ">
                <a href="https://github.com/yugojyoti" target="_blank">
                  <FaGithubSquare className="h-8 w-8 text-slatw-700 hover:text-black bg-white duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yugojyoti-mohanta-067985178/"
                  target="_blank"
                >
                  <FaLinkedin className="h-8 w-8 text-blue-700 hover:text-blue-900 duration-300  bg-white" />
                </a>
                <a href="https://twitter.com/yugojyotimuna" target="_blank">
                  <FaTwitterSquare className="h-8 w-8 text-sky-500 hover:text-blue-900 duration-300  bg-white" />
                </a>
                <a href="mailto:yugojyotimohanta@gmail.com">
                  <MdEmail className="h-8 w-8 text-gray-700 hover:text-black duration-300  bg-white" />
                </a>
              </div>
              <div className=" mt-5">
                <a
                  href={profilePDF}
                  download="CV_Download"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-emerald-600 text-white px-10 py-2  hover:bg-orange-500 rounded">
                    {" "}
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </article>
          <article className="hidden md:block px-20">
            <img src={heroImg} alt="" className="h-80 lg:h-96" />
          </article>
        </div>
      </div>
    </>
  );
};

export default Hero;
