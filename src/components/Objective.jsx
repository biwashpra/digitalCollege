import React from "react";
import logo from "../assets/fontLogobg.png";
import { MdOutlineEmojiObjects } from "react-icons/md";

const Objective = () => {
  //for objective of college
  const objectives = [
    {
      id: 1,
      icon: <MdOutlineEmojiObjects />,
      name: "Our Mission",
      description:
        "The Mission of Birendra Memorial College (BMC) is to provide students, at an affordable cost, with quality education through TU's academic programmes that will liberalise and broaden student's attitude to and outlook on life. It intends to produce human resource that can manage the country's resources with high degree of efficiency and shoulder it over to the new generation in the process of nation building.",
    },
    {
      id: 2,
      icon: <MdOutlineEmojiObjects />,
      name: "Our Goals",
      description:
        "The academic goals are: Provide sound professional education to enable students to share values and responsibilities in the learning process, Impart quality education through practical classes, Encourage a sense of self-discipline, confidence and to develop a multi-dimensional personality, Enable the students to achieve academic excellence so as to cope with all the complexities of life.",
    },
    {
      id: 3,
      icon: <MdOutlineEmojiObjects />,
      name: "Our Values",
      description:
        "Honesty & sincerity, Professionalism & leadership, Social responsibility, Learning from mistakes, Ethics & morale, Self respect & respect for others, Innovation & creativity, Adherence to regulations",
    },
    {
      id: 4,
      icon: <MdOutlineEmojiObjects />,
      name: "Guiding Principles",
      description:
        "Responsible to the people and the nation, Conduct research oriented activities, Believe in team spirit, Follow existing rules and keep the college free from political interference, Impart quality education in affordable fee",
    },
  ];
  return (
    <div className="bg-gray-200 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <p className="mt-2 text-xl font-bold tracking-tight text-[#BE3455] sm:text-4xl">
            <img
              src={logo}
              alt="404 Not Found"
              className="w-10 h-10 inline mr-2"
            />
            Birendra Memorial College
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-700 font-semibold">
            Birendra Memorial College
            <span className="text-[#BE3455] font-bold">(BMC)</span> for higher
            studies was established in the year 2060 B.S. by a team of highly
            qualified academicians and professionals with a view to meet the
            growing demand for quality education in the field of Science,
            Technology and Management.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {objectives.map((items) => (
              <div
                key={items.id}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-700 text-white text-2xl sm:shrink-0">
                  {items.icon}
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-bold leading-8 text-[#BE3455]">
                    {items.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-900 italic">
                    {items.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
