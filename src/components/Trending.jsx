import React from "react";
import {
  IoQrCodeOutline,
  IoCashOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
const Trending = () => {
  return (
    <section className="text-gray-900 font-medium bg-gray-200 body-font">
      <div className="lg:max-w-[1440px] md:max-w-[900px] px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-3xl font-semibold title-font mb-4 text-cyan-500">
            Some Trending Features
          </h1>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-cyan-500 text-[#BE3455] flex-shrink-0">
            <IoQrCodeOutline
              className="sm:w-16 sm:h-16 w-10 h-10"
              size="56px"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#BE3455] font-semibold text-lg title-font mb-2">
              Qr Attendance Management
            </h2>
            <p className="leading-relaxed text-base">
              We provide Qr based Attendance system which is simple and flexible
              to use. This system makes the use of{" "}
              <strong>QR code and GEO-LOCATION</strong> to get the attedance of
              student. This is a reliable system because the geo-location
              feature allows student to be within the area of college or
              classroom for the attendance to be valid.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#BE3455] font-semibold text-lg title-font mb-2">
              Fee management System (KHALTI)
            </h2>
            <p className="leading-relaxed text-base">
              The World is changing to digital. We provide a convinent and
              online solution to fee payment system. Student can use our
              platform to <strong>pay fee online using KHALTI</strong> as a
              payment service. Its just a one click process which is fast,
              secure and easy for both student and administration.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-cyan-500 text-[#BE3455] flex-shrink-0">
            <IoCashOutline className="sm:w-16 sm:h-16 w-10 h-10" size="56px" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-cyan-500 text-[#BE3455] flex-shrink-0">
            <IoDocumentsOutline
              className="sm:w-16 sm:h-16 w-10 h-10"
              size="56px"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-[#BE3455] font-semibold text-lg title-font mb-2">
              Student Information System
            </h2>
            <p className="leading-relaxed text-base">
              Our system is focused on providing as much information as possible
              in an easiest manner. Student is a critical assests for any school
              or college thus the management of student is needed for proper
              functioning and effective adminstration. Our system is an ideal
              choice as Student Information System.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
