import React from "react";
import bwsMe from "../assets/mero.png";

const TeamCard = (props) => {
  return (
    <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
      <div>
        <h2 className="text-2xl font-semibold text-[#BE3455]">{props.name}</h2>
        <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          {props.description}
        </p>
        <br />
        <span className="btn-primary mt-10 text-cyan-500 italic text-xl">
          {props.post}
        </span>
      </div>
      <img
        src={bwsMe}
        alt="404 Not Found"
        className="lg:h-[35rem] h-[22rem] lg:absolute bottom-0 -right-3 object-cover"
      />
    </div>
  );
};

export default TeamCard;
