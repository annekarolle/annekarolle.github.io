import styled from "styled-components";

export const AnimatioContainer = styled.div` 

display: flex;
align-items: center;
justify-content: center;

.containerImagem{
    width: 12em;
    display: flex;
    justify-content: center;   
}


.containerComputer{
    width: 12em;
    display: flex;
    justify-content: center;
    position: absolute;
}

.containerChar{   
    width: 12em;
    display: flex;
    justify-content: center;
}

@media (min-width: 320px) and (max-width: 480px) {
    .containerImagem{
    width: 15em;   
}


.containerComputer{
    width: 15em;   
}

.containerChar{   
    width: 15em;   
}
}

@media (min-width: 481px) and (max-width: 768px) {

    .containerImagem{
    width: 15em;   
}


.containerComputer{
    width: 15em;   
}

.containerChar{   
    width: 15em;   
}
  
  }








`

