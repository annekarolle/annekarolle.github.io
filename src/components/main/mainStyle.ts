import styled from "styled-components";



export const Container = styled.div`

display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
margin-top: 1em;
color: var(--color-green4);


.container-main-about{
    width: 90%;
    display: flex;
    flex-direction: row;
}

.available{
    color: var(--color-green);
    margin-top: 10px;
    margin-bottom: 10px;
   
}

.sayHi{
    
}

.container-Text{
    width: 50%;
    margin-top: 2em;

}

.container-Text h2{
    font-size: 16px;
    margin: 0;
    color: var(--color-green);
}

.container-Text h1{
    font-size: 2em;
    margin: 0;
    font-weight: lighter;
    margin-bottom: 1em;
}

.container-Text h4{
    font-size: 24px;
    font-weight: 100;
    margin: 0;
}
.container-Text p{
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
    .container-main-about{    width: 90%;
    max-width: 250px;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;}

    .container-Text{
        width: 90%;
    }

    .container-imagem-anne{
        width: 100%;
    }



}

@media (min-width: 320px) and (max-width: 480px) {
    .container-main-about{
    width: 90%; 
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;}

    .container-Text{
        width: 80%;
    }

    .container-imagem-anne{
        width: 80%;
    } 

}

@media (min-width: 481px) and (max-width: 768px){
    .container-main-about{
    width: 90%;
    flex-wrap: wrap;
    align-items: center;
    display: flex;
    flex-direction: column;}

    .container-Text{
        width: 80%;
    }

    .container-imagem-anne{
        width: 80%;
    }
}

@media (max-width: 1199px){

    .container-Text{
        width: 90%;
    }

    .container-imagem-anne{
        width: 80%;
    }
}
`



