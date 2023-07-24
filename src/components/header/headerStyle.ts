import styled from "styled-components";


export const Container = styled.div`

    width: 100vw; 
    background-color: var(--color-green4);
    position: fixed;  
    top: 0;  
    left: 0;  
    z-index: 999; 

.navegador{
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100vw;
align-content: center;
align-items: center;
 
margin-top: 1em;
}


.bg{
    width: 100%;
    position: absolute;
    top: 0; 
    left: 0; 
    height: 100%; 
    filter: drop-shadow(1px 1px 5px var(--color-green3));
   
}




img{
    width: 10em;  
    
}

.menuNav{
    display:flex;
        gap: 15px;  
        align-content: center; 
        align-items: center;
        margin-bottom: 1em;
}
    
    ul{
        list-style: none;
        display:flex;
        gap: 15px;  
        align-content: center; 
        align-items: center;

    }

    li{
        display: flex;
        align-items: center;
    }

    a{
        text-decoration: none;
        color: var(--color-green1);
        font-size: 18px;
    }

    .gitHub{
        font-size: 26px;
    }

    a:hover{
        filter: brightness(2);       
    }

    @media (max-width: 300px) {

height: 20vh;
.navegador{
flex-direction: column;
}



img{
width: 15em;
}

}

    @media (min-width: 320px) and (max-width: 480px) {

        height: 20vh;
    .navegador{
        flex-direction: column;
    }



    img{
        width: 15em;
    }
   
}


@media (min-width: 481px) and (max-width: 768px) {

height: 20vh;
.navegador{
flex-direction: column;
}



img{
width: 15em;
}}

@media (min-width: 769px ) and (max-width: 1024px){
    height: 20vh;
.navegador{
flex-direction: column;
}



img{
width: 15em;
}

}

`