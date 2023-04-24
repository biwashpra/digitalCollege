import React from "react";
import {
  IoPeople,
  IoAccessibilityOutline,
  IoPersonAddOutline,
  IoShieldHalfOutline,
} from "react-icons/io5";

const Service = () => {
  return (
    <section className="text-white body-font py-10" id="services">
      <div className="w-full md:max-w-[1440px] px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-500">
            College Management System
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We believe in creating an environment where our students find an
            opportunity to explore their underlying potentiality. We encourage
            our students to analyze problems, find solution themselves and
            challenge them to have confidence, dignity and sense of
            responsibility.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <IoPeople
                className="mb-3 inline-block text-[#6366f1]"
                size="56px"
              />
              <h2 className="title-font font-medium text-3xl text-[#BE3455]">
                2.7K
              </h2>
              <p className="leading-relaxed">Students</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <IoAccessibilityOutline
                className="mb-3 inline-block text-[#6366f1]"
                size="56px"
              />
              <h2 className="title-font font-medium text-3xl text-[#BE3455]">
                1.3K
              </h2>
              <p className="leading-relaxed">Teachers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <IoPersonAddOutline
                className="mb-3 inline-block text-[#6366f1]"
                size="56px"
              />
              <h2 className="title-font font-medium text-3xl text-[#BE3455]">
                74
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <IoShieldHalfOutline
                className="mb-3 inline-block text-[#6366f1]"
                size="56px"
              />
              <h2 className="title-font font-medium text-3xl text-[#BE3455]">
                46
              </h2>
              <p className="leading-relaxed">Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
