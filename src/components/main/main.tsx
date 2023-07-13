import { Container } from "./mainStyle";

import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

import Technologies from "../technologies/technologies";

import anne from "../../assests/img/Projeto (20230413032631).png"


const Main = () => {
  return (
    <>
      <Container id="aboutMe">
       <div className="container-main-about">
       <div className="container-Text">
          <h2>About me</h2>
          <h1>
            Hi! My name is <strong className="sayHi">Anne,</strong>{" "}
          </h1>

          <div className="containerAbout">
  <p>I am a Graphic Designer and Software Developer.</p>
            <p>
            My objective is to combine my design expertise with programming skills to create visually appealing and responsive user interfaces. With a solid foundation in graphic design, I bring a distinct perspective to my development projects.
            </p>           
           
            <p>              
              <strong className="available">              
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
       </div>
      </Container>
      <Technologies />     
    </>
  );
};

export default Main;
