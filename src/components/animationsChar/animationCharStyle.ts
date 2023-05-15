import styled from "styled-components";

export const AnimatioContainer = styled.div` 
.containerImagem{
    width: 200px;
    display: flex;
    justify-content: center;   
}


.containerComputer{
    width: 200px;
    display: flex;
    justify-content: center;
    position: absolute;
}

.containerChar{
   
    width: 200px;
    display: flex;
    justify-content: center;
}

@media (max-width: 800px) {

.containerImagem{
width: 100%;
display: flex;
justify-content: center;
}
.containerImagem img{
width: 40%;  }

}

@media (max-width: 400px) {
 
    .containerImagem{
        display: none;
    }

   
}


`

