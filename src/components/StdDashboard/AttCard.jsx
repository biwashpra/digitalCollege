import React from "react";

const AttCard = (props) => {
  return (
    <>
      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-base font-semibold leading-normal uppercase text-gray-900">
                    {props.att}
                  </p>
                  <h5 className="mb-2 font-bold text-2xl text-[#BE3455]">
                    {props.desc}
                  </h5>
                  {/* <p className="mb-0 text-gray-900">
                    <span className="text-base font-bold leading-normal text-emerald-500 mr-1">
                      55%
                    </span>
                    since beginning
                  </p> */}
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div
                  className={`inline-block w-12 h-12 text-center rounded-full bg-gradient-to-tl ${props.from} ${props.to}`}
                >
                  {/* Yo span nahuda ni hunxa */}
                  <span className="leading-none text-lg relative top-3.5"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttCard;
