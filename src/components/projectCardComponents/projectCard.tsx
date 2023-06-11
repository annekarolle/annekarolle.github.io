import React from "react";
import trick from "../../assests/img/trickgirl.jpg";
import goianos from "../../assests/img/goianos.jpg";
import kenzimed from "../../assests/img/kenzimed.jpg";

import { SiVercel } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { ProjectDCardProps } from "../../interfaces/IAuthProvider";

const ProjectDCard: React.FC<ProjectDCardProps> = ({projects})  => { 

  console.log(projects[0].imageSrc)
  return (
    <>
      {projects.map((projeto) => (
        <li className="projectContainer" key={projeto.title}>  
        {projeto.imageSrc.length > 2 ? (
          <div className="containerImagem">
            <img alt="" src={projeto.imageSrc} />
          </div> 
        )  : ( <></>)  }  
                    

          {projeto.imageSrc.length > 2 ? (
            <div className="containertext">
              <h2>{projeto.type}</h2>
            <h5>{projeto.title}</h5>
            <p>{projeto.description}</p>
            <div className="container-social">
              <a href={projeto.vercelLink} target="_blank" rel="noreferrer">
                <SiVercel />
              </a>
              <a href={projeto.githubLink} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
          ) : (
            <div className="containertext" style={{width:"100%", display: "flex",  flexDirection:"column", justifyContent:"center" }}>
              <h2>{projeto.type}</h2>
            <h5>{projeto.title}</h5>
            <p>{projeto.description}</p>
            <div className="container-social">
              <a href={projeto.vercelLink} target="_blank" rel="noreferrer">
                <SiVercel />
              </a>
              <a href={projeto.githubLink} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
          </div>
          )

          }
          
          
        </li>
      ))}
    </>
  );
};

export default ProjectDCard;
