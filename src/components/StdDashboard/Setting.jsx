import React, { useState } from "react";
import axios from "axios";

const Setting = (props) => {
  const [mail, setMail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldEmail, setOldEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = async (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    axios({
      method: "POST",
      url: "/student/changepassword",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: {
        email: mail,
        currentPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      },
    })
      .then((res) => {
        console.log(res);
        props.showAlert("text-green-800", `${res?.data?.message}`);
        // alert(res?.data?.message);
      })
      .catch((error) => {
        console.log(error);
        props.showAlert("text-red-700", `${error?.response?.data?.message}`);
        // alert(error?.response?.data?.message);
      });
  };

  //for change email
  const handleEmailChange = async (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    axios({
      method: "patch",
      url: "/student/changeemail",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: {
        oldEmail: oldEmail,
        newEmail: newEmail,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        props.showAlert("text-green-800", `${res?.data?.message}`);
        // alert(res?.data?.message);
      })
      .catch((error) => {
        console.log(error);
        props.showAlert("text-red-700", `${error?.response?.data?.message}`);
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
                              htmlFor="email"
                              className="inline-block mb-2 ml-1 font-bold text-lg"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              onChange={(e) => setMail(e.target.value)}
                              // value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
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
                              name="d"
                              // value="New York"
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
                              // value="United States"
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
                              // value="437300"
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

        {/* change email address */}
        <form method="patch">
          <div className="w-full p-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 shrink-0 md:flex-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
                    <div className="flex items-center">
                      <p className="mb-0 text-[#BE3455] font-medium leading-normal uppercase text-xl">
                        Change Email Address
                      </p>
                      <button
                        type="button"
                        onClick={handleEmailChange}
                        className="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-base tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
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
                            htmlFor="oldEmail"
                            className="inline-block mb-2 ml-1 font-bold text-lg"
                          >
                            Old Email Address
                          </label>
                          <input
                            type="email"
                            name="oldEmail"
                            value={oldEmail}
                            onChange={(e) => setOldEmail(e.target.value)}
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-gray-900 text-lg leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-1/2 md:flex-0">
                        <div className="mb-4">
                          <label
                            htmlFor="newEmail"
                            className="inline-block mb-2 ml-1 font-bold text-lg"
                          >
                            New Email Address
                          </label>
                          <input
                            type="email"
                            name="newEmail"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="focus:shadow-primary-outline dark:bg-slate-850 text-gray-900 text-lg leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-400 bg-white bg-clip-padding px-3 py-2 font-normal outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 shrink-0 md:w-1/2 md:flex-0">
                        <div className="mb-4">
                          <label
                            htmlFor="password"
                            className="inline-block mb-2 ml-1 font-bold text-lg"
                          >
                            Enter Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            autoComplete="true"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
};

export default Setting;
