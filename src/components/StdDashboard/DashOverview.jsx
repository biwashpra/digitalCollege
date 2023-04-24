import React, { useState, useEffect } from "react";
import AttCard from "./AttCard";
import BookCards from "./BookCards";
// import { Context } from "./Dashboard";
import axios from "axios";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const DashOverview = () => {
  // const props = React.useContext(Context);
  // let { studentId } = props;

  const [present, setPresent] = useState();
  const [absent, setAbsent] = useState();
  const [total, setTotal] = useState();

  //getattendancereport data
  useEffect(() => {
    const studentId = localStorage.getItem("studentID");
    console.log("data: ", studentId);
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
  //crousel slide items
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  //crousel state and prev & next options
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="w-full h-full">
        <section>
          <div className="w-full px-6 py-6 mx-auto">
            {/* Attendance Card */}
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
            {/* Crousel for pictures with URL */}
            <div className="w-full max-w-full mt-6 mb-4">
              <div className="flex min-w-0 flex-col rounded-2xl border-4 border-[#BE3455] bg-gray-600">
                <div className="py-2.5">
                  <div className="flex-1 flex items-center justify-center h-full px-3">
                    <div className="text-3xl p-2 bg-black/20 text-white cursor-pointer translate-x-12 rounded-full">
                      <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {
                      <img
                        src={`${slides[currentIndex].url}`}
                        alt="404 Error"
                        className="md:w-full h-1/2 object-cover rounded-2xl"
                      />
                    }
                    <div className="bg-black/20 text-white text-3xl rounded-full p-2 cursor-pointer -translate-x-12">
                      <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses sort by semester */}
        <BookCards />

        {/* Notices */}
        {/* <div>
          <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-900 mt-4">
            Recent Notices:-
          </h1>
          <section className="text-gray-800 body-font p-2 rounded-lg shadow sm:p-3 dark:bg-white dark:border-[#BE3455] border-x-2 my-1">
            <div className="mx-auto container">
              <div className="flex flex-wrap">
                <p className="p-4">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, molestiae unde itaque distinctio nesciunt accusamus
                  iusto obcaecati exercitationem voluptas dolores aut fuga,
                  voluptates soluta alias perspiciatis, dignissimos expedita
                  numquam possimus."
                </p>
              </div>
            </div>
          </section>
          <section className="text-gray-800 body-font p-2 rounded-lg shadow sm:p-3 dark:bg-white dark:border-[#BE3455] border-x-2 my-1">
            <div className="mx-auto container">
              <div className="flex flex-wrap">
                <p className="p-4">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, molestiae unde itaque distinctio nesciunt accusamus
                  iusto obcaecati exercitationem voluptas dolores aut fuga,
                  voluptates soluta alias perspiciatis, dignissimos expedita
                  numquam possimus."
                </p>
              </div>
            </div>
          </section>
        </div> */}
      </div>
    </>
  );
};

export default DashOverview;
