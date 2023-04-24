import React from "react";
import { VscFilePdf } from "react-icons/vsc";

const FeePdf = () => {
  return (
    <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
      <div className="relative flex flex-col h-full min-w-0 break-words bg-[#4D286D]/90 text-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <div className="flex flex-wrap -mx-3">
            <div className="flex items-center flex-none w-1/2 max-w-full px-3">
              <h6 className="mb-0 text-white text-xl font-semibold">
                Invoices
              </h6>
            </div>
            <div className="flex-none w-1/2 max-w-full px-3 text-right">
              <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-transparent border border-white border-solid rounded-lg cursor-pointer active:opacity-85 hover:-translate-y-px">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4 pb-0">
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 text-inherit rounded-xl">
              <div className="flex flex-col">
                <h6 className="mb-1 text-base font-semibold leading-normal  ">
                  2079-04-22
                </h6>
                <span className="text-xs leading-tight  dark:opacity-80">
                  Ref-code#01
                </span>
              </div>
              <div className="flex items-center text-base leading-normal /80">
                Rs 35000/-
                <button className="flex px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer ease-in text-base hover:-translate-y-px">
                  <VscFilePdf className="text-xl" />
                  PDF
                </button>
              </div>
            </li>
            <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
              <div className="flex flex-col">
                <h6 className="mb-1 text-base font-semibold leading-normal  ">
                  2079-07-29
                </h6>
                <span className="text-xs leading-tight  dark:opacity-80">
                  Ref-code#02
                </span>
              </div>
              <div className="flex items-center text-base leading-normal /80">
                Rs 20000/-
                <button className="flex px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer ease-in text-base hover:-translate-y-px">
                  <VscFilePdf className="text-xl" />
                  PDF
                </button>
              </div>
            </li>
            <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
              <div className="flex flex-col">
                <h6 className="mb-1 text-base font-semibold leading-normal  ">
                  2079-08-18
                </h6>
                <span className="text-xs leading-tight  dark:opacity-80">
                  Ref-code#03
                </span>
              </div>
              <div className="flex items-center text-base leading-normal /80">
                Rs 2700/-
                <button className="flex px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer ease-in text-base hover:-translate-y-px">
                  <VscFilePdf className="text-xl" />
                  PDF
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeePdf;
