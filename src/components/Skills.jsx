import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

import { skills } from "../data";

import "animate.css/animate.min.css";
const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationDuration = 500;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Object.keys(skills).length
      );
    }, animationDuration);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <section className="py-20 mx-auto max-w-7-xl px-8" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6  ">
        {skills.map((skill, index) => {
          return (
            <div key={skill.id}>
              <article
                className={`${
                  index === currentIndex
                    ? "text-orange-500 animate-bounce "
                    : "text-emerald-500"
                }`}
              >
                <span className="">{skill.icon}</span>
                <h4 className="mt-6 font-bold text-black">{skill.title}</h4>
                {/* <p>{text}</p> */}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
