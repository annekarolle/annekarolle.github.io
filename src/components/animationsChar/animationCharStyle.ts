import styled from "styled-components";

export const AnimatioContainer = styled.div` 
.containerImagem{
    width: 400px;
    display: flex;
    justify-content: center;
}

.containerImagem img{
    width: 70%;  
    animation-name: imagem;
    animation-duration: 4s;
    animation-iteration-count: infinite;  
    }



@keyframes imagem {
    0% {
        transform: translatey(50px);
        filter: drop-shadow(-47px -4px 96px #00FF05);
    }
    50% {
        transform: translatey(40px);
        filter: drop-shadow(-47px -4px 100px rgba(0, 255, 5, 0.24));
       
    }
    100% {
        transform: translatey(50px);        
        filter: drop-shadow(-47px -4px 96px #00FF05);
    }
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

