import React from "react";
import { links } from "./../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-emerald-200">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row  sm:gap-x-16 items-center sm:py-8 gap-x-30">
        <h2 className="text-3xl font-bold ">
          <span className="text-emerald-600  text-5xl font-pixify hover:text-6xl hover:text-orange-600">
            {" "}
            <a href="#home">
              <span>{"<"}</span>YM<span>{" />"}</span>
            </a>
          </span>{" "}
        </h2>
        <div className="flex gap-x-10">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl font-pixify tracking-wider text-emerald-700 hover:text-orange-600 duration-300 hover:text-2xl"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
