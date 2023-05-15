import { Container } from "./mainStyle";

import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

import Technologies from "../technologies/technologies";

import anne from "../../assests/img/Projeto (20230413032631).png"


const Main = () => {
  return (
    <>
      <Container id="aboutMe">
        <div className="containerText">
          <h2>About me</h2>
          <h1>
            Hi! My name is <strong className="sayHi">Anne,</strong>{" "}
          </h1>

          <div className="containerAbout">
  <p>I am a Graphic Designer and Software Developer.</p>
            <p>
              My goal is to bring my design experience into the programming field,
              focusing on building clean, beautiful, and responsive user
              experience code.
            </p>
            <p>
            My goal is to merge my design expertise with programming skills to develop clean, responsive, and visually appealing user interfaces.
            </p>
            <p>
            With a strong background in graphic design, I bring a unique perspective to my development work.
            </p>
            <p>              
              <strong className="available">
                {" "}
                I am available for work. Please feel free to contact me.
              </strong>
            </p>
          </div>

         
          <div className="iconsContainer">
            <a href="https://www.linkedin.com/in/annekarolle/">
              <BsLinkedin />
            </a>

            <a href="https://web.whatsapp.com/send?phone=5562991687171">
              <BsWhatsapp />
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
