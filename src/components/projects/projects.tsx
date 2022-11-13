import Container from "./projectsStyles";
import { SiVercel } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import trick from "../../assests/img/trickgirl.jpg";
import goianos from "../../assests/img/goianos.jpg";
import kenzimed from "../../assests/img/kenzimed.jpg";

const Projects = () => {
  return (
    <>
      <Container id="projects">
        <h4>Projects</h4>
        <ul>
          <li className="projectContainer">
            <div className="containerImagem">
            <img alt="" src={kenzimed} />
            </div>
            <div className="containertext">
              <h5>KenziMed</h5>
              <p>
              The design of a system for scheduling appointments and exams. An easy and simple system to use, a backend and frontend project.
              </p>
              <a href="https://kenziemed.vercel.app/">
                <SiVercel />
              </a>
              <a href="https://github.com/grupo-1-projeto-frontend-t12/Projeto-FrontEnd-M3">
                <BsGithub />
              </a>
            </div>
          </li>
          <li className="projectContainer">
          <div className="containerImagem">
            <img alt="" src={trick} />
            </div>
            <div className="containertext">
              <h5>Trick Girls</h5>
              <p>
               Project frontend, we built an e-commerce, based on a style guide in Figma.   </p>
              <a href="https://trick-girl.vercel.app">
                <SiVercel />
              </a>
              <a href="https://github.com/annekarolle/TrickGirl">
                <BsGithub />
              </a>
            </div>
          </li>
          <li className="projectContainer">
          <div className="containerImagem">
            <img alt="" src={goianos} />
            </div>
            <div className="containertext">
              <h5>Goianos em Montreal</h5>
              <p>
              This project is a web service for newcomers to Montreal. Search for transfer, rent, cleaning, help with government services and others.
              </p>
              <a href="https://github.com/annekarolle/TrickGirl">
                <SiVercel />
              </a>
              <a href="https://github.com/annekarolle/TrickGirl">
                <BsGithub />
              </a>
            </div>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Projects;
