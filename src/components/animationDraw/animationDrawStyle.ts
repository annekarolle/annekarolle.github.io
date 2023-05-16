import styled from "styled-components";

export const ContainerAnimationDraw = styled.div`


.containerImagem{
    width: 100%;  
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
   
       
  }

  .containerImagem img{
    width: 50%;  

  }

  .icon, .eu{
    position: absolute
  }


  @media  (max-width: 300px){ 
    width: 100%;  
    .containerImagem img{
    width: 95%;  

  }}


@media (min-width: 320px) and (max-width: 480px){ 
    width: 100%;  
    .containerImagem img{
    width: 95%;  

  }}


  @media (min-width: 481px) and (max-width: 768px){ 
    width: 100%;  
    .containerImagem img{
    width: 95%;  

  }}

  @media (min-width: 769px ) and (max-width: 1024px)
  { 
    width: 100%;  
    .containerImagem img{
    width: 95%;  

  }}
`
