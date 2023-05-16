import React from "react";
import { SiVercel } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { ProjectItemProps } from "../../interfaces/IAuthProvider";

const ProjectDCard = ({ imageSrc, title, description, vercelLink, githubLink } : ProjectItemProps)  => {
  return (
    <li className="projectContainer">
      <div className="containerImagem">
        <img alt="" src={imageSrc} />
      </div>
      <div className="containertext">
        <h5>{title}</h5>
        <p>{description}</p>
      <div className="container-social">
      <a href={vercelLink} target="_blank" rel="noreferrer">
          <SiVercel />
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      </div>
    </li>
  );
};

export default ProjectDCard;