import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Context } from "./Dashboard";

const QrShowandDownload = () => {
  const props = React.useContext(Context);
  let { studentId, fname } = props;
  const [Qrcode, setQrcode] = useState(null);

  const qrcodeApi = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${studentId}`;
  // const qrcodeApi = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${studentId}`;

  const downloadQrcode = () => {
    // saveAs(Qrcode, `biwashqr.png`);
    saveAs(Qrcode, `${fname}qr.png`);
  };

  useEffect(() => {
    if (qrcodeApi) {
      setQrcode(qrcodeApi);
    }
  }, [qrcodeApi]);
  return (
    <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
      <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-4 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div className="flex flex-wrap -mx-3">
            <div className="max-w-full px-3 md:w-1/2 md:flex-none">
              <h6 className="mb-0 text-[#BE3455] text-lg font-semibold">
                SCAN QR
              </h6>
            </div>
            <div className="flex items-center justify-end max-w-full px-3 dark:text-white/80 md:w-1/2 md:flex-none">
              <div className="flex items-center">
                <button
                  onClick={downloadQrcode}
                  type="button"
                  className="inline-block px-8 py-2 mb-2 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-base tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
                >
                  Download Your QR
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto p-4 pt-6">
          <div className="flex flex-col pl-0 mb-0 rounded-lg justify-center items-center">
            <div className="border-8 border-gray-900 w-72 bg-white rounded-t-xl shadow-lg">
              <div className="text-center text-gray-600 font-medium">
                <img className="w-full" src={Qrcode} alt="profile cover" />
              </div>
            </div>
            <div className="h-20 w-72 bg-black text-white text-center rounded-b-xl shadow-lg">
              <h1 className="text-4xl font-bold py-4">Scan Me</h1>
            </div>
            <span className="mt-8 flex p-2 font-semibold text-orange-500">
              <FaMapMarkerAlt className="text-2xl" />
              <h1 className="text-red-600">
                Please Trun ON your device location for accurate attendance
              </h1>
              <FaMapMarkerAlt className="text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrShowandDownload;
