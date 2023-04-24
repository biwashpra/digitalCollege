import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //For admin Login
  const adminLog = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/admin/login",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: { username: username, password: password },
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("key", `${res.data}`);
        // sessionStorage.setItem("key", `${res.data}`);
        props.showAlert("text-green-800", "Admin Login successfull");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        props.showAlert(
          "text-red-800",
          `Admin ${error?.response?.data?.message}`
        );
      });
  };
  return (
    <>
      <section className="flex h-screen bg-indigo-700">
        <div className="max-w-sm w-full m-auto bg-indigo-100 rounded p-5">
          <header>
            <img
              className="w-20 mx-auto mb-5"
              src="https://img.icons8.com/fluent/344/year-of-tiger.png"
              alt="tiger"
            />
          </header>

          {/* form start */}
          <form method="POST" onSubmit={adminLog}>
            <div>
              <label
                className="block mb-2 text-indigo-500 font-bold text-lg"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full p-2 mb-6 text-[#BE3455] border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="text"
                name="username"
                placeholder="Enter Username"
                autoComplete="true"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                className="block mb-2 text-indigo-500 font-bold text-lg"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 mb-6 text-[#BE3455] border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type="password"
                name="password"
                placeholder="Enter Password"
                autoComplete="true"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
                type="submit"
              />
            </div>
          </form>

          {/* footer start */}
          <footer>
            <span className="text-indigo-700 text-base font-semibold float-left">
              Are You a Student?
            </span>
            <span className="text-indigo-700 hover:text-pink-700 text-base font-semibold float-right cursor-pointer">
              {/* <NavLink to="/login">Student Login</NavLink> */}
              <span
                onClick={() => navigate("/login")}
                className="cursor-pointer"
              >
                Student Login
              </span>
            </span>
          </footer>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
