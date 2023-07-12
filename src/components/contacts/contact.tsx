import React from "react"
import { ContactCard, Container } from "./contactsStyle"
import {AiOutlineMail, AiFillPhone, AiFillLinkedin} from "react-icons/ai"
import bg from "../../assests/img/wp/SL-122520-39240-27.png"


const Contact = () =>{

    return (
        <>
        <Container id="contact" > 
         {/* <img src={bg} alt="" />               */}

            <ContactCard>
            <h4>Ways To Contact Me</h4>            
            <p>Should you need any further information, please do not hesitate to contact me.</p>
              <ul>
              <li>
                 <a href="mailto:annekarolle@gmail.com"> <span><AiOutlineMail/></span> 
                  <h5>annekarolle@gmail.com</h5> </a>
                </li>
                <li>
                <a href="tel:5562991687171" target="_blank" rel="noreferrer">  <span><AiFillPhone/></span> 
                  <h5>+55 62 9 9168-7171</h5></a> 
                </li>
                <li>
                 <a href="https://www.linkedin.com/in/annekarolle/" target="_blank" rel="noreferrer"> <span><AiFillLinkedin/></span> 
                  <h5>@annekarolle</h5></a> 
                </li>
              </ul>

            </ContactCard>   
                
        </Container>
        </>
    )

}

export default Contact