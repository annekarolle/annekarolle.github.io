import styled from "styled-components";

const Container = styled.div`
max-width: 1100px;
width: 100%;
margin-top: 1em;
display: flex;
flex-direction: column;
align-items: center;


h4{
    color: var(--color-green2);
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
    width: 100%;
    gap: 1em;
 
    flex-wrap: wrap;
    justify-content: center;
   
}


.projectContainer{
    margin-top: 1em;
    display: flex;
    flex-direction: row;  
    width: 100%;   
    max-width:500px ; 
    max-height: 250px;
    height: 100%;
    background-color: var(--color-green4);
    outline: 5px solid var(--color-white);
    box-shadow: 10px 5px 19px -12px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 5px 19px -12px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 5px 19px -12px rgba(0,0,0,0.75);
    
}



.containerImagem{  
    width :250px;
    height: 250px;  
       overflow: hidden;
    display: flex;
    align-items: center;
}

.containerImagem img{
    width: 200%;
    object-fit: cover; 
   
}


.containertext{
    width: 50%;
    background-color: #000000ba;
    padding: 15px;
}

.containertext:hover{
 cursor: pointer;
 background-color: #000000cc;
 transform: scale(1.05);
}

a{
    color: var(--color-green);
    margin-right: 1em;
}

a:hover{
    filter: brightness(2);
    transform: scale(1.05);
}

.container-social{
    display: flex;
    flex-direction: row;
}


@media (max-width: 300px) {
  .containertext {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;   
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    background-color   :var(--color-green4) ;
    
  }
   
  
  .containerImagem {
   display    :none ;

  }
  
  .containerImagem img {
    width: 100%; 
    object-fit: contain;

  }
  
  ul {
    gap: 10px;
    width: 80vw;
  }
  
  .projectContainer {
    justify-content: center;
    position: relative;
    width: 100%;
    height: 150px;
  }
}


@media (min-width: 320px) and (max-width: 480px) {
  .containertext {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;   
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
        
  }
   
  .containerImagem {
    overflow: hidden;
    width :100%;    

  }
  
  .containerImagem img {
    width: 100%; 
    object-fit: contain;

  }
  
  ul {
    gap: 10px;
    width: 80vw;
  }
  
  .projectContainer {
    justify-content: center;
    position: relative;    
    width: 100%;  
  }
}

@media (min-width: 481px) and (max-width: 768px) {

  .containertext {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;   
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* background-color: var(--color-green4); */    
  }

  .projectContainer {
    justify-content: center;
    position: relative;
    height: 250px; 
    height: 250px;
  }

  .containerImagem {
    overflow: hidden;
    width :100%;    

  }
  
  .containerImagem img {
    width: 100%; 
    object-fit: contain;

  }
  
  ul {
    gap: 10px;
    width: 80vw;
  }
  
  
}

@media (max-width: 1033px) {
  
   flex-wrap: wrap;
   align-items: center;
   
    .projectContainer{
        justify-content: center       
    }
    ul{
        gap: 10px;
        width: 80vw;
        justify-content: center;
    }
}


@media (min-width: 769px ) and (max-width: 1024px){
  .containertext {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;   
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--color-green4);
    
  }
   
  
  .containerImagem {
    overflow: hidden;
    width :100%;    

  }
  
  .containerImagem img {
    width: 100%; 
    object-fit: contain;

  }
  
  ul {
    gap: 10px;
    width: 80vw;
  }
  
  .projectContainer {
    justify-content: center;
    position: relative;
    height: 150px; 
  }
}

`

export default Container