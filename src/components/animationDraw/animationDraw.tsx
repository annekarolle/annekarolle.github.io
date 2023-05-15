import base from "../../assests/img/animationDraw/camada-desenho.png"
import icon from "../../assests/img/animationDraw/camada-icon.png"
import { ContainerAnimationDraw } from "./animationDrawStyle";
import { motion } from "framer-motion";

export const AnimationDraw = () => {
  return (
    <ContainerAnimationDraw>
      <div className="containerImagem">
        <motion.img
          src={icon}
          alt=""
          className="icon"
          initial={{ scale: 1 }} 
          animate={{ scale: [1, 1.01, 1] }} 
          transition={{ duration: 2, repeat: Infinity }} 
        />  
        <img src={base} alt="Ilustração de uma pessoa codando." className="base" />
      </div>
    </ContainerAnimationDraw>
  );
};
