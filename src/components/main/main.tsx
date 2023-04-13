import { Container } from "./mainStyle";

import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";

import Technologies from "../technologies/technologies";

import anne from "../../assests/img/Projeto (20230413032631).png"


const Main = () => {
  return (
    <>
      <Container id="home">
        <div className="containerText">
          <h2>About me</h2>
          <h1>
            Hi! My name is <strong className="sayHi">Anne,</strong>{" "}
          </h1>

          <p>I am a Graphic Designer and Software Developer.</p>
          <p>
            My goal is to bring my design experience into the programming field,
            focusing on building clean, beautiful, and responsive user
            experience code.
          </p>
          <p>
            Throughout my career, I have had the opportunity to work on various
            graphic design projects, and I am now entering my new career as a
            developer, bringing my background as a designer to create solutions
            that integrate design and technology.
          </p>
          <p>
            My portfolio showcases some of my previous projects where I used my
            design experience to create intuitive and visually appealing digital
            interfaces and solutions.
          </p>
          <p>
            I am available for work and projects that can contribute to
            improving the user experience and developing high-quality digital
            products.
            <strong className="available">
              {" "}
              Please feel free to contact me to discuss how I can assist you.
            </strong>
          </p>
          <div className="iconsContainer">
            <a href="https://www.linkedin.com/in/annekarolle/">
              <BsLinkedin />
            </a>

            <a href="https://web.whatsapp.com/send?phone=5562991687171">
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
       <div className="container-imagem-anne">
       <img src={anne} alt="" />
       </div>
      </Container>
      <Technologies />
    </>
  );
};

export default Main;
