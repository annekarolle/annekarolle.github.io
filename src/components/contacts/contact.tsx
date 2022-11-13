import React from "react"
import { ContactCard, Container } from "./contactsStyle"
import {AiOutlineMail, AiFillPhone, AiFillLinkedin} from "react-icons/ai"


const Contact = () =>{

    return (
        <>
        <Container id="contact">
            <h4>Contact</h4>
            <h2>Ways To Contact Me</h2>
            <p>Should you need any further information, please do not hesitate to contact me.</p>

            <ContactCard>
                <li>
                  <span><AiOutlineMail/></span> 
                  <h5>annekarolle@gmail.com</h5> 
                </li>
                <li>
                  <span><AiFillPhone/></span> 
                  <h5>+55 62 9 9168-7171</h5> 
                </li>
                <li>
                  <span><AiFillLinkedin/></span> 
                  <h5>@annekarolle</h5> 
                </li>

            </ContactCard>          
        </Container>
        </>
    )

}

export default Contact