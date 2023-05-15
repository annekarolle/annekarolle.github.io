
import fundo from "../../assests/img/animacao/desenho3.png";
import { AnimatioContainer } from "./animationCharStyle";
import { motion } from "framer-motion";

const AnimationChar = () => {
  return (
    <>
    <AnimatioContainer>
      <motion.div
        className="containerImagem"
        style={{
          width: "40%",
          filter: "drop-shadow(-47px -4px 96px #48c88a)",
        }}
        animate={{
          transform: ["translateY(30px)", "translateY(20px)", "translateY(30px)"],
          filter: [
            "drop-shadow(-47px -4px 46px #48c88a)",
            "drop-shadow(-47px -4px 66px rgba(0, 255, 5, 0.24))",
            "drop-shadow(-47px -4px 46px #48c88a)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img src={fundo} alt="" className="containerImagem" />
      </motion.div>
    </AnimatioContainer>
  </>
);

};


export default AnimationChar