import styled from "styled-components";


export const Container = styled.div`

width: 100vw;
/* height: 10vh; */
position: relative;



.navegador{
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100vw;
align-content: center;
align-items: center;
//margin-top: 1em;
position: relative;
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

    @media (max-width: 400px) {

        height: 20vh;
    .navegador{
        flex-direction: column;
    }

    img{
        width: 15em;
    }

    

   
}

`