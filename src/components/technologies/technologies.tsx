import { Skills } from "./technologiesStyle";

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiJest,
  SiRedux,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <>
      <Skills id="technologies">
        <div className="containerTech">
          <div className="containerTextTech">
            <h4>Technologies</h4>
            <p>
              I have expertise in several programming technologies, including{" "}
              <strong>
                {" "}
                HTML5, CSS3, JavaScript, React, TypeScript, Node.js, PostgreSQL,
                Redux, Jest, Express.js, Heroku, Python, and Django
              </strong>
            </p>
            <p>
              With all of these skills, I am able to create high-quality,
              scalable, and secure software solutions that meet the needs of
              end-users and exceed client expectations.
            </p>
            <div className="badges">
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {" "}
                <IoLogoJavascript />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <IoLogoHtml5 />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <IoLogoCss3 />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <FaReact />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <SiTypescript />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <SiNodedotjs />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <SiJest />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {" "}
                <SiRedux />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {" "}
                <SiPostgresql />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {" "}
                <SiDjango />
              </motion.span>
              <motion.span
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {" "}
                <SiPython />
              </motion.span>
            </div>
          </div>
        </div>
      </Skills>
    </>
  );
};

export default Technologies;
