import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";
// import { Context } from "./Dashboard";

const QrReadandTable = ({ showAlert }) => {
  // const props = React.useContext(Context);
  // let { studentId } = props;
  const studentId = localStorage.getItem("studentID");
  const [scannedData, setScannedData] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [Error, setError] = useState(null);
  const [attendanceData, setAttendanceData] = useState(null);

  //getattendance data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        // console.log("client token:", token);
        const res = await axios.get("/student/getAttendance", {
          withCredentials: true,
          headers: {
            authorization: `${token}`,
          },
        });
        // console.log("Attendance: ", res);
        // let updatedData = {};
        // Object.entries(res.data.data)
        //   .slice(0, 30)
        //   .forEach(([date, attendance]) => {
        //     updatedData[date] = attendance;
        //   });
        // setAttendanceData(updatedData);
        console.log("Attendance: ", res);
        let updatedData = {};
        if (res.data.data != null && res.data.data !== undefined) {
          Object.entries(res.data.data)
            .slice(0, 30)
            .forEach(([date, attendance]) => {
              updatedData[date] = attendance;
            });
          setAttendanceData(updatedData);
          console.log(updatedData);
        } else {
          updatedData = { null: { status: null, time: "null", _id: null } };
          console.log(updatedData);
          setAttendanceData(updatedData);
        }
      } catch (error) {
        console.log(error);
        alert("Please try again");
      }
    };
    fetchData();
  }, []);

  //scan qrcode
  const toggleScanner = () => {
    setShowScanner(!showScanner);
    // {
    //   showScanner === false &&
    //     showAlert(
    //       "text-purple-700",
    //       "Please Turn On Your Device Location for Best Result!"
    //     );
    // }
  };

  //QrReader ko
  const camError = (error) => {
    if (error) {
      console.log(error);
      showAlert("text-red-700", `${error}`);
      // setError(error);
    }
  };

  const camScan = (data) => {
    if (data) {
      setScannedData(data);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => setError(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
      );

      sendData(scannedData, latitude, longitude);
    }
  };

  const sendData = async (scannedData, latitude, longitude) => {
    if (latitude && longitude) {
      if (scannedData === studentId) {
        axios({
          method: "POST",
          url: "/student/attendance",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          data: {
            scannedData: scannedData,
            latitude: latitude,
            longitude: longitude,
          },
        })
          .then((res) => {
            console.log(res);
            console.log(res.data.message);

            setError(res.data.message);
            showAlert("text-green-800", `${res.data.message}`);
            // alert(res.data.message);
            setShowScanner(!showScanner);
            if (res.status === 200) {
              window.location.reload();
            }
          })
          .catch((error) => {
            console.log(error);
            console.log(error.response.data.error);
            // console.log(error.response.data.message);
            setError(error.response.data.error);
            showAlert("text-red-800", `${error.response.data.error}`);
            // alert(error.response.data.error);
            setShowScanner(!showScanner);
          });
      }
    }
  };
  return (
    <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-4 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div className="flex flex-wrap -mx-3">
            <div className="max-w-full px-3 md:w-1/2 md:flex-none">
              <h6 className="mb-0 text-[#BE3455] text-lg font-semibold">
                Record Your Attendance
              </h6>
            </div>
            <div className="flex items-center justify-end max-w-full px-3 dark:text-white/80 md:w-1/2 md:flex-none">
              <div className="flex items-center">
                <button
                  onClick={toggleScanner}
                  type="button"
                  className="inline-block px-8 py-2 mb-2 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-base tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                >
                  Scan QR
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4 pt-6">
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            {showScanner && (
              <div className="flex justify-center items-center text-center my-4">
                <QrReader
                  delay={200}
                  onError={camError}
                  onScan={camScan}
                  facingMode={"user"}
                  legacyMode={false}
                  style={{ width: "50%" }}
                />
              </div>
            )}
            {scannedData && (
              <li className="relative flex mt-4 p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-100 dark:bg-slate-850">
                <div className="flex flex-col">
                  {Error && (
                    <h4 className="leading-normal text-base text-gray-900 my-2">
                      Error: {Error}
                    </h4>
                  )}
                  <h4 className="leading-4 text-xl text-[#BE3455] my-2">
                    Cam Scanned Result: {scannedData}
                  </h4>
                </div>
              </li>
            )}
            {/* <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-100 dark:bg-slate-850">
              <div className="flex flex-col">
                <h6 className="mb-4 text-sm leading-normal text-gray-900">
                  Lucas Harper
                </h6>
                <span className="mb-2 text-xs leading-tight text-gray-900/80">
                  Company Name:
                  <span className="font-semibold  text-gray-900 sm:ml-2">
                    Stone Tech Zone
                  </span>
                </span>
                <span className="mb-2 text-xs leading-tight text-gray-900/80">
                  Email Address:
                  <span className="font-semibold  text-gray-900 sm:ml-2">
                    lucas@stone-tech.com
                  </span>
                </span>
                <span className="text-xs leading-tight text-gray-900/80">
                  VAT Number:
                  <span className="font-semibold  text-gray-900 sm:ml-2">
                    FRB1235476
                  </span>
                </span>
              </div>
              <div className="ml-auto text-right">
                <a
                  className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text"
                  href="/home"
                >
                  <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-orange-600 bg-x-25 bg-clip-text"></i>
                  Delete
                </a>
                <a
                  className="inline-block text-gray-900 px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 "
                  href="/home"
                >
                  <i
                    className="mr-2 fas fa-pencil-alt text-slate-700"
                    aria-hidden="true"
                  ></i>
                  Edit
                </a>
              </div>
            </li> */}

            {/* YAha table starts try gareko */}
            <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-100 dark:bg-slate-850">
              <div className="min-w-full">
                <table className="text-center w-full">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th className="text-sm font-medium text-white px-6 py-4">
                        Date
                      </th>
                      <th className="text-sm font-medium text-white px-6 py-4">
                        Attendance Record
                      </th>
                      <th className="text-sm font-medium text-white px-6 py-4">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-200 text-center min-w-full">
                    {/* 1st row */}
                    {attendanceData &&
                      Object.entries(attendanceData).map(
                        ([date, attendance]) => (
                          <tr className="border-b-2 border-gray-900" key={date}>
                            <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                              {date}
                            </td>
                            <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                              {attendance.status ? "Present" : "Absent"}
                            </td>
                            <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                              {attendance.time}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </li>
            {/* Table ends */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QrReadandTable;
