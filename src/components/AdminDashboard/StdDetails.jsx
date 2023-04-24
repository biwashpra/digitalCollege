import React from "react";
import profilepic from "../../assets/pp.jpg";
import { FaRegEdit, FaDownload, FaWindowClose } from "react-icons/fa";

const StdDetails = () => {
  return (
    // Student Details Area Start Here
    <div className="p-0 pb-30 border-0 h-auto bg-transparent">
      <div className="p-15 py-8 md:p-30 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center bg-transparent border-0 mb-12">
          <h3 className="text-gray-900 text-xl font-medium mb-0 mx-4">
            About Me
          </h3>
        </div>
        <div className="flex flex-col m-8 md:flex-row justify-around item-center">
          {/* or md ma block ie, md:block */}
          <div className="flex-1 ml-4 mb-4 md:mb-0">
            <div className="min-w-[400px]">
              <img
                src={profilepic}
                alt="student"
                className="w-1/2 mx-auto md:mx-0 h-auto"
              />
            </div>
          </div>
          <div className="flex-1 mx-auto md:mr-20">
            <div className="flex justify-between">
              <h3 className="text-[#BE3455] font-medium text-2xl text-center md:text-left">
                Biwash Pradhan
              </h3>
              <div>
                <ul className="flex justify-around mr-1 space-x-8 list-none">
                  <li>
                    <a
                      href="#"
                      className="block bg-gray-200 rounded-md text-gray-900 text-sm font-medium py-2 px-3 transition duration-300 ease-out hover:bg-[#ff9d01] hover:text-white"
                    >
                      {/* <i className="far fa-edit"></i> */}
                      <FaRegEdit size="20px" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block bg-gray-200 rounded-md text-gray-900 text-sm font-medium py-2 px-3 transition duration-300 ease-out hover:bg-[#ff9d01] hover:text-white"
                    >
                      <FaDownload size="20px" />
                    </a>
                  </li>
                  <li className="mr-0">
                    <a
                      href="#"
                      className="block bg-gray-200 rounded-md text-gray-900 text-sm font-medium py-2 px-3 transition duration-300 ease-out hover:bg-[#ff9d01] hover:text-white"
                    >
                      <FaWindowClose size="20px" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="w-1/2 text-[#ff9d01] font-semibold text-xl md:w-4/5 lg:w-full my-4">
              Student Of Birendra Memorial College
            </p>
            <div className="info-table table-responsive">
              <table className="table w-1/2 md:w-70 lg:w-full whitespace-nowrap">
                <tbody>
                  <tr>
                    <td>Name:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      Biwash Pradhan
                    </td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      Male
                    </td>
                  </tr>
                  <tr>
                    <td>Father Name:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      Steve Jones
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Name:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      Naomi Rose
                    </td>
                  </tr>
                  <tr>
                    <td>Date Of Birth:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      2057-03-15
                    </td>
                  </tr>
                  <tr>
                    <td>Religion:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      Hindu
                    </td>
                  </tr>
                  <tr>
                    <td>Father Occupation:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      React developer
                    </td>
                  </tr>
                  <tr>
                    <td>E-mail:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      bws3883@gmail.com
                    </td>
                  </tr>
                  <tr>
                    <td>Semester:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      7th semester
                    </td>
                  </tr>
                  <tr>
                    <td>Section:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      Pink
                    </td>
                  </tr>
                  <tr>
                    <td>Roll:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      21423
                    </td>
                  </tr>
                  <tr>
                    <td>Address:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      House #10, Road #6, Australia
                    </td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td className="border-none py-2 md:px-5 font-medium text-gray-800">
                      + 88 98568888418
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StdDetails;
