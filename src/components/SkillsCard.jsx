import React from "react";
import "animate.css/animate.min.css";
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="hover:animate-bounce text-emerald-500 hover:text-orange-500 ">
      <span className="">{icon}</span>
      <h4 className="mt-6 font-bold text-black">{title}</h4>
      {/* <p>{text}</p> */}
    </article>
  );
};

export default SkillsCard;
