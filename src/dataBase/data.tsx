import trick from "../../assests/img/trickgirl.jpg";
import goianos from "../../assests/img/goianos.jpg";
import kenzimed from "../../assests/img/kenzimed.jpg";
import contact from "../../assests/img/contact.jpg";
import { Project } from "../interfaces/IAuthProvider";

export const projectsFrontEnd: Project[] = [
  {
    imageSrc: trick,
    title: "Trick Girls",
    description:
      "Frontend project: We built an e-commerce based on a style guide in Figma.",
    vercelLink: "https://trick-girl.vercel.app",
    githubLink: "https://github.com/annekarolle/TrickGirl",
    type: "FrontEnd Project",
  },
  {
    imageSrc: kenzimed,
    title: "KenziMed",
    description:
      "Backend and frontend project: Design of a system for scheduling appointments and exams. It is an easy and simple system to use.",
    vercelLink: "https://kenziemed.vercel.app/",
    githubLink:
      "https://github.com/grupo-1-projeto-frontend-t12/Projeto-FrontEnd-M3",
    type: "FullStack Project",
  },
  {
    imageSrc: goianos,
    title: "Goianos em Montreal",
    description:
      "Frontend project: A web service for newcomers to Montreal, providing information about transfers, rentals, cleaning services, help with government services, and more.",
    vercelLink: "https://goianosemmontreal.vercel.app",
    githubLink: "https://github.com/annekarolle/goianosEmMontreal",
    type: "FrontEnd Project",
  },
  {
    imageSrc: contact,
    title: "ContactEase",
    description:
      "Fullstack project: A contact management API that allows addition, editing, and viewing of details such as name, phone number, and email.",
    vercelLink: "https://contactease.vercel.app",
    githubLink: "https://github.com/tech-project-m6-kenzie",
    type: "FullStack Project",
  },
  {
    imageSrc: "",
    title: "K-Movies",
    description:
      "Backend project: An API developed in Python with the Django framework, used for movie management.",
    vercelLink: "",
    githubLink:
      "https://github.com/annekarolle/back-end-relacao-filmes-generos",
    type: "BackEnd Project",
  },
  {
    imageSrc: "",
    title: "K-bands",
    description:
      "Backend project: Transitioned from a legacy code of a music API using APIViews, Base Serializer, and SQLite3 to Generic Views and Model Serializer.",
    vercelLink: "",
    githubLink: "https://github.com/annekarolle/back-end-bandKamp",
    type: "BackEnd Project",
  },
  {
    imageSrc: "",
    title: "K-Pets",
    description:
      "Backend project: Developed an API that manages the registration of pets and their characteristics, practicing the content learned in Django.",
    vercelLink: "",
    githubLink: "https://github.com/annekarolle/back-end-gerenciador-petshop",
    type: "BackEnd Project",
  },
  {
    imageSrc: "",
    title: "K-Movie Buster",
    description:
      "Backend project: An API that manages movies and movie purchases, developed using the default Django User.",
    vercelLink: "",
    githubLink: "https://github.com/annekarolle/back-end-gerenciador-petshop",
    type: "BackEnd Project",
  },  
  {
    imageSrc: "",
    title: "K-Moveis",
    description:
      "The project consists of a back-end service dedicated to managing a real estate agency, using the TypeORM library.",
    vercelLink: "",
    githubLink: "https://github.com/annekarolle/k-moveis",
    type: "BackEnd Project",
  },  
  {
    imageSrc: "",
    title: "K-Lanches",
    description:
      "The project was developed using Node.js and the Express framework, aiming to provide a back-end service for managing products and their categories.",
    vercelLink: "",
    githubLink: "https://github.com/annekarolle/k-lanches",
    type: "BackEnd Project",
  },  
  ];