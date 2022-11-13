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
        <h1>Anne,</h1>
        <p>I'm a Software Developer and Graphic Designer.</p>        
        <p>My goal is to bring my design background to the programming area, 
          focusing on building a clean, beautifull and responsive User Experience code.
        </p>   
        <p className="available"><strong>I'm available to work!</strong> </p>
        <div className="iconsContainer">
          <a href="https://www.linkedin.com/in/annekarolle/">
            <BsLinkedin />
          </a>     
          
          <a href="https://web.whatsapp.com/send?phone=5562991687171">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
      <div className="containerImagem">  
     
        <img src={char} alt="" className="containerImagem" />        
        
      </div>      
      
    </Container>
    <Technologies/>
    
  </>
  );
};

export default Main;
