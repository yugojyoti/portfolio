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
            I am Yugojyoti Mohanta, Master's in Physics from Indian Institute of
            Science Education And Research (IISER) Berhampur. My passion for web
            development has led me to become a skilled full-stack developer
            proficient in technologies like React, Node.js, Express, and
            MongoDB. Additionally, I have expertise in Golang and Flutter,
            making me a versatile software developer capable of tackling diverse
            projects. With a commitment to staying up-to-date with industry
            trends and a dedication to delivering high-quality results, I'm
            eager to contribute to exciting technology projects and
            collaborations.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
