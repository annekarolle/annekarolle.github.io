import styled from "styled-components";



export const Container = styled.div`

display: flex;
flex-direction: row;
width: 80%;
justify-content: center;
align-items: center;
margin-top: 1em;
color: var(--color-green4);


.available{
    color: var(--color-green);
    margin-top: 10px;
    margin-bottom: 10px;
   
}

.sayHi{
    
}

.containerText{
    width: 50%;
    margin-top: 2em;

}

.containerText h2{
    font-size: 16px;
    margin: 0;
    color: var(--color-green);
}

.containerText h1{
    font-size: 2em;
    margin: 0;
    font-weight: lighter;
    margin-bottom: 1em;
}

.containerText h4{
    font-size: 24px;
    font-weight: 100;
    margin: 0;
}
.containerText p{
    font-size: 16px;
    margin-bottom: 10px;
}


.containerAbout{
    /* background-color: var(--color-green);
    border-radius: 163px 0px 111px 200px;
-webkit-border-radius: 163px 0px 111px 200px;
-moz-border-radius: 163px 0px 111px 200px;
padding: 1em; */
}

.container-imagem-anne{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-imagem-anne img{
    width: 80%;
}

   

.iconsContainer{
    display: flex;
    gap: 1rem;    
}

a{   
    color: var(--color-green);
    font-size: 1em;  
}

a:hover{
    filter: brightness(2);
    transform: scale(1.05);
}




@media (max-width: 300px) {
    width: 90%;
    max-width: 250px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;

    .containerText{
        width: 90vw;
    }

    .container-imagem-anne{
        width: 100%;
    }



}

@media (min-width: 320px) and (max-width: 480px) {
    width: 90%; 
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;

    .containerText{
        width: 80vw;
    }

    .container-imagem-anne{
        width: 80%;
    } 

}

@media (min-width: 481px) and (max-width: 768px){
    width: 90%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;

    .containerText{
        width: 80vw;
    }

    .container-imagem-anne{
        width: 80%;
    }
}

@media (max-width: 1199px){

    .containerText{
        width: 90%;
    }

    .container-imagem-anne{
        width: 80%;
    }
}
`



