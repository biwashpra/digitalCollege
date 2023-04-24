import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./tryval.css";
import { useFormik } from "formik";
import { regSchema } from "../Validation/regSchema";
import axios from "axios";
import ErrHandle from "../../ErrHandle";
import { FaHandshake } from "react-icons/fa";

const Registration = (props) => {
  const [Error, setError] = useState(null);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        fname: "",
        lname: "",
        dob: "",
        gender: "",
        mobileNumber: "",
        address: "",
        email: "",
        password: "",
        cpassword: "",
        fatherName: "",
        motherName: "",
        guardianNumber: "",
        passedYear1: "",
        marks1: "",
        passedYear2: "",
        marks2: "",
      },
      validationSchema: regSchema,
      onSubmit: (values) => {
        console.log(values);

        axios({
          method: "POST",
          url: "/student/register",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          data: values,
        })
          .then((res) => {
            console.log(res);
            // alert("Sucess");
            setError(res?.data?.message);
            props.showAlert("text-green-700", `${res?.data?.message}`);
            console.log(res?.data?.message);
          })
          .catch((error) => {
            console.log(error);
            // alert(error?.response?.data?.error);
            setError(error?.response?.data?.message);
            props.showAlert(
              "text-red-700",
              `${error?.response?.data?.message}`
            );
            // console.log(error?.response?.data);
          });
      },
    });

  return (
    <>
      <div className="body my-8">
        <div className="container">
          <div className="header">Registration</div>

          <form method="POST" onSubmit={handleSubmit}>
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="First Name">First/Middle Name</label>
                    <input
                      className="input"
                      name="fname"
                      type="text"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your First Name"
                    />
                    {errors.fname && touched.fname ? (
                      <p className="form-error">{errors.fname}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Last Name">Last Name</label>
                    <input
                      className="input"
                      name="lname"
                      type="text"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Last Name"
                    />
                    {errors.lname && touched.lname ? (
                      <p className="form-error">{errors.lname}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Date Of Birth">Date Of Birth</label>
                    <input
                      className="input"
                      name="dob"
                      type="date"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.dob && touched.dob ? (
                      <p className="form-error">{errors.dob}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Gender">Gender</label>
                    <select
                      name="gender"
                      className="input"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="Select">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Prefer Not To Say</option>
                    </select>
                    {errors.gender && touched.gender ? (
                      <p className="form-error">{errors.gender}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Mobile Number">Mobile Number</label>
                    <input
                      className="input"
                      name="mobileNumber"
                      type="number"
                      value={values.mobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Mobile Number"
                    />
                    {errors.mobileNumber && touched.mobileNumber ? (
                      <p className="form-error">{errors.mobileNumber}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Address">Address</label>
                    <input
                      className="input"
                      name="address"
                      type="text"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Address"
                    />
                    {errors.address && touched.address ? (
                      <p className="form-error">{errors.address}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Email">Email</label>
                    <input
                      className="input"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Email"
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Password">Password</label>
                    <input
                      className="input"
                      name="password"
                      type="password"
                      autoComplete="off"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Password"
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Cpassword">Confirm Password</label>
                    <input
                      className="input"
                      name="cpassword"
                      type="password"
                      autoComplete="off"
                      value={values.cpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Re-type Password"
                    />
                    {errors.cpassword && touched.cpassword ? (
                      <p className="form-error">{errors.cpassword}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="details guardian">
                <span className="title">Guardian Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="Father Name">Father Name</label>
                    <input
                      className="input"
                      name="fatherName"
                      type="text"
                      value={values.fatherName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Father Name"
                    />
                    {errors.fatherName && touched.fatherName ? (
                      <p className="form-error">{errors.fatherName}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Mother Name">Mother Name</label>
                    <input
                      className="input"
                      name="motherName"
                      type="text"
                      value={values.motherName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Mother Name"
                    />
                    {errors.motherName && touched.motherName ? (
                      <p className="form-error">{errors.motherName}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Phone Number">Guardian Number</label>
                    <input
                      className="input"
                      name="guardianNumber"
                      type="number"
                      value={values.guardianNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Guardian Number"
                    />
                    {errors.guardianNumber && touched.guardianNumber ? (
                      <p className="form-error">{errors.guardianNumber}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="details guardian">
                <span className="title">Education Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label htmlFor="Education Board">Level</label>
                    <input
                      className="input"
                      name="slcBoard"
                      type="text"
                      value="SLC/SEE"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Board Name"
                      disabled
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="Passed Year">Passed Year</label>
                    <input
                      className="input"
                      name="passedYear1"
                      type="number"
                      value={values.passedYear1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Passed Year"
                    />
                    {errors.passedYear1 && touched.passedYear1 ? (
                      <p className="form-error">{errors.passedYear1}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Obtained Marks">Marks (% or GPA)</label>
                    <input
                      className="input"
                      name="marks1"
                      type="text"
                      value={values.marks1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Obtained Marks"
                    />
                    {errors.marks1 && touched.marks1 ? (
                      <p className="form-error">{errors.marks1}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Education Board">Level</label>
                    <input
                      className="input"
                      name="highBoard"
                      type="text"
                      value="HSEB/+2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Board Name"
                      disabled
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="Passed Year">Passed Year</label>
                    <input
                      className="input"
                      name="passedYear2"
                      type="number"
                      value={values.passedYear2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Passed Year"
                    />
                    {errors.passedYear2 && touched.passedYear2 ? (
                      <p className="form-error">{errors.passedYear2}</p>
                    ) : null}
                  </div>

                  <div className="input-field">
                    <label htmlFor="Obtained Marks">Marks (% or GPA)</label>
                    <input
                      className="input"
                      name="marks2"
                      type="text"
                      value={values.marks2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Your Obtained Marks"
                    />
                    {errors.marks2 && touched.marks2 ? (
                      <p className="form-error">{errors.marks2}</p>
                    ) : null}
                  </div>
                  <div className="p-1 text-[#BE3455] font-medium">
                    <span className="text-gray-900 mr-2">
                      Already have an account?
                    </span>
                    <NavLink to="/login">Login</NavLink>
                  </div>
                </div>
                {Error && <ErrHandle error={Error} />}
                <button className="submitbtn hover:bg-[#9f2340]" type="submit">
                  <span className="btntext">Submit</span>
                  <FaHandshake className="ml-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
