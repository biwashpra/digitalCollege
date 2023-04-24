import React from "react";
import { FaCheckSquare, FaStarOfLife, FaCircle } from "react-icons/fa";
import { attendanceData } from "./AttendanceData";

const AdminAttendance = () => {
  return (
    <>
      <div className="w-full h-full px-6 py-6 mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-semibold">
            Attendance <span className="text-cyan-600">Report</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">
            Monthly attendance of all students
          </p>
        </div>
        {/* table goes here */}
        <div className="max-w-screen-xl overflow-x-scroll mx-auto mt-2">
          <table className="table table-striped table-bordered text-base overflow-hidden">
            <thead className="border-2 border-gray-700">
              <tr className="bg-gray-50">
                <th className="px-8 py-2 text-center">Students</th>
                {[...Array(30).keys()].map((day) => (
                  <th key={day} className="px-8 py-2">
                    {day + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-2 border-gray-700">
              {attendanceData.map((student) => (
                <tr
                  key={student.name}
                  className="font-semibold p-2 border-2 border-teal-700"
                >
                  <td className="px-8 py-2 text-center">{student.name}</td>
                  {student.attendance.map((present, index) => (
                    <td key={index} className="px-6 py-2">
                      {present === null ? (
                        <FaCircle className="text-gray-800 text-xl ml-2" />
                      ) : present ? (
                        // <i className="fas fa-check text-green-500"></i>
                        <FaCheckSquare className="text-green-600 text-xl ml-2" />
                      ) : (
                        <FaStarOfLife className="text-red-600 text-xl ml-2" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminAttendance;
