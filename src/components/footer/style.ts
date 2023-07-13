import styled from "styled-components";

export const Footer = styled.div`

 background-color: var(--color-green4);
 color: white;
 display: flex;
 width: 100%;
 align-items: center;
 font-size: 0.3em;
font-weight: 100;
padding: 15px;
justify-content: center;
flex-direction: column;

   

  @media (max-width: 300px) {
  ul{
    flex-wrap: wrap;
    margin: 0;
    gap: 0;
  }
  
}

@media (min-width: 320px) and (max-width: 480px){
  ul{
    flex-wrap: wrap;
    margin: 0;
    gap: 0;
  }
  
}


@media (min-width: 481px) and (max-width: 768px){
  ul{
    flex-wrap: wrap;
    margin: 0;
    gap: 0;
  }
  
}

@media (min-width: 769px ) and (max-width: 1024px){
  ul{
    flex-wrap: wrap;
    margin: 0;
    gap: 0;
  }
  
}

`