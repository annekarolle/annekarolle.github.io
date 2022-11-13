import { Container } from "./headerStyle"
import logo from "../../assests/img/logo.png"
import {  BsGithub } from "react-icons/bs";


const Header = () =>{

    return (
        <>
        <Container>    
     
         <div className="navegador">
         <div >  
            <img src={logo} alt="Logo Anne Karolle" />        
          </div>

          <div >
            <ul className="menuNav">
              {/* <li>                
                 <a href="/">Home</a>
              </li>             */}
              <li>                
                 <a href="#projects">Projects</a>
              </li>  
              <li>                
                 <a href="#contact">Contact</a>
              </li>
            
              <li>
               <a href="https://github.com/annekarolle" className="gitHub"><BsGithub/></a>
              </li>

            </ul>            
          </div>
         </div>      
    

        </Container>
        </>
    )

}

export default Header