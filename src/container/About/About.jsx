import React from "react";
import { motion } from "framer-motion";
import { Data } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        About <span>me</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          {Data.AboutMe.map((item, index) => (
            <div key={index}>
              <p key={index}>{item}</p>
              <br />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
