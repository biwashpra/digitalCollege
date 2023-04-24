import React, { useState, useEffect } from "react";
import noticePic from "../../assets/sem7.png";
import axios from "axios";
const StdNotice = () => {
  const [notice, setNotice] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [semester, setSemester] = useState("");
  const [type, setType] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  useEffect(() => {
    const url = "http://localhost:5000/admin/getnotice";
    axios
      .get(url, {
        headers: { "Content-Type": "multipart/form-data" },
        responseType: "blob",
      })
      .then((res) => {
        // console.log(res.data);
        var imageUrl = URL.createObjectURL(res.data);
        setNotice(imageUrl);
      });
  }, []);

  useEffect(() => {
    const url = "http://localhost:5000/admin/getnoticeinfo";
    axios.get(url).then((res) => {
      console.log(res);
      setTitle(res.data.title);
      setDesc(res.data.description);
      setType(res.data.noticetype);
      setSemester(res.data.semester);
      setCreatedAt(res.data.createdAt);
    });
  }, []);

  let strDate = `${createdAt}`;
  let convertedDate = new Date(strDate)
    .toLocaleDateString("fr-CA")
    .replaceAll("/", "-");
  return (
    <>
      <div className="w-full max-w-full mt-6 mb-4">
        <div className="flex min-w-0 flex-col">
          <div className="flex-none  max-w-full">
            <div>
              <h5 className="font-bold text-2xl text-white bg-blue-500 p-4 rounded-xl">
                Recent Notice: -
              </h5>
            </div>
          </div>
          <div className="py-2.5">
            <div className="flex items-center justify-center h-full w-full px-3 py-5">
              {/* yaha dekhi card */}
              <div className="max-w-2xl rounded overflow-hidden shadow-lg">
                <img
                  className="w-full rounded-lg h-1/2"
                  // src={notice}
                  src={notice ? notice : noticePic}
                  alt="notice recently added"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-4">
                    Title:{" "}
                    <span className="text-[#BE3455] text-2xl">{title}</span>
                  </div>
                  <p className="text-[#BE3455] font-semibold text-lg">
                    Description:{" "}
                    <span className="text-black font-normal text-lg">
                      {desc}
                    </span>
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-base font-semibold text-gray-100 mr-2 mb-2">
                    Notice type: {type}
                  </span>
                  <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-base font-semibold text-gray-100 mr-2 mb-2">
                    semester: {semester}
                  </span>
                  <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-base font-semibold text-gray-100 mr-2 mb-2">
                    createdAt: {convertedDate}
                  </span>
                </div>
              </div>
              {/* <img
                src={bgprofile}
                alt="404 Error"
                className="md:w-full h-1/2 object-cover rounded-2xl border-4 border-[#BE3455] bg-gray-600"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StdNotice;
