
import char from "../../assests/img/animacao/desenho3.png";
import { AnimatioContainer } from "./animationCharStyle";

const AnimationChar = () => {
  return (
    <>
    <AnimatioContainer>
            <div className="containerImagem">
          <img src={char} alt="" className="containerImagem" />
        </div>
    </AnimatioContainer>
  </>
  );
};


export default AnimationChar