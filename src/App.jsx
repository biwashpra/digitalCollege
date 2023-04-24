import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Url/Registration/Registration";
import Login from "./components/Url/Login/Login";
import About from "./components/Url/About";
import Contact from "./components/Url/Contact";
import Features from "./components/Url/Features";
import Home from "./components/Url/Home";
import WebNavbar from "./components/WebNavbar";
import PageNotFound from "./components/PageNotFound";
// Student Dashboard Link
import Dashboard from "./components/StdDashboard/Dashboard";
import DashOverview from "./components/StdDashboard/DashOverview";
import Profile from "./components/StdDashboard/Profile";
import Attendance from "./components/StdDashboard/Attendance";
import Account from "./components/StdDashboard/Account";
import Timetable from "./components/StdDashboard/Timetable";
import Logout from "./components/StdDashboard/Logout";
import Setting from "./components/StdDashboard/Setting";
import AdminDash from "./components/AdminDashboard/AdminDash";
import AdminStd from "./components/AdminDashboard/AdminStd";
import AdminSetting from "./components/AdminDashboard/AdminSetting";
import AdminLogout from "./components/AdminDashboard/AdminLogout";
import StdDetails from "./components/AdminDashboard/StdDetails";
import Notice from "./components/AdminDashboard/Notice";
import SingleNotice from "./components/AdminDashboard/SingleNotice";
import AdminAccount from "./components/AdminDashboard/AdminAccount";
import Alert from "./components/Alert";
import AdminLogin from "./components/Url/Login/AdminLogin";
import StdNotice from "./components/StdDashboard/StdNotice";
import AdminAttendance from "./components/AdminDashboard/AdminAttendance";

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Alert alert={alert} />
      <Router>
        <WebNavbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/registration"
            element={<Registration showAlert={showAlert} />}
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="overview" element={<DashOverview />} />
            <Route path="profile" element={<Profile showAlert={showAlert} />} />
            <Route
              path="attendance"
              element={<Attendance showAlert={showAlert} />}
            />
            <Route path="fee" element={<Account />} />
            <Route path="schedule" element={<Timetable />} />
            <Route path="notice" element={<StdNotice />} />
            <Route path="logout" element={<Logout />} />
            <Route path="setting" element={<Setting showAlert={showAlert} />} />
          </Route>
          <Route
            path="/adminLog"
            element={<AdminLogin showAlert={showAlert} />}
          />
          <Route path="/admin" element={<AdminDash />}>
            <Route path="adminoverview" element={<AdminStd />} />
            <Route path="adminprofile" element={<StdDetails />} />
            <Route
              path="adminnotice"
              element={<Notice showAlert={showAlert} />}
            />
            <Route path="adminattendance" element={<AdminAttendance />} />
            <Route
              path="adminfee"
              element={<AdminAccount showAlert={showAlert} />}
            />
            <Route
              path="adminsetting"
              element={<AdminSetting showAlert={showAlert} />}
            />
            <Route path="adminlogout" element={<AdminLogout />} />
            <Route path="singlenotice" element={<SingleNotice />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
