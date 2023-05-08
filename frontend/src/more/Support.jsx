import React, { useRef, useState } from "react";
import MetaData from "./Metadata";
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from "./BottomTab.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import isEmail from "validator/lib/isEmail";

const Support = ({ history }) => {
  //   const [done, setDone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thanks for your report we will reply it in very soon...");

    if (name && email && message && subject) {
      // if (isEmail(email)) {
      //   // const responseData = {
      //   //   name: name,
      //   //   email: email,
      //   //   message: message,
      //   //   subject: subject,
      //   // };

      //   emailjs
      //     .sendForm(
      //       "service_1iayfr9",
      //       "template_bnl918m",
      //       e.target,
      //       "CjBwHK5NvNJjd_50P"
      //     )
      //     .then(
      //       (response) => {
      //         console.log("SUCCESS!", response.status, response.text);
      //         setName("");
      //         setEmail("");
      //         setMessage("");
      //         setsubject("");
      //       },
      //       (err) => {
      //         console.log("FAILED...", err);
      //       }
      //     );
      // }
    }
  };

  return (
    <>
      <MetaData title="Support" />
      <div
        className="support"
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <h2
          className="support__heading"
          style={{
            textAlign: "center",
          }}
        >
          Hey How can we improve our services
        </h2>
        <h2
          className="support__heading"
          style={{
            textAlign: "center",
          }}
        >
          Report us for something...
        </h2>
        <div>
          <form
            style={{
              width: "400px",
              margin: "auto",
              padding: "20px 0",
            }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Write your Name ..."
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
            />
            <input
              type="text"
              placeholder="Write a Subject ..."
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              name="subject"
            />
            <input
              type="email"
              placeholder="write your Email ..."
              required
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
                height: "40px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="Email"
            />
            <textarea
              cols="30"
              rows="5"
              required
              placeholder="write your message ..."
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                borderBottom: "1px solid #3BB77E",
                margin: "10px 0",
                fontSize: "1.2vmax",
              }}
              name="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
            <button
              style={{
                border: "none",
                cursor: "pointer",
                width: "100%",
                background: "#3BB77E",
                height: "40px",
                margin: "10px 0",
                color: "#fff",
                fontSize: "1.2vmax",
              }}
            >
              Submit
            </button>
          </form>
          <div className="animation"></div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BottomTab />
    </>
  );
};

export default Support;
