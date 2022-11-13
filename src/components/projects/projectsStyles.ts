import styled from "styled-components";

const Container = styled.div`
max-width: 1100px;
width: 100%;
margin-top: 1em;
display: flex;
flex-direction: column;
align-items: center;

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
    justify-content: space-between;
   
}


.projectContainer{
    margin-top: 1em;
    display: flex;
    flex-direction: row;  
    width: 100%;   
    max-width:500px ; 
    max-height: 250px;
    height: 100%;

    
}



.containerImagem{  
    width :250px;
    height: 250px;  
    object-fit: cover;    
    display: flex;
    align-items: center;
}

.containerImagem img{
    width: 200%;
   
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

@media (max-width: 400px) {

    ul{
        gap: 10px;
        width: 80vw;
    }
    .projectContainer{
        justify-content: center       
    }

    .containerImagem{  
    width :150px;
    height: 150px;  
    object-fit: cover;    
    display: flex;
    align-items: center;
}

.containerImagem img{
    width: 200%;
   
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


}
`

export default Container