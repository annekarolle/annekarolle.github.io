import styled from "styled-components";

export const Skills = styled.div`

max-width: 1100px;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;


h4{
    margin-bottom: 10px;
}

.badges{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
}

img:hover{
    transform: scale(1.02);
}

@media (max-width: 400px) {

    width: 90vw;

    .badges{
        width: 90vw;
        justify-content: space-between;

    }

   
}
`