import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8 ">
        <h2 className="text-xl tracking-wide font-medium ">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-24 justify-between ">
          {url && (
            <button className="bg-emerald-600 hover:bg-emerald-900 text-white rounded py-2 px-4 ">
              <a href={url} target="_blank">
                <div className=" flex gap-2 items-center">
                  <TbWorldWww className=""></TbWorldWww>
                  <span>Live Website</span>
                </div>
              </a>
            </button>
          )}
          {github && (
            <button className="bg-emerald-600 hover:bg-emerald-900 text-white py-2 px-4 rounded">
              {" "}
              <a href={github} target="_blank">
                <div className="flex gap-2 items-center">
                  <FaGithub></FaGithub>
                  <span>Github</span>
                </div>
              </a>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
