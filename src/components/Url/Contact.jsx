import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMobile,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  //Emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znomwgl",
        "template_mbtvzgj",
        form.current,
        "mHPcSG53nxo2ZRG1b"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const contact_info = [
    { logo: <FaEnvelope />, text: "bmccsit@gmail.com" },
    {
      logo: <FaPhoneAlt />,
      text: "025-579759 (CSIT Departpent)",
    },
    {
      logo: <FaMobile />,
      text: "9801184298 (Head Of Department)",
    },
    {
      logo: <FaMapMarkerAlt />,
      text: "Bhupi Marga, Dharan - 1, Sunsari",
    },
  ];
  return (
    <section id="contact" className="py-40 px-3 bg-gray-300 text-[#BE3455]">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-500 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-xl mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              required
              className="bg-gray-800 py-2 pl-2"
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              name="user_email"
              required
              className="bg-gray-800 py-2 pl-2"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              name="message"
              required
              className="bg-gray-800 py-1 pl-2"
            ></textarea>
            <button
              className="btn-primary w-fit bg-[#BE3455] text-white p-2 rounded-xl"
              type="Submit"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3rem]  text-3xl min-h-[3rem] flex items-center justify-center text-white bg-[#BE3455] rounded-full">
                  {contact.logo}
                </div>
                <p className="md:text-base text-base font-semibold break-words text-cyan-600">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
