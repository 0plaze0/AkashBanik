import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Data } from "./../../constants";
import { AppWrap, MotionWrap } from "./../../wrapper";
import Images from "../../constants/Images";

import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences(Data.Experience);

    setSkills(Data.Skill);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                key={index}
                className="app__flex"
                style={{
                  border: 1,
                  borderStyle: "solid",
                  borderColor: skill["bgColor"],
                }}
              >
                <img src={Images[`${skill.icon}`]} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={index}>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                      key={index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <div className="app__skills-exp-year">
                        <div
                          className="bold-text"
                          style={{ fontSize: 15, opacity: 0.6 }}
                        >
                          {experience.year}
                        </div>
                      </div>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
