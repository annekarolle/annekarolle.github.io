import styled from "styled-components";

const Container = styled.div` 
width: 100%;
margin-top: 1em;
display: flex;
flex-direction: column;
align-items: center;


h4{
    color: var(--color-green2);
    margin-bottom: 1em;
    margin-top: 1em;
}

h5{
    margin-bottom: 10px;
    text-align: left;
    
}

p{
    font-size: 14px;
    margin-bottom: 10px;
}
ul{
    list-style: none;
    padding: 0;
    display: flex;
    width: 80%;
    gap: 1em;
 
    flex-wrap: wrap;
    justify-content: center;

    /* @media (max-width: 1060px){
      flex-wrap: nowrap;
      overflow-x: scroll;
      width: 80%;
      height: 300px;
      justify-content: flex-start;
    } */
   
}

 



`

export default Container