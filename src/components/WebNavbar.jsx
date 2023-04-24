import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fontLogobg.png";
import { FaStream } from "react-icons/fa";

const WebNavbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  //Navbar menus
  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "FEATURES", link: "/features" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
    { name: "LOGIN", link: "/login" },
    { name: "REGISTER", link: "/registration" },
  ];

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            <Link to="/">
              <img
                src={logo}
                alt="404 Not Found"
                className="w-10 h-10 mr-2 rounded-full hover:bg-gray-400 inline md:hidden"
              />
              <span className="text-[#BE3455] hover:text-cyan-600 font-semibold">
                B
              </span>
              <span className={`${sticky ? "text-cyan-500" : "text-white"}`}>
                M
              </span>
              <span className="text-[#BE3455] hover:text-cyan-600 font-semibold">
                C
              </span>
            </Link>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className="px-6 text-[#BE3455] font-bold hover:text-cyan-700"
              >
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-[#BE3455]"
          } text-3xl md:hidden m-5 cursor-pointer`}
        >
          <FaStream />
        </div>
        <div
          className={`md:hidden text-[#BE3455] absolute w-2/3 h-screen
    px-7 py-2 font-bold bg-white top-0 duration-300 ${
      open ? "right-0" : "right-[-100%]"
    }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 text-[#BE3455]"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default WebNavbar;
