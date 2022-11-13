import { Container } from "./mainStyle";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";

const Main = () => {
  return (
    <Container id="main">
      <div className="containerText">
        <h1>Hi! My name is Anne Karolle</h1>
        <p>I'm a Graphic Designer and Web FrontEnd Developer</p>
        <h2> I'm avalible to work!</h2>
        <div className="iconsContainer">
          <a href="https://www.linkedin.com/in/annekarolle/">
            <BsLinkedin />
          </a>     
          
          <a href="https://www.linkedin.com/in/annekarolle/">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
      <div className="containerImagem">
        <img src="" alt="" />
      </div>
    </Container>
  );
};

export default Main;
