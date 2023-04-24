import React, { useState } from "react";
import { Context } from "./Dashboard";

const ProfileTab = () => {
  const props = React.useContext(Context);
  let {
    fname,
    lname,
    dob,
    gender,
    mobileNumber,
    address,
    email,
    fatherName,
    motherName,
    guardianNumber,
    passedYear1,
    marks1,
    passedYear2,
    marks2,
  } = props;

  //convert date 2057-03-15T00:00:00.000Z into YYYY-MM-DD
  let strDate = `${dob}`;
  let convertedDate = new Date(strDate)
    .toLocaleDateString("fr-CA")
    .replaceAll("/", "-");

  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Personal Details",
      content: [
        {
          title: "Email Address",
          desc: `${email}`,
        },
        {
          title: "Full Name",
          desc: `${fname} ${lname}`,
        },
        {
          title: "Date of Birth",
          desc: `${convertedDate}`,
        },
        {
          title: "Gender",
          desc: `${gender}`,
        },
        {
          title: "Address",
          desc: `${address}`,
        },
        {
          title: "Contact Number",
          desc: `${mobileNumber}`,
        },
      ],
    },
    {
      id: 2,
      tabTitle: "Guardian Details",
      content: [
        {
          title: "Father Name",
          desc: `${fatherName}`,
        },
        {
          title: "Mother Name",
          desc: `${motherName}`,
        },
        {
          title: "Guardian Number",
          desc: `${guardianNumber}`,
        },
      ],
    },
    {
      id: 3,
      tabTitle: "Education Details",
      content: [
        {
          title: "SLC/SEE",
          desc: `Passed Year:- ${passedYear1} | Marks Obtained:- ${marks1}`,
        },
        {
          title: "+2",
          desc: `Passed Year:- ${passedYear2} | Marks Obtained:- ${marks2}`,
        },
      ],
    },
  ];
  return (
    <section className="p-4 text-center bg-white rounded-lg w-full mx-auto">
      <div className="text-gray-900 mb-4 flex flex-col flex-wrap justify-center items-center">
        <div className="text-center my-4">
          <h3 className="text-4xl font-semibold">
            Click to view
            <span className="text-cyan-600 tracking-wider"> Details</span>
          </h3>
        </div>
        <div className="tabs text-center">
          {tabs.map((tab, i) => (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={(e) => setCurrentTab(e.target.id)}
              className="bg-red-600 mx-8 my-4 p-2 cursor-pointer rounded-md hover:tracking-widest hover:font-bold"
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>

        <div className="content container">
          {tabs.map((tab, i) => (
            <div key={i}>
              {currentTab === `${tab.id}` && (
                <div className="min-w-full">
                  <table className="text-center w-full">
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Title
                        </th>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200 text-center min-w-full">
                      {tab.content.map((item, i) => (
                        <tr key={i} className="border-b-2 border-gray-900">
                          <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                            {item.title}
                          </td>
                          <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                            {item.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileTab;
