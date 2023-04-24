import React, { useState, useEffect } from "react";
import AttCard from "./AttCard";
import QrReadandTable from "./QrReadandTable";
import QrShowandDownload from "./QrShowandDownload";
// import { Context } from "./Dashboard";
import axios from "axios";

const Attendance = ({ showAlert }) => {
  // const props = React.useContext(Context);
  // let { studentId } = props;

  const [present, setPresent] = useState();
  const [absent, setAbsent] = useState();
  const [total, setTotal] = useState();

  //getattendancereport data
  useEffect(() => {
    const studentId = localStorage.getItem("studentID");
    console.log("data:", studentId);
    axios({
      method: "POST",
      url: "/student/getattendancereport",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      data: { studentId: studentId },
    })
      .then((res) => {
        setPresent(res.data.pcount);
        setAbsent(res.data.acount);
        setTotal(res.data.total);
      })
      .catch((error) => {
        console.log("report", error);
      });
  }, []);

  const calculate = () => {
    let calTotal = total * (1 / 2);
    let calTotal2 = total * (2 / 3);
    if (present >= calTotal && present < calTotal2) {
      return "Good";
    }
    if (present >= calTotal2) {
      return "Best";
    }
    if (absent >= present) {
      return "Bad";
    }
  };

  return (
    <>
      <section className="w-full h-full">
        {/* <!-- row 1 --> */}
        <div className="flex flex-wrap -mx-3">
          {/* <!-- card1 --> */}
          <AttCard
            att="Present"
            desc={present}
            from="from-green-600"
            to="to-green-900"
          />

          {/* <!-- card2 --> */}
          <AttCard
            att="Absent"
            desc={absent}
            from="from-red-600"
            to="to-orange-600"
          />

          {/* <!-- card3 --> */}
          <AttCard
            att="Total"
            desc={total}
            from="from-gray-600"
            to="to-gray-900"
          />

          {/* <!-- card4 --> */}
          <AttCard
            att="Remarks"
            desc={calculate()}
            from="from-purple-600"
            to="to-purple-900"
          />
        </div>

        {/* next bhag */}
        <div className="flex flex-wrap -mx-3">
          {/* Left bhag */}
          <QrReadandTable showAlert={showAlert} />

          {/* Right bhag */}
          <QrShowandDownload />
        </div>
      </section>
    </>
  );
};

export default Attendance;
