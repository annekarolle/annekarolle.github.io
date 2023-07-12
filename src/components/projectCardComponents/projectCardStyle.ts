import styled from "styled-components";

export const ListProject = styled.li`
 
display: flex;
justify-content: flex-end;
width: 350px;
height: 250px;
flex-direction: row;

outline: 5px solid var(--color-white);
box-shadow: 10px 5px 19px -12px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 5px 19px -12px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 5px 19px -12px rgba(0,0,0,0.75);


.containertext{
   display: flex;
   flex-direction: column; 
    justify-content: center;
    width: 100%;  
    height : 100%; 
 
    padding-left: 0.5em;
    padding-right: 0.5em;
}

.containertext.FullStack.Project{
 background-color: var(--color-green4);
}
.containertext.FrontEnd.Project{
 background-color: var(--color-green3);
}


.containertext.BackEnd.Project{
 background-color: var(--color-green2);
}
.container-imagems{
    width: 100%; 
    margin-top:5px;
    display: flex;
    flex-direction: row; 
    gap: 10px;
}

.miniature-imagem{
    width: 40px;
    height:  40px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    cursor: pointer;
}

/* .miniature-imagem:hover{
   width: 100vw;
   height: 100vh;

} */

.miniature-imagem img{
    width: 200%; 
    object-fit: contain;
}

 
 

h2{
    font-size: 14px;
    color: var(--color-green1);
}
h5{
     font-size: 16px;
   color: var(--color-white); 
}

a{
    text-decoration: none;
    color: var(--color-green1);
    font-size: 20px;
}
p{
    font-size: 12px;
}

.container-imagems-modal{
    display: flex;
  flex-direction: row;
  gap: 10px;
  display: flex; 
justify-content: center;
margin-top: 1em;  

}

.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.container-imagem-principal{
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    background-color:  var(--color-white);
 border: 5px solid var(--color-white);
     
}

.modalImage { 
  width: 100%;
 
 
}



.close {
  color: #fff;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

`