import Container from "./projectsStyles";
import ProjectDCard from "../projectCardComponents/projectCard";
import { Project } from "../../interfaces/IAuthProvider";
import trick from "../../assests/img/trickgirl.jpg";
import trick2 from "../../assests/img/trickgirl2.jpg";
import trick3 from "../../assests/img/trickgirl3.jpg";
import trick4 from "../../assests/img/trickgirl4.jpg";


import goianos from "../../assests/img/goianos.jpg";


import kenzimed from "../../assests/img/kenzimed.jpg";
import kenzimed2 from "../../assests/img/kenzimed2.jpg";
import kenzimed3 from "../../assests/img/kenzimed3.jpg";

import contact from "../../assests/img/contact.jpg";
import contact2 from "../../assests/img/contact2.jpg";
import contact3 from "../../assests/img/contact3.jpg";
import contact4 from "../../assests/img/contact4.jpg";

import school from "../../assests/img/magic.jpg"
import school2 from "../../assests/img/magic2.jpg"
import school3 from "../../assests/img/magic3.jpg"
import school4 from "../../assests/img/magic4.jpg"

import g28 from "../../assests/img/g28.jpg"
import g282 from "../../assests/img/g282.jpg"
import g283 from "../../assests/img/g283.jpg"
import g284 from "../../assests/img/g284.jpg"




const Projects = () => {

  const projetosOficiais: Project[] = [
    {
      imageSrc: [school, school2, school3, school4],
      title: "Magic School",
      description:
        "Frontend project: The page of Hogwarts School of Witchcraft and Wizardry, designed by fans for fans.",
      vercelLink: "https://magic-school.vercel.app/",
      githubLink: "https://github.com/annekarolle/hogwarst-school-page",
      type: "FrontEnd Project",
    },
    {
      imageSrc: [trick, trick2 , trick3 , trick4],
      title: "Trick Girls",
      description:
        "Frontend project: We built an e-commerce based on a style guide in Figma.",
      vercelLink: "https://trick-girl.vercel.app",
      githubLink: "https://github.com/annekarolle/TrickGirl",
      type: "FrontEnd Project",
    },
    {
      imageSrc: [kenzimed],
      title: "KenziMed",
      description:
        "Backend and frontend project: Design of a system for scheduling appointments and exams. It is an easy and simple system to use.",
      vercelLink: "https://kenziemed.vercel.app/",
      githubLink:
        "https://github.com/grupo-1-projeto-frontend-t12/Projeto-FrontEnd-M3",
      type: "FullStack Project",
    },
    {
      imageSrc: [goianos],
      title: "Goianos em Montreal",
      description:
        "Frontend project: A web service for newcomers to Montreal, providing information about transfers, rentals, cleaning services, help with government services, and more.",
      vercelLink: "https://goianosemmontreal.vercel.app",
      githubLink: "https://github.com/annekarolle/goianosEmMontreal",
      type: "FrontEnd Project",
    },
    {
      imageSrc: [contact, contact2 , contact3 , contact4],
      title: "ContactEase",
      description:
        "Fullstack project: A contact management API that allows addition, editing, and viewing of details such as name, phone number, and email.",
      vercelLink: "https://contactease.vercel.app",
      githubLink: "https://github.com/tech-project-m6-kenzie",
      type: "FullStack Project",
    },
    {
      imageSrc: [g28,g282,g283,g284],
      title: "G28-Motors",
      description:
        "G28 is a fullstack e-commerce platform for car sales, offering an API for managing cars, users, and comments.",
      vercelLink: "https://g28-motors.vercel.app/",
      githubLink: "https://github.com/E-commerce-Motors-g28-t14",
      type: "FullStack Project",
    },    
    {
      imageSrc: [],
      title: "K-Movies",
      description:
        "Backend project: An API developed in Python with the Django framework, used for movie management.",
      vercelLink: "",
      githubLink:
        "https://github.com/annekarolle/back-end-relacao-filmes-generos",
      type: "BackEnd Project",
    },
    {
      imageSrc: [],
      title: "K-bands",
      description:
        "Backend project: Transitioned from a legacy code of a music API using APIViews, Base Serializer, and SQLite3 to Generic Views and Model Serializer.",
      vercelLink: "",
      githubLink: "https://github.com/annekarolle/back-end-bandKamp",
      type: "BackEnd Project",
    },
    {
      imageSrc: [],
      title: "K-Pets",
      description:
        "Backend project: Developed an API that manages the registration of pets and their characteristics, practicing the content learned in Django.",
      vercelLink: "",
      githubLink: "https://github.com/annekarolle/back-end-gerenciador-petshop",
      type: "BackEnd Project",
    },
    {
      imageSrc: [],
      title: "K-Movie Buster",
      description:
        "Backend project: An API that manages movies and movie purchases, developed using the default Django User.",
      vercelLink: "",
      githubLink: "https://github.com/annekarolle/back-end-gerenciador-petshop",
      type: "BackEnd Project",
    },  
    {
      imageSrc: [],
      title: "K-Moveis",
      description:
        "The project consists of a back-end service dedicated to managing a real estate agency, using the TypeORM library.",
      vercelLink: "",
      githubLink: "https://github.com/annekarolle/k-moveis",
      type: "BackEnd Project",
    },  
    {
      imageSrc: [],
      title: "K-Lanches",
      description:
        "The project was developed using Node.js and the Express framework, aiming to provide a back-end service for managing products and their categories.",
      vercelLink: "",
      githubLink: "https://github.com/annekarolle/k-lanches",
      type: "BackEnd Project",
    },  
    {
      imageSrc: [],
      title: "E-Kommerce",
      description:
        "The backend of an e-commerce platform was developed, which includes the relationships between users, products, and shopping carts.",
      vercelLink: "",
      githubLink: "https://github.com/annekarolle/e-Kommerce",
      type: "BackEnd Project",
    },  
    ];

    const backendProjects = projetosOficiais.filter(
      (project) => project.type === "BackEnd Project"
    );
    const frontendProjects = projetosOficiais.filter(
      (project) => project.type === "FrontEnd Project"
    );

    const fullstackProjects = projetosOficiais.filter(
      (project) => project.type === "FullStack Project"
    );

    

  return (
    <>
      <Container id="projects">       
       
        <h4>Projects FullStack</h4>
        <ul>   <ProjectDCard projects={fullstackProjects} /></ul>  
        <h4>Projects FrontEnd</h4>
        <ul>   <ProjectDCard projects={frontendProjects} /></ul>   
        <h4>Projects BackEnd</h4>
        <ul> <ProjectDCard projects={backendProjects} /></ul> 
     
       
      </Container>
    </>
  );
};

export default Projects;
