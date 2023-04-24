import React from "react";

const Alert = ({ alert }) => {
  console.log("alert:", alert);
  return (
    <div className="absolute bottom-0 inset-x-0 z-[999]">
      {alert && (
        <div
          className={`bg-gray-200 ${alert.type} mb-4 rounded-lg px-6 py-8 font-bold text-center text-lg`}
        >
          {alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
