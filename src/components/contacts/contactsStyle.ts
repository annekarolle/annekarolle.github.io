import styled from "styled-components";


export const Container = styled.div`    

width: 100%;
//background-color: var(--color-green4);

display: flex;
flex-direction: column;
align-items: center;
margin-top: 1em;
padding: 1em;
position: relative;

h2{
    font-size: 30px;
}

p{
    font-size:14px;
    margin-top: 1em;
}

img{
    width: 100%;
    position: absolute;
    top: 0; 
    left: 0; 
    height: 100%;
    filter: drop-shadow(1px -1px 5px var(--color-green3));    
}


`

export const ContactCard = styled.div`
margin-top: 1em;
list-style: none;
display: flex;
justify-content: center;
position: relative;
flex-direction:column;
align-items: center;
width: 100%;


h4{
    margin: 0;
    margin-top: 1em;
}
p{
    margin-bottom: 1em;
}

ul{
    display: flex;
    list-style: none;
    flex-direction: row;
    gap: 1em;
}

span{
    color: var(--color-green);
}
h5{
    font-weight: 200;
    font-size: 16px;
}

a{
    text-decoration: none;
    color: white;
    display: flex;
    gap: 10px;
    background-color: var(--color-green3);
    padding: 0px 5px;
    align-items: center;
}
a:hover{
    transform: scale(1.05);
}

span:hover{
    filter: brightness(1.5);
}


@media (max-width: 300px) {
    margin-top: 1em;
    ul{
        flex-wrap: wrap;
    justify-content: center;
    }

   
}

@media (min-width: 320px) and (max-width: 480px) {
    margin-top: 1em;
    ul{
        flex-wrap: wrap;
    justify-content: center;
    }

   
}

@media (min-width: 481px) and (max-width: 768px) {
    margin-top: 1em;
    ul{
        flex-wrap: wrap;
    justify-content: center;
    }   
}


@media (min-width: 769px ) and (max-width: 1024px) {
    margin-top: 1em;
    ul{
        flex-wrap: wrap;
    justify-content: center;
    }   
}



`
 