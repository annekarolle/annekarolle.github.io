import { Skills } from "./technologiesStyle";
import AnimationChar from "../animationsChar/animationChar";

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

const Technologies = () => {
  return (
    <>
      <Skills id="technologies" >       

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
              <span>
                {" "}
                <IoLogoJavascript />
              </span>
              <span>
                <IoLogoHtml5 />
              </span>
              <span>
                <IoLogoCss3 />
              </span>
              <span>
                <FaReact />
              </span>
              <span>
                <SiTypescript />
              </span>
              <span>
                <SiNodedotjs />
              </span>
              <span>
                <SiJest />
              </span>
              <span>
                {" "}
                <SiRedux />
              </span>
              <span>
                {" "}
                <SiPostgresql />
              </span>
              <span>
                {" "}
                <SiDjango />
              </span>
              <span>
                {" "}
                <SiPython />
              </span>
            </div>
          </div>
          <AnimationChar />
        </div>
      </Skills>
    </>
  );
};

export default Technologies;
