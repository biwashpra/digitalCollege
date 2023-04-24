import React from "react";

const BookCard = (props) => {
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 max-w-sm mx-auto overflow-hidden my-4">
        <img className="w-full h-96" src={props.image} alt="content" />
        <div className="px-6 py-4 bg-gray-400">
          <div className="font-bold tracking-widest text-[#BE3455] text-xl mb-2">
            {props.title}
          </div>
          <p className="leading-relaxed text-gray-900 text-base">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
