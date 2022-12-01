import styled from 'styled-components';



export const SectionOne = styled.section`

background-color:  #000002;
width: 100%;
height: 900px;


@media(max-width:960px){
   height: 740px;
}

h1{
    color: white;
    font-family: personalizada;
    font-size: 3.8rem;
    text-align: center;
    text-shadow: 2px 2px 4px black;
    position: relative;
    top: 130px;
    box-sizing: border-box;
}

@media(max-width:960px){

    h1{
        top: 130px;
        font-size: 3rem;
        
    }
}

 .Textobotao:hover{
    
       color: #04f804;
 
 }

`

export const ContainerImg = styled.div`
margin-top:60px;

img{
    display: block; 
    margin: auto; 
    margin-top: -100px;
    width: 70%;
    object-fit: cover;
}

@media (max-width:960px){   
    
       
      img{
       width:100%;
       height:50%;
       display:block;
       margin-top:-80px;
    }
`

export const ContainerButton = styled.div`
display: block;
position: relative;
top: 140px;

margin:auto;
    

    @media(max-width:960px){ 
        display: block;
        position: relative;
        top: 135px;
        margin:auto;
      
    

      
`



export const Button = styled.button`

    cursor: pointer;
    border: none;
    background-color: #16161a;
    color: #FF014F;
    font-size: 24pt;
    font-family: personalizada, Arial, Helvetica, sans-serif;
    .Testebotao:hover{
        color: #04f804;
    }

`