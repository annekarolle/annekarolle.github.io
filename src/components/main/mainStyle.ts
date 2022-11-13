import styled from "styled-components";


export const Container = styled.div`

display: flex;
flex-direction: row;
max-width: 1110px;
width: 100vw;
justify-content: center;
align-items: center;
margin-top: 1em;

.available{
    color: var(--color-green);
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 24px;
}


.containerText{
    width: 50%;

}

.containerText h1{
    font-size: 2em;
    margin: 0;
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


.containerImagem{
    width: 50%;
}

.containerImagem img{
    width: 80%;  
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




@media (max-width: 400px) {
    width: 90vw;
    max-width: 400px;
    flex-wrap: wrap;
    display: flex;

    .containerText{
        width: 90vw;
    }

    .containerImagem{
        display: none;
    }
}
    

.iconsContainer{
    display: flex;
    gap: 1rem;   
}

a{
    color: var(--color-green);
}

a:hover{
    filter: brightness(2);
    transform: scale(1.05);
}
`



