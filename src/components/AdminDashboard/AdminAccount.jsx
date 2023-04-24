import axios from "axios";
import React, { useState } from "react";
const AdminAccount = (props) => {
  const [stdId, setstdId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const manualFee = async (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/fee/updatefees",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: { studentId: stdId, Paid: amount, desc: desc },
    })
      .then((res) => {
        console.log(res.data.message);
        props.showAlert("text-green-800", `${res?.data?.message}`);
      })
      .catch((error) => {
        console.log(error);
        props.showAlert("text-red-700", `${error.response.data.message}`);
      });
  };
  return (
    <>
      {/* <!-- Breadcubs Area End Here --> */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* <!-- Add Notice Area Start Here --> */}
        <div className="lg:col-span-1">
          {/* <div className="card height-auto"> */}
          <div className="p-0 pb-30 border-0 h-auto bg-transparent">
            {/* <div className="card-body"> */}
            <div className="p-8 md:p-30 bg-white rounded-lg shadow-md">
              <div className="heading-layout1">
                {/* <div className="item-title"> */}
                <div className="text-gray-900 font-medium text-xl mb-2">
                  <h3>Add Fee</h3>
                </div>
              </div>
              <form
                className="new-added-form"
                method="POST"
                id="resetForm"
                onSubmit={manualFee}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-1 max-w-full gap-4">
                  <div className="mb-1">
                    <label className="mb-3 block">StudentID</label>
                    <input
                      type="text"
                      className="rounded-lg bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      required
                      placeholder="Enter Student unique ID"
                      onChange={(e) => {
                        setstdId(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Name</label>
                    <input
                      type="text"
                      className="rounded-lg bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Amount</label>
                    <input
                      type="number"
                      className="rounded-lg bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      onWheel={(e) => e.target.blur()}
                      min="10"
                      required
                      placeholder="Total Fee Paid"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Description</label>
                    {/* <input
                      type="text"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                    /> */}
                    <textarea
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 w-full p-2 rounded-lg"
                      name="desc"
                      id="desc"
                      cols="10"
                      rows="5"
                      placeholder="Payment Description"
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                  {/* <div className=" mb-1">
                    <label className="mb-3 block">Semester</label>
                    <select
                      name="semester"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2 rounded-lg"
                      required
                    >
                      <option value="null">None</option>
                      <option value="one">1st Semester</option>
                      <option value="two">2nd Semester</option>
                      <option value="three">3rd Semester</option>
                      <option value="four">4th Semester</option>
                      <option value="five">5th Semester</option>
                      <option value="six">6th Semester</option>
                      <option value="seven">7th Semester</option>
                      <option value="eight">8th Semester</option>
                    </select>
                  </div> */}
                  <div className=" mb-1">
                    <label className="mb-3 block">Date</label>
                    <input
                      type="date"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2 rounded-lg"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    {/* <i className="absolute top-14 right-8 text-base text-black"></i> */}
                  </div>
                  <div className="flex justify-around">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-lg text-white font-semibold bg-green-800 hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      type="reset"
                      className="bg-blue-900 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold"
                      onClick={() => {
                        document.getElementById("resetForm").reset();
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Add Notice Area End Here -->
                    <!-- All Notice Area Start Here --> */}
        <div className="lg:col-span-2">
          {/* <div className="card height-auto"> */}
          <div className="p-0 pb-30 border-0 h-auto bg-transparent">
            {/* <div className="card-body"> */}
            <div className="p-8 md:p-30 bg-white rounded-lg shadow-md">
              <div className="heading-layout1">
                <div className="text-gray-900 font-medium text-xl mb-2">
                  <h3>Total Fee Structure</h3>
                </div>
              </div>
              {/* <form className="mb-5">
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="lg:col-span-1 relative mb-2">
                    <input
                      type="text"
                      placeholder="Search by Semester ..."
                      className="bg-[#f0f1f3] text-gray-700 outline-[#BE3455]/70 h-12 w-full p-2 rounded-lg placeholder-gray-600"
                    />
                  </div>
                  <div className="lg:col-span-1 relative mb-2">
                    <input
                      type="text"
                      placeholder="Search by Name ..."
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2 rounded-lg placeholder-gray-600"
                    />
                  </div>
                  <div className="lg:col-span-1 relative mb-2">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-lg text-white font-semibold bg-red-700 hover:bg-[#BE3455]"
                    >
                      SEARCH
                    </button>
                  </div>
                </div>
              </form> */}
              <div className="max-h-[900px] overflow-y-scroll">
                <div className="flex-auto p-2 pt-6">
                  <table className="text-center w-full">
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          StudentID
                        </th>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Semester
                        </th>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Date
                        </th>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Name
                        </th>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Amount
                        </th>
                        <th className="text-sm font-medium text-white px-6 py-4">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200 text-center min-w-full">
                      {/* 1st row */}
                      <tr className="border-b-2 border-gray-900">
                        <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                          BMC-Ram-2079
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          2079-01-15
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Ram Shrestha
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Rs 45000
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem fee
                        </td>
                      </tr>
                      {/* 2nd row */}
                      <tr className="border-b-2 border-gray-900">
                        <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                          BMC-Sita-2079
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          2079-01-15
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Suta Rai
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Rs 100000
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          admission fee
                        </td>
                      </tr>
                      {/* 3rd row */}
                      <tr className="border-b-2 border-gray-900">
                        <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                          BMC-Bibek-2079
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          2079-01-18
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Bibek Adhikari
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Rs 2700
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          exam form fee
                        </td>
                      </tr>

                      {/* repeat */}
                      {/* 1st row */}
                      <tr className="border-b-2 border-gray-900">
                        <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                          BMC-Ram-2079
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          2079-01-15
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Ram Shrestha
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Rs 45000
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem fee
                        </td>
                      </tr>
                      {/* 2nd row */}
                      <tr className="border-b-2 border-gray-900">
                        <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                          BMC-Sita-2079
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          2079-01-15
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Suta Rai
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Rs 100000
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          admission fee
                        </td>
                      </tr>
                      {/* 3rd row */}
                      <tr className="border-b-2 border-gray-900">
                        <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                          BMC-Bibek-2079
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          1st sem
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          2079-01-18
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Bibek Adhikari
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          Rs 2700
                        </td>
                        <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                          exam form fee
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAccount;
