import Container from "./projectsStyles";
import trick from "../../assests/img/trickgirl.jpg";
import goianos from "../../assests/img/goianos.jpg";
import kenzimed from "../../assests/img/kenzimed.jpg";
import ProjectDCard from "../projectCardComponents/projectCard";

const Projects = () => {
  return (
    <>
      <Container id="projects">
        <h4>Projects</h4>
        <ul>
          <ProjectDCard
            imageSrc={trick}
            title="Trick Girls"
            description="Project frontend, we built an e-commerce, based on a style guide in Figma."
            vercelLink="https://trick-girl.vercel.app"
            githubLink="https://github.com/annekarolle/TrickGirl"
          />          
          <ProjectDCard
            imageSrc={kenzimed}
            title="KenziMed"
            description="The design of a system for scheduling appointments and exams. An
            easy and simple system to use, a backend and frontend project."
            vercelLink="https://kenziemed.vercel.app/"
            githubLink="https://github.com/grupo-1-projeto-frontend-t12/Projeto-FrontEnd-M3"
          />
           <ProjectDCard
            imageSrc={goianos}
            title="Goianos em Montreal"
            description="This project is a web service for newcomers to Montreal. Search
            for transfer, rent, cleaning, help with government services and
            others."
            vercelLink="https://goianosemmontreal.vercel.app"
            githubLink="https://github.com/annekarolle/goianosEmMontreal"
          />     
        </ul>
      </Container>
    </>
)
};

export default Projects;
