import React from "react";
import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="mx-auto max-w-7-xl px-8 grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            
I'm Yugojyoti Mohanta, a skilled web developer with 1 year of experience. Proficient in React, Node.js, Express, MongoDB, Golang, and Flutter, I bring versatile expertise to diverse projects. Committed to staying current with industry trends, I deliver high-quality results. Eager to contribute to exciting technology projects and collaborations, I combine technical proficiency with a passion for innovation.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
