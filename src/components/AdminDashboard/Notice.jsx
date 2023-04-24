import React, { useState } from "react";
import axios from "axios";
const Notice = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState();
  const [noticeType, setNoticeType] = useState("");
  const [semester, setSemester] = useState("");

  const noticePublish = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", photo);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("noticetype", noticeType);
    formData.append("semester", semester);

    console.log(formData);

    axios
      .post(`http://localhost:5000/admin/uploadnotice`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res);
        props.showAlert("text-green-800", `${res?.data?.message}`);
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
                  <h3>Create A Notice</h3>
                </div>
              </div>
              <form
                className="new-added-form"
                id="resetForm"
                method="POST"
                onSubmit={noticePublish}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-1 max-w-full gap-4">
                  <div className="mb-1">
                    <label className="mb-3 block">Title</label>
                    <input
                      type="text"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      placeholder="Enter Notice title here"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Description</label>
                    <textarea
                      type="text"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 w-full p-2"
                      name="desc"
                      id="desc"
                      cols="10"
                      rows="5"
                      placeholder="Notice Description"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Upload Photo</label>
                    <input
                      type="file"
                      id="noticeUpload"
                      accept="image/jpeg/jpg/png"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      onChange={(e) => setPhoto(e.target.files[0])}
                    />
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Notice Type </label>
                    <select
                      name="notice-type"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      required
                      onChange={(e) => setNoticeType(e.target.value)}
                    >
                      <option value="null">Select</option>
                      <option value="examForm">Exam Form</option>
                      <option value="result">Exam Result</option>
                      <option value="announcement">Announcement</option>
                      <option value="others">Others</option>
                    </select>
                    {/* <i className="absolute top-14 right-8 text-base text-black"></i> */}
                  </div>
                  <div className=" mb-1">
                    <label className="mb-3 block">Semester</label>
                    <select
                      name="semester"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                      required
                      onChange={(e) => setSemester(e.target.value)}
                    >
                      <option value="all">semester</option>
                      <option value="first">first</option>
                      <option value="second">second</option>
                      <option value="third">third</option>
                      <option value="fourth">fourth</option>
                      <option value="fifth">fifth</option>
                      <option value="sixth">sixth</option>
                      <option value="seventh">seventh</option>
                      <option value="eight">eight</option>
                    </select>
                    {/* <i className="absolute top-14 right-8 text-base text-black"></i> */}
                  </div>
                  {/* <div className=" mb-1">
                    <label className="mb-3 block">Date</label>
                    <input
                      type="date"
                      className="bg-[#f0f1f3] text-gray-900 outline-[#BE3455]/70 h-12 w-full p-2"
                    />
                    
                  </div> */}
                  <div className="flex justify-around">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-lg text-white font-semibold bg-green-800 hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      type="reset"
                      className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-bold"
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
                  <h3>Notice Board</h3>
                </div>
              </div>
              {/* <form className="mb-5">
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="lg:col-span-1 relative mb-2">
                    <input
                      type="date"
                      placeholder="Search by Date ..."
                      className="bg-[#f0f1f3] text-gray-700 outline-[#BE3455]/70 h-12 w-full p-2 rounded-lg placeholder-gray-600"
                    />
                  </div>
                  <div className="lg:col-span-1 relative mb-2">
                    <input
                      type="text"
                      placeholder="Search by Title ..."
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
              <div className="max-h-[900px] overflow-y-scroll pr-5">
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-pink-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-cyan-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-orange-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-cyan-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-pink-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-orange-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
                <div className="border-b-2 border-[#ededed] pb-4 mb-5">
                  <div className="inline-block text-sm text-white py-2 px-3 rounded-2xl mb-3 bg-cyan-600">
                    16 June, 2019
                  </div>
                  <h6 className="font-medium mb-2 text-gray-800">
                    <a href="#">
                      Great School Great School manag mene esom text of the
                      printing Great School manag mene esom text of the printing
                      manag mene esom text of the printing.
                    </a>
                  </h6>
                  <div className="text-xs text-[#646464]">
                    Posted by: <span className="text-[#a4a4a4]">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
