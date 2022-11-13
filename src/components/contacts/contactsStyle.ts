import styled from "styled-components";


export const Container = styled.div`    

width: 100%;
background-color: var(--color-fontescura);

display: flex;
flex-direction: column;
align-items: center;
margin-top: 1em;
padding: 1em;
box-shadow: 0px -7px 10px 1px #000;

h2{
    font-size: 30px;
}

p{
    font-size:14px;
    margin-top: 1em;
}

`

export const ContactCard = styled.ul`
margin-top: 1em;
list-style: none;
display: flex;
gap: 1em;
justify-content: center;

li{
    display: flex;
    gap: 10px;
    background-color: var(--color-grey);
    padding: 0px 5px;
    align-items: center;
}

span{
    color: var(--color-green);
}
h5{
    font-weight: 200;
    font-size: 16px;
}

@media (max-width:400px) {
    flex-wrap: wrap;
    justify-content: center;
}
`
 