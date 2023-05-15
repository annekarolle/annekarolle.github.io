
import imageUrl from "../../src/assests/img/wp/vista-do-papel-amarrotado-branco.jpg"
import { AnimationDraw } from "../components/animationDraw/animationDraw"
import Contact from "../components/contacts/contact"
import Footermain from "../components/footer"
import Header from "../components/header/header"
import Main from "../components/main/main"
import Projects from "../components/projects/projects"
export const FirstPage = () => {

return (
    <>
     <div className="container-firstPage" style={{background: `url(${imageUrl})`}}>
      <Header/>    
      <Main/>  
      <AnimationDraw/> 
      <Projects/>      
      <Contact/>    
      <Footermain/>        
     </div>
    </>
)

}