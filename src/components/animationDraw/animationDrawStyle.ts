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



@media (max-width:400px){ 
    width: 100%;  
    .containerImagem img{
    width: 95%;  

  }
}`
