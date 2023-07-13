import styled from "styled-components";

export const Skills = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-bottom: 1em;
  
  background-color: var(--color-green2);
  box-shadow: 8px 13px 19px -15px rgba(0,0,0,0.62);
-webkit-box-shadow: 8px 13px 19px -15px rgba(0,0,0,0.62);
-moz-box-shadow: 8px 13px 19px -15px rgba(0,0,0,0.62);
margin-bottom: 3em;

  .containerTech {
    display: flex;
    flex-direction: row-reverse; 
    width: 100%;
    justify-content: center;
    align-items: stretch;
    margin-top: 1em;
   
  }
  .containerTextTech {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    color: var(--color-green1);
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 2em;
    justify-content: space-around;
   
  }

  

  span:hover {
    transform: scale(1.08);
    filter: brightness(1.5);
  }


  @media (min-width: none) and (max-width: 300px) {
    width: 100%;

    .badges {
      width: 90%;
    }
    .containerTextTech {
      width: 80%;
    }
  }

  
`;
