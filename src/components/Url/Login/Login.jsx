import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import ErrHandle from "../../ErrHandle";
import "./Log.css";
import { FaKey } from "react-icons/fa";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevent the default submit and page reload
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:5000/student/login",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: { email: email, password: password },
    })
      .then((res) => {
        console.log(res);
        setError(res?.data?.message);
        console.log(res?.data?.token);
        localStorage.setItem("token", `${res.data.token}`);
        // alert("Login successful");
        navigate("/dashboard");
        props.showAlert("text-green-700", "Student Login successfull");
      })
      .catch((error) => {
        console.log(error);
        setError(error?.response?.data?.message);
        console.log(error?.response?.data);
        props.showAlert(
          "text-red-800",
          `Student ${error?.response?.data?.message}`
        );
      });
  };

  //For admin Login
  // const adminLog = () => {
  //   let adminId = prompt("Username");
  //   let adminPassword = prompt("Password");

  //   axios({
  //     method: "POST",
  //     url: "http://localhost:5000/admin/login",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //     data: { username: adminId, password: adminPassword },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setError(res?.data?.message);
  //       // console.log(res?.data);
  //       // console.log(res?.data?.token);
  //       sessionStorage.setItem("key", `${res.data}`);
  //       // localStorage.setItem("token", `${res.data.token}`);
  //       props.showAlert("text-green-800", "Admin Login successfull");
  //       navigate("/admin");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error?.response?.data?.message);
  //       props.showAlert(
  //         "text-red-800",
  //         `Admin ${error?.response?.data?.message}`
  //       );
  //       console.log(error?.response?.data);
  //     });
  // };
  return (
    <>
      <div className="bodyLog mt-16">
        <div className="containerLog ">
          <div className="headerLog">LogIn</div>

          <form method="POST" onSubmit={handleSubmit}>
            <div className="form first">
              <div className="details personal">
                <span className="title">Enter Your credentials to Login</span>

                <div className="fieldsLog">
                  <div className="input-fields">
                    <label htmlFor="Email">Email</label>
                    <input
                      className="inputLog"
                      name="email"
                      type="email"
                      value={email}
                      placeholder="Enter Your Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div className="input-fields">
                    <label htmlFor="Password">Password</label>
                    <input
                      className="inputLog"
                      name="password"
                      type="password"
                      value={password}
                      autoComplete="true"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="p-1 text-[#BE3455] font-medium">
                    <span className="text-gray-900 mr-2">No account?</span>
                    <NavLink to="/registration">Create an Account</NavLink>
                  </div>
                  <br />
                  <div className="p-1 text-[#BE3455] font-medium">
                    <span className="text-gray-900 mr-2">
                      Are you an Admin?
                    </span>
                    <NavLink to="/adminLog">Admin Login</NavLink>
                    {/* <span
                      onClick={() => navigate("/adminLog")}
                      className="cursor-pointer"
                    >
                      Admin Login2
                    </span> */}
                  </div>
                </div>
                {/* <p
                  id="logged"
                  className="text-xl font-medium text-green-800"
                ></p> */}
                {error && <ErrHandle error={error} />}
                <button className="submitbtn hover:bg-[#9f2340]" type="submit">
                  <span className="btntext">Login</span>
                  <FaKey className="ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
