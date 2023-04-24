import React, { useState } from "react";
import FeeCards from "./FeeCards";
import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web";
import FeePdf from "./FeePdf";
import { Context } from "./Dashboard";

const Account = () => {
  const props = React.useContext(Context);
  let { fname, lname } = props;

  const studentId = localStorage.getItem("studentID");

  const [ID, setID] = useState("");
  const [amt, setamt] = useState();
  const [Desc, setDesc] = useState("");
  const [pdfURL, setPDFURL] = useState("");
  let payAmt = { amt };

  //new
  function verifyPayment(payload) {
    axios({
      method: "POST",
      url: "/fee/verifypayment",
      data: payload,
      responseType: "blob",
    }).then((res) => {
      alert("Payment Successfull");
      const pdf = new Blob([res.data], { type: "application/pdf" });
      const pdfURL = URL.createObjectURL(pdf);
      setPDFURL(pdfURL);
      console.log(res);
      console.log(res?.data?.message);
    });
  }
  let config = {
    publicKey: "test_public_key_d0a8e3128997480886bf31b846435c28",
    // productIdentity: "BMC-BiwashShrestha-1-2079",
    productIdentity: `${studentId}`,
    productName: `${Desc}`,
    productUrl: "http://localhost:5173/dashboard/fee",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log("onsuccess: ", payload);
        verifyPayment(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  //yo chai after pasting config code.
  let checkout = new KhaltiCheckout(config);

  return (
    <div className="w-full h-full px-6 py-6 mx-auto">
      {/* tala ko le pdf sama */}
      <div className="flex flex-wrap -mx-3">
        {/* tala ko le card ani cards ani khalti payment */}
        <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
          <div className="flex flex-wrap -mx-3">
            {/* Yaha ho top portion  */}
            <FeeCards studentId={studentId} fname={fname} lname={lname} />
            {/* khalti pay form ra button */}
            <div className="max-w-full px-3 mb-6 lg:mb-0 lg:w-full lg:flex-none">
              <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <div className="flex flex-wrap -mx-3">
                    <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                      <h6 className="mb-0 text-gray-900 text-2xl font-semibold tracking-wider">
                        Payment Method:-
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="max-w-full flex-auto p-4">
                  <div className="flex flex-wrap justify-center items-center -mx-3">
                    {/* my form start */}

                    <div className="relative max-w-500 w-full rounded-lg py-6 bg-white shadow-md px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none border-4 border-zinc-500">
                      <div
                        className="relative text-xl font-bold text-gray-700"
                        style={{ fontSize: "30px", color: "#333" }}
                      >
                        <span className="text-[#4D286D]">Khalti Payment</span>
                        <span
                          style={{
                            content: "",
                            position: "absolute",
                            bottom: "-2px",
                            left: "0",
                            height: "4px",
                            width: "30px",
                            borderRadius: "8px",
                            backgroundColor: "teal",
                          }}
                        ></span>
                      </div>
                      <div className="flex flex-col p-6 bg-white rounded-lg">
                        <div className="text-lg font-medium mb-4">
                          Payment Details
                        </div>

                        <div className="flex flex-col mb-4">
                          <label
                            className="text-[#4D286D] font-medium mb-2"
                            htmlFor="ID"
                          >
                            Student ID
                          </label>
                          <input
                            className="border p-2 rounded-lg"
                            name="ID"
                            type="text"
                            value={`${studentId}`}
                            onChange={(e) => setID(e.target.value)}
                            placeholder="Student ID"
                          />
                        </div>

                        <div className="flex flex-col mb-4">
                          <label
                            className="text-[#4D286D] font-medium mb-2"
                            htmlFor="amount"
                          >
                            Amount
                          </label>
                          <input
                            className="border p-2 rounded-lg"
                            name="amount"
                            type="number"
                            min="10"
                            onWheel={(e) => e.target.blur()}
                            onChange={(e) => setamt(e.target.value)}
                            placeholder="Enter Amount To Pay > 10"
                          />
                        </div>

                        <div className="flex flex-col mb-4">
                          <label
                            className="text-[#4D286D] font-medium mb-2"
                            htmlFor="desc"
                          >
                            Description
                          </label>
                          <textarea
                            className="border p-2 rounded-lg h-32"
                            name="desc"
                            id="desc"
                            cols="30"
                            rows="10"
                            value={Desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Payment Description"
                          ></textarea>
                        </div>

                        <button
                          className="bg-[#4D286D] text-white font-medium py-2 px-4 rounded-lg hover:bg-teal-800"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            checkout.show({ amount: payAmt.amt * 100 });
                          }}
                        >
                          Pay Khalti
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PDF */}
        <FeePdf />
      </div>

      {/* Display bill info  */}
      {pdfURL && (
        <iframe src={pdfURL} width="100%" height="600" title="PDF Viewer" />
      )}
      <div className="relative mt-6 px-3 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <h6 className="mb-0 text-[#BE3455]">Billing Information</h6>
        </div>
        <div className="flex-auto p-4 pt-6">
          <table className="text-center w-full">
            <thead className="border-b bg-gray-800">
              <tr>
                <th className="text-sm font-medium text-white px-6 py-4">
                  Date
                </th>
                <th className="text-sm font-medium text-white px-6 py-4">
                  Amount
                </th>
                <th className="text-sm font-medium text-white px-6 py-4">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 text-center min-w-full">
              {/* 1st row */}
              <tr className="border-b-2 border-gray-900">
                <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                  2079-01-15
                </td>
                <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                  Rs 35000
                </td>
                <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                  First sem fee
                </td>
              </tr>
              {/* 2nd row */}
              <tr className="border-b-2 border-gray-900">
                <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                  2079-01-16
                </td>
                <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                  Rs 20000
                </td>
                <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                  first sem and extra
                </td>
              </tr>

              {/* 3rd row */}
              <tr className="border-b-2 border-gray-900">
                <td className="px-6 py-4 text-base font-medium text-[#BE3455]">
                  2079-01-17
                </td>
                <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                  Rs 2700
                </td>
                <td className="text-base text-[#BE3455] font-medium px-6 py-4">
                  Exam form fee
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Account;
