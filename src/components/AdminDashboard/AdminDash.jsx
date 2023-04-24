import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import control from "../../assets/control.png";
import fontLogo from "../../assets/fontLogobg.png";
import axios from "axios";
import {
  HiViewGrid,
  HiUser,
  HiQrcode,
  HiCurrencyRupee,
  HiCalendar,
  HiFlag,
  HiLogout,
  HiCog,
} from "react-icons/hi";
// import AdminStd from "./AdminStd";

const AdminDash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const url = "/admin/admindashboard";
    const key = localStorage.getItem("key");
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        authorization: `${key}`,
      },
    };

    axios(url, options)
      .then((response) => {
        console.log("clientKey: ", response);
      })
      .catch((error) => {
        console.error(error);
        navigate("/adminLog");
      });
  }, []);

  // useEffect(() => {
  //   const admindasNav = async () => {
  //     try {
  //       const key = localStorage.getItem("key");
  //       console.log("key: ", key);
  //       const res = await axios.get(
  //         "http://localhost:5000/admin/admindashboard",
  //         {
  //           withCredentials: true,
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Headers": "*",
  //           headers: {
  //             authorization: `${key}`,
  //           },
  //         }
  //       );
  //       console.log("client key: ", res);
  //       console.log("client key: ", res.data.message);
  //     } catch (error) {
  //       console.log(error);
  //       navigate("/adminLog");
  //     }
  //   };
  //   admindasNav();
  // }, []);

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <HiViewGrid />, link: "adminoverview" },
    { title: "Profile", icon: <HiUser />, link: "adminprofile" },
    { title: "Attendance", icon: <HiQrcode />, link: "adminattendance" },
    {
      title: "Accounts",
      icon: <HiCurrencyRupee />,
      link: "adminfee",
      gap: true,
    },
    { title: "Time-table ", icon: <HiCalendar />, link: "singlenotice" },
    { title: "Notice", icon: <HiFlag />, link: "adminnotice" },
    { title: "Logout ", icon: <HiLogout />, link: "adminlogout", gap: true },
    { title: "Setting", icon: <HiCog />, link: "adminsetting" },
  ];

  return (
    <>
      <div method="GET">
        <div className="flex relative inset-0 inset-y-0 w-full min-h-screen mt-16">
          <div
            className={` ${
              open ? "w-72" : "w-20"
            } h-screen p-5 pt-8 relative duration-300`}
          >
            <img
              src={control}
              alt="404 error"
              className={`absolute cursor-pointer -right-3 top-8 w-7 border-[#BE3455]
           border-2 rounded-full  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={fontLogo}
                alt="404 error"
                className={`cursor-pointer bg-white w-6 duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-[#BE3455] origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                BMC_Admin
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-8" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <div className="bg-transparent text-base">
                    <Link to={Menu?.link} title="icon">
                      {Menu.icon}
                    </Link>
                  </div>

                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 p-2 hover:bg-white rounded-xl text-[#BE3455] font-medium text-sm tracking-wider`}
                  >
                    <Link to={Menu?.link}>{Menu?.title}</Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-h-full bg-gray-200 h-full flex-1 p-7 text-gray-900 transition-all duration-200 ease-in-out">
            <h2 className="text-base font-semibold">
              Welcome back
              <span className="text-[#BE3455] text-sm sm:text-xl ml-1">
                Super-User
              </span>
            </h2>
            {/* <AdminStd /> */}
            <br />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDash;
// export { Context };
