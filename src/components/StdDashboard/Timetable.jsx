import React from "react";
import { FaBookReader, FaCalendarAlt } from "react-icons/fa";
import classSchedule from "../../assets/routine.jpg";
const Timetable = () => {
  const calstyle = {
    overflow: "hidden",
    width: "810px",
    height: "850px",
  };
  return (
    <>
      <div className="w-full h-full px-6 py-6 mx-auto">
        <section>
          <div className="relative flex flex-col min-w-0 break-words bg-[#BE3455] shadow-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-2">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <h5 className="font-bold text-2xl text-white">
                      Class Schedule
                    </h5>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl from-white to-gray-50">
                    <FaBookReader className="leading-none text-lg relative ml-3.5 top-3.5 text-[#BE3455]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* schedule image */}
          <div className="relative w-3/4 mx-auto my-5">
            {/* <div className="relative flex flex-col flex-auto min-w-0 p-2 mx-6 overflow-hidden break-words bg-white border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border"> */}
            <div className="flex flex-wrap -mx-3 justify-center items-center">
              <img
                src={classSchedule}
                alt="profile_image"
                className="rounded-xl border-2 border-[#BE3455]"
              />
            </div>
            {/* </div> */}
          </div>
        </section>

        <div className="relative flex flex-col min-w-0 break-words bg-[#BE3455] shadow-xl rounded-2xl bg-clip-border my-4">
          <div className="flex-auto p-2">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <h5 className="font-bold text-2xl text-white">
                    Nepali Calender
                  </h5>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl from-white to-gray-50">
                  <FaCalendarAlt className="leading-none text-lg relative ml-3.5 top-3.5 text-[#BE3455]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next section */}

        <section>
          <div className="relative mx-auto">
            <div className="flex flex-wrap -mx-3 justify-center items-center">
              <iframe
                title="calender"
                src="https://www.hamropatro.com/widgets/calender-full.php"
                style={calstyle}
                allowtransparency="true"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timetable;
