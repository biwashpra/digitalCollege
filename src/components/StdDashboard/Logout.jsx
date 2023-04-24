import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] rounded-xl">
      <h1 className="text-6xl font-extrabold text-white tracking-widest my-5">
        Bye👋! See You Later
      </h1>

      <button
        className="my-16"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("studentID");
          navigate("/login");
        }}
      >
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-[#FF6A3D] group-hover:translate-y-1 group-hover:translate-x-1 rounded-xl"></span>

          <span className="relative block px-8 py-3 text-2xl bg-[#1A2238] border border-current rounded-xl">
            Click To Logout
          </span>
        </div>
      </button>

      <h1 className="text-6xl font-extrabold text-white tracking-widest my-5">
        HAVE A NICE DAY 😊
      </h1>
    </main>
  );
};

export default Logout;
