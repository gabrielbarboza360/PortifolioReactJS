import React from 'react';
import styled from "styled-components";




export const SectionThree = styled.section`
width: 100%;
height: 700px;
background-color:#0a0a0a;

@media (max-width: 960px){
        width: 100%;
        height: 1900px; }

     h1{
        display: flex;
        font-family: personalizada, Arial, Helvetica, sans-serif;
        text-decoration: underline;
        padding: 30px;
        font-size: 2rem;
        align-items: center;
        justify-content: center;
        color: white; 
        margin-bottom: 40px;
     }

`

export const ContainerSection = styled.section`
@media (max-width: 960px){

    grid-template-columns: repeat( auto-fit, minmax(320px, 1fr));
    row-gap: 40px;
}

display: inline-grid;
grid-template-columns: repeat( auto-fit, minmax(260px, 1fr));
grid-template-rows: repeat( auto-fit, minmax(220px, 1fr));
column-gap: 20px;
 row-gap: 10px;
  width: 100%;

`


export const ContainerProjeto = styled.div`
.projeto{
background-color: #121214;
box-shadow: 10px 9px 13px #340f0f;
border: 1px solid;
width: 250px;
height: 360px;
margin: auto;
border-radius: 5px;
cursor: pointer;}

.projeto:hover{
    transform: scale(1.1);

}

a{
    text-decoration:none;
}

`



export const ContainerImg = styled.section`
width: 100%;

img{
    width: 100%;
    height: 210px;
    object-position: left;
    object-fit: cover;
}


`
export const ContainerText = styled.section`
display: block;
width: 100%;

h1{
    color: #720528;
    text-shadow: 2px 2px 2px black;
    text-align: center;
    font-size: 1.6rem;
    padding: 0px;
    margin: 0px;
    margin-top: 5px;
    margin-bottom: 10px;

}

h2{
    color: #b18989; 
    text-align: initial;
    font-size: 1rem;
    margin-left: 5px;
}

h3{
    color: #b18989;
    margin-left: 5px;
    font-size: 1rem;
    text-align: initial;
}

`