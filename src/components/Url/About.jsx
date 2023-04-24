import React from "react";
import TeamCard from "../TeamCard";
const About = () => {
  return (
    <section id="about" className="py-28 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Our <span className="text-cyan-600">Team</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          We are the leading team of 3 members
        </p>
      </div>

      <TeamCard
        name="Biwash Pradhan"
        description="Roll No:- 21423, Class:- Bsc. CSIT, Semester:- 7th semester"
        post="Team Member 1"
      />
      <TeamCard
        name="Dharmaraj Shrestha"
        description="Roll No:- 21424, Class:- Bsc. CSIT, Semester:- 7th semester"
        post="Team Member 2"
      />
      <TeamCard
        name="Dhruv Chaudhary"
        description="Roll No:- 21425, Class:- Bsc. CSIT, Semester:- 7th semester"
        post="Team Member 3"
      />
    </section>
  );
};

export default About;
