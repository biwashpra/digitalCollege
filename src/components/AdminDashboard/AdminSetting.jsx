import React, { useState } from "react";
import axios from "axios";

const AdminSetting = (props) => {
  const [userName, setUserName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = async (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    axios({
      method: "POST",
      url: "/admin/adminchangepassword",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: {
        username: userName,
        currentPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      },
    })
      .then((res) => {
        console.log(res);
        // alert(res?.data?.message);
        props.showAlert("text-green-800", `${res?.data?.message}`);
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response.data.msg);
        props.showAlert("text-red-700", `${error.response.data.msg}`);
        // alert(error?.response?.data?.message);
      });
  };
  return (
    <>
      <div className="w-full h-full px-6 py-6 mx-auto">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            Your <span className="text-cyan-600">Settings</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">
            The most powerful component
          </p>
        </div>
        <div className="form-material">
          <form method="POST">
            {/* Yaha form field hunuprxa */}
            <div className="w-full p-6 mx-auto">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
                    <div className="rounded-t-2xl p-6 pb-0">
                      <div className="flex items-center">
                        <p className="mb-0 text-[#BE3455] font-medium leading-normal uppercase text-xl">
                          Change Password
                        </p>
                        <button
                          type="button"
                          onClick={handlePasswordChange}
                          className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-base hover:-translate-y-px"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="flex-auto p-6">
                      <div className="flex flex-wrap -mx-3 text-[#BE3455]">
                        <div className="w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                          <div className="mb-4">
                            <label
                              htmlFor="username"
                              className="inline-block mb-2 ml-1 font-bold text-lg"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              name="username"
                              onChange={(e) => setUserName(e.target.value)}
                              className="focus:shadow-primary-outline dark:bg-slate-850 text-gray-900 text-lg leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                          <div className="mb-4">
                            <label
                              htmlFor="oldpassword"
                              className="inline-block mb-2 ml-1 font-bold text-lg"
                            >
                              Old Password
                            </label>
                            <input
                              type="password"
                              name="oldpassword"
                              onChange={(e) => setOldPassword(e.target.value)}
                              autoComplete="true"
                              className="focus:shadow-primary-outline dark:bg-slate-850 text-gray-900 text-lg block w-full appearance-none rounded-lg border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                          <div className="mb-4">
                            <label
                              htmlFor="newpassword"
                              className="inline-block mb-2 ml-1 font-bold text-lg"
                            >
                              New Password
                            </label>
                            <input
                              type="password"
                              name="newpassword"
                              onChange={(e) => setNewPassword(e.target.value)}
                              autoComplete="true"
                              className="focus:shadow-primary-outline dark:bg-slate-850 text-gray-900 text-lg leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal  outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                          <div className="mb-4">
                            <label
                              htmlFor="repassword"
                              className="inline-block mb-2 ml-1 font-bold text-lg"
                            >
                              Re-type Password
                            </label>
                            <input
                              type="password"
                              name="repassword"
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              autoComplete="true"
                              className="focus:shadow-primary-outline dark:bg-slate-850 text-gray-900 text-lg leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSetting;
