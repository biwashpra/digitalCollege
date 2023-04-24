import React from "react";
import colz from "../../assets/fontLogobg.png";
import Khaltilogo from "../../assets/R.png";
import { MdOutlinePaid, MdPayments } from "react-icons/md";

const FeeCards = ({ studentId, fname, lname }) => {
  return (
    <>
      {/* college card */}
      <div className="w-full max-w-full px-3 mb-6 xl:mb-0 xl:w-1/2 xl:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-transparent shadow-xl rounded-2xl bg-clip-border text-white">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{
              backgroundImage:
                "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg')",
            }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 opacity-80"></span>
            <div className="relative z-10 flex-auto p-4">
              <span className="flex">
                <img className="w-12" src={Khaltilogo} alt="khaltilogo" />
                <span className="mt-4 text-base">Khalti-Pay</span>
              </span>
              <h5 className="pb-2 mt-6 mb-12 text-white">
                {studentId}
                {/* 4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852 */}
              </h5>
              <div className="flex">
                <div className="flex">
                  <div className="mr-6">
                    <p className="mb-0 text-sm leading-normal text-white opacity-80">
                      Card Holder
                    </p>
                    <h6 className="mb-0 text-white">{fname + " " + lname}</h6>
                  </div>
                  <div>
                    <p className="mb-0 text-sm leading-normal text-white opacity-80">
                      College
                    </p>
                    <h6 className="mb-0 text-white">
                      Birendra Memorial College
                    </h6>
                  </div>
                </div>
                <div className="flex items-end justify-end w-1/5 ml-auto">
                  <img
                    className="w-3/5 mt-2 rounded-full bg-white"
                    src={colz}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards dinxa */}
      <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 mx-6 mb-0 flex justify-center items-center text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="w-16 h-16 flex justify-center items-center text-center bg-center shadow-sm icon bg-gradient-to-tl from-blue-500 to-[#BE3455] rounded-xl">
                  <MdPayments className="relative text-2xl leading-none text-white opacity-100" />
                </div>
              </div>
              <div className="flex-auto p-4 pt-0 text-center">
                <h6 className="mb-0 text-center dark:text-[#BE3455]">
                  Total Dues
                </h6>
                <span className="text-xs leading-tight text-gray-800">
                  Belong Interactive
                </span>
                <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/50 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                <h5 className="mb-0 text-gray-900">
                  {/* for RS &#8360; */}
                  &#8377; 46377 /-
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 mx-6 mb-0 flex justify-center items-center text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="w-16 h-16 flex justify-center items-center text-center bg-center shadow-sm icon bg-gradient-to-tl from-blue-500 to-[#BE3455] rounded-xl">
                  <MdOutlinePaid className="relative text-3xl leading-none text-white opacity-100" />
                </div>
              </div>
              <div className="flex-auto p-4 pt-0 text-center">
                <h6 className="mb-0 text-center dark:text-[#BE3455]">
                  Total Paid
                </h6>
                <span className="text-xs leading-tight text-gray-800">
                  Freelance Payment
                </span>
                <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                <h5 className="mb-0 text-gray-900"> &#8377; 20000 /-</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeCards;
