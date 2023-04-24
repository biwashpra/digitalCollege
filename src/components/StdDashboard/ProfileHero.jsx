import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilepic from "../../assets/pp.jpg";
import bgprofile from "../../assets/bgprofile.jpg";
import { Context } from "./Dashboard";
import ProfileTab from "./ProfileTab";
import axios from "axios";

const ProfileHero = () => {
  const props = React.useContext(Context);
  let { fname, lname, address } = props;

  const [src, setSrc] = useState("");
  const studentId = localStorage.getItem("studentID");

  useEffect(() => {
    const studentId = localStorage.getItem("studentID");
    console.log("profileImg: ", studentId);
    const url = `http://localhost:5000/student/${studentId}`;
    axios
      .get(url, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      })
      .then((res) => {
        var imageUrl = URL.createObjectURL(res.data);
        setSrc(imageUrl);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <section>
      <div className="w-full p-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          {/* Yaha form field hunuprxa */}
          <div className="w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <ProfileTab />
            </div>
          </div>
          <div className="w-full max-w-full px-3 mt-6 shrink-0 md:w-4/12 md:flex-0 md:mt-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <img
                className="w-full rounded-t-2xl"
                src={bgprofile}
                alt="profile cover"
              />
              <div className="flex flex-wrap justify-center -mx-3">
                <div className="w-4/12 max-w-full px-3 flex-0 ">
                  <div className="mb-6 -mt-6 lg:mb-0 lg:-mt-16">
                    <img
                      className="h-auto max-w-full border-2 border-white border-solid rounded-2xl shadow-xl"
                      src={src ? src : profilepic}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <div className="border-black/12.5 flex justify-between rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
                <div
                  className="flex justify-center text-white my-2"
                  onClick={() => navigate("/dashboard/setting")}
                >
                  <button
                    type="button"
                    className="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    Change Password
                  </button>
                </div>

                {/* for emailchange */}
                <div
                  className="flex justify-center text-white my-2"
                  onClick={() => navigate("/dashboard/setting")}
                >
                  <button
                    type="button"
                    className="block px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer text-xs bg-slate-700 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                  >
                    Change Email
                  </button>
                </div>
              </div>

              <div className="flex-auto p-6 pt-0">
                <div className="mt-4 text-center">
                  <h5 className="dark:text-[#BE3455] text-base underline">
                    <i> StudentID = {studentId} </i>
                  </h5>
                  <h5 className="dark:text-[#BE3455] font-medium text-xl">
                    {fname + " " + lname}
                  </h5>
                  <div className="mb-2 font-medium leading-relaxed text-base dark:text-slate-700">
                    {address}
                  </div>
                  <div className="mt-6 mb-2 font-semibold leading-relaxed text-lg dark:text-[#BE3455]">
                    <i className="mr-2 dark:text-gray-900 fa-solid fa-school-flag"></i>
                    Birendra Memorial College
                  </div>
                  <div className="dark:text-slate-700 text-sm">
                    Bachelor of Computer Science and Information Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
