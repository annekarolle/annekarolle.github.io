import { Container } from "./mainStyle";

import { BsLinkedin} from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";



import char from "../../assests/img/animacao/desenho3.png"
import Technologies from "../technologies/technologies";

const Main = () => {
  return (
    <>
    <Container id="home">
      <div className="containerText">
        <h4>Hi! My name is</h4>
        <h1>Anne Karolle</h1>
        <p>I'm a Graphic Designer and Web FrontEnd Developer. </p>
        <p>Align design with programming, my goals is brining my backoungd as a Graphic Designer to the programming area.
        I like to create clean, beautiful, responsive and focus on User Experience.
        </p>   
        <p className="available"><strong>I'm available to work!</strong> </p>
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
   
      {/* <div className="green"></div> */}
      {/* <img src={sombra} alt="" className="sombra"/>   */}
        <img src={char} alt="" className="containerImagem" />        
        
      </div>      
      
    </Container>
    <Technologies/>
    
  </>
  );
};

export default Main;
