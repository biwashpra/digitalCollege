import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";
const Hero = () => {
  //crousel slide items
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  //crousel state and prev & next options
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //for social media buttons
  const social_media = [
    {
      id: 1,
      icon: <FaGlobe />,
      link: "https://bmcdharan.edu.np/",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      link: "https://www.facebook.com/bmc.csit",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: "https://www.google.com/",
    },
  ];
  return (
    <section className="min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full px-3">
        <div className="text-3xl rounded-full p-2 bg-black/20 text-white cursor-pointer translate-x-12">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {
          <img
            src={`${slides[currentIndex].url}`}
            alt="404 Error"
            className="md:w-11/12 h-full object-cover rounded-full"
          />
        }
        <div className="bg-black/20 text-white text-3xl rounded-full p-2 cursor-pointer -translate-x-12">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              BMC :
              <br />
            </span>
            <span className="text-[#BE3455]">B</span>irendra
            <span className="text-[#BE3455]"> M</span>emorial
            <span className="text-[#BE3455]"> C</span>ollege
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-2 font-bold text-gray-500">
            connecting everyone and anywhere!
          </h4>
          <button className="btn-primary mt-5">College Contacts</button>
          <div className="mt-7 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((item) => {
              return (
                <div
                  key={item.id}
                  className="text-[#BE3455] hover:text-cyan-500 cursor-pointer "
                >
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.icon}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
