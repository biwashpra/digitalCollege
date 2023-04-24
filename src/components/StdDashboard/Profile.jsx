import React, { useState } from "react";
import ProfileHero from "./ProfileHero";
import profilepic from "../../assets/raw.jpg";
import { Context } from "./Dashboard";
import axios from "axios";

const Profile = ({ showAlert }) => {
  const props = React.useContext(Context);
  let { studentId, fname, lname, semester } = props;

  const [image, setImage] = useState();

  const sendProfile = () => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(
        `http://localhost:5000/student/uploadphoto/${studentId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((res) => {
        // alert(res.data.message);
        showAlert("text-green-800", `${res?.data?.message}`);
        window.location.reload();
      });
  };

  return (
    <>
      <div className="w-full h-full">
        <section>
          <div className="relative w-full mx-auto">
            <div className="relative flex flex-col flex-auto min-w-0 p-2 mx-6 overflow-hidden break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-auto max-w-full px-3">
                  <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                    <img
                      src={profilepic}
                      alt="profile_image"
                      className="w-24 rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-none w-auto max-w-full px-3 my-auto">
                  <div className="h-full">
                    <h5 className="mb-1 text-xl font-semibold dark:text-[#BE3455]">
                      {fname + " " + lname}
                    </h5>
                    <p className="mb-0 font-semibold leading-normal dark:text-[#BE3455] dark:opacity-70 text-base">
                      {semester} semester
                    </p>
                  </div>
                </div>
                <div className="w-full max-w-full mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                  <div className="flex my-auto">
                    <ul className="relative flex flex-wrap p-1 list-none my-auto">
                      <li className="flex-auto items-center text-center ">
                        <div className="flex items-center justify-center px-0 mb-0 border-0 bg-inherit">
                          <span className="inline-flex text-gray-900 bg-gray-200 rounded-xl transition-all ease-in-out hover:bg-orange-500">
                            {/* Upload Profile Picture */}
                            <input
                              type="file"
                              id="profilepic"
                              accept="image/*"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </span>
                        </div>
                      </li>
                    </ul>
                    <span className="flex-auto text-gray-900 ml-4">
                      <button
                        className="flex justify-center bg-blue-500 text-white font-semibold rounded-xl p-4 transition-all ease-in-out hover:bg-orange-500"
                        onClick={sendProfile}
                      >
                        <span className="ml-1 pr-1">Upload</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProfileHero />
        {/* Tabs in react using hooks */}
      </div>
    </>
  );
};

export default Profile;
