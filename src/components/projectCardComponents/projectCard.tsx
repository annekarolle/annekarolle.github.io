import React from "react";
import { SiVercel } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { Iimagem, ProjectDCardProps } from "../../interfaces/IAuthProvider";
import { ListProject } from "./projectCardStyle";
import { useState } from "react";

const ProjectDCard: React.FC<ProjectDCardProps> = ({ projects }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [imagemsSelect, setImagemsSelect] = useState([]);
  const [ indexSelect, setIndexSelect]= useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const [imageArray, setImageArray] = useState<string[]>([]);

  const handleImageClick = (imageSrc: string, images: string[]) => {
    setSelectedImage(imageSrc);
    setImageArray(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  return (
    <>
      {projects.map((projeto) => (
        <ListProject className="projectContainer" key={projeto.title}>
          {projeto.imageSrc ? (
            <div className={`containertext  ${projeto.type}`}>
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
              <div className="container-imagems">
  {projeto.imageSrc.map((item, index) => (
    <div className="miniature-imagem" key={index}>
      <img
        src={item}
        alt=""
        onClick={() => handleImageClick(item, projeto.imageSrc)}
      />
    </div>
  ))}
</div>

{modalOpen && selectedImage && (
  <div id="myModal" className="modal">
    <span className="close" onClick={closeModal}>
      &times;
    </span>
    <div className="container-imagem-principal">
      <img className="modalImage" src={selectedImage} alt="" />
    </div>
    <div className="container-imagems-modal">
      {imageArray.map((item, index) => (
        <div className="miniature-imagem" key={index}>
          <img
            src={item}
            alt=""
            onClick={() => handleImageClick(item, imageArray)}
          />
        </div>
      ))}
    </div>
  </div>
)}
            </div>
          ) : (
            <div
              className="containertext"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
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
          )}
        </ListProject>
      ))}
    </>
  );
};

export default ProjectDCard;
