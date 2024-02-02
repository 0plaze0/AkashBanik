import { useState } from "react";

import "./Footer.scss";

import { images } from "./../../constants";
import { AppWrap, MotionWrap } from "./../../wrapper";

const Footer = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    // setLoading(true);
    // const contact = {
    //   _type: "contact",
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };
    // client
    //   .create(contact)
    //   .then(() => {
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <h2 className="head-text">chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:banikakash131@gmail.com" className="p-text">
            akash.banik.dev@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+919678317390" className="p-text">
            +91 (967) 831-7390
          </a>
        </div>
      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              type="email"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
            <button type="button" classname="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
