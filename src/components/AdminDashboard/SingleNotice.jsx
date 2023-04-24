import React from "react";
import sem from "../../assets/sem7.png";

const SingleNotice = () => {
  return (
    <div className="p-0 pb-30 border-0 h-auto bg-transparent">
      <div className="p-15 py-8 md:p-30 bg-white rounded-lg shadow-md">
        <div className="grid text-center justify-center px-8 mb-5 text-gray-900">
          <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-cyan-600">
            16 June, 2019
            <span className="text-xl font-medium mx-4">Notice</span>
            <div className="text-xs mt-2 text-gray-300">
              Posted by: <span className="text-gray-100">Admin</span>
            </div>
          </div>
          <h2 className="text-3xl font-semibold my-8 underline text-[#BE3455]">
            Title: Exam Routine
          </h2>
          <h6 className="font-medium mb-6 text-gray-800">
            Great School Great School manag mene esom text of the printing Great
            School manag mene esom text of the printing manag mene esom text of
            the printing.
          </h6>
          <img src={sem} alt="pdf" className="mx-auto block" />
        </div>
      </div>
    </div>
  );
};

export default SingleNotice;
